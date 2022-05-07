import { Wallet, BytesLike } from 'ethers'
import { JsonRpcProvider } from '@ethersproject/providers'
import { Token, PlatformManagement, V1NodeManagement, V2NodeManagement, V1Distribution, V2Distribution } from './Contracts.js'

export default class ContractCommander {

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
		rpcUrl: string = 'https://rpc.vvs.finance/'

	) {

		this.RpcProvider = new JsonRpcProvider( rpcUrl )
		this.Wallet = new Wallet( privateKey, this.RpcProvider )
		this.TokenContract = new Token( this.Wallet )
		this.PlatformManagementContract = new PlatformManagement( this.Wallet )
		this.V1NodeManagementContract = new V1NodeManagement( this.Wallet )
		this.V2NodeManagementContract = new V2NodeManagement( this.Wallet )
		this.V1DistributionContract = new V1Distribution( this.Wallet )
		this.V2DistributionContract = new V2Distribution( this.Wallet )

	}

}