import { Button, Card, Col, Grid, Row, Space, Typography } from "antd"
import { DappContext } from "context"
import React, { useEffect, useState, useContext } from "react"

export const AddInOfferCard = ({ id, attributes, nftItem, moralis }) => {
  // const [flag_showNftImg, setFlagShowNftImg] = useState(false)

  const onChoose = () => {
    const tokenId = JSON.parse(nftItem).id
    const isERC721 = JSON.parse(nftItem).isERC721
    const data = { id, tokenId, isERC721 }
    moralis?.fn.Cloud.run("setOffers", data).then(() => {
      location.reload()
    })
  }
  return (
    <React.Fragment>
      <Card
        extra={
          <img
            alt="nftImg"
            src=""
            style={{ width: "35%", height: "auto", margin: "auto" }}
          />
        }
        bordered={false}
        headStyle={{
          height: "150px",
          backgroundImage: "url(/AddinOfferHeader.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          overflow: "hidden",
        }}
        bodyStyle={{
          padding: "15px",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
        }}
        style={{
          borderRadius: "12px",
          lineHeight: "1",
          marginBottom: "20px",
        }}
        hoverable
      >
        <Row>
          <Col span={17}>
            <Typography.Title level={4}>{attributes.name}</Typography.Title>
            <Typography.Paragraph style={{ fontSize: "14px" }}>
              Athlete with enhanced performance
            </Typography.Paragraph>
          </Col>
          <Col span={7}>
            <Typography.Title level={5} style={{ textAlign: "right" }}>
              {attributes.endAt}
            </Typography.Title>
            <Typography.Paragraph
              style={{ color: "#292929", fontSize: "11px", textAlign: "right" }}
            >
              Until the end of the promotion
            </Typography.Paragraph>
          </Col>
        </Row>
        <Typography.Paragraph style={{ marginTop: "20px" }}>
          <Typography.Text strong style={{ fontSize: "150%" }}>
            {attributes.ERC721.length + attributes.ERC1155.length}
          </Typography.Text>
          /<Typography.Text>5</Typography.Text> CARD
        </Typography.Paragraph>
        <Button type="primary" block onClick={onChoose}>
          CHOOSE
        </Button>
      </Card>
    </React.Fragment>
  )
}
