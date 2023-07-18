import React from "react"
import { Collapse } from "antd"
import "./styles/historyExpandable.css"
import {
  InnerContainer,
  MainContainer,
  NoOffersText,
} from "./styles/OffersExpandableStyles"
import ArrowUp from "../../images/nft-profile/arrow-up.png"

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

export const OffersExpandable = () => {
  const { Panel } = Collapse
  return (
    <Collapse defaultActiveKey={["0"]} expandIcon={arrowUpIcon} accordion expandIconPosition="end">
      <Panel header="OFFERS" key="1" className="historyExpandable">
        <MainContainer>
          <InnerContainer>
            <NoOffersText>No offers yet</NoOffersText>
          </InnerContainer>
        </MainContainer>
      </Panel>
    </Collapse>
  )
}
