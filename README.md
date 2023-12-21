# ERC720a Goerli to Mumbai Bridge Using fxPortal - Antarctica Global Warming

This module project shows how to transfer assets from goerli testnet to mumbai testnet using FxPortal Bridge.

## Description

In this project , I first used DALLE-E to generate a 5 item collection and stored the collection in pinata cloud to store in ipfs. Then, I deployed ERC721a contract with all the necessay details and functions. Then, I batch minted all the nfts in the goerli testnet. 5 NFTs will get minted . Then i approved the Fxroot contract to approve the transfer of the assets to mumbai testnet and deposited to mumbai testnet. Using the wallet public key and the mumbai testnet contract address , i got the balance of that contract.

## Installing and Running the code

You can clone this repository and run locally OR download ZIP file .

Make sure to install all the necessary packages by running:
```
npm install
```

### Getting BaseURL

Generate image collection from DALL-E or Midjourney and store the collection in [[pinata.cloud](https://www.pinata.cloud/)]

The collection gets stored in ipfs and paste the link in the base url variable in the contract .

Also paste your prompt description in prompt description variable.

### Steps for Bridging

1. Put your private key in the .env file
2. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC720a contract with all the functions.
3. We will be using this deployed contract address to batch mint and approve & deposit . So paste the address in the respective fields.
4. Make sure to fill in your public key of your wallet in the required wallet address variables
5. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
6. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon mumbai testnet
7. Wait 20-30ish minutes for tokens to show on polygon account
8. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
9. Use this polygon contract address for your getBalance script's tokenAddress.
10. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance that you deposited(NFTs)


## Authors

Jaidev K [jaidevvk12@gmail.com]

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
