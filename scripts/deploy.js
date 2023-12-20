const hre = require("hardhat");

async function main() {

  const contract = await hre.ethers.deployContract("Antarctica");

  await contract.waitForDeployment();

  console.log(
    "Deployed contract address: ", contract.target
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
