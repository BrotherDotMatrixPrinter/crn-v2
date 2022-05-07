import { Wallet, Contract, providers as Providers } from 'ethers'
import CrnInfo from './CrnInfo/CrnInfo.mjs'

const privateKey = '',
	rpcProvider = new Providers.JsonRpcProvider( 'https://rpc.vvs.finance/' ),
	wallet = new Wallet( privateKey, rpcProvider )

const run = async () => {

	const contract = new Contract( CrnInfo.token.address, CrnInfo.token.abi, wallet )

	try { console.log( ( await contract.functions[ 'balanceOf(address)' ]( wallet.address ) )[ 0 ].toString() ) }
	catch { console.log( 'Failed to get balance!' ) }

}

run()