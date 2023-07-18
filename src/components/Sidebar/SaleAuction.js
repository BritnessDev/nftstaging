import React, { useState, useContext } from "react"
import { Button, Col, DatePicker, Input, Row, Typography, Modal, Form } from "antd"
import { AnttLabel, ButtonsContainer, ActionBtn } from "./styles/SellNFTStyling"
import { ExclamationCircleOutlined, CloseOutlined } from "@ant-design/icons"
import { CloseButton, MainContainer, SidebarContainer, SidebarTitle, TitleContainer, } from "./styles/SidebarStyling"
import { approve } from "utils/helpers/ylnft721"
import { BuyerListNFT } from "utils/helpers/auction"
import { userAuction } from "utils/helpers/marketplace1155"
import { CollectionSale } from "components/Sidebar/CollectionSale"
import { setApprovalForAll } from "utils/helpers/ylnft1155"
import { useMoralis } from "react-moralis"
import { LoadingSpin } from "components/common/LoadingSpin"
import { DappContext } from "context"

export const SaleAuction = ({ CardElmnt, closeSidebar, options }) => {

  const { onCloseSidebar, setSidebarContent, setOpenSidebar } = useContext(DappContext)
  const [sellPrice, setSellPrice] = useState(0)
  const [minPrice, setMinPrice] = useState(0)
  const [autoPrice, setAutoPrice] = useState(0)
  const [rate, setRate] = useState(0)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const { Moralis, user } = useMoralis()

  const handlePriceChange = (e) => {
    setSellPrice(e.target.value)
  }

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value)
  }

  const handleAutoPriceChange = (e) => {
    setAutoPrice(e.target.value)
  }

  const handleRateChange = (e) => {
    setRate(e.target.value)
  }

  const handleStartChange = (value) => {
    if (value !== null) setStartDate(value?._d.getTime())
  }

  const handleEndChange = (value) => {
    if (value !== null) setEndDate(value?._d.getTime())
  }

  const handleAuction = async () => {
    setLoading(true)
    try {
      let transaction
      const value = Moralis.Units.Token(sellPrice, "18")
      const limit = Moralis.Units.Token(autoPrice, "18")
      const period = parseInt((endDate - startDate) / 86400000)
      if (options.isERC721) {
        transaction = await Moralis.executeFunction(
          approve(process.env.REACT_APP_YLAUCTION_CONTRACT_ADDRESS, options.id),
        )
        await transaction.wait()
        transaction = await Moralis.executeFunction(
          BuyerListNFT(
            options.id,
            value,
            options.amount,
            limit,
            period,
            options.isERC721,
          ),
        )
        await transaction.wait()
      } else {
        transaction = await Moralis.executeFunction(
          setApprovalForAll(process.env.REACT_APP_YLNFT1155MARKETPLACE_CONTRACT_ADDRESS, true),
        )
        await transaction.wait()
        // tokenId, price, time, amount, data
        transaction = await Moralis.executeFunction(
          userAuction(options.id, value, period, options.amount, "0x"),
        )
        await transaction.wait()
      }
      location.reload()
    } catch (error) {
      setLoading(false)
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: error.data? error.data.message : error.message,
      })
    }
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
      <Form name="aution_form" layout="vertical" onFinish={handleAuction} requiredMark={false}>
        <MainContainer>
          <TitleContainer>
            <SidebarTitle>Sale</SidebarTitle>
          </TitleContainer>
          {CardElmnt}
          <Typography.Title level={3} style={{ marginTop: "30px" }}>
            SELL ON AUCTION
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

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="start_date" style={{ width: "100%" }} label={<AnttLabel>Start Date</AnttLabel>} rules={[{ type: 'object', required: true, message: 'Please select Start Date!', }]}>
                <DatePicker
                  placeholder="__.__.____"
                  dateFormat="dd/MM/yyyy"
                  value={startDate}
                  onChange={handleStartChange}
                  style={{ width: "100%", backgroundColor: "#DEDEDE", borderRadius: "6px", color: "#737373", }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="end_date" style={{ width: "100%" }} label={<AnttLabel>End Date</AnttLabel>} rules={[{ type: 'object', required: true, message: 'Please select End Date!', }]}>
                <DatePicker
                  placeholder="__.__.____"
                  dateFormat="dd/MM/yyyy"
                  value={endDate}
                  onChange={handleEndChange}
                  style={{ width: "100%", backgroundColor: "#DEDEDE", borderRadius: "6px", color: "#737373", }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="Minimum purchase price" rules={[{ validator: checkPrice }]}
            label={<AnttLabel>Minimum purchase price</AnttLabel>}>
            <Input
              bordered={false}
              placeholder="500"
              value={minPrice} onChange={handleMinPriceChange}
              style={{ backgroundColor: "#DEDEDE", borderRadius: "8px", marginRight: "20px", width: "100%", color: "#737373", }}
            />
          </Form.Item>

          <Form.Item name="Instant buyout price" rules={[{ validator: checkPrice }]}
            label={<AnttLabel>Instant buyout price</AnttLabel>}>
            <Input
              value={autoPrice} onChange={handleAutoPriceChange}
              bordered={false}
              placeholder="500"
              style={{ backgroundColor: "#DEDEDE", borderRadius: "8px", marginRight: "20px", width: "100%", color: "#737373", }}
            />
          </Form.Item>

          <Form.Item name="Rate step" rules={[{ validator: checkPrice }]}
            label={<AnttLabel>Rate step</AnttLabel>}>
            <Input
              value={rate} onChange={handleRateChange}
              bordered={false}
              placeholder="500"
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
