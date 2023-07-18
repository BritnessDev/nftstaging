import styled, { css } from "styled-components"

export const AccountContainerStyling = styled.div`
  height: 100%;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  position: relative;
  width: 100vw;
`

export const FirstRowContainerStyling = styled.div`
  align-items: center;
  display: flex;
  height: 60vh;
  justify-content: space-between;
  width: 100%;
`

export const FirstRowInnerContainerStyling = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

// 2nd Row
export const SecondRowContainerStyling = styled.div`
  align-items: center;
  display: flex;
  height: 45vh;
  justify-content: flex-start;
  margin-top: 10rem;
  position: relative;
  width: 100%;
`

export const BoxContainerStyling = styled.div`
  align-items: center;
  background-color: #242424;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 90%;
`

export const TournanemntImage = styled.img`
  background-color: lightgreen;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  height: 100%;
  width: 75%;
  margin-left: -2rem;
`

export const PrizesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: space-between;
  margin: 0 auto;
  width: 22%;
`

export const PrizesTitle = styled.p`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`

export const TournamentPositionContainer = styled.div`
  align-items: center;
  border-radius: 20px;
  display: flex;
  height: 2.5rem;
  justify-content: space-between;
  width: 100%;

  background-color: ${({ color }) => color};
`

export const Position = styled.p`
  border-right: 1px solid white;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  height: 70%;
  padding-left: 1rem;
  width: 25%;
`

export const Prize = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  height: 80%;
  padding-left: 4rem;
  text-align: left;
  width: 70%;
`

export const EnrollButton = styled.a`
  background-color: #b9fd02;
  color: black;
  font-size: 1.2rem;
  letter-spacing: 1.3px;
  margin-top: 0.5rem;
  padding: 1rem 1.5rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`

export const RightBox = styled.div`
  border: 1px solid #b9fc02;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  right: 1rem;
  position: absolute;
  top: 0.8rem;
  text-align: center;
  width: 7rem;
  cursor: pointer;

  p {
    color: #242424;
    font-size: 1rem;
    width: 100%;
  }
`

// 3rd Row
export const ThirdRowContainerStyling = styled.div`
  height: 10vh;
  height: 60vh;
  margin-top: 4rem;
  width: 70%;
`

export const SportsOuterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 4rem;
`

export const ThirdRowTitle = styled.p`
  color: #242424;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const SportsCategoriesContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-left: 2rem;
`

export const SportsCategoryTitle = styled.p`
  border: 1px solid #242424;
  border-radius: 0.5rem;
  color: #242424;
  font-size: 0.6rem;
  padding: 0.3rem 0.7rem;
  text-transform: uppercase;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: #242424;
      color: #fff;
    `}
`

export const TeamContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  position: relative;
`

export const TeamLogoContainer = styled.div`
  height: 15rem;
  margin-top: 5rem;
  margin-right: 3rem;
  width: 16rem;
`

export const TeamLogoImage = styled.img`
  border-radius: 5px;
  height: 13rem;

  width: 16rem;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}

  ${({ noBgColor }) =>
    noBgColor &&
    css`
      padding: 3.5rem;
    `}
`

export const TeamLogoNameContainer = styled.div`
  align-items: center;
  display: flex;
  height: 2rem;
  justify-content: center;
  margin-top: 1rem;
  width: 30%;
`

export const TeamLogoName = styled.p`
  color: #242424;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
`

export const EditTeamLogoName = styled.img`
  height: 0.7rem;
  padding-top: 0.1rem;
  width: 0.7rem;
`

export const AddNewTeamTextContainer = styled.div`
  position: relative;
  width: 16rem;
`

export const AddNewTeamText = styled.p`
  bottom: 2rem;
  color: #242424;
  font-size: 0.8rem;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`
