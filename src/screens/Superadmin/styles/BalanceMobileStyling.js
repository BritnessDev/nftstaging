import styled, { css } from "styled-components"

export const BalanceMobileContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 179, 255);
  background: linear-gradient(
    41deg,
    rgba(0, 179, 255, 0.5) 0%,
    rgba(52, 52, 186, 0.7) 16%,
    rgba(77, 56, 202, 0.6) 80%,
    rgba(161, 70, 255, 0.5) 100%
  );
  position: relative;
  border-radius: 0.3rem;
`

export const BalanceInCont = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BalanceInnerContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TokenImageMobile = styled.img`
  width: 3rem;
  height: 3rem;
`

export const BalanceValueMobile = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 0.2rem;
`

export const BalanceSpin = styled.div`
  .ant-spin-dot-item {
    color: #bebbe5;
  }
`