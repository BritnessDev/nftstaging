import React from "react"
import {
  BoxNumber,
  BoxStyling,
  BoxStylingNoLeftBorder,
  BoxStylingNoRightBorder,
  BoxTitle,
  IconContainer,
  IconImage,
} from "./styles/AccountStatsStyling"

export const Box = ({ title, number, right, left, center, image }) => {
  return (
    <>
      {right && (
        <BoxStylingNoRightBorder>
          <BoxTitle>{title}</BoxTitle>
          {image ? (
            <IconContainer>
              <IconImage
                src={require("../../../images/account/awards_icon.svg").default}
                alt="arrowRightBlack"
              />
              <BoxNumber>{number}</BoxNumber>
            </IconContainer>
          ) : (
            <BoxNumber>{number}</BoxNumber>
          )}
        </BoxStylingNoRightBorder>
      )}
      {left && (
        <BoxStylingNoLeftBorder>
          <BoxTitle>{title}</BoxTitle>

          {image ? (
            <IconContainer>
              <IconImage
                src={require("../../../images/account/cards_icon.svg").default}
                alt="cards_icon"
              />
              <BoxNumber>{number}</BoxNumber>
            </IconContainer>
          ) : (
            <BoxNumber>{number}</BoxNumber>
          )}
        </BoxStylingNoLeftBorder>
      )}
      {center && (
        <BoxStyling>
          <BoxTitle>{title}</BoxTitle>
          {image ? (
            <IconContainer>
              <IconImage
                src={
                  require("../../../images/account/teams_power_icon.svg")
                    .default
                }
                alt="arrowRightBlack"
              />
              <BoxNumber>{number}</BoxNumber>
            </IconContainer>
          ) : (
            <BoxNumber>{number}</BoxNumber>
          )}
        </BoxStyling>
      )}
    </>
  )
}
