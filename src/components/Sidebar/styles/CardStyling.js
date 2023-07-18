import styled, { css } from "styled-components"

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  position: relative;
`

export const CardTitleContainer = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #000;
`

export const CardTitleBadge = styled.p`
  font-size: 0.6rem;
  font-weight: 300;
  color: #242424;
  padding: 0.3rem;
  border-radius: 0.5rem;
  text-transform: uppercase;

  background-color: #ccc;

  ${({ badge }) =>
    badge === "New" &&
    css`
      background-color: #90e040;
    `}
`

export const CardTimestamp = styled.p`
  font-size: 0.6rem;
  font-weight: 300;
  color: #242424;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`

export const CardDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: #242424;
  margin-top: 1rem;
`
