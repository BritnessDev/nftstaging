import React from "react"
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

export const LoadingSpin = ({ tip }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  return (
    <Spin indicator={antIcon}
      style={{ height: "100%", width: "100%", paddingTop: "40%", position: "absolute", top: 0, left: 0, background: "rgba(0,0,0,0.2)" }}
      tip={tip} />
  )
}
