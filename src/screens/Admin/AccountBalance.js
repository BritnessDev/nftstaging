import React from "react"
import {
  BalanceText,
  BalanceTextContainer,
  BalanceTextUSD,
  MainContainer,
  TokenImage,
  TopUpButton,
} from "./styles/AccountBalanceStyles"

export const AccountBalance = ({ tokenImg, tokenValue, tokenValueUSD }) => {
  return (
    <MainContainer>
      <BalanceTextContainer>
        <TokenImage src={tokenImg} />
        <BalanceText>{tokenValue}</BalanceText>
      </BalanceTextContainer>
      <BalanceTextUSD>${tokenValueUSD}</BalanceTextUSD>
      <TopUpButton>Top Up</TopUpButton>
      <TopUpButton>Deposit</TopUpButton>
    </MainContainer>
  )
}
