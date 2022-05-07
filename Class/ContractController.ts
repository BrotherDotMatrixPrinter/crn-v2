import { Contract, ContractInterface, providers as Providers, Signer } from 'ethers'
import ContractFunctionsInterface from '../Interface/ContractFunctionsInterface.js'

export default abstract class ContractController< T extends ContractFunctionsInterface > {

	private _ethersContract: Contract
	private _address: string
	private _isSigned: boolean

	get ethersContract() {

		return this._ethersContract as Readonly< Contract >

	}

	get address() {

		return this._address as Readonly< string >

	}

	get isSigned() {

		return this._isSigned as Readonly< boolean >

	}

	get functions() {

		return this._ethersContract.functions as unknown as Readonly< T >

	}

	protected constructor( addressOrName: string, contractInterface: ContractInterface, signerOrProvider?: Providers.Provider | Signer ) {

		this._address = addressOrName
		this._ethersContract = new Contract( addressOrName, contractInterface, signerOrProvider )
		this._isSigned = signerOrProvider instanceof Signer

	}

	sign( signer: Signer ) {

		this._ethersContract.connect( signer )
		this._isSigned = true

	}

}