import styled from "styled-components"
import { css } from "styled-components"
import DT from "../../../../static/design-token.json"

export const CollectionPage = styled.div`
  width: 96vw;
  overflow-x: hidden;
`

// 1st row
export const CollectionContainer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`

export const ColleactionHeaderTitle = styled.p`
  color: #242424;
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  word-spacing: 20px;
  height: 4.5rem;
  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    font-size: 2rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.md}) {
    font-size: 3rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    margin-bottom: 20px;
  }
`

export const SportContainer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
  }
`

export const SportTagList = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    overflow-x: auto;
    width: 100%;
    padding-left: 20px;
  }
`

export const SportTagStyling = styled.p`
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #242424;
  display: inline;
  font-size: 1.2rem;
  height: 2.5rem;
  margin-right: 0.4rem;
  padding: 0.3rem 1.1rem;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    transition: all 0.2 ease-in-out;
    background: #b9fc02;
    color: #242424;
  }
`

// 2nd row
export const CardOptions = styled.ul`
  align-self: flex-start;
  padding-right: 1.5rem !important;
  width: 25%;
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    display: none;
  }
`

export const CardOptionStyling = styled.li`
  background-color: #292929;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.1rem;
  text-align: center;
  text-transform: uppercase;
  padding: 0.5rem 0.8rem;
  width: 100%;

  ${({ active }) =>
    active &&
    css`
      background-color: #f5f5f0;
      color: #000;
    `}
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    margin: 60px;
  }
  @media only screen and (max-width: ${DT.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    margin: 60px;
  }
  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
  }
`
