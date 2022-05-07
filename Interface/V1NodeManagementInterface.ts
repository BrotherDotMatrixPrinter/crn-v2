import { BigNumber, ContractFunction } from 'ethers'
import ContractFunctionsInterface from './ContractFunctionsInterface'

export default interface V1NodeManagementInterface extends ContractFunctionsInterface {

	_cashoutAllNodesReward: ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	_cashoutNodeReward: ( address: string, creationTime: BigNumber ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	_changeAutoDistri: ( value: boolean ) => Promise< void[] > & ContractFunction< void[] >

	_changeClaimTime: ( time: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	_changeGasDistri: ( value: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	_changeNodePrice: ( value: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	_changeRewardPerNode: ( value: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	_distributeRewards: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	_getNodeNumberOf: ( address: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	_getNodeRewardAmountOf: ( address: string, creationTime: BigNumber ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	_getNodesCreationTime: ( address: string ) => Promise< string[] > & ContractFunction< string[] >

	_getNodesLastClaimTime: ( address: string ) => Promise< string[] > & ContractFunction< string[] >

	_getNodesNames: ( address: string ) => Promise< string[] > & ContractFunction< string[] >

	_getNodesRewardAvailable: ( address: string ) => Promise< string[] > & ContractFunction< string[] >

	_getRewardAmountOf: ( address: string ) => Promise< BigNumber[] > & ( ( address: string, creationTime: BigNumber ) => Promise< BigNumber[] > ) & ContractFunction< BigNumber[] >

	_isNodeOwner: ( address: string ) => Promise< boolean[] > & ContractFunction< boolean[] >

	autoDistri: () => Promise< boolean[] > & ContractFunction< boolean[] >

	claimTime: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	createNode: ( address: string, name: string ) => Promise< void[] > & ContractFunction< void[] >

	distribution: () => Promise< boolean[] > & ContractFunction< boolean[] >

	gasForDistribution: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	gateKeeper: () => Promise< string[] > & ContractFunction< string[] >

	lastDistributionCount: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	lastIndexProcessed: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	nodePrice: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	rewardPerNode: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	setToken: ( address: string ) => Promise< void[] > & ContractFunction< void[] >

	token: () => Promise< string[] > & ContractFunction< string[] >

	totalNodesCreated: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	totalRewardStaked: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

}