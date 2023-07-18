import styled from "styled-components"
import DT from "../../../static/design-token.json"

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px 0 15px;
  @font-face {
    src: url('/font/IBM_Plex_Mono/IBMPlexMono-Medium.ttf');
    font-family: 'IBM Plex Mono';
  };
  font-family: 'IBM Plex Mono';
`

export const BackBtn = styled.button`
  width: 35px;
  margin-top: 40px;
  margin-bottom: 28px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;

  &:hover {
    color: #3985f5;
    text-decoration: underline;
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    display: none;
  }
`

export const TopContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export const Title = styled.p`
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
  text-transform: uppercase;
  color: #242424;
  font-size: 24px;
  @media screen and (min-width: ${DT.breakpoints.lg}) {
    font-size: 48px;
  }
  @media screen and (min-width: ${DT.breakpoints.xl}) {
    font-size: 64px;
  }
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const SearchInput = styled.input`
  border: none;
  background-color: #FFFFFF;
  opacity: 0.5;
  padding: 0.5rem;
  outline: none;
  font-size: 1rem;
  font-weight: 300;
  color: #242424;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  @media screen and (min-width: ${DT.breakpoints.lg}) {
    min-width: 300px;
  }
  @media screen and (min-width: ${DT.breakpoints.xl}) {
    min-width: 500px;
  }
  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    min-width: 700px;
  }
`

export const MakeAdminBtn = styled.button`
  padding: 16px 40px;
  border: 1px solid #3985f5;
  background-color: transparent;
  color: #3985f5;
  font-size: 1rem;
  font-weight: 300;
  border-radius: 0.3rem;
  text-transform: uppercase;
  padding-top: 1rem;
  padding-bottom: 1rem;
  white-space: nowrap;
  :hover {
    background: #3985f5;
    color: white;
    border-color: #3985f5;
    transition: 0.3s;
    cursor: pointer;
  }
`

export const MainInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  position: relative;
  padding-top: 3rem;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: ${DT.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${DT.breakpoints.lg}) {
  }
  @media screen and (max-width: ${DT.breakpoints.md}) {
  }
`

export const QuantityText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #242424;
  text-transform: uppercase;
  white-space: nowrap;
`

export const AdminToolbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const RightSideContainer = styled.div`

  .ant-select-selection-item,
  .ant-select-arrow {
    font-size: 1rem;
    font-weight: 600;
    color: #3985f5 !important;
  }
`

export const CardContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
`

export const CardInnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
`

export const LeftBtn = styled.button`
  width: 2rem;
  background-color: transparent;
  color: #F14343;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-size: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;

  a {
    color: #f14343;
  }
`

export const RightBtn = styled.button`
  width: 2rem;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-size: 12px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: #242424;
  opacity: 0.56;
`

export const AdminImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  align-self: flex-start;
`

export const InnerContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AdminName = styled.p`
  color: #242424;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`

export const AdminAddress = styled.p`
  font-size: 12px;
  color: #242424;
  text-align: center;
  opacity: 0.56;
  font-family: 'IBM Plex Mono';
`

export const ActionsContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ActionBtn = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  outline: none;
`
