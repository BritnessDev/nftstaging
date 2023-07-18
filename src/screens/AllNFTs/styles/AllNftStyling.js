import styled from "styled-components"
import DT from "../../../static/design-token.json"

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-right: 15px;
  padding-left: 15px;
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const BackBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-top: 2rem;

  &:hover {
    color: #3985f5;
    text-decoration: underline;
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    display: none;
  }
`

export const MainTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (max-width: ${DT.breakpoints.lg}) {
    font-size: 24px;
  }
  @media screen and (max-width: ${DT.breakpoints.xs}) {
    font-size: 20px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const Button = styled.button`
  height: 100%;
  border: none;
  border-radius: 5px;
  background-color: #3985f5;
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  @media screen and (max-width: ${DT.breakpoints.lg}) {
    width: 120px;
    font-size: 12px;
  }
  @media screen and (max-width: ${DT.breakpoints.xs}) {
    padding: 8px;
    font-size: 12px;
  }
`

export const TopInnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  @media screen and (max-width: ${DT.breakpoints.md}) {
    flex-direction: column;
    gap: 12px;
  }
`

export const TopLeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const FilterButton = styled.button`
  border: none;
  border-radius: 16px;
  outline: none;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.active === props.id ? "#3985f5" : "transparent"};
  color: ${(props) => (props.active === props.id ? "white" : "#3985f5")};
  border: 1px solid #3985f5;
  padding: 15px;
  cursor: pointer;
  @media screen and (max-width: ${DT.breakpoints.lg}) {
    padding: 10px;
    font-size: 12px;
  }
`

export const TopRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Input = styled.input`
  width: 520px;
  height: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 16px;
  background-color: #e0e0e5;
  @media screen and (max-width: ${DT.breakpoints.xl}) {
    width: 300px;
  }
  @media screen and (max-width: ${DT.breakpoints.lg}) {
    padding: 12px;
    width: 190px;
    font-size: 12px;
  }
`

export const SearchButton = styled.button`
  width: 30%;
  border: 1px solid #3985f5;
  border-radius: 5px;
  color: #3985f5;
  text-transform: uppercase;
  padding: 12px 1rem;
  margin-left: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: #3985f5;
    color: #ffffff;
    transition: 0.3s;
  }
  @media screen and (max-width: ${DT.breakpoints.lg}) {
    padding: 8px 14px;
    font-size: 12px;
  }
`

export const StatContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .ant-select-selection-item,
  .ant-select-arrow {
    font-size: 1rem;
    font-weight: 600;
    color: #3985f5 !important;
  }
`

export const StatCounter = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #242424;
  @media screen and (max-width: ${DT.breakpoints.lg}) {
    font-size: 1rem;
  }
`

export const Select = styled.select`
  width: 10%;
  height: 100%;
  border: none;
  color: #3985f5;
  text-transform: uppercase;
  background-color: transparent;
  font-size: 0.8rem;
`

export const NftContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: ${DT.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${DT.breakpoints.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`