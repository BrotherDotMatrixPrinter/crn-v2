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

/** For use as an interface with V2DistributionAbi. */
class V2DistributionInterface extends _ContractFunctionsInterface.default {
  constructor() {
    super(...arguments);

    _defineProperty(this, "_cashoutAllNodesReward", void 0);

    _defineProperty(this, "_cashoutNodeReward", void 0);

    _defineProperty(this, "_changeAutoDistri", void 0);

    _defineProperty(this, "_changeClaimTime", void 0);

    _defineProperty(this, "_changeGasDistri", void 0);

    _defineProperty(this, "_changeNodePrice", void 0);

    _defineProperty(this, "_distributeRewards", void 0);

    _defineProperty(this, "_getNodeNumberOf", void 0);

    _defineProperty(this, "_getNodeRewardAmountOf", void 0);

    _defineProperty(this, "_getNodesCreationTime", void 0);

    _defineProperty(this, "_getNodesLastClaimTime", void 0);

    _defineProperty(this, "_getNodesNames", void 0);

    _defineProperty(this, "_getNodesRewardAvailable", void 0);

    _defineProperty(this, "_getRewardAmountOf", void 0);

    _defineProperty(this, "_isNodeOwner", void 0);

    _defineProperty(this, "autoDistri", void 0);

    _defineProperty(this, "claimTime", void 0);

    _defineProperty(this, "createNode", void 0);

    _defineProperty(this, "distribution", void 0);

    _defineProperty(this, "gasForDistribution", void 0);

    _defineProperty(this, "gateKeeper", void 0);

    _defineProperty(this, "lastDistributionCount", void 0);

    _defineProperty(this, "lastIndexProcessed", void 0);

    _defineProperty(this, "nodePrice", void 0);

    _defineProperty(this, "rewardPerNode", void 0);

    _defineProperty(this, "setToken", void 0);

    _defineProperty(this, "token", void 0);

    _defineProperty(this, "totalNodesCreated", void 0);

    _defineProperty(this, "totalRewardStaked", void 0);
  }

}

exports.default = V2DistributionInterface;