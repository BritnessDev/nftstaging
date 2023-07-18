import NFTGeometricCard from "components/NFTGeometricCard"
import React, { useEffect, useState } from "react"
import { useMoralisWeb3Api, useMoralis } from "react-moralis"
import axios from "axios"
import {
  CardsContainer,
  CollectionContainer,
} from "./styles/CollectionElements"

const TOKEN_ADDRESS = [
  process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
  process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS,
]
const Cards = ({ sportType }) => {
  const [mintedNFT, setMintedNFT] = useState()
  const { user, isAuthenticated } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  useEffect(() => {
    if (isAuthenticated) {
      const options = {
        chain: "bsc testnet",
        token_addresses: TOKEN_ADDRESS,
        address: user?.attributes.ethAddress,
      }
      Web3Api.account.getNFTs(options).then(async (nft) => {
        const mintedNFT = await Promise.all(
          nft.result.map(async (item) => {
            const metaTokenUri =
              item?.token_uri?.substring(8, 12) == "ipfs"
                ? item.token_uri.replace(
                    /^.{28}/g,
                    "https://gateway.moralisipfs.com",
                  )
                : item.token_uri
            const meta = await axios.get(metaTokenUri)
            const imgSrc = meta.data.image
            const price = "1 BNB"
            const dprice = "300"
            if (sportType === "All") {
              return {
                id: item.token_id,
                imgSrc: imgSrc,
                sport: meta.data.sport ? meta.data.sport : "Basketball",
                title: meta.data.name,
                price: price, //BNB
                priceUSD: dprice,
                speed: 77,
                dexterity: 55,
                stamina: 22,
                dribbling: 36,
                finishing: 25,
                brickColor: "blue",
                address: item.token_address,
              }
            } else if (meta.data.sport === sportType) {
              return {
                id: item.token_id,
                imgSrc: imgSrc,
                sport: meta.data.sport,
                title: meta.data.name,
                price: price, //BNB
                priceUSD: dprice,
                speed: 77,
                dexterity: 55,
                stamina: 22,
                dribbling: 36,
                finishing: 25,
                brickColor: "blue",
                address: item.token_address,
              }
            } else {
              return null
            }
          }),
        )
        setMintedNFT(mintedNFT)
      })
    }
  }, [Web3Api.account, user?.attributes.ethAddress, isAuthenticated, sportType])
  return (
    <CollectionContainer>
      <CardsContainer>
        {mintedNFT?.map((card, index) => {
          if (card) {
            return (
              <NFTGeometricCard
                key={index}
                brickColor={card.brickColor}
                text={card.sport}
                playerName={card.title}
                usdValue={card.priceUSD}
                imageUrl={card.imgSrc}
                cryptoValue={card.price}
                speed={card.speed}
                dexterity={card.dexterity}
                stamina={card.stamina}
                dribbling={card.dribbling}
                finishing={card.finishing}
                buy
                buyAndSell
                transfer
              />
            )
          }
        })}
      </CardsContainer>
    </CollectionContainer>
  )
}

export default Cards
