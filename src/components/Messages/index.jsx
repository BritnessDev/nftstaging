import React, { Fragment, useRef } from "react"
import { useMoralisQuery, useMoralis } from "react-moralis"
import { BiSearch } from "react-icons/bi"

import Sendmessage from "./Sendmessage"
import Message from "components/Message"
import {
  Heading,
  FormInput,
  InnerContainer,
  SearchBarContainer,
  FiltersIcons,
} from "./styles"

const MINS_DURATION = 45

function Messages() {
  const { user } = useMoralis()
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis()
  const endOfMessagesRef = useRef(null)
  const { data, isLoading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query.ascending("createdAt").greaterThan(
        "createdAt",
        new Date(Date.now() - 1000 * 60 * MINS_DURATION), //dont show greater 15 minites
      ),
    [], //dependencies,
    { live: true },
  )
  return (
    <div
      style={{
        width: "25%",
        //  height: "200px",
        marginLeft: "auto",
        backgroundColor: "blue",
      }}
    >
      <div>
        {isAuthenticated &&
          data.map((message) => <Message key={message.id} message={message} />)}
      </div>
      <Sendmessage endOfMessagesRef={endOfMessagesRef} />
    </div>
  )
}

export default Messages
