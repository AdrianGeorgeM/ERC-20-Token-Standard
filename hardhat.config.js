require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
	solidity: '0.8.9',
	networks: {
		hardhat: {},
		goerli: {
			// this is the default network for hardhat
			url: process.env.ALCHEMY_TESTNET_RPC_URL,
			accounts: [process.env.TESTNET_PRIVATE_KEY],
		},
	},
};
