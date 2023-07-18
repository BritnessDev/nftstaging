import React from "react"
import { ArrowRightOutlined } from "@ant-design/icons"
import { MainContainer, MainTitle } from "./styles/ManageContractsStyling"
import { List, Typography } from "antd"
import {contractLinks} from "utils/const"
import { ContractListItem } from "components/Sidebar/styles/SidebarStyling"
import { useEffect } from "react"

export const ManageContracts = ({ closeSidebar }) => {
  return (
    <MainContainer>
      <MainTitle>manage contracts</MainTitle>
      {contractLinks.map(({ title, link }, index) => (
          <ContractListItem key={index} href={"https://testnet.bscscan.com/address/" + link} target="_blank">
            {title}
            <img src="/assets/arrowleftup.svg"></img>
          </ContractListItem>
        ))}
    </MainContainer>
  )
}
