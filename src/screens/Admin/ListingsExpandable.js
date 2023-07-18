import React from "react"
import { Collapse, Table } from "antd"
import "./styles/historyExpandable.css"
import { MainContainer, TableButton } from "./styles/ListingsExpandableStyles"
import { OuterContainer } from "./styles/HistoryExpandableStyles"
import ArrowUp from "../../images/nft-profile/arrow-up.png"

const tableData = [
  {
    key: "1",
    unitPrice: "0.011",
    usdUnit: "$28.32",
    quantity: "1",
    Expiration: "3 months",
    from: "LauraMarieGeissfer",
  },
  {
    key: "2",
    unitPrice: "0.011",
    usdUnit: "$28.32",
    quantity: "1",
    Expiration: "3 months",
    from: "LauraMarieGeissfer",
  },
  {
    key: "3",
    unitPrice: "0.011",
    usdUnit: "$28.32",
    quantity: "1",
    Expiration: "3 months",
    from: "LauraMarieGeissfer",
  },
  {
    key: "4",
    unitPrice: "0.011",
    usdUnit: "$28.32",
    quantity: "1",
    Expiration: "3 months",
    from: "LauraMarieGeissfer",
  },
  {
    key: "5",
    unitPrice: "0.011",
    usdUnit: "$28.32",
    quantity: "1",
    Expiration: "3 months",
    from: "LauraMarieGeissfer",
  },
]

const columns = [
  {
    title: "Unit Price",
    dataIndex: "unitPrice",
    key: "unitPrice",
  },
  {
    title: "USD Price",
    dataIndex: "usdUnit",
    key: "usdUnit",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Expiration",
    dataIndex: "Expiration",
    key: "Expiration",
  },
  {
    title: "From",
    dataIndex: "from",
    key: "from",
  },
  {
    title: "",
    key: "action",
    render: () => <TableButton>BUY</TableButton>,
  },
]

const arrowUpIcon = (panelProps) => {
  const { isActive } = panelProps;
  return (
    <img
      style={{
        color: isActive ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.45)",
        transform: isActive ? "rotate(180deg)" : "",
        top: isActive ? "33%" : "",
      }}
      src={ArrowUp}
      alt="no ArrowUp"
    />
  )
}

export const ListingsExpandable = () => {
  const { Panel } = Collapse
  return (
    <OuterContainer>
      <Collapse defaultActiveKey={["0"]} expandIcon={arrowUpIcon} accordion expandIconPosition="end">
        <Panel header="LISTINGS" key="1" className="historyExpandable">
          <MainContainer>
            <Table
              dataSource={tableData}
              columns={columns}
              scroll={true}
              sticky={true}
              pagination={false}
            />
          </MainContainer>
        </Panel>
      </Collapse>
    </OuterContainer>
  )
}
