import React, { useState } from "react"
import styled from "styled-components"
import { css } from "styled-components"

const PlayerStat = ({ iconType, weight, isTeam }) => {
  return (
    <StatItem isTeam={isTeam}>
      <IconImg
        src={require(`../../images/account/collection/${iconType}.svg`).default}
        isTeam={isTeam}
      />
      <WeightText isTeam={isTeam}>{weight}</WeightText>
    </StatItem>
  )
}

const StatItem = styled.div`
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border: 1px solid #292929;
  padding: 0.3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  ${({ isTeam }) =>
    isTeam === "team" &&
    css`
      border-color: white;
    `}
`
const IconImg = styled.img`
  height: 0.7rem;
  width: 0.7rem;
`

const WeightText = styled.p`
  color: #000;
  font-size: 0.6rem;

  ${({ isTeam }) =>
    isTeam === "team" &&
    css`
      color: white;
    `}
`

const DynamicSvg = ({ svgName, active }) => {
  switch (svgName) {
    case "Up":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g opacity={active === "Up" ? "1" : "0.16"}>
            <path
              d="M12.9997 7.828V20H10.9997V7.828L5.63568 13.192L4.22168 11.778L11.9997 4L19.7777 11.778L18.3637 13.192L12.9997 7.828Z"
              fill={active === "Up" ? "#b9fd02" : "#f5f5f0"}
            />
          </g>
        </svg>
      )
    default:
      return null
  }
}

const NFTGeometricCard2 = ({
  brickColor,
  text,
  playerName,
  usdValue,
  imageUrl,
  cryptoValue,
  isTeam,
}) => {
  const [activeButton, setActiveButton] = useState("Up")
  return (
    <GeometricCard isTeam={isTeam}>
      <PlayerImage src={imageUrl} alt="playerImage" />
      <Graphics isTeam={isTeam}>
        <PlayerStats isTeam={isTeam}>
          <PlayerStat isTeam={isTeam} iconType="Run_black" weight="100" />
          <PlayerStat isTeam={isTeam} iconType="Wheel_black" weight="100" />
          <PlayerStat isTeam={isTeam} iconType="Stamina_black" weight="100" />
        </PlayerStats>
      </Graphics>
      <NameBlock>
        <PlayerName isTeam={isTeam}>{playerName}</PlayerName>
        <ValueWrapper>
          ₿ {cryptoValue}
          <USDValue>{` ($ ${usdValue})`}</USDValue>
        </ValueWrapper>
      </NameBlock>
      <ColorBrickContainer isTeam={isTeam}>
        <ColorBrick color={brickColor} />
      </ColorBrickContainer>
      <TextBrickContainer isTeam={isTeam}>
        <TextBrick isTeam={isTeam}>{text}</TextBrick>
      </TextBrickContainer>
      <ButtonGroup isTeam={isTeam}>
        <ButtonSelector onClick={() => setActiveButton("Up")}>
          <DynamicSvg svgName="Up" active={activeButton} />
        </ButtonSelector>
      </ButtonGroup>
    </GeometricCard>
  )
}

const ButtonGroup = styled.div`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 0.2rem;

  ${({ isTeam }) =>
    isTeam === "team" &&
    css`
      text-align: center;
    `}
`

const ButtonSelector = styled.button`
  width: 33.33%;
  border-radius: 5px;
  border-bottom-left-radius: ${(props) => props.leftCorner};
  border-bottom-right-radius: ${(props) => props.rightCorner};
  background: transparent;
  border: none;
  cursor: pointer;
  :hover {
    background: #292929;
  }

  ${({ isTeam }) =>
    isTeam === "team" &&
    css`
      :hover {
        background: white;
      }
    `}
`

const NameBlock = styled.div`
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const PlayerName = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
  color: #000;
  font-weight: bold;

  ${({ isTeam }) =>
    isTeam === "team" &&
    css`
      color: white;
    `}
`
const ValueWrapper = styled.p`
  color: #eb0555;
  font-weight: bold;
  font-size: 0.5rem;
`
const USDValue = styled.span`
  color: #646464;
`

const Graphics = styled.div`
  gap: 5px;
  justify-content: center;
  display: flex;
  flex-direction: row;
`

const PlayerImage = styled.img`
  height: 18rem;
  margin: 0 auto;
  margin-bottom: 1rem;
`

const PlayerStats = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 0.5rem;
`

const GeometricCard = styled.div`
  padding-top: 0.5rem;
  width: 17rem;
  height: 27rem;
  border: 1px solid #191919;
  margin-top: 0.5rem;
  border-radius: 20px;
  position: relative;

  ${({ isTeam }) =>
    isTeam === "team" &&
    css`
      margin-top: 1.3rem;
      border-color: white;
    `}
`

const ColorBrickContainer = styled.div`
  height: 2rem;
  width: 1rem;
  position: absolute;
  left: -1px;
  top: 2rem;
  border: 1px solid #191919;
  border-radius: 1px;
  display: flex;
  align-items: center;
  border-top-right-radius: 60px 20px;
  border-bottom-right-radius: 60px 20px;
  border-left: none;

  ${({ isTeam }) =>
    isTeam === "team" &&
    css`
      border-color: white;
    `}
`
const TextBrickContainer = styled.div`
  height: 8rem;
  width: 1rem;
  position: absolute;
  left: -1px;
  top: 8rem;
  border: 1px solid #191919;
  border-left: none;
  border-radius: 1px;
  display: flex;
  align-items: center;
  border-top-right-radius: 60px 20px;
  border-bottom-right-radius: 60px 20px;

  ${({ isTeam }) =>
    isTeam === "team" &&
    css`
      border-color: white;
    `}
`
const ColorBrick = styled.div`
  background-color: ${(props) => props.color};
  border-top-right-radius: 60px 20px;
  border-bottom-right-radius: 60px 20px;
  width: 70%;
  height: 80%;
`
const TextBrick = styled.p`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  width: 70%;
  text-align: center;
  font-weight: bold;
  height: 80%;
  text-transform: uppercase;
  font-size: 9px;

  ${({ isTeam }) =>
    isTeam === "team" &&
    css`
      color: white;
    `}
`

export default NFTGeometricCard2
