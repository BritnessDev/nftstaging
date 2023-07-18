import { Collapse, Select, Table } from "antd"
import React from "react"
import {
  CardTitle,
  FiltersSelect,
  InnerContainer,
  MainContainer,
  TableContainer,
} from "./styles/ItemActivityStyles"

const children = [
  <Select.Option key="SALES">SALES</Select.Option>,
  <Select.Option key="TRANSFERS">TRANSFERS</Select.Option>,
]

const data = [
  {
    key: "1",
    event: "Transfers",
    unitPrice: "",
    quantity: "1",
    from: "LauraMarieGeissFer",
    to: "DuaneKing",
    date: "3 months ago",
  },
  {
    key: "2",
    event: "Sales",
    unitPrice: "0.011",
    quantity: "1",
    from: "LauraMarieGeissFer",
    to: "DuaneKing",
    date: "3 months ago",
  },
  {
    key: "3",
    event: "Transfers",
    unitPrice: "",
    quantity: "1",
    from: "LauraMarieGeissFer",
    to: "DuaneKing",
    date: "3 months ago",
  },
  {
    key: "4",
    event: "Sales",
    unitPrice: "0.011",
    quantity: "1",
    from: "LauraMarieGeissFer",
    to: "DuaneKing",
    date: "3 months ago",
  },
  {
    key: "5",
    event: "Transfers",
    unitPrice: "",
    quantity: "1",
    from: "LauraMarieGeissFer",
    to: "DuaneKing",
    date: "3 months ago",
  },
  {
    key: "6",
    event: "Sales",
    unitPrice: "0.011",
    quantity: "1",
    from: "LauraMarieGeissFer",
    to: "DuaneKing",
    date: "3 months ago",
  },
  {
    key: "7",
    event: "Transfers",
    unitPrice: "",
    quantity: "1",
    from: "LauraMarieGeissFer",
    to: "DuaneKing",
    date: "3 months ago",
  },
  {
    key: "8",
    event: "Sales",
    unitPrice: "0.011",
    quantity: "1",
    from: "LauraMarieGeissFer",
    to: "DuaneKing",
    date: "3 months ago",
  },
]

const columns = [
  {
    title: "Event",
    dataIndex: "event",
    key: "event",
  },
  {
    title: "Unit Price",
    dataIndex: "unitPrice",
    key: "unitPrice",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "From",
    dataIndex: "from",
    key: "from",
  },
  {
    title: "To",
    dataIndex: "to",
    key: "to",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
]

const ItemActivity = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <MainContainer>
      <CardTitle>Item Activity</CardTitle>
      <InnerContainer>
        <Select
          mode="tags"
          allowClear
          style={{
            width: "100%",
            backgroundColor: "#f1f2f3",
            borderRadius: "5px",
          }}
          size="large"
          placeholder="FILTERS"
          showArrow={true}
          className="select-item"
          onChange={handleChange}
        >
          {children}
        </Select>

        <TableContainer>
          <Table
            dataSource={data}
            columns={columns}
            scroll={true}
            sticky={true}
            pagination={false}
          />
        </TableContainer>
      </InnerContainer>
    </MainContainer>
  )
}

export default ItemActivity
