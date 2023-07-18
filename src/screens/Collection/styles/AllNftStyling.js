import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-right: 15px;
  padding-left: 15px;
`

export const TopContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
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
`

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const ButtonContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  width: 48%;
  height: 100%;
  border: none;
  border-radius: 5px;
  background-color: #3985f5;
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
`

export const TopInnerContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const TopLeftContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FilterButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 20px;
  outline: none;
  text-transform: uppercase;
  margin-right: 1rem;
  background-color: ${(props) =>
    props.active === props.id ? "#3985f5" : "transparent"};
  color: ${(props) => (props.active === props.id ? "white" : "#3985f5")};
  border: 1px solid #3985f5;
  padding: 10px;
  cursor: pointer;
`

export const TopRightContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Input = styled.input`
  width: 70%;
  height: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 0.5rem;
  background-color: #e0e0e5;
`

export const SearchButton = styled.button`
  width: 30%;
  height: 100%;
  border: 1px solid #3985f5;
  border-radius: 5px;
  color: #3985f5;
  text-transform: uppercase;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-left: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: #3985f5;
    color: #ffffff;
    transition: 0.3s;
  }
`

export const StatContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StatCounter = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #242424;
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
`
