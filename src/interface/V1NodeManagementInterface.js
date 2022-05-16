import ContractFunctionsInterface from './ContractFunctionsInterface.js'

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */
/** @typedef { import( 'ethers' ).ContractFunction } ContractFunction */

/** For use as an interface with V1NodeManagementAbi. */
export default class V1NodeManagementInterface extends ContractFunctionsInterface {

	/** @type { ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ _cashoutAllNodesReward
	/** @type { ( address: string, creationTime: BigNumber ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ _cashoutNodeReward
	/** @type { ( value: boolean ) => Promise< void[] > & ContractFunction< void[] > } */ _changeAutoDistri
	/** @type { ( time: BigNumber ) => Promise< void[] > & ContractFunction< void[] > } */ _changeClaimTime
	/** @type { ( value: BigNumber ) => Promise< void[] > & ContractFunction< void[] > } */ _changeGasDistri
	/** @type { ( value: BigNumber ) => Promise< void[] > & ContractFunction< void[] > } */ _changeNodePrice
	/** @type { ( value: BigNumber ) => Promise< void[] > & ContractFunction< void[] > } */ _changeRewardPerNode
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ _distributeRewards
	/** @type { ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ _getNodeNumberOf
	/** @type { ( address: string, creationTime: BigNumber ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ _getNodeRewardAmountOf
	/** @type { ( address: string ) => Promise< string[] > & ContractFunction< string[] > } */ _getNodesCreationTime
	/** @type { ( address: string ) => Promise< string[] > & ContractFunction< string[] > } */ _getNodesLastClaimTime
	/** @type { ( address: string ) => Promise< string[] > & ContractFunction< string[] > } */ _getNodesNames
	/** @type { ( address: string ) => Promise< string[] > & ContractFunction< string[] > } */ _getNodesRewardAvailable
	/** @type { ( address: string ) => Promise< BigNumber[] > & ( ( address: string, creationTime: BigNumber ) => Promise< BigNumber[] > ) & ContractFunction< BigNumber[] > } */ _getRewardAmountOf
	/** @type { ( address: string ) => Promise< boolean[] > & ContractFunction< boolean[] > } */ _isNodeOwner
	/** @type { () => Promise< boolean[] > & ContractFunction< boolean[] > } */ autoDistri
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ claimTime
	/** @type { ( address: string, name: string ) => Promise< void[] > & ContractFunction< void[] > } */ createNode
	/** @type { () => Promise< boolean[] > & ContractFunction< boolean[] > } */ distribution
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ gasForDistribution
	/** @type { () => Promise< string[] > & ContractFunction< string[] > } */ gateKeeper
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ lastDistributionCount
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ lastIndexProcessed
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ nodePrice
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ rewardPerNode
	/** @type { ( address: string ) => Promise< void[] > & ContractFunction< void[] > } */ setToken
	/** @type { () => Promise< string[] > & ContractFunction< string[] > } */ token
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ totalNodesCreated
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ totalRewardStaked

}