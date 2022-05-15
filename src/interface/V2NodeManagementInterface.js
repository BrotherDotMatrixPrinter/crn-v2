import ContractFunctionsInterface from './ContractFunctionsInterface.js'

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */
/** @typedef { import( 'ethers' ).ContractFunction } ContractFunction */
/** @typedef { import( '../model/NodeEntity' ).default } NodeEntity */

/**
 * For use as an interface with V2NodeManagementAbi.
 */
export default class V2NodeManagementInterface extends ContractFunctionsInterface {

	/**
	 * @type { ( account: string, value: boolean ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	blacklistMalicious

	/**
	 * @type { ( account: string, nodeIndex: boolean ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	burnNode

	/**
	 * @type { ( account: string ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	checkBlacklist

	/**
	 * @type { ( account: string ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	claimAllNodes

	/**
	 * @type { ( account: string, nodeIndex: boolean ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	claimNode

	/**
	 * @type { ( account: string, nodeName: string, nodeTier: BigNumber, hasMonthlyFee: boolean, paymentDueDays: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	createNode

	/**
	 * @type { ( account: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	deleteAccount

	/**
	 * @type { ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getAccountTier2Credit

	/**
	 * @type { ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getAccountTotalNodes

	/**
	 * @type { ( account: string ) => Promise< NodeEntity[] > & ContractFunction< NodeEntity[] > }
	 */
	getAllNodes

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getCreatedStats

	/**
	 * @type { ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getNodeTransfer

	/**
	 * @type { ( account: string, nodeIndex: BigNumber ) => Promise< NodeEntity[] > & ContractFunction< NodeEntity[] > }
	 */
	getSingleNode

	/**
	 * @type { ( account: string ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	hasNodeTransferred

	/**
	 * @type { () => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	isActive

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	managementAddress

	/**
	 * @type { ( x: string, y: BigNumber ) => Promise< ( string | BigNumber )[] > & ContractFunction< ( string | BigNumber )[] > }
	 */
	nodesOfAccount

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	owner

	/**
	 * @type { ( account: string, numberPaidDays: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	payAllNodes

	/**
	 * @type { ( account: string, nodeIndex: BigNumber, numberPaidDays: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	payNode

	/**
	 * @type { ( account: string, nodeIndex: BigNumber, numberPaidDays: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
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
	 * @type { ( newManagementAddress: string ) => Promise< string[] > & ContractFunction< string[] > }
	 */
	setManagementAddress

	/**
	 * @type { ( account: string, timestamp: BigNumber ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	setNodeTransfer

	/**
	 * @type { ( account: string, credit: BigNumber ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	setTier2Credit

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	totalNodesCreated

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	totalTierFiveNodesCreated

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	totalTierFourNodesCreated

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	totalTierThreeNodesCreated

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	totalTierTwoNodesCreated

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	totalTierOneNodesCreated

	/**
	 * @type { ( newOwner: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	transferOwnership

	/**
	 * @type { ( account: string, NodeIndex: BigNumber, node: NodeEntity ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	updateNode

}