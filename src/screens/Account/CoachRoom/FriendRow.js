import React from "react"
import {
  FriendName,
  FriendRowStyling,
  IconAction,
  IconsContainer,
  ProfileImage,
  RowStyling,
} from "./styles/AccountAchievementStyling"

export const FriendRow = ({
  friendName,
  friendImageSrc,
  icons,
  isSelected,
}) => {
  return (
    <FriendRowStyling>
      <RowStyling isSelected={isSelected}>
        <ProfileImage
          // src={require(`../../../images/friends/${friendImageSrc}.png`).default}
          alt="badgeIcon"
        />
        <FriendName>{friendName}</FriendName>
        {icons && (
          <IconsContainer>
            <IconAction
              src={
                require(`../../../images/account/Friends_trade_icon.svg`)
                  .default
              }
              alt="Friends_trade_icon"
            />
            <IconAction
              src={
                require(`../../../images/account/Friends_chat_icon.svg`).default
              }
              alt="Friends_chat_icon"
            />
            <IconAction
              src={
                require(`../../../images/account/Friends_delete_icon.svg`)
                  .default
              }
              alt="Friends_delete_icon"
            />
          </IconsContainer>
        )}
      </RowStyling>
    </FriendRowStyling>
  )
}
