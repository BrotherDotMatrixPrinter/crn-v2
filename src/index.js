import { Web3Provider } from '@ethersproject/providers'
import Token from './contract/Token.js'

const run = async () => {

	if ( ! window || ! window.ethereum ) return

	const { ethereum } = window

	try {

		/* This will request access to accounts.
		 * If access is denied, it should throw an exception. */
		await ethereum.request( { method: 'eth_requestAccounts' } )

		/**
		 * If access to accounts is granted, this will get their public addresses.
		 * @type { string[] }
		 */
		const accounts = await ethereum.request( { method: 'eth_accounts' } )

		// If the first request does not throw an exception when access is denied, this will.
		if ( accounts.length === 0 )
			throw new Error( 'cannot get accounts' )

		console.log( accounts )

		const provider = new Web3Provider( ethereum, 'any' ), // The provider === metamask
			signer = provider.getSigner( accounts[ 0 ] ), // Signer is whatever wallet is first
			contract = new Token( signer ) // Contract interface is created with the signer

		/* I need to revise a lot of the code to make it easier to use metamask.
		 * The commander may end up automatically grabbing metamask. */
		console.log( await contract.balance( accounts[ 0 ] ) )

	} catch ( exception ) {

		console.log( exception )

	}

}

run()