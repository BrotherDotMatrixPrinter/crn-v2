import { BigNumber, ContractFunction } from 'ethers'
import ContractFunctionsInterface from './ContractFunctionsInterface'

export default interface V2DistributionInterface extends ContractFunctionsInterface {

	_cashoutAllNodesReward: ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	_cashoutNodeReward: ( account: string, _creationTime: BigNumber ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	_changeAutoDistri: ( newMode: boolean ) => Promise< void[] > & ContractFunction< void[] >

	_changeClaimTime: ( newTime: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	_changeGasDistri: ( newGasDistri: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	_changeNodePrice: ( newNodePrice: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	_distributeRewards: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	_getNodeNumberOf: ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	_getNodeRewardAmountOf: ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	_getNodesCreationTime: ( account: string ) => Promise< string[] > & ContractFunction< string[] >

	_getNodesLastClaimTime: ( account: string ) => Promise< string[] > & ContractFunction< string[] >

	_getNodesNames: ( account: string ) => Promise< string[] > & ContractFunction< string[] >

	_getNodesRewardAvailable: ( account: string ) => Promise< string[] > & ContractFunction< string[] >

	_getRewardAmountOf: ( account: string ) => Promise< BigNumber[] > & ( ( account: string, _creationTime: BigNumber ) => Promise< BigNumber[] > ) & ContractFunction< BigNumber[] >

	_isNodeOwner: ( account: string ) => Promise< boolean[] > & ContractFunction< boolean[] >

	autoDistri: () => Promise< boolean[] > & ContractFunction< boolean[] >

	claimTime: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	createNode: ( account: string, nodeName: string ) => Promise< void[] > & ContractFunction< void[] >

	distribution: () => Promise< boolean[] > & ContractFunction< boolean[] >

	gasForDistribution: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	gateKeeper: () => Promise< string[] > & ContractFunction< string[] >

	lastDistributionCount: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	lastIndexProcessed: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	nodePrice: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	rewardPerNode: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	setToken: ( token_: string ) => Promise< void[] > & ContractFunction< void[] >

	token: () => Promise< string[] > & ContractFunction< string[] >

	totalNodesCreated: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	totalRewardStaked: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

}