import React, { useContext, useState, useEffect, useCallback } from "react"
import Carousel from "react-grid-carousel"
import { useMoralis } from "react-moralis"
import { Avatar, Form, Col, Image, Input, Row, Typography, Modal } from "antd"
import { ButtonsContainer, ActionBtn } from "./styles/SellNFTStyling"
import { ExclamationCircleOutlined, CloseOutlined } from "@ant-design/icons"
import { CssDiv, CssP } from "components/CssStyledComponent/CssStyledComponent"
import { SearchOutlined } from "@ant-design/icons"
import { CollectionExchangeType } from "./CollectionExchangeType"
import { CloseButton, MainContainer, SidebarContainer, SidebarTitle, TitleContainer, } from "./styles/SidebarStyling"
import { DappContext } from "context"
import { LoadingSpin } from "components/common/LoadingSpin"
import { ylnft721Transfer } from "utils/helpers/ylnft721"
import { ylnft1155Transfer } from "utils/helpers/ylnft1155"
import "./styles/slidebar.css"

export const CollectionExchangeChoose = ({ options, friend, closeSidebar }) => {
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } = useContext(DappContext)
  const { Moralis, user } = useMoralis()
  const [nfts, setNfts] = useState([])
  const [selectedId, setSelectedId] = useState(0)
  const [isLoading, setLoading] = useState(false)

  const loadNFTs = useCallback(async () => {
    let addresses = friend?.attributes.accounts
    // let addresses = ["0x60fd599bc2fd322d9dd8949a3be148cb37a48701"]
    if (addresses) {
      let nListedNfts = []
      for (let i = 0; i < addresses.length; i++) {
        if (addresses[i] != null) {
          const mOpt = {
            chain: "bsc testnet",
            address: addresses[i],
            token_addresses: [
              process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
              process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS,
            ],
          }
          const tmp = await Moralis.Web3API.account.getNFTs(mOpt)
          nListedNfts = nListedNfts.concat(tmp.result)
        }
      }
      const result = await Promise.all(
        nListedNfts?.map(async (item) => {
          const metaTokenUri =
            item?.token_uri?.substring(8, 12) == "ipfs"
              ? item.token_uri.replace(
                /^.{28}/g,
                "https://gateway.moralisipfs.com",
              )
              : item.token_uri
          const meta = await Moralis.Cloud.run("fetchNFTMetadata", {
            url: metaTokenUri,
          })
          const imgSrc = meta.data.image
          const price = "1 BNB"
          const dprice = "300"
          const isERC721 = item.contract_type === "ERC721"
          const data = { tokenId: item.token_id, isERC721 }
          const isOfferCard = await Moralis.Cloud.run("isOfferNFT", data)
          const status = isOfferCard ? "Offer" : "NOT LISTED"
          const action = isOfferCard ? ["", "REMOVE"] : ["SELL", "ADD IN OFFER"]
          return {
            id: item.token_id,
            imgSrc: imgSrc,
            title: meta.data.name,
            price: price, //BNB
            priceUSD: dprice,
            brickColor: "#3985f5",
            address: item.token_address,
            status,
            action,
            isERC721,
            owner: item.owner_of,
            sport: meta.data.sport,
            date: item.last_metadata_sync,
            amount: item.amount,
            personal: meta.data.personal
              ? {
                speed: meta.data.personal.speed,
                dexterity: meta.data.personal.energy,
                stamina: meta.data.personal.luck,
                dribbling: meta.data.personal.power,
                finishing: meta.data.personal.wizzardy,
              }
              : null,
          }
        }),
      )
      setNfts(result)
    }
  }, [])

  useEffect(() => {
    loadNFTs()
  }, [loadNFTs])

  const exchangeHandler = async () => {
    setLoading(true)
    try {
      let selectedNft = nfts[selectedId]
      const firendAddress = friend?.attributes.ethAddress
      const firendId = friend.id
      const userAddress = user?.attributes.ethAddress
      const userId = user.id
      // await sendNFT(userAddress, selectedNft, userId)
      // await sendNFT(firendAddress, options, firendId)
      location.reload()
    } catch (error) {
      setLoading(false)
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: error.data? error.data.message : error.message,
      })
    }
  }

  const sendNFT = async (address, opt, userId) => {
    setLoading(true)
    try {
      const transaction = await Moralis.executeFunction(
        opt.isERC721 ? ylnft721Transfer(address, opt.id)
          : ylnft1155Transfer(address, opt.id, opt.amount),
      )
      await transaction.wait()
      await Moralis.Cloud.run("setHoldUser", { userId, flag: true })
    } catch (error) {
      setLoading(false)
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: error.data? error.data.message : error.message,
      })
    }
  }

  const onClickFriendButton = (e, friendId) => {
    setSelectedId(friendId)
  }

  const onClickBack = () => {
    setSidebarContent(
      <CollectionExchangeType options={options} friend={friend} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  return (
    <SidebarContainer>
      <Form name="aution_form" layout="vertical" style={{ height: "100%" }} onFinish={exchangeHandler} requiredMark={false}>
        <MainContainer>
          <TitleContainer>
            <SidebarTitle>Exchange</SidebarTitle>
          </TitleContainer>

          <CssDiv padding="15px" backgroundColor="white" borderRadius="8px">
            <Row gutter={16}>
              <Col span={9}>
                <img src={options.imageUrl} style={{ width: "100%", height: "auto" }} />
              </Col>

              <Col span={15}>
                <CssP color="#61616A" fontSize="14px" fontWeight="700" mt="20px">
                  {options.sport}
                </CssP>
                <CssP color="#242424" fontSize="24px" fontWeight="700">
                  {options.playerName}
                </CssP>
                <CssDiv display="flex" gap="5px">
                  {options.speedElmnt}
                  {options.dexterityElmnt}
                  {options.staminaElmnt}
                  {options.dribblingElmnt}
                  {options.finishingElmnt}
                </CssDiv>
              </Col>
            </Row>

            <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

            <CssDiv display="flex">
              <Avatar
                src={
                  <Image src={friend?.attributes.profile_picture} style={{ width: 32 }} preview={false} />
                }
              />
              <Typography.Text style={{ marginLeft: "10px", color: "#242424", flexGrow: 1, }}>
                {friend?.attributes.username}
              </Typography.Text>

              <Image src="/black_exchange_icon.png" preview={false} />
            </CssDiv>
          </CssDiv>

          <Typography.Title level={4} style={{ marginTop: "20px", }}>
            Choose friend’s NFT
          </Typography.Title>

          <Input
            bordered={false}
            placeholder="Search NFT"
            suffix={<SearchOutlined />}
            style={{
              backgroundColor: "#DEDEDE",
              borderRadius: "8px",
              height: "37px",
              marginRight: "20px",
              width: "100%",
              color: "#737373",
            }}
          />

          <CssDiv mt="20px">
            <Carousel rows={2} cols={3}>
              {nfts.map((nft, index) => (
                <Carousel.Item key={index} >
                  <CssDiv position="relative" mt="10px" style={{ border: "1px solid gray", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", display: "flex", borderRadius: "5px" }} onClick={(e) => onClickFriendButton(e, index)}>
                    <img src={nft.imgSrc} style={{ width: "100%", height: "auto" }} />
                    {index == selectedId && (
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#90E040", position: "absolute", top: "20px", right: "10px" }} />
                    )}
                  </CssDiv>
                </Carousel.Item>
              ))}
            </Carousel>
          </CssDiv>

          <ButtonsContainer>
            <ActionBtn outlined onClick={onClickBack}>back</ActionBtn>
            <ActionBtn active>exchange</ActionBtn>
          </ButtonsContainer>
        </MainContainer>
      </Form>
      {isLoading && <LoadingSpin tip="Loading..." />}
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
