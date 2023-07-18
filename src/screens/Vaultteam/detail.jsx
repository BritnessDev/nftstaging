import Carousel from "react-grid-carousel"
import {
  Button,
  Col,
  Input,
  Image,
  Row,
  Space,
  Tabs,
  Typography,
  Layout,
  Card,
  Drawer,
  Upload,
} from "antd"
import { PlusCircleOutlined, CloseOutlined, PlusSquareOutlined, MinusSquareOutlined } from "@ant-design/icons"
import React, { useState, useEffect, useMemo, useCallback } from "react"
import { useParams, useLocation, useHistory } from "react-router-dom"
import { useMedia } from "hooks/useMedia"
import "./style.css"
import { BackButton, ArrowBtn } from "./components/basic"
import { PlayerCard, PlayerStats, PlayerStat } from "./components/playcard"
import {
  CssDivs,
  CssDiv,
} from "components/CssStyledComponent/CssStyledComponent"
import Item from "antd/lib/list/Item"
import { SearchOutlined } from "@ant-design/icons"
import { tokenURI, updateTokenURI } from "utils/helpers/ylnft721"
import { tokenURI as tokenURI1155, burnBatch, setApprovalForAll } from "utils/helpers/ylnft1155"
import axios from "axios"
import { Loading } from "notiflix"
import { revertNftFromVaultToWalletERC721, revertNftFromVaultToWalletERC1155 } from "utils/helpers/subvault"
import { useMoralisWeb3Api, useMoralis } from "react-moralis"
import { storeNftFromWalletToVaultERC721, storeNftFromWalletToVaultERC1155 } from "utils/helpers/ylvault"
import { approve } from "utils/helpers/ylnft721"
import { approve as approveYLT } from "utils/helpers/ylt"

const priceList = [
  {
    id: "gold",
    name: "#1",
    price: "100000",
    bgImg: "url(/price_bg_1.png)",
  },
  {
    id: "silver",
    name: "#2",
    price: "50000",
    bgImg: "url(/price_bg_2.png)",
  },
  {
    id: "copper",
    name: "#3",
    price: "15000",
    bgImg: "url(/price_bg_3.png)",
  },
]

const tabList = [
  {
    label: "12 Hours",
    price: 15000,
  },
  {
    label: "24 Hours",
    price: 30000,
  },
  {
    label: "3 DAYS",
    price: 45000,
  },
  {
    label: "WEEK",
    price: 90000,
  },
]

const TOKEN_ADDRESS = [
  process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
  process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS,
]

