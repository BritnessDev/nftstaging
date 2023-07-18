import styled from "styled-components"
import DT from "../../../static/design-token.json"

export const AdminInfoContainer = styled.div`
  height: auto;
  margin-bottom: 0.5rem;
  background-color: #242424;
  border-radius: 5px;
  padding: 5px;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
  }

  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
  }
`

export const AdminInfo = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  margin: 30px 0 30px 0;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    height: 45%;
  }
`
export const AdminInfoButtonIconsContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  @media only screen and (min-width: ${DT.breakpoints.lg}) {
    top: 8px;
    right: 8px;
  }
`

export const CameraIcon = styled.img`
  height: 1.5rem;
  cursor: pointer;
  width: 1.5rem;
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    top: 110px;
  }
`

export const CameraBar = styled.div`
  height: 40px;
  width: 150px;
  left: 21px;
  top: 137px;
  background: #242424;
  opacity: 0.5;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    top: 102px;
    width: 110px;
  }
`

export const AdminInfoInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 60%;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    width: 70%;
    margin-left: 1rem;
  }
`

export const ProfileImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    width: 120px;
    height: 120px;
  }
`

export const Role = styled.p`
  @font-face {
    src: url("/font/IBM_Plex_Mono/IBMPlexMono-Medium.ttf");
    font-family: "IBM Plex Mono";
  }
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff80;
`

export const AdminUsername = styled.div`
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  /* or 117% */

  text-transform: uppercase;

  color: #ffffff;
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    font-size: 24px;
  }
`

export const IconContainer = styled.div`
  align-self: flex-start;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    align-self: center;
  }
`