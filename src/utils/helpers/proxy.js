import { ABI } from "../abi/proxy.js"
const ENV_CONTRACT_ADDRESS = process.env.REACT_APP_YLPROXY_CONTRACT_ADDRESS

export const getOwner = () => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "owner",
    abi: ABI,
    params: {},
  }
}

export const transferOwnerShip = (newAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "transferOwnership",
    abi: ABI,
    params: {
      newOwner: newAddress,
    },
  }
}

export const depositYLT = (amount) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "depositYLT",
    abi: ABI,
    params: {
      _amount: amount,
    },
  }
}

export const changePermissionsFunc = (walletAddress, funcName, checked) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: funcName,
    abi: ABI,
    params: {
      _address: walletAddress,
      _value: checked,
    },
  }
}

export const isMintableAccount = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "isMintableAccount",
    abi: ABI,
    params: {
      _address: walletAddress,
    },
  }
}

export const mintableAccounts = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "mintableAccounts",
    abi: ABI,
    params: {
      _address: walletAddress,
    },
  }
}

export const pausableAccounts = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "pausableAccounts",
    abi: ABI,
    params: {
      _address: walletAddress,
    },
  }
}

export const burnableAccounts = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "burnableAccounts",
    abi: ABI,
    params: {
      _address: walletAddress,
    },
  }
}

export const transferableAccounts = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "transferableAccounts",
    abi: ABI,
    params: {
      _address: walletAddress,
    },
  }
}

export const isBurnAccount = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "isBurnAccount",
    abi: ABI,
    params: {
      _address: walletAddress,
    },
  }
}

export const isTransferAccount = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "isTransferAccount",
    abi: ABI,
    params: {
      _address: walletAddress,
    },
  }
}

export const isPauseAccount = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "isPauseAccount",
    abi: ABI,
    params: {
      _address: walletAddress,
    },
  }
}

export const getStakedAmount = (walletAddress, yltAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "stakedAmount",
    abi: ABI,
    params: {
      walletAddress: walletAddress,
      yltAddress: yltAddress,
    },
  }
}

export const sufficientstakeamount = () => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "sufficientstakeamount",
    abi: ABI,
    params: {},
  }
}

export const withdrawYLT = (to, amount) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "withdrawYLT",
    abi: ABI,
    params: {
      _to: to,
      _amount: amount,
    },
  }
}

export const setSufficientAmount = (_amount) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "setSufficientAmount",
    abi: ABI,
    params: {
      _amount,
    },
  }
}
