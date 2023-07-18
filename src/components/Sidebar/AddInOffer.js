import { AddInOfferCard } from "components/AddInOfferCard"
import { CloseOutlined } from "@ant-design/icons"
import React, { useEffect, useState } from "react"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"

export const AddInOffer = ({ nftItem, moralis, closeSidebar }) => {
  const [onceLoad, setOnceLoad] = useState(false)
  const [options, setOptions] = useState([])
  useEffect(() => {
    if (moralis && !onceLoad) {
      moralis?.fn.Cloud.run("getOffers", { isFullOffer: false }).then(
        (result) => {
          setOptions(result)
        },
      )
    }
    setOnceLoad(true)
  }, [moralis, onceLoad])
  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>Add in Offer</SidebarTitle>
        </TitleContainer>
        {options.length !== 0
          ? options.map((item, index) => (
              <AddInOfferCard
                key={index}
                id={item.id}
                nftItem={nftItem}
                attributes={item.attributes}
                moralis={moralis}
              />
            ))
          : "No Offer Cards"}
      </MainContainer>
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
