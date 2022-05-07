import { Wallet, providers as Providers } from 'ethers'
import { PlatformManagement } from './Class/Contracts.js'

// This is empty, please feel free to use it
const privateKey = '6d11726d9b37ff0e81c8cdddae5e8c192af2921debc45e5b602a1ca4ba2ecd14',
	rpcProvider = new Providers.JsonRpcProvider( 'https://rpc.vvs.finance/' ),
	wallet = new Wallet( privateKey , rpcProvider )

const run = async () => {

	const platformManagement = new PlatformManagement( wallet )

	try {

		const result = await platformManagement.functions.enableV1Claim()

		console.log( result )

	} catch ( exception: any ) {

		console.log( exception )

	}

}

run()