import React from "react"
import { Redirect, Route } from "react-router-dom"

export const Protected = ({ children, superAdmin, ...rest }) => {
  console.log(superAdmin, "protected")
  return (
    <Route
      {...rest}
      render={() => {
        return superAdmin === true ? children : <Redirect to="/nftMarket" />
      }}
    />
  )
}
