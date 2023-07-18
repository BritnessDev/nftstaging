import styled from "styled-components"

export const MainContainer = styled.button`
  width: 100%;
  background-color: #242424;
  color: #fff;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 23px;
  padding-left: 28px;
  cursor: pointer;
  border: none;
  outline: none;

  svg {
    color: #3985f5 !important;
    font-size: 1.5rem;
  }

  &:hover {
    p {
      color: #3985f5;
    }
  }
`

export const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: 1.5rem;
  color: #fff;
`
