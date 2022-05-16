import ContractCommander from './class/ContractCommander.js'

const run = async () => {

	if ( ! window || ! window.ethereum ) return

	try {

		const contractCommander = new ContractCommander()

		// When running in the console, do not use this method.
		await contractCommander.connectToMetamask()

		console.log( await contractCommander.balance() )

	} catch ( exception ) {

		console.log( exception )

	}

}

run()