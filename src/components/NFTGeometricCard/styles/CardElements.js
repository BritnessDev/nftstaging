import styled, { css } from "styled-components"
import DT from "../../../static/design-token.json"

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border: 1px solid #292929;
  padding: 0.3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`
export const IconImg = styled.img`
  height: 0.7rem;
  width: 0.7rem;
`

export const WeightText = styled.p`
  color: #242424;
  font-size: xx-small;
  /* @media only screen and (max-width: ${DT.breakpoints.sm}) {
    color: red;
  } */
`

export const ButtonGroup = styled.div`
  position: absolute;
  bottom: 2.5px;
  left: 0;
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
`

export const ButtonSelector = styled.button`
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  border-bottom-left-radius: ${(props) => props.leftCorner};
  border-bottom-right-radius: ${(props) => props.rightCorner};
  justify-content: center;
  align-items: center;
  width: 98%;
  margin: 0 auto;
  background: ${(props) =>
    props.activeButton === "DoubleRectangle" ? "#292929" : "transparent"};
  cursor: pointer;
  text-transform: uppercase;
  height: 30px;
  :hover {
    background: black;
    color: white;
  }
`

export const ButtonText = styled.p`
  color: black;
  font-size: 1.5rem;
  text-transform: uppercase;
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
  font-size: 0.8rem;
  color: #000;
  font-weight: 700;
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
  gap: 5px;
  justify-content: center;
  margin-top: 20px;
`

export const PlayerImage = styled.img`
  height: 12rem;
  max-width: 100%;
  width: 150px;
  margin-bottom: 1rem;
`

export const PlayerStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export const GeometricCard = styled.div`
  height: 22rem;
  width: 16.5rem;
  padding-top: 1rem;
  border: 1px solid #bebebe;
  border-radius: 5px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`

export const ColorBrickContainer = styled.div`
  height: 3rem;
  width: 1rem;
  position: absolute;
  left: -1px;
  top: 3.5rem;
  border: 1px solid #bebebe;
  border-left: none;
  background-color: #f6f6f7;
  border-radius: 1px;
  display: flex;
  align-items: center;
  border-top-right-radius: 60px 20px;
  border-bottom-right-radius: 60px 20px;
`
export const ColorBrick = styled.div`
  background-color: ${(props) => props.color};
  padding-right: 3px;
  border-top-right-radius: 60px 20px;
  border-bottom-right-radius: 60px 20px;
  width: 75%;
  height: 80%;
`

export const TextBrickContainer = styled.div`
  height: 8rem;
  width: 1rem;
  position: absolute;
  left: -1px;
  top: 9rem;
  border: 1px solid #bebebe;
  border-left: none;
  background-color: #e7e9ed;
  border-radius: 1px;
  display: flex;
  align-items: center;
  border-top-right-radius: 60px 20px;
  border-bottom-right-radius: 60px 20px;
`
export const TextBrick = styled.p`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  width: 75%;
  text-align: center;
  font-weight: bold;
  color: #000;
  height: 80%;
  text-transform: uppercase;
  font-size: 9px;
`
