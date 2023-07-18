import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Link as LinkS } from "react-scroll"
import { Link as LinkR } from "react-router-dom"
import DT from "../../static/design-token.json"

export const FooterLinksContent = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  height: 110px;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #61616A;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  z-index: 10;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
  }

  @media only screen and (max-width: ${DT.breakpoints.lg}) {
  }

  @media only screen and (max-width: ${DT.breakpoints.md}) {
  }
`

export const SocialLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  padding-left: 20px;
`

export const LogoImage = styled.img`
  height: 60px;

  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    height: 50px;
  }
`

export const Image = styled.img`
  width: 16px;
  height: 20px;
  margin: auto;
  @media only screen and (min-width: ${DT.breakpoints.xl}) {
    margin-right: 0.5rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    margin-right: 0.4rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    margin-right: 0.2rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.md}) {
    margin-right: 0.3rem;
    height: 0.5rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    margin-right: 0.8rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    height: 0.7rem;
    margin-right: 0.5rem;
  }
`

export const NavLinks = styled(LinkR)`
  color: #d2fa64;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;

  &.active {
    border-bottom: 0px solid #01bf71;
  }

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    font-size: 0.6rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    text-decoration: underline;
    text-decoration-style: solid;
    text-underline-offset: 4px;
    font-size: 0.4rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.md}) {
    font-size: 0.5rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    font-size: 1rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    padding: 0;
    padding-left: 25px;
    font-size: 12px;
    font-weight: 400;
  }
`

export const BrandName = styled.p`
  font-size: 2rem;
  color: #e9f205;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 1rem;

  @media only screen and (min-width: ${DT.breakpoints.lg}) {
    display: none;
  }

  @media only screen and (max-width: ${DT.breakpoints.md}) {
    margin-left: -1rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    font-size: 2rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;

  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    margin-left: 2.5rem;
    margin-top: 0rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    text-decoration: underline;
    text-decoration-style: solid;
    text-underline-offset: 4px;
    justify-content: flex-end;
  }
  @media only screen and (max-width: ${DT.breakpoints.md}) {
    width: 100%;
    margin-left: 1.5rem;
    padding-top: 0.1rem;
    justify-content: flex-end;
  }
  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    display: flex;
    margin-left: 1.5rem;
    width: 22%;
    padding-bottom: 0.2rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.xs}) {
    margin-bottom: 0.5rem;
    display: flex;
    margin-left: 1.5rem;
    margin-top: 1rem;
    width: 30%;
  }
`

export const ListItemMarketplace = styled(LinkR)`
  color: #d2fa64;
  display: flex;
  align-items: center;
  padding: 0rem;
  height: 100%;
  text-transform: uppercase;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    font-size: 0.6rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    font-size: 0.4rem;
  }

  @media only screen and (max-width: ${DT.breakpoints.md}) {
    font-size: 0.4rem;
  }
`

export const CopyrightText = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #646464;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 0.8rem;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    text-align: left;
    margin-left: 3rem;
    margin-top: 0.3rem;
  }
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    text-align: left;
    font-size: 0.7rem;
    margin-left: 3rem;
    margin-top: 0.2rem;
  }
`

export const Links = styled.div`
  display: flex;

  @media only screen and (max-width: ${DT.breakpoints.sm}) {
    flex-direction: column;
  }
`
