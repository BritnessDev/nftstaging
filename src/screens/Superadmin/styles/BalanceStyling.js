import styled from "styled-components"
import DT from "../../../static/design-token.json"

export const BalanceContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 179, 255);
  background: linear-gradient(
    41deg,
    rgba(0, 179, 255, 0.5) 0%,
    rgba(52, 52, 186, 0.7) 16%,
    rgba(77, 56, 202, 0.6) 80%,
    rgba(161, 70, 255, 0.5) 100%
  );
  position: relative;
  border-radius: 0.3rem;
`

export const BalanceInCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 20px 0;
`

export const BalanceTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  @media only screen and (min-width: ${DT.breakpoints.lg}) {
    font-size: 12px;
    font-weight: 500;
  }
`

export const BalanceInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WidthSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: auto;
  padding-top: 5px;
`

export const TokenImage = styled.img`
  width: 2rem;
  height: 2rem;
`

export const BalanceValue = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-left: 1rem;
  .ant-spin-dot-item {
    background-color: #ddd;
  }
  @media only screen and (min-width: ${DT.breakpoints.lg}) {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: ${DT.breakpoints.xl}) {
    font-size: 2rem;
  }
`

export const SpinClass = styled.div`

`

export const BalanceValuesContainer = styled.div`
  display: flex;
  align-items: center;
  width: 93%;
  height: 21%;
  position: absolute;
  padding: 3px 0 3px 0;
  bottom: 0;
  background-color: transparent;
  border-top: 1px solid #aaa;
`

export const BalanceValueUSD = styled.p`
  font-size: 1rem;
  color: #fff;
  font-weight: 300;
  margin-left: 1rem;
  border-left: 1px solid #aaa;
  padding-left: 1rem;
`

export const BalanceButton = styled.button`
  width: 85%;
  background-color: rgba(255, 255, 255, 0.12);
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  margin: auto;
  margin-top: 15px;
  padding: 8px;
  display: block;
`