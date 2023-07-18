import { Button, Col, Input, Row, Typography, Modal, Form } from "antd"
import { ExclamationCircleOutlined, CloseOutlined } from "@ant-design/icons"
import { CssDiv, CssP } from "components/CssStyledComponent/CssStyledComponent"
import React, { useState, useContext } from "react"
import { AnttLabel, ButtonsContainer, ActionBtn } from "./styles/SellNFTStyling"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"
import { buyerListedNFT, depositApproval, getMarketFee } from "utils/helpers/marketplace"
import { userListedNFT } from "utils/helpers/marketplace1155"
import { approve as approveYLT } from "utils/helpers/ylt"
import { approve } from "utils/helpers/ylnft721"
import { setApprovalForAll } from "utils/helpers/ylnft1155"
import { useMoralis } from "react-moralis"
import { CollectionSale } from "components/Sidebar/CollectionSale"
import { LoadingSpin } from "components/common/LoadingSpin"
import { DappContext } from "context"

export const SaleMarketPlace = ({ options, closeSidebar }) => {
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } = useContext(DappContext)
  const { Moralis, user } = useMoralis()
  const [sellPrice, setSellPrice] = useState(0)
  const [isLoading, setLoading] = useState(false)

  const handleList = async () => {
    setLoading(true)
    try {
      const value = Moralis.Units.Token(sellPrice, "18")
      const marketFee = await Moralis.executeFunction(getMarketFee())
      let transaction
      if (options.isERC721) {
        transaction = await Moralis.executeFunction(
          approveYLT(
            process.env.REACT_APP_YLMARKETPLACE_CONTRACT_ADDRESS1,
            value,
          ),
        )
        await transaction.wait()
        transaction = await Moralis.executeFunction(
          depositApproval(
            user?.attributes.ethAddress,
            options.id,
            true,
          )
        )
        await transaction.wait()
        transaction = await Moralis.executeFunction(
          approve(
            process.env.REACT_APP_YLMARKETPLACE_CONTRACT_ADDRESS1,
            options.id,
          ),
        )
        await transaction.wait()
        transaction = await Moralis.executeFunction(
          buyerListedNFT(options.id, value, marketFee),
        )
        await transaction.wait(3)
      } else {
        transaction = await Moralis.executeFunction(
          setApprovalForAll(
            process.env.REACT_APP_YLNFT1155MARKETPLACE_CONTRACT_ADDRESS,
            true,
          ),
        )
        await transaction.wait()
        //tokenId, price, amount, data
        transaction = await Moralis.executeFunction(
          userListedNFT(options.id, value, options.amount, "0x"),
        )
        await transaction.wait(3)
      }
      location.reload()
    } catch (error) {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: error.data? error.data.message : error.message,
      })
      setLoading(false)
    }
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

  const backHandler = () => {
    setSidebarContent(
      <CollectionSale options={options} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  return (
    <SidebarContainer>
      <Form name="aution_form" layout="vertical" onFinish={handleList} requiredMark={false}>
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
          <Typography.Title level={3} style={{ marginTop: "30px" }}>
            SELL ON MARKETPLACE
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
            <ActionBtn outlined onClick={backHandler}>back</ActionBtn>
            <ActionBtn active>sell</ActionBtn>
          </ButtonsContainer>
        </MainContainer>
      </Form>
      {isLoading && <LoadingSpin tip="Loading..." />}
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
