import styled, { css } from "styled-components"
import DT from "../../../static/design-token.json"

export const ButtonsContainer = styled.div`
  position: absolute;
  left: 27.5%;
  background-color: #bfbfd1;
  border-radius: 0.3rem;
  width: 69.5%;
  height: 4rem;
`
export const OfficialOfferAuctionButtonsContainer = styled.div`
  background-color: #bfbfd1;
  border-radius: 0.3rem;
  width: 100%;
  height: 4rem;
`

export const LeftButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  height: 100%;
  font-size: 1.5rem;
  text-transform: uppercase;
  width: 50%;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #90e040;
  }

  ${({ active }) =>
    active === "left" && active !== "right"
      ? `background-color: #FFFFFF; color: #3985F5`
      : `background-color: transparent; color: #fff`}
`

export const RightButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  height: 100%;
  font-size: 1.5rem;
  text-transform: uppercase;
  width: 50%;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #90e040;
  }

  ${({ active }) =>
    active === "right" && active !== "left" && active !== ""
      ? `background-color: #FFFFFF; color: #3985F5;`
      : `background-color: transparent; color: #fff`}
`
export const TypoTitle = styled.span`

  @media screen and (max-width: ${DT.breakpoints.md}) {
    font-size: 16px;
  }
`