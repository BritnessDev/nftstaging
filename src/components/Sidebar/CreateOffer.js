import React, { useState, useContext } from "react"
import { DappContext } from "context"
import { DatePicker, TimePicker, Modal } from "antd"
import { ExclamationCircleOutlined, CloseOutlined } from "@ant-design/icons"
import {
  Button,
  ButtonContainer,
  DatepickerContainer,
  DatepickerInnerContainer,
  Input,
  InputLabel,
  OfferCardsContainer,
  OutlinedButton,
} from "./styles/CreateOfferStyling"
import {
  CloseButton,
  SidebarContainer,
  SidebarTitle,
} from "./styles/SidebarStyling"
import { AddOfferCard } from "./AddOfferCard"
import { Loading } from "notiflix"

export const CreateOffer = ({ moralis, closeSidebar }) => {
  const [values, setValue] = useState({
    name: "",
    endingDate: "",
    endingTime: "",
    price: "",
    discount: "",
  })
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } =
    useContext(DappContext)
  const [steps, setSteps] = useState(0)

  const handleChange = (e) => {
    const name = e.target.name
    setValue({ ...values, [name]: e.target.value })
  }

  const handleDate = (value) => {
    if (value !== null) {
      const date = value?._d
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      setValue({ ...values, endingDate: `${year}/${month}/${day}` })
    }
  }

  const handleTime = (value) => {
    if (value !== null) {
      const time = value?._d
      const hour = time.getHours()
      const minute = time.getMinutes()
      const second = time.getSeconds()
      setValue({ ...values, endingTime: `${hour}:${minute}:${second}` })
    }
  }

  const handleCloseSidebar = () => {
    closeSidebar()
    setSteps(0)
  }

  const createOffer = (e) => {
    e.preventDefault()
    Loading.standard()
    const data = {
      name: values.name,
      endAt: `${values.endingDate} ${values.endingTime}`,
      fullPrice: values.price,
      discount: values.discount,
      ERC721: [],
      ERC1155: [],
    }
    moralis?.fn.Cloud.run("createOffer", data).then(() => {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: "A offer created successfully",
      })
      closeSidebar()
      Loading.remove()
    })
  }

  const dateFormat = "DD/MM/YYYY"

  return (
    <SidebarContainer>
      {steps === 0 && (
        <>
          <SidebarTitle>create offer</SidebarTitle>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={handleChange}
            name="name"
            value={values.name}
            placeholder="Danise Lando"
          />
          <DatepickerContainer>
            <DatepickerInnerContainer>
              <InputLabel>Date to end</InputLabel>
              <DatePicker
                name="endingDate"
                onChange={handleDate}
                format={dateFormat}
                bordered={false}
                placeholder="__.__.____"
              />
            </DatepickerInnerContainer>
            <DatepickerInnerContainer>
              <InputLabel>Time to end</InputLabel>
              <TimePicker
                onChange={handleTime}
                name="endingTime"
                bordered={false}
                placeholder="__:__"
              />
            </DatepickerInnerContainer>
          </DatepickerContainer>
          <InputLabel>Full Price</InputLabel>
          <Input
            onChange={handleChange}
            name="price"
            value={values.price}
            placeholder="500"
          />
          <InputLabel>Discount</InputLabel>
          <Input
            onChange={handleChange}
            name="discount"
            value={values.discount}
            placeholder="0%"
          />
          <ButtonContainer>
            <OutlinedButton onClick={() => setSteps(0)}>Back</OutlinedButton>
            <Button onClick={createOffer}>Create</Button>
          </ButtonContainer>
        </>
      )}

      {steps === 1 && (
        <>
          <SidebarTitle>add in offer</SidebarTitle>
          <OfferCardsContainer>
            <AddOfferCard />
            <AddOfferCard />
            <AddOfferCard />
          </OfferCardsContainer>
        </>
      )}
      <CloseButton onClick={handleCloseSidebar}><CloseOutlined /></CloseButton>
    </SidebarContainer>
  )
}
