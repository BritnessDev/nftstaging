import styled from "styled-components"
import { Radio } from "antd"
import DT from "../../../static/design-token.json"

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export const LeftSide = styled.div`
  width: 15%;
  position: relative;
  height: 100%;
`
export const CenterSide = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 44px;
  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    padding: 10px 20px;
  }
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    a {
      display: none;
    }
  }
`

export const BackOption = styled.button`
  font-size: 1rem;
  color: #242424;
  font-size: 1.2rem;
  font-weight: 200;
  padding-left: 1rem;
  padding-top: 1.5rem;
  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const MainHeading = styled.h1`
  font-style: normal;
  font-family: 'IBM Plex Mono';
  font-weight: 700;
  font-size: 64px;
  line-height: 72px;
  @font-face {
    src: url('/font/IBM_Plex_Mono/IBMPlexMono-Medium.ttf');
    font-family: 'IBM Plex Mono';
  }
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    font-size: 36px;
  }
`
export const NftTypeButtonsContainer = styled(Radio.Group)`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const NftTypeButton = styled(Radio.Button)`
  width:50%;
  display:flex;
  justify-content:center;
  cursor: pointer;
  &:hover {
    background-color: #3985F5;
    color: white;
  }
  &:focus {
    background-color: #FFFFFF;
    color: white;
  }
`

export const FormStyling = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100%;
  border: none;
  margin-top: 50px;

  span {
    font-size: 1.2rem;
    color: white;
  }
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    margin-top: 24px;
  }
`

export const FormLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin: 0.5rem 0rem;
`

export const FormLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.8rem;
    color: #242424;
    margin-left: 10px;
  }
`

export const SelectLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  span {
    margin-bottom: 0.8rem;
  }
`

export const SelectField = styled.select`
  width: 60%;
  padding: 0.5rem;
  background-color: #242424;
  border-radius: 5px;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  color: white;
`

export const TitleField = styled.p`
  color: #242424;
  font-size: 24px;
  margin-top: 48px;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  span {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #242424;
  }
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    margin-top: 24px;
  }
`

export const InputField = styled.input`
  width: 60%;
  padding: 0.5rem;
  background-color: #242424;
  border-radius: 5px;
  margin-bottom: 1rem;
  border: none;
  color: #fff;
`
export const TextAreaField = styled.textarea`
  width: 70%;
  padding: 1rem;
  background-color: #242424;
  border-radius: 5px;
  margin-bottom: 2rem;
  border: none;
  margin-top: 0.8rem;
  color: #fff;
`
export const DropDownContainer = styled.div`
  display: flex;
  background: #FFFFFF;
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  cursor: pointer;
  margin-top: 24px;
`

export const AttachContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const DropFileStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed #BFBFD1;
  border-radius: 7px;
  padding: 38px 0 38px 0;
  p {
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3985F5;
    width: 40%;
    outline: none;
    border: none;
    padding: 14px;
    border-radius: 5px;
    margin-top: 20px;
    span {
      font-family: 'IBM Plex Mono';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      text-align: right;
      text-transform: uppercase;
      color: #FFFFFF;
    }
  }

  span {
    color: #FFFFFF;
  }
`

export const TitleSeparator = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #242424;
  margin-top: 2rem;
`

export const AttrsBoxStyling = styled.div`
  width: 100%;
  height: 4.5rem;
  border: 1px solid #787876;
  border-radius: 5px;

  p {
    padding: 0.5rem;
    padding-left: 1rem;
    background-color: #242424;
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const AttrsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 2rem;
`

export const SubmitBtn = styled.input`
  width: 100%;
  color: white;
  background-color: #3985F5;
  border-radius: 5px;
  padding: 0.7rem 0rem;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  margin-top: 30px;

  &:hover {
    background-color: #2874E4;
  }
`
export const TabContainer = styled.div`
  margin-top: 52px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  padding: 4px;
  background-color: #BFBFD1;
  border-radius: 8px;
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    margin-top: 20px;
  }
`

export const TabButton = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  padding: 28px;
  text-align: center;
  border-radius: 8px;
  background-color: ${(props) => props.isFocused ? `#FFFFFF` : `#BFBFD1`};
  color: ${(props) => props.isFocused ? `#3985F5` : `#FFFFFF`};
  transition-duration: 0.2s;
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    font-size: 22px;
    padding: 12px;
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const HeadingText1 = styled.p`
  color: #242424;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
`

export const HeadingText2 = styled.p`
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
`

export const NetworkCheckGroup = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
  margin-top: 24px;
`

export const SelectBoxDropdown = styled.div`
  width: 100%;
  margin-top: 24px;
`

export const AsideContainer = styled.aside`
  display: flex;
  justify-content: center;
  gap: 8px;
`

export const AsideImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3px;
`