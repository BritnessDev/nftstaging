/* eslint-disable prettier/prettier */
import { ABI } from "../abi/ylnft1155"
const EVN_YLNFT1155_ADDRESS = process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS

export const lazy1155MintNft = (metadataURL, sport, cnft, amount) => {
  return {
    chain: "BSC",
    contractAddress: EVN_YLNFT1155_ADDRESS,
    functionName: "lazyCreateToken",
    abi: ABI,
    msgValue: 1000000000,
    params: {
      lazyCreateToken: 0.001,
      _tokenURI: metadataURL,
      _sport: sport,
      _cnft: cnft,
      _amount: amount,
    },
  }
}

export const create1155Token = (metadataURL, sport, cnft, amount) => {
  return {
    chain: "BSC",
    contractAddress: EVN_YLNFT1155_ADDRESS,
    functionName: "create1155Token",
    abi: ABI,
    params: {
      _tokenURI: metadataURL,
      _sport: sport,
      _cnft: cnft,
      _amount: amount,
    },
  }
}

export const ylnft1155Transfer = (to, tokenId, amount) => {
  return {
    chain: "BSC",
    contractAddress: EVN_YLNFT1155_ADDRESS,
    functionName: "ylnft1155Transfer",
    abi: ABI,
    params: {
      _to: to,
      _tokenId: tokenId,
      _amount: amount,
    },
  }
}

export const setApprovalForAll = (operator, approved) => {
  return {
    chain: "BSC",
    contractAddress: EVN_YLNFT1155_ADDRESS,
    functionName: "setApprovalForAll",
    abi: ABI,
    params: {
      operator,
      approved,
    },
  }
}

export const tokenURI = (tokenId) => {
  return {
    chain: "BSC",
    contractAddress: EVN_YLNFT1155_ADDRESS,
    functionName: "uri",
    abi: ABI,
    params: {
      tokenId,
    },
  }
}

export const burnBatch = (account, ids, values) => {
  return {
    chain: "BSC",
    contractAddress: EVN_YLNFT1155_ADDRESS,
    functionName: "burnBatch",
    abi: ABI,
    params: {
      account,
      ids,
      values
    },
  }
}
