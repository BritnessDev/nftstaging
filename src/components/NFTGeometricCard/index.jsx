import React, { useContext, useState } from "react"
import { useMoralis } from "react-moralis"
import { Link } from "react-router-dom"
import {
  ButtonGroup,
  ColorBrick,
  ColorBrickContainer,
  GeometricCard,
  Graphics,
  IconImg,
  NameBlock,
  PlayerImage,
  PlayerName,
  PlayerStats,
  StatItem,
  TextBrick,
  TextBrickContainer,
  USDValue,
  ValueWrapper,
  WeightText,
  YLTToken,
} from "./styles/CardElements"
import { DappContext } from "context"
import { NftBuy } from "components/Sidebar/NftBuy"
import { Button } from "antd"
import { Confirm } from "components/Sidebar/Confirm"
import IconRun from "../../../src/images/marketplace/nftcard/nft-card-run.png"
import IconWheel from "../../../src/images/marketplace/nftcard/nft-card-run.png"
import IconStamina from "../../../src/images/marketplace/nftcard/nft-card-run.png"

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

const NFTGeometricCard = ({
  brickColor,
  text,
  playerName,
  usdValue,
  imageUrl,
  cryptoValue,
  isTeam,
  personal,
  id,
  isERC721,
  owner,
  address,
  amount,
  itemId,

}) => {
  const {
    flag_offerAuction,
    setSidebarContent,
    setOpenSidebar,
    onCloseSidebar,
  } = useContext(DappContext)

  const openNftBuySidebar = () => {
    const option = {
      id,
      isERC721,
      owner,
      amount,
      itemId,
      address,
      price: cryptoValue,
      limit_price: usdValue,
      personal,
    }
    setSidebarContent(<NftBuy option={option} closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }

  const removeFromAuction = () => {}

  const openConfirmSidebar = (options) => {
    setSidebarContent(
      <Confirm options={options} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  const onClickBuy = (image, personal, attrs) => {
    const options = {
      itemId,
      amount,
      isERC721: personal !== null,
      price: cryptoValue,
      attrs,
      image
    }
    switch (flag_offerAuction) {
      case "offer":
        openConfirmSidebar(options)
        break
      case "auction":
        openNftBuySidebar()
        break
      default:
        break
    }
  }

  return (
    <GeometricCard isTeam={isTeam} backgroundColor={"white"}>
      <Graphics isTeam={isTeam}>
        {personal !== null && (
          <>
            <PlayerStats isTeam={isTeam}>
              <PlayerStat
                isTeam={isTeam}
                iconType="Run"
                weight={personal.speed}
              />
              <PlayerStat
                isTeam={isTeam}
                iconType="Wheel"
                weight={personal.dexterity}
              />
              <PlayerStat
                isTeam={isTeam}
                iconType="Stamina"
                weight={personal.stamina}
              />
            </PlayerStats>
          </>
        )}
        <Link to={`/admin/mintedNfts/${owner}/${address}/${id}`}>
          <PlayerImage src={imageUrl} alt="playerImage" />
        </Link>
        {personal !== null && (
          <>
            <PlayerStats isTeam={isTeam}>
              <PlayerStat
                isTeam={isTeam}
                iconType="Run"
                weight={personal.dribbling}
              />
              <PlayerStat
                isTeam={isTeam}
                iconType="Wheel"
                weight={personal.finishing}
              />
            </PlayerStats>
          </>
        )}
      </Graphics>
      <NameBlock>
        <PlayerName isTeam={isTeam}>{playerName}</PlayerName>
        <ValueWrapper>
          {`${cryptoValue} YLT`}
          <USDValue>{` ($${usdValue})`}</USDValue>
        </ValueWrapper>
      </NameBlock>
      <ColorBrickContainer isTeam={isTeam}>
        <ColorBrick color={brickColor} />
      </ColorBrickContainer>
      <TextBrickContainer isTeam={isTeam}>
        <TextBrick isTeam={isTeam}>{text}</TextBrick>
      </TextBrickContainer>
      <ButtonGroup>
        <Button
          onClick={() => onClickBuy(imageUrl, personal, {
            speed: personal?.speed,
            dexterity: personal?.dexterity,
            stamina: personal?.stamina,
            dribbling: personal?.dribbling,
            finishing: personal?.finishing,
            cryptoValue,
            usdValue,
            playerName,
          })}
          block
          style={{
            width: "97%",
            marginLeft: "auto",
            marginRight: "auto",
            border: "none",
            background: "rgba(57, 133, 245, 0.2)",
            color: "#3985f5",
            borderRadius: "4px",
          }}
        >
          BUY
        </Button>
      </ButtonGroup>
    </GeometricCard>
  )
}

export default NFTGeometricCard
