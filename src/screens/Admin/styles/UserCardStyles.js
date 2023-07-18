import styled from "styled-components"

export const MainContainer = styled.div`
  border: 1px solid #242424;
  border-radius: 24px;
  grid-area: 1 / 1 / 4 / 2;
  padding: 2rem;
  margin-right: 2rem;
`

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-bottom: 1rem;
`

export const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`

export const UserName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
`
