import ContractFunctionsInterface from './ContractFunctionsInterface.js'

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */
/** @typedef { import( 'ethers' ).ContractFunction } ContractFunction */

/** For use as an interface with V1DistributionAbi. */
export default class V1DistributionInterface extends ContractFunctionsInterface {

	/** @type { ( address: string ) => Promise< boolean[] > & ContractFunction< boolean[] > } */ HasClaimed
	/** @type { ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ UserExtraBlocks
	/** @type { ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ UserLastClaimTime
	/** @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > } */ changeBlocksPerDay
	/** @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > } */ changeFee
	/** @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > } */ changeMultiplier
	/** @type { () => Promise< any[] > & ContractFunction< any[] > } */ claimReward
	/** @type { () => Promise< string[] > & ContractFunction< string[] > } */ getCroNodeAddress
	/** @type { ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ getLastClaimedBlock
	/** @type { ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ getNextClaimBlock
	/** @type { () => Promise< string[] > & ContractFunction< string[] > } */ getNodeManager
	/** @type { ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ getUsersNumberOfNodes
	/** @type { () => Promise< string[] > & ContractFunction< string[] > } */ owner
	/** @type { () => Promise< void[] > & ContractFunction< void[] > } */ renounceOwnership
	/** @type { ( address: string ) => Promise< void[] > } */ transferOwnership
	/** @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > } */ viewCroNodeTokenBalance
	/** @type { () => Promise< void[] > & ContractFunction< void[] > } */ withdrawCro
	/** @type { () => Promise< void[] > & ContractFunction< void[] > } */ withdrawCroNodeTokens

}