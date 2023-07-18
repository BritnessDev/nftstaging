/* eslint-disable prettier/prettier */
import { Layout, Tabs } from "antd"
import "antd/dist/antd.css"
import DEX from "components/DEX"
import FooterComponent from "components/footerComponent"
import Header from "components/Header"
import NFTBalance from "components/NFTBalance"
import { useEffect, useState, useContext } from "react"
import { useMoralis, useMoralisSubscription } from "react-moralis"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import AccountScreen from "./screens/Account/CoachRoom"
import Marketplace from "./screens/Marketplace"
import Transfers from "./screens/Transfers"

import "react-toastify/dist/ReactToastify.css"
import "./style.css"
import CollectionNftCards from "screens/Account/Collections"
import AdminScreen from "screens/Admin/AdminScreen"
import CreateNFT from "screens/Admin/CreateNFT"
import SuperAdmin from "screens/Superadmin/SuperAdmin"
import AllUsers from "components/AllUsers"
import Chat from "screens/Chat"
import ChatBar from "components/ChatBar"
import { MainContainer } from "static/AppStyles"
import { ManageAdmins } from "screens/Superadmin/components/ManageAdmins"
import { Airdrop } from "screens/Airdrop"
import { NftDetails } from "screens/Admin/NftDetails"
import { SetStake } from "screens/Superadmin/MobileScreens/SetStake"
import { ManageContracts } from "screens/Superadmin/MobileScreens/ManageContracts"
import { useMedia } from "hooks/useMedia"
import { EditAdmin } from "screens/Superadmin/MobileScreens/EditAdmin"
import { DemoteAdmin } from "screens/Superadmin/MobileScreens/DemoteAdmin"
import { AllNft } from "screens/AllNFTs"
import { Collection } from "screens/Collection"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Vaultteam from "screens/Vaultteam"
import TeamDetail from "screens/Vaultteam/detail"
import Landing from "screens/Authentication/landing"
import Tournaments from "screens/Tournaments"

