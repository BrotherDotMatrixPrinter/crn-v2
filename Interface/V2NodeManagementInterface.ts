import { BigNumber, ContractFunction } from 'ethers'
import ContractFunctionsInterface from './ContractFunctionsInterface.js'
import NodeEntity from '../Class/NodeEntity.js'

export default interface V2NodeManagementInterface extends ContractFunctionsInterface {

	blacklistMalicious: ( account: string, value: boolean ) => Promise< void[] > & ContractFunction< void[] >

	burnNode: ( account: string, nodeIndex: boolean ) => Promise< boolean[] > & ContractFunction< boolean[] >

	checkBlacklist: ( account: string ) => Promise< boolean[] > & ContractFunction< boolean[] >

	claimAllNodes: ( account: string ) => Promise< boolean[] > & ContractFunction< boolean[] >

	claimNode: ( account: string, nodeIndex: boolean ) => Promise< boolean[] > & ContractFunction< boolean[] >

	createNode: ( account: string, nodeName: string, nodeTier: BigNumber, hasMonthlyFee: boolean, paymentDueDays: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	deleteAccount: ( account: string ) => Promise< void[] > & ContractFunction< void[] >

	getAccountTier2Credit: ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getAccountTotalNodes: ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getAllNodes: ( account: string ) => Promise< NodeEntity[] > & ContractFunction< NodeEntity[] >

	getCreatedStats: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getNodeTransfer: ( account: string ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	getSingleNode: ( account: string, nodeIndex: BigNumber ) => Promise< NodeEntity[] > & ContractFunction< NodeEntity[] >

	hasNodeTransferred: ( account: string ) => Promise< boolean[] > & ContractFunction< boolean[] >

	isActive: () => Promise< boolean[] > & ContractFunction< boolean[] >

	managementAddress: () => Promise< string[] > & ContractFunction< string[] >

	nodesOfAccount: ( x: string, y: BigNumber ) => Promise< ( string | BigNumber )[] > & ContractFunction< ( string | BigNumber )[] >

	owner: () => Promise< string[] > & ContractFunction< string[] >

	payAllNodes: ( account: string, numberPaidDays: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	payNode: ( account: string, nodeIndex: BigNumber, numberPaidDays: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	renewNode: ( account: string, nodeIndex: BigNumber, numberPaidDays: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	renounceOwnership: () => Promise< boolean[] > & ContractFunction< boolean[] >

	setActive: ( newIsActive: boolean ) => Promise< void[] > & ContractFunction< void[] >

	setManagementAddress: ( newManagementAddress: string ) => Promise< string[] > & ContractFunction< string[] >

	setNodeTransfer: ( account: string, timestamp: BigNumber ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	setTier2Credit: ( account: string, credit: BigNumber ) => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	totalNodesCreated: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	totalTierFiveNodesCreated: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	totalTierFourNodesCreated: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	totalTierThreeNodesCreated: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	totalTierTwoNodesCreated: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	totalTierOneNodesCreated: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	transferOwnership: ( newOwner: string ) => Promise< void[] > & ContractFunction< void[] >

	updateNode: ( account: string, NodeIndex: BigNumber, node: NodeEntity ) => Promise< boolean[] > & ContractFunction< boolean[] >

}