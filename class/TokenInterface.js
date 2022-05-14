import ContractFunctionsInterface from './ContractFunctionsInterface'

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */
/** @typedef { import( 'ethers' ).ContractFunction } ContractFunction */

/**
 * For use as an interface with TokenAbi.
 */
export default class TokenInterface extends ContractFunctionsInterface {

	/**
	 * @type { ( address: string ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	_isBlacklisted

	/**
	 * @type { ( address: string, spender: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	allowance

	/**
	 * @type { ( address: string, amount: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	approve

	/**
	 * @type { ( address: string ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	automatedMarketMakerPairs

	/**
	 * @type { ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	balanceOf

	/**
	 * @type { ( address: string, value: boolean ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	blacklistMalicious

	/**
	 * @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > & ContractFunction< void[] > }
	 */
	boostReward

	/**
	 * @type { () => Promise< void[] > & ContractFunction< void[] > & ContractFunction< void[] > }
	 */
	cashoutAll

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	cashoutFee

	/**
	 * @type { ( time: BigNumber ) => Promise< void[] > & ContractFunction< void[] > & ContractFunction< void[] > }
	 */
	cashoutReward

	/**
	 * @type { ( value: boolean ) => Promise< void[] > & ContractFunction< void[] > & ContractFunction< void[] > }
	 */
	changeAutoDistri

	/**
	 * @type { ( time: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	changeClaimTime

	/**
	 * @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	changeGasDistri

	/**
	 * @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	changeNodePrice

	/**
	 * @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	changeRewardPerNode

	/**
	 * @type { ( value: boolean ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	changeSwapLiquify

	/**
	 * @type { ( name: string ) => Promise< any[] > & ContractFunction< any[] > }
	 */
	createNodeWithTokens

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > & ContractFunction< string[] > }
	 */
	deadWallet

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	decimals

	/**
	 * @type { ( address: string, amount: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	decreaseAllowance

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	distributeRewards

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	distributionPool

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	futurFee

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	futurUsePool

	/**
	 * @type { () => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	getAutoDistri

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getClaimTime

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getDistriCount

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getGasDistri

	/**
	 * @type { ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getNodeNumberOf

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getNodePrice

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	getNodesCreatime

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	getNodesLastClaims

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	getNodesNames

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	getNodesRewards

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getRewardAmount

	/**
	 * @type { ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getRewardAmountOf

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getRewardPerNode

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getTotalCreatedNodes

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	getTotalStakedReward

	/**
	 * @type { ( address: string, amount: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	increaseAllowance

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	liquidityPoolFee

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	name

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	nodeRewardManager

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	owner

	/**
	 * @type { ( index: BigNumber ) => Promise< string[] > & ContractFunction< string[] > }
	 */
	payee

	/**
	 * @type { () => Promise< void[] > & ContractFunction< void[] > }
	 */
	publiDistriRewards

	/**
	 * @type { ( address: string ) => Promise< void[] > & ( ( token: string, address: string ) => Promise< void[] > ) & ContractFunction< void[] > }
	 */
	release

	/**
	 * @type { ( token: string, address: string ) => Promise< BigNumber[] > & ( ( address: string ) => Promise< BigNumber[] > ) & ContractFunction< BigNumber[] > }
	 */
	released

	/**
	 * @type { () => Promise< void[] > & ContractFunction< void[] > }
	 */
	renounceOwnership

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	rewardsFee

	/**
	 * @type { ( address: string, value: boolean ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setAutomatedMarketMakerPair

	/**
	 * @type { ( address: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	setNodeManagement

	/**
	 * @type { ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	shares

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	swapTokensAmount

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	symbol

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	totalFees

	/**
	 * @type { ( address: string ) => Promise< BigNumber[] > & ( () => Promise< BigNumber[] > ) & ContractFunction< BigNumber[] > }
	 */
	totalReleased

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	totalShares

	/**
	 * @type { () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > }
	 */
	totalSupply

	/**
	 * @type { ( address: string, amount: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	transfer

	/**
	 * @type { ( address: string, receiver: string, amount: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] > }
	 */
	transferFrom

	/**
	 * @type { ( address: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	transferOwnership

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	uniswapV2Pair

	/**
	 * @type { () => Promise< string[] > & ContractFunction< string[] > }
	 */
	uniswapV2Router

	/**
	 * @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	updateCashoutFee

	/**
	 * @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	updateFuturFee

	/**
	 * @type { ( address: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	updateFuturWall

	/**
	 * @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	updateLiquiditFee

	/**
	 * @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	updateRewardsFee

	/**
	 * @type { ( address: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	updateRewardsWall

	/**
	 * @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	updateRwSwapFee

	/**
	 * @type { ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	updateSwapTokensAmount

	/**
	 * @type { ( address: string ) => Promise< void[] > & ContractFunction< void[] > }
	 */
	updateUniswapV2Router

}
