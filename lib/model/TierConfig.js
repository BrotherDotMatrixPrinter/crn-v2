"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */
class TierConfig {
  /**
   * @type { [ string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber ] }
   */

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
  constructor(name, crnCostPerNode, crnRewardPerDay, monthlyCROFee, claimFee, claimFeeWithNFT, claimFeeZeroToFive, claimFeeSixToTen, claimElevenToFifteen, rewardGoldBoostPercent, rewardSilverBoostPercent, rewardBronzeBoostPercent) {
    _defineProperty(this, "components", void 0);

    this.components = [name, crnCostPerNode, crnRewardPerDay, monthlyCROFee, claimFee, claimFeeWithNFT, claimFeeZeroToFive, claimFeeSixToTen, claimElevenToFifteen, rewardGoldBoostPercent, rewardSilverBoostPercent, rewardBronzeBoostPercent];
  }

}

exports.default = TierConfig;