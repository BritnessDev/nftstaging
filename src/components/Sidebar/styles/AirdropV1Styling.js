import styled, { css } from "styled-components"

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  width: 100%;
  height: 100vh;
  background-color: #f2f3f5;
  padding: 2rem;
`

export const MainContainer = styled.div`
  width: 100%;
  height: 20%;
  background-color: #fff;
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
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

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.6rem;
`

export const InfoContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #000;
`

export const SportsContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InnerTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #242424;
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
  color: #242424;
  margin-bottom: 1rem;
  text-align: left;
  background-color: #dedede;
`

export const NftContainer = styled.div`
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

export const NftCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const Checkbox = styled.input`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #242424;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`

export const Button = styled.button`
  width: 48%;
  height: 100%;
  background-color: ${({ active }) => (active ? "#3985f5" : "#A3A5A9")};
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: 300;
  text-transform: uppercase;
`

export const ProgressStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const AcceptBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const AcceptBtn = styled.button`
  width: 274px;
  height: 48px;
  margin-top: 22px;
  background: #3985F5;
  border-radius: 4px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  /* identical to box height, or 150% */

  text-transform: uppercase;

  color: #FFFFFF;
`

export const ProgressStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProgressStepText = styled.div`
  max-width: 430px;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
  p {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    text-align: center;
    text-transform: uppercase;
    color: #000000;
  }
`


export const DigitsContainer = styled.div`
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

export const Digits = styled.p`
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  color: #3985F5;
  text-align: center;
`
