import styled from "styled-components"

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const MainTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  width: 100%;
  text-align: left;
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
`

export const Nickname = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`

export const OptionsContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  width: 100%;
  height: 50%;
  margin-bottom: 1rem;
  position: relative;

  .switch {
    position: absolute;
    right: 1rem;
  }
`

export const Btn = styled.button`
  background-color: #3985f5;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  width: 100%;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.8rem;
`
