import { ABI } from "../abi/ylt"
const ENV_CONTRACT_ADDRESS = process.env.REACT_APP_YLT_CONTRACT_ADDRESS

export const getBalanceOf = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "balanceOf",
    abi: ABI,
    params: {
      tokenOwner: walletAddress,
    },
  }
}

export const allowance = (walletAddress, proxyAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "allowance",
    abi: ABI,
    params: {
      tokenOwner: walletAddress,
      spender: proxyAddress,
    },
  }
}

export const increaseAllowance = (walletAddress, amount) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "increaseAllowance",
    abi: ABI,
    params: {
      spender: walletAddress,
      addedTokens: amount,
    },
  }
}

export const decreaseAllowance = (walletAddress, amount) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "decreaseAllowance",
    abi: ABI,
    params: {
      spender: walletAddress,
      subtractedTokens: amount,
    },
  }
}

export const approve = (spender, tokens) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "approve",
    abi: ABI,
    params: {
      spender,
      tokens,
    },
  }
}
