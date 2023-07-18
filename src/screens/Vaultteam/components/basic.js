import styled, { css } from "styled-components"
export const BackButton = styled.button`
  align-self: flex-start;
  text-transform: uppercase;
  font-size: 1rem;
  color: #242424;
  border: none;
  background: none;
  cursor: pointer;
  &::before {
    content: "←";
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`
export const ArrowBtn = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 10%;
  right: ${({ type }) => (type === "right" ? "7%" : "unset")};
  left: ${({ type }) => (type === "left" ? "7%" : "unset")};
  width: 33px;
  height: 33px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.55);
  cursor: pointer;
  z-index: 5;
  color: #3985f5;
  text-align: center;
  font-size: 20px;
  transition: 0.4s;
  &:hover {
    background-color: #242424;
    color: #ffffff;
  }
`