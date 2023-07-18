import styled from "styled-components"
import { css } from "styled-components"

export const MainInnerContainer = styled.div`
  width: 45%;
  height: 100%;
  border-radius: 5px;
  position: relative;
  overflow: auto;
`

export const MainInnerContainerMobile = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: relative;
  overflow: auto;
`

export const MainInnerContainer_1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: relative;
`

export const FirstInnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  margin-bottom: 2rem;
  gap: 1rem;
`

export const InputContainer = styled.div`
  width: 100%;
  background-color: #242424;
  color: #fff;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 25px;
  border: none;
  outline: none;
  margin-bottom: 7px;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 0 1rem;
  font-size: 1rem;
  outline: none;
  background-color: transparent;
  color: #e5e5e5;
`

export const InputBtn = styled.button`
  width: 10rem;
  height: 2rem;
  border: none;
  border-radius: 20%;
  background-color: #f2f2f2;
`