const TeamDetail = ({ moralis }) => {
  let inputRef
  const history = useHistory()
  const location = useLocation()
  const Web3Api = useMoralisWeb3Api()
  const { user, isAuthenticated, Moralis, web3 } = useMoralis()
  const isMobile = useMedia("(max-width: 640px)")
  const params = useParams()
  const [open, setOpen] = useState(false)
  const [notifyOpen, setNotifyOpen] = useState("")
  const [loaded, setLoaded] = useState(false)
  const [type, setType] = useState("baseball")
  const [teamPower, setTeamPower] = useState({
    power: 0,
    speed: 0,
    energy: 0,
    luck: 50,
    wizzardy: 50,
  })
  const [players, setPlayers] = useState([])
  const [teamInfo, setTeamInfo] = useState({
    logo: "/images/vaultteam/YLT_teamlogo.png",
    subaddress: "",
    address: "",
    category: "",
    gamer: "",
    from: "",
    createdAt: "",
    teamname: "",
  })

  const [sideContents, setSideContents] = useState("get reward")
  const [modalInfo, setModalInfo] = useState(null)
  const [delIndex, setDelIndex] = useState(0)
  const [addlist, setAddlist] = useState([])
  const [erc721, setErc721] = useState([])
  const [addBstlist, setAddBstlist] = useState([])
  const [delBstlist, setDelBstlist] = useState([])
  const [erc1155, setErc1155] = useState([])
  const [teamBooster, setTeamBooster] = useState([])

  const openModal = (a, info) => {
    setModalInfo(info)
    setSideContents(a)
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  const readTeams = useCallback(
    async (vault) => {
      Loading.standard()
      try {
        const v = await moralis?.fn.Cloud.run("getOneTeamData", {
          vault: vault,
        })
        var tb = [];
        var bstList = []
        for (var k = 0; k < v.data_booster.length; k++) {
          const attr = v.data_booster[k].attributes
          const metaUri = await moralis?.fn.executeFunction(
            tokenURI1155(attr.nftID),
          )
          const res = await axios.get(metaUri)
          const meta = res.data
          const n = {
            vaultaddress: attr.vault,
            subaddress: attr.vault,
            gamer: attr.gamer,
            tokenId: attr.nftID,
            meta: meta,
            amount: attr.amount
          }
          tb.push(n)
          const bst = {
            id: attr.nftID,
            amount: 0,
            address: attr.vault
          }
          bstList.push(bst)
        }
        setDelBstlist(bstList)
        setTeamBooster(tb)
        
        // calculate the team property based on player average.
        const pData = []
        var power = 0
        var speed = 0
        var energy = 0
        for (var i = 0; i < v.data_players.length; i++) {
          const attr = v.data_players[i].attributes
          const metaUri = await moralis?.fn.executeFunction(
            tokenURI(attr.tokenId),
          )
          const meta = await axios.get(metaUri)
          const n = {
            vaultaddress: attr.address,
            subaddress: attr.vault,
            from: attr.from,
            gamer: attr.gamer,
            tokenId: attr.tokenId,
            depositTime: attr.depositTime,
            meta: meta.data,
          }
          power = power + meta.data.personal.power * 1
          speed = speed + meta.data.personal.speed * 1
          energy = energy + meta.data.personal.energy * 1
          pData.push(n)
        }
        
        // calculate the team additional property plus based on booster.
        var enery_plus = 1;
        var speed_plus = 1;
        var power_plus = 1;
        for (var j = 0; j < tb.length; j++) {
          const amount = tb[j].amount * 1;
          const b_c = tb[j].meta.boostedCharact;
          const b_a = tb[j].meta.boostedAmount;
          if (b_c == "Movement" || b_c == "Energy") {
            enery_plus = enery_plus * ((100 + b_a * 1) / 100) ** amount;
          }
          if (b_c == "Speed") {
            speed_plus = speed_plus * ((100 + b_a * 1) / 100) ** amount;
          }
          if (b_c == "Power") {
            power_plus = power_plus * ((100 + b_a * 1) / 100) ** amount;
          }
        } 
       
        // sum the team property based on player and booster info.
        v.data_players.length > 0 &&
          setTeamPower({
            power: Math.ceil(power * power_plus / v.data_players.length),
            speed: Math.ceil(speed * speed_plus / v.data_players.length),
            energy: Math.ceil(energy * power_plus / v.data_players.length),
            luck: 50,
            wizzardy: 50,
          })
        setPlayers(pData)

        const attr = v.data_team.attributes
        const t = {
          logo: attr.logo,
          subaddress: attr.subaddress,
          address: attr.address,
          category: attr.category,
          gamer: attr.gamer,
          from: attr.from,
          createdAt: attr.createdAt,
          teamname: attr.teamname,
        }
        setTeamInfo(t)
        readNfts(attr.category)
        Loading.remove()
      } catch (e) {
        console.log(e)
        Loading.remove()
      }
    },
    [moralis],
  )

  useEffect(() => {
    if (params.type != null && params.type != undefined) {
      setType(params.type)
    }
    if (
      params.address != null &&
      params.address != undefined &&
      moralis != null &&
      loaded == false
    ) {
      setLoaded(true)
      readTeams(params.address)
    }
  }, [params.type, moralis])

  const readNfts = async (category) => {
    if (isAuthenticated) {
      const options = {
        chain: "bsc testnet",
        token_addresses: TOKEN_ADDRESS,
        address: user?.attributes.ethAddress,
      }

      Web3Api.account.getNFTs(options).then(async (nfts) => {
        nfts = nfts?.result.filter((nft) => nft.token_uri)
        const mintedNFT = await Promise.all(
          nfts.map(async (item) => {
            const metaTokenUri =
              item?.token_uri.substring(8, 12) == "ipfs"
                ? item.token_uri.replace(/^.{28}/g, "https://gateway.moralisipfs.com",)
                : item.token_uri
            const meta = await axios.get(metaTokenUri)
            const imgSrc = meta.data.image

            const price = "1 BNB"
            const dprice = "300"
            const nft = {
              id: item.token_id,
              imgSrc: imgSrc,
              sport: meta.data.sport,
              title: meta.data.name,
              price: price, //BNB
              priceUSD: dprice,
              brickColor: "blue",
              address: item.token_address,
              type: item.contract_type,
              meta: meta.data,
              amount: item.amount
            }
            return nft
          }),
        )
        var tmp721 = []
        var tmp1155 = []
        var bstList = []
        mintedNFT.forEach((n) => {
          if (n.type == "ERC721") {
            if (n.sport == category) {
              tmp721.push(n)
            }
          } else {
            if (n.sport == category) {
              tmp1155.push(n)
              const bst = {
                id: n.id,
                amount: 0
              }
              bstList.push(bst)
            }
          }
        })
        setErc721(tmp721)
        setErc1155(tmp1155)
        setAddBstlist(bstList)

      })
    }
  }

  const onTabChange = (key) => {
    console.log(key)
  }

  const fileUpload = async (event) => {
    const data = event
    const image_ipfs = new Moralis.File(data.name, data)
    const img = await image_ipfs.saveIPFS()
    const image = "https://gateway.moralisipfs.com/ipfs/" + img._hash
  }

  const createTeam = async () => { }

  const takeReward = async () => { }

  const { Search } = Input
  const onSearch = (value) => console.log(value)
  const removeItem = (e, index) => {
    if (e != undefined) {
      setDelIndex(index)
      openModal("remove a player", e)
    }
  }
  const openinfo = (e) => {
    if (e != undefined) {
      openModal("playerinfo", e)
    }
  }
  const deletePlayer = async (e) => {

    try {
      Loading.standard()
      const transaction = await moralis?.fn.executeFunction(
        revertNftFromVaultToWalletERC721(
          e.subaddress,
          [Number(e.tokenId)],
          e.meta.sport,
        ),
      )
      const res = await transaction.wait()
      var p = players
      p.splice(delIndex)
      setPlayers(p)
      setSideContents("remove a player")
      setNotifyOpen("removed")
      Loading.remove()
      if (res.status) {
        console.log()
      }
    } catch (e) {
      Loading.remove()
      setSideContents("remove a player")
      setNotifyOpen("cantremove")
      console.log(e)
    }
  }

  const select2add = (i) => {
    if (addlist.includes(i)) {
      var d = addlist
      var index = d.indexOf(i)
      d.splice(index, 1)
      setAddlist([...d])
    } else {
      setAddlist([...addlist, i])
    }
  }

  const addPlayer = async () => {
    if (addlist.length == 0) {
      return
    }
    var addPlayer = []
    addlist.forEach((i) => {
      addPlayer.push(erc721[i].id)
    })

    try {
      Loading.standard()
      for (var i = 0; i < addPlayer.length; i++) {
        const transaction = await Moralis.executeFunction(
          approve(process.env.REACT_APP_YLVAULT_CONTRACT_ADDRESS, addPlayer[i]),
        )
        await transaction.wait()
      }
      const transaction = await Moralis.executeFunction(
        storeNftFromWalletToVaultERC721(
          user.attributes.ethAddress,
          addPlayer,
          "teamName",
          "logo",
        ),
      )
      await transaction.wait()
      Loading.remove()
      window.location.reload()
    } catch (e) {
      Loading.remove()
      console.log(e)
    }
  }

  const boosterPlus = (item, mode) => {
    const id = item.id
    var bstList = addBstlist
    bstList.forEach((it, index) => {
      if (it.id == id) {
        if (mode == 0) {
          if (bstList[index].amount < item.amount) {
            bstList[index].amount++;
          }
        } else {
          if (bstList[index].amount > 0) {
            bstList[index].amount--;
          }
        }
      }
    })
    setAddBstlist([...bstList])
  }

  const boosterMinus = (item, mode) => {
    const id = item.tokenId
    var bstList = delBstlist
    bstList.forEach((it, index) => {
      if (it.id == id) {
        if (mode == 0) {
          if (bstList[index].amount < item.amount) {
            bstList[index].amount++;
          }
        } else {
          if (bstList[index].amount > 0) {
            bstList[index].amount--;
          }
        }
      }
    })
    setDelBstlist([...bstList])
  }

  const addBooster = async () => {
    try {
      Loading.standard()
      const tr_approve = await Moralis.executeFunction(
        setApprovalForAll(
           process.env.REACT_APP_YLVAULT_CONTRACT_ADDRESS,
           true
        ),
      )
      await tr_approve.wait()

      for (var i = 0; i < addBstlist.length; i++) {
        if (addBstlist[i].amount > 0) {
          const tr = await Moralis.executeFunction(
            storeNftFromWalletToVaultERC1155(
              user.attributes.ethAddress,
              addBstlist[i].id,
              addBstlist[i].amount,
              teamInfo.category
            ),
          )
          await tr.wait()
        }
      }
      Loading.remove()
      window.location.reload()
    } catch (e) {
      Loading.remove()
      console.log(e)
    }
  }

  const removeBooster = async () => {
    try {
      Loading.standard()
      for (var i = 0; i < delBstlist.length; i++) {
        if (delBstlist[i].amount > 0) {
          const tr = await Moralis.executeFunction(
            revertNftFromVaultToWalletERC1155(
              delBstlist[i].address,
              delBstlist[i].id,
              teamInfo.category,
              delBstlist[i].amount,
            ),
          )
          await tr.wait()
        }
      }
      Loading.remove()
      window.location.reload()
    } catch (e) {
      Loading.remove()
      console.log(e)
    }
  }

  const addBooster2Player = async () => {  

    try {
      Loading.standard();
      const nft721Id = modalInfo.tokenId;
      const subAddress = modalInfo.subaddress;
      const vaultAddress = modalInfo.vaultaddress;
      var meta = modalInfo.meta;
      var power = meta.personal.power;
      var energy = meta.personal.energy;
      var speed = meta.personal.speed;    

      var burnIds = [];
      var burnAmount = [];
      for (var i = 0; i < addBstlist.length; i++) {
        if (addBstlist[i].amount > 0) {
          burnIds.push(addBstlist[i].id)
          burnAmount.push(addBstlist[i].amount)
          erc1155.forEach((booster, index) => {
            if (booster.id == addBstlist[i].id) {
              const b_c = booster.meta.boostedCharact;
              const b_a = booster.meta.boostedAmount;
              if (b_c == "Movement" || b_c == "Energy") {
                energy = energy * ((100 + b_a * 1) / 100) ** addBstlist[i].amount;
              }
              if (b_c == "Speed") {
                speed = speed * ((100 + b_a * 1) / 100) ** addBstlist[i].amount;
              }
              if (b_c == "Power") {
                power = power * ((100 + b_a * 1) / 100) ** addBstlist[i].amount;
              }
            }
          })
        }
      }
      meta.personal.power = power;
      meta.personal.energy = energy;
      meta.personal.speed = speed;
      const tr = await Moralis.executeFunction(
        burnBatch(
          user.attributes.ethAddress,
          burnIds,
          burnAmount,
        ),
      )
      const burn_res = await tr.wait()
      if (burn_res.status) { 
        const options = JSON.stringify(meta)
        const file = new Moralis.File("file.json", {
          base64: btoa(options),
        })
        const response = await file.saveIPFS()
        const metadata_hash = "https://gateway.moralisipfs.com/ipfs/" + response._hash
        const update_uri = await Moralis.executeFunction(
          updateTokenURI(
            user.attributes.ethAddress,
            nft721Id,
            metadata_hash,
          ),
        )
        const update_uri_res = await update_uri.wait()
        if(update_uri_res.status){
          window.location.reload()
        }else{
          console.log("Error")
        }
        Loading.remove()
      }
    } catch (e) {
      Loading.remove()
      console.log(e)
    }  
  }

  return (
    <>
      <Layout className="layout team-detail">
        <Row justify="start">
          <Col span={24}>
            <BackButton onClick={() => history.goBack()}>Previous</BackButton>
            <input
              ref={(refParam) => (inputRef = refParam)}
              type="file"
              onChange={(e) => fileUpload(e.target.files[0])}
              style={{ display: "none" }}
            />
          </Col>
        </Row>
        <Row justify="end" align="middle" className="maring-top-20">
          <Col xs={24} md={12} lg={9} className="align-center">
            <Row type="flex" align="middle" justify="center">
              <img
                className="team-detail-logo margin-right-10"
                src={teamInfo.logo}
                alt="YTL_team_logo"
              />
              <h1 className="team-title">{type}</h1>
            </Row>
          </Col>
          <Col xs={24} md={12} lg={9} className="align-center">
            <span className="level-type margin-right-10">
              power
              <span className="level-value margin-left-10">
                {teamPower.power}
              </span>
            </span>
            <span className="level-type margin-right-10">
              speed
              <span className="level-value margin-left-10">
                {teamPower.speed}
              </span>
            </span>
            <span className="level-type margin-right-10">
              energy
              <span className="level-value margin-left-10">
                {teamPower.energy}
              </span>
            </span>
          </Col>
          <Col xs={24} lg={6} className="align-right">
            <Space wrap>
              <Button type="primary" className="primary-btn " block
                onClick={() => {
                  openModal("booster", "")
                }}
              >
                BOOSTERS
              </Button>
              <Button type="primary" className="primary-btn " block>
                DISBAND
              </Button>
            </Space>
          </Col>
        </Row>
        <Row type="flex" className="maring-top-20">
          <Col sm={24} md={24} lg={24} className="d-flex overflowX">
            <div className="player-card-wrap">
              <p className="wrap-title">Trainer</p>
              <div className="h-gap">
                <PlayerCard
                  sportBg={"#ffffff"}
                  removeItem={removeItem}
                  openinfo={openinfo}
                />
              </div>
            </div>
            <div className="player-card-wrap-white">
              <p className="wrap-title">{teamInfo.category}</p>
              <div className="d-flex">
                {players.map((item, index) => {
                  return (
                    <div key={index} className="h-gap">
                      <PlayerCard
                        sportBg={"#ffffff"}
                        removeItem={removeItem}
                        openinfo={openinfo}
                        info={item}
                        index={index}
                      />
                    </div>
                  )
                })}
                <div className="h-tap">
                  <Card
                    bordered={true}
                    className="add-card"
                    onClick={() => openModal("add player", "")}
                  >
                    <PlusCircleOutlined className="logo-add" />
                    <div className="add-logo maring-top-10">add player</div>
                  </Card>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="maring-top-30" gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="quick-match-btn d-flex maring-top-10">
              <img
                className="quick-logo margin-right-10"
                src="/images/vaultteam/quickmatch.png"
                alt="YTL_team_logo"
              />
              <p className="quick-btn-text">Quick Match</p>
            </div>
            <p className="sub-team-title maring-top-40">TOURNAMENTS</p>
            <div className="league-carousel">
              <Carousel
                rows={1}
                cols={1}
                showDots={true}
                loop={true}
                centerMode={true}
                arrowLeft={<ArrowBtn type="left">&larr;</ArrowBtn>}
                arrowRight={<ArrowBtn type="right">&rarr;</ArrowBtn>}
                dotColorActive="#ffffff"
                dotColorInactive={"#F5F5F0"}
                autoplay={3000}
              >
                {[0, 1, 2, 3].map((item, index) => (
                  <Carousel.Item key={index} className="ghost">
                    <div key={index} className="cs-wrap">
                      <img className="cs-img" src="/Tournaments.png" alt="" />
                      <div className="cs-info-wrap">
                        <div className="cs-f-wrap">
                          <p className="cs-date">19 april 2022</p>
                          <p className="cs-type">SOCCER</p>
                        </div>
                        <p className="cs-info">
                          Youth League Champions Tournament
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="prize-wrap">
                <p className="prize">Prizes</p>

                <Row gutter={16}>
                  {priceList.map((item) => (
                    <Col key={item.id} md={8} xs={24}>
                      <CssDivs
                        backgroundImage={item.bgImg}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        borderRadius="8px"
                        display="flex"
                        flexDirection="column"
                        gap="4px"
                        justifyContent="center"
                        alignItems="center"
                        pt="10px"
                        pb="10px"
                      >
                        <Typography.Title
                          level={3}
                          style={{ color: "white", marginBottom: "0rem" }}
                        >
                          {item.name}
                        </Typography.Title>
                        <CssDivs
                          border="none"
                          borderTop="1px solid white"
                          width="80%"
                        />
                        <Space>
                          <Image
                            width={25}
                            src="/yourlife.png"
                            preview={false}
                          />
                          <Typography.Title
                            level={3}
                            style={{ color: "white", marginBottom: "0rem" }}
                          >
                            {item.price}
                          </Typography.Title>
                        </Space>
                      </CssDivs>
                    </Col>
                  ))}
                  <Col xs={24} md={24} className="maring-top-20">
                    <Button type="primary" className="primary-btn " block>
                      ENROLL
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} className="maring-bt-30">
            <div className="maring-top-10">
              <img className="camp-img" src="/training_camp.png" alt="" />
              <p className="camp-text">Training camp</p>
              <div className="prize-wrap">
                <Row>
                  <Col sm={24} md={24} lg={24} className="d-flex overflowX">
                    <div className="trainer-item">
                      <img
                        className="trainer-img"
                        src="/player.png"
                        alt="playerImage"
                      />
                      <div className="reward-btn-wrap">
                        <p className="trainer-time">12h 28m</p>
                      </div>
                    </div>

                    <div className="trainer-item">
                      <img
                        className="trainer-img"
                        src="/player.png"
                        alt="playerImage"
                      />
                      <div className="reward-btn-wrap">
                        <Button
                          type="primary"
                          className="primary-btn"
                          block
                          onClick={() => openModal("get reward", "")}
                        >
                          Get reward
                        </Button>
                      </div>
                    </div>

                    {players.map((item, index) => {
                      return (
                        <div key={index} className="trainer-item">
                          <Card bordered={true} className="trainer-card">
                            <PlusCircleOutlined className="logo-add" />
                            <div className="add-logo">add player</div>
                          </Card>
                        </div>
                      )
                    })}
                  </Col>
                  <Col
                    sm={24}
                    md={24}
                    lg={24}
                    className="d-flex overflowX maring-top-30"
                  >
                    <Tabs centered className="tab-box">
                      {tabList.map((item, index) => {
                        return (
                          <Item md={6} tab={item.label} key={index}>
                            <div className="justify-center padding-10 maring-bt-20">
                              <Image
                                width={25}
                                src="/yourlife.png"
                                preview={false}
                              />
                              <p className="tab-price">{item.price}</p>
                            </div>
                          </Item>
                        )
                      })}
                    </Tabs>
                  </Col>
                </Row>
                <Button
                  type="primary"
                  className="primary-btn maring-top-20"
                  block
                >
                  ENROLL
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>

      <Drawer
        placement={"right"}
        width={isMobile ? "90%" : "35%"}
        closable={false}
        // onClose={onClose}
        open={open}
        className="team-drawer"
      >
        <Row justify="center" align="middle">
          <Col xs={24} className="close-btn-wrap">
            <CloseOutlined
              className="close-btn"
              onClick={() => setOpen(false)}
            />
          </Col>
          {notifyOpen == "" ? (
            <Col xs={24} md={24}>
              <h1 className="drawer-title">{sideContents}</h1>
            </Col>
          ) : (
            <></>
          )}

          {sideContents == "playerinfo" && (
            <>
              <Col xs={24} md={24}>
                <div className="rewarder-card-wrap">
                  <img
                    className="rewarder-img"
                    src={modalInfo.meta.image ? modalInfo.meta.image : "/player.png"}
                    alt="playerImage"
                  />
                  <div className="rewarder-detail">
                    <p className="rewarder-sport-type">
                      {modalInfo?.meta.sport}
                    </p>
                    <h3 className="rewarder-name maring-top-5">
                      {modalInfo?.meta.name}
                    </h3>
                    <div className="maring-top-10">
                      <PlayerStats>
                        <PlayerStat
                          iconType="Wheel"
                          weight={modalInfo?.meta.personal.power}
                        />
                        <PlayerStat
                          iconType="Run"
                          weight={modalInfo?.meta.personal.speed}
                        />
                        <PlayerStat
                          iconType="Stamina"
                          weight={modalInfo?.meta.personal.energy}
                        />
                      </PlayerStats>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={24}>
                <Typography className="team-name">Addable Boosters</Typography>
              </Col>
              <Col xs={24} md={24} className="d-flex overflowX maring-top-10">
                {erc1155.length > 0 && erc1155.map((item, index) => {
                  return (
                    <div key={index} className="trainer-item pos-rel">
                      <img
                        className="booster-img "
                        src={item.imgSrc}
                        alt="playerImage"
                      />
                      <div className="booster-info">
                        {addBstlist[index].amount}
                        /
                        {item.amount}
                      </div>
                      <div className="booster-plus">
                        <PlusSquareOutlined className="booster-btn"
                          onClick={() => boosterPlus(item, 0)}
                        />
                        <MinusSquareOutlined className="booster-btn"
                          onClick={() => boosterPlus(item, 1)}
                        />
                      </div>
                      <div className="reward-btn-wrap">
                        <Button type="primary" className="primary-btn" block>
                          +{item.meta.boostedAmount} {item.meta.boostedCharact}
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </Col>
              <Col xs={24} md={24} className="align-left maring-top-10">
                <Row gutter={10}>
                  <Col xs={24} sm={24} md={24}>
                    <Button type="primary" className="primary-btn" block
                      onClick={() => addBooster2Player()}
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
                <Row gutter={10} className="maring-top-5">
                  <Col xs={24} sm={24} md={24}>
                    <Button type="primary" className="grey-btn" block>
                      Back
                    </Button>
                  </Col>
                </Row>
              </Col>
            </>
          )}

          {sideContents == "booster" && (
            <>
              <Col xs={24} md={24}>
                <Typography className="team-name">Team Boosters</Typography>
              </Col>
              <Col xs={24} md={24} className="d-flex overflowX maring-top-10">
                {teamBooster.length > 0 && teamBooster.map((item, index) => {
                  return (
                    <div key={index} className="trainer-item pos-rel">
                      <img
                        className="booster-img "
                        src={item.meta.image}
                        alt="playerImage"
                      />
                      <div className="booster-info">
                        {delBstlist[index].amount}
                        /
                        {item.amount}
                      </div>
                      <div className="booster-plus">
                        <PlusSquareOutlined className="booster-btn"
                          onClick={() => boosterMinus(item, 0)}
                        />
                        <MinusSquareOutlined className="booster-btn"
                          onClick={() => boosterMinus(item, 1)}
                        />
                      </div>
                      <div className="reward-btn-wrap">
                        <Button type="primary" className="primary-btn" block>
                          +{item.meta.boostedAmount} {item.meta.boostedCharact}
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </Col>
              <Col xs={24} md={24} className="align-left maring-top-10">
                <Row gutter={10}>
                  <Col xs={24} sm={24} md={24}>
                    <Button type="primary" className="warn-btn" block
                      onClick={() => removeBooster()}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} md={24}>
                <Typography className="team-name">Addable Boosters</Typography>
              </Col>
              <Col xs={24} md={24} className="d-flex overflowX maring-top-10">
                {erc1155.length > 0 && erc1155.map((item, index) => {
                  return (
                    <div key={index} className="trainer-item pos-rel">
                      <img
                        className="booster-img "
                        src={item.imgSrc}
                        alt="playerImage"
                      />
                      <div className="booster-info">
                        {addBstlist[index].amount}
                        /
                        {item.amount}
                      </div>
                      <div className="booster-plus">
                        <PlusSquareOutlined className="booster-btn"
                          onClick={() => boosterPlus(item, 0)}
                        />
                        <MinusSquareOutlined className="booster-btn"
                          onClick={() => boosterPlus(item, 1)}
                        />
                      </div>
                      <div className="reward-btn-wrap">
                        <Button type="primary" className="primary-btn" block>
                          +{item.meta.boostedAmount} {item.meta.boostedCharact}
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </Col>
              <Col xs={24} md={24} className="align-left maring-top-10">
                <Row gutter={10}>
                  <Col xs={24} sm={24} md={24}>
                    <Button type="primary" className="primary-btn" block
                      onClick={() => addBooster()}
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
                <Row gutter={10} className="maring-top-5">
                  <Col xs={24} sm={24} md={24}>
                    <Button type="primary" className="grey-btn" block>
                      Back
                    </Button>
                  </Col>
                </Row>
              </Col>
            </>
          )}

          {sideContents == "remove a player" &&
            (notifyOpen == "cantremove" ? (
              <>
                <Col xs={24} md={24} className="justify-center mt-25vh">
                  <img
                    className="rewarder-img"
                    src="/images/vaultteam/failed.png"
                    alt="playerImage"
                  />
                </Col>
                <Col xs={24} md={18} className="justify-center maring-top-10">
                  <p className="notify-msg maring-top-10">
                    Can't remove a player
                  </p>
                </Col>
                <Col xs={24} md={18} className="justify-center">
                  <p className="notify-sub-msg">
                    The player is currently participating in the tournament, you
                    cannot remove him from the roster
                  </p>
                </Col>
                <Col xs={12} md={8} className="justify-center maring-top-20">
                  <Button
                    type="primary"
                    className="primary-btn"
                    block
                    onClick={() => {
                      setNotifyOpen("")
                      setOpen(false)
                    }}
                  >
                    Close
                  </Button>
                </Col>
              </>
            ) : notifyOpen == "removed" ? (
              <>
                <Col xs={24} md={24} className="justify-center mt-25vh">
                  <img
                    className="rewarder-img"
                    src="/images/vaultteam/check.png"
                    alt="playerImage"
                  />
                </Col>
                <Col xs={24} md={18} className="justify-center maring-top-10">
                  <p className="notify-msg maring-top-10">
                    Player removed from team
                  </p>
                </Col>
                <Col xs={12} md={8} className="justify-center maring-top-20">
                  <Button
                    type="primary"
                    className="primary-btn"
                    block
                    onClick={() => {
                      setNotifyOpen("")
                      setOpen(false)
                    }}
                  >
                    Close
                  </Button>
                </Col>
              </>
            ) : (
              <>
                <Col xs={24} md={24}>
                  <div className="rewarder-card-wrap">
                    <img
                      className="rewarder-img"
                      src={modalInfo.meta.image ? modalInfo.meta.image : "/player.png"}
                      alt="playerImage"
                    />
                    <div className="rewarder-detail">
                      <p className="rewarder-sport-type">
                        {modalInfo?.meta.sport}
                      </p>
                      <h3 className="rewarder-name maring-top-5">
                        {modalInfo?.meta.name}
                      </h3>
                      <div className="maring-top-10">
                        <PlayerStats>
                          <PlayerStat
                            iconType="Wheel"
                            weight={modalInfo?.meta.personal.power}
                          />
                          <PlayerStat
                            iconType="Run"
                            weight={modalInfo?.meta.personal.speed}
                          />
                          <PlayerStat
                            iconType="Stamina"
                            weight={modalInfo?.meta.personal.energy}
                          />
                        </PlayerStats>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} md={24} className="align-left maring-top-10">
                  <Row gutter={10}>
                    <Col xs={12} sm={12} md={12}>
                      <Button type="primary" className="grey-btn" block>
                        Back
                      </Button>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <Button
                        type="primary"
                        className="primary-btn"
                        block
                        onClick={() => deletePlayer(modalInfo)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </>
            ))}

          {sideContents == "add player" && (
            <>
              <Col xs={24} md={24} className="maring-top-20">
                <div className="serach-wrap">
                  <input placeholder="Search player" className="search-box" />
                  <SearchOutlined className="search-icon" />
                </div>
              </Col>
              <Col
                sm={24}
                md={24}
                lg={24}
                className="d-flex overflowX maring-top-10"
              >
                <Row className="logo-list-wrap">
                  {erc721.map((item, index) => {
                    return (
                      <Col key={index} xs={12} md={8}>
                        <Card bordered={true} className="logo-card">
                          {/* <PlusCircleOutlined className="logo-add" /> */}
                          <img
                            className="add-player"
                            src={item.imgSrc}
                            alt="YTL_team_logo"
                          />
                          <div className="sel-btn">
                            <div
                              className="opt-out"
                              onClick={() => select2add(index)}
                            >
                              {addlist.includes(index) && (
                                <div className="opt-in"></div>
                              )}
                            </div>
                          </div>
                        </Card>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
              <Col xs={24} md={24} className="align-left maring-top-10">
                <Row gutter={10}>
                  <Col xs={12} sm={12} md={12}>
                    <Button type="primary" className="grey-btn" block>
                      Back
                    </Button>
                  </Col>
                  <Col xs={12} sm={12} md={12}>
                    <Button
                      type="primary"
                      className="primary-btn"
                      block
                      onClick={() => addPlayer()}
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </Col>
            </>
          )}
          {sideContents == "get reward" && (
            <>
              <Col xs={24} md={24}>
                <div className="rewarder-card-wrap">
                  <img
                    className="rewarder-img"
                    src="/player.png"
                    alt="playerImage"
                  />
                  <div className="rewarder-detail">
                    <p className="rewarder-sport-type">Soccer</p>
                    <h3 className="rewarder-name maring-top-5">
                      Christian Andrade
                    </h3>
                    <div className="maring-top-10">
                      <PlayerStats>
                        <PlayerStat iconType="Run" weight={321} />
                        <PlayerStat iconType="Wheel" weight={32} />
                        <PlayerStat iconType="Stamina" weight={8} />
                      </PlayerStats>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={24}>
                <div className="tab-box cs-f-wrap padding-20">
                  <div className="tab-price">reward</div>
                  <div className="justify-center ">
                    <Image width={25} src="/yourlife.png" preview={false} />
                    <p className="tab-price">15000</p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={24} className="align-left maring-top-10">
                <Button
                  type="primary"
                  block
                  className="team-create-btn"
                  onClick={() => takeReward()}
                >
                  TAKE
                </Button>
              </Col>
            </>
          )}
        </Row>
      </Drawer>
    </>
  )
}

export default TeamDetail
