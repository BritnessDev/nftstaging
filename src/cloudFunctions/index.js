/******/
(() => { // webpackBootstrap
  /******/ 	/* webpack/runtime/compat */
  /******/
  /******/
  if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  HOLD_USER = {}
  const SUPER_ADMIN = "yg8H50yOI9OxrjsTfz1fnqNf"
  const NFT721_ADDRESS = "0xaB49E7F2be2776253Cf13CF2FCaD5eb2cD18eD24"
  const YLMARKETPLACE_ADDRESS1 = "0x7feFB46450eEF6010420078e90331Ba6963b3ecf"
  const YLAUCTION_CONTRACT_ADDRESS = "0xC711404C83fB48F19F541c025D171a522C690D86"
  const YLNFT1155MARKETPLACE_CONTRACT_ADDRESS = "0x0150319aA90850327FF60E67A3acE7aA3009777C"
  const ADMIN_WALLET = "0x59f9AbF5bE3081337A5801933FfCca9E590fA66C"
  Moralis.Cloud.define("getUsers", async (request) => {
    const query = new Moralis.Query("_User", { useMasterKey: true })
    const results = await query.find({ useMasterKey: true })
    return results
  })

  Moralis.Cloud.define("setApiRateLimit", async () => {
    await Moralis.settings.setAPIRateLimit({
      anonymous: 3500,
      authenticated: 3500,
      windowMs: 60000,
    })
  })

  Moralis.Cloud.define("getSuperAdminTokens", async (request) => {
    const superAdminAddress = request.params.superAdminAddress
    const options = { chain: "binance testnet", address: superAdminAddress }
    const balance = await Moralis.Web3API.account.getTokenBalances(options)
    return balance
  })

  Moralis.Cloud.define("setHoldUser", (request) => {
    const userId = request.params.userId
    HOLD_USER[userId] = request.params.flag
  })

  Moralis.Cloud.define("getHoldUser", (request) => {
    const userId = request.params.userId
    return HOLD_USER[userId]
  })

  Moralis.Cloud.define("getAllNFTs", async (request) => {
    let nListedNfts = []
    const options = request.params.options
    // const list = request.params.list
    let addresses = []
    const fetchNFT = async () => {
      const users = await Moralis.Cloud.run("getAdmin")
      for (let i = 0; i < users.length; i++) {
        if (users[i]?.attributes.accounts) {
          addresses = addresses.concat(users[i]?.attributes.accounts)
        }
      }
      for (let i = 0; i < addresses.length; i++) {
        if (addresses[i] != null) {
          const mOpt = {
            chain: options.chain,
            address: addresses[i],
            token_addresses: options.token_addresses,
          }
          const tmp = await Moralis.Web3API.account.getNFTs(mOpt)
          nListedNfts = nListedNfts.concat(tmp.result)
        }
      }
      return nListedNfts
    }
    return await fetchNFT()
    // if (list === "nList") {
    //   return await abc()
    // } else {
    //   options.address = request.params.marketAddress
    //   let yListedNfts = await Moralis.Web3API.account.getNFTs(options)
    //   return list === null
    //     ? yListedNfts.result.concat(await abc())
    //     : yListedNfts.result
    // }
  })

  Moralis.Cloud.define("getAdmin", async (request) => {
    const query = new Moralis.Query("_User", { useMasterKey: true })
    query.equalTo("isAdmin", true)
    const results = await query.find({ useMasterKey: true })
    return results
  })

  Moralis.Cloud.define("setAdmin", async (request) => {
    const query = new Moralis.Query("_User", { useMasterKey: true })
    query.equalTo("ethAddress", request.params.ethAddress)
    const user = await query.first({ useMasterKey: true })
    if (user) {
      user.set("isAdmin", true)
      user.save(null, { useMasterKey: true })
      return true
    }
  })

  Moralis.Cloud.define("unsetAdmin", async (request) => {
    const query = new Moralis.Query("_User", { useMasterKey: true })
    query.equalTo("ethAddress", request.params.ethAddress)
    const user = await query.first({ useMasterKey: true })
    if (user) {
      user.set("isAdmin", false)
      user.save(null, { useMasterKey: true })
      return true
    }
  })

  Moralis.Cloud.define("searchEmail", async (request) => {
    const query = new Moralis.Query("_User", { useMasterKey: true })
    query
      .notEqualTo("ethAddress", request.params.ethAddress)
      .equalTo("email", request.params.email)
    const user = await query.find({ useMasterKey: true })
    if (user.length > 0) return true
    else return false
  })

  Moralis.Cloud.define("deleteRecord", async (request) => {
    const query = new Moralis.Query("_User", { userMasterKey: true })
    query.equalTo("objectId", request.params.id)
    const user = await query.first({ useMasterKey: true })

    if (user) {
      user.destroy({ useMasterKey: true })
      const query1 = new Moralis.Query("_EthAddress", { userMasterKey: true })
      query1.equalTo("objectId", user.attributes.ethAddress)
      const eth = await query1.first({ useMasterKey: true })
      if (eth) {
        eth.destroy({ useMasterKey: true })
        return true
      }
    }
  })

  Moralis.Cloud.define("addEmail", async (request) => {
    const query = new Moralis.Query("_User", { userMasterKey: true })
    query.equalTo("objectId", request.params.id)
    const user = await query.first({ useMasterKey: true })
    if (user) {
      user.set("email", request.params.email)
      user.save(null, { useMasterKey: true })
      return true
    }
  })

  Moralis.Cloud.beforeSave("Minted721_Log", async (request) => {
    const confirmed = request.object.get("confirmed")
    if (confirmed) {
      const d = new Date(Date.now())
      const ethAddress = request.object.get("minter")
      const tokenId = request.object.get("tokenId")
      const token_uri = request.object.get("tokenUri")
      const title = "New NFT is minted"
      const description = ` have minted new NFT at ${d.getHours()}:${d.getMinutes()}.`
      notificaition(ethAddress, title, description)

      const cl = Moralis.Object.extend("NFT721", { userMasterKey: true })
      const nft721 = new cl()
      const contractAddress = request.object.get("owner") ? request.object.get("owner") : NFT721_ADDRESS
      nft721.set("minter", ethAddress)
      nft721.set("owner", contractAddress)
      nft721.set("token_uri", token_uri)
      nft721.set("sender", "")
      nft721.set("bidder", "")
      nft721.set("isBurned", false)
      nft721.set("price", "0")
      nft721.set("limitPrice", "0")
      nft721.set("market_state", "0")
      nft721.set("type", "minted")
      nft721.set("tokenId", tokenId)
      nft721.save(null, { userMasterKey: true })
    }
  })

  // Moralis.Cloud.beforeSave("Transfer721Auto_Log", async (request) => {
  //   const confirmed = request.object.get("confirmed")
  //   if (confirmed) {
  //     const from = request.object.get("_from")
  //     const to = request.object.get("_to")
  //     const tokenId = request.object.get("_tokenId")
  //     const query = new Moralis.Query("NFT721", { useMasterKey: true })
  //     query.equalTo("tokenId", tokenId)
  //     const result = await query.first({ useMasterKey: true })
  //     result.set("owner", to)
  //     result.set("sender", from)
  //     result.save(null, { useMasterKey: true })
  //   }
  // })

  Moralis.Cloud.beforeSave("Burned721_Log", async (request) => {
    const admin = request.object.get("admin1")
    const tokenId = request.object.get("_tokenId")
    const query = new Moralis.Query("NFT721", { useMasterKey: true })
    query.equalTo("tokenId", tokenId)
    const result = await query.first({ useMasterKey: true })
    result.set("owner", '0x00')
    result.set("sender", admin)
    result.set("isBurned", true)
    result.save(null, { useMasterKey: true })
  })

  Moralis.Cloud.define("Fetch721", async (request) => {
    const type = request.params.type
    const owner = request.params.address
    if (type == "market") {
      const query = new Moralis.Query("NFT721", { useMasterKey: true })
      // owner should be market address
      query.equalTo("owner", owner)
      query.equalTo("isBurned", false)
      return await query.find({ useMasterKey: true })
    } else if (type == "admin") {
      const q = new Moralis.Query("_User", { userMasterKey: true })
      q.equalTo("ethAddress", owner)
      const user = await q.first({ useMasterKey: true })
      if (user.attributes.isSuperAdmin) {
        const query = new Moralis.Query("NFT721", { useMasterKey: true })
        query.containedIn("owner", [NFT721_ADDRESS, YLMARKETPLACE_ADDRESS1, YLAUCTION_CONTRACT_ADDRESS]);
        query.equalTo("isBurned", false)
        return await query.find({ useMasterKey: true })
      } else {
        const query = new Moralis.Query("NFT721", { useMasterKey: true })
        // owner should be admin address
        query.containedIn("owner", [NFT721_ADDRESS, YLMARKETPLACE_ADDRESS1, YLAUCTION_CONTRACT_ADDRESS]);
        query.equalTo("minter", owner)
        query.equalTo("isBurned", false)
        return await query.find({ useMasterKey: true })
      }
    }
  })

  Moralis.Cloud.define("FetchMarketed721", async (request) => {
    const query = new Moralis.Query("NFT721", { useMasterKey: true })
    // owner should be market address
    query.containedIn("type", ["marketplace", "auction", "offer"]);
    query.equalTo("isBurned", false)
    return await query.find({ useMasterKey: true })
  })
  
  Moralis.Cloud.define("Get721TokenURI", async (request) => {
    const tokenId = request.params.tokenId
    const query = new Moralis.Query("NFT721", { useMasterKey: true })
    query.equalTo("tokenId", tokenId)
    query.equalTo("isBurned", false)
    let nftItem = await query.first({ useMasterKey: true })    
    return await Moralis.Cloud.httpRequest({ url: nftItem?.token_uri })
  })
  //721nft MarketPlace 
  Moralis.Cloud.beforeSave("AdminListedNFT_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")
    const itemId = request.object.get("itemId")
    const price = request.object.get("price")

    const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft721 = await nftQuery.first({ useMasterKey: true })
    nft721.set("owner", YLMARKETPLACE_ADDRESS1)
    nft721.set("sender", ethAddress)
    nft721.set("itemId", itemId)
    nft721.set("price", price)
    nft721.set("type", "marketplace")
    nft721.save(null, { useMasterKey: true })

    const title = "721NFT is listed on the marketplace"
    const description = ` have listed 721NFT(${tokenId}, ${price}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("UserlistedNFTtoMarket_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")
    const itemId = request.object.get("itemId")
    const price = request.object.get("price")

    const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft721 = await nftQuery.first({ useMasterKey: true })
    nft721.set("owner", YLMARKETPLACE_ADDRESS1)
    nft721.set("sender", ethAddress)
    nft721.set("itemId", itemId)
    nft721.set("price", price)
    nft721.set("type", "marketplace")
    nft721.save(null, { useMasterKey: true })

    const title = "721NFT is listed on the marketplace"
    const description = ` have listed 721NFT(${tokenId}, ${price}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("WithdrawNFTfromMarkettoWallet_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")

    const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft721 = await nftQuery.first({ useMasterKey: true })
    nft721.set("owner", ethAddress)
    nft721.set("type", "minted")
    nft721.save(null, { useMasterKey: true })

    const title = "Withdraw 721 NFT."
    const description = ` has withdraw 721NFT(${tokenId}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("UnlistedNFT721_Log", async (request) => {
    const confirmed = request.object.get("confirmed")
    if (confirmed) {
      const d = new Date(Date.now())
      const ethAddress = request.object.get("user")
      const tokenId = request.object.get("tokenId")

      const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
      nftQuery.equalTo("tokenId", tokenId)
      const nft721 = await nftQuery.first({ useMasterKey: true })
      nft721.set("owner", ethAddress)
      nft721.set("type", "minted")
      nft721.save(null, { useMasterKey: true })

      const title = "NFT721 is unlisted on the marketplace"
      const description = ` have unlisted NFT721(${tokenId}) at ${d.getHours()}:${d.getMinutes()}.`
      notificaition(ethAddress, title, description)
    }
  })

  Moralis.Cloud.beforeSave("PurchasedNFT721_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("buyer")
    const tokenId = request.object.get("tokenId")

    const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft721 = await nftQuery.first({ useMasterKey: true })
    nft721.set("owner", ethAddress)
    nft721.set("type", "minted")
    nft721.save(null, { useMasterKey: true })

    const title = "721 NFTs sold."
    const description = ` has buyed 721NFT(${tokenId}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("EditItem721_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")
    const price = request.object.get("limitPrice")

    const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft721 = await nftQuery.first({ useMasterKey: true })
    nft721.set("price", price)
    nft721.save(null, { useMasterKey: true })

    const title = "Edit 721 NFT."
    const description = ` has editted 721NFT(${tokenId}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })
  //721nft Auction
  Moralis.Cloud.beforeSave("AdminSetBid_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("admin")
    const tokenId = request.object.get("tokenId")
    const itemId = request.object.get("auctionId")
    const price = request.object.get("price")
    const limitPrice = request.object.get("limitPrice")

    const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft721 = await nftQuery.first({ useMasterKey: true })
    nft721.set("owner", YLAUCTION_CONTRACT_ADDRESS)
    nft721.set("sender", ethAddress)
    nft721.set("itemId", itemId)
    nft721.set("price", price)
    nft721.set("limitPrice", limitPrice)
    nft721.set("type", "auction")
    nft721.save(null, { useMasterKey: true })

    const title = "721NFT auction"
    const description = ` have auctioned 721NFT(${tokenId}, ${price}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("UserSetBid_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")
    const itemId = request.object.get("auctionId")
    const price = request.object.get("price")
    const limitPrice = request.object.get("limitPrice")

    const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft721 = await nftQuery.first({ useMasterKey: true })
    nft721.set("owner", YLAUCTION_CONTRACT_ADDRESS)
    nft721.set("sender", ethAddress)
    nft721.set("itemId", itemId)
    nft721.set("price", price)
    nft721.set("limitPrice", limitPrice)
    nft721.set("type", "auction")
    nft721.save(null, { useMasterKey: true })

    const title = "721NFT auction"
    const description = ` have auctioned 721NFT(${tokenId}, ${price}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("AuctionItemEditted_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")
    const limitPrice = request.object.get("limitPrice")

    const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft721 = await nftQuery.first({ useMasterKey: true })
    nft721.set("sender", ethAddress)
    nft721.set("limitPrice", limitPrice)
    nft721.set("type", "auction")
    nft721.save(null, { useMasterKey: true })

    const title = "721NFT auction Edited"
    const description = ` have edited 721NFT auction at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("UserBidoffer_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")
    const price = request.object.get("price")

    const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft721 = await nftQuery.first({ useMasterKey: true })
    nft721.set("bidder", ethAddress)
    nft721.set("price", price)
    nft721.set("type", "auction")
    nft721.save(null, { useMasterKey: true })

    const title = "721NFT auction Bid"
    const description = ` have bidded 721NFT auction at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("BidWinner_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")

    const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft721 = await nftQuery.first({ useMasterKey: true })
    nft721.set("minter", ethAddress)
    nft721.set("owner", ethAddress)
    nft721.set("type", "minted")
    nft721.save(null, { useMasterKey: true })

    const title = "721NFT auction Bid Winner"
    const description = ` is the winner of the bid 721NFT auction at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  //NFT1155
  Moralis.Cloud.beforeSave("Minted1155_Log", async (request) => {
    const confirmed = request.object.get("confirmed")
    if (confirmed) {
      const d = new Date(Date.now())
      const ethAddress = request.object.get("minter")
      const tokenId = request.object.get("tokenId")
      const amount = request.object.get("amount")
      const token_uri = request.object.get("tokenUri")


      const cl = Moralis.Object.extend("NFT1155", { userMasterKey: true })
      const nft1155 = new cl()
      nft1155.set("minter", ethAddress)
      nft1155.set("owner", ADMIN_WALLET)
      nft1155.set("token_uri", token_uri)
      nft1155.set("sender", "")
      nft1155.set("bidder", "")
      nft1155.set("isBurned", false)
      nft1155.set("price", "0")
      nft1155.set("limitPrice", "0")
      nft1155.set("market_state", "0")
      nft1155.set("type", "minted")
      nft1155.set("tokenId", tokenId)
      nft1155.set("amount", amount)
      nft1155.save(null, { userMasterKey: true })

      const title = "New 1155NFT is minted"
      const description = ` have minted new NFT at ${d.getHours()}:${d.getMinutes()}.`
      notificaition(ethAddress, title, description)
    }
  })

  Moralis.Cloud.beforeSave("Burned1155_Log", async (request) => {
    const burner = request.object.get("burner")
    const tokenId = request.object.get("tokenId")
    const query = new Moralis.Query("NFT1155", { useMasterKey: true })
    query.equalTo("tokenId", tokenId)
    const result = await query.first({ useMasterKey: true })
    result.set("owner", '0x00')
    result.set("sender", burner)
    result.set("isBurned", true)
    result.save(null, { useMasterKey: true })
  })

  Moralis.Cloud.define("Fetch1155", async (request) => {
    const type = request.params.type
    const owner = request.params.address
    if (type == "market") {
      const query = new Moralis.Query("NFT1155", { useMasterKey: true })
      // owner should be market address
      query.equalTo("owner", owner)
      query.equalTo("isBurned", false)
      return await query.find({ useMasterKey: true })
    } else if (type == "admin") {
      const q = new Moralis.Query("_User", { userMasterKey: true })
      q.equalTo("ethAddress", owner)
      const user = await q.first({ useMasterKey: true })
      if (user.attributes.isSuperAdmin) {
        const query = new Moralis.Query("NFT1155", { useMasterKey: true })
        query.containedIn("owner", [ADMIN_WALLET, YLNFT1155MARKETPLACE_CONTRACT_ADDRESS]);
        query.equalTo("isBurned", false)
        return await query.find({ useMasterKey: true })
      } else {
        const query = new Moralis.Query("NFT1155", { useMasterKey: true })
        // owner should be admin address
        query.equalTo("owner", owner);
        query.equalTo("isBurned", false)
        return await query.find({ useMasterKey: true })
      }
    }
  })

  Moralis.Cloud.define("Get1155TokenURI", async (request) => {
    const tokenId = request.params.tokenId
    const query = new Moralis.Query("NFT1155", { useMasterKey: true })
    query.equalTo("tokenId", tokenId)
    query.equalTo("isBurned", false)
    let nftItem = await query.first({ useMasterKey: true })    
    return await Moralis.Cloud.httpRequest({ url: nftItem?.token_uri })
  })

  //1155nft MarketPlace 
  Moralis.Cloud.beforeSave("AdminListedNFT1155_Log", async (request) => {
    const confirmed = request.object.get("confirmed")
    if (confirmed) {
      const d = new Date(Date.now())
      const ethAddress = request.object.get("user")
      const tokenId = request.object.get("tokenId")
      const itemId = request.object.get("itemId")
      const price = request.object.get("price")

      const nftQuery = new Moralis.Query("NFT1155", { useMasterKey: true })
      nftQuery.equalTo("tokenId", tokenId)
      const nft1155 = await nftQuery.first({ useMasterKey: true })
      nft1155.set("owner", YLNFT1155MARKETPLACE_CONTRACT_ADDRESS)
      nft1155.set("sender", ethAddress)
      nft1155.set("itemId", itemId)
      nft1155.set("price", price)
      nft1155.set("type", "marketplace")
      nft1155.save(null, { useMasterKey: true })

      const title = "NFT1155 is listed on the marketplace"
      const description = ` have listed NFT1155(${tokenId}, ${price}) at ${d.getHours()}:${d.getMinutes()}.`
      notificaition(ethAddress, title, description)
    }
  })
  
  Moralis.Cloud.beforeSave("UnlistedNFT1155_Log", async (request) => {
    const confirmed = request.object.get("confirmed")
    if (confirmed) {
      const d = new Date(Date.now())
      const ethAddress = request.object.get("user")
      const tokenId = request.object.get("tokenId")

      const nftQuery = new Moralis.Query("NFT1155", { useMasterKey: true })
      nftQuery.equalTo("tokenId", tokenId)
      const nft1155 = await nftQuery.first({ useMasterKey: true })
      nft1155.set("owner", ethAddress)
      nft1155.set("type", "minted")
      nft1155.save(null, { useMasterKey: true })

      const title = "NFT1155 is unlisted on the marketplace"
      const description = ` have unlisted NFT1155(${tokenId}) at ${d.getHours()}:${d.getMinutes()}.`
      notificaition(ethAddress, title, description)
    }
  })

  Moralis.Cloud.beforeSave("UserlistedNFTtoMarket1155_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")
    const itemId = request.object.get("itemId")
    const price = request.object.get("price")

    const nftQuery = new Moralis.Query("NFT1155", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft1155 = await nftQuery.first({ useMasterKey: true })
    nft1155.set("owner", YLNFT1155MARKETPLACE_CONTRACT_ADDRESS)
    nft1155.set("sender", ethAddress)
    nft1155.set("itemId", itemId)
    nft1155.set("price", price)
    nft1155.set("type", "marketplace")
    nft1155.save(null, { useMasterKey: true })

    const title = "1155NFT is listed on the marketplace"
    const description = ` have listed 1155NFT(${tokenId}, ${price}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("PurchasedNFT1155_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")

    const nftQuery = new Moralis.Query("NFT1155", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft1155 = await nftQuery.first({ useMasterKey: true })
    nft1155.set("owner", ethAddress)
    nft1155.set("type", "minted")
    nft1155.save(null, { useMasterKey: true })

    const title = "1155 NFTs sold."
    const description = ` has buyed 1155NFT(${tokenId}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("WithdrawNFTfromMarkettoWallet1155_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("withdrawaddress")
    const tokenId = request.object.get("tokenId")

    const nftQuery = new Moralis.Query("NFT1155", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft1155 = await nftQuery.first({ useMasterKey: true })
    nft1155.set("owner", ethAddress)
    nft1155.set("type", "minted")
    nft1155.save(null, { useMasterKey: true })

    const title = "Withdraw 1155 NFT."
    const description = ` has withdraw 1155NFT(${tokenId}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("MarketItemEditted1155_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")
    const price = request.object.get("limitPrice")

    const nftQuery = new Moralis.Query("NFT1155", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft1155 = await nftQuery.first({ useMasterKey: true })
    nft1155.set("price", price)
    nft1155.save(null, { useMasterKey: true })

    const title = "Edit 1155 NFT."
    const description = ` has editted 1155NFT(${tokenId}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })
  //1155nft Auction
  Moralis.Cloud.beforeSave("AdminSetBid1155_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("admin")
    const tokenId = request.object.get("tokenId")
    const itemId = request.object.get("auctionId")
    const price = request.object.get("price")

    const nftQuery = new Moralis.Query("NFT1155", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft1155 = await nftQuery.first({ useMasterKey: true })
    nft1155.set("owner", YLNFT1155MARKETPLACE_CONTRACT_ADDRESS)
    nft1155.set("sender", ethAddress)
    nft1155.set("itemId", itemId)
    nft1155.set("price", price)
    nft1155.set("type", "auction")
    nft1155.save(null, { useMasterKey: true })

    const title = "1155NFT auction"
    const description = ` have auctioned 1155NFT(${tokenId}, ${price}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })
  
  Moralis.Cloud.beforeSave("UserSetBid1155_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("admin")
    const tokenId = request.object.get("tokenId")
    const itemId = request.object.get("auctionId")
    const price = request.object.get("price")

    const nftQuery = new Moralis.Query("NFT1155", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft1155 = await nftQuery.first({ useMasterKey: true })
    nft1155.set("owner", YLNFT1155MARKETPLACE_CONTRACT_ADDRESS)
    nft1155.set("sender", ethAddress)
    nft1155.set("itemId", itemId)
    nft1155.set("price", price)
    nft1155.set("type", "auction")
    nft1155.save(null, { useMasterKey: true })

    const title = "1155NFT auction"
    const description = ` have auctioned 1155NFT(${tokenId}, ${price}) at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("AuctionItemEditted1155_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")
    const price = request.object.get("limitPrice")

    const nftQuery = new Moralis.Query("NFT1155", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft1155 = await nftQuery.first({ useMasterKey: true })
    nft1155.set("sender", ethAddress)
    nft1155.set("price", price)
    nft1155.set("type", "auction")
    nft1155.save(null, { useMasterKey: true })

    const title = "1155NFT auction Edited"
    const description = ` have edited 1155NFT auction at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("PlaceBid_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("bidder")
    const tokenId = request.object.get("tokenId")
    const price = request.object.get("price")

    const nftQuery = new Moralis.Query("NFT1155", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft1155 = await nftQuery.first({ useMasterKey: true })
    nft1155.set("bidder", ethAddress)
    nft1155.set("price", price)
    nft1155.set("type", "auction")
    nft1155.save(null, { useMasterKey: true })

    const title = "1155NFT auction Bid"
    const description = ` have bidded 1155NFT auction at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })

  Moralis.Cloud.beforeSave("BidWinner1155_Log", async (request) => {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("user")
    const tokenId = request.object.get("tokenId")

    const nftQuery = new Moralis.Query("NFT1155", { useMasterKey: true })
    nftQuery.equalTo("tokenId", tokenId)
    const nft1155 = await nftQuery.first({ useMasterKey: true })
    nft1155.set("minter", ethAddress)
    nft1155.set("owner", ethAddress)
    nft1155.set("type", "minted")
    nft1155.save(null, { useMasterKey: true })

    const title = "1155NFT auction Bid Winner"
    const description = ` is the winner of the bid 1155NFT auction at ${d.getHours()}:${d.getMinutes()}.`
    notificaition(ethAddress, title, description)
  })



  Moralis.Cloud.define("removeReader", (request) => {
    const userId = request.params.userId
    const msgIds = request.params.msgIds
    msgIds.forEach(async (msgId) => {
      const query = new Moralis.Query("Notification", { useMasterKey: true })
      query.equalTo("objectId", msgId)
      const msgData = await query.find({ useMasterKey: true })
      msgData.forEach((item) => {
        let obj = item.attributes.users
        obj[userId] = true
        item.set("users", obj)
        item.save(null, { useMasterKey: true })
      })
    })
  })

  Moralis.Cloud.define("getUnReadMsg", async (request) => {
    const userId = request.params.userId
    const query = new Moralis.Query("Notification", { useMasterKey: true })
    const allData = await query.find({ useMasterKey: true })
    const d = new Date(Date.now())
    const filter = (item) =>
      (d.getFullYear() === item.attributes.createdAt.getFullYear() &&
        d.getMonth() === item.attributes.createdAt.getMonth() &&
        d.getDate() === item.attributes.createdAt.getDate() &&
        item.attributes.users[userId] === true) ||
      item.attributes.users[userId] === false
    const unReadMsg = allData.filter(filter)
    return unReadMsg
  })

  Moralis.Cloud.define("saveTempFile", async (request) => {
    const { email, address, token, amount, token_amount } = request.params
    const Collection = Moralis.Object.extend("StripTemp", { useMasterKey: true })
    const stripTemp = new Collection()
    stripTemp.set("email", email)
    stripTemp.set("address", address)
    stripTemp.set("token", token)
    stripTemp.set("amount", amount)
    stripTemp.set("isDeleted", 2)
    stripTemp.set("token_amount", token_amount)
    stripTemp.save(null, { useMasterKey: true })
  })

  Moralis.Cloud.define("getTempFile", async (request) => {
    const { token } = request.params
    const query = new Moralis.Query("StripTemp", { useMasterKey: true })
    query.equalTo("token", token)
    query.equalTo("isDeleted", 2)
    return await query.first({ useMasterKey: true })
  })

  Moralis.Cloud.define("deleteTempFile", async (request) => {
    const { id } = request.params
    const query = new Moralis.Query("StripTemp", { useMasterKey: true })
    query.equalTo("objectId", id)
    const result = await query.first({ useMasterKey: true })
    result.set("isDeleted", 1)
    result.save(null, { useMasterKey: true })
  })

  Moralis.Cloud.define("fetchNFTMetadata", async (request) => {
    return await Moralis.Cloud.httpRequest({ url: request.params.url })
  })

  Moralis.Cloud.define("createOffer", (request) => {
    const { name, endAt, fullPrice, discount, ERC721, ERC1155 } = request.params
    const Collection = Moralis.Object.extend("Offers", {
      userMasterKey: true,
    })
    const offer = new Collection()
    offer.set("name", name)
    offer.set("endAt", endAt)
    offer.set("fullPrice", fullPrice)
    offer.set("discount", discount)
    offer.set("ERC721", ERC721)
    offer.set("ERC1155", ERC1155)
    offer.save(null, { useMasterKey: true })

    const title = "Created offer"
    const description = `New offer(${name}) created. `
    notificaition("", title, description)
  })

  Moralis.Cloud.define("getOffers", async (request) => {
    const { isFullOffer } = request.params
    const query = new Moralis.Query("Offers", { useMasterKey: true })
    const rows = await query.find({ useMasterKey: true })
    await rows.map((item) => {
      const endAt = new Date(item.attributes.endAt)
      if (endAt.getTime() - Date.now() < 0) {
        item.destroy({ useMasterKey: true })
      }
    })
    const query1 = new Moralis.Query("Offers", { useMasterKey: true })
    const result = await query1.find({ useMasterKey: true })
    return result.filter((item) => {
      return isFullOffer
        ? item.attributes.ERC721.length + item.attributes.ERC1155.length >= 5
        : item.attributes.ERC721.length + item.attributes.ERC1155.length < 5
    })
  })

  Moralis.Cloud.define("setOffers", async (request) => {
    const { id, tokenId, isERC721 } = request.params
    const query = new Moralis.Query("Offers", { useMasterKey: true })
    query.equalTo("objectId", id)
    const row = await query.first({ useMasterKey: true })
    const arrValue = isERC721 ? row.attributes.ERC721 : row.attributes.ERC1155
    arrValue.push(tokenId)
    row.set(isERC721 ? "ERC721" : "ERC1155", arrValue)
    row.save(null, { useMasterKey: true })
    if (isERC721) {
      const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
      nftQuery.equalTo("tokenId", tokenId)
      const nft721 = await nftQuery.first({ useMasterKey: true })
      nft721.set("type", "offer")
      nft721.save(null, { useMasterKey: true })
    }

    const title = "Added in offer"
    const description = `NFT added in offer.`
    notificaition("", title, description)
  })

  Moralis.Cloud.define("isOfferNFT", async (request) => {
    const { tokenId, isERC721 } = request.params
    const query = new Moralis.Query("Offers", { useMasterKey: true })
    query.equalTo(isERC721 ? "ERC721" : "ERC1155", tokenId)
    const result = await query.first({ useMasterKey: true })
    return result ? true : false
  })

  Moralis.Cloud.define("removeItemFromOffers", async (request) => {
    const { isERC721, id } = request.params
    const query = new Moralis.Query("Offers", { useMasterKey: true })
    query.equalTo(isERC721 ? "ERC721" : "ERC1155", id)
    const row = await query.first({ useMasterKey: true })
    const arr = isERC721 ? row.attributes.ERC721 : row.attributes.ERC1155
    const index = arr.indexOf(id)
    if (index > -1) {
      arr.splice(index, 1)
    }
    row.set(isERC721 ? "ERC721" : "ERC1155", arr)
    row.save(null, { useMasterKey: true })
    if (isERC721) {
      const nftQuery = new Moralis.Query("NFT721", { useMasterKey: true })
      nftQuery.equalTo("tokenId", id)
      const nft721 = await nftQuery.first({ useMasterKey: true })
      nft721.set("type", "minted")
      nft721.save(null, { useMasterKey: true })
    }

    const title = "NFT removed from offer"
    const description = `NFT(${id}) removed from offer.`
    notificaition("", title, description)
  })

  Moralis.Cloud.define("getUserById", async (request) => {
    const id = request.params.id
    const query = new Moralis.Query("_User", { useMasterKey: true })
    query.equalTo("objectId", id)
    return await query.first({ useMasterKey: true })
  })

  Moralis.Cloud.define("fetchTransfer", async (request) => {
    // const { options } = request.params
    const query721 = new Moralis.Query("Transfer721to", { useMasterKey: true })
    const query1155 = new Moralis.Query("Transfer1155to", { useMasterKey: true })
    const data_721 = await query721.find({ useMasterKey: true })
    const data_1155 = await query1155.find({ useMasterKey: true })
    return { data_721, data_1155 }
  })

  Moralis.Cloud.define("saveAuctionItem", async (request) => {
    const { id, startDate, period } = request.params
    const Collection = Moralis.Object.extend("Auction", {
      userMasterKey: true,
    })
    const auction = new Collection()
    auction.set("auctionId", id)
    auction.set("startDate", startDate.toString())
    auction.set("period", period.toString())
    auction.save(null, { useMasterKey: true })
  })

  Moralis.Cloud.define("updateAuctionItem", async (request) => {
    const { id, period } = request.params
    const query = new Moralis.Query("Auction", { useMasterKey: true })
    query.equalTo("auctionId", id)
    const result = await query.first({ useMasterKey: true })
    result.set("period", period.toString())
    result.save(null, { useMasterKey: true })
  })

  Moralis.Cloud.define("getAuctionItem", async (request) => {
    const { id } = request.params
    const query = new Moralis.Query("Auction", { useMasterKey: true })
    query.equalTo("auctionId", id)
    return await query.first({ useMasterKey: true })
  })

  Moralis.Cloud.define("setStripeRate", async (request) => {
    const query = new Moralis.Query("StripeRate", { useMasterKey: true })
    const result = await query.first({ useMasterKey: true })
    const { rate } = request.params
    result.set("rate", rate)
    result.save(null, { useMasterKey: true })
  })

  Moralis.Cloud.define("getStripeRate", async (request) => {
    const query = new Moralis.Query("StripeRate", { useMasterKey: true })
    return await query.first({ useMasterKey: true })
  })

  Moralis.Cloud.define("saveTokenSwap", async (request) => {
    const { email, address, yltAmount, tokenAmount, tokenType, token, usertoken, scanid, blockNumber } = request.params
    const Collection = Moralis.Object.extend("SwapWithTokenLog", { useMasterKey: true })
    const swapWithTokenLog = new Collection()
    swapWithTokenLog.set("email", email)
    swapWithTokenLog.set("address", address)
    swapWithTokenLog.set("ylt_amount", yltAmount)
    swapWithTokenLog.set("token_amount", tokenAmount)
    swapWithTokenLog.set("token_type", tokenType)
    swapWithTokenLog.set("token", token)
    swapWithTokenLog.set("is_deleted", "2")
    swapWithTokenLog.set("state", usertoken == 'BUSD' || usertoken == 'USDT' ? 1 : 0)
    swapWithTokenLog.set("scanid", scanid)
    swapWithTokenLog.set("usertoken", usertoken)
    swapWithTokenLog.set("blockNumber", blockNumber)
    swapWithTokenLog.save(null, { useMasterKey: true })
  })

  Moralis.Cloud.define("getSwapTransfers", async (request) => {
    const query = new Moralis.Query("SwapWithTokenLog", { useMasterKey: true });
    const searchKeyWord = request.params.searchKeyWord;
    const pipeline = [
      {
        match: {
          $or: [
            { address: { $regex: `.*${searchKeyWord}.*` } },
            { ylt_amount: { $regex: `.*${searchKeyWord}.*` } },
            { token_amount: { $regex: `.*${searchKeyWord}.*` } },
          ],
        },
      },
      {
        lookup: {
          from: "_User",
          localField: "address",
          foreignField: "ethAddress",
          as: "user",
        },
      }
    ];
    return await query.aggregate(pipeline);
  })

  Moralis.Cloud.define("updateSwapTokenLog", async (request) => {
    const { objectId, state, scanid } = request.params
    const query = new Moralis.Query("SwapWithTokenLog", { useMasterKey: true })
    query.equalTo("objectId", objectId)
    const result = await query.first({ useMasterKey: true })
    result.set("state", state)
    result.set("scanid", scanid)
    result.save(null, { useMasterKey: true })
  })

  Moralis.Cloud.beforeSave("Transfered20_Log", async (request) => {
    const confirmed = request.object.get("confirmed")
    const from = request.object.get("from")
    if (confirmed && from == ADMIN_WALLET) {
      const to = request.object.get("to")
      const amount = request.object.get("tokens")
      const scanid = request.object.get("transaction_hash")
      const query = new Moralis.Query("SwapWithTokenLog", { useMasterKey: true })
      query.equalTo("scanid", scanid)
      const res = await query.first({ useMasterKey: true })
      if (!res) {
        const Collection = Moralis.Object.extend("SwapWithTokenLog", { useMasterKey: true })
        const swapWithTokenLog = new Collection()
        swapWithTokenLog.set("email", 'SuperAmin@ylg.com')
        swapWithTokenLog.set("address", to)
        swapWithTokenLog.set("ylt_amount", (amount / (10 ** 18)).toString())
        swapWithTokenLog.set("token_amount", '-')
        swapWithTokenLog.set("token_type", 3)
        swapWithTokenLog.set("token", "3")
        swapWithTokenLog.set("is_deleted", "2")
        swapWithTokenLog.set("state", 3)
        swapWithTokenLog.set("scanid", scanid)
        swapWithTokenLog.set("usertoken", 'DIRECT')
        swapWithTokenLog.save(null, { useMasterKey: true })
      }
    }
  })

  Moralis.Cloud.define("getSwapTokenLog", async (request) => {
    const { id } = request.params
    const query = new Moralis.Query("SwapWithTokenLog", { useMasterKey: true })
    query.equalTo("objectId", id)
    return await query.first({ useMasterKey: true })
  })

  Moralis.Cloud.define("getSwapTokenLogByToken", async (request) => {
    const { token } = request.params
    const query = new Moralis.Query("SwapWithTokenLog", { useMasterKey: true })
    query.equalTo("token", token)
    return await query.first({ useMasterKey: true })
  })

  Moralis.Cloud.define("getSwapTokenLogByUser", async (request) => {
    const { address } = request.params
    const query = new Moralis.Query("SwapWithTokenLog", { useMasterKey: true })

    const pipeline = [
      {
        match: {
          $expr: {
            $and: [
              { $eq: ["$address", address] },
              { $eq: ["$state", 1] },
            ],
          },
        },
      },
      {
        lookup: {
          from: "_User",
          localField: "address",
          foreignField: "ethAddress",
          as: "user",
        },
      }
    ];

    return await query.aggregate(pipeline);
  })

  Moralis.Cloud.define("getTeamData", async (request) => {
    const { wallet } = request.params
    const query721 = new Moralis.Query("DepositedERC721", { useMasterKey: true })
    const team = new Moralis.Query("SubVaultCreated", { useMasterKey: true })
    query721.equalTo("gamer", wallet)
    team.equalTo("gamer", wallet)
    const data_players = await query721.find({ useMasterKey: true })
    const data_team = await team.find({ useMasterKey: true })
    return { data_players, data_team }
  })

  Moralis.Cloud.define("getOneTeamData", async (request) => {
    const { vault } = request.params
    const query721 = new Moralis.Query("DepositedERC721", { useMasterKey: true })
    const team = new Moralis.Query("SubVaultCreated", { useMasterKey: true })
    const query1155 = new Moralis.Query("TeamERC1155List", { useMasterKey: true })
    query721.equalTo("vault", vault)
    query1155.equalTo("vault", vault)
    team.equalTo("subaddress", vault)
    const data_players = await query721.find({ useMasterKey: true })
    const data_booster = await query1155.find({ useMasterKey: true })
    const data_team = await team.first({ useMasterKey: true })

    return { data_players, data_team, data_booster }
  })

  Moralis.Cloud.beforeSave("RevertedERC721", async (request) => {
    const nftId = request.object.get("nFTID")
    const query = new Moralis.Query("DepositedERC721", { userMasterKey: true })
    query.equalTo("tokenId", nftId)
    const c = await query.first({ useMasterKey: true })
    c.destroy({ useMasterKey: true })
  })

  Moralis.Cloud.beforeSave("DepositedERC1155", async (request) => {
    const confirmed = request.object.get("confirmed")
    if (confirmed) {
      const vault = request.object.get("vault")
      const tokenId = request.object.get("tokenId")
      const amount = request.object.get("amount")
      const gamer = request.object.get("gamer")
      const query = new Moralis.Query("TeamERC1155List", { userMasterKey: true })
      query.equalTo("vault", vault)
      query.equalTo("nftID", tokenId)
      const res = await query.first({ useMasterKey: true })
      if (res) {
        const p_amount = Number(res.attributes.amount) + Number(amount);
        res.set("amount", p_amount.toString())
        res.save(null, { useMasterKey: true })
      } else {
        const Collection = Moralis.Object.extend("TeamERC1155List", { useMasterKey: true })
        const teamErc1155 = new Collection()
        teamErc1155.set("vault", vault)
        teamErc1155.set("nftID", tokenId)
        teamErc1155.set("amount", amount)
        teamErc1155.set("gamer", gamer)
        teamErc1155.save(null, { useMasterKey: true })
      }
    }
  })

  Moralis.Cloud.beforeSave("RevertedERC1155", async (request) => {
    const confirmed = request.object.get("confirmed")
    if (confirmed) {
      const vault = request.object.get("vaultAddr")
      const tokenId = request.object.get("nFTID")
      const amount = request.object.get("amount")
      const gamer = request.object.get("gamerAddr")
      const query = new Moralis.Query("TeamERC1155List", { userMasterKey: true })
      query.equalTo("vault", vault)
      query.equalTo("nftID", tokenId)
      const res = await query.first({ useMasterKey: true })
      if (res) {
        const p_amount = Number(res.attributes.amount) - Number(amount);
        res.set("amount", p_amount.toString())
        res.save(null, { useMasterKey: true })
      }
    }

  })

  Moralis.Cloud.define("revertERC721", async (request) => {
    const { tokenId } = request.params
    const query721 = new Moralis.Query("DepositedERC721", { useMasterKey: true })
    query721.equalTo("tokenId", tokenId)
    const erc721 = await query721({ useMasterKey: true })
    erc721.destroy({ useMasterKey: true })
    return true
  })

  Moralis.Cloud.define("sendTokenEmail", function (request) {
    const { to, amount } = request.params
    Moralis.Cloud.sendEmail({
      to: to,
      subject: "YLT Token Received",
      html: "Admin has sent " + amount + " YLTs for your stripe payment"
    });
  });

  Moralis.Cloud.define("sendPushNotification", function (request) {
    const { to, amount } = request.params
    const data_email = {
      // "app_id": "8d94b852-c772-48ee-89e9-0271f3324538", for local
      // "app_id": "cb4981d7-11b0-42ae-8d52-79ca95582575", for live 
      "app_id": "7e78a2c5-d0c1-4cc1-a794-2ae0b241da7e", //for stage
      "contents": { "en": "Admin sent " + amount + " YTL token for your stripe payment" },
      "filters": [{ "field": "email", "relation": "=", "value": to }]
    }
    Moralis.Cloud.httpRequest({
      method: "POST",
      url: "https://onesignal.com/api/v1/notifications",
      body: data_email,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic YjdmNWRkNWMtNjdlYS00YjJjLWE2MzAtZTY3ZGQ0ZGU1OGI0'
      }
    })
  });

  Moralis.Cloud.define("sendPushAdmin", function (request) {
    const { to, amount } = request.params
    const data_address = {
      // "app_id": "8d94b852-c772-48ee-89e9-0271f3324538", for local
      // "app_id": "cb4981d7-11b0-42ae-8d52-79ca95582575", for live
      "app_id": "7e78a2c5-d0c1-4cc1-a794-2ae0b241da7e",
      "contents": { "en": "You need to send " + amount + " YLT to " + to },
      "filters": [{ "field": "tag", "key": "admin", "relation": "=", "value": "superAdmin" }]
    }
    Moralis.Cloud.httpRequest({
      method: "POST",
      url: "https://onesignal.com/api/v1/notifications",
      body: data_address,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic YjdmNWRkNWMtNjdlYS00YjJjLWE2MzAtZTY3ZGQ0ZGU1OGI0'
      }
    })
  });

  const notificaition = async (ethAddress, title, description) => {
    let users = { [SUPER_ADMIN]: true }
    let user = null
    if (ethAddress !== "") {
      const query = new Moralis.Query("_User", { userMasterKey: true })
      query.equalTo("accounts", ethAddress)
      user = await query.first({ useMasterKey: true })
      users = { [SUPER_ADMIN]: false, [user?.id]: false }
    }
    const Collection = Moralis.Object.extend("Notification", {
      userMasterKey: true,
    })

    const notification = new Collection()
    notification.set("title", title)
    notification.set("description", `${user?.attributes.nickname || ethAddress}${description}`)
    notification.set("users", users)
    notification.save(null, { userMasterKey: true })
  };

  module.exports = __webpack_exports__;
  /******/
})();