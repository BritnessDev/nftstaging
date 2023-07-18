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
import { PlusCircleOutlined, CloseOutlined } from "@ant-design/icons"
import React, { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { useMedia } from "hooks/useMedia"
import "./style.css"
import { BackButton } from "./components/basic"
import { useMoralisWeb3Api, useMoralis } from "react-moralis"
import axios from "axios"
import { play } from "utils/helpers/contest"
import {
  getSubvault,
  nFTsCounter,
  createAVault,
  storeNftFromWalletToVaultERC721,
} from "utils/helpers/ylvault"
import { tokenURI } from "utils/helpers/ylnft721"
import { approve } from "utils/helpers/ylnft721"
import { Loading } from "notiflix"

const TOKEN_ADDRESS = [
  process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
  process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS,
]

const logos = [
  'https://gateway.moralisipfs.com/ipfs/QmNQwozFaLY1utUKgUjmW5oQUZRdtnZEQMwD8BEYJSQvqh',
  'https://gateway.moralisipfs.com/ipfs/QmdfB6VQB1xTsQMmhbtocaVxRydHFVve3wF5JaiEoUePcH',
  'https://gateway.moralisipfs.com/ipfs/QmXWBCiE6vZa3Fy59mtNMcAhYZq6PX1tZ6B2e6uNjNuvVp',
  'https://gateway.moralisipfs.com/ipfs/QmW31Cfmgn2anmRF3rnA1nwCVtEYJpk6LP5TkcinE3KQW3',
  'https://gateway.moralisipfs.com/ipfs/QmXmH1vHqZLVJHUhHBPrE5aZaiDKqYHuGYgnxigr1fornj',
  'https://gateway.moralisipfs.com/ipfs/QmefzsAeLKvtM2pzwosP93qy34sUq6kLgEYDjNc1nUWWFi',
  'https://gateway.moralisipfs.com/ipfs/QmXx3gkT9UvuExdNQLAQCrYCEp3wzPupYXMJvtCeFwWxMM',
  'https://gateway.moralisipfs.com/ipfs/QmSQc6cZsHD6GjugB7mV254PVry1dG2CcC4csHPvAYj4sQ',
  'https://gateway.moralisipfs.com/ipfs/QmdYgrk99ZDPijngV2TZaeysCZ8vV6dMAU5kRaZE88oLBp',
  'https://gateway.moralisipfs.com/ipfs/QmZRdH7i3SDtKGNqkJrwAvNwvQ6J1pMxgf43yr7SFXN23x',
  'https://gateway.moralisipfs.com/ipfs/QmbVCfHFnDXSxmYA6cErsbpkZhGnYDP2xq8zgcXS7gUWHd'  
]

const Vaultteam = ({ moralis }) => {
  let inputRef
  var sports = ["Soccer", "Basketball", "Football", "Baseball", "Softball"]
  const [mintedNFT, setMintedNFT] = useState()
  const { user, isAuthenticated, Moralis, web3 } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const isMobile = useMedia("(max-width: 640px)")
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [vault, setVault] = useState([])
  const [vault721, setVault721] = useState([])
  const [teamName, setTeamName] = useState("")
  const [logo, setLogo] = useState("")
  const [provideLogo, setProvideLogo] = useState(logos)
  const [players, setPlayers] = useState([])
  const [sportList, setSportList] = useState([])
  const [sportType, setSportType] = useState("Soccer")
  const [erc721, setErc721] = useState([])
  const [erc1155, setErc1155] = useState([])

  const showDrawer = () => {
    setOpen(true)
  }

  const fileUpload = async (event) => {
    try {
      Loading.standard()
      const data = event
      const image_ipfs = new Moralis.File(data.name, data)
      const img = await image_ipfs.saveIPFS()
      const image = "https://gateway.moralisipfs.com/ipfs/" + img._hash 
      setLogo(image)
      Loading.remove()
    } catch (e) {
      console.log(e)
    }
  }

  const readTeams = useCallback(async () => {
    try {
      Loading.standard()
      const v = await moralis?.fn.Cloud.run("getTeamData", {
        wallet: user.attributes.ethAddress,
      })
      const vData = [] 
      v.data_team.forEach((e) => {
        const attr = e.attributes
        if (sports.includes(attr.category)) {
          sports.splice(sports.indexOf(attr.category), 1)
        }
        const t = {
          subaddress: attr.subaddress,
          teamname: attr.teamname,
          logo: attr.logo,
          vaultaddress: attr.address,
          category: attr.category,
          from: attr.from,
          gamer: attr.gamer,
          createdTime: attr.createdTime,
        }
        vData.push(t)
      })
      setSportList(sports)
      sports.length > 0 && setSportType(sports[0])
      setVault(vData)
      const nData = []
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
        nData.push(n)
      }
      setVault721(nData)
      Loading.remove()
    } catch (e) {
      Loading.remove()
      console.log(e)
    }
  }, [moralis, user])

  useEffect(() => {
    if (
      moralis != null &&
      user?.attributes.ethAddress != undefined &&
      loaded == false
    ) {
      setLoaded(true)
      readTeams()
    }
  }, [moralis, user?.attributes.ethAddress])

  const createTeam = async () => {
    try {
      Loading.standard()  
      const transaction = await Moralis.executeFunction(
        createAVault(
          user.attributes.ethAddress,
          sportType,
          teamName,
          logo,
        ),
      )
      const res = await transaction.wait()
      Loading.remove()
      window.location.reload()
    } catch (e) {
      Loading.remove()
      console.log(e)
    }
  }

  const addPlayer = (p, item) => {
    setPlayers([...players, p])
  }
  const removePlayer = (p) => {
    var tmp = players
    var idx = tmp.indexOf(p)
    tmp.splice(idx, 1)
    setPlayers([...tmp])
  }

  useEffect(() => {
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
              item?.token_uri?.substring(8, 12) == "ipfs"
                ? item.token_uri.replace(
                    /^.{28}/g,
                    "https://gateway.moralisipfs.com",
                  )
                : item.token_uri
            const meta = await axios.get(metaTokenUri)
            const imgSrc = meta.data.image
            const price = "1 BNB"
            const dprice = "300"
            const nft = {
              id: item.token_id,
              imgSrc: imgSrc,
              sport: meta.data.sport ? meta.data.sport : "Basketball",
              title: meta.data.name,
              price: price, //BNB
              priceUSD: dprice,
              speed: 77,
              dexterity: 55,
              stamina: 22,
              dribbling: 36,
              finishing: 25,
              brickColor: "blue",
              address: item.token_address,
              type: item.contract_type,
            }
            return nft
          }),
        )
        var tmp721 = []
        var tmp1155 = []
        mintedNFT.forEach((n) => {
          if (n.type == "ERC721") {
            tmp721.push(n)
          } else {
            tmp1155.push(n)
          }
        })
        setErc721(tmp721)
        setErc1155(tmp1155)
      })
    }
  }, [Web3Api.account, user?.attributes.ethAddress, isAuthenticated])

  const selectSportType = (e) => {
    setSportType(e.target.value)
  }

  return (
    <>
      <Layout className="layout">
        <Row justify="start">
          <Col span={24}>
            <BackButton>Back</BackButton>
            <input
              ref={(refParam) => (inputRef = refParam)}
              type="file"
              onChange={(e) => fileUpload(e.target.files[0])}
              style={{ display: "none" }}
            />
          </Col>
        </Row>
        <Row justify="space-between" align="middle" className="maring-top-20">
          <Col xs={24} md={12}>
            <h1 className="team-title">my teams</h1>
          </Col>
          <Col xs={24} md={12} className="align-right">
            <Space wrap>
              <Button
                type="primary"
                className="primary-btn"
                block
                onClick={() => showDrawer()}
              >
                CREATE A TEAM
              </Button>
              <Button type="primary" className="second-btn" ghost>
                DELETE
              </Button>
            </Space>
          </Col>
        </Row>
        <Row className="maring-top-20">
          {vault.map((item, index) => {
            return (
              <Col
                key={index}
                xs={24}
                sm={12}
                md={8}
                lg={6}
                className="padding-10"
              >
                <Link to={"/teams/" + item.subaddress + "/" + item.teamname}>
                  <Card bordered={false} className="team-card">
                    <div className="booster-active-wrap">
                      <Typography className="booster-active">
                        booster activeated
                      </Typography>
                    </div>
                    <img
                      className="team-logo"
                      src={item.logo}
                      alt="YTL_team_logo"
                    />
                    <div className="card-title">{item.teamname}</div>
                  </Card>
                </Link>
              </Col>
            )
          })}
          <Col xs={24} sm={12} md={8} lg={6} className="padding-10">
            <Card
              bordered={true}
              className="team-card dotted-border"
              onClick={() => showDrawer()}
            >
              <div className="booster-active-wrap"></div>
              <PlusCircleOutlined className="team-add" />
              <div className="card-title">ADD A TEAM</div>
            </Card>
          </Col>
        </Row>
      </Layout>
      <Drawer
        placement={"right"}
        width={isMobile ? "90%" : "50%"}
        closable={false}
        // onClose={onClose}
        open={open}
        className="team-drawer"
      >
        <Row justify="space-between" align="middle">
          <Col xs={24} className="close-btn-wrap">
            <CloseOutlined
              className="close-btn"
              onClick={() => setOpen(false)}
            />
          </Col>
          <Col xs={24} md={24}>
            <h1 className="drawer-title">create a team</h1>
          </Col>
          {sportList.length > 0 ? (
            <>
              <Col xs={24} md={24}>
                <Typography className="team-name">name</Typography>
                <Typography className="enter-name">
                  Enter your team name
                </Typography>
                <Input
                  className="name-box"
                  placeholder="Name"
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </Col>
              <Col xs={24} md={24}>
                <Typography className="enter-name maring-top-20">
                  Select sport type
                </Typography>
                <select
                  className="name-box sport-sel"
                  onChange={selectSportType}
                >
                  {sportList.map((item, index) => {
                    return <option value={item} key={index}>{item}</option>
                  })}
                </select>
              </Col>
              <Col xs={24} md={24}>
                <Typography className="team-name">logo</Typography>
                <Row>
                  <Col xs={12} md={6}>
                    <Card bordered={true} className="logo-card">
                      {logo == "" ? (
                        <PlusCircleOutlined
                          className="logo-add"
                          onClick={() => inputRef.click()}
                        />
                      ) : (
                        <img
                          className="use-logo"
                          src={logo}
                          alt="YTL_team_logo"
                          onClick={() => inputRef.click()}
                        />
                      )}
                      <div className="add-logo">
                        {logo == "" ? "add logo" : "reset logo"}
                      </div>
                    </Card>
                  </Col>
                  <Col xs={12} md={18}>
                    <Row className="logo-list-wrap">
                      {provideLogo.map((logo, index) => {
                        return (
                          <Col key={index} xs={24} md={8}>
                            <Card bordered={true} className="logo-card"
                              onClick={()=>setLogo(logo)}
                            >
                              <img
                                className="use-logo"
                                src={logo}
                                alt="YTL_team_logo"
                              />
                              <div className="add-logo">use logo</div>
                            </Card>
                          </Col>
                        )
                      })}
                    </Row>
                  </Col>
                </Row>
              </Col>
              {/* <Col xs={24} md={24}>
                <Typography className="team-name">Line-up</Typography>
                <Row className="logo-list-wrap">
                  {erc721.map((item, index) => {
                    if (item.sport == sportType) {
                      return (
                        <Col key={index} xs={12} md={6}>
                          <Card bordered={true} className="logo-card"> 
                            <img
                              className="add-player"
                              src={item.imgSrc}
                              alt="YTL_team_logo"
                            />
                            {players.includes(Number(item.id)) ? (
                              <Button
                                className="add-player-btn"
                                onClick={() => removePlayer(Number(item.id))}
                              >
                                Delete Player
                              </Button>
                            ) : (
                              <Button
                                className="add-player-btn"
                                onClick={() => addPlayer(Number(item.id), item)}
                              >
                                Add Player
                              </Button>
                            )}
                          </Card>
                        </Col>
                      )
                    }
                  })}
                </Row>
              </Col> */}
              <Col xs={12} md={8} className="align-left maring-top-20">
                <Button
                  type="primary"
                  block
                  className="team-create-btn"
                  onClick={() => createTeam()}
                >
                  CREATE
                </Button>
              </Col>
            </>
          ) : (
            <>
              <Col xs={24} md={24}>
                <Typography className="enter-name maring-top-20">
                  You have already created all teams for every sport.
                </Typography>
              </Col>
            </>
          )}
        </Row>
      </Drawer>
    </>
  )
}

export default Vaultteam
