import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const SearchInput = styled.input`
  width: 80%;
  height: 2.5rem;
  border: none;
  outline: none;
  color: #242424;
  background-color: #e0e0e5;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`

export const IconContainer = styled.div`
  width: 20%;
  height: 20%;
  color: #242424;
  margin-right: 1rem;

  span {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
  }
`

export const AdminCard = styled.div`
  width: 100%;
  height: 15rem;
  min-width: 300px;
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e0e0e5;
  padding-bottom: 0.5rem;
`

export const SportRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 0.5rem;

  .plus-icon {
    margin-right: 0.5rem;
  }
`

export const ProgressInnerContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SportTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #242424;
  text-transform: uppercase;
`
