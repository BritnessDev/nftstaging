import React from "react"
import { Box } from "./Box"
import {
  AccountStatsStyling,
  AccountStatsTitle,
  AllStatsBtn,
  ArrowRight,
  Row,
} from "./styles/AccountStatsStyling"

function AccountStats() {
  return (
    <>
      <AccountStatsStyling>
        <AccountStatsTitle>statistics</AccountStatsTitle>
        <Row>
          <Box title="Matches" number="944" left />
          <Box title="Wins" number="322" center />
          <Box title="Rating" number="#144" right />
        </Row>
        <Row>
          <Box title="NFT-cards" number="6" left image />
          <Box title="Awards" number="13" right image />
        </Row>
        <Row>
          <Box title="Teams power" number="11 988" center image />
        </Row>
        <AllStatsBtn>
          all statistics
          <ArrowRight
            src={require("../../../images/account/arrowRightBlack.svg").default}
            alt="arrowRightBlack"
          />
        </AllStatsBtn>
      </AccountStatsStyling>
    </>
  )
}

export default AccountStats
