import styled, { css } from "styled-components"
import DT from "../../static/design-token.json"

export const HeaderContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px !important;
  position: fixed;
  max-width: 1920px;
  width: 100%;
  z-index: 11;
`

export const MenuPart = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  height: 80.22px;
  margin-left: -37px;
  border-radius: 4px;
  clip-path: polygon(42px 0%, 100% 0%, 100% 100%, 0% 100%);
`

export const MenuContainer = styled.div`
  padding: 0px 50px 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const HeaderStyling = styled.header`
  z-index: 11;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Roboto, sans-serif;
  top: 0.5rem;
  border-radius: 5px;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    box-shadow: none;
  }
`

export const LogoContainer = styled.div`
  background-color: #242424;
  width: fit-content;
  min-width: 235.7px;
  border-radius: 5px;
  clip-path: polygon(0 0, 100% 0%, 82% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  height: 100%;
  padding: 20px 49px 20px 28px;
`

export const NavLogo = styled.img`
  width: 100%;
  left: 1.5rem;
  height: 100%;
`

export const NavText = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 1rem;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    font-size: 1rem;
  }
`

export const HeaderItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: ${DT.breakpoints.xl2}) {

    /* a {
      font-size: 0.8rem;
    } */
  }
  @media screen and (max-width: ${DT.breakpoints.xl}) {

    a {
      // font-size: 0.5rem;
    }
  }

  @media (max-width: ${DT.breakpoints.lg}) {
    // display: none;
  }
`

export const HeaderTextContainer = styled.span`
  padding-bottom: 3px;
  border-bottom: 1px solid #3985F5;
  letter-spacing: -0.1em;
  white-spacing: nowrap;
  &:hover {
    border: none;
  }
`

export const HeaderIconContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  span {
    padding-bottom: 0px;
  }
`

export const HeaderIconImage = styled.img`
  width: 16px;
  height: 20px;
`

export const HeaderItemText = styled.p`
  color: #242424;
  padding-bottom: 3px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  padding-bottom: 3px;
  // border-bottom: 1px solid #3985F5;

  @media screen and (min-width: ${DT.breakpoints.xl2}) {
    margin-right: 20px;
    font-size: 1rem;
  }

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    // font-size: 0.5rem;
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    // font-size: 0.5rem;
    color: #242424;
  }

  @media (max-width: ${DT.breakpoints.md}) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`

export const BurgerMenuContainer = styled.div`
  top: 0.5rem;
  padding: 1rem;
  width: 100%;

  p {
    font-size: 1.2rem;

    &:hover {
      color: #ccc;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
    background-color: rgb(231, 233, 237);
  }
`

export const BurgerMenuInnerContainer = styled.div`
  text-align: center;
  position: absolute;
  backdrop-filter: blur(19px);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  border-radius: 5px;
`

export const CancelButton = styled.p`
  color: #242424;
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  font-size: 1rem;

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    right: 15px;
  }
`

export const SubscribeContainer = styled.div`
  @media screen and (max-width: ${DT.breakpoints.xl}) {
    display: none;
  }
`
export const SubscribeBtnContainer2 = styled.div`
  display: none;
  border: none;
  @media screen and (max-width: ${DT.breakpoints.xl}) {
    display: flex;
  }
`
export const SubscribeBtn = styled.button`
  background-color: #3985F5;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 4px;
  color: #fff;
  outline: none;
  border: none;
  text-transform: uppercase;
  @media screen and (max-width: ${DT.breakpoints.xl2}) {
    padding: 8px 16px;
    font-size: 13px;
  }
`
export const SubscribeText1 = styled.span`
  display: block;
  @media screen and (max-width: ${DT.breakpoints.sm}) {
    display: none;
  }
`

export const SubscribeText2 = styled.span`
  display: none;
  @media screen and (max-width: ${DT.breakpoints.sm}) {
    display: block;
  }
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${DT.breakpoints.xl2}) {
    
  }

  @media (max-width: ${DT.breakpoints.xl2}) {
    
  }

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    // display: none;
  }
`

export const JoinBtn = styled.button`
  background-color: #3985f5;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
  outline: none;
  border: none;
  text-transform: uppercase;
  font-size: 1rem;
`
