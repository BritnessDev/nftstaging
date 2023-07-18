import React from "react"
import { AccountBalance } from "./AccountBalance"
import {
  MainContainer,
  UserDetailsContainer,
  UserImage,
  UserName,
} from "./styles/UserCardStyles"

export const UserCard = ({
  userImage,
  userName,
  tokenImg,
  tokenValue,
  tokenValueUSD,
}) => {
  return (
    <MainContainer>
      <UserDetailsContainer>
        <UserImage src={userImage} alt={userName} />
        <UserName>{userName}</UserName>
      </UserDetailsContainer>
      <AccountBalance
        tokenImg={tokenImg}
        tokenValue={tokenValue}
        tokenValueUSD={tokenValueUSD}
      />
    </MainContainer>
  )
}
