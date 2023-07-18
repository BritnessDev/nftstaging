import React from "react"
import {
  Button,
  CardContainer,
  CardDetailsContainer,
  CardDetailsInnerContainer,
  CardFeature,
  CardImage,
  CardTitle,
  CardTotal,
  HeroImage,
  LeftContainer,
  MainContainer,
  RightContainer,
} from "./styles/AddOfferCardStyling"
import bgImage from "../../images/shadowYellow.png"
import cardImage from "../../images/marketplace/offerCards/players/Christian_Andrade_common.webp"
import Countdown from "react-countdown"

const data = {
  bgImage: bgImage,
  cardImage: cardImage,
  name: "Christian Andrade",
  subtitle: "Athlete with enhanced performance",
  remainingCards: "4/5",
}

export const AddOfferCard = () => {
  return (
    <MainContainer>
      <HeroImage src={data.bgImage} />
      <CardContainer>
        <CardImage src={data.cardImage} />
      </CardContainer>
      <CardDetailsContainer>
        <CardDetailsInnerContainer>
          <LeftContainer>
            <CardTitle>{data.name}</CardTitle>
            <CardFeature>{data.subtitle}</CardFeature>
          </LeftContainer>
          <RightContainer>
            <Countdown date={Date.now() + 86400000} />
            <p>until the end of the promotion</p>
          </RightContainer>
        </CardDetailsInnerContainer>
        <CardTotal>{data.remainingCards} cards</CardTotal>
        <Button>choose</Button>
      </CardDetailsContainer>
    </MainContainer>
  )
}
