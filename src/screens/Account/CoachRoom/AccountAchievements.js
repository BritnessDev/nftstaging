import React from "react"
import { FriendRow } from "./FriendRow"
import {
  AccountAchievementStyling,
  AllAchievements,
  Badge,
  BadgeIcon,
  BadgeText,
  BgBadge,
  FriendsContainer,
  FriendsTitle,
} from "./styles/AccountAchievementStyling"

function AccountAchievements() {
  return (
    <AccountAchievementStyling>
      {/* Badge */}
      <Badge>
        <BadgeIcon
          src={require("../../../images/account/best_forward.png").default}
          alt="badgeIcon"
        />
        <BadgeText>best forward</BadgeText>
        <BgBadge />
      </Badge>

      {/* Achievements */}
      <AllAchievements>All Achievements</AllAchievements>

      {/* Friends */}
      <FriendsContainer>
        <FriendsTitle>friends</FriendsTitle>
        <hr color="#646464" />

        <FriendRow friendImageSrc="1" friendName="Pryeyus" />
        <FriendRow friendImageSrc="2" friendName="Winthyaca" />
        <FriendRow
          friendImageSrc="3"
          friendName="Frast"
          icons
          isSelected="selected"
        />
        <FriendRow friendImageSrc="4" friendName="Hetor" />
        <FriendRow friendImageSrc="5" friendName="Lafoceyll" />
        <FriendRow friendImageSrc="6" friendName="Esalalite13" />
      </FriendsContainer>
    </AccountAchievementStyling>
  )
}

export default AccountAchievements
