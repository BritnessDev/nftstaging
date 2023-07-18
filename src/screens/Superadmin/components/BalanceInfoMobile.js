import React, { useEffect, useState } from "react"
import whiteLabel from "../../../images/yourlife_white.png"
import { useMoralisCloudFunction } from "react-moralis"
import { Spin } from "antd"
import {
  BalanceInCont,
  BalanceInnerContainerMobile,
  BalanceMobileContainer,
  BalanceValueMobile,
  TokenImageMobile,
  BalanceSpin,
} from "../styles/BalanceMobileStyling"

export const BalanceInfoMobile = () => {
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
    <BalanceMobileContainer>
      <BalanceInCont>
        <div>
          <BalanceInnerContainerMobile>
            <TokenImageMobile src={whiteLabel} />
            <BalanceValueMobile>20000</BalanceValueMobile>
          </BalanceInnerContainerMobile>
        </div>
        <div>
          <BalanceInnerContainerMobile>
            <TokenImageMobile src={whiteLabel} />
            <BalanceValueMobile>{adminTokenBalance ?? <BalanceSpin><Spin /></BalanceSpin>}</BalanceValueMobile>
          </BalanceInnerContainerMobile>
        </div>
      </BalanceInCont>
    </BalanceMobileContainer>
  )
}
