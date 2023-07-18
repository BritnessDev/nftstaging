import React from "react"
import {
  CardContainer,
  CardDescription,
  CardTimestamp,
  CardTitle,
  CardTitleBadge,
  CardTitleContainer,
} from "./styles/CardStyling"

export const NotificationCard = ({ title, badge, description, timestamp }) => {
  return (
    <CardContainer>
      <CardTitleContainer>
        <CardTitle>{title}</CardTitle>
        <CardTitleBadge badge={badge}>{badge}</CardTitleBadge>
        <CardTimestamp>{timestamp}</CardTimestamp>
      </CardTitleContainer>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  )
}
