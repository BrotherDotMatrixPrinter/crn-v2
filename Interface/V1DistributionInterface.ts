import { BigNumber, ContractFunction } from 'ethers'
import ContractFunctionsInterface from './ContractFunctionsInterface.js'

export default interface V1DistributionInterface extends ContractFunctionsInterface {

	HasClaimed: ( address: string ) => Promise< boolean[] > & ContractFunction< boolean[] >

	UserExtraBlocks: ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	UserLastClaimTime: ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	changeBlocksPerDay: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	changeFee: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	changeMultiplier: ( amount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	claimReward: () => Promise< any[] > & ContractFunction< any[] >

	getCroNodeAddress: () => Promise< string[] > & ContractFunction< string[] >

	getLastClaimedBlock: ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getNextClaimBlock: ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getNodeManager: () => Promise< string[] > & ContractFunction< string[] >

	getUsersNumberOfNodes: ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	owner: () => Promise< string[] > & ContractFunction< string[] >

	renounceOwnership: () => Promise< void[] > & ContractFunction< void[] >

	transferOwnership: ( address: string ) => Promise< void[] >

	viewCroNodeTokenBalance: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	withdrawCro: () => Promise< void[] > & ContractFunction< void[] >

	withdrawCroNodeTokens: () => Promise< void[] > & ContractFunction< void[] >

}