import styled from "styled-components"
import DT from "../../../static/design-token.json"

export const MainContainer = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 5px;
  position: relative;
  align-self: flex-start;
  overflow: auto;
`

export const ConnectWalletBtn = styled.button`
  width: 100%;
  height: 10%;
  background-color: #242424;
  border: none;
  text-align: center;
  color: #90e040;
  text-transform: uppercase;
  font-weight: 300;
  text-decoration: underline;
  text-underline-offset: 8px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px 0 30px 0;
`
