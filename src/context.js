import React, { createContext, useContext, useState } from "react"

export const DappContext = createContext()
export const ContextProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [sidebarContent, setSidebarContent] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [filtersChecked, setFiltersChecked] = useState({
    sportsman: false,
    boosters: false,
    additionally: false,
    listed: false,
    notListed: false,
  })
  const [allNftFilteredItems, setAllNftFilteredItems] = useState({
    typeNft: [],
    kindSport: [],
    rarity: [],
    costRange: [0, 0],
  })
  const [flagHeightAuto, setFlagHeightAuto] = useState(false)
  const [flag_offerAuction, setFlagOfferAuction] = useState("offer")

  const onCloseSidebar = () => {
    setOpenSidebar(false)
  }

  const handleFiltersCheckedChange = (e) => {
    setFiltersChecked((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }))
  }

  const handleRemoveFilters = (e) => {
    const name = e.target.closest("span.ant-tag").innerText
    setFiltersChecked((prev) => ({
      ...prev,
      [name]: false,
    }))
  }

  return (
    <DappContext.Provider
      value={{
        openSidebar,
        handleFiltersCheckedChange,
        filtersChecked,
        setOpenSidebar,
        sidebarContent,
        setSidebarContent,
        onCloseSidebar,
        handleRemoveFilters,
        flagHeightAuto,
        setFlagHeightAuto,
        allNftFilteredItems,
        setAllNftFilteredItems,
        flag_offerAuction,
        setFlagOfferAuction,
        openModal,
        setOpenModal,
        modalContent,
        setModalContent,
      }}
    >
      {children}
    </DappContext.Provider>
  )
}
