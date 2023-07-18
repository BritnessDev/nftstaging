/* eslint-disable prettier/prettier */
import { Progress } from "antd"
import React, { useEffect, useState, useCallback } from "react"
import { ProfileImg, ProfileName } from "screens/Airdrop/styles/AirdropStyling"
import profileImage from "../../images/avatar.png"
import {
  AcceptBtn,
  AcceptBtnContainer,
  Button,
  ButtonsContainer,
  Checkbox,
  Digits,
  DigitsContainer,
  ProgressStep,
  ProgressStepText,
  ProgressStepContainer,
  InfoContainer,
  InnerContainer,
  InnerTitle,
  MainContainer,
  NftCard,
  NftContainer,
  OuterContainer,
  SearchInput,
  SportsContainer,
  Title,
} from "./styles/AirdropV1Styling"
import { CloseButton } from "./styles/SidebarStyling"
import Countdown from "react-countdown"
import { CheckOutlined, CloseOutlined } from "@ant-design/icons"
import { useMoralis } from "react-moralis"
import { ylnft721Transfer } from "utils/helpers/ylnft721"
import { ylnft1155Transfer } from "utils/helpers/ylnft1155"
import { LoadingSpin } from "components/common/LoadingSpin"

const TOKEN_ADDRESS = [
  process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
  process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS,
]

const DELAY_TIME = 5000

const NftsList = ({ sport, userData, moralis, closeSidebar, setContent, setTimeCountdown, }) => {
  const [currentNFTs, setCurrentNFTs] = useState([])
  const { user } = useMoralis()
  const userId = JSON.parse(userData).objectId
  const [values, setVaules] = useState({})
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      const accounts = user?.attributes.accounts
      let allNFTs = []
      for (let i = 0; i < accounts.length; i++) {
        const options = {
          chain: "bsc testnet",
          address: accounts[i],
          token_addresses: TOKEN_ADDRESS,
        }
        const value = await moralis?.fn.Web3API.account.getNFTs(options)
        allNFTs = allNFTs.concat(value.result)
      }
      setCurrentNFTs(allNFTs)
    }
    fetch()
  }, [moralis, user?.attributes.accounts])

  const back = async () => {
    await moralis?.fn.Cloud.run("setHoldUser", { userId, flag: true })
    closeSidebar()
    setContent(null)
    setTimeCountdown(false)
  }

  const airdrop = async (e) => {
    setLoading(true)
    e.preventDefault()
    const data = JSON.parse(userData)
    for (const nft of currentNFTs) {
      if (values[`${nft.token_address}-${nft.token_id}`]) {
        try {
          const transaction = await moralis?.fn.executeFunction(
            nft.token_address ===
              process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS.toLowerCase()
              ? ylnft721Transfer(data.ethAddress, nft.token_id)
              : ylnft1155Transfer(data.ethAddress, nft.token_id, nft.amount),
          )
          await transaction.wait(3)
          await moralis?.fn.Cloud.run("setHoldUser", { userId, flag: true })
        } catch (error) {
          console.log(error)
        }
      }
    }
    location.reload()
  }

  const handleCheck = async (e) => {
    let tmp_obj = values
    tmp_obj[e.target.name] = e.target.checked
    setVaules(tmp_obj)
  }

  return (
    <>
      <InnerTitle>Choose your NFT</InnerTitle>
      <SearchInput placeholder="Search NFT" />
      <form onSubmit={airdrop} name="123">
        <NftContainer>
          {currentNFTs?.map(
            (nft, index) =>
              JSON.parse(nft.metadata).sport === sport && (
                <NftCard key={index}>
                  <Checkbox
                    type="checkbox"
                    name={`${nft.token_address}-${nft.token_id}`}
                    onChange={handleCheck}
                  />
                  <img src={JSON.parse(nft.metadata).image} alt="" />
                </NftCard>
              ),
          )}
        </NftContainer>
        <ButtonsContainer>
          <Button onClick={back}>back</Button>
          <Button active>Send Airdrop</Button>
        </ButtonsContainer>
      </form>
      {isLoading && <LoadingSpin tip="Loading..." />}
    </>
  )
}

