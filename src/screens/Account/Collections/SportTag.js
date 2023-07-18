import React from "react"
import { SportTagStyling } from "./styles/CollectionElements"

const SportTag = ({ click, name }) => {
  return <SportTagStyling onClick={click}>{name}</SportTagStyling>
}

export default SportTag
