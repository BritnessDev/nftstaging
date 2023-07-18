import React from "react"
import { useMoralisQuery, useMoralis } from "react-moralis"

function Message({ message }) {
  const { user } = useMoralis()
  const isUserMessage = message.get("ethAdress") === user.get("ethAddress")

  return (
    <div>
      <div
        style={
          isUserMessage
            ? { backgroundColor: "blue" }
            : { backgroundColor: "red" }
        }
      >
        <p>{message.get("message")}</p>
      </div>
      {/**Timestamp */}
      <p>{message.get("username")}</p>
    </div>
  )
}

export default Message
