const { ContractCommander } = require( './Class/ContractCommander.cjs' )

const run = async () => {

	const contractCommander = new ContractCommander()

	console.log( await contractCommander.balance() )

}

run()