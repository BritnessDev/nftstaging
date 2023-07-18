import React from "react"
import {
  Booster,
  BoosterContainer,
  BoosterImg,
} from "../styles/BoostersStyling"
import BoostersImg from "../../../images/marketplace/boosters.svg"
import NftCards from "../../../images/marketplace/nftCard.svg"

export const Boosters = ({ title1, title2, title3 }) => {
  return (
    <BoosterContainer>
      <Booster bg={"#0e51fe"}>
        <p>{title1}</p>
        <BoosterImg src={BoostersImg} alt="bootsterPack" />
      </Booster>
      <Booster bg={"#292929"}>
        <p>{title2}</p>
        <BoosterImg src={NftCards} alt="nftGroup" />
      </Booster>
      <Booster bg={"#EB0555"}>
        <p>{title3}</p>
      </Booster>
    </BoosterContainer>
  )
}
