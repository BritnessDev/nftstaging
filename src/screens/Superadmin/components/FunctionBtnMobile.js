import { FileOutlined } from "@ant-design/icons"
import React from "react"
import { Link } from "react-router-dom"
import { MainContainer, Title } from "../styles/FunctionBtnMobileStyling"

export const FunctionBtnMobile = ({ text, icon, link, onClick }) => {
  return (
    <MainContainer onClick={onClick}>
      {icon}
      {link ? (
        <Link to={link}>
          <Title>{text}</Title>
        </Link>
      ) : (
        <Title>{text}</Title>
      )}
    </MainContainer>
  )
}
