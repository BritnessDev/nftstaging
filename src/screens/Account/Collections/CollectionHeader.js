import React from "react"
import { sports } from "utils/dummyData"
import SportTag from "./SportTag"
import {
  ColleactionHeaderTitle,
  CollectionContainer,
  SportContainer,
  SportTagList,
} from "./styles/CollectionElements"

const CollectionHeader = ({ filter }) => {
  const changeFilter = (e) => {
    let str = e.target.innerText.toLowerCase()
    const filterText = str.charAt(0).toUpperCase() + str.slice(1)
    filter(filterText)
  }
  return (
    <CollectionContainer>
      <SportContainer>
        <ColleactionHeaderTitle>COLLECTION</ColleactionHeaderTitle>
        <SportTagList>
          {sports.map((sport) => (
            <SportTag name={sport.value} key={sport.id} click={changeFilter} />
          ))}
        </SportTagList>
      </SportContainer>
    </CollectionContainer>
  )
}

export default CollectionHeader
