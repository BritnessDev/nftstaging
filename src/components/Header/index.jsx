/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from "react"
import { useMoralis } from "react-moralis"
import { Link, NavLink } from "react-router-dom"
import { BellOutlined, ExclamationCircleOutlined } from "@ant-design/icons"
import { Button, Modal } from "antd"
import Account from "../Account/Account"

import { MobileMenu } from "../MobileMenu"
import { Sidebar } from "../Sidebar/Sidebar"
import { DappContext } from "../../context"
import Events from "../Sidebar/Events"
import AirdropV1 from "../Sidebar/AirdropV1"
import logo from "../../images/yourlife_white.png"
import DocumentIcon from "../../images/document-icon.svg"
import TextLogo from "../../images/text-logo.svg"
import { useMedia } from "hooks/useMedia"
import {
  HeaderItemsContainer,
  HeaderItemText,
  HeaderTextContainer,
  HeaderIconContainer,
  HeaderIconImage,
  HeaderContainer,
  HeaderStyling,
  MenuContainer,
  MenuPart,
  LogoContainer,
  NavLogo,
  RightContainer,
  SubscribeBtn,
  SubscribeContainer,
} from "./HeaderStyling"
import Dropdown from "components/Dropdown"
import { authAdminHeaderList, authUserHeaderList, headerList } from "../../utils/const"

function Header({ notification, msgNum, setMsgNum }) {
  const [openMenu, setOpenMenu] = useState(false)
  const [headerItems, setHeaderItems] = useState(headerList)
  const {
    openSidebar,
    setOpenSidebar,
    sidebarContent,
    setSidebarContent,
    onCloseSidebar,
    openModal,
    setOpenModal,
    modalContent,
  } = useContext(DappContext)
  const { user, isAuthenticated } = useMoralis()
  const isDesktop = useMedia("(min-width: 1024px)")
  const isMobile = useMedia("(max-width: 1024px)")
  const [dropdown, setDropdown] = useState(false)

  const currentUrl = window.location.pathname

  const handleClick = (e) => {
    setSidebarContent(
      currentUrl.includes("airdrop") ? (
        <AirdropV1 closeSidebar={onCloseSidebar} />
      ) : (
        <Events notification={notification} closeSidebar={onCloseSidebar} />
      ),
    )
    setOpenSidebar(true)
    setMsgNum(0)
  }

  useEffect(() => {
    setHeaderItems(isAuthenticated ? user?.attributes.isAdmin ? authAdminHeaderList : authUserHeaderList : headerList)
  }, [isAuthenticated])

  const joinNewsLetter = () => {
    if (!user?.attributes.emailVerified) {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: "You have to verify email!",
      })
    } else {
      Modal.success({
        icon: <ExclamationCircleOutlined />,
        content: "You can join to news letter!",
      })
    }
  }

  return (
    <HeaderContainer>
      <HeaderStyling>
        <Sidebar openSidebar={openSidebar}>{sidebarContent}</Sidebar>
        {isDesktop && (
          <>
            <LogoContainer>
              <NavLogo src={TextLogo} />
            </LogoContainer>
            {dropdown && user?.attributes.isAdmin && <Dropdown setDropdown={setDropdown} />}
            <MenuPart>
              <MenuContainer>
                <HeaderItemsContainer className="shadow bottom">
                  {headerItems.map((item, index) => {
                    if (item.title !== "SWAP") {
                      return (
                        <NavLink to={item.link} key={index}>
                          {item.icon ?
                            <HeaderIconContainer>
                              <HeaderIconImage src={DocumentIcon}></HeaderIconImage>
                              <HeaderItemText>
                                <HeaderTextContainer>
                                  {item.title}
                                </HeaderTextContainer>
                              </HeaderItemText>
                            </HeaderIconContainer>
                            :
                            <HeaderItemText>
                              <HeaderTextContainer>
                                {item.title}
                              </HeaderTextContainer>
                            </HeaderItemText>
                          }
                        </NavLink>
                      )
                    } else {
                      return (
                        <Link
                          to={{
                            pathname: item.link,
                            // pathname: item.link + user?.id,
                            state: { user: user },
                          }}
                          target="_blank"
                          key={index}
                        >
                          <HeaderItemText>
                            <HeaderTextContainer>
                              {item.title}
                            </HeaderTextContainer>
                          </HeaderItemText>
                        </Link>
                      )
                    }
                  })}
                </HeaderItemsContainer>
                <RightContainer>
                  <SubscribeContainer>
                    <SubscribeBtn onClick={joinNewsLetter}>JOIN NEWSLETTER</SubscribeBtn>
                  </SubscribeContainer>
                  <Account dropdown={dropdown} setDropdown={setDropdown} />
                  <Button onClick={(e) => handleClick(e)} type="default">
                    {msgNum === 0 ? <BellOutlined /> : msgNum}
                  </Button>
                  <Modal
                    centered
                    footer={null}
                    closable={false}
                    bodyStyle={{ padding: "0px" }}
                    open={openModal}
                    onCancel={(e) => setOpenModal(false)}
                    onOk={(e) => setOpenModal(false)}
                  >
                    {modalContent}
                  </Modal>
                </RightContainer>
              </MenuContainer>
            </MenuPart>
          </>
        )}
        {isMobile && (
          <>
            <MobileMenu
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              headerItems={headerItems}
            />
          </>
        )}
      </HeaderStyling>
    </HeaderContainer>
  )
}

export default Header
