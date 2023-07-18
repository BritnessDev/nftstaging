import styled from "styled-components"
import DT from "../../static/design-token.json"

export const InfoContainer = styled.nav`
  color: #fff;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 0px 0;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 35px 20px;
  border-radius: 20px;
  width: 100%;
  font-size: 26px;
  line-height: 28px;
  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }
  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: none;
  }
`

export const FItem = styled.div`
  padding-left: 40px;
  width: 25%;
  text-transform: uppercase;
  color: #000;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    padding: 0px 10px 0px 0px;
  }
`
export const FItem2 = styled.div`
  width: 20%;
  text-transform: uppercase;
  color: #000;
  font-weight: bold;
  padding-left: 60px;
  font-size: 24px;
  line-height: 32px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    padding: 0px 10px 0px 0px;
  }
`

export const SItem = styled.div`
  width: 10%;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`

export const ThItem = styled.div`
  width: 15%;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    padding: 0px 10px 0px 0px;
  }
`

export const ThItem2 = styled.div`
  padding-left: 60px;
  width: 15%;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`
export const Wrapper = styled.div`
  margin-top: 10px;
  padding: 20px;
  border-radius: 30px;
  background-color: #242424;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    padding: 10px;
    border-radius: 5px;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    padding: 10px;
    border-radius: 5px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    // background-color: orange;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    // background-color: orange;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Row2 = styled.div`
  display: none;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    // background-color: orange;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    //background-color: orange;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const RowFItem = styled.div`
  display: flex;
  // background-color: blue;
  width: 20%;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: flex;
    width: 30%;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: flex;
    // background-color: red;
    width: 50%;
  }
`

export const RowFItemSub1 = styled.div`
  display: flex;
  color: #6a6a69;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    font-size: 12px;
    line-height: 14px;
    //background-color: red;
  }
`
export const RowFItemSub2 = styled.div`
  display: flex;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: flex;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: flex;
    // background-color: red;
    font-size: 14px;
    line-height: 16px;
  }
`

export const Row3 = styled.div`
  display: none;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    //background-color: orange;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`
export const Row3F = styled.div`
  display: none;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }
`
export const Row3S = styled.div`
  display: none;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: block;
    text-align: center;
  }
`
export const Row3Th = styled.div`
  display: none;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
  }
`
export const Row3ThPunderline = styled.p`
  display: none;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: block;
    text-align: center;
    color: #b9fd02;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`

export const BuyDesctop = styled.div`
  padding: 5px;
  border-color: rgba(245, 245, 240, 0.4);
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  color: #f5f5f0;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  @media screen and (max-width: ${DT.breakpoints.md}) {
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
  }
`

export const ConfirmedDesctop = styled.div`
  margin-left: 10px;
  padding: 5px;

  border-radius: 5px;
  background-color: ${({ conf }) =>
    conf === "waiting"
      ? "rgba(229, 61, 61, 0.12)"
      : "rgba(70, 213, 127, 0.12)"};
  color: ${({ conf }) => (conf === "waiting" ? "#E53D3D" : "#46d57f")};

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  @media screen and (max-width: ${DT.breakpoints.md}) {
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
  }
`

export const RowSItem = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: flex;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: none;
  }
`

export const RowThirdItem = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: flex;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: none;
  }
`
export const RowFourthItem = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: none;
  }
`
export const RowFifthItem = styled.div`
  display: flex;
  align-items: center;
  color: #b9fd02;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-transform: uppercase;
  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: none;
  }
`

export const RowSixItem = styled.div`
  display: flex;
  align-items: center;
  color: #b9fd02;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-transform: uppercase;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: none;
  }
`
export const RowSeventhItem = styled.div`
  display: flex;
  align-items: center;
  color: #b9fd02;
  text-decoration: underline;
  text-underline-offset: 4px;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: none;
  }
`

export const Row2FItem = styled.div`
  background-color: #242424;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: flex;
    //  background-color: red;
    font-size: 12px;
    line-height: 14px;
  }
`
export const Row2ThirdItem = styled.div`
  background-color: #242424;
  text-transform: uppercase;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: flex;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: none;
  }
`

export const Row2FourthItem = styled.div`
  background-color: #242424;
  text-transform: uppercase;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: flex;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: none;
  }
`
export const Row2FifthItem = styled.div`
  background-color: #242424;
  color: #b9fd02;
  textdecoration: underline;
  text-underline-offset: 4px;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: flex;
    color: #b9fd02;
    textdecoration: underline;
    text-underline-offset: 4px;
    font-size: 12px;
    align-items: center;
  }
`

export const Row2SixItem = styled.div`
  // background-color: #242424;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: none;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: flex;
  }
`

export const Row2SItem = styled.div`
  background-color: #242424;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    display: flex;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    display: none;
  }
`

export const Line = styled.hr`
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
    margin: 10px;
    border: 0.5px solid #373737;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    border: 0.5px solid #373737;
    margin: 10px;
  }
`

export const ButtonConfirmed = styled.div`
  background-color: ${({ conf }) =>
    conf === "waiting"
      ? "rgba(229, 61, 61, 0.12)"
      : "rgba(70, 213, 127, 0.12)"};
  color: ${({ conf }) => (conf === "waiting" ? "#E53D3D" : "#46d57f")};
  padding: 5px;
  border-radius: 5px;
  margin-left: 5px;
  display: flex;
`
export const ButtonBuy = styled.div`
  padding: 5px;
  border-color: rgba(245, 245, 240, 0.4);
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;

  @media screen and (max-width: ${DT.breakpoints.md}) {
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
  }
`
export const Heading = styled.h1`
  color: #242424;
  width: 50%;
  margin-bottom: 1rem;
  margin-left: 1rem;
  font-size: 3.6rem;
  font-weight: 700;
  text-transform: uppercase;
`
