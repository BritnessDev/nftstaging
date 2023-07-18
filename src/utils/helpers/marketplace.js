import { ABI1, ABI2 } from "../abi/marketplace"
import Moralis from "moralis-v1"
const ENV_CONTRACT_ADDRESS1 = process.env.REACT_APP_YLMARKETPLACE_CONTRACT_ADDRESS1
const ENV_CONTRACT_ADDRESS2 = process.env.REACT_APP_YLMARKETPLACE_CONTRACT_ADDRESS2

export const minterListedNFT = (tokenId, price) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS1,
    functionName: "minterListedNFT",
    abi: ABI1,
    params: {
      _tokenId: tokenId,
      _price: price,
    },
  }
}

export const buyerListedNFT = (tokenId, price, value) => {
  console.log(tokenId, price, value)
  return {
    contractAddress: ENV_CONTRACT_ADDRESS1,
    functionName: "buyerListedNFT",
    abi: ABI1,
    msgValue: value,
    params: {
      buyerListedNFT: value,
      _tokenId: tokenId,
      _price: price,
    },
  }
}

export const depositApproval = (_user, _tokenId, _flag) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS1,
    functionName: "depositApproval",
    abi: ABI1,
    params: {
      _user,
      _tokenId,
      _flag,
    },
  }
}

export const depositNFT721 = (tokenId, price, amount) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS1,
    functionName: "depositNFT721",
    abi: ABI1,
    params: {
      _amount: amount,
      _tokenId: tokenId,
      _price: price,
    },
  }
}

export const depositTeamApproval = (_user, _tokenId, _flag) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS1,
    functionName: "depositTeamApproval",
    abi: ABI1,
    params: {
      _user,
      _tokenId,
      _flag,
    },
  }
}

export const transferFromVaultToMarketplace = (tokenId, vault, price) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS1,
    functionName: "transferFromVaultToMarketplace",
    abi: ABI1,
    params: {
      _tokenId: tokenId,
      _vault: vault,
      _price: price,
    },
  }
}

export const transferToVault = (tokenId, vault) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS1,
    functionName: "transferToVault",
    abi: ABI1,
    params: {
      _tokenId: tokenId,
      _vault: vault,
    },
  }
}

export const fetchMarketItems = () => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS1,
    functionName: "fetchMarketItems",
    abi: ABI1,
  }
}

export const editMarketItem = (itemId, price) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS1,
    functionName: "editMarketItem",
    abi: ABI1,
    params: {
      _itemId: itemId,
      _price: price,
    },
  }
}

export const buyMarketListedNFT = (itemId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS1,
    functionName: "buyMarketListedNFT",
    abi: ABI1,
    params: {
      itemId,
    },
  }
}

export const unlistNFT = (itemId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS1,
    functionName: "unlistNFT",
    abi: ABI1,
    params: {
      itemId,
    },
  }
}
// ENV_CONTRACT_ADDRESS2
export const MarketItemSale = (itemId, amount) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS2,
    functionName: "MarketItemSale",
    abi: ABI2,
    params: {
      _amount: amount,
      itemId
    },
  }
}

export const adminPauseToggle = (_itemId, _flag) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS2,
    functionName: "adminPauseToggle",
    abi: ABI2,
    params: {
      _itemId,
      _flag,
    },
  }
}

export const adminTransfer = (_amount, _to, _itemId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS2,
    functionName: "adminTransfer",
    abi: ABI2,
    params: {
      _amount,
      _to,
      _itemId,
    },
  }
}

export const allowCredential = (owner, flag) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS2,
    functionName: "allowCredential",
    abi: ABI2,
    params: {
      _mOwner: owner,
      _flag: flag,
    },
  }
}

export const bidBuyerNFT = (_itemId, _price, _period) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS2,
    functionName: "bidBuyerNFT",
    abi: ABI2,
    params: {
      _itemId,
      _price,
      _period,
    },
  }
}

export const bidMinterNFT = (_itemId, _price, _period) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS2,
    functionName: "bidMinterNFT",
    abi: ABI2,
    params: {
      _itemId,
      _price,
      _period,
    },
  }
}

export const directTransferToBuyer = (_amount, _from, _itemId, _price) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS2,
    functionName: "directTransferToBuyer",
    abi: ABI2,
    params: {
      _amount,
      _from,
      _itemId,
      _price,
    },
  }
}

export const userBidOffer = (_itemId, _price) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS2,
    functionName: "userBidOffer",
    abi: ABI2,
    params: {
      _itemId,
      _price,
    },
  }
}

export const getMarketFee = () => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS2,
    functionName: "marketfee",
    abi: ABI2,
  }
}
