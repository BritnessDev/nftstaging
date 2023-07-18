/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef, useCallback } from "react"
import { useMoralis } from "react-moralis"
import {
  BackBtn,
  MainContainer,
  MainInnerContainer,
  MakeAdminBtn,
  QuantityText,
  RightContainer,
  RightSideContainer,
  AdminToolbarContainer,
  SearchInput,
  Title,
  TopContainer,
} from "../styles/ManageAdminsStyling"
import { Select, Modal } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"
import { useHistory } from "react-router"
import { AdminCard } from "./AdminCard"
import { useMedia } from "hooks/useMedia"
import { ManageAdminMobile } from "../MobileScreens/ManageAdminMobile"
import { allowCredential } from "utils/helpers/marketplace"
import { actionsList } from "utils/const"

export const ManageAdmins = ({ moralis }) => {
  const addressInput = useRef()
  const { Moralis, isAuthenticated } = useMoralis()
  const [onceLoad, setOnceLoad] = useState(false)
  const [adminUsers, setAdminUsers] = useState([])
  const [isSort, setSort] = useState(true)
  const history = useHistory()
  const isDesktop = useMedia("(min-width: 768px)")
  const isMobile = useMedia("(max-width: 768px)")

  const fetchAdmin = useCallback(async () => {
    const admins = await moralis?.fn.Cloud.run("getAdmin")
    const filteredAdmin = admins.filter(
      (admin) => !admin.attributes.isSuperAdmin,
    )
    filteredAdmin.sort((a, b) => {
      return isSort
        ? b.attributes.createdAt - a.attributes.createdAt
        : a.attributes.createdAt - b.attributes.createdAt
    })
    setAdminUsers(filteredAdmin)
  }, [moralis, isSort])

  useEffect(() => {
    if (moralis && !onceLoad) {
      fetchAdmin()
      setOnceLoad(true)
    }
  }, [moralis, onceLoad])

  useEffect(() => {
    if (moralis) fetchAdmin()
  }, [isSort])

  const handleBack = () => {
    history.push("/admin/super")
  }

  const handleChange = () => {
    setSort(!isSort)
  }

  const makeAdmin = async (e) => {
    const address = addressInput.current.value.toLowerCase()
    if (address === null) {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: "Please type wallet address of user!",
      })
    } else {
      const params = { ethAddress: address }
      await moralis?.fn.executeFunction(allowCredential(address, true))
      const isSuccess = await moralis?.fn.Cloud.run("setAdmin", params)
      if (isSuccess) {
        fetchAdmin()
      }
    }
  }

  const unsetAdmin = async () => {
    const address = addressInput.current.value
    if (address === null) {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: "Please type wallet address of user!",
      })
    } else {
      if (isAuthenticated) {
        const params = { ethAddress: address }
        const isSuccess = await Moralis.Cloud.run("unsetAdmin", params)
        if (isSuccess) {
          fetchAdmin()
        }
      }
    }
  }

  return (
    <MainContainer>
      {isDesktop && (
        <>
          <BackBtn onClick={handleBack}>back</BackBtn>
          <TopContainer>
            <Title>Manage Admins</Title>
            <RightContainer>
              <SearchInput
                placeholder="Find a notice"
                ref={addressInput}
              />
              <MakeAdminBtn onClick={makeAdmin}>make admin</MakeAdminBtn>
            </RightContainer>
          </TopContainer>
            <AdminToolbarContainer>
              <QuantityText>{adminUsers.length} admins</QuantityText>
              <RightSideContainer>
                <Select defaultValue="FIRST NEW ONES" onChange={handleChange}>
                  <Select.Option value="FIRST NEW ONES">
                    FIRST NEW ONES
                  </Select.Option>
                  <Select.Option value="FIRST OLD ONES">
                    FIRST OLD ONES
                  </Select.Option>
                </Select>
            </RightSideContainer>
            </AdminToolbarContainer>
            <MainInnerContainer>
            {adminUsers.map((user, index) => (
              <AdminCard key={index} user={user.attributes} />
            ))}
          </MainInnerContainer>
        </>
      )}
      {isMobile && (
        <>
          <ManageAdminMobile adminUsers={adminUsers} handleChange={handleChange} />
        </>
      )}
    </MainContainer>
  )
}
