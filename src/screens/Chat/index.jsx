import React, { useState, useEffect, useMemo, useCallback, useRef } from "react"
import { useMoralis, useMoralisQuery } from "react-moralis"
import {
  BoxTitle,
  ChatContainer,
  ChatForm,
  TextForm,
  AttachFilesContainer,
  SuffixContainer,
  EmojiContainer,
  ChatLeftContainer,
  ChatRightContainer,
  Chats,
  EmptyRightContainer,
  OtherMessage,
  SearchInput,
  User,
  UserContainer,
  YourMessage,
  UserMsgContainer,
  AttachFileContainer,
} from "./styles"
import { truncate } from "utils/formatAddress"
import profileImage from "../../images/avatar.png"
import { Avatar, Input, Button } from "antd"
import { SmileOutlined, PaperClipOutlined } from "@ant-design/icons"
import { useMedia } from "hooks/useMedia"
import EmojiPicker from "emoji-picker-react"
import { FileOutlined } from "@ant-design/icons"
import UploadContainer from "./Upload"

const Chat = ({ moralis }) => {
  const sendBtn = useRef()
  const { user, Moralis } = useMoralis()
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [receiver, setReceiver] = useState({})
  const [onceLoad, setOnceLoad] = useState(true)
  const [searchKey, setSearchKey] = useState("")
  const messageRef = useRef(null)
  const [emotiIcon, setEmotiIcon] = useState(false)
  const [fileList, setFileList] = useState([])
  const uploadRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const { data: messagesData } = useMoralisQuery(
    "Messages",
    (query) => query.ascending("createdAt"),
    [],
    {
      live: true,
    },
  )

  function formatFileSize(bytes) {
    const units = ["B", "KB", "MB", "GB", "TB"]
    let size = bytes
    let unitIndex = 0
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024
      unitIndex++
    }
    return `${size.toFixed(2)} ${units[unitIndex]}`
  }

  const getImageContainer = (url) => {
    return `<a href="${url}" style="width:100px;height:100px;border-radius:5px;background-size:100% 100%;background-image:url(${url});position:relative;padding:25px 10px;display:flex;flex-direction:column;justify-content:space-between;"></a>`
  }

  const getFileContainer = (url, name, size) => {
    return `<div style="width:100px;height:100px;border-radius:5px;background-size:100% 100%;position:relative;padding:15px 10px;display:flex;flex-direction:column;justify-content:space-between;border: 1px solid #4b5264;"><img alt="https://ipfs.moralis.io:2053/ipfs/QmXAz8BCeKgaTqnhBG5dJSkDNV514JNgyKtrsjfW3XXrLj" style="width:15px;" src="https://ipfs.moralis.io:2053/ipfs/QmXAz8BCeKgaTqnhBG5dJSkDNV514JNgyKtrsjfW3XXrLj"></img><a href="${url}" style="color:rgb(43, 44, 51);white-space: pre;font-size: 15px;">${summarizeName(
      name,
    )}</a><span style="color:rgb(138, 141, 145);font-size: 12px;">${formatFileSize(
      size,
    )}</span></div>`
  }

  const onClickSmileHandler = () => {
    setEmotiIcon(!emotiIcon)
  }

  const onEmojiClickHandler = (emojiData) => {
    setMessage(message + emojiData.emoji)
  }

  const isImage = (file) => {
    return file.type.startsWith("image/")
  }

  function summarizeName(name) {
    if (name.length <= 7) {
      return name
    }
    return `${name.substring(0, 7)}...`
  }

  const isMobile = useMedia("(max-width: 640px)")

  const fetchUsers = useCallback(async () => {
    let result
    const users = user?.attributes.isSuperAdmin
      ? await moralis?.fn.Cloud.run("getAdmin")
      : await moralis?.fn.Cloud.run("getUsers")
    if (searchKey === "")
      result = users.filter((item) => {
        return (
          item.attributes.ethAddress &&
          item.attributes.ethAddress !== user?.attributes.ethAddress
        )
      })
    else
      result = users.filter((item) => {
        return (
          item.attributes.ethAddress &&
          item.attributes.nickname &&
          (item.attributes.ethAddress === searchKey.toLowerCase() ||
            item.attributes.nickname.search(searchKey) !== -1) &&
          item.attributes.ethAddress !== user?.attributes.ethAddress
        )
      })
    setUsers(result)
  }, [
    moralis,
    searchKey,
    user?.attributes.ethAddress,
    user?.attributes.isSuperAdmin,
  ])

  useEffect(() => {
    if (moralis && onceLoad) {
      fetchUsers()
      setOnceLoad(false)
    }
  }, [moralis, onceLoad, fetchUsers])

  useEffect(() => {
    if (moralis) fetchUsers()
  }, [searchKey, fetchUsers, moralis])

  useMemo(() => {
    let arr = []
    messagesData.map((message) => {
      if (
        (message?.attributes.ethAddress === user?.attributes.ethAddress &&
          message?.attributes.receiver === receiver?.ethAddress) ||
        (message?.attributes.ethAddress === receiver?.ethAddress &&
          message?.attributes.receiver === user?.attributes.ethAddress)
      ) {
        arr.push(message?.attributes)
      }
    })
    setMessages(arr)
  }, [user, receiver, messagesData])
  const sendMessage = async (e) => {
    e.preventDefault()
    if (message.length <= 0 && fileList.length <= 0) return
    let messageHTML = ""
    setLoading(true)
    for (const file of fileList) {
      const fileData = new Moralis.File(file.name, file.originFileObj)
      await fileData.saveIPFS()
      messageHTML += isImage(file)
        ? getImageContainer(fileData._ipfs)
        : getFileContainer(fileData._ipfs, file.name, file.size)
    }
    setLoading(false)
    messageHTML += message
    messageHTML = messageHTML.replace("\n", "<br />")
    const Messages = Moralis.Object.extend("Messages")
    const messages = new Messages()
    messages
      .save({
        message: messageHTML,
        username: user?.getUsername(),
        ethAddress: user?.get("ethAddress"),
        receiver: receiver?.ethAddress,
      })
      .then(() => {
        setMessage("")
        setFileList([])
      })
      .catch((err) => console.log(err))
  }

  const handleSearch = (e) => {
    if (e.keyCode === 13 || e.target.value === "") {
      setSearchKey(e.target.value)
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.shiftKey) {
      return
    }
    if (e.keyCode === 13) {
      e.preventDefault()
      sendBtn.current.click()
    }
  }

  return (
    <>
      <ChatContainer>
        <ChatLeftContainer>
          {/* //! Insert value and onChange here depending on the search input */}
          <SearchInput onKeyUp={handleSearch} placeholder="Search" />
          {users.map((userData, idx) => {
            const user = userData.attributes
            return (
              <UserContainer
                onClick={() => {
                  setReceiver(user)
                }}
                style={{ justifyContent: "flex-start" }}
                key={idx}
                isFocused={receiver?.ethAddress === user.ethAddress}
              >
                <Avatar
                  src={user?.profile_picture || profileImage}
                  style={{
                    width: !isMobile ? "67px" : "60px",
                    height: !isMobile ? "67px" : "60px",
                    minWidth: !isMobile ? "67px" : "60px",
                    minHeight: !isMobile ? "67px" : "60px",
                  }}
                />
                <UserMsgContainer>
                  <User>
                    {user.nickname
                      ? user.nickname
                      : user.accounts
                      ? truncate(user?.accounts[0])
                      : user.username}
                  </User>
                  <p>"How to height...How to height...How to height...</p>
                </UserMsgContainer>
              </UserContainer>
            )
          })}
        </ChatLeftContainer>
        {receiver?.username ? (
          <>
            <ChatRightContainer>
              <Chats>
                {messages.map((message, idx) =>
                  message.ethAddress === user?.attributes.ethAddress ? (
                    <YourMessage
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: message.message }}
                    ></YourMessage>
                  ) : (
                    <OtherMessage
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: message.message }}
                    ></OtherMessage>
                  ),
                )}
              </Chats>
              <ChatForm>
                <AttachFilesContainer>
                  <UploadContainer
                    loading={loading}
                    fileList={fileList}
                    setFileList={setFileList}
                    uploadRef={uploadRef}
                  />
                </AttachFilesContainer>
                <TextForm>
                  <Input.TextArea
                    placeholder="Write to us"
                    size="large"
                    value={message}
                    className="noBorder"
                    onChange={(e) => {
                      setMessage(e.target.value)
                    }}
                    ref={messageRef}
                    onKeyDown={handleKeyDown}
                  />
                  <SuffixContainer>
                    <Button
                      className="noBorder"
                      shape="circle"
                      icon={<SmileOutlined width={20} height={20} />}
                      onClick={onClickSmileHandler}
                    />
                    <Button
                      className="noBorder"
                      shape="circle"
                      icon={<PaperClipOutlined width={20} height={20} />}
                      onClick={() => {
                        uploadRef.current.click()
                      }}
                    />
                    <Button
                      shape="circle"
                      onClick={sendMessage}
                      ref={sendBtn}
                      icon={
                        <img
                          src="/assets/arrowup.svg"
                          alt="assets/arrowup.svg"
                        />
                      }
                      className="noBorder"
                    />
                  </SuffixContainer>
                </TextForm>
              </ChatForm>
              <EmojiContainer isFocused={emotiIcon}>
                {
                  <EmojiPicker
                    onEmojiClick={onEmojiClickHandler}
                    autoFocusSearch={true}
                  />
                }
              </EmojiContainer>
            </ChatRightContainer>
          </>
        ) : (
          <EmptyRightContainer>
            <BoxTitle>Choose who you would like to write to</BoxTitle>
          </EmptyRightContainer>
        )}
      </ChatContainer>
    </>
  )
}

export default Chat
