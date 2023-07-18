import { ABI } from "../abi/auction"
const ENV_CONTRACT_ADDRESS = process.env.REACT_APP_YLAUCTION_CONTRACT_ADDRESS

export const BuyerListNFT = (
  tokenId,
  price,
  amount,
  limitPrice,
  period,
  isERC721,
) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "BuyerListNFT",
    abi: ABI,
    params: {
      _tokenId: tokenId,
      _price: price,
      _amount: amount,
      _limitPrice: limitPrice,
      _period: period,
      _isERC721: isERC721,
    },
  }
}

export const MinterListNFT = (
  tokenId,
  price,
  amount,
  limitPrice,
  period,
  isERC721,
) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "MinterListNFT",
    abi: ABI,
    params: {
      _tokenId: tokenId,
      _price: price,
      _amount: amount,
      _limitPrice: limitPrice,
      _period: period,
      _isERC721: isERC721,
    },
  }
}

export const fetchAuctionItems = () => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "fetchAuctionItems",
    abi: ABI,
    params: {},
  }
}

export const userBidOffer = (auctionId, price, amount, isERC721) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "userBidOffer",
    abi: ABI,
    params: {
      _auctionId: auctionId,
      _price: price,
      _amount: amount,
      _isERC721: isERC721,
    },
  }
}

export const withdrawNFTInstant = (auctionId, amount, isERC721) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "withdrawNFTInstant",
    abi: ABI,
    params: {
      _auctionId: auctionId,
      _amount: amount,
      _isERC721: isERC721,
    },
  }
}

export const editAuctionItems = (auctionId, period, limitPrice) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "editAuctionItems",
    abi: ABI,
    params: {
      _auctionId: auctionId,
      _period: period,
      _limitPrice: limitPrice,
    },
  }
}
