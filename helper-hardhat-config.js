const networkConfig = {
    default: {
        name: "hardhat",
       
    },
    31337: {
        name: "localhost",
        gas: 12000000,
        gasPrice: 8000000000, // 8 Gwei
       
    },
    11155111: {
        name: "sepolia",
        gas: 8000000,
        gasPrice: 5000000000, // 5 Gwei
        
    },
    1: {
        name: "mainnet",
        gas: 8000000,
        gasPrice: 10000000000, // 10 Gwei
       
    },
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6


module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
  
}