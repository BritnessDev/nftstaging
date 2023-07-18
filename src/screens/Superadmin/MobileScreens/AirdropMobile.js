/* eslint-disable react-hooks/exhaustive-deps */
import { FilterOutlined, PlusCircleOutlined } from "@ant-design/icons"
import React, { useEffect, useState } from "react"
import { useMoralisCloudFunction } from "react-moralis"
import {
  AdminCard,
  HeaderRow,
  IconContainer,
  InnerContainer,
  MainContainer,
  MainTitle,
  ProgressInnerContainer,
  SearchInput,
  SportRow,
  SportTitle,
} from "./styles/AirdropMobileStyling"
import { Image, Nickname } from "./styles/EditAdminStyling"
import {
  Counter,
  SelectMenu,
  StatsContainer,
} from "./styles/ManageAdminsMobileStyling"
import profileImage from "../../../images/avatar.png"
import { useContext } from "react"
import { DappContext } from "context"
import { Progress } from "antd"

export const AirdropMobile = ({ sports }) => {
  const [users, setUsers] = useState(null)
  const { data } = useMoralisCloudFunction("getUsers")
  const [adminUsers, setAdminUsers] = useState([])

  useEffect(() => {
    if (data) {
      let arr = []
      data.forEach((elem, idx) => {
        arr.push(elem.attributes)
      })
      setUsers(arr)
    }
  }, [data])

  useEffect(() => {
    filterUsers()
  }, [users])

  const filterUsers = () => {
    if (users) {
      setAdminUsers(
        users.filter(
          (user) => user.isAdmin === true && user.isSuperAdmin === undefined,
        ),
      )
    }
  }

  return (
    <MainContainer>
      <MainTitle>airdrop</MainTitle>
      <InnerContainer>
        <SearchInput placeholder="search" />
        <IconContainer>
          <FilterOutlined />
        </IconContainer>
      </InnerContainer>
      <StatsContainer>
        <Counter>587 admins</Counter>
        <SelectMenu>
          <option value="FIRST NEW ONES">FIRST NEW ONES</option>
          <option value="LAST NEW ONES">LAST NEW ONES</option>
          <option value="FIRST OLD ONES">FIRST OLD ONES</option>
          <option value="LAST OLD ONES">LAST OLD ONES</option>
        </SelectMenu>
      </StatsContainer>
      {adminUsers.map((user) => (
        <AdminCard>
          <HeaderRow>
            <Image src={user?.profile_picture || profileImage} />
            <Nickname>{user?.nickname}</Nickname>
          </HeaderRow>
          {sports.map((sport) => (
            <SportRow>
              <SportTitle>{sport.value}</SportTitle>
              <ProgressInnerContainer>
                {sport.attrs !== 100 && (
                  <PlusCircleOutlined className="plus-icon" />
                )}
                <Progress
                  percent={sport.attrs}
                  steps={5}
                  // showInfo={false}
                  strokeColor="#90E040"
                  strokeWidth={20}
                  success={{ strokeColor: "#E54949" }}
                />
              </ProgressInnerContainer>
            </SportRow>
          ))}
        </AdminCard>
      ))}
    </MainContainer>
  )
}
