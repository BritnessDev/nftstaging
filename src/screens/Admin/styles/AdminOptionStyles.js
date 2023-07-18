import styled from "styled-components"
import { css } from "styled-components"
import { Link } from "react-router-dom"

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-area: 1/2/5/4;
  gap: 1rem;
`

export const MainBoxContainer = styled(Link)`
  width: 100%;
  border: 1px solid #90e040;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #3985f5;
  }

  ${({ action }) =>
    action === "create nft" &&
    css`
      width: 95.5%;
      background-color: #3985f5;
    `}

  ${({ airdrop }) =>
    airdrop &&
    css`
      grid-area: 2/1/5/3;
      width: 100%;
    `}
`

export const ActionText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #242424;
  text-align: center;
  text-transform: uppercase;
`
