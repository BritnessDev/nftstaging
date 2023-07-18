import NFTGeometricCard from "components/NFTGeometricCard"
import NFTGeometricCard2 from "components/NFTGeometricCard/NFTGeometricCard2"
import React from "react"
import { nftCards } from "utils/dummyData"
// import { TeamStats } from "../Collections/dummy_data"
import MyStatLi from "./MyStatLi"
import {
  CoachOptions,
  CoachReplace,
  CoachTitle,
  FirstRowBackButton,
  FirstRowContainer,
  LeftSide,
  MainContainer,
  RightSide,
  SecondRowContainer,
  StatList,
  StatsButton,
  TeamLogoImage,
  TeamLogoImageContainer,
  TeamLogoStyling,
  TeamName,
} from "./styles/MyTeamsPageStyling"

const MyTeamsPage = ({ team = "team" }) => {
  return (
    <MainContainer>
      {/* 1st Row */}
      <FirstRowContainer>
        <FirstRowBackButton>back</FirstRowBackButton>
        <TeamLogoStyling>
          <TeamLogoImageContainer>
            {/* <TeamLogoImage
              src={require("../../../images/spartak_logo.png").default}
            /> */}
          </TeamLogoImageContainer>
          <TeamName>Spartak</TeamName>

          {/* <StatList>
            {TeamStats.map((stat) => (
              <MyStatLi key={stat.id} field={stat.field} value={stat.value} />
            ))}
          </StatList> */}
          <StatsButton>disband</StatsButton>
        </TeamLogoStyling>
      </FirstRowContainer>

      {/* 2nd Row */}
      <SecondRowContainer>
        {/* 1st Row */}
        <LeftSide>
          <CoachOptions>
            <CoachTitle>Trainer</CoachTitle>
            <CoachReplace>Replace</CoachReplace>
          </CoachOptions>
        </LeftSide>
        <RightSide>
          {nftCards.map((card) => {
            return (
              card.id <= 5 && (
                <NFTGeometricCard2
                  brickColor={card.brickColor}
                  imageUrl={card.imageUrl}
                  playerName={card.playerName}
                  usdValue={card.usdValue}
                  cryptoValue={card.cryptoValue}
                  text={card.text}
                  isTeam={team}
                />
              )
            )
          })}
        </RightSide>
        {/* 2nd Row */}
      </SecondRowContainer>
    </MainContainer>
  )
}

export default MyTeamsPage
