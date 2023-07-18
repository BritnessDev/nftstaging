import DeliveredProcedureOutlined from '../images/DeliveredProcedureOutlined.svg'
import ExportOutlined from '../images/ExportOutlined.svg'
import IssuesCloseOutlined from '../images/IssuesCloseOutlined.svg'
import StopOutlined from '../images/StopOutlined.svg'
import RadiusSettingOutlined from '../images/RadiusSettingOutlined.svg'

import DocumentIcon from "../images/document-icon.svg"

export const authAdminHeaderList = [
  {
    title: "MARKETPLACE",
    link: "nftMarket",
    icon: DocumentIcon
  },
  {
    title: "TRANSFERS",
    link: "transfers",
    icon: null
  },
  {
    title: "MY ACCOUNT",
    link: "myaccount",
    icon: null
  },
  {
    title: "COLLECTION",
    link: "collection",
    icon: null
  },
  {
    title: "SWAP",
    link: "http://swap.yourlifegames.com/?token=",
    icon: null
  },
  {
    title: "TEAMS",
    link: "teams",
    icon: null
  },
  {
    title: "CHAT",
    link: "chat",
    icon: null
  },
  {
    title: "GAME SETTINGS",
    link: "nftMarket",
    icon: null
  },
]

export const authUserHeaderList = [
  {
    title: "MARKETPLACE",
    link: "nftMarket",
    icon: DocumentIcon
  },
  {
    title: "COACH'S ROOM",
    link: "myaccount",
    icon: null
  },
  {
    title: "GAME",
    link: "game",
    icon: null
  },
  {
    title: "TOURNAMENTS",
    link: "tournaments",
    icon: null
  },
  {
    title: "TEAMS",
    link: "teams",
    icon: null
  },
  {
    title: "COLLECTION",
    link: "collection",
    icon: null
  },
  {
    title: "TRANSFERS",
    link: "transfers",
    icon: null
  },
  {
    title: "FRIENDS",
    link: "nftMarket",
    icon: null
  },
]

export const headerList = [
  {
    title: "MARKETPLACE",
    link: "nftMarket",
    icon: DocumentIcon
  },
  {
    title: "SWAP",
    link: "http://swap.yourlifegames.com/?token=",
    icon: null
  },
]

export const contractLinks = [
  {
    title: "YLT_CONTRACT_ADDRESS",
    link: process.env.REACT_APP_YLT_CONTRACT_ADDRESS,
  },
  {
    title: "YLNFT1155_CONTRACT_ADDRESS",
    link: process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS,
  },
  {
    title: "YLNFT721_CONTRACT_ADDRESS",
    link: process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
  },
  {
    title: "YLPROXY_CONTRACT_ADDRESS",
    link: process.env.REACT_APP_YLPROXY_CONTRACT_ADDRESS,
  },
  {
    title: "YLNFT1155MARKETPLACE_CONTRACT_ADDRESS",
    link: process.env.REACT_APP_YLNFT1155MARKETPLACE_CONTRACT_ADDRESS,
  },
  {
    title: "YLMARKETPLACE_CONTRACT_ADDRESS1",
    link: process.env.REACT_APP_YLMARKETPLACE_CONTRACT_ADDRESS1,
  },
  {
    title: "YLMARKETPLACE_CONTRACT_ADDRESS2",
    link: process.env.REACT_APP_YLMARKETPLACE_CONTRACT_ADDRESS2,
  },
  {
    title: "YLAUCTION_CONTRACT_ADDRESS",
    link: process.env.REACT_APP_YLAUCTION_CONTRACT_ADDRESS,
  },
  {
    title: "YLVAULT_CONTRACT_ADDRESS ",
    link: process.env.REACT_APP_YLVAULT_CONTRACT_ADDRESS,
  },
  {
    title: "YLCONTEST_CONTRACT_ADDRESS ",
    link: process.env.REACT_APP_YLCONTEST_CONTRACT_ADDRESS,
  },
]

export const actionsList = [
  {
    id: 1,
    icon: <img src={DeliveredProcedureOutlined} alt="DeliveredProcedureOutlined"></img>,
    title: "ACCESS MINT",
  },
  {
    id: 2,
    icon: <img src={ExportOutlined} alt="ExportOutlined"></img>,
    title: "ACCESS TRANSFER",
  },
  {
    id: 3,
    icon: <img src={IssuesCloseOutlined} alt="IssuesCloseOutlined"></img>,
    title: "ACCESS PAUSE",
  },
  {
    id: 4,
    icon: <img src={RadiusSettingOutlined} alt="RadiusSettingOutlined"></img>,
  },
  {
    id: 5,
    icon: <img src={StopOutlined} alt="StopOutlined"></img>,
    title: "ACCESS BURN",
  },
]