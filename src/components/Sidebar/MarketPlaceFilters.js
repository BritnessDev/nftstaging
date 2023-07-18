import React from "react"
import Filters from "screens/Marketplace/components/Filters"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"
import { CloseOutlined } from "@ant-design/icons"
import "./styles/slidebar.css"

export const MarketPlaceFilters = ({ closeSidebar }) => {
  return (
    <SidebarContainer>
      <MainContainer className="marketPlacePanelFilters">
        <TitleContainer>
          <SidebarTitle>FILTERS</SidebarTitle>
        </TitleContainer>

        <Filters />
      </MainContainer>
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
