export const ABI = [
  {
    "inputs": [
      {
        "internalType": "contract IERC721",
        "name": "_ylNFTERC721",
        "type": "address"
      },
      {
        "internalType": "contract IERC1155",
        "name": "_ylNFTERC1155",
        "type": "address"
      },
      {
        "internalType": "contract IERC20",
        "name": "_ylERC20",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "vaultAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gamerAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "boosterID",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "Amount",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "burnTime",
        "type": "uint256"
      }
    ],
    "name": "BoostersBurned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gamer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "vault",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositTime",
        "type": "uint256"
      }
    ],
    "name": "DepositedERC1155",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gamer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "vault",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositTime",
        "type": "uint256"
      }
    ],
    "name": "DepositedERC721",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "settedFee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "settedTime",
        "type": "uint256"
      }
    ],
    "name": "RevertNftToWalletCommissionSetted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "vaultAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gamerAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "nFTID",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "revertTime",
        "type": "uint256"
      }
    ],
    "name": "RevertedERC1155",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "vaultAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gamerAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "nFTID",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "revertTime",
        "type": "uint256"
      }
    ],
    "name": "RevertedERC721",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "gamer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "category",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "teamname",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "logo",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "subaddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "createdTime",
        "type": "uint256"
      }
    ],
    "name": "SubVaultCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_category",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "_playersNeeded",
        "type": "uint8"
      }
    ],
    "name": "addNewSport",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "vaultAddr",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "gamerAddr",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "boosterID",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "Amount",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256",
        "name": "burnTime",
        "type": "uint256"
      }
    ],
    "name": "burnBoosterMsg",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_gamer",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_category",
        "type": "string"
      }
    ],
    "name": "checkElegible",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_gamer",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_category",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "teamname",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "logo",
        "type": "string"
      }
    ],
    "name": "createAVault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "elegibleGamer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_gamer",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_category",
        "type": "string"
      }
    ],
    "name": "getSubvault",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "nFTsCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "playersNeeded",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "vaultAddr",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "gamerAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "nFTID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "revertTime",
        "type": "uint256"
      }
    ],
    "name": "revert1155Msg",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "vaultAddr",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "gamerAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "nFTID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "revertTime",
        "type": "uint256"
      }
    ],
    "name": "revert721Msg",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "revertNFTComision",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_fee",
        "type": "uint256"
      }
    ],
    "name": "setRevertNftToWalletCommision",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_gamer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_category",
        "type": "string"
      }
    ],
    "name": "storeNftFromWalletToVaultERC1155",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_gamer",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "_tokenIds",
        "type": "uint256[]"
      }
    ],
    "name": "storeNftFromWalletToVaultERC721",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "treasuryAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_gamer",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_category",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "updateCounter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "vaultContract",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ylERC20",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ylNFTERC1155",
    "outputs": [
      {
        "internalType": "contract IERC1155",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ylNFTERC721",
    "outputs": [
      {
        "internalType": "contract IERC721",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]