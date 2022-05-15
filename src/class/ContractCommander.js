import { Wallet } from 'ethers'
import { JsonRpcProvider } from '@ethersproject/providers'
import Token from '../contract/Token.js'
import { PlatformManagement, V1NodeManagement, V2NodeManagement, V1Distribution, V2Distribution } from '../contract/Contracts.js'

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */
/** @typedef { import( 'ethers' ).BytesLike } BytesLike */
/** @typedef { import( 'ethers' ).providers.Web3Provider } Web3Provider */
/** @typedef { import( 'ethers' ).Signer } Signer */
/** @typedef { import( '@ethersproject/abstract-signer' ).ExternallyOwnedAccount } ExternallyOwnedAccount */
/** @typedef { import( '../model/NodeEntity' ).default } NodeEntity */

export class ContractCommander {

	#TAG = 'ContractCommander'

	/**
	 * @type { JsonRpcProvider }
	 */
	#RpcProvider

	/**
	 * @type { Wallet }
	 */
	#Wallet

	/**
	 * @type { Token }
	 */
	#Token

	/**
	 * @type { PlatformManagement }
	 */
	#PlatformManagement

	/**
	 * @type { V1Distribution }
	 */
	 #V1Distribution

	/**
	 * @type { V1NodeManagement }
	 */
	#V1NodeManagement

	/**
	 * @type { V2Distribution }
	 */
	 #V2Distribution

	/**
	 * @type { V2NodeManagement }
	 */
	#V2NodeManagement

