import React, { useContext, useEffect, useState } from "react"
import { Checkbox } from "antd"
import { DappContext } from "context"
import {
  CheckboxLabel,
  CloseButton,
  CustomHr,
  FiltersContainer,
  SidebarContainer,
  SidebarTitle,
  Title,
  TitleContainer,
} from "./styles/SidebarStyling"
import { CloseOutlined } from "@ant-design/icons"

export const FiltersMintedNfts = ({ closeSidebar }) => {
  const { filtersChecked, handleFiltersCheckedChange } = useContext(DappContext)

  return (
    <SidebarContainer>
      <TitleContainer>
        <SidebarTitle>Filters</SidebarTitle>
      </TitleContainer>
      <CustomHr />
      <FiltersContainer>
        <Title>Card Type</Title>
        <CheckboxLabel>
          <Checkbox
            name="sportsman"
            checked={filtersChecked.sportsman}
            onChange={handleFiltersCheckedChange}
          />
          Sportsman
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            name="boosters"
            checked={filtersChecked.boosters}
            onChange={handleFiltersCheckedChange}
          />
          Boosters
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            name="additionally"
            checked={filtersChecked.additionally}
            onChange={handleFiltersCheckedChange}
          />
          Additionally
        </CheckboxLabel>
      </FiltersContainer>
      <CustomHr />
      <FiltersContainer>
        <Title>Card Type</Title>
        <CheckboxLabel>
          <Checkbox
            name="listed"
            checked={filtersChecked.listed}
            onChange={handleFiltersCheckedChange}
          />
          Listed
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            name="notListed"
            che={filtersChecked.notListed}
            onChange={handleFiltersCheckedChange}
          />
          Not Listed
        </CheckboxLabel>
      </FiltersContainer>
      <CloseButton onClick={closeSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
