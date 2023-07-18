import React, { useState, useEffect } from "react"
import { FunctionsContainerMobile } from "../styles/FunctionsStylingMobile"
import {
  ContactsOutlined,
  ControlOutlined,
  FileImageOutlined,
  GiftOutlined,
  MessageOutlined,
  SnippetsOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons"
import { useHistory } from "react-router"
import { useMoralis } from "react-moralis"
import { FunctionBtnMobile } from "../components/FunctionBtnMobile"

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
    id: 5,
    name: "airdrop",
    icon: <GiftOutlined />,
  },
  {
    id: 6,
    name: "chat",
    icon: <MessageOutlined />,
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
  {
    id: 4,
    name: "chat",
    icon: <MessageOutlined />,
  },
]

export const FunctionsListMobile = ({ isSuperPage }) => {
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

  const history = useHistory()

  const handleClick = (e) => {
    if (e.target.innerText === "MANAGE CONTRACTS") {
      history.push("/admin/super/manageContracts")
    }
    if (e.target.innerText === "SET STAKE VALUE") {
      history.push("/admin/super/setStake")
    }
    if (e.target.innerText === "MANAGE ADMINS") {
      history.push("/admin/super/manageAdmins")
    }
    if (e.target.innerText === "AIRDROP") {
      history.push("/admin/super/airdrop")
    }
    if (e.target.innerText === "ALL NFT'S") {
      history.push("/admin/allnfts")
    }
    if (e.target.innerText === "CHAT") {
      history.push("/chat")
    }
  }

  return (
    <FunctionsContainerMobile>
      {list.map((func) => (
        <FunctionBtnMobile
          key={func.id}
          text={func.name}
          icon={func.icon}
          onClick={(e) => handleClick(e)}
        />
      ))}
    </FunctionsContainerMobile>
  )
}