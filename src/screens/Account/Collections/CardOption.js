import React from "react"
import { CardOptionStyling } from "./styles/CollectionElements"

const CardOption = ({ option, active }) => {
  return <CardOptionStyling active={active}>{option}</CardOptionStyling>
}

export default CardOption
