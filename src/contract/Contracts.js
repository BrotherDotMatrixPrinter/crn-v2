import CrnInfo from '../class/CrnInfo.js'
import ContractController from '../class/ContractController.js'

/** @typedef { import( 'ethers' ).providers.Provider } Provider */
/** @typedef { import( 'ethers' ).Signer } Signer */
/** @typedef { import( '../interface/PlatformManagementInterface' ).default } PlatformManagementInterface */
/** @typedef { import( '../interface/V1DistributionInterface' ).default } V1DistributionInterface */
/** @typedef { import( '../interface/V1NodeManagementInterface' ).default } V1NodeManagementInterface */
/** @typedef { import( '../interface/V2DistributionInterface' ).default } V2DistributionInterface */
/** @typedef { import( '../interface/V2NodeManagementInterface' ).default } V2NodeManagementInterface */

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