import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

export const RightSideContainer = styled.div`
  width: 80%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  border-radius: 20px;
`

export const CardImage = styled.img`
  /* position: absolute; */
  /* width: 100%; */
  height: 60%;
  object-fit: contain;
  margin: 0 auto;
  margin-top: 2rem;
`
