/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext, useCallback } from "react"
import {
  CardContainer,
  CardsContainer,
  FiltersBtn,
  InfoContainer,
  ProfileImg,
  ProfileName,
  SportContainer,
  SportInnerContainer,
  SportTitle,
  TopContainer,
  TopInnerContainer,
  QuantityText,
} from "./styles/AirdropStyling"
import { DappContext } from "context"
import {
  SearchInput,
  MainContainer,
  BackBtn,
} from "../Superadmin/styles/ManageAdminsStyling"
import profileImage from "../../images/avatar.png"
import { Title } from "screens/Superadmin/styles/ManageAdminsStyling"
import { useMoralis } from "react-moralis"
import { useHistory } from "react-router"
import { useMedia } from "hooks/useMedia"
import { AirdropMobile } from "screens/Superadmin/MobileScreens/AirdropMobile"
import { Progress, Modal } from "antd"
import {
  isTransferAccount,
  transferableAccounts,
  sufficientstakeamount,
} from "utils/helpers/proxy"
import {
  PlusCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons"
import { ProgressInnerContainer } from "screens/Superadmin/MobileScreens/styles/AirdropMobileStyling"
import AirdropV1 from "components/Sidebar/AirdropV1"
import { sports } from "utils/dummyData"

const Card = ({ userData, moralis }) => {
  const { isAuthenticated, user } = useMoralis()
  const [percent, setPercent] = useState({})
  const [suffAmount, getSufficientstakeamount] = useState(null)
  const [onceLoad, setOnceLoad] = useState(false)

  const fetchNFT = useCallback(async () => {
    const value = await moralis?.fn.executeFunction(sufficientstakeamount())
    getSufficientstakeamount(moralis?.fn.Units.FromWei(value))
    const accounts = userData?.attributes.accounts
    let nftArr = []
    for (let i = 0; i < accounts.length; i++) {
      const options = {
        chain: "bsc testnet",
        address: accounts[i],
        token_addresses: [
          process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
          process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS,
        ],
      }
      const nfts = await moralis?.fn.Web3API.account.getNFTs(options)
      nftArr = nftArr.concat(nfts.result)
    }
    let tmp = {}
    await Promise.all(
      nftArr.map((nft) => {
        const sportName = JSON.parse(nft.metadata).sport
        if (sportName) {
          tmp[sportName] = tmp[sportName] === undefined ? 1 : tmp[sportName] + 1
        }
      }),
    )
    for (let key in tmp) {
      tmp[key] = tmp[key] / 5 >= 1 ? "100" : ((tmp[key] / 5) * 100).toString()
    }
    setPercent(tmp)
  }, [moralis, userData])

  useEffect(() => {
    const accounts = userData?.attributes.accounts
    if (accounts && moralis && isAuthenticated && !onceLoad) {
      fetchNFT()
    }
    setOnceLoad(true)
  }, [isAuthenticated, moralis, userData, onceLoad, fetchNFT])

  const handleClick = (e) => {
    moralis?.fn
      .executeFunction(isTransferAccount(user?.attributes.ethAddress))
      .then((isTransable) => {
        moralis?.fn
          .executeFunction(transferableAccounts(user?.attributes.ethAddress))
          .then((transable) => {
            if (isTransable) {
              const target = e.target.closest("span")
              const userData = target.getAttribute("user")
              const sport = target.getAttribute("sport")
              const percent = target.getAttribute("percent")
              setSidebarContent(
                <AirdropV1
                  sport={sport}
                  percent={percent}
                  userData={userData}
                  closeSidebar={onCloseSidebar}
                  moralis={moralis}
                />,
              )
              setOpenSidebar(true)
            } else {
              Modal.error({
                icon: <ExclamationCircleOutlined />,
                content: transable
                  ? `You should deposit at least ${suffAmount} YLT!`
                  : "Super Admin should give you transfer permission!",
              })
            }
          })
      })
  }

  const { setOpenSidebar, setSidebarContent, onCloseSidebar } = useContext(DappContext)
  return (
    <CardContainer>
      <InfoContainer>
        <ProfileImg src={userData?.attributes.profile_picture || profileImage} />
        <ProfileName>{userData?.attributes.nickname || "No nickname"}</ProfileName>
      </InfoContainer>
      <SportContainer>
        {sports.map((sport) => {
          return (
            <SportInnerContainer key={sport.id}>
              <SportTitle>{sport.value}</SportTitle>
              <ProgressInnerContainer>
                {percent !== "100" && (
                  <PlusCircleOutlined
                    className="plus-icon"
                    percent={percent[sport.value] ? percent[sport.value] : "0"}
                    sport={sport.value}
                    user={JSON.stringify(userData)}
                    onClick={handleClick}
                  />
                )}
                <Progress
                  percent={percent[sport.value] ? percent[sport.value] : "0"}
                  steps={5}
                  showInfo={false}
                  strokeColor="#90E040"
                  strokeWidth={20}
                  success={{ strokeColor: "#E54949" }}
                />
              </ProgressInnerContainer>
            </SportInnerContainer>
          )
        })}
      </SportContainer>
    </CardContainer>
  )
}

export const Airdrop = ({ moralis }) => {
  const { isAuthenticated } = useMoralis()
  const [users, setUsers] = useState()
  const [onceLoad, setOnceLoad] = useState(true)
  const [searchKey, setSearchKey] = useState("")
  const history = useHistory()

  const fetchUser = useCallback(async () => {
    const users = await moralis?.fn.Cloud.run("getUsers")
    let result
    if (searchKey === "")
      result = users.filter((user) => !user?.attributes.isAdmin)
    else
      result = users.filter((user) => {
        const _name = user.attributes.nickname
        const _address = user.attributes.ethAddress
        return (
          _address &&
          _name &&
          (_address === searchKey.toLowerCase() ||
            _name.toLowerCase().search(searchKey.toLowerCase()) !== -1) &&
          !user?.attributes.isAdmin
        )
      })
    setUsers(result)
  }, [moralis, searchKey])

  useEffect(() => {
    if (onceLoad && moralis && isAuthenticated) {
      fetchUser()
      setOnceLoad(false)
    }
  }, [isAuthenticated, moralis, onceLoad, fetchUser])
  const isDesktop = useMedia("(min-width: 425px)")
  const isMobile = useMedia("(max-width: 425px)")

  const handleBack = () => {
    history.push("/admin/super")
  }

  const searchUser = (e) => {
    setSearchKey(e.target.value)
  }

  const handleSearch = () => {
    if (moralis) fetchUser()
  }

  return (
    <MainContainer>
      {(
        <>
          <BackBtn onClick={handleBack}>back</BackBtn>
          <TopContainer>
            <Title>Airdrop</Title>
            <TopInnerContainer>
              <SearchInput
                placeholder="Find a user"
                value={searchKey}
                onChange={searchUser}
              />
              <FiltersBtn onClick={handleSearch}>filters</FiltersBtn>
            </TopInnerContainer>
          </TopContainer>
          <CardsContainer>
            <QuantityText>{users?.length} users</QuantityText>
            {users?.map((user, index) => (
              <Card key={index} userData={user} moralis={moralis} />
            ))}
          </CardsContainer>
        </>
      )}
    </MainContainer>
  )
}
