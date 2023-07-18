export const ABI = [
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_ylNFTERC721",
        type: "address",
      },
      {
        internalType: "contract IERC1155",
        name: "_ylNFTERC1155",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_ylERC20",
        type: "address",
      },
      {
        internalType: "contract YLProxy",
        name: "_ylProxy",
        type: "address",
      },
      {
        internalType: "contract YLVault",
        name: "_vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "looser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "matchID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "settedTime",
        type: "uint256",
      },
    ],
    name: "MatchFinished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minYLTStaked",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "settedTime",
        type: "uint256",
      },
    ],
    name: "MinTokensStakedPlayUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "settedFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "settedTime",
        type: "uint256",
      },
    ],
    name: "TournamentCommissionSetted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tournamentID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "settedTime",
        type: "uint256",
      },
    ],
    name: "TournamentFeePaid",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "feePaid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_category",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_matchId",
        type: "uint256",
      },
    ],
    name: "getMatch",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "address[2]",
            name: "players",
            type: "address[2]",
          },
          {
            internalType: "address",
            name: "winner",
            type: "address",
          },
        ],
        internalType: "struct ContestGame.Match",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_player",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_decision",
        type: "uint8",
      },
    ],
    name: "getPlayerRecord",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentID",
        type: "uint256",
      },
    ],
    name: "getTournamentFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_player",
        type: "address",
      },
    ],
    name: "isElegible",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_tournamentID",
        type: "uint8",
      },
    ],
    name: "payTournamentFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_player1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_score1",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_player2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_score2",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_category",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_tournamentID",
        type: "uint8",
      },
    ],
    name: "play",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setMinStakedPlay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tournamentID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setTournamentFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokensNeededPlay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tournamentFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultAddress",
    outputs: [
      {
        internalType: "contract YLVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ylERC20",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ylNFTERC1155",
    outputs: [
      {
        internalType: "contract IERC1155",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ylNFTERC721",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ylProxy",
    outputs: [
      {
        internalType: "contract YLProxy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]
