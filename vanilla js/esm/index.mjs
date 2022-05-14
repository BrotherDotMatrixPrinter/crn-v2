import { ContractCommander } from './Class/ContractCommander.mjs'

const run = async () => {

	const contractCommander = new ContractCommander()

	console.log( await contractCommander.balance() )

}

run()