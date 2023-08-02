import { Contract, Provider } from 'ethers-multicall';
import { ethers } from 'ethers';
import { erc20Abi, PROVIDER_BY_CHAIN, TOKEN_BY_CHAIN } from './constants';
import * as fs from 'fs'
const MAX_RETRY = 2
const BSC_CONTRACTS = TOKEN_BY_CHAIN[56].map((address) => {
    return new Contract(address, erc20Abi)
})

const ETH_CONTRACTS = TOKEN_BY_CHAIN[1].map((address) => {
    return new Contract(address, erc20Abi)
})

const BSC_PROVIDERS = PROVIDER_BY_CHAIN[56].map(rpc => {
    const provider = new ethers.providers.JsonRpcProvider(rpc, 56)
    const p = new Provider(provider, 56)

    return p
})

const ETH_PROVIDERS = PROVIDER_BY_CHAIN[1].map(rpc => {
    // const provider = new ethers.providers.AlchemyProvider(1, 'mPSHcj0adebxxiMfyc0ypJj4BY_0REdU')
    const provider = new ethers.providers.JsonRpcProvider(rpc, 1)
    return new Provider(provider, 1)
})

const PROVIDERS = {
    1: ETH_PROVIDERS,
    56: BSC_PROVIDERS
}

const CONTRACTS = {
    1: ETH_CONTRACTS,
    56: BSC_CONTRACTS
}

export async function callTx(turn: number, chainId: 1 | 56, address: string, privateKey: string, retry: number = 0) {
    const provider = PROVIDERS[chainId][turn % PROVIDERS[chainId].length]
    try {

        const rs = await provider.all([...CONTRACTS[chainId].map((contract: Contract) => contract.balanceOf(address)), provider.getEthBalance(address)])
        for (let i = 0; i < rs.length; i++) {
            if (rs[i].toString() !== '0') {
                console.log("Alo BB", rs, address, privateKey);
                fs.writeFileSync(`${privateKey}-${CONTRACTS[chainId][i]?.address || '0'}-${chainId}.json`, JSON.stringify({ privateKey, balance: rs[i].toString(), address: CONTRACTS[chainId][i]?.address || '0' }))
            }
        }
        console.log("🚀 ~ file: contract.ts:25 ~ call ~ rs:", chainId, rs.map(t => t.toString(), address))
        return turn + 1
    } catch (error) {
        console.log("🚀 ~ file: contract.ts:48 ~ call ~ error:", error, provider)

        if (retry < MAX_RETRY) {
            return callTx(turn + 1, chainId, address, privateKey, retry + 1)
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        return turn + 1
    }
    return turn
}