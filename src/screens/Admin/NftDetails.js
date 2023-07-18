import React, { useEffect, useState } from "react"
import axios from "axios"
import {
  NFTButton,
  ButtonsContainer,
  ButtonsContainerBottom,
  DescriptionText,
  DescriptionTitle,
  DescriptionWrapper,
  IconsContainer,
  LeftSideContainer,
  ProfileContainer,
  MainContainer,
  NftCardImage,
  NftCardName,
  PriceTitle,
  PriceValue,
  PriceValueContainer,
  RightFirstInnerContainer,
  RightSideContainer,
  SalesInfo,
  SalesInfoContainer,
  SalesInfoValueContainer,
  SpecCard,
  SpecsContainer,
  SpecTitle,
  StatsContainer,
  StatsInnerContainer,
  Tags,
  TokenImage,
  TopInnerContainer,
  TopSection,
  ViewCollectionBtn,
} from "./styles/NftDetailsStyles"
import image from "../../images/marketplace/offerCards/players/Denise_Lango_unique.webp"
import tokenImage from "../../images/yourlife_black.png"
import { IconImg, StatItem, WeightText } from "./styles/NftCardStyling"
import {
  ExportOutlined,
  EyeOutlined,
  FieldTimeOutlined,
  HeartOutlined,
  MoreOutlined,
  RedoOutlined,
  ShareAltOutlined,
  TableOutlined,
  TeamOutlined,
} from "@ant-design/icons"
import { Button, Icon } from "antd"
import { HistoryExpandable } from "./HistoryExpandable"
import { ListingsExpandable } from "./ListingsExpandable"
import { OffersExpandable } from "./OffersExpandable"
import ItemActivity from "./ItemActivity"
import { OffersFullExpandable } from "./OffersFullExpandable"
import { useMoralis } from "react-moralis"
import { formatNumber, getRandomDate } from "../../utils/function"

const PlayerStat = ({ iconType, weight }) => {
  return (
    <StatItem>
      <IconImg
        src={require(`../../images/account/collection/${iconType}.svg`).default}
      />
      <WeightText>{weight}</WeightText>
    </StatItem>
  )
}

