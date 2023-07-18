import React, { useState, useEffect, useCallback } from "react"
import { Menu, Dropdown, Space } from "antd"
import { ToastContainer } from "react-toastify"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import {
  InfoContainer,
  Heading,
  HeaderContainer,
  FItem,
  SItem,
  ThItem,
  Wrapper,
  Line,
  Row,
  RowFItem,
  RowSItem,
  Row2,
  Row2FItem,
  Row2SItem,
  Row2ThirdItem,
  Row2FourthItem,
  Row2FifthItem,
  Row2SixItem,
  RowThirdItem,
  RowFourthItem,
  RowFifthItem,
  RowSixItem,
  RowSeventhItem,
  RowFItemSub1,
  RowFItemSub2,
  FItem2,
  ThItem2,
  ButtonConfirmed,
  ButtonBuy,
  BuyDesctop,
  ConfirmedDesctop,
  Row3,
  Row3F,
  Row3S,
  Row3Th,
  Row3ThPunderline,
} from "./InfoElements"
import { items } from "./mock"
import { tokenURI as getTotkenURI721 } from "utils/helpers/ylnft721"
import { tokenURI as getTotkenURI1155 } from "utils/helpers/ylnft1155"

const Transfers = ({ moralis }) => {
  const [index, seTindex] = useState("0")
  const [lessMore, seTlessMore] = useState("more")
  const [onceLoad, setOnceload] = useState(false)
  const [transferData, setTranferData] = useState()
  const fetchTransferData = useCallback(async () => {
    const result = await moralis?.fn.Cloud.run("fetchTransfer", {})
    const { data_721, data_1155 } = result
    let result_721,
      result_1155 = []
    if (data_721) {
      result_721 = await Promise.all(
        data_721.map(async (item) => {
          const token_uri = await moralis?.fn.executeFunction(
            getTotkenURI721(item.attributes.tokenId),
          )
          const meta = await moralis?.fn.Cloud.run("fetchNFTMetadata", {
            url: token_uri,
          })
          return {
            src: meta.data.image,
            name: meta.data.name,
            status: item.attributes.confirmed,
            price: 1,
            amount: 1,
            from: item.attributes.admin,
            to: item.attributes.recipient,
            time: item.attributes.createdAt,
          }
        }),
      )
    }
    if (data_1155) {
      result_1155 = await Promise.all(
        data_1155.map(async (item) => {
          const token_uri = await moralis?.fn.executeFunction(
            getTotkenURI1155(item.attributes.tokenId),
          )
          const meta = await moralis?.fn.Cloud.run("fetchNFTMetadata", {
            url: token_uri,
          })
          return {
            src: meta.data.image,
            name: meta.data.name,
            status: item.attributes.confirmed,
            price: 1,
            amount: 1,
            from: item.attributes.admin,
            to: item.attributes.recipient,
            time: item.attributes.createdAt,
          }
        }),
      )
    }
    setTranferData(result_1155.concat(result_721))
  }, [moralis])
  useEffect(() => {
    if (moralis && !onceLoad) {
      fetchTransferData()
      setOnceload(true)
    }
  }, [moralis, fetchTransferData, onceLoad])
  const handleClick = (e, i) => {
    seTlessMore(e.key === "1" ? "less" : "more")
    seTindex(i)
  }

  return (
    <>
      <InfoContainer>
        <Heading>TRANSFERS</Heading>
        <HeaderContainer>
          <FItem>Item</FItem>
          <FItem2>Status</FItem2>
          <SItem>Price</SItem>
          <SItem>Quantity</SItem>
          <ThItem>From</ThItem>
          <SItem>To</SItem>
          <ThItem2>Time</ThItem2>
        </HeaderContainer>
        {items.map((item, i) => {
          return (
            <Wrapper>
              <Row>
                <RowFItem>
                  <img src={"..."} />
                  <div
                    style={{
                      marginLeft: "1%",
                      alignSelf: "center",
                    }}
                  >
                    <RowFItemSub1>{item.itemName}</RowFItemSub1>
                    <RowFItemSub2>{item.playerName}</RowFItemSub2>
                  </div>
                </RowFItem>
                <RowSItem>
                  <BuyDesctop>{item.statusBuy}</BuyDesctop>
                  <ConfirmedDesctop conf={item.statusConf}>
                    {item.statusConf}
                  </ConfirmedDesctop>
                </RowSItem>
                <RowThirdItem>
                  <img src={require("../../images/bitcoin.svg").default} />
                  <p style={{ marginLeft: 5 }}>{item.price}</p>
                </RowThirdItem>
                <RowFourthItem>{item.quantity}</RowFourthItem>
                <RowFifthItem>{item.from}</RowFifthItem>
                <RowSixItem>
                  {item.to}
                  <img
                    style={{ marginLeft: 5 }}
                    width={15}
                    height={15}
                    src={require("../../images/ok.svg").default}
                  />
                </RowSixItem>
                <RowSeventhItem>
                  <p>{item.time}</p>
                  <img
                    style={{ marginLeft: 10 }}
                    width={10}
                    height={10}
                    src={require("../../images/export.svg").default}
                  />
                </RowSeventhItem>
              </Row>
              <Line />
              <Row2>
                <Row2FItem>
                  <ButtonBuy>{item.statusBuy}</ButtonBuy>
                  <ButtonConfirmed conf={item.statusConf}>
                    {item.statusConf}
                  </ButtonConfirmed>
                </Row2FItem>
                <Row2SItem>
                  <p>QUANTITY {item.quantity}</p>
                </Row2SItem>
                <Row2ThirdItem>
                  <p>
                    FROM{" "}
                    <span
                      style={{
                        color: "#b9fd02",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      }}
                    >
                      {item.from}
                    </span>
                  </p>
                </Row2ThirdItem>
                <Row2FourthItem>
                  <p style={{ flexDirection: "row" }}>
                    TO{" "}
                    <span
                      style={{
                        color: "#b9fd02",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      }}
                    >
                      {item.to}
                    </span>
                  </p>
                  <img
                    style={{ marginLeft: 3 }}
                    src={require("../../images/ok.svg").default}
                  />
                </Row2FourthItem>
                <Row2FifthItem>
                  <p
                    style={{
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    {item.time}{" "}
                  </p>
                  <img
                    width={10}
                    height={10}
                    style={{ marginLeft: 3 }}
                    src={require("../../images/export.svg").default}
                  />
                </Row2FifthItem>
                <Row2SixItem>
                  <Dropdown
                    overlay={
                      <Menu
                        onClick={(e) => handleClick(e, i)}
                        items={[
                          {
                            label: "more",
                            key: "0",
                          },
                          {
                            label: "less",
                            key: "1",
                          },
                          {
                            type: "divider",
                          },
                        ]}
                      />
                    }
                    trigger={["click"]}
                  >
                    <Space>
                      {index === i && lessMore === "more" ? "less" : "more"}
                      {index === i && lessMore === "more" ? (
                        <FaAngleUp />
                      ) : (
                        <FaAngleDown />
                      )}
                    </Space>
                  </Dropdown>
                </Row2SixItem>
              </Row2>
              {index === i && lessMore === "more" && (
                <Row3>
                  <Row3F>
                    <p>QUANTITY</p>
                    <p>{item.quantity}</p>
                  </Row3F>
                  <Row3S>
                    <p>FROM </p>
                    <Row3ThPunderline>{item.from}</Row3ThPunderline>
                  </Row3S>
                  <Row3Th>
                    <p>TO</p>
                    <p
                      style={{
                        color: "#b9fd02",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {item.to}
                      <img
                        style={{ marginLeft: 3 }}
                        src={require("../../images/ok.svg").default}
                      />
                    </p>
                  </Row3Th>
                </Row3>
              )}
            </Wrapper>
          )
        })}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{ backgroundColor: "#191919" }}
        />
      </InfoContainer>
    </>
  )
}

export default Transfers
