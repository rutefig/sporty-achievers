const NftQuery = `{
    TokenNfts(
      input: {blockchain: polygon, filter: {address: {_eq: "0xbD640Fa009dda9EB3bC7348d8EA1bE47F0Cb14Ab"}, tokenId: {_eq: "0"}}}
    ) {
      TokenNft {
        address
        blockchain
        tokenId
        chainId
        metaData {
          image 
          imageData
        }
      }
    }
  }`;
