import ContractFunctionsInterface from './ContractFunctionsInterface.js'

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */
/** @typedef { import( 'ethers' ).ContractFunction } ContractFunction */

/** For use as an interface with V2DistributionAbi. */
export default class V2DistributionInterface extends ContractFunctionsInterface {

	/** @type { ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ _cashoutAllNodesReward
	/** @type { ( account: string, _creationTime: BigNumber ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ _cashoutNodeReward
	/** @type { ( newMode: boolean ) => Promise< void[] > & ContractFunction< void[] > } */ _changeAutoDistri
	/** @type { ( newTime: BigNumber ) => Promise< void[] > & ContractFunction< void[] > } */ _changeClaimTime
	/** @type { ( newGasDistri: BigNumber ) => Promise< void[] > & ContractFunction< void[] > } */ _changeGasDistri
	/** @type { ( newNodePrice: BigNumber ) => Promise< void[] > & ContractFunction< void[] > } */ _changeNodePrice
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ _distributeRewards
	/** @type { ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ _getNodeNumberOf
	/** @type { ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ _getNodeRewardAmountOf
	/** @type { ( account: string ) => Promise< string[] > & ContractFunction< string[] > } */ _getNodesCreationTime
	/** @type { ( account: string ) => Promise< string[] > & ContractFunction< string[] > } */ _getNodesLastClaimTime
	/** @type { ( account: string ) => Promise< string[] > & ContractFunction< string[] > } */ _getNodesNames
	/** @type { ( account: string ) => Promise< string[] > & ContractFunction< string[] > } */ _getNodesRewardAvailable
	/** @type { ( account: string ) => Promise< BigNumber[] > & ( ( account: string, _creationTime: BigNumber ) => Promise< BigNumber[] > ) & ContractFunction< BigNumber[] > } */ _getRewardAmountOf
	/** @type { ( account: string ) => Promise< boolean[] > & ContractFunction< boolean[] > } */ _isNodeOwner
	/** @type { () => Promise< boolean[] > & ContractFunction< boolean[] > } */ autoDistri
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ claimTime
	/** @type { ( account: string, nodeName: string ) => Promise< void[] > & ContractFunction< void[] > } */ createNode
	/** @type { () => Promise< boolean[] > & ContractFunction< boolean[] > } */ distribution
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ gasForDistribution
	/** @type { () => Promise< string[] > & ContractFunction< string[] > } */ gateKeeper
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ lastDistributionCount
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ lastIndexProcessed
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ nodePrice
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ rewardPerNode
	/** @type { ( token_: string ) => Promise< void[] > & ContractFunction< void[] > } */ setToken
	/** @type { () => Promise< string[] > & ContractFunction< string[] > } */ token
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ totalNodesCreated
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ totalRewardStaked

}