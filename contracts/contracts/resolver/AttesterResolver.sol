// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import { SchemaResolver } from "./SchemaResolver.sol";

import { IEAS, Attestation } from "./interfaces/IEAS.sol";

import { ProofOfAchievement } from "../ProofOfAchievement.sol";

/**
 * @title A sample schema resolver that checks whether the attestation is from a specific attester.
 */
contract AttesterResolver is SchemaResolver {
    address private immutable _targetAttester;
    ProofOfAchievement private poach;

    constructor(IEAS eas, address targetAttester, ProofOfAchievement _poach) SchemaResolver(eas) {
        _targetAttester = targetAttester;
        poach = _poach;
    }

    function onAttest(Attestation calldata attestation, uint256 /*value*/) internal override returns (bool) {
        // Mint NFT if attestation is from the target attester
        if (attestation.attester == _targetAttester) {
            poach.mintToken(attestation.attester);
            return true;
        }
        return false;
    }

    function onRevoke(Attestation calldata /*attestation*/, uint256 /*value*/) internal pure override returns (bool) {
        return true;
    }
}