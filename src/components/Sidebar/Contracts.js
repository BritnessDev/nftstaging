import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons"
import React from "react"
import {
  CloseButton,
  ContractListItem,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"
import {contractLinks} from "utils/const"

export const Contracts = ({ closeSidebar }) => {
  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>manage contracts</SidebarTitle>
        </TitleContainer>
        {contractLinks.map(({ title, link }, index) => (
          <ContractListItem key={index} href={"https://testnet.bscscan.com/address/" + link} target="_blank">
            {title}
            <img src="/assets/arrowleftup.svg"></img>
          </ContractListItem>
        ))}
      </MainContainer>
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
