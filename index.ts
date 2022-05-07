import { Wallet, providers as Providers } from 'ethers'
import { Token } from './Class/Contracts'

const privateKey = '',
	rpcProvider = new Providers.JsonRpcProvider( 'https://rpc.vvs.finance/' ),
	wallet = new Wallet( privateKey , rpcProvider )

const run = async () => {

	const token = new Token( wallet )

	try { console.log( ( await token.functions.balanceOf( wallet.address ) )[ 0 ]?.toString() ) }
	catch { console.log( 'Failed to get balance!' ) }

}

run()