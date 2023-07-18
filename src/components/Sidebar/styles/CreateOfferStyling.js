import styled from "styled-components"

export const InputLabel = styled.label`
  text-align: left;
  font-size: 0.8rem;
  font-weight: 300;
`

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 1rem;
  background-color: #dedede;
  color: #242424;
  margin-top: 0.5rem;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-bottom: 1rem;
`

export const DatepickerContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .ant-picker.ant-picker-borderless {
    background-color: #dedede !important;
    border-radius: 5px;
    color: #242424;
  }
`

export const DatepickerInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const ButtonContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  width: 49%;
  height: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #3985f5;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`

export const OutlinedButton = styled.button`
  width: 49%;
  height: 100%;
  border: 1px solid #3985f5;
  border-radius: 5px;
  color: #3985f5;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
`

export const OfferCardsContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`
