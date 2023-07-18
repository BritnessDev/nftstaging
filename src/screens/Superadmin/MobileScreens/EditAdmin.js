import React, { useState, useEffect } from "react"
import { List, Switch, Spin } from "antd"
import { useLocation } from "react-router"
import { actionsList } from "utils/const"
import {
  Btn,
  HeaderRow,
  Image,
  InnerContainer,
  MainTitle,
  Nickname,
  OptionsContainer,
} from "./styles/EditAdminStyling"
import {
  LoadingOutlined,
} from "@ant-design/icons"
import {
  changePermissionsFunc,
  mintableAccounts,
  pausableAccounts,
  burnableAccounts,
  transferableAccounts,
} from "utils/helpers/proxy"
import profileImage from "../../../images/avatar.png"
import { useMoralis } from "react-moralis"

export const EditAdmin = () => {
  const { Moralis } = useMoralis()
  const location = useLocation()
  const { user } = location.state
  const [permission, setPermission] = useState([])
  const [oldPermission, setOldPermission] = useState([])
  const [isLoading, setLoading] = useState(true)
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  useEffect(() => {
    const fetchFn = async () => {
      let arr = []
      setLoading(true)
      arr.push(await Moralis.executeFunction(mintableAccounts(user?.ethAddress)))
      arr.push(await Moralis.executeFunction(transferableAccounts(user?.ethAddress)))
      arr.push(await Moralis.executeFunction(pausableAccounts(user?.ethAddress)))
      arr.push(await Moralis.executeFunction(burnableAccounts(user?.ethAddress)))
      setLoading(false)
      setPermission(arr)
      setOldPermission(arr)
    }
    fetchFn()
  }, [user?.ethAddress, Moralis])

  const onChange = (checked, e) => {
    const index = Number(e.target.closest("button").getAttribute("index"))
    setPermission((select) =>
      select.map((value, i) => (i === index ? checked : value)),
    )
  }

  const submit = async () => {
    const permissionList = {
      accessMint: permission[0],
      accessTransfer: permission[1],
      accessPause: permission[2],
      accessBurn: permission[3],
    }
    Object.keys(permissionList).forEach((key, index) => {
      if (permissionList[key] === oldPermission[index]) {
        delete permissionList[key]
      }
    })
    setLoading(true)
    for (let funcName in permissionList) {
      const transaction = await Moralis.executeFunction(
        changePermissionsFunc(
          user?.ethAddress,
          funcName,
          permissionList[funcName],
        ),
      )
      await transaction.wait()
    }
    setLoading(false)
  }

  return (
    <InnerContainer>
      <MainTitle>Edit Admin</MainTitle>

      <OptionsContainer>
        <List
          header={
            <HeaderRow>
              <Image src={user?.profile_picture || profileImage} />
              <Nickname>{user?.nickname}</Nickname>
            </HeaderRow>
          }
          dataSource={actionsList}
          renderItem={(item, index) => (
            <List.Item key={item.id}>
              {item.icon} {item.title} {/* add state and handleChange */}
              <Switch index={index} checked={permission[index]} className="switch" onChange={onChange} />{" "}
            </List.Item>
          )}
        />
      </OptionsContainer>
      <Btn onClick={submit}>Save</Btn>
      {isLoading && (
        <Spin indicator={antIcon}
          style={{ height: "100%", width: "100%", paddingTop: "40%", position: "absolute", top: 0, left: 0, background: "rgba(0,0,0,0.2)" }}
          tip="Loading..." />
      )}
    </InnerContainer>
  )
}
