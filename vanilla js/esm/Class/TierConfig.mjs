export default class TierConfig {
    components;
    constructor(name, crnCostPerNode, crnRewardPerDay, monthlyCROFee, claimFee, claimFeeWithNFT, claimFeeZeroToFive, claimFeeSixToTen, claimElevenToFifteen, rewardGoldBoostPercent, rewardSilverBoostPercent, rewardBronzeBoostPercent) {
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
        ];
    }
}
