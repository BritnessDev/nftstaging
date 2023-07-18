import React, { useEffect, useRef, useState, useContext } from "react"
import { useHistory } from "react-router"
import Chat from "screens/Chat"
import { Button, Input as Input_ANT, Space, Modal } from "antd"
import {
  CodeOutlined,
  LineChartOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons"
import { DappContext } from "context"
import { useMoralis } from "react-moralis"
import toast from "react-hot-toast"
import { BalanceInfo } from "screens/Superadmin/components/BalanceInfo"
import { FunctionBtn } from "screens/Superadmin/components/FunctionBtn"
import { FunctionsList } from "screens/Superadmin/components/FunctionsList"
import {
  MainContainer,
  MainContainerMobile,
} from "screens/Superadmin/styles/SuperAdminStyling"
import { Statistics } from "components/Sidebar/Statistics"
import {
  AdminInfo,
  AdminInfoContainer,
  AdminInfoInnerContainer,
  AdminUsername,
  CameraBar,
  CameraIcon,
  ProfileImg,
  Role,
  AdminInfoButtonIconsContainer,
} from "screens/Superadmin/styles/AdminInfoStyling"
import {
  Input,
  InputBtn,
  InputContainer,
  MainInnerContainer,
  MainInnerContainerMobile,
} from "./styles/AdminScreenStyles"
import whiteLabel from "images/yourlife_back_white.png"
import cameraImg from "images/account/camera.svg"
import { dummyData } from "utils/dummyData"
import {
  isMintableAccount,
  mintableAccounts,
  depositYLT,
  sufficientstakeamount,
} from "utils/helpers/proxy"
import { increaseAllowance } from "utils/helpers/ylt"
import { useMedia } from "hooks/useMedia"
import { FunctionsListMobile } from "screens/Superadmin/MobileScreens/FunctionsListMobile"
import { FunctionBtnMobile } from "screens/Superadmin/components/FunctionBtnMobile"

const AdminScreen = ({ moralis }) => {
  const [yltDeposit, setYltDeposit] = useState(0)
  const { Moralis, user, isAuthenticated, isWeb3Enabled } = useMoralis()
  const [onceLoad, setOnceLoad] = useState(true)
  const [deposit, setDeposit] = useState(null)
  const cameraInpRef = useRef(null)
  const cameraInpRef1 = useRef(null)
  const [profilePicture, setProfilePicture] = useState(null)
  const [tempProfileName, setTempProfileName] = useState(null)
  const [depositValue, setDepositValue] = useState("")
  const [suffAmount, getSufficientstakeamount] = useState(null)
  const { setOpenSidebar, setSidebarContent, onCloseSidebar } =
    useContext(DappContext)
  const history = useHistory()
  const profileName = "Add a nickname"
  const profileImage =
    profilePicture ||
    user?.attributes.profile_picture ||
    require("../../images/account/Ellipse 58.png").default

  const isDesktop = useMedia("(min-width: 1024px)")
  const isMobile = useMedia("(max-width: 1024px)")

  useEffect(() => {
    if (user && user.attributes.isAdmin === undefined) {
      return window.location.replace("/myaccount")
    }
    if (user && user.attributes.isSuperAdmin === true) {
      return window.location.replace("/admin/super")
    }
  }, [user])

  useEffect(() => {
    const fetch = async () => {
      let value
      try {
        value = await moralis?.fn.executeFunction(sufficientstakeamount())
      } catch (error) {
        Modal.error({
          icon: <ExclamationCircleOutlined />,
          content: error.data.message,
        })
      }
      if (value) getSufficientstakeamount(Moralis.Units.FromWei(value))
    }
    if (isAuthenticated && isWeb3Enabled && onceLoad && moralis) {
      fetch()
      setOnceLoad(false)
    }
  }, [moralis, isAuthenticated, isWeb3Enabled, onceLoad, Moralis.Units])

  const handleClick = () => {
    // eslint-disable-next-line no-debugger
    // debugger
    if (isDesktop && cameraInpRef1.current) cameraInpRef1.current.click()
    else if (!isDesktop && cameraInpRef.current) cameraInpRef.current.click()
  }

  const handleFileInput = async () => {
    if (cameraInpRef.current.files.length > 0) {
      const img = cameraInpRef.current.files[0]
      const file = new Moralis.File(img.name, img)
      await file.saveIPFS()
      user.set("profile_picture", file._ipfs)
      await user.save()
      setProfilePicture(file._ipfs)
      toast.success("Your profile picture has been updated successfully!", {autoClose: 2000})
    }
  }

  const editProfile = async () => {
    const name = prompt("Please enter a new nickname")
    if (name) {
      user.set("nickname", name)
      await user.save()
      setTempProfileName(name)
      toast.success("Your nickname has been updated successfully!")
    }
  }

  const onChange = (e) => {
    e.preventDefault()
    setYltDeposit(e.target.value)
  }

  const increaseAllowanceAmount = async (amount) => {
    const transaction = await moralis?.fn.executeFunction(
      increaseAllowance(
        process.env.REACT_APP_YLPROXY_CONTRACT_ADDRESS,
        Moralis.Units.Token(amount, "18"),
      ),
    )
    await transaction.wait(3)
  }

  const depositYlt = async () => {
    const depositAmount = Number(depositValue)
    if (depositAmount >= suffAmount) {
      await increaseAllowanceAmount(depositAmount)
      let transaction
      try {
        transaction = await moralis?.fn.executeFunction(
          depositYLT(Moralis.Units.Token(depositAmount, "18")),
        )
      } catch (error) {
        Modal.error({
          icon: <ExclamationCircleOutlined />,
          content: error.data.message,
        })
      }
      await transaction?.wait(3)
      setDeposit(!deposit)
      setDepositValue("")
    } else {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: `Deposit amount should be more than ${suffAmount}!`,
      })
    }
  }

  const handleInput = (e) => {
    setDepositValue(e.target.value)
  }

  const toCreateNFTFunc = () => {
    try {
      moralis?.fn
        .executeFunction(isMintableAccount(user?.attributes.ethAddress))
        .then((isMintable) => {
          moralis?.fn
            .executeFunction(mintableAccounts(user?.attributes.ethAddress))
            .then((mintable) => {
              if (isMintable || user?.attributes.isSuperAdmin) {
                history.push("/admin/createNFT")
              } else {
                Modal.error({
                  icon: <ExclamationCircleOutlined />,
                  content: mintable
                    ? `You should deposit at least ${suffAmount} YLT!`
                    : "Super Admin should give you mint permission!",
                })
              }
            })
        })
    } catch (error) {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: error.data.message,
      })
    }
  }

  const openStatistic = () => {
    setSidebarContent(<Statistics closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }
  return (
    <React.Fragment>
      
      {isDesktop && (
        <MainContainer>
          <MainInnerContainer>
            <AdminInfoContainer>
              <AdminInfo>
                <ProfileImg src={profileImage} alt="profile image" />
                <CameraBar>
                  <CameraIcon src={cameraImg} onClick={handleClick} />
                </CameraBar>
                 <input
                  type="file"
                  style={{ display: "none" }}
                  ref={cameraInpRef1}
                  accept="image/*"
                  onChange={() => handleFileInput()}
                />
                <AdminInfoInnerContainer>
                  <Role>Admin</Role>
                  <AdminUsername>
                    {user?.attributes?.nickname ||
                      tempProfileName ||
                      profileName}
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
                        <EditOutlined
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
                isdeposit={deposit}
                address={user?.attributes.ethAddress}
                data={dummyData}
                whiteLabel={whiteLabel}
                value={yltDeposit}
                suffAmount={suffAmount}
                onChange={onChange}
              />
            </AdminInfoContainer>
            <InputContainer>
              <Space.Compact block size="large">
                <Input_ANT
                  placeholder="ENTER AMOUNT"
                  onChange={handleInput}
                  value={depositValue}
                  size="large"
                />
                <Button size="large" type="primary" onClick={depositYlt}>
                  Stake YLT
                </Button>
              </Space.Compact>
            </InputContainer>

            {/* create NFT Button */}
            <FunctionBtn
              icon={<CodeOutlined />}
              onClick={toCreateNFTFunc}
              text="create nft"
            />

            {/* functions */}
            <FunctionsList
              address={user?.attributes.ethAddress}
              data={dummyData}
              role="admin"
            />
          </MainInnerContainer>
          <Chat moralis={moralis} />
        </MainContainer>
      )}
      {isMobile && (
        <MainContainerMobile>
          <MainInnerContainerMobile>
            <AdminInfoContainer>
              <AdminInfo>
                <ProfileImg src={profileImage} alt="profile image" />
                <CameraIcon
                  src={cameraImg}
                  onClick={() => cameraInpRef.current.click()}
                />
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={cameraInpRef}
                  accept="image/*"
                  onChange={handleFileInput}
                />
                <AdminInfoInnerContainer>
                  <Role>Admin</Role>
                  <AdminUsername>
                    {user?.attributes?.nickname ||
                      tempProfileName ||
                      profileName}
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
                        <EditOutlined
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
                isdeposit={deposit}
                address={user?.attributes.ethAddress}
                data={dummyData}
                whiteLabel={whiteLabel}
                value={yltDeposit}
                suffAmount={suffAmount}
                onChange={onChange}
              />
            </AdminInfoContainer>
            <InputContainer>
              <Space.Compact block size="large">
                <Input_ANT
                  placeholder="ENTER AMOUNT"
                  onChange={handleInput}
                  value={depositValue}
                  size="large"
                />
                <Button size="large" type="primary" onClick={depositYlt}>
                  Deposit
                </Button>
              </Space.Compact>
            </InputContainer>

            {/* create NFT Button */}
            <FunctionBtnMobile
              icon={<CodeOutlined />}
              onClick={toCreateNFTFunc}
              text="create nft"
            />

            {/* functions */}
            <FunctionsListMobile
              address={user?.attributes.ethAddress}
              data={dummyData}
              role="admin"
            />
          </MainInnerContainerMobile>
        </MainContainerMobile>
      )}
    </React.Fragment>
  )
}

export default AdminScreen
