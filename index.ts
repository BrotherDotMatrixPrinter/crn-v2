import { ContractCommander } from './Class/ContractCommander.js'

const run = async () => {

	try {

		const contractCommander = new ContractCommander()

		/*

		You can also do something like this to destructure everything.

		I just like that it is one import, one constructor, has defaults,
			and provides access to everything in a neat little package.

		It may be pretty annoying since I have this configured to be
			really strict but you can change that in the tsconfig.

		const {

			RpcProvider,
			Wallet,
			TokenContract,
			PlatformManagementContract,
			V1NodeManagementContract,
			V2NodeManagementContract,
			V1DistributionContract,
			V2DistributionContract

		} = new ContractCommander()

		*/

		const result = await contractCommander.TokenContract.functions.balanceOf( contractCommander.Wallet.address )

		console.log( result[ 0 ]?.toString() )

		// I've also added some example helper functions
		console.log( await contractCommander.balance() )
		// There are probably some more functions that would be helpful
		// But it isn't to hard to make something that won't crash your script

	} catch ( exception: any ) {

		console.log( exception )

	}

}

run()