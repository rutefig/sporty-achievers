// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import {SchemaResolver} from "./SchemaResolver.sol";

import {IEAS, Attestation} from "./interfaces/IEAS.sol";

import {ProofOfAchievement} from "../ProofOfAchievement.sol";

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

/**
 * @title A sample schema resolver that checks whether the attestation is from a specific attester.
 */
contract AttesterResolver is SchemaResolver {
    IMailbox mailbox;
    // address private immutable _targetAttester;
    ProofOfAchievement private poach;
    address remoteNFTContract;

    constructor(
        IEAS eas,
        // address targetAttester,
        ProofOfAchievement _poach,
        address _mailbox
    ) SchemaResolver(eas) {
        mailbox = IMailbox(_mailbox);
        // _targetAttester = targetAttester;
        poach = _poach;
    }

    function addressToBytes32(address _addr) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_addr)));
    }

    function onAttest(
        Attestation calldata attestation,
        uint256 /*value*/
    ) internal override returns (bool) {
        // Mint NFT if attestation is from the target attester
        // if (attestation.attester == _targetAttester) {
            // poach.mintToken(attestation.attester);
            mailbox.dispatch(
                80_001,
                addressToBytes32(address(poach)),
                abi.encode(attestation)
            );
            return true;
        // }
        // return false;
    }

    function onRevoke(
        Attestation calldata /*attestation*/,
        uint256 /*value*/
    ) internal pure override returns (bool) {
        return true;
    }
}