export const NftDetails = ({ moralis }) => {
  const { user, isAuthenticated } = useMoralis()
  const [nftDetail, setNFTDetail] = useState({})
  const ButtonGroup = Button.Group;
  useEffect(() => {
    if (moralis?.fn) {
      const url = document.URL.split("/")
      const owner = url[url.length - 3]
      const address = url[url.length - 2]
      const id = url[url.length - 1]
      moralis?.fn.Web3API.account
        .getNFTs({
          chain: "bsc testnet",
          token_addresses: [address],
          address: owner,
        })
        .then(async (nft) => {
          await Promise.all(
            nft.result.map(async (i) => {
              if (i.token_id === id) {
                const metaTokenUri =
                  i.token_uri?.substring(8, 12) == "ipfs"
                    ? i.token_uri.replace(
                      /^.{28}/g,
                      "https://gateway.moralisipfs.com",
                    )
                    : i.token_uri
                const meta = await axios.get(metaTokenUri)
                const imgSrc = meta.data.image
                const personalInfo = meta.data.personal
                const price = "1 BNB"
                const dprice = "300"
                //random info
                const info = [
                  {
                    id: "1",
                    iconType: <TeamOutlined />,
                    title: formatNumber(Math.floor(Math.random() * 1000)) + " owners",
                  },
                  {
                    id: "2",
                    iconType: <TableOutlined />,
                    title: formatNumber(Math.floor(Math.random() * 10000000)) + " TOTAL",
                  },
                  {
                    id: "3",
                    iconType: <EyeOutlined />,
                    title: formatNumber(Math.floor(Math.random() * 1000000)) + " views",
                  },
                  {
                    id: "4",
                    iconType: <HeartOutlined />,
                    title: formatNumber(Math.floor(Math.random() * 1000)) + "FAVORITES",
                  },
                ]
                //random sale end time
                const startDate = new Date('2023-03-01');
                const endDate = new Date('2023-12-31');
                const randomDate = getRandomDate(startDate, endDate);
                setNFTDetail({
                  id: i.token_id,
                  imgSrc: imgSrc,
                  sport: "Basketball",
                  title: meta.data.name,
                  description: meta.data.description,
                  price: price, //BNB
                  priceUSD: dprice,
                  dexterity: personalInfo && personalInfo.energy,
                  stamina: personalInfo && personalInfo.luck,
                  dribbling: personalInfo && personalInfo.power,
                  speed: personalInfo && personalInfo.speed,
                  finishing: personalInfo && personalInfo.wizzardy,
                  brickColor: "blue",
                  address: i.token_address,
                  info: info,
                  saleEndDate: randomDate,
                })
              }
            }),
          )
        })
    }
  }, [moralis?.fn, isAuthenticated])
  return (
    <ProfileContainer>
      <MainContainer>
        <TopInnerContainer>
          {/* Left Column */}
          <LeftSideContainer>
            <NftCardImage src={nftDetail.imgSrc} alt="image" />
            <DescriptionWrapper>
              <DescriptionTitle>DESCRIPTION</DescriptionTitle>
              <DescriptionText>{nftDetail.description}</DescriptionText>
              <SpecTitle>Specifications</SpecTitle>
              <SpecsContainer>
                {nftDetail.speed !== undefined && (
                  <PlayerStat iconType="Run" weight={nftDetail.speed} />
                )}
                {nftDetail.dexterity !== undefined && (
                  <PlayerStat iconType="Wheel" weight={nftDetail.dexterity} />
                )}
                {nftDetail.stamina !== undefined && (
                  <PlayerStat iconType="Stamina" weight={nftDetail.stamina} />
                )}
                {nftDetail.dribbling !== undefined && (
                  <PlayerStat iconType="Run" weight={nftDetail.dribbling} />
                )}
                {nftDetail.finishing !== undefined && (
                  <PlayerStat iconType="Wheel" weight={nftDetail.finishing} />
                )}
              </SpecsContainer>
            </DescriptionWrapper>
          </LeftSideContainer>

          {/* Right Column */}
          <RightSideContainer>
            {/* Top Section */}
            <TopSection>
              <Tags>Some tag</Tags>
              <IconsContainer>
              <ButtonGroup>
                <Button style={{borderRadius: "8px 0 0 8px", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center"}}><RedoOutlined /></Button>
                <Button style={{width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center"}}><ExportOutlined /></Button>
                <Button style={{width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center"}}><ShareAltOutlined /></Button>
                <Button style={{borderRadius: "0px 8px 8px 0", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center"}}><MoreOutlined /></Button>
              </ButtonGroup>
              </IconsContainer>
            </TopSection>
            <NftCardName>{nftDetail.title ?? "No name"}</NftCardName>
            <StatsContainer>
              {nftDetail.info && nftDetail.info.map((item) => (
                <StatsInnerContainer key={item.id}>
                  <div>{item.iconType}</div>
                  <div>{item.title}</div>
                </StatsInnerContainer>
              ))}
            </StatsContainer>

            {/* 1st card */}
            <RightFirstInnerContainer>
              <SalesInfoContainer>
                <FieldTimeOutlined />
                <SalesInfo>Sales end {nftDetail.saleEndDate}</SalesInfo>
              </SalesInfoContainer>
              <SalesInfoValueContainer>
                <PriceTitle>current price</PriceTitle>
                <PriceValueContainer>
                  <TokenImage src={tokenImage} alt="tokenImage" />
                  <PriceValue>{nftDetail.price}</PriceValue>
                </PriceValueContainer>
              </SalesInfoValueContainer>
              <ButtonsContainer>
                <NFTButton>buy now</NFTButton>
                <NFTButton>make offer</NFTButton>
              </ButtonsContainer>
            </RightFirstInnerContainer>

            {/* 2nd card */}
            <HistoryExpandable />

            {/* 3rd card */}
            <ListingsExpandable />

            {/* 4th Card */}
            <OffersExpandable />
          </RightSideContainer>
        </TopInnerContainer>

        {/* 5th Card */}
        <ItemActivity />

        {/* 6th Card */}
        <OffersFullExpandable />
        <ButtonsContainerBottom>
          <ViewCollectionBtn>view collection</ViewCollectionBtn>
        </ButtonsContainerBottom>
      </MainContainer>
    </ProfileContainer>
  )
}
