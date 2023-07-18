import { useState } from "react"
import { PlusOutlined } from "@ant-design/icons"
import { Modal, Upload, Space, Spin } from "antd"

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

const UploadContainer = ({ loading, fileList, setFileList, uploadRef }) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState("")
  const [previewTitle, setPreviewTitle] = useState("")
  const handleCancel = () => setPreviewOpen(false)
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    )
  }
  const handleChange = ({ fileList: newFileList }) => {
    newFileList?.map((file) => {
      if (file.status === "error") file.status = "done"
    })
    setFileList(newFileList)
  }
  const uploadButton = (
    <div ref={uploadRef}>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  )
  return (
    <>
      <Upload
        action=""
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        multiple
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {loading && (
        <Space
          size="middle"
          style={{
            zIndex: 99,
            position: "absolute",
            right: 0,
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Spin
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Space>
      )}
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  )
}

export default UploadContainer
