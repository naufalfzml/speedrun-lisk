import { defineChain } from "thirdweb/chains";

export const liskSepolia = /*#__PURE__*/ defineChain({
  id: 4202,
  name: "Lisk Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpc: "https://rpc.sepolia-api.lisk.com",
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia-api.lisk.com"],
    },
    public: {
      http: ["https://rpc.sepolia-api.lisk.com"],
    },
  },
  blockExplorers: {
    blockscout: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com",
    },
    default: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com",
    },
  },
  testnet: true,
});