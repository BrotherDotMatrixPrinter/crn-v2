import ContractCommander from './Class/ContractCommander.js'

const run = async () => {

	try {

		const contractCommander = new ContractCommander()

		const result = await contractCommander.TokenContract.functions.balanceOf( contractCommander.Wallet.address )

		console.log( result[ 0 ]?.toString() )

	} catch ( exception: any ) {

		console.log( exception )

	}

}

run()