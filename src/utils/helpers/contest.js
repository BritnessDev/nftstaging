import { ABI } from "../abi/ylvault.js"
const ENV_CONTRACT_ADDRESS = process.env.REACT_APP_YLCONTEST_CONTRACT_ADDRESS

export const payTournamentFee = (tournanmentID) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "payTournamentFee",
    abi: ABI,
    params: {
      _tournanmentID: tournanmentID,
    },
  }
}

export const play = (
  wallet1,
  score1,
  wallet2,
  score2,
  category,
  tournanmentID,
) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "play",
    abi: ABI,
    params: {
      _player1: wallet1,
      _score1: score1,
      _player2: wallet2,
      _score2: score2,
      _category: category,
      _tournanmentID: tournanmentID,
    },
  }
}

export const setMinStakedPlay = (amount) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "setMinStakedPlay",
    abi: ABI,
    params: {
      _amount: amount,
    },
  }
}

export const setTournamentFee = (tournanmentID, fee) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "setTournamentFee",
    abi: ABI,
    params: {
      _tournanmentID: tournanmentID,
      _fee: fee,
    },
  }
}

export const withdrawFunds = (walletAddress, amount) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "withdrawFunds",
    abi: ABI,
    params: {
      _to: walletAddress,
      _amount: amount,
    },
  }
}

export const getMatch = (category, matchId) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "getMatch",
    abi: ABI,
    params: {
      _category: category,
      _matchId: matchId,
    },
  }
}

export const getPlayerRecord = (walletAddress, decision) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "getPlayerRecord",
    abi: ABI,
    params: {
      _player: walletAddress,
      _decision: decision,
    },
  }
}

export const getTournamentFee = (tournanmentID) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "getTournamentFee",
    abi: ABI,
    params: {
      _tournanmentID: tournanmentID,
    },
  }
}

export const isElegible = (walletAddress) => {
  return {
    contractAddress: ENV_CONTRACT_ADDRESS,
    functionName: "isElegible",
    abi: ABI,
    params: {
      _player: walletAddress,
    },
  }
}
