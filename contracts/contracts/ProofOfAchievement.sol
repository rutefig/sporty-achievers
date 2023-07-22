// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

interface IMailbox {
    function localDomain() external view returns (uint32);

    function dispatch(
        uint32 _destinationDomain,
        bytes32 _recipientAddress,
        bytes calldata _messageBody
    ) external returns (bytes32);

    function process(
        bytes calldata _metadata,
        bytes calldata _message
    ) external;

    function count() external view returns (uint32);

    function root() external view returns (bytes32);

    function latestCheckpoint() external view returns (bytes32, uint32);
}

contract ProofOfAchievement is ERC721 {
    uint private mintCost;
    uint public tokenCount;
    uint public maxSupply;
    address public owner;
    IMailbox mailbox;

    event Executed(address indexed _from, bytes _value);

    event MintedProofOfAchievement(
        bytes32 competitionId,
        string competitionName,
        uint16 finalResult,
        address receiverAddress
    );

    constructor(address _mailbox) ERC721("ProofOfAchievement", "POACH") {
        tokenCount = 0;
        maxSupply = 9000;
        owner = msg.sender;
        mailbox = IMailbox(_mailbox);
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        _requireMinted(tokenId);
        return
            string(
                abi.encodePacked(
                    "https://bafybeigf7obi6qe53hbktdyfdcdtvyydz3i55mlvlk3ly6r5yvdj7pminu.ipfs.w3s.link/metadata.json"
                )
            );
    }

    function increaseSupply(uint supply) public {
        require(msg.sender == owner, "Only owner can increase supply!!");
        maxSupply = supply;
    }

    // To receive the message from Hyperlane
    function handle(uint32, bytes32, bytes memory _payload) public {
        (
            bytes32 competitionId,
            string memory competitionName,
            uint16 finalResult,
            address receiverAddress
        ) = abi.decode(_payload, (bytes32, string, uint16, address));

        mintToken(receiverAddress);

        emit MintedProofOfAchievement(
            competitionId,
            competitionName,
            finalResult,
            receiverAddress
        );

        emit Executed(msg.sender, _payload);
    }

    function mintToken(address _msgSender) public {
        tokenCount = tokenCount + 1;
        require(tokenCount <= maxSupply, "Max Supply Is Reached!!");
        super._mint(_msgSender, tokenCount);
    }

    function initiateMint() public payable {
        require(msg.value > mintCost, "Pay the mint cost!!");
        mintToken(msg.sender);
    }
}
