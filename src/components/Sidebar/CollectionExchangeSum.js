import React, { useContext, useState } from "react"
import { useMoralis } from "react-moralis"
import { Avatar, Col, Image, Input, Row, Typography, Form, Modal } from "antd"
import { AnttLabel, ButtonsContainer, ActionBtn } from "./styles/SellNFTStyling"
import { ExclamationCircleOutlined, CloseOutlined } from "@ant-design/icons"
import { CloseButton, MainContainer, SidebarContainer, SidebarTitle, TitleContainer, } from "./styles/SidebarStyling"
import { DappContext } from "context"
import { approve as approveYLT } from "utils/helpers/ylt"
import { approve } from "utils/helpers/ylnft721"
import { setApprovalForAll } from "utils/helpers/ylnft1155"
import { buyerListedNFT, getMarketFee } from "utils/helpers/marketplace"
import { CssDiv, CssP } from "components/CssStyledComponent/CssStyledComponent"
import { CollectionExchangeType } from "./CollectionExchangeType"
import { LoadingSpin } from "components/common/LoadingSpin"
import "./styles/slidebar.css"

export const CollectionExchangeSum = ({ options, friend, closeSidebar }) => {
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } = useContext(DappContext)
  const [sellPrice, setSellPrice] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const { Moralis, user } = useMoralis()

  const requestHandler = async () => {
    // console.log(options, friend, sellPrice)
    try {
      const value = Moralis.Units.Token(sellPrice, "18")
      const marketFee = await Moralis.executeFunction(getMarketFee())
      let transaction =await Moralis.executeFunction(
        approveYLT(
          friend?.attributes.ethAddress,
          value,
        ),
      )
      await transaction.wait()
      if (options.isERC721) {
        transaction =await Moralis.executeFunction(
          approve(
            friend?.attributes.ethAddress,
            options.id,
          ),
        )
      } else {
        transaction =await Moralis.executeFunction(
          setApprovalForAll(
            friend?.attributes.ethAddress,
            true,
          ),
        )
      }
      await transaction.wait()
      transaction = await Moralis.executeFunction(
        buyerListedNFT(options.id, value, marketFee),
      )
      await transaction.wait(3)
      location.reload()
    } catch (error) {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: error.data? error.data.message : error.message,
      })
      setLoading(false)
    }
  }

  const onClickBack = () => {
    setSidebarContent(
      <CollectionExchangeType options={options} friend={friend} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  const handlePriceChange = (e) => {
    setSellPrice(e.target.value)
  }

  const checkPrice = (e, value) => {
    if (value > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(e.field + ' must be greater than zero!'));
  };

  return (
    <SidebarContainer>
      <Form name="aution_form" layout="vertical" onFinish={requestHandler} requiredMark={false}>
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

          <Typography.Title level={4} style={{ marginTop: "20px", textTransform: "uppercase", }}>
            set sum to sell
          </Typography.Title>

          <Form.Item name="Price (YLT)" rules={[{ validator: checkPrice }]}
            label={<AnttLabel>Price (YLT)</AnttLabel>}>
            <Input
              placeholder="500"
              bordered={false}
              value={sellPrice} onChange={handlePriceChange}
              style={{ backgroundColor: "#DEDEDE", borderRadius: "8px", marginRight: "20px", width: "100%", color: "#737373", }}
            />
          </Form.Item>

          <ButtonsContainer>
            <ActionBtn outlined onClick={onClickBack}>back</ActionBtn>
            <ActionBtn active>request</ActionBtn>
          </ButtonsContainer>

        </MainContainer>
      </Form>
      {isLoading && <LoadingSpin tip="Loading..." />}
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
