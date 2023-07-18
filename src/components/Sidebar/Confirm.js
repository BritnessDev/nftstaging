import React, { useEffect } from "react"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
  NftContainer,
  NftImage,
  NftAttr,
  PriceBox,
  PriceUSD,
  PriceYLT,
  AttrBox,
  AttrContainer,
} from "./styles/SidebarStyling"

import { approve } from "utils/helpers/ylt"
import { getMarketFee, buyMarketListedNFT } from "utils/helpers/marketplace"
import { buyMarketListedNFT as buy1155MarketListedNFT } from "utils/helpers/marketplace1155"
import { useMoralis } from "react-moralis"
import { Button, Col, Row, Modal } from "antd"
import { ExclamationCircleOutlined, CloseOutlined } from "@ant-design/icons"
import RunIcon from "../../images/account/collection/Run.svg"
import Logo from "../../images/marketplace/nftcard/logo.png"
import { Loading } from "notiflix"

export const Confirm = ({ options, closeSidebar }) => {
  const { Moralis } = useMoralis()

  const onClickAccept = async () => {
    Loading.standard()
    const price = Moralis.Units.Token(options.price, "18")
    let transaction
    try {
      if (options.isERC721) {
        transaction = await Moralis?.executeFunction(
          approve(process.env.REACT_APP_YLMARKETPLACE_CONTRACT_ADDRESS1, price),
        )
        await transaction.wait(3)
        await Moralis?.executeFunction(
          buyMarketListedNFT(options.itemId),
        )
        await transaction.wait()
      } else {
        transaction = await Moralis?.executeFunction(
          approve(process.env.REACT_APP_YLNFT1155MARKETPLACE_CONTRACT_ADDRESS, price),
        )
        await transaction.wait(3)
        await Moralis?.executeFunction(
          buy1155MarketListedNFT(options.itemId),
        )
        await transaction.wait()
      }
      location.reload()
    } catch (error) {
      Loading.remove()
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: error.data ? error.data.message : error.message,
      })
    }
  }
  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>CONFIRM</SidebarTitle>
        </TitleContainer>
        <NftContainer>
          <NftImage src={options?.image} alt={options?.image} />
          <NftAttr>
            <p>SOCCER</p>
            <h1>{options?.attrs.playerName}</h1>
            <PriceBox>
              <img src={Logo}></img>
              <PriceUSD>{options?.attrs?.usdValue}</PriceUSD>
              <PriceYLT>{options?.attrs?.cryptoValue}</PriceYLT>
            </PriceBox>
            {options.isERC721 &&
              (
                <AttrContainer>
                  <AttrBox>
                    <img src={RunIcon}></img>
                    <span>{options?.attrs?.speed}</span>
                  </AttrBox>
                  <AttrBox>
                    <img src={RunIcon}></img>
                    <span>{options?.attrs?.dexterity}</span>
                  </AttrBox>
                  <AttrBox>
                    <img src={RunIcon}></img>
                    <span>{options?.attrs?.stamina}</span>
                  </AttrBox>
                  <AttrBox>
                    <img src={RunIcon}></img>
                    <span>{options?.attrs?.dribbling}</span>
                  </AttrBox>
                  <AttrBox>
                    <img src={RunIcon}></img>
                    <span>{options?.attrs?.finishing}</span>
                  </AttrBox>
                </AttrContainer>
              )
            }
          </NftAttr>
        </NftContainer>
        <Row gutter={16}>
          <Col span={12}>
            <Button
              block
              type="primary"
              ghost
              size="large"
              onClick={closeSidebar}
            >
              BACK
            </Button>
          </Col>
          <Col span={12}>
            <Button block type="primary" size="large" onClick={onClickAccept}>
              BUY
            </Button>
          </Col>
        </Row>
      </MainContainer>
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
