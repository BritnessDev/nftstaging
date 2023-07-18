
import { Button, Col, Input, Image, Row, Space, Tabs, Typography, Layout, Card, Drawer, Divider } from "antd"
import React, { useState, useEffect, useMemo, useCallback } from "react"
import { useParams, useLocation, useHistory } from "react-router-dom"
import { CssDivs } from "components/CssStyledComponent/CssStyledComponent"
import { useMedia } from "hooks/useMedia"
import { CloseOutlined } from "@ant-design/icons"

const priceList = [
    {
        id: "gold",
        name: "#1",
        price: "100000",
        bgImg: "url(/price_bg_1.png)",
    },
    {
        id: "silver",
        name: "#2",
        price: "50000",
        bgImg: "url(/price_bg_2.png)",
    },
    {
        id: "copper",
        name: "#3",
        price: "15000",
        bgImg: "url(/price_bg_3.png)",
    },
]


const LeagueItem = (props) => {
    const { data, stage, banner, leaguename, totalprize, sport, opendate } = props;

    const isMobile = useMedia("(max-width: 640px)")
    const [open, setOpen] = useState(false)

    const [registered, setRegistered] = useState(false)

    const openModal = (a, info) => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    const register = () => {
        setRegistered(true)
    }


    return (
        <>
            <div className="league-carousel maring-bt-20 league-item" onClick={() => openModal()}>
                <div className="cs-wrap">
                    <img className="cs-img" src={data.banner} alt="" />
                    <div className="cs-info-wrap">
                        <div className="cs-f-wrap">
                            <p className="cs-date cs-itext">{data.opendate}</p>
                            <p className="cs-place cs-itext"><span className="place-sub">{data.subplace}</span>/{data.totalplace} Places</p>
                            <p className="cs-type cs-itext">{data.sport}</p>
                        </div>
                        <p className="cs-info">
                            {data.leaguename}
                        </p>
                    </div>
                </div>
                <div className="prize-wrap">
                    {
                        data.stage == 1 ?
                            <Row>
                                <Col md={24} className="justify-between">
                                    <p className="prize">Prizes</p>
                                </Col>
                            </Row> :
                            <Row>
                                <Col md={24} className="justify-between">
                                    <p className="prize">Total Prizes Pool</p>
                                    <div className="justify-between">
                                        <Image
                                            width={25}
                                            src="/yourlife.png"
                                            preview={false}
                                            className="img-blender"
                                        />
                                        <p className="prize margin-left-10">{data.totalprize}</p>
                                    </div>
                                </Col>
                            </Row>
                    }
                    {
                        data.stage == 1 ?
                            <Row gutter={16}>
                                {priceList.map((item) => (
                                    <Col key={item.id} md={8} xs={24}>
                                        <CssDivs backgroundImage={item.bgImg}
                                            backgroundSize="cover"
                                            backgroundPosition="center"
                                            backgroundRepeat="no-repeat"
                                            borderRadius="8px"
                                            display="flex"
                                            flexDirection="column"
                                            gap="4px"
                                            justifyContent="center"
                                            alignItems="center"
                                            pt="10px"
                                            pb="10px"
                                        >
                                            <Typography.Title
                                                level={3}
                                                style={{ color: "white", marginBottom: "0rem" }}
                                            >
                                                {item.name}
                                            </Typography.Title>
                                            <CssDivs
                                                border="none"
                                                borderTop="1px solid white"
                                                width="80%"
                                            />
                                            <Space>
                                                <Image
                                                    width={25}
                                                    src="/yourlife.png"
                                                    preview={false}
                                                />
                                                <Typography.Title
                                                    level={3}
                                                    style={{ color: "white", marginBottom: "0rem" }}
                                                >
                                                    {item.price}
                                                </Typography.Title>
                                            </Space>
                                        </CssDivs>
                                    </Col>
                                ))}
                            </Row> : <></>
                    }
                    <Row>
                        <Col xs={24} md={24} className="maring-top-20">
                            <Button type="primary" className="primary-btn " block>
                                ENROLL
                            </Button>
                        </Col>
                    </Row>
                </div>

            </div>
            <Drawer
                placement={"right"}
                width={isMobile ? "90%" : "35%"}
                closable={false}
                open={open}
                className="league-drawer"
            >
                <Row justify="center" align="middle">
                    <Col xs={24} className="close-btn-wrap">
                        <CloseOutlined className="close-btn" onClick={() => onClose()} />
                    </Col>
                    <Col xs={24} md={24}>
                        <div className="cs-wrap">
                            <img src={data.banner} alt="" />
                            <div className="cs-info-wrap-small">
                                <p className="cs-info-small">
                                    {data.leaguename}
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row> 
                <Row className="padding5">
                    <Col xs={24} md={24} className="maring-bt-20">
                        <div className="cs-info-wrap">
                            <div className="cs-f-wrap">
                                <p className="ls-date ls-itext">{data.opendate}</p>
                                <p className="cs-place ls-itext"><span className="place-sub">{data.subplace}</span>/{data.totalplace} Places</p>
                                <p className="ls-type ls-itext">{data.sport}</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={24} className="maring-top-40">
                        <p>Only in the last year with a little Cristiano won two Champions Leagues, Euro 2016, the championship of Spain and the club world championship. Ronaldo took the Golden Ball for several years, greatly changing his sports program. We have known this guy for a very long time, we remember him in the green shirt of Sporting, without press and with tears inside the Luzhniki stadium. All this time, CR7 has been working on himself - including his eating habits.</p>
                    </Col>
                    <Col xs={24} md={24} className="divider"><Divider style={{ borderColor: '#c9c9c9' }} /></Col>
                    <Col md={24} className="justify-between">
                        <p className="prize">Total Prize Pool</p>
                        <div className="justify-between">
                            <Image
                                width={25}
                                src="/yourlife.png"
                                preview={false}
                                className="img-blender"
                            />
                            <p className="prize margin-left-10">{data.totalprize}</p>
                        </div>
                    </Col>
                    <Col xs={24} md={24} className="maring-top-20">
                        <Button type="primary" className="primary-btn " block onClick={() => register()}>
                            Register
                        </Button>
                    </Col>
                </Row>
            </Drawer>
        </>
    )
}

export default LeagueItem
