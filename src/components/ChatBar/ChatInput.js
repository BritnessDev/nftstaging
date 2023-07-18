import React, { useState } from "react"
import { BiSend } from "react-icons/bi"

import { InputBarContainer, MessageInput } from "./styles"

const ChatInput = ({
  endOfMessagesRef,
  showMessages,
  showMessagesToTrue,
  receiver,
  handleSendMessage,
  newtext,
  handleChangeText,
}) => {
  const sendMessage = (e) => {
    e.preventDefault()

    if (newtext.length <= 0) return
    handleSendMessage(e)
  }
  return (
    <div style={{ height: "35px" }}>
      <InputBarContainer
        style={{ borderWidth: 0, borderRadius: 0 }}
        onSubmit={sendMessage}
      >
        <MessageInput
          value={newtext}
          onChange={(e) => handleChangeText(e.target.value)}
          onFocus={() => showMessagesToTrue(showMessages)}
          type={"text"}
        />
        <BiSend onClick={sendMessage} size={20} />
      </InputBarContainer>
    </div>
  )
}

export default ChatInput
