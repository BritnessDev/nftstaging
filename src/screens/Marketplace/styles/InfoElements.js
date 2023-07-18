import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import DT from "../../../static/design-token.json"

export const InfoContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (max-width: ${DT.breakpoints.xl}) {
    padding: 0 10px;
  }

  @media screen and (max-width: ${DT.breakpoints.md}) {
    padding: 0px 5px;
  }
`

export const InnerHeaderContainer = styled.div`
  width: 100%;
  display: Flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 42px;
`

export const InnerHeaderLabel = styled.div`
  color: #242424;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 72px;
  margin-bottom: 48px;

  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    font-size: 52px;
  }
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    font-size: 44px;
  }
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    font-size: 38px;
  }
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    font-size: 24px;
  }
`

export const Heading = styled.h1`
  color: #242424;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 15px;
  font-size: 4rem;
  line-height: 4rem;

  /* @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    font-size: 4rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    font-size: 4rem;
    margin-right: 0.5rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    margin: 0;
    font-size: 4.5rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.md}) {
    margin: 0;
    font-size: 4rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    font-size: 3rem;
    align-self: flex-start;
  }
  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    margin: 0;
    font-size: 2rem;
    align-self: flex-start;
  } */
`

export const BackButton = styled.button`
  align-self: flex-start;
  text-transform: capitalize;
  font-size: 1rem;
  color: #242424;
  border: none;
  background: none;

  &::before {
    content: "←";
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`

export const MainInnerContainer = styled.div`
  display: flex;
  margin-bottom: 10rem;
`

export const FiltersContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  margin-right: 2rem;
`

export const CardContainer = styled.div`
  width: 74%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
  margin-top: 5rem;
`

export const NftCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5rem;
  column-gap: 0rem;
  margin-top: 0rem;

  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

export const TabContainer = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${DT.breakpoints.md}) {
    flex-direction: column;
  }
`

export const TabFilterBar = styled.div`
  display: flex;
  justify-content: end;
`

export const CardsContainer = styled.div`
  margin-top: 10rem;
`
