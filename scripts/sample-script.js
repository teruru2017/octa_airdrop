// We require the Buidler Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `buidler run <script>` you'll find the Buidler
// Runtime Environment's members available in the global scope.
const bre = require("@nomiclabs/buidler");

async function main() {

  const THTESTNFT1155 = await hre.ethers.getContractFactory("THTESTNFT1155");
  const thtestnft1155 = await THTESTNFT1155.deploy();

  await thtestnft1155.deployed();

  console.log("NFT1155 deployed to:", thtestnft1155.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
