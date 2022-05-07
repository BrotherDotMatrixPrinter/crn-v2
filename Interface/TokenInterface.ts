import { BigNumber, ContractFunction } from 'ethers'
import ContractFunctionsInterface from './ContractFunctionsInterface.js'

export default interface TokenInterface extends ContractFunctionsInterface {

	_isBlacklisted: ( address: string ) => Promise< boolean[] > & ContractFunction< boolean[] >

	allowance: ( address: string, spender: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	approve: ( address: string, amount: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	automatedMarketMakerPairs: ( address: string ) => Promise< boolean[] > & ContractFunction< boolean[] >

	balanceOf: ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	blacklistMalicious: ( address: string, value: boolean ) => Promise< void[] > & ContractFunction< void[] >

	boostReward: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] > & ContractFunction< void[] >

	cashoutAll: () => Promise< void[] > & ContractFunction< void[] > & ContractFunction< void[] >

	cashoutFee: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	cashoutReward: ( time: BigNumber ) => Promise< void[] > & ContractFunction< void[] > & ContractFunction< void[] >

	changeAutoDistri: ( value: boolean ) => Promise< void[] > & ContractFunction< void[] > & ContractFunction< void[] >

	changeClaimTime: ( time: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	changeGasDistri: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	changeNodePrice: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	changeRewardPerNode: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	changeSwapLiquify: ( value: boolean ) => Promise< void[] > & ContractFunction< void[] >

	createNodeWithTokens: ( name: string ) => Promise< any[] > & ContractFunction< any[] >

	deadWallet: () => Promise< string[] > & ContractFunction< string[] > & ContractFunction< string[] >

	decimals: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] > // Revisit this, uint8

	decreaseAllowance: ( address: string, amount: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	distributeRewards: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	distributionPool: () => Promise< string[] > & ContractFunction< string[] >

	futurFee: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	futurUsePool: () => Promise< string[] > & ContractFunction< string[] >

	getAutoDistri: () => Promise< boolean[] > & ContractFunction< boolean[] >

	getClaimTime: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getDistriCount: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getGasDistri: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getNodeNumberOf: ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getNodePrice: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getNodesCreatime: () => Promise< string[] > & ContractFunction< string[] >

	getNodesLastClaims: () => Promise< string[] > & ContractFunction< string[] >

	getNodesNames: () => Promise< string[] > & ContractFunction< string[] >

	getNodesRewards: () => Promise< string[] > & ContractFunction< string[] >

	getRewardAmount: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getRewardAmountOf: ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getRewardPerNode: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getTotalCreatedNodes: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getTotalStakedReward: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	increaseAllowance: ( address: string, amount: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	liquidityPoolFee: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	name: () => Promise< string[] > & ContractFunction< string[] >

	nodeRewardManager: () => Promise< string[] > & ContractFunction< string[] >

	owner: () => Promise< string[] > & ContractFunction< string[] >

	payee: ( index: BigNumber ) => Promise< string[] > & ContractFunction< string[] >

	publiDistriRewards: () => Promise< void[] > & ContractFunction< void[] >

	release: ( address: string ) => Promise< void[] > & ( ( token: string, address: string ) => Promise< void[] > ) & ContractFunction< void[] >

	released: ( token: string, address: string ) => Promise< BigNumber[] > & ( ( address: string ) => Promise< BigNumber[] > ) & ContractFunction< BigNumber[] >

	renounceOwnership: () => Promise< void[] > & ContractFunction< void[] >

	rewardsFee: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	setAutomatedMarketMakerPair: ( address: string, value: boolean ) => Promise< void[] > & ContractFunction< void[] >

	setNodeManagement: ( address: string ) => Promise< void[] > & ContractFunction< void[] >

	shares: ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	swapTokensAmount: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	symbol: () => Promise< string[] > & ContractFunction< string[] >

	totalFees: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	totalReleased: ( address: string ) => Promise< BigNumber[] > & ( () => Promise< BigNumber[] > ) & ContractFunction< BigNumber[] >

	totalShares: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	totalSupply: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	transfer: ( address: string, amount: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	transferFrom: ( address: string, receiver: string, amount: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	transferOwnership: ( address: string ) => Promise< void[] > & ContractFunction< void[] >

	uniswapV2Pair: () => Promise< string[] > & ContractFunction< string[] >

	uniswapV2Router: () => Promise< string[] > & ContractFunction< string[] >

	updateCashoutFee: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	updateFuturFee: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	updateFuturWall: ( address: string ) => Promise< void[] > & ContractFunction< void[] >

	updateLiquiditFee: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	updateRewardsFee: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	updateRewardsWall: ( address: string ) => Promise< void[] > & ContractFunction< void[] >

	updateRwSwapFee: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	updateSwapTokensAmount: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	updateUniswapV2Router: ( address: string ) => Promise< void[] > & ContractFunction< void[] >

}
