import { useState, useEffect } from "react"
import {
  MainContainer,
  MainContainerMobile,
  OuterContainer,
} from "./styles/SuperAdminStyling"
import { useMoralis } from "react-moralis"
import { SuperAdminProfile } from "./SuperAdminProfile"
import Chat from "screens/Chat"
import "./styles/styles.css"
import { useRef } from "react"
import { toast } from "react-toastify"
import { useMedia } from "hooks/useMedia"
import { SuperAdminProfileMobile } from "./SuperAdminProfileMobile"

export default function SuperAdmin({ moralis }) {
  const { Moralis, user } = useMoralis()
  const [profilePicture, setProfilePicture] = useState(null)
  const [tempProfileName, setTempProfileName] = useState(null)
  const isDesktop = useMedia("(min-width: 1024px)")
  const isMobile = useMedia("(max-width: 1024px)")

  useEffect(() => {
    if (user && !user.attributes.isSuperAdmin) {
      if (user.attributes.isAdmin === true) {
        return window.location.replace("/admin")
      } else {
        return window.location.replace("/myaccount")
      }
    }
  }, [user])

  const handleFileInput = async (cameraInpRef) => {
    if (cameraInpRef.current.files.length > 0) {
      const img = cameraInpRef.current.files[0]
      const file = new Moralis.File(img.name, img)
      await file.saveIPFS()
      user.set("profile_picture", file._ipfs)
      await user.save()
      setProfilePicture(file._ipfs)
      toast.success("Your profile picture has been updated successfully!", { autoClose: 2000 })
    }
  }

  const editProfile = async () => {
    const name = prompt("Please enter a new nickname")
    if (name) {
      user.set("nickname", name)
      await user.save()
      setTempProfileName(name)
      toast.success("Your nickname has been updated successfully!")
    }
  }

  return (
    <OuterContainer>
      {isDesktop && (
        <MainContainer>
          <SuperAdminProfile
            profileImage={
              profilePicture ||
              user?.attributes.profile_picture ||
              require("../../images/account/Ellipse 58.png").default
            }
            handleFileInput={handleFileInput}
            tempProfileName={tempProfileName}
            editProfile={editProfile}
            user={user}
          />
          <Chat moralis={moralis} />
        </MainContainer>
      )}
      {isMobile && (
        <MainContainerMobile>
          <SuperAdminProfileMobile
            profileImage={
              profilePicture ||
              user?.attributes.profile_picture ||
              require("../../images/account/Ellipse 58.png").default
            }
            handleFileInput={handleFileInput}
            tempProfileName={tempProfileName}
            editProfile={editProfile}
            user={user}
          />
        </MainContainerMobile>
      )}
    </OuterContainer>
  )
}
