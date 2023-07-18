import React from "react"
import { ActionText, MainBoxContainer } from "./styles/AdminOptionStyles"

const OptionsBox = ({ action, to, airdrop }) => {
  return (
    <MainBoxContainer action={action} to={to} airdrop={airdrop}>
      <ActionText>{action}</ActionText>
    </MainBoxContainer>
  )
}

export default OptionsBox
