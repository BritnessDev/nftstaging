import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  height: 40%;
  border-radius: 5px;
  position: relative;
  border: 1px solid black;
  overflow: hidden;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const HeroImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  position: absolute;
  top: 0;
`

export const CardContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 10;
  padding-top: 1rem;
`

export const CardDetailsContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: #fff;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`

export const CardDetailsInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const LeftContainer = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const CardTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #242424;
  text-transform: uppercase;
`
export const CardFeature = styled.p`
  font-size: 0.6rem;
  font-weight: 300;
  color: #242424;
`

export const RightContainer = styled.div`
  width: 38%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  span {
    font-size: 0.7rem;
    color: #242424;
    font-weight: 500;
  }

  p {
    text-align: right;
    font-size: 0.5rem;
    font-weight: 200;
    color: #242424;
  }
`

export const CardTotal = styled.p`
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  color: #242424;
  width: 50%;
  height: 2rem;
  margin-top: 0.8rem;
`

export const Button = styled.button`
  width: 100%;
  height: 2rem;
  background-color: #3985f5;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`
