const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress = "https://ethereum-goerli.publicnode.com";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x92aE5b0A97E1cE629A7a89A9e708732A1ec1303e";

  const GWarming = await ethers.getContractFactory("Antarctica", signer);
  const contract = await GWarming.attach(contractAddress);

  await contract.mint(5);

  console.log("Minted 5 NFTs");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
