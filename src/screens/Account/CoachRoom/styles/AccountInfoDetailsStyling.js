import styled from "styled-components"
import DT from "../../../../static/design-token.json"

export const AccountInfoDetailsStyling = styled.div`
  border: 1px solid white;
  border-radius: 20px;
  height: 100%;
  margin-right: 2rem;
  padding: 28px 28px 28px 4px;
  position: relative;
  width: 90%;
  background-color: white;
`
export const BackgroundImage = styled.img`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

// 1st row
export const FirstRow = styled.div`
  align-items: start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  margin-left: 0.8rem;
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
  }
`

export const LeftSide = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  height: 100%;
  justify-content: space-between;
  position: relative;
`

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  min-width: 96px;
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    min-width: 78px;
  }
`

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 96px;
  width: 96px;
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    height: 78px;
    width: 78px;
  }
`

export const CameraContainer = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 32px;
  background: #242424;
  opacity: 0.5;
  display: flex;
  justify-content: center;
`

export const Camera = styled.img`
  position: absolute;
  bottom: 10px;
  width: 16px;
  height: 16px;
`

export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`

export const SettingButtonContainer = styled.div`
  @media only screen and (max-width: ${DT.breakpoints.lg}) {
    width: 100%;
    display: flex;
    justify-content: end;
  }
`

export const SettingButton = styled.button`
  color: #3985F5;
  padding: 7px 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid #3985F5;
  border-radius: 44px;
  cursor: pointer;
  background-color: white;
  &:hover {
    background-color: #3985F5; // Fix the typo here
    color: white;
  }
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    font-size: 12px;
    padding: 5px 8px;
    gap: 7px;
  }
`

export const ProfileName = styled.div`
  color: #000;
  display: flex;
  gap: 5px;
  align-items: center;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 64px;
  @font-face {
    src: url('/font/IBM_Plex_Mono/IBMPlexMono-Medium.ttf');
    font-family: 'IBM Plex Mono';
  };
  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
    font-size: 30px;
  }
  @media only screen and (max-width: ${DT.breakpoints.xl}) {
    font-size: 20px;
  }
`

export const ChooseAccountText = styled.p`
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #3985F5;
  text-align: center;
  max-width: 105px;
  cursor: pointer;
`

export const RightSide = styled.div`
  align-items: center;
  border-radius: 20px;
  border: 1px solid #3e4628;
  display: flex;
  height: 100%;
  padding: 0.8rem;
`

export const SettingsIcon = styled.img`
  color: #b9fd02;
  height: 1rem;
  margin-right: 0.2rem;
  width: 1.5rem;
`

export const SettingsText = styled.p`
  color: #b9fd02;
  font-size: 1rem;
  text-transform: uppercase;
`

// 2nd row
export const SecondRow = styled.div`
  align-items: start;
  border-radius: 20px;
  display: flex;
  height: 80%;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`

export const AccountBalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`

export const AccountBalance = styled.div`
  align-self: flex-start;
  background-color: #242424;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-between;
  width: 100%;
  padding: 40px 28px 10px 28px;
  background: linear-gradient( 13deg,rgb(61 157 208) 0%,rgb(54 65 140) 31%,rgb(72 63 125) 80%,rgb(92 79 139) 100% );
`

export const ConnectContainer = styled.div`
  height: 24px;
  width: fit-content;
  margin: auto;
  margin-top: 40px;
  border-bottom: 1px solid #3985F5;
`

export const AdminButtonContainer = styled.div`
  width: 100%;
  padding: 28px;
  display: flex;
  justify-content: center;
`

export const AdminButton = styled.button`
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px;
  padding: 35px 0;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, rgba(235,147,149,1) 0%, rgba(238,196,181,1) 52%, rgba(226,199,151,1) 100%);
`

export const ConnectWalletText = styled.a`
  text-transform: uppercase;
  color: #242424;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`

export const BalanceContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
`

export const TokenSymbol = styled.img`
  height: 40px;
  width: 40px;
`

export const TokenBalance = styled.p`
  font-size: 32px;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 700;
  color: #FFFFFF;
`

export const CashBalance = styled.p`
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;
  opacity: 0.72;
`

export const ButtonTopUp = styled.a`
  border-radius: 4px;
  color: #3985F5;
  font-size: 1rem;
  margin: auto;
  margin-bottom: 0.8rem;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  font-weight: 500;
  background-color: white;
  margin-top: 40px;
  &:hover {
    background-color: #33d1ca;
    color: white;
  }
`
export const MyNFTCardsContainer = styled.div`
  background: #E7E9ED;
  border-radius: 10px;
  height: 100%;
  position: relative;
  width: 50%;
`

export const MyNFTCardsImage = styled.img`
  height: 75%;
  left: 0;
  position: absolute;
  bottom: 15px;
  width: auto;
`

export const NFTTitleContainer = styled.div`
  align-items: center;
  display: flex;
  color: #242424;
  justify-content: space-between;
  width: 90%;
`

export const NFTCardsTitle = styled.p`
  font-size: 1.5rem;
  color: #242424;
  font-weight: bold;
  padding: 1.5rem 1.5rem;
  text-transform: uppercase;
`

export const ArrowRight = styled.img`
  color: #242424;
`
