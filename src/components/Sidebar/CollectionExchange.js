import React, { useEffect, useContext, useState } from "react"
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
  Image,
  Input,
  List,
  Row,
  Typography,
} from "antd"
import { CssDiv, CssP } from "components/CssStyledComponent/CssStyledComponent"
import { DappContext } from "context"
import { SearchOutlined, CloseOutlined } from "@ant-design/icons"
import { FriendButton } from "./styles/CollectionExchangeStyling"
import "./styles/slidebar.css"
import { CollectionExchangeType } from "./CollectionExchangeType"
import { useMoralisCloudFunction } from "react-moralis"

export const CollectionExchange = ({ options, closeSidebar }) => {
  const { data } = useMoralisCloudFunction("getUsers")
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } = useContext(DappContext)
  const [selectedFriedId, setSelectedFriedId] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (data) {
      let result = data.filter((user) => !user?.attributes.isAdmin && user?.attributes.ethAddress)
      setUsers(result)
    }
  }, [data])

  const onClickFriendButton = (e, friendId) => {
    setSelectedFriedId(friendId)
  }

  const onClickChoose = (event) => {
    const selectedFriend = users.find(
      (item) => item.id == selectedFriedId,
    )
    setSidebarContent(
      <CollectionExchangeType
        options={options}
        friend={selectedFriend}
        closeSidebar={onCloseSidebar}
      />,
    )
    setOpenSidebar(true)
  }

  return (
    <SidebarContainer className="CollectionExchange">
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
        </CssDiv>

        <Typography.Title level={3} style={{ marginTop: "20px" }}>
          FRIENDS
        </Typography.Title>

        <Input
          suffix={<SearchOutlined />}
          bordered={false}
          placeholder="Search friends"
          style={{
            backgroundColor: "rgba(222, 222, 222, 0.5)",
            borderRadius: "6px",
            marginRight: "20px",
            height: "40px",
          }}
        />

        <List
          bordered={false}
          dataSource={users}
          renderItem={(item) => (
            <List.Item>
              <FriendButton
                onClick={(e) => onClickFriendButton(e, item.id)}
                active={item.active}
                selected={item.id == selectedFriedId}
              >
                <Avatar
                  src={
                    <Image src={item?.attributes.profile_picture} style={{ width: 32 }} preview={false} />
                  }
                />
                <Typography.Text style={{ marginLeft: "10px", color: `${item.id == selectedFriedId ? "rgba(255, 255, 255, 0.82)" : "#242424"}` }} >
                  {item?.attributes.username}
                </Typography.Text>
                {item.active && (
                  <Badge color="#90E040" style={{ marginLeft: "10px" }} />
                )}
              </FriendButton>
            </List.Item>
          )}
          style={{ marginTop: "20px" }}
        />

        <Button type="primary" block size="large" style={{ marginTop: "20px", }} onClick={onClickChoose}>
          CHOOSE
        </Button>
      </MainContainer>
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
