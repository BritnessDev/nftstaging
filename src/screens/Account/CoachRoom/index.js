import { useState, useContext } from "react"
import { useMoralis } from "react-moralis"
import { Modal } from "antd"
import Text from "antd/lib/typography/Text"
import AccountAchievements from "./AccountAchievements"
import AccountInfoDetails from "./AccountInfoDetails"
import AccountStats from "./AccountStats"
import SportsCategories from "./SportsCategories"
import {
  AccountContainerStyling,
  AddNewTeamText,
  AddNewTeamTextContainer,
  BoxContainerStyling,
  EditTeamLogoName,
  EnrollButton,
  FirstRowContainerStyling,
  FirstRowInnerContainerStyling,
  PrizesContainer,
  PrizesTitle,
  RightBox,
  SecondRowContainerStyling,
  SportsCategoriesContainer,
  SportsOuterContainer,
  TeamContainer,
  TeamLogoContainer,
  TeamLogoImage,
  TeamLogoName,
  TeamLogoNameContainer,
  ThirdRowContainerStyling,
  ThirdRowTitle,
  TournanemntImage,
} from "./styles/AccountElementsStyling"
import TournamentPosition from "./TournamentPosition"
import {
  ConnectorContainer,
  ConnectorInnerContainer,
  Icon,
  InnerContainer,
} from "components/Account/styles/AccountElements"
import { connectors } from "components/Account/config"

const CoachesRoom = ({ nickname, moralis }) => {
  const [active, setActive] = useState(false)
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false)
  const { user, isAuthenticated, account, authenticate } = useMoralis()

  if (!isAuthenticated || !account) {
    return (
      <>
        <Modal
          open={isAuthModalVisible}
          footer={null}
          onCancel={() => setIsAuthModalVisible(false)}
          bodyStyle={{
            padding: "15px",
            fontSize: "17px",
            fontWeight: "500",
          }}
          style={{ fontSize: "16px", fontWeight: "500", zIndex: 100 }}
          width="340px"
        >
          <InnerContainer>Connect Wallet</InnerContainer>
          <ConnectorContainer>
            {connectors.map(({ title, icon, connectorId }, key) => (
              <ConnectorInnerContainer
                key={key}
                onClick={async () => {
                  try {
                    await authenticate({ provider: connectorId })
                    window.localStorage.setItem("connectorId", connectorId)
                    setIsAuthModalVisible(false)
                  } catch (e) {
                    console.error(e)
                  }
                }}
              >
                <Icon src={icon} alt={title} />
                <Text style={{ fontSize: "14px" }}>{title}</Text>
              </ConnectorInnerContainer>
            ))}
          </ConnectorContainer>
        </Modal>
      </>
    )
  }

  return (
    <AccountContainerStyling>
      {/* 1st Row */}
      <FirstRowContainerStyling>
        <AccountInfoDetails profileName={nickname} moralis={moralis} />
        <FirstRowInnerContainerStyling>
          <AccountStats />
          <AccountAchievements />
        </FirstRowInnerContainerStyling>
      </FirstRowContainerStyling>

      {/* 2nd Row */}
      <SecondRowContainerStyling>
        {/* Left box */}
        <BoxContainerStyling>
          <TournanemntImage
            src={require("../../../images/account/BG_tournament.png").default}
          />
          <PrizesContainer>
            <PrizesTitle>prizes</PrizesTitle>
            <TournamentPosition color="#FF6D03" position="1" prize="100000" />
            <TournamentPosition color="#D8DEFF" position="2" prize="50000" />
            <TournamentPosition color="#C14600" position="3" prize="15000" />
            <EnrollButton>enroll</EnrollButton>
          </PrizesContainer>
        </BoxContainerStyling>

        {/* Right box */}
        <RightBox>
          <p>All tournaments</p>
        </RightBox>
      </SecondRowContainerStyling>

      {/* 3rd Row */}
      <ThirdRowContainerStyling>
        <SportsOuterContainer>
          <ThirdRowTitle>my teams</ThirdRowTitle>
          <SportsCategoriesContainer>
            <SportsCategories active={active} setActive={setActive} />
          </SportsCategoriesContainer>
        </SportsOuterContainer>
        <TeamContainer>
          <TeamLogoContainer>
            <TeamLogoImage
              src={require("../../../images/account/NY_Knicks.png").default}
            />
            <TeamLogoNameContainer>
              <TeamLogoName>NY TIMES</TeamLogoName>
              <EditTeamLogoName
                src={require("../../../images/account/pencil.svg").default}
              />
            </TeamLogoNameContainer>
          </TeamLogoContainer>

          <TeamLogoContainer>
            <AddNewTeamTextContainer>
              <TeamLogoImage
                src={require("../../../images/account/plusIcon.svg").default}
              />
              <AddNewTeamText>create a new team</AddNewTeamText>
            </AddNewTeamTextContainer>
          </TeamLogoContainer>
        </TeamContainer>
      </ThirdRowContainerStyling>
    </AccountContainerStyling>
  )
}

export default CoachesRoom
