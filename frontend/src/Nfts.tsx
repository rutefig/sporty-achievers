import React from 'react';
import { Box, Image, Text, VStack, HStack } from '@chakra-ui/react';
import { init, useQuery } from "@airstack/airstack-react";

init("ef3d1cdeafb642d3a8d6a44664ce566c");

//export const Nfts: React.FC = () => {
 export const Nfts = () => {

  const nfts = [
    {
      name: 'NFT 1',
      imageUrl: 'http://ruta/a/imagen.jpg',
      address: '0x123...',
    },
    {
      name: 'NFT 2',
      imageUrl: 'http://ruta/a/imagen2.jpg',
      address: '0x456...',
    },
    // Agregar más NFT aquí...
  ];

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
  if (data) {
    return (
      <VStack spacing={4}>
      {data.TokenNfts.TokenNft.map((nft, index) => (
        <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Image src={"https://ipfs.io/ipfs/" + nft.metaData.image.replace("ipfs://","")} alt={nft.name} boxSize="200px" objectFit="cover" />
          <HStack mt={2}>
            <Text fontWeight="bold">{nft.blockchain}</Text>
            <Text fontSize="sm" color="gray.500">{"..."+nft.address.slice(-6)}</Text>
          </HStack>
        </Box>
      ))}
    </VStack>
    )    
  }

  // Render your component using the data returned by the query
};