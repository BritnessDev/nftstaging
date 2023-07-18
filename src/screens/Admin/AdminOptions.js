import React from "react"
import OptionsBox from "./OptionsBox"
import { MainContainer } from "./styles/AdminOptionStyles"

export const AdminOptions = ({ options, airdrop }) => {
  return (
    <MainContainer>
      {options.map((option) => (
        <OptionsBox action={option.title} key={option.id} to={options.to} />
      ))}
      {airdrop && (
        <OptionsBox
          action="create nft"
          to="/admin/createNFT"
          airdrop={airdrop}
        />
      )}
    </MainContainer>
  )
}
