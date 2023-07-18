import React, { useContext, useState } from "react"
import { Avatar, Button, Col, Image, Row, Typography, Modal } from "antd"
import { useMoralis } from "react-moralis"
import { CloseButton, MainContainer, SidebarContainer, SidebarTitle, TitleContainer } from "./styles/SidebarStyling"
import { DappContext } from "context"
import { ExclamationCircleOutlined, CloseOutlined } from "@ant-design/icons"
import { CssDiv, CssP } from "components/CssStyledComponent/CssStyledComponent"
import { CollectionExchangeType } from "./CollectionExchangeType"
import { ylnft721Transfer } from "utils/helpers/ylnft721"
import { ylnft1155Transfer } from "utils/helpers/ylnft1155"
import { LoadingSpin } from "components/common/LoadingSpin"
import "./styles/slidebar.css"

export const CollectionExchangeSendGift = ({ options, friend, closeSidebar }) => {
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } = useContext(DappContext)
  const { Moralis, user } = useMoralis()
  const [isLoading, setLoading] = useState(false)

  const acceptHandler = async() => {
    setLoading(true)
    try {
      const userAddress = friend?.attributes.ethAddress
      const userId = friend.id
      const transaction = await Moralis.executeFunction(
        options.isERC721 ? ylnft721Transfer(userAddress, options.id)
          : ylnft1155Transfer(userAddress, options.id, options.amount),
      )
      await transaction.wait()
      await Moralis.Cloud.run("setHoldUser", { userId, flag: true })
      location.reload()
    } catch (error) {
      setLoading(false)
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: error.data? error.data.message : error.message,
      })
    }
  }

  const onClickBack = () => {
    setSidebarContent(
      <CollectionExchangeType options={options} friend={friend} closeSidebar={onCloseSidebar} />,
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
              <img src={options.imageUrl} style={{ width: "100%", height: "auto" }} />
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

        <Typography.Title level={4} style={{ marginTop: "20px", textTransform: "uppercase" }}>
          Gift a NFT to a friend?
        </Typography.Title>

        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col span={12}>
            <Button
              type="primary" block size="large"
              style={{ textTransform: "uppercase", backgroundColor: "#A3A5A9", border: "none", }}
              onClick={onClickBack}
            >
              decline
            </Button>
          </Col>

          <Col span={12}>
            <Button
              type="primary" block size="large"
              style={{ textTransform: "uppercase", }}
              onClick={acceptHandler}
            >
              accept
            </Button>
          </Col>
        </Row>
      </MainContainer>
      {isLoading && <LoadingSpin tip="Loading..." />}
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
