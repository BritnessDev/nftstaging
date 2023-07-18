import React, { useState } from "react"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"
import { Button, Col, Image, Row, Typography } from "antd"
import { CssDiv, CssP } from "components/CssStyledComponent/CssStyledComponent"
import { CircleCheckBox } from "components/common/CircleCheckBox"
import net from "../../images/marketplace/booster-cards/net.svg"
import { CloseOutlined } from "@ant-design/icons"
import Carousel from "react-grid-carousel"

const boosters = [
  {
    id: 1,
    bgColor: "white",
    imgUrl: "/5speed.png",
    caption: "+5 SPEED",
  },
  {
    id: 2,
    bgColor: "#FCFE74",
    imgUrl: "/6move.png",
    caption: "+6 MOVEMENT",
  },
  {
    id: 3,
    bgColor: "#FF7EA1",
    imgUrl: "/3move.png",
    caption: "+3 MOVEMENT",
  },
  {
    id: 4,
    bgColor: "#271D9A",
    imgUrl: "/5power.png",
    caption: "+5 POWER",
  },
  {
    id: 5,
    bgColor: "#9EF590",
    imgUrl: "/15speed.png",
    caption: "+15 SPEED",
  },
  {
    id: 6,
    bgColor: "#01ACC4",
    imgUrl: "/8speed.png",
    caption: "+8 SPEED",
  },
]

export const Booster = ({ options, closeSidebar }) => {
  const [checked, setChecked] = useState({
    checked_1: false,
    checked_2: false,
    checked_3: false,
    checked_4: false,
    checked_5: false,
    checked_6: false,
  })

  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>Booster</SidebarTitle>
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

        <CssDiv mt="30px">
          <Carousel rows={2} cols={3}>
            {boosters.map((item) => (
              <Carousel.Item key={item.id} span={8}>
                <CssDiv
                  backgroundColor={item.bgColor}
                  borderRadius="8px"
                  backgroundImage={"url(" + net + ")"}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  position="relative"
                >
                  <img src={item.imgUrl} style={{ borderRadius: "8px" }} />
                  <CircleCheckBox
                    outWidth="20px"
                    outHeight="20px"
                    outBg="#000000"
                    outOpacity="0.4"
                    innerWidth="14px"
                    innerHeight="14px"
                    innerBg={item.bgColor}
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                    }}
                    checked={eval("checked.checked_" + item.id)}
                    onChange={(e) =>
                      setChecked((prev) => ({
                        ...prev,
                        ["checked_" + item.id]: e.target.checked,
                      }))
                    }
                  />
                </CssDiv>

                <CssDiv
                  textAlign="center"
                  mt="5px"
                  borderRadius="8px"
                  backgroundColor={item.bgColor}
                  pt="4px"
                  pb="3px"
                >
                  {item.caption}
                </CssDiv>
              </Carousel.Item>
            ))}
          </Carousel>
        </CssDiv>

        <CssDiv mt="30px">
          <Row gutter={16}>
            <Col span={12}>
              <Button
                block
                style={{
                  backgroundColor: "#A3A5A9",
                  color: "white",
                }}
              >
                BACK
              </Button>
            </Col>

            <Col span={12}>
              <Button block type="primary">
                APPLY
              </Button>
            </Col>
          </Row>
        </CssDiv>
      </MainContainer>
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
