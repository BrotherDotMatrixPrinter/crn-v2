import { Contract, ContractInterface, providers as Providers, Signer } from 'ethers'
import ContractFunctionsInterface from '../Interface/ContractFunctionsInterface.js'

export default abstract class ContractController< T extends ContractFunctionsInterface > {

	readonly ethersContract: Contract
	readonly address: string

	private _isSigned: boolean

	get isSigned() {

		return this._isSigned as Readonly< boolean >

	}

	get functions() {

		return this.ethersContract.functions as unknown as Readonly< T >

	}

	protected constructor( addressOrName: string, contractInterface: ContractInterface, signerOrProvider?: Providers.Provider | Signer ) {

		this.address = addressOrName
		this.ethersContract = new Contract( addressOrName, contractInterface, signerOrProvider )
		this._isSigned = signerOrProvider instanceof Signer

	}

	sign( signer: Signer ) {

		this.ethersContract.connect( signer )
		this._isSigned = true

	}

}