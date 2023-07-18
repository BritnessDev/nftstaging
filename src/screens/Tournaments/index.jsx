import { Button, Col, Input, Image, Row, Space, Tabs, Typography, Layout, Card, Drawer, Upload } from "antd"
import React, { useState, useEffect, useMemo, useCallback } from "react"
import { useParams, useLocation, useHistory } from "react-router-dom"
import { useMedia } from "hooks/useMedia"
import "../Vaultteam/style.css"
import "./style.css"
import { BackButton, ArrowBtn } from "./components/basic"
import { SearchOutlined } from "@ant-design/icons"
import axios from "axios"
import { Loading } from "notiflix"
import { useMoralisWeb3Api, useMoralis } from "react-moralis"
import LeagueItem from "./components/item"

const TOKEN_ADDRESS = [
    process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
    process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS,
]

const dummy = [
    {
        stage: 0,
        totalprize: 150000,
        opendate: '19 april 2022',
        sport: 'soccer',
        banner: "/Tournaments.png",
        leaguename: "Youth League Champions Tournament",
        totalplace: 120,
        subplace: 40
    },
    {
        stage: 1,
        totalprize: 250000,
        opendate: '19 april 2022',
        sport: 'baseball',
        banner: "/Tournaments_2.png",
        leaguename: "Youth League Champions Tournament",
        totalplace: 110,
        subplace: 50
    }
]

const Tournaments = ({ moralis }) => {
    let inputRef
    const history = useHistory()
    const location = useLocation()
    const Web3Api = useMoralisWeb3Api()
    const { user, isAuthenticated, Moralis, web3 } = useMoralis()
    const isMobile = useMedia("(max-width: 640px)")
    const params = useParams()
    const [open, setOpen] = useState(false)
    const [notifyOpen, setNotifyOpen] = useState("")
    const [loaded, setLoaded] = useState(false)

    const openModal = (a, info) => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Layout className="layout team-detail">
                <Row justify="start">
                    <Col span={24} className="maring-top-30">
                        <BackButton onClick={() => history.goBack()}>Back</BackButton>
                    </Col>
                </Row>
                <Row justify="space-between" align="middle" className="maring-top-20">
                    <Col xs={24} md={10} className="align-center">
                        <Row type="flex" align="middle" justify="start">
                            <h1 className="team-title">Tournaments</h1>
                        </Row>
                    </Col>
                    <Col xs={24} md={10} className="maring-top-20">
                        <div className="serach-wrap">
                            <input placeholder="Search player" className="search-box" />
                            <SearchOutlined className="search-icon" />
                        </div>
                    </Col>
                </Row>
                <Row className="maring-top-30">
                    <Col xs={24} md={24}>
                        <span className="">58</span>
                        <span>/76 </span>
                        <span> Tournaments</span>
                    </Col>
                </Row>
                <Row className="maring-top-30" gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <LeagueItem data={dummy[0]} />
                        <LeagueItem data={dummy[1]} />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <LeagueItem data={dummy[1]} />
                        <LeagueItem data={dummy[0]} />
                    </Col>
                </Row>
            </Layout>
        </>
    )
}

export default Tournaments
