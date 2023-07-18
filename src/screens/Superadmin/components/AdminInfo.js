import { SettingFilled } from "@ant-design/icons"
import { Space } from "antd"
import React from "react"
import { Camera } from "screens/Account/CoachRoom/styles/AccountInfoDetailsStyling"
import {
  AdminInfo,
  AdminInfoInnerContainer,
  AdminUsername,
  IconContainer,
  ProfileImg,
  Role,
} from "../styles/AdminInfoStyling"
import cameraImg from "../../../images/account/camera.svg"

export const Info = ({
  data,
  profileImage,
  setCameraClick,
  cameraInpRef,
  handleFileInput,
}) => {
  return (
    <AdminInfo>
      <ProfileImg src={profileImage} alt="super admin image" />
      <Camera src={cameraImg} onClick={() => setCameraClick(true)} />
      <input
        type="file"
        style={{ display: "none" }}
        ref={cameraInpRef}
        accept="image/*"
        onChange={handleFileInput}
      />
      <AdminInfoInnerContainer>
        <Role>{data.role}</Role>
        <AdminUsername>{data.userName}</AdminUsername>
      </AdminInfoInnerContainer>
      <IconContainer>
        <Space>
          <SettingFilled color="#fff" />
        </Space>
      </IconContainer>
    </AdminInfo>
  )
}
