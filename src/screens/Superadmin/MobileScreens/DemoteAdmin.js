import React from "react"
import { useLocation } from "react-router"
import {
  Address,
  BoxContainer,
  Image,
  InnerContainer,
  MainTitle,
  Nickname,
} from "./styles/DemoteAdminStyling"
import profileImage from "../../../images/avatar.png"
import { Btn } from "./styles/EditAdminStyling"

export const DemoteAdmin = () => {
  const location = useLocation()
  const { user } = location.state
  return (
    <InnerContainer>
      <MainTitle>demote admin</MainTitle>
      <BoxContainer>
        <Image src={user?.profile_picture || profileImage} />
        <Nickname>{user?.nickname}</Nickname>
        <Address>{user?.ethAddress}</Address>
      </BoxContainer>
      <Btn>resend deposit to super-admin</Btn>
      <Btn>save/resend deposit back</Btn>
    </InnerContainer>
  )
}
