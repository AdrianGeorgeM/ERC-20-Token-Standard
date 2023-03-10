// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract InkToken is ERC20 {
    uint constant _initial_supply = 1000 * (10 ** 18); // 1000 tokens

    constructor() ERC20("InkToken", "INK") {
        // Set token name and symbol
        _mint(msg.sender, _initial_supply); // Mint initial supply
    }
}
// create landing page in html
// create a form to send ether to the contract
