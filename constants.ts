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
    56: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', '0xe9e7cea3dedca5984780bafc599bd69add087d56', '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', '0x55d398326f99059ff775485246999027b3197955'],
    1: ['0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', '0xdAC17F958D2ee523a2206206994597C13D831ec7', '0x4Fabb145d64652a948d72533023f6E7A623C7C53', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2']
}


export const PROVIDER_BY_CHAIN = {
    56: ['https://bsc-dataseed1.binance.org', 'https://bsc-dataseed2.binance.org',
        'https://bsc.publicnode.com', 'https://bsc-dataseed2.bnbchain.org',
        'https://endpoints.omniatech.io/v1/bsc/mainnet/public',
        'https://bsc-dataseed3.binance.org'
    ],
    1: ['https://eth-mainnet.g.alchemy.com/v2/mPSHcj0adebxxiMfyc0ypJj4BY_0REdU',
        'https://eth-mainnet.g.alchemy.com/v2/G71KAWfCy3Usn__ostlJiQroy-6c3r5X',
        'https://eth-mainnet.g.alchemy.com/v2/qGtpmyumom3ZN2GZpnURw4H9vsKMGjgt',
        'https://api.zmok.io/mainnet/oaen6dy8ff6hju9k',
        'https://uk.rpc.blxrbdn.com',
        'https://rpc.ankr.com/eth',
        'https://eth.llamarpc.com'

    ]
}