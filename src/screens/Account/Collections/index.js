import React, { useState } from "react"
import Cards from "./Cards"
import CollectionHeader from "./CollectionHeader"
import { CollectionPage } from "./styles/CollectionElements"

const CollectionNftCards = () => {
  const [filter, setFilter] = useState("All")
  const changeFilter = (value) => {
    setFilter(value)
  }
  return (
    <CollectionPage>
      <CollectionHeader filter={changeFilter} />
      <Cards sportType={filter} />
    </CollectionPage>
  )
}

export default CollectionNftCards
