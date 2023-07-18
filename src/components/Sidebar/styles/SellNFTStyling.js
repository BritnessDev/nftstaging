import styled from "styled-components"
import { Input as AInput } from 'antd';

export const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f3f5;
  padding: 1.5rem;
  overflow-y: auto;
`

export const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SidebarTitle = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

export const CardContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
`

export const InnerContainer = styled.div`
  width: 100%;
  height: 95%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`

export const NFTImg = styled.img`
  width: 40%;
  height: 90%;
`

export const RightContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 1rem;
`

export const SportTitle = styled.p`
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #242424;
`

export const NftTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
`

export const DetailsContainer = styled.div`
  width: 50%;
  height: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 0.3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-right: 0.5rem;
  background-color: #f2f3f5;
`
export const IconImg = styled.img`
  height: 0.7rem;
  width: 0.7rem;
`

export const WeightText = styled.p`
  color: #242424;
  font-size: xx-small;
`

export const ActionBtn = styled.button`
  width: 100%;
  height: 2.5rem;
  background-color: #3985f5;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 1rem;

  ${({ outlined }) =>
    outlined &&
    `
    background-color: transparent;
    border: 1px solid #3985f5;
    color: #3985f5;
    border-radius: 5px;
    cursor: pointer;
  `}
`

export const TopHeaderText = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  width: 100%;
  height: 1.5rem;
  text-align: center;
  background-color: rgba(57, 133, 245, 0.2);
  position: absolute;
  top: 0;
  width: 100%;
`

export const BottomContainer = styled.div`
  width: 100%;
  height: 30vh;
  margin-top: 1rem;
`

export const InnerTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #242424;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const InputLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 300;
  color: #242424;
  margin-top: 2rem;
`

export const AnttLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 300;
  color: #242424;
`

export const DateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`

export const AntInput = styled(AInput)`
  width: 100%;
  height: 2rem;
  border: none;
  outline: none;
  background-color: #dedede;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  outline: none;
  background-color: #dedede;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.8rem;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const AuctionContainer = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 1rem;
`
