import { AlignLeftOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  BurgerMenuContainer,
  BurgerMenuInnerContainer,
  CancelButton,
  HeaderItemText,
  JoinBtn,
} from "./Header/HeaderStyling"
import {
  ArrowContainer,
  BurgerIcon,
  LogoImg,
  MobileHeaderContainer,
} from "./Header/HeaderStylingMobile"
import Logo from "../images/LogoRs.webp"

export const MobileMenu = ({ openMenu, setOpenMenu, headerItems }) => {
  const location = useLocation()
  return (
    <BurgerMenuContainer>
      {openMenu ? (
        <BurgerMenuInnerContainer>
          <CancelButton onClick={() => setOpenMenu(false)}>X</CancelButton>
          {headerItems?.map((item, index) => {
            if (item === "TRANSFERS") {
              return (
                <NavLink to={"/" + item.link} key={index}>
                  <HeaderItemText>{item.title}</HeaderItemText>
                </NavLink>
              )
            }
            if (item === "COLLECTION") {
              return (
                <NavLink to={"/" + item.link} key={index}>
                  <HeaderItemText>{item.title}</HeaderItemText>
                </NavLink>
              )
            } else {
              return (
                <NavLink to={"/" + item.link} key={index}>
                  <HeaderItemText>{item.title}</HeaderItemText>
                </NavLink>
              )
            }
          })}
          <JoinBtn>join newsletter</JoinBtn>
        </BurgerMenuInnerContainer>
      ) : (
        <MobileHeaderContainer>
          {location.pathname !== "/admin/super" && (
            <ArrowContainer>
              <ArrowLeftOutlined onClick={() => history.back()} />
            </ArrowContainer>
          )}
          <LogoImg src={Logo} alt="logo" />
          <BurgerIcon onClick={() => setOpenMenu(!openMenu)}>
            <AlignLeftOutlined />
          </BurgerIcon>
        </MobileHeaderContainer>
      )}
    </BurgerMenuContainer>
  )
}
