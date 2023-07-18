import React from "react"
import {
  StatListLiContainer,
  StatListLiHeader,
  StatListNum,
} from "./styles/MyTeamsPageStyling"

const MyStatLi = ({ field, value }) => {
  return (
    <StatListLiContainer>
      <StatListLiHeader>{field}</StatListLiHeader>
      <StatListNum>{value}</StatListNum>
    </StatListLiContainer>
  )
}

export default MyStatLi
