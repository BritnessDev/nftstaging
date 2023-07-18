import styled from "styled-components"

export const AccountContainer = styled.div`
  height: 42px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 12px;
  background-color: transparent;
  cursor: pointer;
`

export const AccountText = styled.a`
  color: "#D2FA64";
  width: 10%;
  padding: 0 10px;
  cursor: pointer;
`

export const Icon = styled.img`
  align-self: center;
  fill: rgb(40, 13, 95);
  flex-shrink: 0;
  margin-bottom: 8px;
  height: 30px;
`

export const InnerContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`

export const ConnectorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ConnectorInnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 5px;
  cursor: pointer;
`

export const AccountText2 = styled.div`
  margin-right: 5px;
  color: "#D2FA64";
  width: 80%;
  display: flex;
  align-items: center;
  height: 80px;
  margin-left: 0.2rem;
`
