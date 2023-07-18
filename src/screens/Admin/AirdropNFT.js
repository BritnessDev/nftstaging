import React from "react"
import { MainContainer } from "./styles/AirdropNFTStyles"

import tokenImage from "../../images/green_logo.webp"
import { UserCard } from "./UserCard"
import { FirstInnerContainer } from "./styles/AdminScreenStyles"
import { airdropNftoptions } from "./utils/adminOptions"
import { AdminOptions } from "./AdminOptions"
import { dummyData } from "utils/dummyData"

export const AirdropNFT = ({
  userName = dummyData.userName,
  userImage = dummyData.userImage,
  tokenImg = tokenImage,
  tokenValue = dummyData.tokenValue,
  tokenValueUSD = dummyData.tokenValueUSD,
}) => {
  return (
    <MainContainer>
      <FirstInnerContainer>
        <UserCard
          userImage={userImage}
          userName={userName}
          tokenImg={tokenImg}
          tokenValue={tokenValue}
          tokenValueUSD={tokenValueUSD}
        />
        <AdminOptions options={airdropNftoptions} airdrop="true" />
      </FirstInnerContainer>
    </MainContainer>
  )
}
