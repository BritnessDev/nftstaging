import { useEffect, useMemo, useState, useRef, Fragment } from "react"
import {
  useMoralis,
  useMoralisQuery,
  useMoralisCloudFunction,
} from "react-moralis"
import { AiOutlineClose } from "react-icons/ai"
import Select from "react-select"
import ChatInput from "./ChatInput"
import {
  ChatIcon,
  MessageContainer,
  MessageHeader,
  MessageBodyWrapper,
  YourMessage,
  OtherMessage,
} from "./styles"

const ChatBar = () => {
  const { data } = useMoralisCloudFunction("getUsers")
  const { user, Moralis } = useMoralis()
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])
  const [receiver, setReceiver] = useState({})

  const [inputValue, setInputValue] = useState(false)
  const [newtext, seTnewtext] = useState("")

  const {
    data: messagesData,
    isLoading,
    error,
  } = useMoralisQuery("Messages", (query) => query.ascending("createdAt"), [], {
    live: true,
  })

  useEffect(() => {
    if (data) {
      let arr = []
      data.forEach((elem, idx) => {
        if (elem.attributes.ethAddress && user?.attributes.ethAddress !== elem.attributes.ethAddress) {
          arr.push({
            value: elem.id,
            label: elem.attributes.username,
            attributes: elem.attributes,
          })
        }
      })
      setUsers(arr)
    }
  }, [data, user])

  useMemo(() => {
    let arr = []
    messagesData.map((message) => {
      if (
        (message?.attributes.ethAddress === user?.attributes?.ethAddress &&
          message?.attributes.receiver === receiver?.ethAddress) ||
        (message?.attributes.ethAddress === receiver?.ethAddress &&
          message?.attributes.receiver === user?.attributes?.ethAddress)
      ) {
        arr.push(message?.attributes)
      }
    })
    setMessages(arr)
  }, [user, receiver, messagesData])

  const endOfMessagesRef = useRef(null)
  const [showMessages, seTshowMessages] = useState(false)
  const showMessagesToTrue = (show) => {
    seTshowMessages(!show)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newtext.length <= 0) return
    const Messages = Moralis.Object.extend("Messages")
    const messages = new Messages()
    messages
      .save({
        message: newtext,
        username: user?.getUsername(),
        ethAddress: user?.get("ethAddress"),
        receiver: receiver?.ethAddress,
      })
      .then(() => {
        seTnewtext("")
        // endOfMessageRef?.current?.scrollIntoView({ behavior: "smooth" })
      })
      .catch((err) => console.log(err))
  }
  return (
    <Fragment>
      <ChatIcon onClick={() => setInputValue(true)} size={50} />

      {inputValue && (
        <MessageContainer>
          <MessageHeader>
            <p style={{ fontWeight: "bold" }}>Your Chat with</p>
            <AiOutlineClose onClick={() => setInputValue(false)} size={20} />
          </MessageHeader>
          <Select
            options={users}
            onChange={(e) => setReceiver(e?.attributes)}
          />
          <hr style={{ marginTop: 10, marginBottom: 10 }} />
          <MessageBodyWrapper>
            {messages.map((message, idx) => (
              message.ethAddress === user.attributes.ethAddress ? (
                <YourMessage key={idx}>{message.message}</YourMessage>
              ) : (
                <OtherMessage key={idx}>{message.message}</OtherMessage>
              )
            ))}
          </MessageBodyWrapper>
          <ChatInput
            newtext={newtext}
            receiver={receiver}
            showMessages={showMessages}
            showMessagesToTrue={showMessagesToTrue}
            endOfMessagesRef={endOfMessagesRef}
            handleSendMessage={handleSendMessage}
            handleChangeText={seTnewtext}
          />
        </MessageContainer>
      )}
    </Fragment>
  )
}

export default ChatBar
