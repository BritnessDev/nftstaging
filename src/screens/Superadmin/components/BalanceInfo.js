import { Avatar, Divider, Typography, Modal, Spin } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"
import React, { useEffect, useState, useCallback } from "react"
import {
  BalanceButton,
  BalanceContainer,
  BalanceInCont,
  BalanceInnerContainer,
  WidthSpaceBetween,
  BalanceTitle,
  BalanceValue,
  TokenImage,
} from "../styles/BalanceStyling"
import whiteLabel from "../../../images/yourlife_back_white.png"
import { useMoralis, useMoralisWeb3Api } from "react-moralis"
import { getStakedAmount } from "utils/helpers/proxy"
import { getBalanceOf } from "utils/helpers/ylt"

export const BalanceInfo = ({
  suffAmount,
  isdeposit,
  address,
  isSuperPage,
}) => {
  const [stackedYLTBalance, setStakedYLTBalance] = useState(null)
  const [yltBalance, setYLTBalance] = useState(0)
  const { Moralis, isWeb3Enabled, isAuthenticated, user } = useMoralis()
  const Web3Api = useMoralisWeb3Api()

  const memoizedCallback = useCallback(async () => {
    if (user) {
      const bal = await Web3Api.account.getTokenBalances({
        address: user?.attributes.ethAddress,
        chain: "bsc testnet",
        token_addresses: [process.env.REACT_APP_YLT_CONTRACT_ADDRESS],
      })
      if (bal[0]?.balance)
        setYLTBalance(Math.floor(Moralis.Units.FromWei(bal[0].balance)))
    }
  }, [Web3Api.account, user, Moralis.Units])

  useEffect(() => {
    memoizedCallback()
  }, [memoizedCallback])

  const getStakedYLTBalance = useCallback(
    async (address) => {
      if (address) {
        if (!(isWeb3Enabled && isAuthenticated)) {
          await Moralis.enableWeb3()
        }
        let value
        try {
          value = !isSuperPage
            ? await Moralis.executeFunction(
                getStakedAmount(
                  address,
                  process.env.REACT_APP_YLT_CONTRACT_ADDRESS,
                ),
              )
            : await Moralis.executeFunction(
                getBalanceOf(process.env.REACT_APP_YLPROXY_CONTRACT_ADDRESS),
              )
        } catch (error) {
          Modal.error({
            icon: <ExclamationCircleOutlined />,
            content: error.data ? error.data.message : error.message,
          })
        }
        if (value) {
          setStakedYLTBalance(Moralis.Units.FromWei(value))
        }
      }
    },
    [Moralis, isWeb3Enabled, isAuthenticated, isSuperPage],
  )

  useEffect(() => {
    getStakedYLTBalance(address)
    memoizedCallback()
  }, [isdeposit, address, getStakedYLTBalance, memoizedCallback])

  return (
    <BalanceContainer>
      <BalanceInCont>
        <div style={{ flex: "50%" }}>
          <BalanceTitle>Proxy</BalanceTitle>
          <BalanceInnerContainer>
            <TokenImage src={whiteLabel} />
            <BalanceValue>
              {stackedYLTBalance ? stackedYLTBalance : <Spin />}
            </BalanceValue>
          </BalanceInnerContainer>
          {!isSuperPage && (
            <>
              <Divider
                type="horizontal"
                style={{
                  opacity: 0.2,
                  borderTopColor: "#fff",
                  margin: "auto",
                  width: "85%",
                  minWidth: "85%",
                  marginTop: "15px",
                }}
              />
              <WidthSpaceBetween>
                <Typography.Text style={{ color: "white", opacity: "0.5" }}>
                  MININUM LIMIT
                </Typography.Text>
                <Typography.Text style={{ color: "white", fontSize: "19px" }}>
                  <Avatar
                    src={whiteLabel}
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                  {suffAmount}
                </Typography.Text>
              </WidthSpaceBetween>
            </>
          )}
        </div>
        <Divider
          type="vertical"
          style={{
            borderLeftColor: "white",
            height: "8rem",
            opacity: 0.2,
            margin: "0",
          }}
        />
        <div style={{ flex: "50%" }}>
          <BalanceTitle>YLT Balance</BalanceTitle>
          <BalanceInnerContainer>
            <TokenImage src={whiteLabel} />
            <BalanceValue>{yltBalance ? yltBalance : <Spin />}</BalanceValue>
          </BalanceInnerContainer>
          {!isSuperPage && (
            <BalanceButton
              onClick={() => {
                location.href = `http://swap.yourlifegames.com/?token=${user?.id}`
              }}
            >
              top up
            </BalanceButton>
          )}
        </div>
      </BalanceInCont>
    </BalanceContainer>
  )
}