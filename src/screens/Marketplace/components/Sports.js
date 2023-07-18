import React from "react"
import { FormButton, LeftMenuWidth } from "../styles/SportsStyling"

export const Sports = ({ sports, isOpen, setIsOpen }) => {
  return (
    <LeftMenuWidth>
      <FormButton all onClick={() => setIsOpen(!isOpen)}>
        ALL
      </FormButton>
      {isOpen &&
        sports.map(({ name, id }) => <FormButton key={id}>{name}</FormButton>)}
    </LeftMenuWidth>
  )
}
