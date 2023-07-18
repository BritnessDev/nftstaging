import styled, { css } from "styled-components"
import DT from "../../../static/design-token.json"

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: #f2f3f5;
  padding: 2rem;
`

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #242424;
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 1.5px;
`

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const MenuButtonContainer = styled.button`
  background: ${(props) => props.disabled ? "rgba(36, 36, 36, 0.3)" : "#FFFFFF"};
  width: 100%;
  border-radius: 8px;
  padding: 30px;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #242424;
  border: none;
  margin-top: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #3985F5;
  }
  img {
    width: 36px;
    height: 44px;
  }
  background: ${(props) => props.isSelected ? "#3985F5" : "white"};
  color: ${(props) => props.isSelected ? "white" : "#3985F5"};
  &:hover {
    background: #3985F5;
    color: white;
  }
`

export const StepButton = styled.button`
  border: none;
  width: 100%;
  background: ${(props) => props.disabled ? "#BFBFD1" : "#3985F5"};
  border-radius: 4px;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.disabled ? "#BFBFD1" : "#3985F580"};
  }
`

export const DepositText = styled.div`
  margin-top: 16px;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;
  color: #242424;
`

export const BalanceBox = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
  height: 256px;
  border-radius: 8px;
  background: linear-gradient( 13deg,rgb(61 157 208) 0%,rgb(54 65 140) 31%,rgb(72 63 125) 80%,rgb(92 79 139) 100% );
  p {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: flex-end;
    color: #FFFFFF80;
  }
`

export const Balance = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  img {
    width: 56px;
    height: 56px;
  }
  p {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 56px;
    display: flex;
    align-items: flex-end;
    text-transform: uppercase;
    color: #FFFFFF;
  }
}`

export const WalletBalanceText = styled.div`
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  margin-top: 22px;
  /* identical to box height, or 150% */
  color: #242424;
  span {
    color: #3985F5;
  }
`

export const InsuffiText = styled.p`
  margin-top: 9px;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  color: rgba(36, 36, 36, 0.75);
`

export const GoSwapButton = styled.button`
  display: flex;
  margin-top: 17px;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  background: #90E040;
  border-radius: 4px;
  color: white;
  border: none;
  width: 100%;
  max-width: 365px;
  cursor: pointer;
`

export const DepositBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 27px;
  width: 100%;
  img {
    width: 160px;
    height: 160px;
  }
  p {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
  }

`

export const ResultImage = styled.div`
  width: 160px;
  height: 160px;
  background: rgba(57, 133, 245, 0.12);
  border: 1px solid #3985F5;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    font-size: 4rem;
    color: #fff;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`

export const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #242424;
  }
  gap: 20px;
`

export const ProfileBox = styled.div`
  h1 {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #242424;
    margin-top: 31px;
  }
  p {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #242424;
    margin-top: 8px;
  }

  Input TextArea {
    margin-top: 17px;
  }

`

export const Input = styled.input`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 16px;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #242424;
  opacity: 0.6;
`

export const TextArea = styled.textarea`
  background: #FFFFFF;
  border-radius: 8px;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #242424;
  opacity: 0.6;
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

export const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 13px;
`

export const ClubItem = styled.button`
  padding: 22px 15px;
  width: 100%;
  background: #FFFFFF;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 33px;
  border: none;
  p {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: ${(props) => props.isSelected ? "white" : "#3985F5"};
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid #000000;
    background-color: white;
  }
  background: ${(props) => props.isSelected ? "#3985F5" : "white"};
  color: ${(props) => props.isSelected ? "white" : "#3985F5"};
  &:hover {
    background: #3985F5;
    p {
      color: white;
    }
  }
`
