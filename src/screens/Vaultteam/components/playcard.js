import { DappContext } from "context"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const NameBlock = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayerName = styled.p`
  text-transform: uppercase;
  color: #000;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`
export const ValueWrapper = styled.div`
  color: #61616a;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const YLTToken = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
`

export const USDValue = styled.span`
  color: #90e040;
`

export const Graphics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
export const PlayerImage = styled.img`
  height: 13.7rem;
  max-width: 180px;
  width: 100%;
`

export const PlayerStats = styled.div`
  display: flex;
  gap: 3px;
`

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border: none;
  background: #e7e9ed;
  padding: 0.4rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
`
export const IconImg = styled.img`
  height: 0.7rem;
  width: 0.7rem;
`

export const WeightText = styled.p`
  font-size: xx-small;
`

export const GeometricCard = styled.div`
  width: 15rem;
  padding: 4px;
  border: 1px solid #bebebe;
  background-color: #ffffff;
  border-radius: 5px;
  position: relative;
  max-height: 410px;
`
export const ColorBrickContainer = styled.div`
  height: 3.5rem;
  width: 1.2rem;
  position: absolute;
  left: -1px;
  top: 4rem;
  border: 1px solid #bebebe;
  border-left: none;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 1px;
  display: flex;
  align-items: center;
  border-top-right-radius: 60px 30px;
  border-bottom-right-radius: 60px 30px;
`
export const ColorBrick = styled.div`
  background-color: ${(props) => props.color};
  padding-right: 3px;
  border-top-right-radius: 60px 30px;
  border-bottom-right-radius: 60px 30px;
  width: 70%;
  height: 80%;
`
export const TextBrickContainer = styled.div`
  height: 8rem;
  width: 1.2rem;
  position: absolute;
  left: -1px;
  top: 8.5rem;
  border: 1px solid #bebebe;
  border-left: none;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 1px;
  display: flex;
  align-items: center;
  border-top-right-radius: 60px 30px;
  border-bottom-right-radius: 60px 30px;
`
export const TextBrick = styled.p`
  writing-mode: tb;
  transform: rotate(180deg);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 10px;
`

export const TopHeaderText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  padding: 4px 3px;
  margin-bottom: 2.3rem;
  border-radius: 3px 3px 0 0;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  // background-color: rgba(57, 133, 245, 0.2);
  background-color: ${(props) =>
    props.isSell ? `#F2F3F5` : `rgba(242, 72, 72, 0.15)`};
  color: ${(props) => (props.isSell ? `#61616A` : `#F24848`)};
`

export const ActionBtn = styled.button`
  background-color: transparent;
  color: #3985f5;
  text-transform: uppercase;
  text-align: center;
  border: none;
  outline: none;
  width: 49%;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  transition: 0.4s;
  &:hover {
    background-color: rgba(57, 133, 245, 0.2);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`

export const PlayerStat = ({ iconType, weight }) => {
  return (
    <StatItem>
      <IconImg
        src={
          require(`../../../images/account/collection/${iconType}.svg`).default
        }
      />
      <WeightText>{Math.round(weight)}</WeightText>
    </StatItem>
  )
}

export const PlayerCard = ({
  brickColor,
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
  removeItem,
  openinfo,
  sportBg,
  info,
  index,
}) => {
  const [isSell, setIsSell] = useState(false)

  const [pk, setPk] = useState({
    power: 50,
    speed: 50,
    energy: 50,
  })
  const [name, setName] = useState("PAVEL GUZEEV")
  const [avatar, setAvatar] = useState('/player.png')

  useEffect(() => {
    if (info != undefined) {
      setPk({
        power: Math.round(info.meta.personal.power),
        speed: Math.round(info.meta.personal.speed),
        energy: Math.round(info.meta.personal.energy),
      })
      setName(info.meta.name) 
      setAvatar(info.meta.image)
    }
  }, [info])

  const onClickUp = (e) => {}

  return (
    <GeometricCard>
      <Graphics>
        <Link to={`/teams`}>
          <PlayerImage src={avatar} alt="playerImage" />
        </Link>
        <NameBlock>
          <PlayerName>{name}</PlayerName>
          {isSell && (
            <ValueWrapper>
              {`${1290} YLT`}
              <USDValue>{` ($ ${3530})`}</USDValue>
            </ValueWrapper>
          )}
        </NameBlock>
        <PlayerStats>
          <PlayerStat iconType="Wheel" weight={pk.power} />
          <PlayerStat iconType="Run" weight={pk.speed} />
          <PlayerStat iconType="Stamina" weight={pk.energy} />
        </PlayerStats>
      </Graphics>

      <ColorBrickContainer bgColor={sportBg}>
        <ColorBrick color="#F7A300" />
      </ColorBrickContainer>
      <TextBrickContainer bgColor={sportBg}>
        <TextBrick>{"american football"}</TextBrick>
      </TextBrickContainer>
      <ButtonContainer>
        <ActionBtn onClick={() => openinfo(info)}>&uarr;</ActionBtn>
        <ActionBtn onClick={() => removeItem(info, index)}>&#10005;</ActionBtn>
      </ButtonContainer>
    </GeometricCard>
  )
}