const CountDown = ({ moralis, userData, handleClick, showCloseButton }) => {
  const userId = JSON.parse(userData).objectId
  const [visible, setVisible] = useState(false)
  const [holdUser, setHoldUser] = useState(false)

  const complete = async () => {
    showCloseButton(false)
    const res = await moralis?.fn.Cloud.run("getHoldUser", { userId })
    await moralis?.fn.Cloud.run("setHoldUser", { userId, flag: false })
    setHoldUser(res)
    setVisible(true)
  }

  const render = ({ seconds, completed }) => {
    if (!completed) {
      return (
        !visible && (
          <DigitsContainer>
            <Digits>{seconds}</Digits>
          </DigitsContainer>
        )
      )
    } else {
      return !visible && <></>
    }
  }

  return (
    <>
      <Countdown
        date={Date.now() + DELAY_TIME}
        key="timercountdown"
        onComplete={complete}
        renderer={render}
      />
      {visible && (
        <ProgressStep>
          {holdUser || holdUser === undefined ? (
            <ProgressStepContainer>
              <DigitsContainer style={{ backgroundColor: "#90E040"}}>
                  <CheckOutlined style={{ backgroundColor: "#90E040", borderRadius: "50%" }} />
              </DigitsContainer>
              <ProgressStepText>
                <p>Successfully!</p>
                <p>You can send NFT to this user</p>
              </ProgressStepText>
            </ProgressStepContainer>
          ) : (
            <ProgressStepContainer>
              <DigitsContainer style={{ backgroundColor: "#E54949"}}>
                <CloseOutlined style={{ backgroundColor: "#E54949", borderRadius: "50%" }} />
              </DigitsContainer>
              <ProgressStepText>
                <p>Send NFT fails</p>
                <p>This user has already been selected by another administrator</p>
              </ProgressStepText>
            </ProgressStepContainer>
          )}
          <AcceptBtn onClick={handleClick}>
            {holdUser || holdUser === undefined ? "Send Airdrop" : "Try again"}
          </AcceptBtn>
        </ProgressStep>
      )}
      {<CloseButton onClick={close}><CloseOutlined /></CloseButton>}
    </>
  )
}

const AirdropV1 = ({ moralis, sport, percent, userData, closeSidebar }) => {
  const [closebutton, showCloseButton] = useState(true)
  const [content, setContent] = useState(null)
  const [timeCountdown, setTimeCountdown] = useState(false)

  const handleAccept = () => {
    setTimeCountdown(true)
  }
  const close = useCallback(() => {
    closeSidebar()
    setContent(null)
    setTimeCountdown(false)
    showCloseButton(true)
  }, [closeSidebar])

  useEffect(() => {
    const handleClick = (e) => {
      const text = e.target.innerText
      if (text === "SEND AIRDROP") {
        setContent(
          <>
            <NftsList
              sport={sport}
              userData={userData}
              moralis={moralis}
              closeSidebar={closeSidebar}
              setContent={setContent}
              setTimeCountdown={setTimeCountdown}
            />
            {closebutton && <CloseButton onClick={close}><CloseOutlined /></CloseButton>}
          </>,
        )
      } else {
        close()
      }
    }
    if (timeCountdown)
      setContent(
        <>
          <CountDown
            moralis={moralis}
            userData={userData}
            handleClick={handleClick}
            showCloseButton={showCloseButton}
          />
          {closebutton && <CloseButton onClick={close}><CloseOutlined /></CloseButton>}
        </>,
      )
  }, [timeCountdown, userData, moralis, closeSidebar, sport, close])

  return (
    <OuterContainer>
      <Title>airdrop to gamers</Title>
      <MainContainer>
        <InnerContainer>
          <InfoContainer>
            <ProfileImg src={JSON.parse(userData).profile_picture || profileImage} />
            <ProfileName>{JSON.parse(userData).nickname || "Uriy Doglorukiy"}</ProfileName>
          </InfoContainer>
          <SportsContainer>
            <p>{sport}</p>
            <Progress
              percent={percent}
              steps={5}
              showInfo={false}
              strokeColor="#90E040"
              strokeWidth={20}
              success={{ strokeColor: "#E54949" }}
            />
          </SportsContainer>
        </InnerContainer>
      </MainContainer>
      {content}
      {!timeCountdown && <AcceptBtnContainer><AcceptBtn onClick={handleAccept}>accept</AcceptBtn></AcceptBtnContainer>}
      {closebutton && <CloseButton onClick={close}><CloseOutlined /></CloseButton>}
    </OuterContainer>
  )
}

export default AirdropV1
