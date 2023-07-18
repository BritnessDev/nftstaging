import { useRef } from "react"
import styled from "styled-components"

const Button = styled.button`
  color: #b9fd02;
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  background-color: #292929;
  border: none;
  opacity: 0.7;
`

const FileUploader = (props) => {
  const hiddenFileInput = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
    hiddenFileInput.current.click()
  }

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0]
    props.handleFile(fileUploaded)
  }

  return (
    <>
      <Button onClick={handleClick}>+</Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  )
}

export default FileUploader
