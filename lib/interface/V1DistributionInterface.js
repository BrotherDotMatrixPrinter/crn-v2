"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _ContractFunctionsInterface = _interopRequireDefault(require("./ContractFunctionsInterface.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */

/** @typedef { import( 'ethers' ).ContractFunction } ContractFunction */

/**
 * For use as an interface with V1DistributionAbi.
 */
class V1DistributionInterface extends _ContractFunctionsInterface.default {
  constructor() {
    super(...arguments);

    _defineProperty(this, "HasClaimed", void 0);

    _defineProperty(this, "UserExtraBlocks", void 0);

    _defineProperty(this, "UserLastClaimTime", void 0);

    _defineProperty(this, "changeBlocksPerDay", void 0);

    _defineProperty(this, "changeFee", void 0);

    _defineProperty(this, "changeMultiplier", void 0);

    _defineProperty(this, "claimReward", void 0);

    _defineProperty(this, "getCroNodeAddress", void 0);

    _defineProperty(this, "getLastClaimedBlock", void 0);

    _defineProperty(this, "getNextClaimBlock", void 0);

    _defineProperty(this, "getNodeManager", void 0);

    _defineProperty(this, "getUsersNumberOfNodes", void 0);

    _defineProperty(this, "owner", void 0);

    _defineProperty(this, "renounceOwnership", void 0);

    _defineProperty(this, "transferOwnership", void 0);

    _defineProperty(this, "viewCroNodeTokenBalance", void 0);

    _defineProperty(this, "withdrawCro", void 0);

    _defineProperty(this, "withdrawCroNodeTokens", void 0);
  }

}

exports.default = V1DistributionInterface;