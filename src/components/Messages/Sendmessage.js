import React, { useState } from "react"
import { ByMoralis, useMoralisQuery, useMoralis } from "react-moralis"
import { BiSend } from "react-icons/bi"
import { InputBarContainer, FormInput } from "./styles"

const Sendmessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis()
  const [message, seTmessage] = useState()
  const sendMessage = (e) => {
    e.preventDefault()
    if (!message) {
      return
    }
    const Messages = Moralis.Object.extend("Messages")
    const messages = new Messages()
    messages
      .save({
        message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          console.log("message: ", message)
        },
        (error) => {
          console.log("error: ", error)
        },
      )
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" })
    seTmessage("")
  }
  return (
    <div style={{ display: "flex", flexDirection: "row", height: "30px" }}>
      <InputBarContainer
        style={{
          width: "80%",
          backgroundColor: "orange",
          borderWidth: 0,
          borderRadius: 0,
        }}
        onSubmit={sendMessage}
      >
        <input
          value={message}
          onChange={(e) => seTmessage(e.target.value)}
          style={{
            width: "100%",
            background: "grey",
            color: "white",
            borderRadius: 10,
          }}
          type={"text"}
        />
        <BiSend onClick={sendMessage} size={20} />
      </InputBarContainer>
      <button
        onClick={sendMessage}
        style={{ marginLeft: 10, fontWeight: "bold", color: "pink" }}
      >
        Send
      </button>
    </div>
  )
}
export default Sendmessage
