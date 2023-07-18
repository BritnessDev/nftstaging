import React, { useState, useEffect } from "react"
import { useMoralis } from "react-moralis"
import { getEllipsisTxt } from "helpers/formatters"
import Address from "../Address/Address"
import { Button, Card, Modal, Avatar } from "antd"
import { SelectOutlined, ExclamationCircleOutlined } from "@ant-design/icons"
import { getExplorer } from "helpers/networks"
import Dropdown from "../Dropdown"
import {
  AccountContainer,
  AccountText,
  AccountText2,
} from "./styles/AccountElements"
import { useHistory } from "react-router"
import { Web3Auth } from "@web3auth/web3auth"
import profileImage from "../../images/default-avatar.svg"

function Account({ dropdown, setDropdown }) {
  const {
    Moralis,
    authenticate,
    isAuthenticated,
    isInitialized,
    account,
    chainId,
    logout,
    user,
  } = useMoralis()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [showEmailInput, showEMailInput] = useState(false)

  const history = useHistory()
  const onMouseEnter = () => {
    if (user?.attributes.isAdmin === true) {
      if (window.innerWidth < 960) {
        setDropdown(false)
      } else {
        setDropdown(true)
      }
    }
  }

  const onMouseLeave = () => {
    setDropdown(false)
  }

  const authUser = () => {
    authenticate({
      provider: process.env.REACT_APP_WEB3_PROVIDER,
      chainId: process.env.REACT_APP_CHAIN_ID,
      theme: process.env.REACT_APP_THEME,
      appLogo: process.env.REACT_APP_APP_LOGO,
      clientId: process.env.REACT_APP_CLIENT_ID,
    }).then((user) => {
      if (user?.attributes.isSuperAdmin) {
        history.push("/admin/super")
      }
      if (user?.attributes.isAdmin) {
        history.push("/admin")
      } else {
        history.push("/myaccount")
      }
    })
  }

  const addEmail = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const ethAddress = user?.attributes.ethAddress
    Moralis.Cloud.run("searchEmail", {
      email,
      ethAddress,
    }).then((isEmail) => {
      if (isEmail) {
        Modal.error({
          icon: <ExclamationCircleOutlined />,
          content: "This email is already exist!",
        })
      } else {
        Moralis.Cloud.run("addEmail", {
          id: user?.id,
          email: e.target.email.value,
        }).then((r) => {
          if (r) {
            showEMailInput(false)
            history.push("/myaccount")
          }
        })
      }
    })
  }

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      if (isAuthenticated) {
        Moralis.link(account).then(() => {
          Modal.error({
            icon: <ExclamationCircleOutlined />,
            content: `${account} is linked successfully! Please wait...`,
          })
          location.reload()
        })
      }
    })
  }, [isInitialized, isAuthenticated, Moralis])

  useEffect(() => {
    if (isAuthenticated) {
      const loadEmail = () => {
        const web3auth = new Web3Auth({
          clientId: process.env.REACT_APP_CHAIN_ID,
          chainConfig: {
            chainNamespace: process.env.REACT_APP_CHAIN_NAMESPACE,
            chainId: process.env.REACT_APP_CHAIN_ID,
            rpcTarget: process.env.REACT_APP_RPC_TARGET,
            displayName: process.env.REACT_APP_DISPLAY_NAME,
            blockExplorer: process.env.REACT_APP_BLOCK_EXPLORER,
            ticker: process.env.REACT_APP_TICKER,
            tickerName: process.env.REACT_APP_TICKER_NAME,
          },
        })
        web3auth.initModal().then(() => {
          web3auth.getUserInfo().then((userInfo) => {
            if (userInfo.email !== undefined) {
              const email = userInfo.email
              const ethAddress = user?.attributes.ethAddress
              Moralis.Cloud.run("searchEmail", {
                email,
                ethAddress,
              }).then((isEmail) => {
                if (isEmail) {
                  const id = user.id
                  history.push("/")
                  logout().then(() => {
                    Moralis.Cloud.run("deleteRecord", { id }).then((result) => {
                      if (result) {
                        Modal.error({
                          icon: <ExclamationCircleOutlined />,
                          content: "This email is already exist!",
                        })
                      }
                    })
                  })
                } else {
                  Moralis.Cloud.run("addEmail", {
                    id: user?.id,
                    email: userInfo.email,
                  }).then((r) => {
                    if (r) {
                      showEMailInput(false)
                    }
                  })
                }
              })
            } else {
              if (user.attributes.email === undefined) {
                showEMailInput(true)
              }
            }
          })
        })
      }
      loadEmail()
    }
  }, [isAuthenticated, Moralis.Cloud, history, logout, user])

  if (!isAuthenticated || !account) {
    return (
      <div onClick={authUser}>
        <AccountText>Authenticate</AccountText>
      </div>
    )
  }

  return (
    <>
      <AccountContainer>
        <Avatar
          src={user?.attributes.profile_picture || profileImage}
          style={{ width: "1.5rem", height: "1.5rem" }}
        />
        <AccountText2 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <span onClick={() => setIsModalVisible(true)} style={{ minWidth: "105px" }}>
            {user?.attributes.nickname ||
              getEllipsisTxt(user?.attributes.ethAddress, 6)}
          </span>
          {/* {dropdown && user?.attributes.isAdmin && <Dropdown />} */}
        </AccountText2>
      </AccountContainer>
      <Modal
        open={showEmailInput}
        footer={null}
        onCancel={() => {
          history.push("/")
          logout()
        }}
        bodyStyle={{
          padding: "15px",
          fontSize: "17px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        <form onSubmit={addEmail}>
          <input type="email" name="email" placeholder="email" />
          <button type="submit">submit</button>
        </form>
      </Modal>
      <Modal
        open={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{
          padding: "15px",
          fontSize: "17px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        Account
        <Card
          style={{
            marginTop: "10px",
            borderRadius: "1rem",
          }}
          bodyStyle={{ padding: "15px" }}
        >
          <Address
            avatar="left"
            size={6}
            copyable
            style={{ fontSize: "20px" }}
          />
          <div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a
              href={`${getExplorer(chainId)}/address/${user?.attributes.ethAddress
                }`}
              target="_blank"
              rel="noreferrer"
            >
              <SelectOutlined style={{ marginRight: "5px" }} />
              View on Explorer
            </a>
          </div>
        </Card>
        <Button
          size="large"
          type="primary"
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "500",
          }}
          onClick={() => {
            history.push("/")
            logout().then(() => {
              window.localStorage.removeItem("connectorId")
              setIsModalVisible(false)
            })
          }}
        >
          Disconnect Wallet
        </Button>
      </Modal>
    </>
  )
}
export default Account
