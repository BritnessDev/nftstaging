import styled from "styled-components"
import DT from "../../static/design-token.json"

export const ChatContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  background-color: white;
  border-radius: 5px;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    flex-direction: column;
    width: 100%;
  }
`

export const ChatLeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1rem;
  gap: 4px;
  justify-content: flex-start;
  ::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
  }
  @media screen and (max-width: ${DT.breakpoints.md}) {
    width: 100%;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #A3A5A9;
  background-color: #E7E9ED;
  font-family: 'IBM Plex Mono';
  padding: 16px 20px;
  border-radius: 8px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const ChatRightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  justify-content: space-between;
  background-color: aliceblue;
  background-image: url(/chatbackground.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-raius: 10px;
  // padding:  0 25px 0 25px;
  ::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
  }
  @media screen and (max-width: ${DT.breakpoints.md}) {
    width: 100%;
  }
`

export const EmptyRightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  background-image: url(/chatbackground.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: ${DT.breakpoints.md}) {
    width: 100%;
  }
`

export const BoxTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #3985f5;
  padding: 0.8rem;
  text-transform: uppercase;
  background-color: rgba(47, 133, 245, 0.2);
  border-radius: 30px;
  word-break: break-all;
  font-family: 'IBM Plex Mono';

  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  // border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  background-color: ${(props) => props.isFocused ? '#3985F5' : '#ffffff'};

  &:hover {
    background-color: #3985F5;
    button {
      color: white;
    }
    p {
      color: white;
    }
  }

  button {
    color: ${(props) => props.isFocused ? 'white' : '#242424'};
  }

  p {
    color: ${(props) => props.isFocused ? 'white !important' : '#24242480'};
  }
`

export const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: auto;
`

export const User = styled.button`
  font-size: large;
  font-weight: bold;
  color: #242424;
  background-color: transparent;
  border: none;
  cursor: pointer;
  word-break: break-all;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`
export const ChatContainerHeader = styled.h1`
  font-size: large;
  font-weight: bold;
  color: #242424;
  margin-bottom: 1.2rem;
  padding: 1rem;
  text-decoration: underline;
  text-underline-offset: 10px;
`
export const ChatTextInput = styled.input`
  outline: none;
  width: 90%;
  padding: 0.5rem;
  background-color: #242424;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: large;
`
export const ChatForm = styled.form`
  border: none;
  position: relative;
`

export const TextForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const AttachFilesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  padding: 10px;
  max-height: 120px;
  overflow-y: auto;
`

export const SuffixContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  right: 20px;
`

export const ChatSendButton = styled.button`
  outline: none;
  background-color: #242424;
  border-radius: 5px;
  border: none;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
  cursor: pointer;
`
export const Chats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-top: 40px;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`
export const YourMessage = styled.div`
  align-self: flex-end;
  background-color: #d2dfff;
  color: #121113;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 5px;
  border-bottom: 1px solid #e7e9ed;
  margin: 0px 25px 5px 25px;
  position: relative;
  border-bottom-right-radius: 0;
  &::before {
    border-color: white;
    border-left: 0px solid #fbfbfb00;
    border-bottom: 8px solid #d2dfff;
    border-right: 8px solid #ffffff00;
    border-top: 8px solid transparent;
    position: absolute;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
    content: "";
    right: -8px;
    top: 100%;
  }
`
export const OtherMessage = styled.div`
  align-self: flex-start;
  background-color: #ffffff;
  color: #121113;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 5px;
  margin: 0px 25px 5px 25px;
  position: relative;
  border-bottom-left-radius: 0;
  &::before {
    border-color: white;
    border-left: 8px solid #fbfbfb00;
    border-bottom: 8px solid #fff;
    border-right: 0px solid #ffffff00;
    border-top: 8px solid transparent;
    position: absolute;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
    content: "";
    left: -8px;
    top: 100%;
  }
`
export const UserMsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;
  gap: 12px;
  justify-content: space-between;
  align-items: start;
  p {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #24242480;
  }
`

export const EmojiContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 70px;
  transition-duration: 500ms;
  z-index: -1;
  opacity: ${props => props.isFocused ? '1' : '0'};
  z-index: ${props => props.isFocused ? '1' : '-1'};
`

export const AttachFileContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-size: 100% 100% !important;
  background-image: ${props => props.checkImage ? `url(${props.image})` : ""};
  position: relative;
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`