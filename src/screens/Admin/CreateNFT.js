import { DappContext } from "context"
import { useCallback, useContext, useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
import { Link } from "react-router-dom"
import { FormNFTCard } from "./components/FormNFTCard"

import {
  MainContainer,
  MainHeading,
  CenterSide,
  TabContainer,
  TabButton,
  FormContainer,
} from "./styles/CreateNFTStyles"
import { creatNFTTabs } from "utils/dummyData"

const CreateNFT = () => {
  const { user } = useMoralis()

  const { flagHeightAuto, setFlagHeightAuto } = useContext(DappContext)

  const [nftType, setNftType] = useState("Player")

  useEffect(() => {
    setFlagHeightAuto(true)
  }, [setFlagHeightAuto])

  const selectNftType = useCallback((e) => {
    setNftType(e)
  }, [])

  return (
    <MainContainer>
      <CenterSide>
        <Link to={user?.attributes.isSuperAdmin ? "/admin/super" : "/admin"} style={{ color: "#6A6A69", fontSize: "16px" }} >
          &#8592; Back
        </Link>
        <MainHeading>Create NFT</MainHeading>
        <TabContainer>
          {
            creatNFTTabs.map((item, key) => (
              item.roles.includes(user?.attributes.role) &&
              <TabButton onClick={() => selectNftType(item.value)} isFocused={nftType === item.value} key={key} >
                {item.value}
              </TabButton>
            ))
          }
        </TabContainer>
        <FormContainer>
          <FormNFTCard propNftType={nftType} />
        </FormContainer>
      </CenterSide>
    </MainContainer>
  )
}

export default CreateNFT
