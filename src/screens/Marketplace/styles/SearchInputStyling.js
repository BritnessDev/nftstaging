import styled from "styled-components"
import DT from "../../../static/design-token.json"

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    position: absolute;
    left: 20%;
    width: 80%;
    margin-top: 2rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    position: absolute;
    right: 0;
    width: 80%;
  }

  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    flex-direction: row;
    width: 80%;
    position: absolute;
    left: 20%;
  }

  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    flex-direction: column;
    width: 100%;
    left: 0;
  }

  @media only screen and (max-width: ${DT.breakpoints.md}) {
    flex-direction: column;
    width: 100%;
    left: 0;
  }

  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    left: 0;
  }
`

export const Heading = styled.h1`
  color: #242424;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 15px;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
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
  }
`

export const SearchBarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  color: #000;
  position: relative;
  align-self: center;

  svg {
    position: absolute;
    align-self: center;
    right: 20px;
    color: #b9fd02;
    top: 50%;
  }

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    width: 50%;
    margin-left: 0.5rem;

    svg {
      top: 20px;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    width: 57%;

    svg {
      top: 17px;
      right: 50px;
    }
  }

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    width: 50%;

    svg {
      top: 15px;
    }
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    width: 100%;
  }

  @media screen and (max-width: ${DT.breakpoints.md}) {
    width: 100%;
  }

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    width: 100%;
    align-self: flex-start;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    svg {
      top: 15px;
      right: 45px;
    }
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    svg {
      top: 15px;
      right: 30px;
    }
  }
`

export const FormInput = styled.input`
  /* background: #292929; */
  padding: 1rem 2rem;
  border: 1px solid #242424;
  border-radius: 16px;
  color: #fff;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    width: 100%;
  }

  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    width: 100%;
  }

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    /* margin-left: 0.7rem; */
    width: 100%;
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    margin-left: 0;
  }

  @media screen and (max-width: ${DT.breakpoints.md}) {
    width: 100%;
    margin-left: 0;
  }

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    width: 95%;
    padding: 14px 16px;
    margin: 0;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    width: 95%;
    padding: 16px;
  }
`

export const FiltersIcons = styled.img`
  display: none;

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    margin-left: 0.5rem;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    width: 1rem;
    height: 1rem;
  }
`
