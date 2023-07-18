import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { Collapse, Dropdown, Menu, Space } from "antd"
import {
  ChartContainer,
  DropdownText,
  InnerContainer,
  MainContainer,
  OuterContainer,
  RightSideContainer,
  RightSideText,
  RightSideTitle,
} from "./styles/HistoryExpandableStyles"
import "./styles/historyExpandable.css"
import ArrowUp from "../../images/nft-profile/arrow-up.png"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const options = {
  responsive: true,
  scales: {
    y: {
      min: 0.025,
    },
  },
  plugins: {
    legend: {
      position: "top",
      begin: 0,
    },
  },
}

const menu = (
  <Menu
    items={[
      {
        label: "ALL TIME",
        key: "0",
      },
      {
        label: "Last 3 months",
        key: "1",
      },
      {
        label: "Last 6 months",
        key: "2",
      },
    ]}
  />
)

const labels = [
  "5/23",
  "6/5",
  "6/18",
  "7/1",
  "7/14",
  "8/9",
  "8/22",
  "9/4",
  "9/17",
  "9/30",
]
const data = {
  labels,
  datasets: [
    {
      data: [0.035, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.032, 0.03, 0.03],
      fill: false,
      backgroundColor: "#3985F5",
      borderColor: "#3985F5",
      borderWidth: 1,
      tension: 0.1,
    },
  ],
}

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
  );
};

export const HistoryExpandable = () => {
  const { Panel } = Collapse
  return (
    <OuterContainer>
      <Collapse defaultActiveKey={["0"]} expandIcon={arrowUpIcon} accordion expandIconPosition="end">
        <Panel header="PRICE HISTORY" key="1" className="historyExpandable">
          <MainContainer>
            <InnerContainer>
              <Dropdown overlay={menu} trigger={["click"]} className="dropdown">
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="dropdownSelect">
                    <DropdownText>ALL TIME</DropdownText>
                    <img src={ArrowUp} alt="no arrow left image" style={{transform: "rotate(180deg)"}} />
                  </Space>
                </a>
              </Dropdown>
              <RightSideContainer>
                <RightSideTitle>All time avg.price</RightSideTitle>
                <RightSideText>0.0302</RightSideText>
              </RightSideContainer>
            </InnerContainer>
            <ChartContainer>
              <Line options={options} data={data} />
            </ChartContainer>
          </MainContainer>
        </Panel>
      </Collapse>
    </OuterContainer>
  )
}
