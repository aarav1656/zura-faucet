import hre from "hardhat";
import "@nomicfoundation/hardhat-viem";

import { defineChain } from "viem";
import { privateKeyToAccount } from "viem/accounts";
const privateKey = ""

import Contract from "../artifacts/contracts/faucet.sol/faucet.json";

export const faucetworld = defineChain({
    id: 2712670149155000,
    name: "ZURAVERSE",
    network: "ZURAVERSE",
    nativeCurrency: {
        decimals: 18,
        name: "ZURA",
        symbol: "zura",
    },
    rpcUrls: {
        public: {
            http: ["https://zuraverse-2712670149155000-1.jsonrpc.sagarpc.io/"]
        },
        default: {
            http: ["https://zuraverse-2712670149155000-1.jsonrpc.sagarpc.io/"]
        }
    }
});

async function main() {
    const privateKey = ""; // Make sure to replace this with your actual private key
    const account = privateKeyToAccount(`0x${privateKey}`);

    const contract = await hre.viem.getWalletClient({
        privateKey: `0x${privateKey}`,
        chain: ZURAVERSE,
    });

    const hash = await Contract.deployContract({
        abi: Contract.abi,
        account: account,
        bytecode: Contract.bytecode as `0x${string}`
    });

    console.log("Contract deployed");

    console.log(`https://${contract.chain.name}-${contract.chain.id}-${hash}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
