import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import DT from "../../../static/design-token.json"

export const SubscribeBoxContainer = styled.div`
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 4.5rem;
  margin-bottom: 1rem;
  padding: 20px;
  background: rgb(144, 224, 64);
  background: linear-gradient(
    204deg,
    rgba(144, 224, 64, 1) 0%,
    rgba(57, 133, 245, 1) 53%,
    rgba(255, 255, 255, 1) 100%
  );
  background-position: right top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 98%;

  p {
    text-align: left;
    font-size: 58px;
    line-height: 68px;
    font-weight: bold;
    text-transform: uppercase;
    color: #242424;
  }

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    padding: 3rem 5rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    p {
      font-size: 40px;
      line-height: 50px;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    margin-top: 2rem;
    padding: 3rem;

    p {
      font-size: 2.5rem;
      line-height: 54px;
      font-weight: 700;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    margin-top: 7rem;
    p {
      font-size: 36px;
      line-height: 40px;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.md}) {
    padding: 3rem 4.5rem;
    p {
      font-size: 30px;
      line-height: 36px;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    padding: 2rem 4rem;
    p {
      font-size: 55px;
      line-height: 68px;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    border-radius: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    background-color: #191919;
    background-position: right bottom;
    margin-top: 50px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 2rem;

    p {
      font-size: 36px;
      line-height: 44px;
      width: 50%;
      font-weight: 600;
      letter-spacing: 3px;
    }
  }
`

export const InnerSubscribeBox = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    width: 55%;
    font-size: 24px;
    line-height: 28px;
  }

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    p {
      font-size: 1.35rem;
      font-weight: 300;
      line-height: 1.8rem;
      width: 30%;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    width: 100%;
    margin-top: 0;

    p {
      width: 40%;
      font-size: 1.2rem;
      font-weight: 300;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    width: 100%;

    p {
      font-size: 1rem;
      font-weight: 200;
      line-height: 28px;
      width: 45%;
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    margin-top: 0;
  }

  @media screen and (max-width: ${DT.breakpoints.md}) {
    width: 100%;
    margin-top: 0px;

    p {
      width: 45%;
      font-size: 12px;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    width: 100%;
    flex-direction: column;

    p {
      width: 100%;
      font-size: 16px;
      letter-spacing: 3px;
      text-transform: none;
      margin-bottom: 1.5rem;
    }
  }

  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    flex-direction: column;
    margin-top: 1.5rem;
    width: 100%;

    p {
      font-size: 10px;
      width: 100%;
      text-transform: none;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 2.2px;
    }
  }
`

export const InputContainer = styled.div`
  @media only screen and (min-width: ${DT.breakpoints.lg}) {
    width: 45%;
  }
  @media only screen and (max-width: ${DT.breakpoints.md}) {
    width: 45%;
  }
  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    width: 100%;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    width: 100%;
  }
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "#fff"};
  font-weight: bold;
  background: transparent;
  border: none;
  width: 400px;
  border-bottom: 1px solid #fff;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    width: 70%;
    margin: 0;
    margin-left: 0.9rem;
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: 0;
  }

  @media only screen and (max-width: ${DT.breakpoints.md}) {
    width: 100%;
    margin-bottom: 0.6rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    width: 100%;
    margin: 0;
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    margin-top: 20px;
    width: 97%;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
`

export const NavBtn = styled.button`
  display: flex;
  align-items: center;
  margin-left: 8px;
  border-radius: 5px;
  outline: none;
  border: none;
  justify-content: center;
  right: 0;
  bottom: 0rem;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    width: 70%;
    margin: 0;
    margin-left: 0.9rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    margin: 0 auto;
    margin-top: 1rem;
    margin-left: 1rem;
    width: 390px;
  }

  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    margin: 0 auto;
    width: 100%;
  }

  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    margin-left: 0;
  }

  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    width: 97%;
    margin: 0;
    margin-top: 0.5rem;
  }
`

export const NavBtnLink = styled.a`
  border-radius: 8px;
  background: #b9fd02;
  white-space: nowrap;
  padding: 10px 30px;
  text-transform: uppercase;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 100%;
  text-align: center;
  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    width: 100%;
  }

  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    width: 100%;
    border-radius: 5px;
    font-size: 18px;
  }
`
