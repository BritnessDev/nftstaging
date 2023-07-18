import React from "react"
import {
  StatisticListContainer, StatisticContainer, UserName, StatisticTitle, StatisticListItem,
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"
import { CloseOutlined } from "@ant-design/icons"

const StatisticList = [
  {
    title: "General",
    registered: 12514,
    games_played: 345624,
    created_NFT: 352346,
  },
  {
    title: "game",
    registered: 12514,
    games_played: 345624,
    created_NFT: 352346,
  },
  {
    title: "Personal",
    registered: 12514,
    games_played: 345624,
    created_NFT: 352346,
  },
]

export const Statistics = ({ closeSidebar }) => {
  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>staistics</SidebarTitle>
        </TitleContainer>
        {StatisticList.map((item, index) => {
          return (
            <StatisticListContainer key={index}>
              <StatisticContainer>
                <UserName>{item.title}</UserName>
              </StatisticContainer>
              <StatisticListItem>
                <StatisticTitle>Registered</StatisticTitle>
                <StatisticTitle>{item.registered}</StatisticTitle>
              </StatisticListItem>
              <StatisticListItem>
                <StatisticTitle>Games played</StatisticTitle>
                <StatisticTitle>{item.games_played}</StatisticTitle>
              </StatisticListItem>
              <StatisticListItem>
                <StatisticTitle>Created by the NFT</StatisticTitle>
                <StatisticTitle>{item.created_NFT}</StatisticTitle>
              </StatisticListItem>
            </StatisticListContainer>
          )
        })}
      </MainContainer>
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
