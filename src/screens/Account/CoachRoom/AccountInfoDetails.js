import { useCallback, useEffect, useRef, useState, useContext } from "react"
import { useMoralis, useMoralisWeb3Api } from "react-moralis"
import { toast } from "react-hot-toast"
import {
  AccountBalance,
  ConnectContainer,
  ConnectWalletText,
  AccountBalanceContainer,
  AdminButtonContainer,
  AdminButton,
  AccountInfoDetailsStyling,
  ArrowRight,
  BackgroundImage,
  BalanceContainer,
  ButtonTopUp,
  Camera,
  CashBalance,
  FirstRow,
  LeftSide,
  MyNFTCardsContainer,
  MyNFTCardsImage,
  NFTCardsTitle,
  NFTTitleContainer,
  ProfileImage,
  CameraContainer,
  SettingButton,
  SettingButtonContainer,
  ProfileImageContainer,
  ProfileName,
  ChooseAccountText,
  SecondRow,
  TokenBalance,
  TokenSymbol,
} from "./styles/AccountInfoDetailsStyling"
import { SettingOutlined } from "@ant-design/icons"
import { Button, Modal, Input } from 'antd';
import Logo from "../../../images/yourlife_white.png"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import Collection from "../../../images/user/collection.png"
import AuthFlow from "components/Sidebar/AuthFlow"
import { DappContext } from "context"

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

function AccountInfoDetails({
  profileName = "Add profile name",
  accountBalance = "0.055",
  cashBalance = "($6 564,23)",
  moralis,
}) {
  const cameraInpRef = useRef(null)
  const [cameraClick, setCameraClick] = useState(false)
  const [yltBalance, setYLTBalance] = useState(0)
  const { Moralis } = useMoralis()
  const { user } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const [profilePicture, setProfilePicture] = useState(null)
  const [tempProfileName, setTempProfileName] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { setOpenSidebar, setSidebarContent, onCloseSidebar } = useContext(DappContext)
  const [accountType, setAccountType] = useState(-1);
  const memoizedCallback = useCallback(async () => {
    if (user) {
      const bal = await Web3Api.account.getTokenBalances({
        address: user.attributes.ethAddress,
        chain: "bsc testnet",
        token_addresses: [process.env.REACT_APP_YLT_CONTRACT_ADDRESS],
      })
      if (bal[0]?.balance)
        setYLTBalance(Math.floor(Moralis.Units.FromWei(bal[0].balance)))
    }
  }, [Web3Api.account, user, Moralis.Units])

  useEffect(() => {
    memoizedCallback()
  }, [memoizedCallback])

  useEffect(() => {
    if (cameraClick) {
      cameraInpRef.current.click()
      setCameraClick(false)
    }
  }, [cameraClick])
  const handleFileInput = async () => {
    if (cameraInpRef.current.files.length > 0) {
      const img = cameraInpRef.current.files[0]
      const file = new Moralis.File(img.name, img)
      await file.saveIPFS()
      user.set("profile_picture", file._ipfs)
      await user.save()
      setProfilePicture(file._ipfs)
      toast.success("Your profile picture has been updated successfully", {position:'top-right'})
    }
  }
  
  const editProfile = async () => {
    if (user.attributes.nickname) { 
      await user.save()
      setTempProfileName(user.attributes.nickname)
      toast.success("Your nickname has been updated successfully", {position:'top-right'})
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChooseHandler = () => {
    setSidebarContent(
      <AuthFlow closeSidebar={onCloseSidebar} moralis={moralis} />,
    )
    setOpenSidebar(true)
  }

  return (
    <AccountInfoDetailsStyling>
      <Modal 
        title="Please enter a new nickname" 
        open={isModalOpen} 
        onOk={editProfile} 
        onCancel={handleCancel}
        okText="Save  "
      >
        <Input placeholder="Nickname" onChange={(e)=>user.set("nickname", e.target.value)} />
      </Modal>
      <FirstRow>
        <LeftSide>
          <ProfileImageContainer>
            <ProfileImage
              src={
                profilePicture ||
                user?.attributes.profile_picture ||
                require("../../../images/account/Ellipse 58.png").default
              }
            />
            <CameraContainer>
              <Camera
                src={require("../../../images/account/camera.svg").default}
                onClick={() => setCameraClick(true)}
              />
            </CameraContainer>
          </ProfileImageContainer>
          <input
            type="file"
            style={{ display: "none" }}
            ref={cameraInpRef}
            accept="image/*"
            onChange={handleFileInput}
          />
          <ProfileName>
            <p>{tempProfileName || profileName}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="black"
              style={{ cursor: "pointer", height: "20px" }}
              onClick={()=>setIsModalOpen(true)}
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            <ChooseAccountText onClick={onChooseHandler}>Choose Type of Account</ChooseAccountText>         
          </ProfileName>
        </LeftSide>
        <SettingButtonContainer>
          <SettingButton>
            Settings <SettingOutlined />
          </SettingButton>
        </SettingButtonContainer>
      </FirstRow>
      <SecondRow>
        <AccountBalanceContainer>
          <AccountBalance>
            <BalanceContainer>
              <TokenSymbol
                src={Logo}
              />
              <TokenBalance>{yltBalance}</TokenBalance>
            </BalanceContainer>
            <CashBalance>{cashBalance}</CashBalance>
            <ButtonTopUp href="https://swap.yourlifegames.com" target="_blank">
              top up
            </ButtonTopUp>
          </AccountBalance>
          <ConnectContainer>
            <ConnectWalletText>
              connect wallet
            </ConnectWalletText>
          </ConnectContainer>
          <AdminButtonContainer>
            <AdminButton>
              BECOME AN ADMINISTRATOR
            </AdminButton>
          </AdminButtonContainer>
        </AccountBalanceContainer>
        <MyNFTCardsContainer>
          <NFTTitleContainer>
            <NFTCardsTitle>my collection</NFTCardsTitle>
            <ArrowRight
              src={require("../../../images/account/arrowRight.svg").default}
            />
          </NFTTitleContainer>
          {/* <Swiper
            slidesPerView={1}
            initialSlide={0}
            centeredSlides={false}
            // spaceBetween={10}
            loop
          >
            <SwiperSlide>
              <img src={Collection} alt="Collection" />
            </SwiperSlide>
          </Swiper> */}
        </MyNFTCardsContainer>
      </SecondRow>
    </AccountInfoDetailsStyling>
  )
}

export default AccountInfoDetails
