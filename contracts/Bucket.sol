// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(
        address from, // The address to transfer from.
        address to, // The address to transfer to.
        uint256 amount // The amount to be transferred.
    ) external returns (bool);
}

// https://goerli.etherscan.io/address/0x873289a1aD6Cf024B927bd13bd183B264d274c68#code
contract Bucket {
    // This contract is a bucket that can receive ERC20 tokens
    event Winner(address);

    function drop(address erc20, uint amount) external {
        // This function will be called by the user to drop tokens into the bucket and choose a winner
        require(amount > 0); // Make sure the amount is greater than 0
        require(IERC20(erc20).transferFrom(msg.sender, address(this), amount)); // Transfer the tokens to this contract
        emit Winner(msg.sender); // Emit an event that the winner has been chosen
    }
}
