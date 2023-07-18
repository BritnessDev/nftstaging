import styled, { css } from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 0;
`

export const CardInnerContainer = styled.div`
  width: 202px;
  height: 202px;
  border-radius: 6px;
  position: relative;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}
`

export const NetImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`

export const AttributeImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`

export const AttributeBox = styled.div`
  width: 202px;
  height: 72px;
  border-radius: 6px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  align-items: center;
  background: #fff;
  flex-direction: column;
`

export const AttributeText = styled.p`
  font-size: 1.2rem;
  color: #242424;
  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
`
export const PriceLabel = styled.div`
  display: flex;
  justify-contnet: center;
  align-items: center;
  gap: 8px;
`

export const PriceImage = styled.img`
  width: 20px;
  height: 20px;
`

export const PriceText = styled.span`
  font-weight: 700;
  font-size: 14px;
`

export const SeeButton = styled.button`
  padding: 12px 106px 12px 106px;
  color: white;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  background: #3985F5;
  position: absolute;
  margin-top: -53px;
  margin-left: 48%;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`