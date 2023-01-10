const hre = require("hardhat");

async function main() {

  const Hackathon = await hre.ethers.getContractFactory("Hackathon");
  const hackathon = await Hackathon.deploy();

  await hackathon.deployed();

  console.log(
    `Hackathon contract deployed to ${hackathon.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
