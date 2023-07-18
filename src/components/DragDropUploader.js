import { useState } from "react"
import { useDropzone } from "react-dropzone"

export const DragDropUploader = () => {
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drop files here</p>
    </div>
  )
}
