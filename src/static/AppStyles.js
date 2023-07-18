import styled from "styled-components"
import DT from "../static/design-token.json"

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Roboto, sans-serif";
  color: "#041836";
  box-sizing: border-box;
  margin-top: 6rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  position: relative;
  overflow: auto;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    margin-top: 6rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    margin-top: 70px;
  }
`
