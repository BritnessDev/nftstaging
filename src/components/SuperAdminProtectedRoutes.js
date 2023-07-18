import { DappContext } from "context"
import React from "react"
import { useContext } from "react"

export const SuperAdminProtectedRoutes = ({ children }) => {
  const { isSuperAdmin } = useContext(DappContext)

  return (
    <>
      {isSuperAdmin ? (
        <>{children}</>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>You're not a super admin user</h1>
        </div>
      )}
    </>
  )
}
