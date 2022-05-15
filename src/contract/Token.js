import CrnInfo from '../class/CrnInfo.js'
import ContractController from '../class/ContractController.js'

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */
/** @typedef { import( 'ethers' ).providers.Provider } Provider */
/** @typedef { import( 'ethers' ).Signer } Signer */
/** @typedef { import( '../interface/TokenInterface' ).default } TokenInterface */

/**
 * For use as a constructor for the Token contract.
 * Use with TokenAbi and TokenInterface.
 * @extends { ContractController< TokenInterface > }
 */
 export default class Token extends ContractController {

	/**
	 * @param { ( Provider | Signer )? } signerOrProvider
	 */
	constructor( signerOrProvider = null ) {

		super( CrnInfo.token.address, CrnInfo.token.abi, signerOrProvider )

	}

	/**
	 * Get the balance of the address.
	 * @param { string } address
	 * @param { boolean? } debug
	 * @returns { Promise< string > }
	 */
	async balance( address, debug = false ) {

		/**
		 * @type { TokenInterface }
		 */
		const functions = this.ethersContract.functions

		try {

			/**
			 * @type { BigNumber[] }
			 */
			const result = await functions.balanceOf( address )

			if ( result.length === 0 )
				throw new Error( 'no results from request' )

			return result[ 0 ].toString()

		} catch ( exception ) {

			console.warn( 'Token.balance: error occurred' )
			if ( debug ) console.warn( exception )

			return '0'

		}

	}

	/**
	 * Transfer CRN to another wallet.
	 * @param { string } address
	 * @param { string | number } amount
	 * @param { boolean? } debug
	 * @returns { Promise< boolean > }
	 */
	async transferTo( address, amount, debug = false ) {

		/**
		 * @type { TokenInterface }
		 */
		const functions = this.ethersContract.functions

		try {

			/**
			 * @type { boolean[] }
			 */
			const result = await functions.transfer( address, BigNumber.from( amount ) )

			if ( result.length === 0 )
				throw new Error( 'no results from request' )

			return result[ 0 ]

		} catch ( exception ) {

			console.warn( 'Token.transferTo: error occurred' )
			if ( debug ) console.warn( exception )

			return false

		}

	}

}