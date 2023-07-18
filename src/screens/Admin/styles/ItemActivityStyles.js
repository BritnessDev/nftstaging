import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const CardTitle = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

export const FiltersSelect = styled.select`
  width: 100%;
  height: 3rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #e7e9ed;
`

export const TableContainer = styled.div`
  width: 100%;
  max-height: 35vh;
  overflow-y: scroll;
  margin-top: 1rem;
`
