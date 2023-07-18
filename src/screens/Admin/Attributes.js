import React, { useState } from "react"
import {
  baseballAttrs,
  basketballAttrs,
  footballAttrs,
  soccerAttrs,
} from "utils/dummyData"
import { AttrsBoxStyling, AttrsGrid } from "./styles/CreateNFTStyles"
import { InputNumber } from "antd"

const Attributes = ({ sport }) => {
  let content = null
  if (sport === "Baseball") {
    content = baseballAttrs
  } else if (sport === "Basketball") {
    content = basketballAttrs
  } else if (sport === "Football") {
    content = footballAttrs
  } else if (sport === "Soccer") {
    content = soccerAttrs
  }

  return (
    <AttrsGrid>
      {content?.map(({ name, id }, idx) => {
        return (
          <AttrsBoxStyling key={id}>
            <p>{name}</p>
            <InputNumber
              type={"number"}
              required
              defaultValue="1"
              min="1"
              max="100"
              bordered={false}
              name={`characteristic${idx + 1}`}
              style={{ textAlign: "center", padding: "0.3rem", width: "100%" }}
            />
          </AttrsBoxStyling>
        )
      })}
    </AttrsGrid>
  )
}

export default Attributes
