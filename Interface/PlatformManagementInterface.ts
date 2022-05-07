import { BigNumber, ContractFunction } from 'ethers'
import ContractFunctionsInterface from './ContractFunctionsInterface'
import TierConfig from '../Class/TierConfig'

export default interface PlatformManagementInterface extends ContractFunctionsInterface {

	bronzeNftContractAddress: () => Promise< string[] > & ContractFunction< string[] >

	changeNodeName: ( nodeIndex: BigNumber, nodeName: string ) => Promise< boolean[] > & ContractFunction< boolean[] >

	claimAllNodes: () => Promise< boolean[] > & ContractFunction< boolean[] >

	claimNode: ( nodeIndex: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	createNodes: ( nodeNames: string[], nodeTiers: BigNumber[] ) => Promise< boolean[] > & ContractFunction< boolean[] >

	crnTokenAddress: () => Promise< string[] > & ContractFunction< string[] >

	distributionV2Address: () => Promise< string[] > & ContractFunction< string[] >

	enableRewardsBoostWithNFT: () => Promise< boolean[] > & ContractFunction< boolean[] >

	enableV1Claim: () => Promise< boolean[] > & ContractFunction< boolean[] >

	enableV1Migration: () => Promise< boolean[] > & ContractFunction< boolean[] >

	goldNftContractAddress: () => Promise< string[] > & ContractFunction< string[] >

	isActive: () => Promise< boolean[] > & ContractFunction< boolean[] >

	maxNodesPerAccount: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	migrateAndClaimV1: ( totalNodesTransferred: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	nftContractAddress: () => Promise< string[] > & ContractFunction< string[] >

	nodeManagementAddress: () => Promise< string[] > & ContractFunction< string[] >

	owner: () => Promise< string[] > & ContractFunction< string[] >

	payAllNodes: () => Promise< boolean[] > & ContractFunction< boolean[] >

	payNode: ( nodeIndex: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	paymentDaysCycle: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	renewNode: ( nodeIndex: BigNumber ) => Promise< boolean[] > & ContractFunction< boolean[] >

	renounceOwnership: () => Promise< boolean[] > & ContractFunction< boolean[] >

	setActive: ( newIsActive: boolean ) => Promise< void[] > & ContractFunction< void[] >

	setBronzeNFTContractAddress: ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] >

	setCRNNFTContractAddress: ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] >

	setCRNNodesManagementAddress: ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] >

	setCRNTokenAddress: ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] >

	setEnableRewardsBoosting: ( newEnableRewardsBoostWithNFT: boolean ) => Promise< void[] > & ContractFunction< void[] >

	setEnableV1Claim: ( newIsActive: boolean ) => Promise< void[] > & ContractFunction< void[] >

	setEnableV1Migration: ( newIsActive: boolean ) => Promise< void[] > & ContractFunction< void[] >

	setGoldNFTContractAddress: ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] >

	setMaxNodesPerAccount: ( newMaxNodesPerAccount: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	newPaymentDaysCycle: ( newPaymentDaysCycle: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	setSilverNFTContractAddress: ( newTokenAddress: string ) => Promise< void[] > & ContractFunction< void[] >

	setSimulateV1Migration: ( newIsActive: boolean ) => Promise< void[] > & ContractFunction< void[] >

	setTierConfiguration: ( nodeTier: BigNumber, tierData: TierConfig ) => Promise< void[] > & ContractFunction< void[] >

	setV1DistributionAddress: ( newAddress: string ) => Promise< void[] > & ContractFunction< void[] >

	setV1MigrationDays: ( newDays: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	silverNftContractAddress: () => Promise< string[] > & ContractFunction< string[] >

	simulateV1Migration: () => Promise< boolean[] > & ContractFunction< boolean[] >

	transferOwnership: ( newOwner: string ) => Promise< void[] > & ContractFunction< void[] >

	v1MigrationDays: () => Promise< BigNumber[] > & ContractFunction< BigNumber[] >

	withdrawCRN: ( percentageWithdrawl_: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

	withdrawCRO: ( percentageWithdrawl_: BigNumber ) => Promise< void[] > & ContractFunction< void[] >

}