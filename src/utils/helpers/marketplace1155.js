import { ABI } from "../abi/marketplace1155"
const ENV_CONTRACT_ADDRESS = process.env.REACT_APP_YLNFT1155MARKETPLACE_CONTRACT_ADDRESS

export const adminAuction = (tokenId, price, time, amount, data) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "adminAuction",
    abi: ABI,
    params: {
      _tokenId: tokenId,
      _price: price,
      _time: time,
      amount: amount,
      data: data,
    },
  }
}

export const adminListedNFT = (tokenId, price, amount, data) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "adminListedNFT",
    abi: ABI,
    params: {
      _tokenId: tokenId,
      _price: price,
      amount: amount,
      data: data,
    },
  }
}

export const adminPauseUnpause = (_auctionid) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "adminPauseUnpause",
    abi: ABI,
    params: {
      _auctionid,
    },
  }
}

export const adminTransferNFT = (to, itemId, amount, data) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "adminTransferNFT",
    abi: ABI,
    params: {
      _to: to,
      itemId: itemId,
      _amount: amount,
      data: data,
    },
  }
}

export const adminUnlistedNFT = (_auctionId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "adminUnlistedNFT",
    abi: ABI,
    params: {
      _auctionId,
    },
  }
}

export const adminWithdrawFromEscrowAmount = (amount) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "adminWithdrawFromEscrow",
    abi: ABI,
    params: {
      amount: amount,
    },
  }
}

export const adminWithdrawFromEscrowAddress = (to) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "adminWithdrawFromEscrow",
    abi: ABI,
    params: {
      _to: to,
    },
  }
}

export const buyAdminListedNFT = (_auctionId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "buyAdminListedNFT",
    abi: ABI,
    params: {
      _auctionId,
    },
  }
}

export const buyUserListedNFT = (_auctionId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "buyUserListedNFT",
    abi: ABI,
    params: {
      _auctionId
    },
  }
}

export const changePrice = (auctionId, price) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "changePrice",
    abi: ABI,
    params: {
      _auctionId: auctionId,
      _price: price,
    },
  }
}

export const finishAuction = (_auctionId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "finishAuction",
    abi: ABI,
    params: {
      _auctionId
    },
  }
}

export const placeBid = (auctionId, price) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "placeBid",
    abi: ABI,
    params: {
      _auctionId: auctionId,
      _price: price
    },
  }
}

export const userAuction = (tokenId, price, time, amount, data) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "userAuction",
    abi: ABI,
    params: {
      _tokenId: tokenId,
      _price: price,
      _time: time,
      amount: amount,
      data: data,
    },
  }
}

export const userListedNFT = (tokenId, price, amount, data) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "userListedNFT",
    abi: ABI,
    params: {
      _tokenId: tokenId,
      _price: price,
      amount: amount,
      data: data,
    },
  }
}

export const transferedNFTfromMarkettoVault = (itemId, vaultaddress, amount, data) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "transferedNFTfromMarkettoVault",
    abi: ABI,
    params: {
      itemId: itemId,
      _vaultaddress: vaultaddress,
      amount: amount,
      data: data,
    },
  }
}

export const withdrawNFTfromMarkettoWallet = (itemId, to, amount, data) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "withdrawNFTfromMarkettoWallet",
    abi: ABI,
    params: {
      itemId: itemId,
      _to: to,
      amount: amount,
      data: data,
    },
  }
}

export const auctionInfo = (auctionId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "auctionInfo",
    abi: ABI,
    params: {
      _auctionId: auctionId,
    },
  }
}

export const bidHistory = (auctionId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "bidHistory",
    abi: ABI,
    params: {
      _auctionId: auctionId,
    },
  }
}

export const collectedArtsList = (user) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "collectedArtsList",
    abi: ABI,
    params: {
      _user: user,
    },
  }
}

export const conductedAuctions = (user) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "conductedAuctions",
    abi: ABI,
    params: {
      _user: user,
    },
  }
}

export const participatedAuctions = (user) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "participatedAuctions",
    abi: ABI,
    params: {
      _user: user,
    },
  }
}

export const fetchAuctionItems = (user) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "fetchAuctionItems",
    abi: ABI
  }
}

export const fetchListedNFTItems = (user) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "fetchListedNFTItems",
    abi: ABI
  }
}

export const editAuctionItems = (auctionId, period, price) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "editAuctionItems",
    abi: ABI,
    params: {
      _auctionId: auctionId,
      _period: period,
      price: price,
    },
  }
}

export const editMarketItem = (itemId, price, data) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "editMarketItem",
    abi: ABI,
    params: {
      _itemId: itemId,
      _price: price,
      _data: data,
    },
  }
}

export const buyMarketListedNFT = (itemId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "buyMarketListedNFT",
    abi: ABI,
    params: {
      itemId,
    },
  }
}

export const unlistNFT = (itemId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "unlistNFT",
    abi: ABI,
    params: {
      itemId,
    },
  }
}