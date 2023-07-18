import React, { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
import { NotificationCard } from "./NotificationCard"
import { CloseOutlined } from "@ant-design/icons"
import {
  CloseButton,
  DateText,
  NotificationContainer,
  NotificationText,
  SeachInput,
  SearchBar,
  SearchInputIcon,
  SidebarContainer,
  SidebarTitle,
  TitleButton,
  TitleContainer,
  TotalNotificationsText,
} from "./styles/SidebarStyling"

const Events = ({ notification, closeSidebar }) => {
  const { Moralis, user } = useMoralis()
  const [date, setDate] = useState("")
  const [unReadNum, setUnReadNum] = useState(0)
  const [unReadIds, setUnReadIds] = useState([])
  useEffect(() => {
    // set Date
    let unRead = 0
    let unReadMsgId = []
    const d = new Date(Date.now())
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    setDate(`${days[d.getDay()]} · ${d.getDate()} ${months[d.getMonth()]}`)
    // set UnRead Message Number and Ids
    notification.forEach((item) => {
      if (!item.attributes.users[user?.id]) {
        unReadMsgId.push(item.id)
        unRead++
      }
    })
    setUnReadNum(unRead)
    setUnReadIds(unReadMsgId)
  }, [notification, user?.id])
  const close = () => {
    closeSidebar()
    Moralis.Cloud.run("removeReader", { msgIds: unReadIds, userId: user?.id })
  }
  return (
    <SidebarContainer>
      {/* Title */}
      <TitleContainer>
        <SidebarTitle>Events</SidebarTitle>
        <TitleButton>read all</TitleButton>
      </TitleContainer>

      {/* Search Input */}
      <SearchBar>
        <SearchInputIcon src="/search.png" />
        <SeachInput placeholder="Find a notice" />
      </SearchBar>

      {/* Notification */}
      <NotificationContainer>
        <NotificationText>{unReadNum} new notice</NotificationText>
        <TotalNotificationsText>
          Total notifications {notification.length - unReadNum}
        </TotalNotificationsText>
      </NotificationContainer>

      {/* Date */}
      <DateText>{date}</DateText>

      {/* Cards */}
      {notification
        .sort((a, b) => {
          return b.attributes.createdAt - a.attributes.createdAt
        })
        .map((item, index) => (
          <NotificationCard
            key={index}
            title={item.attributes.title}
            description={item.attributes.description}
            badge={item.attributes.users[user?.id] ? "Read" : "New"}
            timestamp={`${item.attributes.createdAt.getHours()}:${item.attributes.createdAt.getMinutes()}`}
          />
        ))}

      <CloseButton onClick={close}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}

export default Events
