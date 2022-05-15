import ContractFunctionsInterface from './ContractFunctionsInterface.js'

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */
/** @typedef { import( 'ethers' ).ContractFunction } ContractFunction */
/** @typedef { import( '../model/TierConfig' ).default } TierConfig */

/**
 * For use as an interface with PlatformManagementAbi.
 */
export default class PlatformManagementInterface extends ContractFunctionsInterface {

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	bronzeNftContractAddress

	/**
	 * @type { ( nodeIndex: BigNumber, nodeName: string ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	changeNodeName

	/**
	 * @type { () => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	claimAllNodes

	/**
	 * @type { ( nodeIndex: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	claimNode

	/**
	 * @type { ( nodeNames: string[], nodeTiers: BigNumber[] ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	createNodes

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	crnTokenAddress

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	distributionV2Address

	/**
	 * @type { () => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	enableRewardsBoostWithNFT

	/**
	 * @type { () => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	enableV1Claim

	/**
	 * @type { () => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	enableV1Migration

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	goldNftContractAddress

	/**
	 * @type { () => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	isActive

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	maxNodesPerAccount

	/**
	 * @type { ( totalNodesTransferred: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	migrateAndClaimV1

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	nftContractAddress

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	nodeManagementAddress

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	owner

	/**
	 * @type { () => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	payAllNodes

	/**
	 * @type { ( nodeIndex: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	payNode

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	paymentDaysCycle

	/**
	 * @type { ( nodeIndex: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	renewNode

	/**
	 * @type { () => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	renounceOwnership

	/**
	 * @type { ( newIsActive: boolean ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setActive

	/**
	 * @type { ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setBronzeNFTContractAddress

	/**
	 * @type { ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setCRNNFTContractAddress

	/**
	 * @type { ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setCRNNodesManagementAddress

	/**
	 * @type { ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setCRNTokenAddress

	/**
	 * @type { ( newEnableRewardsBoostWithNFT: boolean ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setEnableRewardsBoosting

	/**
	 * @type { ( newIsActive: boolean ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setEnableV1Claim

	/**
	 * @type { ( newIsActive: boolean ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setEnableV1Migration

	/**
	 * @type { ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setGoldNFTContractAddress

	/**
	 * @type { ( newMaxNodesPerAccount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setMaxNodesPerAccount

	/**
	 * @type { ( newPaymentDaysCycle: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	newPaymentDaysCycle

	/**
	 * @type { ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setSilverNFTContractAddress

	/**
	 * @type { ( newIsActive: boolean ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setSimulateV1Migration

	/**
	 * @type { ( nodeTier: BigNumber, tierData: TierConfig ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setTierConfiguration

	/**
	 * @type { ( newAddress: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setV1DistributionAddress

	/**
	 * @type { ( newDays: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setV1MigrationDays

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	silverNftContractAddress

	/**
	 * @type { () => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	simulateV1Migration

	/**
	 * @type { ( newOwner: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	transferOwnership

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	v1MigrationDays

	/**
	 * @type { ( percentageWithdrawl_: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	withdrawCRN

	/**
	 * @type { ( percentageWithdrawl_: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	withdrawCRO

}