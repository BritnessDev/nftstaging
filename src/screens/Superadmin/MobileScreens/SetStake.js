import { useMedia } from "hooks/useMedia"
import React, { useEffect, useState } from "react"
import { useMoralisCloudFunction } from "react-moralis"
import {
  BalanceInnerContainerMobile,
  BalanceValueMobile,
  InnerContainer,
  InnerTitle,
  Input,
  MainContainer,
  MainTitle,
  SetBtn,
  TokenImageMobile,
} from "./styles/SetStakeStyling"
import whiteLabel from "../../../images/yourlife_white.png"

export const SetStake = () => {
  const isMobile = useMedia("(max-width: 480px)")
  const [adminTokenBalance, setAdminTokenBalance] = useState(null)
  const { data } = useMoralisCloudFunction("getSuperAdminTokens", {
    superAdminAddress: process.env.REACT_APP_SUPER_ADMIN_WALLET_ADDRESS,
  })

  useEffect(() => {
    if (data && data[0]) {
      const balance = data[0].balance
      setAdminTokenBalance(balance / 1000000000000000000)
    }
  }, [data])
  return (
    <MainContainer>
      <MainTitle>set stake value</MainTitle>
      <InnerContainer>
        <BalanceInnerContainerMobile>
          <TokenImageMobile src={whiteLabel} />
          <BalanceValueMobile>20000</BalanceValueMobile>
        </BalanceInnerContainerMobile>
      </InnerContainer>
      <InnerTitle>Enter the minimum amount</InnerTitle>
      <Input placeholder="500" type="number" />
      <SetBtn>set sum</SetBtn>
    </MainContainer>
  )
}
