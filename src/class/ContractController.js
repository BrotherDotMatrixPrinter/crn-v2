import { Contract, Signer } from 'ethers'

/** @typedef { import( 'ethers' ).ContractInterface } ContractInterface */
/** @typedef { import( 'ethers' ).ContractFunction } ContractFunction */
/** @typedef { import( 'ethers' ).providers.Provider } Provider */
/** @typedef { import( '../interface/ContractFunctionsInterface' ).default } ContractFunctionsInterface */

/**
 * The base class for the contracts.
 * @template { ContractFunctionsInterface } T
 */
export default class ContractController {

	/** @type { Contract } */ ethersContract
	/** @type { string } */ address
	/** @type { boolean } */ isSigned

	/** @type { T & [ name: string ]: ContractFunction< any > } */
	 get functions() { return this.ethersContract.functions }

	/**
	 * @param { string } addressOrName
	 * @param { ContractInterface } contractInterface
	 * @param { ( Provider | Signer )? } signerOrProvider
	 */
	constructor( addressOrName, contractInterface, signerOrProvider ) {

		this.ethersContract = new Contract( addressOrName, contractInterface, signerOrProvider )
		this.address = addressOrName
		this.isSigned = signerOrProvider instanceof Signer

	}

	/** @param { Signer } signer */
	sign( signer ) {

		this.ethersContract.connect( signer )
		this.isSigned = true

	}

}