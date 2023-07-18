import styled from "styled-components"
import DT from "../../../static/design-token.json"

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SuperAdminOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    margin-bottom: 0.6rem;
    overflow: hidden;
  }
`

export const MainContainerMobile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`

export const MainInnerContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
  }
`

export const ButtonsContainer = styled.form`
  margin: 0 auto;
  width: 80%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`

// Card styles
export const CollapsibleDivStyling = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .header {
    background-color: #ddd;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
  }
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  margin: 10;
  padding-right: 1rem;
  padding-left: 1rem;

  p {
    font-size: 1.1rem;
    color: #000;
  }

  .email {
    width: 20%;
  }

  .address {
    width: 50%;
  }
`

export const CardSection = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  background-color: #eee;
  flex-wrap: wrap;
  position: relative;

  input {
    width: 100%;
    margin: 0 auto;
  }
`

export const CardInnerSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const CardStyling = styled.label`
  width: 25%;
  height: 140px;
  border-radius: 5px;
  border: 1px solid #000;
  padding: 16px;
  margin-top: 1rem;
  cursor: pointer;
  max-height: 140px;
  position: relative;

  div {
    position: absolute;
    bottom: 0;
    left: 50%;
  }

  .title {
    border-bottom: 1px solid #000;
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
  }

  &:nth-child(4) {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  &:nth-child(5) {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`
export const SubmitBtn = styled.button`
  width: 15rem;
  height: 3rem;
  border-radius: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
  background-color: brown;
  color: #fff;
  outline: none;
  font-weight: bold;
  position: absolute;
  bottom: 0.3rem;
  right: 6.5rem;
`
