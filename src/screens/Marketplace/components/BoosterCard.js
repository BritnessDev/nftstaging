import React from "react"
import net from "../../../images/marketplace/booster-cards/net.svg"
import net_white from "../../../images/marketplace/booster-cards/net_white.svg"
import PriceYltLogo from "../../../images/price-ylt-logo.svg"

import {
  AttributeBox,
  AttributeImage,
  AttributeText,
  PriceLabel,
  CardContainer,
  CardInnerContainer,
  NetImage,
  PriceImage,
  PriceText,
} from "../styles/BoosterCardStyling"

const BoosterCard = ({ card }) => {
  return (
    <CardContainer>
      <CardInnerContainer bgColor={card.brickColor}>
        {card.brickColor === "#271D9A" || card.brickColor === "#242424" ? (
          <NetImage src={net_white} alt="net" />
        ) : (
          <NetImage src={net} alt="net" />
        )}
        <AttributeImage src={card.imgSrc} />
      </CardInnerContainer>
      <AttributeBox bgColor={card.brickColor}>
        <AttributeText>
          {card.sport}
        </AttributeText>
        <PriceLabel>
          <PriceImage src={PriceYltLogo} />
          <PriceText> {`${card.price} YLT`}</PriceText>
        </PriceLabel>
      </AttributeBox>
    </CardContainer>
  )
}

export default BoosterCard
