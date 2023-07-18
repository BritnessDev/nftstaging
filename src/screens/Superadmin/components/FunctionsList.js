import React, { useContext, useEffect, useState } from "react"
import { FunctionBtn } from "./FunctionBtn"
import { FunctionsContainer } from "../styles/FunctionsStyling"
import {
  ContactsOutlined,
  ControlOutlined,
  FileImageOutlined,
  GiftOutlined,
  SnippetsOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons"
import { Contracts } from "components/Sidebar/Contracts"
import { DappContext } from "context"
import { SetStakeAmount } from "components/Sidebar/SetStakeAmount"
import { useHistory } from "react-router"
import { useMoralis } from "react-moralis"

const superAdminList = [
  {
    id: 1,
    name: "manage contracts",
    icon: <ContactsOutlined />,
  },
  {
    id: 2,
    name: "manage admins",
    icon: <UserSwitchOutlined />,
  },
  {
    id: 3,
    name: "set stake value",
    icon: <ControlOutlined />,
  },
  {
    id: 4,
    name: "all nft's",
    icon: <SnippetsOutlined />,
  },
  {
    id: 6,
    name: "airdrop",
    icon: <GiftOutlined />,
  },
]

const adminList = [
  {
    id: 1,
    name: "manage contracts",
    icon: <ContactsOutlined />,
  },
  {
    id: 2,
    name: "all nft's",
    icon: <SnippetsOutlined />,
  },
  {
    id: 3,
    name: "airdrop",
    icon: <GiftOutlined />,
  },
]

export const FunctionsList = ({ isSuperPage, address }) => {
  const { user, isAuthenticated } = useMoralis()
  const [list, setList] = useState([])
  useEffect(() => {
    if (isAuthenticated && user?.attributes.isAdmin) {
      setList(
        user?.attributes.isSuperAdmin && isSuperPage
          ? superAdminList
          : adminList,
      )
    }
  }, [
    isAuthenticated,
    user?.attributes.isAdmin,
    user?.attributes.isSuperAdmin,
    isSuperPage,
  ])
  const { setOpenSidebar, setSidebarContent, onCloseSidebar } =
    useContext(DappContext)
  const history = useHistory()

  const handleClick = (e) => {
    if (e.target.innerText === "MANAGE CONTRACTS") {
      setSidebarContent(<Contracts closeSidebar={onCloseSidebar} />)
      setOpenSidebar(true)
    }
    if (e.target.innerText === "SET STAKE VALUE") {
      setSidebarContent(
        <SetStakeAmount address={address} closeSidebar={onCloseSidebar} />,
      )
      setOpenSidebar(true)
    }
    if (e.target.innerText === "MANAGE ADMINS") {
      history.push("/admin/super/manageAdmins")
    }
    if (e.target.innerText === "AIRDROP") {
      history.push("/admin/airdrop")
    }
    if (e.target.innerText === "ALL NFT'S") {
      history.push("/admin/allnfts")
    }
  }

  return (
    <FunctionsContainer style={{ height: "auto" }}>
      {list.map((func) => (
        <FunctionBtn
          key={func.id}
          text={func.name}
          icon={func.icon}
          onClick={(e) => handleClick(e)}
        />
      ))}
    </FunctionsContainer>
  )
}
