import styled from "styled-components"
import { css } from "styled-components"
import DT from "../../../static/design-token.json"

export const LeftMenuWidth = styled.div`
  text-align: center;

  @media screen and (min-width: ${DT.breakpoints.xl2}) {
    width: 19%;
    margin-right: 1%;
    position: absolute;
    top: 11rem;
  }

  @media screen and (max-width: ${DT.breakpoints.xl2}) {
    width: 19%;
    margin-right: 1%;
    position: absolute;
    top: 10rem;
  }

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    position: relative;
    width: 100%;
    margin-right: 1rem;
    margin-top: 0rem;
    top: 6rem;
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    width: 100%;
    margin-top: 4rem;
  }

  @media screen and (max-width: ${DT.breakpoints.md}) {
    width: 100%;
    margin-top: 3rem;
  }

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    width: 100%;
    margin-top: 2rem;
    margin-right: 0;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    width: 100%;
    margin-top: 1rem;
  }
`

export const FormButton = styled.button`
  margin-top: 2px;
  background: #292929;
  padding: 26px 0;
  border: none;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  position: relative;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    display: block;
    padding: 10px 10px;
    margin-top: 5px;

    ${({ all }) =>
      all &&
      css`
        background-color: transparent;
        border: 1px solid #292929;
        padding: 10px;
        color: #b9fd02;
        &:after {
          content: "⌄";
          position: absolute;
          right: 20px;
          font-size: 30px;
          top: -10px;
        }
      `};
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    display: block;
    width: 100%;
  }

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    display: block;
    width: 100%;
  }
  @media screen and (max-width: ${DT.breakpoints.sm}) {
    display: block;
    width: 100%;
  }
`
