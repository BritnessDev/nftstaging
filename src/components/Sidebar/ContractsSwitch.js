import React, { useState, useEffect } from "react"
import { Switch } from "antd"
import {
  CloseButton,
  ContractIcon,
  ContractInnerContainer,
  ContractListContainer,
  ContractListInnerContainer,
  ContractTitle,
  SumBtnContainer,
  SetSumBtn,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
  UserInfoContainer,
  UserName,
  UserProfileImage,
} from "./styles/SidebarStyling"
import {
  // DeliveredProcedureOutlined,
  // ExportOutlined,
  // IssuesCloseOutlined,
  // StopOutlined, 
  CloseOutlined
} from "@ant-design/icons"
import profileImage from "../../images/avatar.png"
import {
  changePermissionsFunc,
  mintableAccounts,
  pausableAccounts,
  burnableAccounts,
  transferableAccounts,
} from "utils/helpers/proxy"
import { useMoralis } from "react-moralis"
import { LoadingSpin } from "../common/LoadingSpin"
import DeliveredProcedureOutlined from '../../images/DeliveredProcedureOutlined.svg'
import ExportOutlined from '../../images/ExportOutlined.svg'
import IssuesCloseOutlined from '../../images/IssuesCloseOutlined.svg'
import StopOutlined from '../../images/StopOutlined.svg'
import RadiusSettingOutlined from '../../images/RadiusSettingOutlined.svg'

const contracts = [
  { id: 1, name: "access mint", icon: <img src={DeliveredProcedureOutlined} alt="DeliveredProcedureOutlined" /> },
  { id: 2, name: "access transfer", icon: <img src={ExportOutlined} alt="ExportOutlined" /> },
  { id: 3, name: "access pause", icon: <img src={IssuesCloseOutlined} alt="IssuesCloseOutlined" /> },
  { id: 4, name: "access burn", icon: <img src={StopOutlined} alt="StopOutlined" /> },
]

export const ContractsSwitch = ({ user, closeSidebar }) => {
  const { Moralis } = useMoralis()
  const [permission, setPermission] = useState([])
  const [oldPermission, setOldPermission] = useState([])
  const [isLoading, setLoading] = useState(true)

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
    <SidebarContainer>
      <TitleContainer>
        <SidebarTitle>EDIT ADMIN</SidebarTitle>
      </TitleContainer>
      <ContractListContainer>
        <UserInfoContainer>
          <UserProfileImage src={user?.profile_picture || profileImage} />
          <UserName>{user?.nickname || "Hello"}</UserName>
        </UserInfoContainer>
        {contracts.map((contract, index) => (
          <ContractInnerContainer key={contract.id}>
            <ContractListInnerContainer>
              <ContractIcon>{contract.icon}</ContractIcon>
              <ContractTitle>{contract.name}</ContractTitle>
            </ContractListInnerContainer>
            <Switch
              onChange={onChange}
              index={index}
              checked={permission[index]}
              checkedColor="red"
            />
          </ContractInnerContainer>
        ))}
      </ContractListContainer>
      <SumBtnContainer>
        <SetSumBtn onClick={submit}>SAVE</SetSumBtn>
      </SumBtnContainer>
      {isLoading && <LoadingSpin tip="Loading..." />}
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
