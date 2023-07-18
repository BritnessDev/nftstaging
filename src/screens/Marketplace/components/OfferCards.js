import NFTGeometricCard from "components/NFTGeometricCard"
import React from "react"
import { nftCards } from "utils/dummyData"
import { CardsContainer } from "../styles/InfoElements"

const OfferCards = () => {
  return (
    <>
      {nftCards.map((card) => (
        <NFTGeometricCard
          key={card.id}
          brickColor={card.brickColor}
          text={card.sport}
          playerName={card.title}
          usdValue={card.priceUSD}
          imageUrl={card.imgSrc}
          cryptoValue={card.price}
          speed={card.speed}
          dexterity={card.dexterity}
          stamina={card.stamina}
          dribbling={card.dribbling}
          finishing={card.finishing}
          buy
          buyAndSell
          transfer
        />
      ))}
    </>
  )
}

export default OfferCards
