import { Wallet } from 'ethers'
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import Token from '../contract/Token.js'
import { PlatformManagement, V1NodeManagement, V2NodeManagement, V1Distribution, V2Distribution } from '../contract/Contracts.js'

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */
/** @typedef { import( 'ethers' ).BytesLike } BytesLike */
/** @typedef { import( '@ethersproject/providers' ).JsonRpcSigner } JsonRpcSigner */
/** @typedef { import( '../model/NodeEntity' ).default } NodeEntity */

export default class ContractCommander {

	/** @type { JsonRpcProvider | Web3Provider } */ RpcProvider
	/** @type { Wallet | JsonRpcSigner } */ Wallet
	/** @type { Token } */ Token
	/** @type { PlatformManagement } */ PlatformManagement
	/** @type { V1Distribution } */ V1Distribution
	/** @type { V1NodeManagement } */ V1NodeManagement
	/** @type { V2Distribution } */ V2Distribution
	/** @type { V2NodeManagement } */ V2NodeManagement

	/**
	 * @param { BytesLike? } privateKey
	 * @param { string? } rpcUrl
	 * @param { boolean? } connectToMetamask
	 */
	constructor(

		privateKey = '6d11726d9b37ff0e81c8cdddae5e8c192af2921debc45e5b602a1ca4ba2ecd14',
		rpcUrl = 'https://evm-cronos.crypto.org/'

	) {

		this.RpcProvider = new JsonRpcProvider( rpcUrl )
		this.Wallet = new Wallet( privateKey, this.RpcProvider )
		this.Token = new Token( this.Wallet )
		this.PlatformManagement = new PlatformManagement( this.Wallet )
		this.V1NodeManagement = new V1NodeManagement( this.Wallet )
		this.V2NodeManagement = new V2NodeManagement( this.Wallet )
		this.V1Distribution = new V1Distribution( this.Wallet )
		this.V2Distribution = new V2Distribution( this.Wallet )

	}

	async connectToMetamask() {

		/** @type { Web3Provider } */
		this.RpcProvider = new Web3Provider( window.ethereum, 'any' )

		await this.RpcProvider.send( 'eth_requestAccounts', [] )

		/** @type { JsonRpcSigner } */
		this.Wallet = this.RpcProvider.getSigner()

		this.Token = new Token( this.Wallet )
		this.PlatformManagement = new PlatformManagement( this.Wallet )
		this.V1NodeManagement = new V1NodeManagement( this.Wallet )
		this.V2NodeManagement = new V2NodeManagement( this.Wallet )
		this.V1Distribution = new V1Distribution( this.Wallet )
		this.V2Distribution = new V2Distribution( this.Wallet )

	}

	/**
	 * Get the balance of the current wallet or someone else's.
	 * @param { string? } address
	 * @param { boolean? } debug
	 * @returns { Promise< string > }
	 */
	balance(

		// The types really help with metamask integration, the contract controller will grab the address
		address = this.Wallet instanceof Wallet ? this.Wallet.address : null,
		debug = false

	) {

		return this.Token.balance( address, debug )

	}

	/**
	 * Transfer CRN to another wallet.
	 * @param { string } address
	 * @param { string | number } amount
	 * @param { boolean? } debug
	 * @returns { Promise< boolean > }
	 */
	async transferTo( address, amount, debug = false ) {

		return this.Token.transferTo( address, amount, debug )

	}

	/**
	 * Get all of the nodes owned by the current wallet or someone else's.
	 * @param { string? } account
	 * @param { boolean? } debug
	 * @returns { Promise< NodeEntity[] > }
	 */
	async getAllNodes( account = this.Wallet.address, debug = false ) {

		try {

			/** @type { NodeEntity[] } */
			const result = await this.V2NodeManagement.functions.getAllNodes( account )

			if ( result.length === 0 )
				throw new Error( 'no results from request' )

			return result

		} catch ( exception ) {

			if ( debug ) {

				console.warn( 'ContractCommander.getAllNodes: error occurred' )
				console.warn( exception )

			}

			return []

		}

	}

}