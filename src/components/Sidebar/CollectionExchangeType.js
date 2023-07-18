import React, { useContext, useState } from "react"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"
import {
  Avatar,
  Badge,
  Button,
  Col,
  Divider,
  Image,
  Input,
  List,
  Row,
  Typography,
} from "antd"
import { CssDiv, CssP } from "components/CssStyledComponent/CssStyledComponent"
import { DappContext } from "context"
import "./styles/slidebar.css"
import { CollectionExchange } from "./CollectionExchange"
import { CollectionExchangeSum } from "./CollectionExchangeSum"
import { CollectionExchangeChoose } from "./CollectionExchangeChoose"
import { CollectionExchangeSendGift } from "./CollectionExchangeSendGift"
import { CloseOutlined } from "@ant-design/icons"

export const CollectionExchangeType = ({ options, friend, closeSidebar }) => {
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } = useContext(DappContext)

  const onClickSum = (event) => {
    setSidebarContent(
      <CollectionExchangeSum
        options={options}
        friend={friend}
        closeSidebar={onCloseSidebar}
      />,
    )
    setOpenSidebar(true)
  }

  const onClickChoose = (event) => {
    setSidebarContent(
      <CollectionExchangeChoose
        options={options}
        friend={friend}
        closeSidebar={onCloseSidebar}
      />,
    )
    setOpenSidebar(true)
  }

  const onClickSendGift = (event) => {
    setSidebarContent(
      <CollectionExchangeSendGift
        options={options}
        friend={friend}
        closeSidebar={onCloseSidebar}
      />,
    )
    setOpenSidebar(true)
  }

  const onClickBack = (event) => {
    setSidebarContent(
      <CollectionExchange options={options} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>Exchange</SidebarTitle>
        </TitleContainer>

        <CssDiv padding="15px" backgroundColor="white" borderRadius="8px">
          <Row gutter={16}>
            <Col span={9}>
              <img
                src={options.imageUrl}
                style={{ width: "100%", height: "auto" }}
              />
            </Col>

            <Col span={15}>
              <CssP color="#61616A" fontSize="14px" fontWeight="700" mt="20px">
                {options.sport}
              </CssP>
              <CssP color="#242424" fontSize="24px" fontWeight="700">
                {options.playerName}
              </CssP>
              <CssDiv display="flex" gap="5px">
                {options.speedElmnt}
                {options.dexterityElmnt}
                {options.staminaElmnt}
                {options.dribblingElmnt}
                {options.finishingElmnt}
              </CssDiv>
            </Col>
          </Row>

          <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

          <CssDiv display="flex">
            <Avatar
              src={
                <Image src={friend?.attributes.profile_picture} style={{ width: 32 }} preview={false} />
              }
            />
            <Typography.Text style={{ marginLeft: "10px", color: "#242424", flexGrow: 1 }}>
              {friend?.attributes.username}
            </Typography.Text>

            <Image src="/black_exchange_icon.png" preview={false} />
          </CssDiv>
        </CssDiv>

        <Button type="primary" block size="large" style={{ marginTop: "30px", textTransform: "uppercase", }} onClick={onClickSum}>
          set sum to sell
        </Button>

        <Button type="primary" block size="large" style={{ marginTop: "20px", textTransform: "uppercase", }} onClick={onClickChoose}>
          choose friend’s nft
        </Button>

        <Button type="primary" block size="large" style={{ marginTop: "20px", textTransform: "uppercase", }} onClick={onClickSendGift}>
          send as gift
        </Button>

        <Button type="primary" block size="large" style={{ marginTop: "20px", backgroundColor: "#A3A5A9", border: "none" }} onClick={onClickBack}>
          BACK
        </Button>
      </MainContainer>
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
