"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */
class NodeEntity {
  /** @type { [ string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean, BigNumber, BigNumber ] } */

  /**
   * @param { string } name
   * @param { BigNumber } nodeTier
   * @param { BigNumber } creationTime
   * @param { BigNumber } lastClaimTime
   * @param { BigNumber } lastPaidTime
   * @param { BigNumber } paymentDueTime
   * @param { boolean } hasMonthlyFee
   * @param { BigNumber } extendedParam1
   * @param { BigNumber } extendedParam2
   */
  constructor(name, nodeTier, creationTime, lastClaimTime, lastPaidTime, paymentDueTime, hasMonthlyFee, extendedParam1, extendedParam2) {
    _defineProperty(this, "components", void 0);

    this.components = [name, nodeTier, creationTime, lastClaimTime, lastPaidTime, paymentDueTime, hasMonthlyFee, extendedParam1, extendedParam2];
  }

}

exports.default = NodeEntity;