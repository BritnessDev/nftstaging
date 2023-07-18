import React, { useState, useContext } from "react"
import { Button, Space } from "antd"
import {
  CodeOutlined,
  LineChartOutlined,
  SettingFilled,
} from "@ant-design/icons"
import { MainContainer } from "./styles/SuperAdminProfileStyling"
import { FunctionBtn } from "./components/FunctionBtn"
import {
  AdminInfo,
  AdminInfoContainer,
  AdminInfoInnerContainer,
  AdminUsername,
  CameraIcon,
  CameraBar,
  ProfileImg,
  Role,
  AdminInfoButtonIconsContainer,
} from "./styles/AdminInfoStyling"
import { dummyData } from "utils/dummyData"
import { BalanceInfo } from "./components/BalanceInfo"
import { FunctionsList } from "./components/FunctionsList"
import cameraImg from "../../images/account/camera.svg"
import { useMedia } from "hooks/useMedia"
import { DappContext } from "context"
import { Statistics } from "components/Sidebar/Statistics"
import {
  AdminInfoContainerMobile,
  AdminInfoMobile,
  ProfileImgMobile,
} from "./styles/SuperAdminProfileMobileStyling"
import { useRef } from "react"

export const SuperAdminProfile = (props) => {
  const [deposit, setDeposit] = useState(null)
  const {
    handleFileInput,
    tempProfileName,
    editProfile,
    profileImage,
    user,
  } = props
  const cameraInpRef = useRef(null);
  const isDesktop = useMedia("(min-width: 1024px)")
  const profileName = "Add a nickname"
  const { setOpenSidebar, setSidebarContent, onCloseSidebar } =
    useContext(DappContext)

  const isDeposit = () => {
    setDeposit(!deposit)
  }

  const openStatistic = () => {
    setSidebarContent(<Statistics closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }

  return (
    <MainContainer>
      {isDesktop && (
        <>
          <AdminInfoContainer>
            <AdminInfo>
              <ProfileImg src={profileImage} alt="super admin image" />
              <CameraBar>
                <CameraIcon
                  src={cameraImg}
                  onClick={() => cameraInpRef.current.click()}
                />
              </CameraBar>
              <input
                type="file"
                style={{ display: "none" }}
                ref={cameraInpRef}
                accept="image/*"
                onChange={() => handleFileInput(cameraInpRef)}
              />
              <AdminInfoInnerContainer>
                <Role>super Admin</Role>
                <AdminUsername>
                  {user?.attributes?.nickname || tempProfileName || profileName}
                </AdminUsername>
              </AdminInfoInnerContainer>
              <AdminInfoButtonIconsContainer>
                <Space size={8}>
                  <Button
                    type="link"
                    shape="circle"
                    icon={<LineChartOutlined style={{ color: "white" }} />}
                    size={"medium"}
                    onClick={openStatistic}
                  />
                  <Button
                    type="link"
                    shape="circle"
                    icon={
                      <SettingFilled
                        style={{ color: "white" }}
                        onClick={editProfile}
                      />
                    }
                    size={"medium"}
                  />
                </Space>
              </AdminInfoButtonIconsContainer>
            </AdminInfo>
            {/* balance */}
            <BalanceInfo
              isSuperPage={true}
              isdeposit={deposit}
              address={user?.attributes.ethAddress}
              data={dummyData}
            />
          </AdminInfoContainer>

          {/* create NFT Button */}
          <FunctionBtn
            text="create nft"
            icon={<CodeOutlined />}
            link="/admin/createNFT"
          />
          {/* functions */}
          <FunctionsList
            isSuperPage={true}
            deposit={isDeposit}
            address={user?.attributes.ethAddress}
          />
        </>
      )}
    </MainContainer>
  )
}
