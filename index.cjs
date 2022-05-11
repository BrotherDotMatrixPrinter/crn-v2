const { Contract, Wallet, providers } = require( 'ethers' ),
	CrnInfo = require( './CrnInfo/CrnInfo.cjs' )

// This allows us to import types without TypeScript
/** @typedef { import( 'ethers' ).BigNumber } BigNumber */

const provider = new providers.JsonRpcProvider( 'https://evm-cronos.crypto.org/' ),
	wallet = new Wallet( '6d11726d9b37ff0e81c8cdddae5e8c192af2921debc45e5b602a1ca4ba2ecd14', provider ),
	tokenContract = new Contract( CrnInfo.token.address, CrnInfo.token.abi, wallet )

const run = async () => {

	// This will show you all of the functions
	// console.log( tokenContract.functions )

	// Here we can define a type for a particular function, using the ABI as reference
	// Only really useful for intellitype
	/**
	 * @callback BalanceOf
	 * @param { string } address
	 * @returns { Promise< BigNumber[] > }
	 */

	/** @type { BalanceOf } */
	const balanceOf = tokenContract.functions[ 'balanceOf(address)' ]

	// These functions are network calls and may fail, wrapping them in try/catch blocks would be wise
	try {

		const result = ( await balanceOf( wallet.address ) )[ 0 ]?.toString()

		console.log( result )

	} catch ( exception ) {

		console.log( exception )

	}

}

run()