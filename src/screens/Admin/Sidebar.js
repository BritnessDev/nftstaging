import React from "react"
import { Layout, Drawer } from "antd"
import "./styles/sidebar.css"

const Sidebar = ({ menu }) => {
  return (
    <Layout.Sider className="sidebar" collapsedWidth={0} trigger={null}>
      {menu}
    </Layout.Sider>
  )
}

export default Sidebar
