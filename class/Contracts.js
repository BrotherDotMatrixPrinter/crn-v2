import CrnInfo from './CrnInfo'
import ContractController from './ContractController'

/** @typedef { import( 'ethers' ).providers.Provider } Provider */
/** @typedef { import( 'ethers' ).Signer } Signer */
/** @typedef { import( './TokenInterface' ).default } TokenInterface */
/** @typedef { import( './PlatformManagementInterface' ).default } PlatformManagementInterface */
/** @typedef { import( './V1DistributionInterface' ).default } V1DistributionInterface */
/** @typedef { import( './V1NodeManagementInterface' ).default } V1NodeManagementInterface */
/** @typedef { import( './V2DistributionInterface' ).default } V2DistributionInterface */
/** @typedef { import( './V2NodeManagementInterface' ).default } V2NodeManagementInterface */

// This is where the magic happens.

/**
 * For use as a constructor for the Token contract.
 * Use with TokenAbi and TokenInterface.
 * @extends { ContractController< TokenInterface > }
 */
export class Token extends ContractController {

	/**
	 * @param { ( Provider | Signer )? } signerOrProvider
	 */
	constructor( signerOrProvider = null ) {

		super( CrnInfo.token.address, CrnInfo.token.abi, signerOrProvider )

	}

}

/**
 * For use as a constructor for the Platform Management contract.
 * Use with PlatformManagementAbi and PlatformManagementInterface.
 * @extends { ContractController< PlatformManagementInterface > }
 */
export class PlatformManagement extends ContractController {

	/**
	 * @param { ( Provider | Signer )? } signerOrProvider
	 */
	 constructor( signerOrProvider = null ) {

		super( CrnInfo.platformManagement.address, CrnInfo.platformManagement.abi, signerOrProvider )

	}

}

/**
 * For use as a constructor for the V1 Distribution contract.
 * Use with V1DistributionAbi and V1DistributionInterface.
 * @extends { ContractController< V1DistributionInterface > }
 */
 export class V1Distribution extends ContractController {

	/**
	 * @param { ( Provider | Signer )? } signerOrProvider
	 */
	 constructor( signerOrProvider = null ) {

		super( CrnInfo.v1Distribution.address, CrnInfo.v1Distribution.abi, signerOrProvider )

	}

}

/**
 * For use as a constructor for the V1 Node Management contract.
 * Use with V1NodeManagementAbi and V1NodeManagementInterface.
 * @extends { ContractController< V1NodeManagementInterface > }
 */
 export class V1NodeManagement extends ContractController {

	/**
	 * @param { ( Provider | Signer )? } signerOrProvider
	 */
	 constructor( signerOrProvider = null ) {

		super( CrnInfo.v1NodeManagement.address, CrnInfo.v1NodeManagement.abi, signerOrProvider )

	}

}

/**
 * For use as a constructor for the V2 Distribution contract.
 * Use with V2DistributionAbi and V2DistributionInterface.
 * @extends { ContractController< V2DistributionInterface > }
 */
 export class V2Distribution extends ContractController {

	/**
	 * @param { ( Provider | Signer )? } signerOrProvider
	 */
	 constructor( signerOrProvider = null ) {

		super( CrnInfo.v2Distribution.address, CrnInfo.v2Distribution.abi, signerOrProvider )

	}

}

/**
 * For use as a constructor for the V2 Node Management contract.
 * Use with V2NodeManagementAbi and V2NodeManagementInterface.
 * @extends { ContractController< V2NodeManagementInterface > }
 */
 export class V2NodeManagement extends ContractController {

	/**
	 * @param { ( Provider | Signer )? } signerOrProvider
	 */
	 constructor( signerOrProvider = null ) {

		super( CrnInfo.v2NodeManagement.address, CrnInfo.v2NodeManagement.abi, signerOrProvider )

	}

}