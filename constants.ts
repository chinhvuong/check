export const erc20Abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

export const TOKEN_BY_CHAIN = {
    56: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', '0xe9e7cea3dedca5984780bafc599bd69add087d56', '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', '0x55d398326f99059ff775485246999027b3197955', '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', '0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9'],
    1: ['0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', '0xdAC17F958D2ee523a2206206994597C13D831ec7', '0x4Fabb145d64652a948d72533023f6E7A623C7C53', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', '0xae7ab96520de3a18e5e111b5eaab095312d7fe84', '0x0000000000085d4780B73119b644AE5ecd22b376']
}

const BSC_1 = [
    "https://endpoints.omniatech.io/v1/bsc/mainnet/public",
    "https://bsc.blockpi.network/v1/rpc/public",
    "https://rpc.ankr.com/bsc",
    "https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3",
    "https://bsc.publicnode.com",
    "https://bsc-dataseed3.defibit.io",
    "https://bscrpc.com",
    "https://bsc-dataseed1.bnbchain.org",
    "https://bsc-dataseed.binance.org",
    "https://bsc-dataseed3.binance.org",
    "https://bsc-dataseed2.binance.org",
    "https://bsc-dataseed1.binance.org",
    "https://bsc-dataseed4.ninicoin.io",
    "https://bsc-dataseed2.bnbchain.org",
    "https://bsc-dataseed4.binance.org",
    "https://bsc-dataseed4.defibit.io",
    "https://bsc-dataseed3.bnbchain.org",
    "https://bsc-dataseed2.defibit.io",
    "https://bsc-mainnet.public.blastapi.io",
    "https://bsc.rpc.blxrbdn.com",
    "https://bsc-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
    "https://koge-rpc-bsc.48.club",
    "https://bsc-dataseed4.bnbchain.org",
    "https://bsc-dataseed3.ninicoin.io",
    "https://rpc-bsc.48.club",
    "https://bsc-dataseed1.defibit.io",
    "https://bsc-dataseed2.ninicoin.io",
    "https://binance.nodereal.io",
    "https://1rpc.io/bnb"
]

const ETH_1 = [
    "https://eth.llamarpc.com",
    "https://virginia.rpc.blxrbdn.com",
    "https://uk.rpc.blxrbdn.com",
    "https://singapore.rpc.blxrbdn.com",
    "https://eth.api.onfinality.io/public",
    "https://eth.rpc.blxrbdn.com",
    "https://rpc.ankr.com/eth",
    "https://eth-rpc.gateway.pokt.network",
    "https://ethereum.blockpi.network/v1/rpc/public",
    "https://rpc.mevblocker.io",
    "https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7",
    "https://eth.meowrpc.com",
    "https://rpc.eth.gateway.fm",
    "https://rpc.flashbots.net",
    "https://eth-mainnet.public.blastapi.io",
    "https://gateway.tenderly.co/public/mainnet",
    "https://eth-mainnet.g.alchemy.com/v2/demo",
    "https://eth.drpc.org",
    "https://mainnet.gateway.tenderly.co",
    "https://api.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet",
    "https://api.securerpc.com/v1",
    "https://cloudflare-eth.com",
    "https://rpc.payload.de",
    "https://eth-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
    "https://eth-mainnet-public.unifra.io",
    "https://endpoints.omniatech.io/v1/eth/mainnet/public",
    "https://core.gashawk.io/rpc",
    "https://api.zmok.io/mainnet/oaen6dy8ff6hju9k",
    "https://1rpc.io/eth",
    "https://ethereum.publicnode.com",
    "https://rpc.builder0x69.io",
    "https://rpc.tenderly.co/fork/c63af728-a183-4cfb-b24e-a92801463484",
    "https://rpc.chain49.com/ethereum?api_key=14d1a8b86d8a4b4797938332394203dc",
]

const BSC_SET_1 = ['https://bsc-dataseed1.binance.org', 'https://bsc-dataseed2.binance.org',
    'https://bsc.publicnode.com', 'https://bsc-dataseed2.bnbchain.org',
    'https://endpoints.omniatech.io/v1/bsc/mainnet/public',
    'https://bsc-dataseed3.binance.org'
]

const ETH_SET_1 = ['https://eth-mainnet.g.alchemy.com/v2/mPSHcj0adebxxiMfyc0ypJj4BY_0REdU',
    'https://eth-mainnet.g.alchemy.com/v2/G71KAWfCy3Usn__ostlJiQroy-6c3r5X',
    'https://eth-mainnet.g.alchemy.com/v2/qGtpmyumom3ZN2GZpnURw4H9vsKMGjgt',
    'https://api.zmok.io/mainnet/oaen6dy8ff6hju9k',
    'https://uk.rpc.blxrbdn.com',
    'https://rpc.ankr.com/eth',
    'https://eth.llamarpc.com'

]

export const PROVIDER_BY_CHAIN = {
    56: BSC_SET_1,
    1: ETH_SET_1
}