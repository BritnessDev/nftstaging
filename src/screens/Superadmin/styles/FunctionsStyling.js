import styled from "styled-components"
import DT from "../../../static/design-token.json"

export const FunctionsContainer = styled.div`
  width: 100%;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 5px;
  margin-top: 0.5rem;
  padding-bottom: 4rem;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    height: 28%;
  }

  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    height: 25%;
  }
`
