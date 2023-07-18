import React, { useContext, useState, useEffect } from "react"
import { CollectionNftCard } from "./CollectionNftCard"
import { LoadingOutlined, ExclamationCircleOutlined } from "@ant-design/icons"
import { Spin, Modal } from "antd"
import {
  FilterButton,
  Input,
  MainContainer,
  MainTitle,
  NftContainer,
  SearchButton,
  Select,
  StatContainer,
  StatCounter,
  TopContainer,
  TopInnerContainer,
  TopLeftContainer,
  TopRightContainer,
  BackBtn,
} from "./styles/AllNftStyling"
import { DappContext } from "context"
import { CreateOffer } from "components/Sidebar/CreateOffer"
import { useMoralis } from "react-moralis"

export const Collection = ({ moralis }) => {
  const { user } = useMoralis()
  const [isLoading, setLoading] = useState(true)
  const [filterSelected, setFilterSelected] = useState("all")
  const [onceLoad, setOnceLoad] = useState(true)
  const [filter, setFilter] = useState(false)
  const [active, setActive] = useState("1")
  const [inputField, setInputField] = useState("")
  const [nfts, setNfts] = useState([])
  const [number, setNumber] = useState(0)
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } = useContext(DappContext)
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  const handleClick = (e) => {
    if (isLoading) {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: "Loading...",
      })
    } else {
      setFilterSelected(e.target.value)
      setActive(e.target.id)
    }
  }

  const handleInputChange = (e) => {
    setInputField(e.target.value)
  }

  const handleOfferClick = () => {
    setSidebarContent(<CreateOffer closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }

  useEffect(() => {
    const loadNFTs = async () => {
      if (moralis) {
        let options = {
          chain: "bsc testnet",
          token_addresses: [
            process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
            process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS,
          ],
        }
        let list
        switch (filterSelected) {
          case "all":
            list = null
            break
          case "minted":
            list = "nList"
            break
          case "listed":
            list = "yList"
            break
        }
        const mOpt = {
          chain: "bsc testnet",
          address: user?.attributes.ethAddress,
          token_addresses: [
            process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
            process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS,
          ],
        }
        let nfts = await moralis?.fn.Web3API.account.getNFTs(mOpt)
        nfts = nfts?.result.filter(nft => nft.token_uri)
        const mintedNFT = await Promise.all(
          nfts?.map(async (item) => {
            const metaTokenUri =
              item?.token_uri?.substring(8, 12) == "ipfs"
                ? item.token_uri.replace(
                    /^.{28}/g,
                    "https://gateway.moralisipfs.com",
                  )
                : item.token_uri
            const meta = await moralis?.fn.Cloud.run("fetchNFTMetadata", {
              url: metaTokenUri,
            })
            const imgSrc = meta.data.image
            const price = "1 BNB"
            const dprice = "300"
            const isERC721 = item.contract_type === "ERC721"
            const data = { tokenId: item.token_id, isERC721 }
            const isOfferCard = await moralis?.fn.Cloud.run("isOfferNFT", data)
            const status = isOfferCard ? "Offer" : "NOT LISTED"
            const action = ["SELL", isOfferCard ? "REMOVE" : "ADD IN OFFER"]
            return {
              id: item.token_id,
              imgSrc: imgSrc,
              title: meta.data.name,
              price: price, //BNB
              priceUSD: dprice,
              brickColor: "#3985f5",
              address: item.token_address,
              status,
              action,
              isERC721,
              owner: item.owner_of,
              sport: meta.data.sport,
              date: item.last_metadata_sync,
              amount: item.amount,
              personal: meta.data.personal
                ? {
                    speed: meta.data.personal.speed,
                    dexterity: meta.data.personal.energy,
                    stamina: meta.data.personal.luck,
                    dribbling: meta.data.personal.power,
                    finishing: meta.data.personal.wizzardy,
                  }
                : null,
            }
          }),
        )
        const result = mintedNFT.filter((nft) => nft.status !== "Offer")
        setNumber(result.length)
        setNfts(result)
        setLoading(false)
      }
    }
    if ((moralis && onceLoad) || filter) {
      setLoading(true)
      loadNFTs()
      setOnceLoad(false)
      setFilter(false)
    }
  }, [moralis, filter, filterSelected, onceLoad, user?.attributes.ethAddress])

  useEffect(() => {
    if (!onceLoad) setFilter(true)
  }, [filterSelected, onceLoad])

  return (
    <MainContainer>
      <BackBtn>back</BackBtn>
      <TopContainer>
        <MainTitle>Collection</MainTitle>
      </TopContainer>
      <TopInnerContainer>
        <TopLeftContainer>
          <FilterButton
            id="1"
            active={active}
            onClick={handleClick}
            value="all"
          >
            booster pack
          </FilterButton>
          <FilterButton
            id="2"
            active={active}
            onClick={handleClick}
            value="listed"
          >
            NFT Cards
          </FilterButton>
          <FilterButton
            id="3"
            active={active}
            onClick={handleClick}
            value="minted"
          >
            additionally
          </FilterButton>
        </TopLeftContainer>
        <TopRightContainer>
          <Input
            value={inputField}
            onChange={handleInputChange}
            placeholder="Search"
          />
          <SearchButton>filters</SearchButton>
        </TopRightContainer>
      </TopInnerContainer>
      <StatContainer>
        {isLoading ? (
          <Spin indicator={antIcon} />
        ) : (
          <StatCounter>{number} NFT</StatCounter>
        )}

        <Select defaultValue="FILTER NEW ONES">
          <option value="filter new ones">FILTER NEW ONES</option>
          <option value="filter old ones">FILTER OLD ONES</option>
        </Select>
      </StatContainer>
      {!isLoading ? (
        <NftContainer>
          {nfts.map((card, index) => (
            <CollectionNftCard
              key={index}
              brickColor={card.brickColor}
              sport={card.sport}
              playerName={card.title}
              usdValue={card.priceUSD}
              imageUrl={card.imgSrc}
              cryptoValue={card.price}
              id={card.id}
              owner={card.owner}
              address={card.address}
              status={card.status}
              action={card.action}
              isERC721={card.isERC721}
              amount={card.amount}
              buy
              buyAndSell
              transfer
              personal={card.personal}
              moralis={moralis}
            />
          ))}
        </NftContainer>
      ) : (
        <Spin
          style={{ height: "500px", width: "100%", paddingTop: "150px" }}
          tip="Loading..."
        ></Spin>
      )}
    </MainContainer>
  )
}
