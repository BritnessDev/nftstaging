import styled from "styled-components"

export const OuterContainer = styled.div`
  margin-bottom: 1rem;
`

export const MainContainer = styled.div`
  width: 100%;
  height: 30vh;
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RightSideContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const RightSideTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
`

export const RightSideText = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  color: #3985f5;
`

export const ChartContainer = styled.div`
  width: 100;
  height: 100%;
  margin: 0 auto;
  margin-top: 28px;

  canvas {
    width: 100% !important;
    height: 80% !important;
  }
`

export const DropdownText = styled.p`
  font-size: 1rem;
  padding: 0.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
`
