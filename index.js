import { ContractCommander } from './class/ContractCommander'

const contractCommander = new ContractCommander()

const run = async () => {

	console.log( await contractCommander.balance() )

}

run()