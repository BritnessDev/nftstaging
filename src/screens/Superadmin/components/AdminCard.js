import React, { useContext } from "react"
import { ContractsSwitch } from "components/Sidebar/ContractsSwitch"
import { DemoteAdmin } from "components/Sidebar/DemoteAdmin"
import { DappContext } from "context"
import {
  ActionBtn,
  ActionsContainer,
  AdminAddress,
  AdminImage,
  AdminName,
  CardContainer,
  CardInnerContainer,
  InnerContainer,
  LeftBtn,
  RightBtn,
} from "../styles/ManageAdminsStyling"
import profileImage from "../../../images/avatar.png"
import { actionsList } from "utils/const"
import { Divider } from "antd"
import { Link } from "react-router-dom"

export const AdminCard = ({ user, mobile }) => {
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } =
    useContext(DappContext)

  const handleClick = () => {
    setSidebarContent(
      <ContractsSwitch user={user} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  const handleDemoteClick = () => {
    setSidebarContent(<DemoteAdmin user={user} closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }

  return (
    <CardContainer>
      <CardInnerContainer>
        {!mobile ? (
          <LeftBtn onClick={handleDemoteClick}>DEMOTE</LeftBtn>
        ) : (
          <LeftBtn>
            <Link to={{ pathname: "/admin/super/demote", state: { user } }}>DEMOTE</Link>
          </LeftBtn>
        )}
        <AdminImage src={user?.profile_picture || profileImage} />
        {!mobile ? (
          <RightBtn onClick={handleClick}>EDIT</RightBtn>
        ) : (
          <RightBtn>
            <Link to={{ pathname: "/admin/super/edit", state: { user } }}>EDIT</Link>
          </RightBtn>
        )}
      </CardInnerContainer>
      <InnerContainer>
        <AdminName>{user.nickname}</AdminName>
        <AdminAddress>{user.ethAddress}</AdminAddress>
      </InnerContainer>
      <Divider />
      <ActionsContainer>
        {actionsList.map((action) => (
          <ActionBtn key={action.id}>{action.icon}</ActionBtn>
        ))}
      </ActionsContainer>
    </CardContainer>
  )
}
