const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Antarctica.sol/Antarctica.json");

const tokenAddress = "0x80DB258D3a075ee57E0c0Ab3ef6eFAF5eeBd22db";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xA89E43a9884F20b000F91FC10853b3A040B72c0e"; 

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
