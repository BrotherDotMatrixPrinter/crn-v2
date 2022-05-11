import { providers as Providers, Signer } from 'ethers'
import CrnInfo from '../CrnInfo/CrnInfo.mjs'
import ContractController from './ContractController.js'
import TokenInterface from '../Interface/TokenInterface.js'
import PlatformManagementInterface from '../Interface/PlatformManagementInterface.js'
import V1NodeManagementInterface from '../Interface/V1NodeManagementInterface.js'
import V2NodeManagementInterface from '../Interface/V2NodeManagementInterface.js'
import V1DistributionInterface from '../Interface/V1DistributionInterface.js'
import V2DistributionInterface from '../Interface/V2DistributionInterface.js'

export class Token extends ContractController< TokenInterface > {

	constructor( signerOrProvider?: Providers.Provider | Signer ) {

		super( CrnInfo.token.address, CrnInfo.token.abi, signerOrProvider )

	}

}

export class PlatformManagement extends ContractController< PlatformManagementInterface > {

	constructor( signerOrProvider?: Providers.Provider | Signer ) {

		super( CrnInfo.platformManagement.address, CrnInfo.platformManagement.abi, signerOrProvider )

	}

}

export class V1NodeManagement extends ContractController< V1NodeManagementInterface > {

	constructor( signerOrProvider?: Providers.Provider | Signer ) {

		super( CrnInfo.v1NodeManagement.address, CrnInfo.v1NodeManagement.abi, signerOrProvider )

	}

}

export class V2NodeManagement extends ContractController< V2NodeManagementInterface > {

	constructor( signerOrProvider?: Providers.Provider | Signer ) {

		super( CrnInfo.v2NodeManagement.address, CrnInfo.v2NodeManagement.abi, signerOrProvider )

	}

}

export class V1Distribution extends ContractController< V1DistributionInterface > {

	constructor( signerOrProvider?: Providers.Provider | Signer ) {

		super( CrnInfo.v1Distribution.address, CrnInfo.v1Distribution.abi, signerOrProvider )

	}

}

export class V2Distribution extends ContractController< V2DistributionInterface > {

	constructor( signerOrProvider?: Providers.Provider | Signer ) {

		super( CrnInfo.v2Distribution.address, CrnInfo.v2Distribution.abi, signerOrProvider )

	}

}

export default {

	Token,
	PlatformManagement,
	V1NodeManagement,
	V2NodeManagement,
	V1Distribution,
	V2Distribution

}