const App = ({ isServerInfo }) => {
  const {
    user,
    Moralis,
    account,
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
  } = useMoralis()
  const [isAdminPage, getIsAdminPage] = useState(false)
  const [showChatBox, setShowChatBox] = useState(false)
  const [moralis, setMoralis] = useState(null)
  const isDesktop = useMedia("(min-width: 1024px)")
  const isMobile = useMedia("(max-width: 480px)")
  const [msgNum, setMsgNum] = useState(0)
  const [notification, setNotification] = useState([])
  useMoralisSubscription("Notification", (q) => q, [], {
    onCreate: (data) => {
      if (isAuthenticated) {
        const usersObj = data.attributes.users
        const description = data.attributes.description
        const msgId = data.id
        if (usersObj[user?.id] === false) {
          toast(`🦄 ${description}`, {
            autoClose: 30000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          Moralis.Cloud.run("removeReader", {
            msgIds: [msgId],
            userId: user?.id,
          })
        }
      }
    },
  })

  useEffect(() => {
    const start = async () => {
      const connectorId = window.localStorage.getItem("connectorId")
      try {
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
          await enableWeb3({ provider: connectorId })
        if (isServerInfo) {
          await Moralis.start({ serverUrl: process.env.REACT_APP_APP_SERVER_URL, appId: process.env.REACT_APP_APP_ID, })
          setMoralis({ fn: Moralis })
          Moralis.Cloud.run("setApiRateLimit")
        }
      } catch (error) {
        console.log(error)
      }
    }
    start()
    // eslint - disable - next - line react - hooks / exhaustive - deps
  }, [
    isAuthenticated,
    isWeb3Enabled,
    Moralis,
    enableWeb3,
    isServerInfo,
    isWeb3EnableLoading,
    user?.attributes.isAdmin,
    user?.id,
    user?.attributes.isSuperAdmin,
  ])

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const token = urlParams.get("token")
    if (localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE) != undefined)
      return
    if (!isAuthenticated && token?.length > 20) {
      Moralis.Cloud.run("getUserById", { id: token }).then((result) => {
        localStorage.setItem(
          process.env.REACT_APP_LOCALSTORAGE,
          JSON.stringify(result),
        )
        location.reload()
      })
    }
  }, [isAuthenticated, Moralis.Cloud])

  useEffect(() => {
    const urlArr = location.href.split("/")
    const isAdmin = urlArr.find(
      (item) => item === "admin" || item === "allnfts",
    )
    getIsAdminPage(isAdmin ? true : false)
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      Moralis.Cloud.run("getUnReadMsg", { userId: user?.id }).then((res) => {
        setNotification(res)
        let count = 0
        res.forEach((item) => {
          if (item.attributes.users[user?.id] === false) count++
        })
        setMsgNum(count)
      })
    }
  }, [isAuthenticated, Moralis, user?.id])

  return (
    <Layout
      style={{
        backgroundColor: "rgb(231 233 237)",
        maxWidth: "1920px",
        margin: "0 auto",
        position: "relative",
        paddingBottom: "10px",
      }}
    >
      <Router>
        <Header
          setMsgNum={setMsgNum}
          msgNum={msgNum}
          notification={notification}
          setShowChatBox={setShowChatBox}
          showChatBox={showChatBox}
        />
        <MainContainer isAdminPage={isAdminPage}>
          <ToastContainer
            autoClose={30000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
            style={{ position: "absolute" }}
          />
          <Switch>
            <Route exact path="/nftBalance">
              <NFTBalance isServerInfo={isServerInfo} />
            </Route>

            <Route path="/1inch">
              <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                  <DEX chain="eth" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                  <DEX chain="bsc" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <DEX chain="polygon" />
                </Tabs.TabPane>
              </Tabs>
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/admin" exact>
              <AdminScreen moralis={moralis} />
            </Route>
            <Route path="/nftMarket">
              <Marketplace moralis={moralis} />
            </Route>
            <Route path="/collection">
              <Collection moralis={moralis} />
            </Route>
            <Route path="/transfers">
              <Transfers moralis={moralis} />
            </Route>
            <Route path="/nftTransactions">
              <NFTBalance />
            </Route>
            <Route path="/myaccount">
              <AccountScreen moralis={moralis} nickname={user?.attributes.nickname} />
            </Route>
            <Route path="/admin/allnfts">
              <AllNft moralis={moralis} />
            </Route>
            <Route exact path="/admin/createNFT">
              <CreateNFT />
            </Route>

            <Route exact path="/admin/super">
              <SuperAdmin moralis={moralis} />
            </Route>

            <Route exact path="/admin/super/manageAdmins">
              <ManageAdmins moralis={moralis} />
            </Route>

            <Route exact path="/admin/airdrop">
              <Airdrop moralis={moralis} />
            </Route>

            <Route exact path="/admin/mintedNfts/:owner/:address/:id">
              <NftDetails moralis={moralis} />
            </Route>

            <Route exact path="/chat">
              <Chat moralis={moralis} />
            </Route> 

            <Route exact path={"/teams"}>
              <Vaultteam moralis={moralis} />
            </Route>  

            <Route exact path={"/teams/:address/:type"}>
              <TeamDetail moralis={moralis} />
            </Route>

            <Route exact path={"/tournaments"}>
              <Tournaments moralis={moralis} />
            </Route>

            <Route exact path="/admin/super/setStake">
                  <SetStake />
            </Route>

            <Route exact path="/admin/super/manageContracts">
              <ManageContracts />
            </Route>

            <Route exact path="/admin/super/edit">
              <EditAdmin />
            </Route>

            <Route exact path="/admin/super/demote">
              <DemoteAdmin />
            </Route>

            <Route exact path="/start">
              <Landing />
            </Route>

            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>

            <Route path="*">
              <Redirect to="/nftMarket" />
            </Route>
          </Switch>
        </MainContainer>
        {showChatBox && <AllUsers />}
        {isAuthenticated && account && <ChatBar />}
        { <FooterComponent />}
      </Router>
    </Layout>
  )
}

export default App
