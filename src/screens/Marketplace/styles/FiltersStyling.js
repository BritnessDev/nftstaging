import styled from "styled-components"

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    color: #000;
    font-size: 1rem;
  }

  p:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-top-right-radius: 50px;
  border: none;
  padding: 0.5rem;
`
