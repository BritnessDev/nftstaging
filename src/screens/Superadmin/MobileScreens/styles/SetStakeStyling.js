import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 20px;
`

export const MainTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: #242424;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-align: left;
  width: 100%;
`

export const InnerContainer = styled.div`
  background: rgb(0, 180, 255);
  background: linear-gradient(
    41deg,
    rgba(0, 179, 255, 1) 0%,
    rgba(52, 52, 186, 0.8) 26%,
    rgba(77, 56, 202, 0.8) 80%,
    rgba(161, 70, 255, 0.8) 100%
  );
  width: 100%;
  height: 20%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BalanceInnerContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TokenImageMobile = styled.img`
  width: 4rem;
  height: 4rem;
`

export const BalanceValueMobile = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  margin-left: 0.2rem;
`

export const InnerTitle = styled.p`
  color: #242424;
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  margin-top: 2rem;
  text-align: left;
  width: 100%;
  letter-spacing: 1px;
`

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  color: #242424;
  background-color: #dedede;
`

export const SetBtn = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  background-color: #3985f5;
  margin-top: 1rem;
`
