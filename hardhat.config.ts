import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    ZURAVERSE: {
      chainId: 2712670149155000,
      url: "https://zuraverse-2712670149155000-1.jsonrpc.sagarpc.io/",
      accounts: [""], // Private Key of your metamask wallet
      gasPrice: 1000000000,
    },
  },
};

export default config;
