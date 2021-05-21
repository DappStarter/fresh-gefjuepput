require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stool razor often exchange grace logic bubble trip'; 
let testAccounts = [
"0x5f0de43b0a7310c61a2bc0b66566f1abbeea1c687c514fe25caa841e3c0247b8",
"0xb1f192c0a75760d2fe5dca3a6cf2e0be84c157ce7263319d7fa1d754bf96336b",
"0x1f66e9659c17d4912c60e86090f4f7fc6cbcc3b4ade9146e5a11dd6c2c467c46",
"0x8d436a2c8e5cccbb7c7c6d2476897d71824586b39928b4c7506125c7a0f606d0",
"0xf88d91457e44b003a6a9df466aaad1a8fd8eda479ed684616da558ac0022db2f",
"0x8c6e60494a92085317db7195fde9e5cc597806316166b4652493f77fa3233e95",
"0xfd094781f038e0186996fde48c3688a6ffa5b225d49b9a3f6e6e99cb60d7a627",
"0x881f74afa63b674eb1f3ef34cfb5014806e8b5a554641ea83f519ae3064a375d",
"0x22f8f1d3565f52515dbe7f018b07fba242ecb9f3fcf392408d3e6a2f4a30ce62",
"0x86762fd686595af4df445e77310a14f2438241b23e9de4b29df3f9a45f196425"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
