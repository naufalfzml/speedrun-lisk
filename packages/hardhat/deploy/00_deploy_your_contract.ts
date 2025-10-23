import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy MyToken first and wait for it to complete
  const myTokenDeployment = await deploy("MyToken", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  // Small delay to ensure nonce is updated
  if (myTokenDeployment.newlyDeployed) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Deploy MyNFT after MyToken is confirmed
  await deploy("MyNFT", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
};

export default deployContracts;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployContracts.tags = ["MyToken", "MyNFT"];
