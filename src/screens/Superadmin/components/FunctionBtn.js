import React from "react"
import { Link } from "react-router-dom"
import { MainContainer, Title } from "../styles/FunctionBtnStyling"

export const FunctionBtn = ({ text, icon, link, onClick }) => {
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
