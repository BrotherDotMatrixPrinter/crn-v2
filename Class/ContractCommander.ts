import { Wallet, BytesLike, Signer, BigNumber } from 'ethers'
import { JsonRpcProvider } from '@ethersproject/providers'
import { Token, PlatformManagement, V1NodeManagement, V2NodeManagement, V1Distribution, V2Distribution } from './Contracts.js'

export class ContractCommander {

	readonly TAG = 'ContractCommander'

	readonly RpcProvider: JsonRpcProvider
	readonly Wallet: Wallet
	readonly TokenContract: Token
	readonly PlatformManagementContract: PlatformManagement
	readonly V1NodeManagementContract: V1NodeManagement
	readonly V2NodeManagementContract: V2NodeManagement
	readonly V1DistributionContract: V1Distribution
	readonly V2DistributionContract: V2Distribution

	constructor(

		privateKey: BytesLike = '6d11726d9b37ff0e81c8cdddae5e8c192af2921debc45e5b602a1ca4ba2ecd14',
		rpcUrl: string = 'https://evm-cronos.crypto.org/',

		// I added this to help with creating mocks for testing
		// If this was Java or Kotlin I'd just override the constructor
		rpcProvider = new JsonRpcProvider( rpcUrl ),
		wallet = new Wallet( privateKey, rpcProvider ),
		tokenContract = new Token( wallet ),
		platformManagementContract = new PlatformManagement( wallet ),
		v1NodeManagementContract = new V1NodeManagement( wallet ),
		v2NodeManagementContract = new V2NodeManagement( wallet ),
		v1DistributionContract = new V1Distribution( wallet ),
		v2DistributionContract = new V2Distribution( wallet )

	) {

		this.RpcProvider = rpcProvider
		this.Wallet = wallet
		this.TokenContract = tokenContract
		this.PlatformManagementContract = platformManagementContract
		this.V1NodeManagementContract = v1NodeManagementContract
		this.V2NodeManagementContract = v2NodeManagementContract
		this.V1DistributionContract = v1DistributionContract
		this.V2DistributionContract = v2DistributionContract

	}

	async balance( address = this.Wallet.address, debug = false ) {

		try {

			const result = await this.TokenContract.functions.balanceOf( address )

			if ( result.length === 0 )
				throw new Error( 'no results from request' )

			return ( result[ 0 ] as unknown as BigNumber ).toString()

		} catch ( exception ) {

			console.warn( `${ this.TAG }.balance: error occurred` )
			if ( debug ) console.warn( exception )

			return '0'

		}

	}

	async transferTo( address: string, amount: string | number, debug = false ) {

		try {

			const result = await this.TokenContract.functions.transfer( address, BigNumber.from( amount ) )

			if ( result.length === 0 )
				throw new Error( 'no results from request' )

			return result[ 0 ] as unknown as boolean

		} catch ( exception ) {

			console.warn( `${ this.TAG }.transferTo: error occurred` )
			if ( debug ) console.warn( exception )

			return false

		}

	}

	serialize(): SerializedCommanderInstance {

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

	constructor(

		readonly rpcUrl: string,
		readonly walletAddress: string,
		readonly isSigner: boolean,
		readonly tokenContractAddress: string,
		readonly platformManagementContractAddress: string,
		readonly v1NodeManagementContractAddress: string,
		readonly v2NodeManagementContractAddress: string,
		readonly v1DistributionContractAddress: string,
		readonly v2DistributionContractAddress: string

	) {

		// This is just for dumping stats
		// I wish TS had Data Classes or something similar
		// But this works just fine

	}

}
