import React from "react"
import { SidebarOpacity, SidebarContent } from "./styles/SidebarStyling"

export const Sidebar = ({ openSidebar, children }) => {
  return (
    <>
      {openSidebar && <SidebarOpacity />}
      <SidebarContent openSidebar={openSidebar}>
        {children}
      </SidebarContent>
    </>
  )
}
