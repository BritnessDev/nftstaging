import React, { useContext, useState, useEffect, useCallback } from "react"
import { NftCard } from "screens/Admin/NftCard"
import { ExclamationCircleOutlined } from "@ant-design/icons"
import { Modal } from "antd"
import {
  Button,
  ButtonContainer,
  FilterButton,
  Input,
  MainContainer,
  MainTitle,
  NftContainer,
  SearchButton,
  StatContainer,
  StatCounter,
  TopContainer,
  TopInnerContainer,
  TopLeftContainer,
  TopRightContainer,
  BackBtn,
} from "./styles/AllNftStyling"
import { Select } from "antd"
import { DappContext } from "context"
import { useHistory } from "react-router"
import { CreateOffer } from "components/Sidebar/CreateOffer"
import { AllNftFilter } from "components/Sidebar/AllNftFilter"
import { useMoralis } from "react-moralis"
import { Loading } from "notiflix"

export const AllNft = ({ moralis }) => {
  const { user } = useMoralis()
  const history = useHistory()
  const [isLoading, setLoading] = useState(true)
  const [filterSelected, setFilterSelected] = useState("all")
  const [onceLoad, setOnceLoad] = useState(true)
  const [active, setActive] = useState("1")
  const [allNfts, setAllNfts] = useState([])
  const [searchNfts, setSearchNfts] = useState([])
  const [number, setNumber] = useState(0)
  const [isSort, setSort] = useState(true)
  const [searchKey, setSearchKey] = useState("")
  const [filterAction, setFilterAction] = useState(false)
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } =
    useContext(DappContext)

  const loadNFTs = async () => {
    const type = "admin"
    const address = user?.attributes.ethAddress
    const resFetch721 = await moralis?.fn.Cloud.run("Fetch721", {
      type,
      address,
    })
    const resFetch1155 = await moralis?.fn.Cloud.run("Fetch1155", {
      type,
      address,
    })
    const result = resFetch721.concat(resFetch1155)
    const listedNFT = await Promise.all(
      result?.map(async (item) => {
        const isERC721 = item.className === "NFT721"
        const tokenId = item?.attributes.tokenId.toString()
        const token_uri = item?.attributes.token_uri
        const meta = await moralis?.fn.Cloud.run("fetchNFTMetadata", {
          url: token_uri,
        })
        const imgSrc = meta.data.image
        const price = moralis?.fn.Units.FromWei(
          item?.attributes.price.toString(),
        )
        const dprice =
          moralis?.fn.Units.FromWei(item?.attributes.price.toString()) / 100
        const type = item?.attributes.type
        let status = ""
        let itemId = tokenId
        let action = []
        if (type == "minted") {
          status = "NOT LISTED"
          action = ["SELL", "ADD IN OFFER"]
        } else if (type == "auction") {
          status = "Auction"
          action = ["EDIT", "REMOVE"]
          itemId = item?.attributes.itemId
        } else if (type == "offer") {
          status = "Offer"
          action = ["", "REMOVE"]
        } else if (type == "marketplace") {
          status = "MARKETPLACE"
          action = [
            "EDIT",
            item?.attributes.market_state == "0" ? "PAUSE" : "UNPAUSE",
          ]
          itemId = item?.attributes.itemId
        }
        return {
          id: tokenId,
          itemId,
          imgSrc: imgSrc,
          title: meta.data.name,
          price: price, //BNB
          priceUSD: dprice,
          brickColor: "#3985f5",
          address: process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
          status,
          type,
          action,
          isERC721,
          owner: item?.attributes.owner,
          sport: meta.data.sport,
          date: item?.attributes.updatedAt,
          amount: isERC721 ? 1 : item?.attributes.amount,
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
    return listedNFT
  }

  const loadloadInitNFTsNFTs = useCallback(async () => {
    if (moralis) {
      setLoading(true)
      Loading.standard()
      let result = await loadNFTs()
      result.sort((a, b) => {
        return isSort
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date)
      })
      setAllNfts(result)
      setNumber(result.length)
      setSearchNfts(result)
      setLoading(false)
      Loading.remove()
    }
  }, [loadNFTs])

  const loadFilterNFTs = useCallback(async () => {
    if (moralis) {
      setLoading(true)
      Loading.standard()
      let result
      if (filterSelected == "all") {
        result = allNfts
      } else {
        result = allNfts.filter((nft) => nft.type == filterSelected)
      }
      if (searchKey !== "")
        result = allNfts.filter((nft) => {
          const word = nft.title.toLowerCase()
          return word.search(searchKey.toLowerCase()) !== -1
        })
      result.sort((a, b) => {
        return isSort
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date)
      })
      setNumber(result.length)
      setSearchNfts(result)
      setLoading(false)
      Loading.remove()
    }
  }, [allNfts, filterSelected, isSort, searchKey])

  useEffect(() => {
    if (moralis && !onceLoad && filterAction) {
      loadFilterNFTs()
      setFilterAction(false)
    }
  }, [loadFilterNFTs, onceLoad, filterAction])

  useEffect(() => {
    if (moralis && onceLoad) {
      loadloadInitNFTsNFTs()
      setOnceLoad(false)
    }
  }, [moralis, onceLoad, loadloadInitNFTsNFTs])

  const handleButtonFilter = (e) => {
    if (isLoading) {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: "Loading...",
      })
    } else {
      setFilterSelected(e.target.value)
      setActive(e.target.id)
      setFilterAction(true)
    }
  }

  const handleOfferClick = () => {
    setSidebarContent(
      <CreateOffer moralis={moralis} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  const handleFilter = (event) => {
    setSidebarContent(<AllNftFilter closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }

  const handleSortChange = () => {
    setSort(!isSort)
    setFilterAction(true)
  }

  const handleSearchChange = (e) => {
    if (e.keyCode === 13 || e.target.value === "") {
      setSearchKey(e.target.value)
      setFilterAction(true)
    }
  }

  return (
    <MainContainer>
      <BackBtn
        onClick={() => {
          history.push("/admin")
        }}
      >
        back
      </BackBtn>
      <TopContainer>
        <MainTitle>all nft</MainTitle>
        <ButtonContainer>
          <Button>create set</Button>
          <Button onClick={handleOfferClick}>create offer</Button>
        </ButtonContainer>
      </TopContainer>
      <TopInnerContainer>
        <TopLeftContainer>
          <FilterButton
            id="1"
            active={active}
            onClick={handleButtonFilter}
            value="all"
            disabled={isLoading}
          >
            all
          </FilterButton>
          <FilterButton
            id="2"
            active={active}
            onClick={handleButtonFilter}
            value="minted"
            disabled={isLoading}
          >
            minted
          </FilterButton>
          <FilterButton
            id="3"
            active={active}
            onClick={handleButtonFilter}
            value="auction"
            disabled={isLoading}
          >
            auction
          </FilterButton>
          <FilterButton
            id="4"
            active={active}
            onClick={handleButtonFilter}
            value="marketplace"
            disabled={isLoading}
          >
            marketplace
          </FilterButton>
          <FilterButton
            id="5"
            active={active}
            onClick={handleButtonFilter}
            value="offer"
            disabled={isLoading}
          >
            offer
          </FilterButton>
        </TopLeftContainer>
        <TopRightContainer>
          <Input onKeyUp={handleSearchChange} placeholder="Search" />
          <SearchButton onClick={handleFilter}>filters</SearchButton>
        </TopRightContainer>
      </TopInnerContainer>
      <StatContainer>
        <StatCounter>{number} NFT</StatCounter>
        <Select
          defaultValue="FILTER NEW ONES"
          disabled={isLoading}
          onChange={handleSortChange}
        >
          <Select.Option value="filter new ones">FILTER NEW ONES</Select.Option>
          <Select.Option value="filter old ones">FILTER OLD ONES</Select.Option>
        </Select>
      </StatContainer>
      <NftContainer>
        {searchNfts.map((card, index) => (
          <NftCard
            key={index}
            brickColor={card.brickColor}
            sport={card.sport}
            playerName={card.title}
            usdValue={card.priceUSD}
            imageUrl={card.imgSrc}
            cryptoValue={card.price}
            id={card.id}
            itemId={card.itemId}
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

    </MainContainer>
  )
}