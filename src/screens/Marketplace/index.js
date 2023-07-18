import React, {
  useState,
  useRef,
  useContext,
  useCallback,
  useEffect,
} from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Row, Col } from "antd"
import NFTGeometricCard from "components/NFTGeometricCard"
import {
  InfoContainer,
  InnerHeaderContainer,
  InnerHeaderLabel,
  BackButton,
  Heading,
  NftCardContainer,
  TabContainer,
  TabFilterBar,
} from "./styles/InfoElements"
import "./st.css"
import { OfferBox } from "./components"
import BoosterSlider from "./components/BoosterSlider"
import Buttons from "./components/Buttons"
import { CssDiv } from "components/CssStyledComponent/CssStyledComponent"
import { Alert, Button, Input, Modal, Typography, Spin } from "antd"
import { SearchOutlined, ExclamationCircleOutlined } from "@ant-design/icons"
import { DappContext } from "context"
import { MarketPlaceFilters } from "components/Sidebar/MarketPlaceFilters"
import { Loading } from "notiflix"
import { useMoralis } from "react-moralis"
import { SubscribeBtn, SubscribeBtnContainer2, SubscribeText1, SubscribeText2 } from "components/Header/HeaderStyling"

/** description of marketplace */
const Marketplace = ({ moralis }) => {
  const {
    flag_offerAuction,
    setOpenSidebar,
    setSidebarContent,
    onCloseSidebar,
    setOpenModal,
    modalContent,
    setModalContent,
  } = useContext(DappContext)
  const { isAuthenticated, user } = useMoralis()
  const [onceLoad, setOnceLoad] = useState(false)
  const [nft721s, set721Nfts] = useState([])
  const [nft1155s, set1155Nfts] = useState([])
  const [offers, setOffers] = useState([])
  const [auctionNFTs, setAuctionNFTs] = useState([])

  const joinNewsLetter = () => {
    if (!user?.attributes.emailVerified) {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: "You have to verify email!",
      })
    } else {
      Modal.success({
        icon: <ExclamationCircleOutlined />,
        content: "You can join to news letter!",
      })
    }
  }

  const loadNFTs = useCallback(async () => {
    if (!moralis) return;
    Loading.standard()
    let nft721s = await moralis?.fn.Cloud.run("FetchMarketed721")
    let nft1155s = await moralis?.fn.Cloud.run("FetchMarketed1155")
    const result = nft721s.concat(nft1155s)
    const listedNFT = await Promise.all(
      result?.map(async (item) => {
        const isERC721 = item.className === "NFT721"
        const tokenId = item?.attributes.tokenId.toString()
        const meta = await moralis?.fn.Cloud.run("fetchNFTMetadata", { url: item?.attributes.token_uri })
        const imgSrc = meta.data.image
        const price = moralis?.fn.Units.FromWei(item?.attributes.price.toString())
        const dprice = moralis?.fn.Units.FromWei(item?.attributes.price.toString()) / 100
        const type = item?.attributes.type
        let action = []
        let status = ""
        let itemId = ""
        if (type == "auction") {
          status = "Auction"
          action = ["EDIT", "REMOVE"]
          itemId = item?.attributes.itemId
        } else if (type == "offer") {
          status = "Offer"
          action = ["", "REMOVE"]
        } else if (type == "marketplace") {
          status = "MARKETPLACE"
          action = ["EDIT", item?.attributes.market_state == "0" ? "PAUSE" : "UNPAUSE"]
          itemId = item?.attributes.itemId
        }
        return {
          id: tokenId,
          itemId,
          imgSrc: imgSrc,
          title: meta.data.name,
          price: price, //BNB
          priceUSD: dprice,
          brickColor: "#3985f5",
          address: process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
          status,
          type,
          action,
          isERC721,
          owner: item?.attributes.owner,
          sport: meta.data.sport,
          date: item?.updatedAt,
          amount: isERC721 ? 1 : item?.attributes.amount,
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
    const marketNFTs = listedNFT.filter((nft) => !nft.isERC721 && nft.type === "marketplace")
    set1155Nfts(marketNFTs);
    const officalNFTs = listedNFT.filter((nft) => nft.type === "marketplace")
    set721Nfts(officalNFTs);
    const auctionNFTs = listedNFT.filter((nft) => nft.type === "auction")
    setAuctionNFTs(auctionNFTs);
    Loading.remove()
  }, [moralis])

  //
  const loadOffers = useCallback(async () => {
    if (moralis) {
      moralis?.fn.Cloud.run("getOffers", { isFullOffer: true }).then(
        async (result) => {
          const value = await Promise.all(
            result.map(async (item) => {
              const attr = item.attributes
              const erc721Arr = await Promise.all(
                attr.ERC721.map(async (id) => {
                  const meta = await moralis?.fn.Cloud.run("Get721TokenURI", { tokenId: id })
                  return meta.data.image
                }),
              )
              const erc1155Arr = await Promise.all(
                attr.ERC1155.map(async (id) => {
                  const meta = await moralis?.fn.Cloud.run("Get1155TokenURI", { tokenId: id })
                  return meta.data.image
                }),
              )
              return {
                discount: attr.discount,
                endAt: attr.endAt,
                name: attr.name,
                fullPrice: attr.fullPrice,
                images: erc1155Arr.concat(erc721Arr),
                tokenData: JSON.stringify({
                  erc721: attr.ERC721,
                  erc1155: attr.ERC1155,
                }),
              }
            }),
          )
          setOffers(value)
        },
      )
    }
  }, [moralis])

  useEffect(() => {
    if (moralis && !onceLoad) {
      loadNFTs()
      loadOffers()
      setOnceLoad(true)
    }
  }, [
    moralis,
    onceLoad,
    isAuthenticated,
    loadNFTs,
    loadOffers,
  ])

  const onClickFilters = (e) => {
    setSidebarContent(<MarketPlaceFilters closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }

  return (
    <>
      <InfoContainer>
        <InnerHeaderContainer>
          <BackButton>Back</BackButton>
          <SubscribeBtnContainer2>
            <SubscribeBtn onClick={joinNewsLetter}>
              <SubscribeText1>Subscribe for newsletters</SubscribeText1>
              <SubscribeText2>Subscribe</SubscribeText2>
            </SubscribeBtn>
          </SubscribeBtnContainer2>
        </InnerHeaderContainer>
        <InnerHeaderLabel>MARKETPLACE</InnerHeaderLabel>
        <BoosterSlider nfts={nft1155s} />
        <OfferBox result={offers} />
        <CssDiv pb={"50px"}>
          <Buttons />
          <TabContainer>
            <div>
              {flag_offerAuction == "offer" && (
                <Typography.Title className="typo-title">
                  <span className="typo-title">OFFICIAL OFFER</span>
                </Typography.Title>
              )}
              {flag_offerAuction == "auction" && (
                <Typography.Title className="typo-title">
                  <span className="typo-title">AUCTION</span>
                </Typography.Title>
              )}
            </div>
            <TabFilterBar>
              <Input
                suffix={<SearchOutlined />}
                bordered={false}
                placeholder="Search"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  height: "37px",
                  marginRight: "20px",
                }}
              />
              <Button
                type="primary"
                ghost
                style={{ width: "90px", height: "37px", marginRight: "20px" }}
                onClick={onClickFilters}
              >
                FILTERS
              </Button>
            </TabFilterBar>
          </TabContainer>
          {flag_offerAuction == "offer" && (
            <NftCardContainer>
              {nft721s.map((card, index) => (
                <NFTGeometricCard
                  key={index}
                  id={card.id}
                  isERC721={card.isERC721}
                  brickColor={card.brickColor}
                  text={card.sport}
                  playerName={card.title}
                  usdValue={card.priceUSD}
                  imageUrl={card.imgSrc}
                  cryptoValue={card.price}
                  personal={card.personal}
                  owner={card.owner}
                  address={card.address}
                  amount={card.amount}
                  itemId={card.itemId}
                />
              ))}
            </NftCardContainer>
          )}
          {flag_offerAuction == "auction" && (
            <NftCardContainer>
              {auctionNFTs.map((card, index) => (
                <NFTGeometricCard
                  key={index}
                  id={card.id}
                  isERC721={card.isERC721}
                  brickColor={card.brickColor}
                  text={card.sport}
                  playerName={card.title}
                  usdValue={card.priceUSD}
                  imageUrl={card.imgSrc}
                  cryptoValue={card.price}
                  personal={card.personal}
                  owner={card.owner}
                  address={card.address}
                  amount={card.amount}
                  itemId={card.itemId}
                />
              ))}
            </NftCardContainer>
          )}
        </CssDiv>
      </InfoContainer>
    </>
  )
}

export default Marketplace
