import { Booster } from "components/Sidebar/Booster"
import { CollectionExchange } from "components/Sidebar/CollectionExchange"
import { CollectionSale } from "components/Sidebar/CollectionSale"
import { DappContext } from "context"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  ActionBtn,
  ButtonContainer,
  ButtonIcon,
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
} from "./styles/NftCardStyling"

export const PlayerStat = ({ iconType, weight }) => {
  return (
    <StatItem>
      <IconImg
        src={require(`../../images/account/collection/${iconType}.svg`).default}
      />
      <WeightText>{weight}</WeightText>
    </StatItem>
  )
}

export const CollectionNftCard = ({
  brickColor,
  playerName,
  usdValue,
  imageUrl,
  cryptoValue,
  isTeam,
  action,
  status,
  address,
  id,
  owner,
  personal,
  sport,
  isERC721,
  amount,
  moralis,
}) => {
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } = useContext(DappContext)

  const onClickSwap = (event) => {
    const options = {
      id,
      amount,
      isERC721,
      imageUrl,
      sport,
      playerName,
      speedElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Run" weight={personal.speed} />
      ),
      dexterityElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Wheel" weight={personal.dexterity} />
      ),
      staminaElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Stamina" weight={personal.stamina} />
      ),
      dribblingElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Run" weight={personal.dribbling} />
      ),
      finishingElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Wheel" weight={personal.finishing} />
      ),
    }
    setSidebarContent(
      <CollectionExchange options={options} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  const onClickAuction = (event) => {
    const options = {
      id,
      amount,
      isERC721,
      imageUrl,
      sport,
      playerName,
      speedElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Run" weight={personal.speed} />
      ),
      dexterityElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Wheel" weight={personal.dexterity} />
      ),
      staminaElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Stamina" weight={personal.stamina} />
      ),
      dribblingElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Run" weight={personal.dribbling} />
      ),
      finishingElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Wheel" weight={personal.finishing} />
      ),
    }
    setSidebarContent(
      <CollectionSale options={options} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  const onClickUp = (event) => {
    const options = {
      imageUrl,
      sport,
      playerName,
      speedElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Run" weight={personal.speed} />
      ),
      dexterityElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Wheel" weight={personal.dexterity} />
      ),
      staminaElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Stamina" weight={personal.stamina} />
      ),
      dribblingElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Run" weight={personal.dribbling} />
      ),
      finishingElmnt: personal && (
        <PlayerStat isTeam={isTeam} iconType="Wheel" weight={personal.finishing} />
      ),
    }
    setSidebarContent(
      <Booster options={options} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  return (
    <GeometricCard isTeam={isTeam}>
      {/* <TopHeaderText isSell={isSell}>{status}</TopHeaderText> */}
      <Graphics isTeam={isTeam}>
        {personal !== null && (
          <>
            <PlayerStats isTeam={isTeam}>
              <PlayerStat isTeam={isTeam} iconType="Run" weight={personal.speed} />
              <PlayerStat isTeam={isTeam} iconType="Wheel" weight={personal.dexterity} />
              <PlayerStat isTeam={isTeam} iconType="Stamina" weight={personal.stamina} />
            </PlayerStats>
          </>
        )}
        <Link to={`/admin/mintedNfts/${owner}/${address}/${id}`}>
          <PlayerImage src={imageUrl} alt="playerImage" />
        </Link>
        {personal !== null && (
          <>
            <PlayerStats isTeam={isTeam}>
              <PlayerStat isTeam={isTeam} iconType="Run" weight={personal.dribbling} />
              <PlayerStat isTeam={isTeam} iconType="Wheel" weight={personal.finishing} />
            </PlayerStats>
          </>
        )}
      </Graphics>
      <NameBlock>
        <PlayerName isTeam={isTeam}>{playerName}</PlayerName>
      </NameBlock>
      <ColorBrickContainer isTeam={isTeam}>
        <ColorBrick color={brickColor} />
      </ColorBrickContainer>
      <TextBrickContainer isTeam={isTeam}>
        <TextBrick isTeam={isTeam}>{sport}</TextBrick>
      </TextBrickContainer>
      <ButtonContainer>
        <ActionBtn onClick={onClickSwap}>
          <ButtonIcon src="/swap_icon.png" />
        </ActionBtn>
        <ActionBtn onClick={onClickAuction}>
          <ButtonIcon src="/auction_icon.png" />
        </ActionBtn>
        <ActionBtn onClick={onClickUp}>
          <ButtonIcon src="/upArrow_icon.png" />
        </ActionBtn>
      </ButtonContainer>
    </GeometricCard>
  )
}
