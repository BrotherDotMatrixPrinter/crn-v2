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
 * For use as an interface with TokenAbi.
 */
class TokenInterface extends _ContractFunctionsInterface.default {
  constructor() {
    super(...arguments);

    _defineProperty(this, "_isBlacklisted", void 0);

    _defineProperty(this, "allowance", void 0);

    _defineProperty(this, "approve", void 0);

    _defineProperty(this, "automatedMarketMakerPairs", void 0);

    _defineProperty(this, "balanceOf", void 0);

    _defineProperty(this, "blacklistMalicious", void 0);

    _defineProperty(this, "boostReward", void 0);

    _defineProperty(this, "cashoutAll", void 0);

    _defineProperty(this, "cashoutFee", void 0);

    _defineProperty(this, "cashoutReward", void 0);

    _defineProperty(this, "changeAutoDistri", void 0);

    _defineProperty(this, "changeClaimTime", void 0);

    _defineProperty(this, "changeGasDistri", void 0);

    _defineProperty(this, "changeNodePrice", void 0);

    _defineProperty(this, "changeRewardPerNode", void 0);

    _defineProperty(this, "changeSwapLiquify", void 0);

    _defineProperty(this, "createNodeWithTokens", void 0);

    _defineProperty(this, "deadWallet", void 0);

    _defineProperty(this, "decimals", void 0);

    _defineProperty(this, "decreaseAllowance", void 0);

    _defineProperty(this, "distributeRewards", void 0);

    _defineProperty(this, "distributionPool", void 0);

    _defineProperty(this, "futurFee", void 0);

    _defineProperty(this, "futurUsePool", void 0);

    _defineProperty(this, "getAutoDistri", void 0);

    _defineProperty(this, "getClaimTime", void 0);

    _defineProperty(this, "getDistriCount", void 0);

    _defineProperty(this, "getGasDistri", void 0);

    _defineProperty(this, "getNodeNumberOf", void 0);

    _defineProperty(this, "getNodePrice", void 0);

    _defineProperty(this, "getNodesCreatime", void 0);

    _defineProperty(this, "getNodesLastClaims", void 0);

    _defineProperty(this, "getNodesNames", void 0);

    _defineProperty(this, "getNodesRewards", void 0);

    _defineProperty(this, "getRewardAmount", void 0);

    _defineProperty(this, "getRewardAmountOf", void 0);

    _defineProperty(this, "getRewardPerNode", void 0);

    _defineProperty(this, "getTotalCreatedNodes", void 0);

    _defineProperty(this, "getTotalStakedReward", void 0);

    _defineProperty(this, "increaseAllowance", void 0);

    _defineProperty(this, "liquidityPoolFee", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "nodeRewardManager", void 0);

    _defineProperty(this, "owner", void 0);

    _defineProperty(this, "payee", void 0);

    _defineProperty(this, "publiDistriRewards", void 0);

    _defineProperty(this, "release", void 0);

    _defineProperty(this, "released", void 0);

    _defineProperty(this, "renounceOwnership", void 0);

    _defineProperty(this, "rewardsFee", void 0);

    _defineProperty(this, "setAutomatedMarketMakerPair", void 0);

    _defineProperty(this, "setNodeManagement", void 0);

    _defineProperty(this, "shares", void 0);

    _defineProperty(this, "swapTokensAmount", void 0);

    _defineProperty(this, "symbol", void 0);

    _defineProperty(this, "totalFees", void 0);

    _defineProperty(this, "totalReleased", void 0);

    _defineProperty(this, "totalShares", void 0);

    _defineProperty(this, "totalSupply", void 0);

    _defineProperty(this, "transfer", void 0);

    _defineProperty(this, "transferFrom", void 0);

    _defineProperty(this, "transferOwnership", void 0);

    _defineProperty(this, "uniswapV2Pair", void 0);

    _defineProperty(this, "uniswapV2Router", void 0);

    _defineProperty(this, "updateCashoutFee", void 0);

    _defineProperty(this, "updateFuturFee", void 0);

    _defineProperty(this, "updateFuturWall", void 0);

    _defineProperty(this, "updateLiquiditFee", void 0);

    _defineProperty(this, "updateRewardsFee", void 0);

    _defineProperty(this, "updateRewardsWall", void 0);

    _defineProperty(this, "updateRwSwapFee", void 0);

    _defineProperty(this, "updateSwapTokensAmount", void 0);

    _defineProperty(this, "updateUniswapV2Router", void 0);
  }

}

exports.default = TokenInterface;