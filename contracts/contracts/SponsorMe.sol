// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract SponsorMe {
    event NewSponsorTip(
        address indexed to,
        address indexed from,
        uint256 timestamp,
        string name
    );

    struct SponsorTip {
        address from;
        uint256 timestamp;
        string name;
    }

    // Each user has their own list of SponsorTips
    mapping(address => SponsorTip[]) public sponsorTips;

    /**
     * @dev sponsor a user
     * @param _to address of the user to sponsor
     * @param _name name of the sponsor
     */
    function sponsorUser(address _to, string memory _name) public payable {
        require(msg.value > 0, "Can't sponsor with 0 eth");

        // Add the SponsorTip to the recipient's list!
        sponsorTips[_to].push(SponsorTip(msg.sender, block.timestamp, _name));

        // emit a log event when a new SponsorTip is created!
        emit NewSponsorTip(_to, msg.sender, block.timestamp, _name);
    }

    /**
     * @dev send the entire balance stored for a user to that user
     * @param _to address of the user to withdraw sponsor tips
     */
    function withdrawTips(address payable _to) public {
        require(msg.sender == _to, "Only the user can withdraw their tips");
        uint256 balance = address(this).balance;
        require(_to.send(balance));
    }

    /**
     * @dev retrieve all the SponsorTips received and stored on the blockchain for a user
     * @param _to address of the user to retrieve SponsorTips
     */
    function getSponsorTips(
        address _to
    ) public view returns (SponsorTip[] memory) {
        return sponsorTips[_to];
    }
}
