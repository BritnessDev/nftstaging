import styled from "styled-components"

export const MainContainer = styled.div`
  width: 55%;
  height: 70%;
  border: none;
  border-radius: 24px;
  background-color: #242424;
  padding: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export const BalanceTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const TokenImage = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 1rem;
`

export const BalanceText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`

export const BalanceTextUSD = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #646464;
  text-transform: uppercase;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`

export const TopUpButton = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 12px;
  background-color: #b9fd02;
  color: #242424;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: #242424;
    color: #b9fd02;
  }
`
