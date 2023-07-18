import { ABI } from "../abi/subvault.js"

export const burnBoosters = (_address, _tokenId, _amount, _category) => {
  return {
    contractAddress: _address,
    functionName: "burnBoosters",
    abi: ABI,
    params: {
      _tokenId,
      _amount,
      _category,
    },
  }
}

export const onERC1155BatchReceived = (
  _address,
  operator,
  from,
  ids,
  values,
  data,
) => {
  return {
    contractAddress: _address,
    functionName: "onERC1155BatchReceived",
    abi: ABI,
    params: {
      operator,
      from,
      ids,
      values,
      data,
    },
  }
}

export const onERC1155Received = (
  _address,
  operator,
  from,
  id,
  value,
  data,
) => {
  return {
    contractAddress: _address,
    functionName: "onERC1155Received",
    abi: ABI,
    params: {
      operator,
      from,
      id,
      value,
      data,
    },
  }
}

export const revertNftFromVaultToWalletERC1155 = (
  _address,
  _tokenId,
  _category,
  _amount,
) => {
  console.log( _address,
    typeof _tokenId,
    _category,
   typeof _amount,)
  return {
    contractAddress: _address,
    functionName: "revertNftFromVaultToWalletERC1155",
    abi: ABI,
    params: {
      _tokenId,
      _category,
      _amount,
    },
  }
}

export const revertNftFromVaultToWalletERC721 = (
  _address,
  _tokenIds,
  category,
) => {
  return {
    contractAddress: _address,
    functionName: "revertNftFromVaultToWalletERC721",
    abi: ABI,
    params: {
      _tokenIds,
      category,
    },
  }
}