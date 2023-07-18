import styled from "styled-components"
import DT from "../../../static/design-token.json"

export const BoosterContainer = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 20px;

  p {
    color: #fff;
    padding: 1.6rem 1.8rem;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }

  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    flex-direction: column;
  }
`

export const Booster = styled.div`
  width: 32.5%;
  background-color: ${({ bg }) => bg};
  border-radius: 20px;
  height: 24rem;
  position: relative;

  p {
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 500;
  }

  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    height: 22rem;

    p {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    height: 280px;
    border-radius: 30px;

    p {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    width: 100%;

    p {
      line-height: 30px;
    }
  }
`

export const BoosterImg = styled.img`
  border-radius: 20px;
  border-top-right-radius: 0px;
  position: absolute;
  bottom: -0.2rem;

  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    bottom: -0.2rem;
  }
`
