import React from "react"
import {
  AdminInfoContainerMobile,
  AdminInfoInnerContainerMobile,
  AdminInfoMobile,
  AdminUsernameContainerMobile,
  AdminUsernameMobile,
  AdminUsernameProfile,
  CameraContainer,
  CameraIconMobile,
  CameraBar,
  ConnectWalletMobileBtn,
  ProfileImgMobile,
  Role,
} from "./styles/SuperAdminProfileMobileStyling"
import cameraImg from "../../images/account/camera.svg"
import { BalanceInfo } from "./components/BalanceInfo"
import { BalanceInfoMobile } from "./components/BalanceInfoMobile"
import { ConnectWalletBtn } from "./styles/SuperAdminProfileStyling"
import { FunctionBtnMobile } from "./components/FunctionBtnMobile"
import { CodeOutlined } from "@ant-design/icons"
import { FunctionsListMobile } from "./MobileScreens/FunctionsListMobile"
import { useRef } from "react"

export const SuperAdminProfileMobile = (props) => {
  const {
    handleFileInput,
    tempProfileName,
    editProfile,
    profileImage,
    user,
  } = props
  const cameraInpRef = useRef(null);
  return (
    <>
      <AdminInfoContainerMobile>
        <AdminInfoMobile>
          <ProfileImgMobile src={profileImage} alt="super admin image" />
          <CameraContainer>
            <CameraBar>
              <CameraIconMobile
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
          </CameraContainer>
        </AdminInfoMobile>
        <AdminUsernameContainerMobile>
          <AdminUsernameMobile>
            {user?.attributes?.nickname || tempProfileName}
          </AdminUsernameMobile>
          <Role>super admin</Role>
        </AdminUsernameContainerMobile>

        <BalanceInfoMobile />
      </AdminInfoContainerMobile>

      <FunctionBtnMobile
        text="create nft"
        icon={<CodeOutlined />}
        link="/admin/createNFT"
      />

      {/* functions */}
      <FunctionsListMobile isSuperPage={true} />
    </>
  )
}
