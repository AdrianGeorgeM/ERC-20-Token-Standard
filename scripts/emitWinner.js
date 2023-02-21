const hre = require('hardhat');

async function main() {
	const [deployer] = await ethers.getSigners();

	const myTokenAddress = '0x139c5f33A844bd2DB64a08F120333265b00D1f7E';
	const bucketAddress = '0x873289a1aD6Cf024B927bd13bd183B264d274c68';
	const amount = 1000;

	const InkToken = await ethers.getContractFactory('InkToken', deployer); // Contract name
	const token = await InkToken.attach(myTokenAddress);
	const responsalApproval = await token.approve(bucketAddress, amount);
	console.log(
		'GregToken .approve(',
		bucketAddress,
		',',
		amount,
		'), tx: https://goerli.etherscan.io/tx/',
		responsalApproval.hash
	);
	console.log(responsalApproval);
	const Bucket = await ethers.getContractFactory('Bucket', deployer); // Contract name
	const bucket = await Bucket.attach(bucketAddress);

	const responseDrop = await bucket.drop(myTokenAddress, amount);
	console.log(responseDrop);
	console.log(
		'Bucket .drop(',
		myTokenAddress,
		',',
		amount,
		'), tx: https://goerli.etherscan.io/tx/',
		responseDrop.hash
	);

	// const inkToken = await InkToken.deploy(); // Deploy the contract
	//https://goerli.etherscan.io/address/0x873289a1aD6Cf024B927bd13bd183B264d274c68#events

	// const addressWinnerContract = '0x873289a1aD6Cf024B927bd13bd183B264d274c68'; // Winner Contract address
	// await inkToken.deployed(); // Deploy the contract
	// // await emitWinner.triggerWinningAttempt(emmitterContractAddress);
	// console.log('Contract deployed to:', inkToken.address);
	// // Call the "attempt" method of Winner Contract through the interface inside our Contract

	// //TypeError: inkToken.sendAttempt is not a function

	// await inkToken.sendAttempt(addressWinnerContract);
	// const result = await inkToken.sendAttempt(addressWinnerContract); // Send the transaction to the network and wait for it to be mined (included in a block)

	// console.log('Transaction: ', result);
	// console.log(`Contract deployed to ${inkToken.address}`);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
