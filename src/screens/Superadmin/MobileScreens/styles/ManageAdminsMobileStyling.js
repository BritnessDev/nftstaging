import styled from "styled-components"

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const MainTitle = styled.h1`
  width: 100%;
  font-size: 1.8rem;
  font-weight: 600;
  color: #242424;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: left;
`

export const Btn = styled.button`
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  border: 1px solid #3985f5;
  color: #3985f5;
  background-color: transparent;
  border-radius: 5px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border: none;
  outline: none;
  color: #242424;
  background-color: #e0e0e5;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`

export const StatsContainer = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
  margin-top: 1rem;
`

export const SelectMenu = styled.select`
  width: 40%;
  height: 2rem;
  border: none;
  outline: none;
  color: #3985f5;
  background-color: transparent;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
`

export const Counter = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
`
