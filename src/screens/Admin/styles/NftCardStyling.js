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
  font-size: larger;
  color: #000;
  font-weight: bold;
  font-size: 0.8rem;
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
`
export const PlayerImage = styled.img`
  height: 13.7rem;
  max-width: 180px;
  width: 100%;
`

export const PlayerStats = styled.div`
  display: flex;
  flex-direction: column;
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
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`
export const IconImg = styled.img`
  height: 0.7rem;
  width: 0.7rem;
`

export const WeightText = styled.p`
  font-size: xx-small;
`

export const GeometricCard = styled.div`
  height: 100%;
  width: 19.5rem;
  padding: 4px;
  border: 1px solid #bebebe;
  background-color: #ffffff;
  border-radius: 5px;
  position: relative;
`
export const ColorBrickContainer = styled.div`
  height: 3.5rem;
  width: 1.2rem;
  position: absolute;
  left: -1px;
  top: 4rem;
  border: 1px solid #bebebe;
  border-left: none;
  background-color: #e7e9ed;
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
  background-color: #e7e9ed;
  border-radius: 1px;
  display: flex;
  align-items: center;
  border-top-right-radius: 60px 30px;
  border-bottom-right-radius: 60px 30px;
`
export const TextBrick = styled.p`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  width: 70%;
  text-align: center;
  font-weight: bold;
  color: #000;
  height: 80%;
  text-transform: uppercase;
  font-size: 9px;
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
  background-color: rgba(57, 133, 245, 0.2);
  color: ${(props) => ((props.action === "REMOVE" || props.action === "PAUSE") ? '#F24848': '#3985f5')};
  text-align: center;
  border: none;
  outline: none;
  width: ${(props) => (props.isOffer ? `100%` : `49%`)};
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => (props.isSell ? `1rem` : `2.35rem`)};
`
