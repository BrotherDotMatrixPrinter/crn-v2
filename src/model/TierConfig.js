/** @typedef { import( 'ethers' ).BigNumber } BigNumber */

export default class TierConfig {

	/** @type { [ string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber ] } */
	components

	/**
	 * @param { string } name
	 * @param { BigNumber } crnCostPerNode
	 * @param { BigNumber } crnRewardPerDay
	 * @param { BigNumber } monthlyCROFee
	 * @param { BigNumber } claimFee
	 * @param { BigNumber } claimFeeWithNFT
	 * @param { BigNumber } claimFeeZeroToFive
	 * @param { BigNumber } claimFeeSixToTen
	 * @param { BigNumber } claimElevenToFifteen
	 * @param { BigNumber } rewardGoldBoostPercent
	 * @param { BigNumber } rewardSilverBoostPercent
	 * @param { BigNumber } rewardBronzeBoostPercent
	 */
	constructor(

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