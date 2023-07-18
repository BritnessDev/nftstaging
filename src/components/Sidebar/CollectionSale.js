import React, { useContext, useState } from "react"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"
import { Button, Col, Row } from "antd"
import { CssDiv, CssP } from "components/CssStyledComponent/CssStyledComponent"
import { SaleMarketPlace } from "./SaleMarketPlace"
import { SaleAuction } from "./SaleAuction"
import { DappContext } from "context"
import { CloseOutlined } from "@ant-design/icons"

export const CollectionSale = ({ options, closeSidebar }) => {
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } = useContext(DappContext)    

  const onClickSellMarketPlace = (event) => {
    setSidebarContent(
      <SaleMarketPlace options={options} closeSidebar={onCloseSidebar}/>,
    )
    setOpenSidebar(true)
  }

  const onClickSellAuction = (event) => {
    const CardElmnt = (
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
      </CssDiv>
    )
    setSidebarContent(
      <SaleAuction CardElmnt={CardElmnt} closeSidebar={onCloseSidebar} options={options}/>,
    )
    setOpenSidebar(true)
  }

  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>Sale</SidebarTitle>
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
        </CssDiv>

        <Button
          block
          type="primary"
          size="large"
          style={{ marginTop: "30px" }}
          onClick={onClickSellMarketPlace}
        >
          SELL ON MARKETPLACE
        </Button>
        <Button
          block
          type="primary"
          size="large"
          style={{ marginTop: "10px" }}
          onClick={onClickSellAuction}
        >
          SELL ON AUCTION
        </Button>
      </MainContainer>
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
