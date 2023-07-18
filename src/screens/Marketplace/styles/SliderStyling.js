import styled, { css } from "styled-components"
import DT from "../../../static/design-token.json"

export const SlidersContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  height: 100vh;
  position: relative;
  margin: 0 auto;
`

export const SliderContainer = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const SliderHeading = styled.p`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 10rem;
  margin-left: 1.2rem;
`

export const SeeAllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242424;
  color: #fff;
  border-radius: 24px;
  width: 16.5rem;
  height: 22.5rem;

  p {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #b9fd02;
  }
`

export const ArrowBtn = styled.span`
  display: inline-block;
  position: absolute;
  top: 30%;
  right: ${({ type }) => (type === "right" ? "0px" : "unset")};
  left: ${({ type }) => (type === "left" ? "0px" : "unset")};
  width: 45px;
  height: 45px;
  background: #242424;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.55);
  cursor: pointer;
  z-index: 5;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${({ type }) =>
      type === "right"
        ? "translate(-75%, -50%) rotate(45deg)"
        : "translate(-25%, -50%) rotate(-135deg)"};
    width: 10px;
    height: 10px;
    border-top: 2px solid #b9fd02;
    border-right: 2px solid #b9fd02;
  }
  &:hover::after {
    border-color: #b9fd02;
  }
  &:hover {
    background-color: #fff;
  }
`
