import { init, useQuery } from "@airstack/airstack-react";

init("ef3d1cdeafb642d3a8d6a44664ce566c");

export const Nfts = () => {

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

    const variables =  {  };

  const { data, loading, error } = useQuery(NftQuery, variables, { cache: false });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(data);

  // Render your component using the data returned by the query
};