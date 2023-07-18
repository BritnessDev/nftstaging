import { ABI } from "../abi/ylvault.js"
const ENV_CONTRACT_ADDRESS = process.env.REACT_APP_YLVAULT_CONTRACT_ADDRESS



export const addNewSport = (category, playersNeeded) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "addNewSport",
    abi: ABI,
    params: {
      _category: category,
      _playersNeeded: playersNeeded,
    },
  }
}

export const setRevertNftToWalletCommision = (fee) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "setRevertNftToWalletCommision",
    abi: ABI,
    params: {
      _fee: fee,
    },
  }
}

export const createAVault = (
  _gamer,
  _category,
  teamname,
  logo
) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "createAVault",
    abi: ABI,
    params: {
      _gamer,
      _category,
      teamname,
      logo,
    },
  }
}

export const storeNftFromWalletToVaultERC1155 = (
  walletAddress,
  tokenId,
  amount,
  category
) => { 
  console.log(">>>>>EEE1155", tokenId, category)
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "storeNftFromWalletToVaultERC1155",
    abi: ABI,
    params: {
      _gamer: walletAddress,
      _tokenId: tokenId,
      _amount: amount,
      _category: category
    },
  }
}

export const storeNftFromWalletToVaultERC721 = (walletAddress, tokenIds) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "storeNftFromWalletToVaultERC721",
    abi: ABI,
    params: {
      _gamer: walletAddress,
      _tokenIds: tokenIds,
    },
  }
}

export const updateCounter = (walletAddress, category, amount) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "updateCounter",
    abi: ABI,
    params: {
      _gamer: walletAddress,
      _category: category,
      _amount: amount,
    },
  }
}

export const checkElegible = (walletAddress, category) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "checkElegible",
    abi: ABI,
    params: {
      _gamer: walletAddress,
      _category: category,
    },
  }
}

export const elegibleGamer = (walletAddress, category) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "elegibleGamer",
    abi: ABI,
    params: {
      walletAddress,
      category,
    },
  }
}

export const getSubvault = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "getSubvault",
    abi: ABI,
    params: {
      _gamer: walletAddress,
    },
  }
}

export const nFTsCounter = (walletAddress, category) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "nFTsCounter",
    abi: ABI,
    params: {
      _address:walletAddress,
      _string:category,
    },
  }
}

export const playersNeeded = (category) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "playersNeeded",
    abi: ABI,
    params: {
      category,
    },
  }
}

export const vaultContract = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "vaultContract",
    abi: ABI,
    params: {
      walletAddress,
    },
  }
}
