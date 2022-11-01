require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture street repeat machine exchange giraffe light army gather'; 
let testAccounts = [
"0x3250e1fdca2c99a0f27165122c741e1fa8e8be3c74b5b6bfe3a9c270af4af15c",
"0x2f15bdc31ae7027f841cb6a0f1c023520263cd83d69ea8b9245ce0b6a079e0c8",
"0x7391b111010b7f8138f074516727b694d6703ef3ad15f0ed8f830ac40b069371",
"0x7aa07dffbb602108718cf111707ba657bfe3d52abcba349d8b75805d4c944aa9",
"0x776d60991e0eec21cd7af1948408d823bceb5fff017d1df68521098b2a2195f2",
"0x9f02c7ec1ed7df8f80036a6a0f871e30ee311d84cde2f68495bb8e3fe28d1cb9",
"0x0a7464d1196e185cc67bb7792d6287ec2b11e47f174d728bc0afa9b6fce1d23a",
"0xa4b591397f77086b7ea42fa51e88f53baa89a54825cb6d1d2bb1eef0b2276d53",
"0x2a93b6ac5f1d5390a403b302b586ad961434b4efe139e9221edd8e44fa8ed0e6",
"0xc385d6d9e0a152fc96007d3eaa6b14ae19f141f1cdfd38c2638da82e9d825e29"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

