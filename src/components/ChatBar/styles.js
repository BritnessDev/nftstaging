import styled from "styled-components"
import DT from "../../static/design-token.json"
import { FiEdit } from "react-icons/fi"

export const InputBarContainer = styled.form`
  height: 100%;
  width: 100%;
  color: #000;
  position: relative;
  //background-color: blue;
  svg {
    position: absolute;
    // align-self: center;
    right: 1%;
    color: #b9fd02;
    margin-top: -5px;
  }
  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
  }
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    svg {
      position: absolute;
      // align-self: center;
      right: 1%;
      color: #b9fd02;
      margin-top: 5px;
    }
  }
  @media screen and (max-width: ${DT.breakpoints.xl}) {
    svg {
      position: absolute;
      // align-self: center;
      right: 1%;
      color: #b9fd02;
      margin-top: 5px;
    }
  }
  @media screen and (max-width: ${DT.breakpoints.lg}) {
  }
  @media screen and (max-width: ${DT.breakpoints.md}) {
  }
  @media screen and (max-width: ${DT.breakpoints.sm}) {
  }
  @media screen and (max-width: ${DT.breakpoints.xs}) {
  }
`

export const ChatIcon = styled(FiEdit)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  zindex: 1;
  border-radius: 50%;
  border: 1px solid #fff;
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
  }
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
  }
  @media screen and (max-width: ${DT.breakpoints.xl}) {
  }
  @media screen and (max-width: ${DT.breakpoints.lg}) {
  }
  @media screen and (max-width: ${DT.breakpoints.md}) {
  }
  @media screen and (max-width: ${DT.breakpoints.sm}) {
  }
  @media screen and (max-width: ${DT.breakpoints.xs}) {
    right: 10px;
    bottom: 50px;
  }
`
export const MessageContainer = styled.div`
  position: fixed;
  bottom: 0px;
  right: 100px;
  zindex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border: 1px solid #fff;
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  width: 350px;
  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
  }
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
  }
  @media screen and (max-width: ${DT.breakpoints.xl}) {
  }
  @media screen and (max-width: ${DT.breakpoints.lg}) {
  }
  @media screen and (max-width: ${DT.breakpoints.md}) {
  }
  @media screen and (max-width: ${DT.breakpoints.sm}) {
  }
  @media screen and (max-width: ${DT.breakpoints.xs}) {
    right: 10px;
  }
`
export const MessageHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
  }
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
  }
  @media screen and (max-width: ${DT.breakpoints.xl}) {
  }
  @media screen and (max-width: ${DT.breakpoints.lg}) {
  }
  @media screen and (max-width: ${DT.breakpoints.md}) {
  }
  @media screen and (max-width: ${DT.breakpoints.sm}) {
  }
  @media screen and (max-width: ${DT.breakpoints.xs}) {
  }
`
export const MessageBodyWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 300px;
  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
  }
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
  }
  @media screen and (max-width: ${DT.breakpoints.xl}) {
  }
  @media screen and (max-width: ${DT.breakpoints.lg}) {
  }
  @media screen and (max-width: ${DT.breakpoints.md}) {
  }
  @media screen and (max-width: ${DT.breakpoints.sm}) {
  }
  @media screen and (max-width: ${DT.breakpoints.xs}) {
  }
`

export const MessageInput = styled.input`
  width: 100%;
  background: #191919;
  color: white;
  border-radius: 5px;
  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
  }
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
  }
  @media screen and (max-width: ${DT.breakpoints.xl}) {
  }
  @media screen and (max-width: ${DT.breakpoints.lg}) {
  }
  @media screen and (max-width: ${DT.breakpoints.md}) {
  }
  @media screen and (max-width: ${DT.breakpoints.sm}) {
  }
  @media screen and (max-width: ${DT.breakpoints.xs}) {
  }
`

export const YourMessage = styled.div`
  align-self: flex-end;
  background-color: #128c7e;
  color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`
export const OtherMessage = styled.div`
  align-self: flex-start;
  background-color: #242424;
  color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`
