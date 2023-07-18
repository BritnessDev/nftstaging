import { SellNFT } from "components/Sidebar/SellNFT"
import { EditNFT } from "components/Sidebar/EditNFT"
import { AddInOffer } from "components/Sidebar/AddInOffer"
import { DappContext } from "context"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  ActionBtn,
  ButtonContainer,
  ColorBrick,
  ColorBrickContainer,
  GeometricCard,
  Graphics,
  IconImg,
  MainCardContainer,
  NameBlock,
  PlayerImage,
  PlayerName,
  PlayerStats,
  StatItem,
  TextBrick,
  TextBrickContainer,
  TopHeaderText,
  USDValue,
  ValueWrapper,
  WeightText,
} from "./styles/NftCardStyling"
import { adminPauseToggle } from "utils/helpers/marketplace"

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

export const NftCard = ({
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
  itemId,
}) => {
  const [isSell, setIsSell] = useState(false)
  const [isOffer, setIsOffer] = useState(false)
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } =
    useContext(DappContext)

  const handleSell = () => {
    const options = {
      id,
      sport,
      amount,
      action,
      status,
      imageUrl,
      personal,
      isERC721,
      playerName,
    }
    setSidebarContent(
      <SellNFT options={options} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  const handleEditAuction = () => {
    const options = {
      id,
      sport,
      amount,
      action,
      status,
      imageUrl,
      personal,
      isERC721,
      playerName,
      itemId,
    }
    setSidebarContent(
      <EditNFT options={options} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  const handleClickAddInOffer = (event) => {
    const nftObj = { isERC721, id }
    setSidebarContent(
      <AddInOffer
        nftItem={JSON.stringify(nftObj)}
        moralis={moralis}
        closeSidebar={onCloseSidebar}
      />,
    )
    setOpenSidebar(true)
  }

  const handleRemoveFromOffer = () => {
    const value = confirm("Are you really remove item from Offer Card?")
    if (value) {
      moralis?.fn.Cloud.run("removeItemFromOffers", { isERC721, id }).then(
        () => {
          location.reload()
        },
      )
    }
  }

  const handleMarketEdit = () => {
    const options = {
      id,
      sport,
      amount,
      action,
      status,
      imageUrl,
      personal,
      isERC721,
      playerName,
      itemId,
    }
    setSidebarContent(
      <EditNFT options={options} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  const handlePause = async () => {
    await moralis?.fn.executeFunction(adminPauseToggle(itemId, true))
  }

  const handleUnPause = async () => {
    await moralis?.fn.executeFunction(adminPauseToggle(itemId, false))
  }

  useEffect(() => {
    if (status) {
      setIsSell(status !== "NOT LISTED")
      setIsOffer(status === "Offer")
    }
  }, [status])

  return (
    <MainCardContainer>
      <GeometricCard isTeam={isTeam}>
        <TopHeaderText isSell={isSell}>{status}</TopHeaderText>
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
          {status == "Auction" && (
            <>
              <ValueWrapper>
                {`INSTANT BUYOUT - $ ${usdValue}`}&nbsp;
                <USDValue>{`(${cryptoValue} YLT)`}</USDValue>
              </ValueWrapper>
              <ValueWrapper>
                {`CURRENT BID - $ ${usdValue}`}&nbsp;
                <USDValue>{`(${cryptoValue} YLT)`}</USDValue>
              </ValueWrapper>
            </>
          )}
          {status != "Auction" && isSell && !isOffer && (
            <ValueWrapper>
              {`$ ${usdValue}`}&nbsp;
              <USDValue>{` (${cryptoValue} YLT)`}</USDValue>
            </ValueWrapper>
          )}
        </NameBlock>
        <ColorBrickContainer isTeam={isTeam}>
          <ColorBrick color={brickColor} />
        </ColorBrickContainer>
        <TextBrickContainer isTeam={isTeam}>
          <TextBrick isTeam={isTeam}>{sport}</TextBrick>
        </TextBrickContainer>
        {action[0] !== "" ? (
          <ButtonContainer isSell={isSell}>
            <ActionBtn
              onClick={
                action[0] !== "EDIT"
                  ? handleSell
                  : status === "MARKETPLACE"
                  ? handleMarketEdit
                  : handleEditAuction
              }
              action={action[0]}
            >
              {action[0]}
            </ActionBtn>
            <ActionBtn
              onClick={
                action[1] == "ADD IN OFFER"
                  ? handleClickAddInOffer
                  : action[1] == "PAUSE"
                  ? handlePause
                  : handleUnPause
              }
              action={action[1]}
            >
              {action[1]}
            </ActionBtn>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <ActionBtn isOffer onClick={handleRemoveFromOffer} action={action[1]}>
              {action[1]}
            </ActionBtn>
          </ButtonContainer>
        )}
      </GeometricCard>
    </MainCardContainer>
  )
}
