import React from "react"
import { Select } from "antd"
import { AdminCard } from "../components/AdminCard"
import {
  Btn,
  Counter,
  InnerContainer,
  Input,
  MainTitle,
  SelectMenu,
  StatsContainer,
} from "./styles/ManageAdminsMobileStyling"

export const ManageAdminMobile = ({ adminUsers, handleChange }) => {
  return (
    <InnerContainer>
      <MainTitle>Manage Admins</MainTitle>
      <Btn>Make Admin</Btn>
      {/* set value and onChange to the input */}
      <Input placeholder="Search" />
      <StatsContainer>
        <Counter>{adminUsers.length} admins</Counter>
        <SelectMenu onChange={handleChange}>
          <option value="FIRST NEW ONES">FIRST NEW ONES</option>
          <option value="LAST NEW ONES">LAST NEW ONES</option>
          <option value="FIRST OLD ONES">FIRST OLD ONES</option>
          <option value="LAST OLD ONES">LAST OLD ONES</option>
        </SelectMenu>
      </StatsContainer>
      {adminUsers.map((user, index) => (
        <AdminCard key={index} user={user.attributes} mobile />
      ))}
    </InnerContainer>
  )
}
