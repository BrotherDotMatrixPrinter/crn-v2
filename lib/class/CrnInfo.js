"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TokenAbi = _interopRequireDefault(require("../abi/TokenAbi.json"));

var _PlatformManagementAbi = _interopRequireDefault(require("../abi/PlatformManagementAbi.json"));

var _V1NodeManagementAbi = _interopRequireDefault(require("../abi/V1NodeManagementAbi.json"));

var _V2NodeManagementAbi = _interopRequireDefault(require("../abi/V2NodeManagementAbi.json"));

var _V1DistributionAbi = _interopRequireDefault(require("../abi/V1DistributionAbi.json"));

var _V2DistributionAbi = _interopRequireDefault(require("../abi/V2DistributionAbi.json"));

var _CoinTossAbi = _interopRequireDefault(require("../abi/CoinTossAbi.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Provides relevant properties and methods regarding the contracts and the platform.
 */
class CrnInfo {}

exports.default = CrnInfo;

_defineProperty(CrnInfo, "token", {
  address: '0x8174BaC1453c3AC7CaED909c20ceaDeb5E1CDA00',
  abi: _TokenAbi.default,
  events: ['Approval', 'ERC20PaymentReleased', 'LiquidityWalletUpdated', 'OwnershipTransferred', 'PayeeAdded', 'PaymentReceived', 'PaymentReleased', 'SetAutomatedMarketMakerPair', 'SwapAndLiquify', 'Transfer', 'UpdateCronaswapV2Router']
});

_defineProperty(CrnInfo, "platformManagement", {
  address: '0xFe688f455B018E531D30EF0B0584821193a14f07',
  abi: _PlatformManagementAbi.default,
  events: ['CRNTokenAddressUpdated', 'ClaimedAllNodes', 'ClaimedSingleNode', 'MaxNodesPerAccountUpdated', 'NodeManagementAddressUpdated', 'OwnershipTransferred', 'PaidAllNodes', 'PaidSingleNode', 'PaymentDaysCycleUpdated', 'TierConfigUpdated']
});

_defineProperty(CrnInfo, "v1NodeManagement", {
  address: '0x7f0CCde008102a2Db79c3372A10E21c07451dB38',
  abi: _V1NodeManagementAbi.default
});

_defineProperty(CrnInfo, "v2NodeManagement", {
  address: '0x523CE472D66FC8001C2C78D6A1c7d88e93Ab1dDC',
  abi: _V2NodeManagementAbi.default,
  events: ['DeletedAccount', 'ManagementAddressUpdated', 'NodeClaimed', 'NodeCreated', 'NodePaid', 'NodeRenewed', 'NodeUpdated', 'OwnershipTransferred']
});

_defineProperty(CrnInfo, "v1Distribution", {
  address: '0x6aD4Ff63fD7CF6672eE33Cdad8e3EE14Bad52B4E',
  abi: _V1DistributionAbi.default,
  events: ['BlocksPerDayChanged', 'FeeChanged', 'FundsDeposited', 'MultiplierChanged', 'OwnershipTransferred', 'UserClaimedRewards']
});

_defineProperty(CrnInfo, "v2Distribution", {
  address: '0xb0Dd5606A1201992E354Fc820101DB23113744Ef',
  abi: _V2DistributionAbi.default
});

_defineProperty(CrnInfo, "coinToss", {
  address: '0xC15D6AF0c782c16Ee8f5Bd9D70BE51D0CEe46ab4',
  abi: _CoinTossAbi.default
});

_defineProperty(CrnInfo, "futureUsePool", '0x3e815fa1Bda78eB627aE35b0dAd9fC47377af3AE');

_defineProperty(CrnInfo, "tier", {
  one: {
    crnCostPerNode: 10.00,
    crnRewardPerDay: 0.06,
    monthlyCROFee: 2.00
  },
  two: {
    crnCostPerNode: 20.00,
    crnRewardPerDay: 0.18,
    monthlyCROFee: 10.00
  },
  three: {
    crnCostPerNode: 55.00,
    crnRewardPerDay: 0.57,
    monthlyCROFee: 20.00
  },
  four: {
    crnCostPerNode: 110.00,
    crnRewardPerDay: 1.20,
    monthlyCROFee: 40.00
  },

  /**
   * This is just a shitty guess, ABIs mention five tiers.
   */
  five: {
    crnCostPerNode: 145.00,
    crnRewardPerDay: 2.50,
    monthlyCROFee: 80.00
  }
});

_defineProperty(CrnInfo, "boostNft", {
  bronze: 0.02,
  silver: 0.05,
  gold: 0.10
});

_defineProperty(CrnInfo, "tax", (days, hasTaxNft) => {
  switch (true) {
    case days >= 0 && days <= 5:
      return 0.50;

    case days >= 6 && days <= 10:
      return 0.40;

    case days >= 11 && days <= 15:
      return 0.30;

    case days > 15 && !hasTaxNft:
      return 0.10;

    case days > 15 && hasTaxNft:
      return 0.05;
  }

  return null;
});