	get RpcProvider() { return this.#RpcProvider }
	get Wallet() { return this.#Wallet }
	get Token() { return this.#Token }
	get PlatformManagement() { return this.#PlatformManagement }
	get V1NodeManagement() { return this.#V1NodeManagement }
	get V2NodeManagement() { return this.#V2NodeManagement }
	get V1Distribution() { return this.#V1Distribution }
	get V2Distribution() { return this.#V2Distribution }

	/**
	 * @param { BytesLike | ExternallyOwnedAccount } privateKeyOrExternalAccount
	 * @param { string } rpcUrl
	 * @param { JsonRpcProvider | Web3Provider } rpcProvider
	 * @param { Wallet } wallet
	 * @param { Token } token
	 * @param { PlatformManagement } platformManagement
	 * @param { V1Distribution } v1Distribution
	 * @param { V1NodeManagement } v1NodeManagement
	 * @param { V2Distribution } v2Distribution
	 * @param { V2NodeManagement } v2NodeManagement
	 */
	constructor(

		privateKeyOrExternalAccount = '6d11726d9b37ff0e81c8cdddae5e8c192af2921debc45e5b602a1ca4ba2ecd14',
		rpcUrl = 'https://evm-cronos.crypto.org/',

		// I added this to help with creating mocks for testing
		// If this was Java or Kotlin I'd just override the constructor
		rpcProvider = new JsonRpcProvider( rpcUrl ),
		wallet = new Wallet( privateKeyOrExternalAccount, rpcProvider ),
		token = new Token( wallet ),
		platformManagement = new PlatformManagement( wallet ),
		v1NodeManagement = new V1NodeManagement( wallet ),
		v2NodeManagement = new Wallet( wallet ),
		v1Distribution = new V1Distribution( wallet ),
		v2Distribution = new V2Distribution( wallet )

	) {

		this.#RpcProvider = rpcProvider
		this.#Wallet = wallet
		this.#Token = token
		this.#PlatformManagement = platformManagement
		this.#V1NodeManagement = v1NodeManagement
		this.#V2NodeManagement = v2NodeManagement
		this.#V1Distribution = v1Distribution
		this.#V2Distribution = v2Distribution

	}

	/**
	 * Get the balance of the current wallet or someone else's.
	 * @param { string? } address
	 * @param { boolean? } debug
	 * @returns { Promise< string > }
	 */
	balance( address = this.Wallet.address, debug = false ) {

		return this.#Token.balance( address, debug )

	}

	/**
	 * Transfer CRN to another wallet.
	 * @param { string } address
	 * @param { string | number } amount
	 * @param { boolean? } debug
	 * @returns { Promise< boolean > }
	 */
	async transferTo( address, amount, debug = false ) {

		return this.#Token.transferTo( address, amount, debug )

	}

	/**
	 * Get all of the nodes owned by the current wallet or someone else's.
	 * @param { string? } account
	 * @param { boolean? } debug
	 * @returns { Promise< NodeEntity[] > }
	 */
	async getAllNodes( account = this.Wallet.address, debug = false ) {

		try {

			/**
			 * @type { NodeEntity[] }
			 */
			const result = await this.#V2NodeManagement.functions.getAllNodes( account )

			if ( result.length === 0 )
				throw new Error( 'no results from request' )

			return result

		} catch ( exception ) {

			if ( debug ) {

				console.warn( `${ this.#TAG }.getAllNodes: error occurred` )
				console.warn( exception )

			}

			return []

		}

	}

	/**
	 * Serializes basic information from the commander.
	 * @returns { SerializedCommanderInstance }
	 */
	serialize() {

		return new SerializedCommanderInstance(

			this.RpcProvider.connection.url,
			this.Wallet.address,
			this.Wallet instanceof Signer,
			this.TokenContract.address,
			this.PlatformManagementContract.address,
			this.V1NodeManagementContract.address,
			this.V2NodeManagementContract.address,
			this.V1DistributionContract.address,
			this.V2DistributionContract.address

		)

	}

}

export class SerializedCommanderInstance {

	/**
	 * @type { string }
	 */
	#rpcUrl

	/**
	 * @type { string }
	 */
	#walletAddress

	/**
	 * @type { boolean }
	 */
	#isSigner

	/**
	 * @type { string }
	 */
	#tokenContractAddress

	/**
	 * @type { string }
	 */
	#platformManagementContractAddress

	/**
	 * @type { string }
	 */
	#v1NodeManagementContractAddress

	/**
	 * @type { string }
	 */
	#v2NodeManagementContractAddress

	/**
	 * @type { string }
	 */
	#v1DistributionContractAddress

	/**
	 * @type { string }
	 */
	#v2DistributionContractAddress

	get rpcUrl() { return this.#rpcUrl }
	get walletAddress() { return this.#walletAddress }
	get isSigner() { return this.#isSigner }
	get tokenContractAddress() { return this.#tokenContractAddress }
	get platformManagementContractAddress() { return this.#platformManagementContractAddress }
	get v1NodeManagementContractAddress() { return this.#v1NodeManagementContractAddress }
	get v2NodeManagementContractAddress() { return this.#v2NodeManagementContractAddress }
	get v1DistributionContractAddress() { return this.#v1DistributionContractAddress }
	get v2DistributionContractAddress() { return this.#v2DistributionContractAddress }

	/**
	 * @param { string } rpcUrl
	 * @param { string } walletAddress
	 * @param { boolean } isSigner
	 * @param { string } tokenContractAddress
	 * @param { string } platformManagementContractAddress
	 * @param { string } v1NodeManagementContractAddress
	 * @param { string } v2NodeManagementContractAddress
	 * @param { string } v1DistributionContractAddress
	 * @param { string } v2DistributionContractAddress
	 */
	constructor(

		rpcUrl,
		walletAddress,
		isSigner,
		tokenContractAddress,
		platformManagementContractAddress,
		v1NodeManagementContractAddress,
		v2NodeManagementContractAddress,
		v1DistributionContractAddress,
		v2DistributionContractAddress

	) {

		this.#rpcUrl = rpcUrl
		this.#walletAddress = walletAddress
		this.#isSigner = isSigner
		this.#tokenContractAddress = tokenContractAddress
		this.#platformManagementContractAddress = platformManagementContractAddress
		this.#v1NodeManagementContractAddress = v1NodeManagementContractAddress
		this.#v2NodeManagementContractAddress = v2NodeManagementContractAddress
		this.#v1DistributionContractAddress = v1DistributionContractAddress
		this.#v2DistributionContractAddress = v2DistributionContractAddress

	}

}