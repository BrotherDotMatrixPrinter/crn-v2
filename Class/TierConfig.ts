import { BigNumber } from 'ethers'

export default class TierConfig {

	components: [

		string,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber

	]

	constructor(

		name: string,
		crnCostPerNode: BigNumber,
		crnRewardPerDay: BigNumber,
		monthlyCROFee: BigNumber,
		claimFee: BigNumber,
		claimFeeWithNFT: BigNumber,
		claimFeeZeroToFive: BigNumber,
		claimFeeSixToTen: BigNumber,
		claimElevenToFifteen: BigNumber,
		rewardGoldBoostPercent: BigNumber,
		rewardSilverBoostPercent: BigNumber,
		rewardBronzeBoostPercent: BigNumber

	) {

		this.components = [

			name,
			crnCostPerNode,
			crnRewardPerDay,
			monthlyCROFee,
			claimFee,
			claimFeeWithNFT,
			claimFeeZeroToFive,
			claimFeeSixToTen,
			claimElevenToFifteen,
			rewardGoldBoostPercent,
			rewardSilverBoostPercent,
			rewardBronzeBoostPercent

		]

	}

}