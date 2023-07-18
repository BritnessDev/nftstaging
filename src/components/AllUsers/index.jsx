import React, { useState, useEffect } from "react"
import { useMoralisCloudFunction } from "react-moralis"
import { User, UsersContainer } from "./styles"

function AllUsers() {
  const { data } = useMoralisCloudFunction("getUsers")
  const [users, setUsers] = useState([])
  useEffect(() => {
    if (data) {
      let arr = []
      data.forEach((elem, idx) => {
        arr.push(elem.attributes)
      })
      setUsers(arr)
    }
  }, [data])

  return (
    <UsersContainer>
      {users.map((user, idx) => (
        <User key={idx}>
          <p style={{ color: "white" }}>{user.username}</p>
        </User>
      ))}
      {users.map((user, idx) => (
        <User key={idx}>
          <p style={{ color: "white" }}>{user.username}</p>
        </User>
      ))}
      {users.map((user, idx) => (
        <User key={idx}>
          <p style={{ color: "white" }}>{user.username}</p>
        </User>
      ))}
    </UsersContainer>
  )
}

export default AllUsers
