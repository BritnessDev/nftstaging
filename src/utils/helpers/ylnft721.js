/* eslint-disable prettier/prettier */
import { ABI } from "../abi/ylnft721"

const EVN_YLNFT721_ADDRESS = process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS

export const lazyMintNft = (metadataURL, sport, cnft) => {
  return {
    chain: "BSC",
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "lazyCreateToken",
    abi: ABI,

    msgValue: 1000000000,

    params: {
      lazyCreateToken: 0.001,
      _tokenURI: metadataURL,
      _sport: sport,
      _cnft: cnft,
    },
  }
}

export const createToken = (metadataURL, sport, cnft) => {
  return {
    chain: "BSC",
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "createToken",
    abi: ABI,
    params: {
      tokenURI: metadataURL,
      _sport: sport,
      _cnft: cnft,
    },
  }
}

export const setProxyAddress = (_proxyAddress) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "setProxyAddress",
    abi: ABI,
    params: {
      _proxyAddress,
    },
  }
}

export const setMarketAddress = (_marketAddress) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "setMarketAddress",
    abi: ABI,
    params: {
      _marketAddress,
    },
  }
}

export const setCategoryAmount = (_sport, _cnft, _amount) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "setCategoryAmount",
    abi: ABI,
    params: {
      _sport,
      _cnft,
      _amount,
    },
  }
}

export const deleteCategory = (_sport, _cnft) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "deleteCategory",
    abi: ABI,
    params: {
      _sport,
      _cnft,
    },
  }
}

export const getCategoryCount = (_sport, _cnft) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "getCategoryCount",
    abi: ABI,
    params: {
      _sport,
      _cnft,
    },
  }
}

export const getCategoryAmount = (_sport, _cnft) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "getCategoryAmount",
    abi: ABI,
    params: {
      _sport,
      _cnft,
    },
  }
}

export const setPauseContract = (_yltpause) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "setPauseContract",
    abi: ABI,
    params: {
      _yltpause,
    },
  }
}

export const getPauseContract = () => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "getPauseContract",
    abi: ABI,
    params: {},
  }
}

export const ylnft721Transfer = (_to, _tokenId) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "ylnft721Transfer",
    abi: ABI,
    params: {
      _to,
      _tokenId,
    },
  }
}

export const getCurrentTokenId = () => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "getCurrentTokenId",
    abi: ABI,
    params: {},
  }
}

export const incrementTokenId = () => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "incrementTokenId",
    abi: ABI,
    params: {},
  }
}

export const withdraw = (_to, _value) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "withdraw",
    abi: ABI,
    params: {
      _to,
      _value,
    },
  }
}

export const burnNFT721 = (_tokenId) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "burnNFT721",
    abi: ABI,
    params: {
      _tokenId,
    },
  }
}

export const supportsInterface = (interfaceId) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "supportsInterface",
    abi: ABI,
    params: {
      interfaceId,
    },
  }
}

export const burnNFT721Signature = (_tokenId) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "burnNFT721Signature",
    abi: ABI,
    params: {
      _tokenId,
    },
  }
}

export const tokenURI = (tokenId) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "tokenURI",
    abi: ABI,
    params: {
      tokenId,
    },
  }
}

export const approve = (to, tokenId) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "approve",
    abi: ABI,
    params: {
      to,
      tokenId,
    },
  }
}

export const getApproved = (tokenId) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "getApproved",
    abi: ABI,
    params: {
      tokenId,
    },
  }
}

export const ownerOf = (tokenId) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "ownerOf",
    abi: ABI,
    params: {
      tokenId,
    },
  }
}

export const transferFrom = (from, to, tokenId) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "transferFrom",
    abi: ABI,
    params: {
      from,
      to,
      tokenId,
    },
  }
}

export const updateTokenURI = (editor, tokenId, tokenURI) => {
  return {
    contractAddress: EVN_YLNFT721_ADDRESS,
    functionName: "updateTokenURI",
    abi: ABI,
    params: {
      tokenId,
      tokenURI,
    },
  }
}
