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

/** @typedef { import( '../model/TierConfig' ).default } TierConfig */

/** For use as an interface with PlatformManagementAbi. */
class PlatformManagementInterface extends _ContractFunctionsInterface.default {
  constructor() {
    super(...arguments);

    _defineProperty(this, "bronzeNftContractAddress", void 0);

    _defineProperty(this, "changeNodeName", void 0);

    _defineProperty(this, "claimAllNodes", void 0);

    _defineProperty(this, "claimNode", void 0);

    _defineProperty(this, "createNodes", void 0);

    _defineProperty(this, "crnTokenAddress", void 0);

    _defineProperty(this, "distributionV2Address", void 0);

    _defineProperty(this, "enableRewardsBoostWithNFT", void 0);

    _defineProperty(this, "enableV1Claim", void 0);

    _defineProperty(this, "enableV1Migration", void 0);

    _defineProperty(this, "goldNftContractAddress", void 0);

    _defineProperty(this, "isActive", void 0);

    _defineProperty(this, "maxNodesPerAccount", void 0);

    _defineProperty(this, "migrateAndClaimV1", void 0);

    _defineProperty(this, "nftContractAddress", void 0);

    _defineProperty(this, "nodeManagementAddress", void 0);

    _defineProperty(this, "owner", void 0);

    _defineProperty(this, "payAllNodes", void 0);

    _defineProperty(this, "payNode", void 0);

    _defineProperty(this, "paymentDaysCycle", void 0);

    _defineProperty(this, "renewNode", void 0);

    _defineProperty(this, "renounceOwnership", void 0);

    _defineProperty(this, "setActive", void 0);

    _defineProperty(this, "setBronzeNFTContractAddress", void 0);

    _defineProperty(this, "setCRNNFTContractAddress", void 0);

    _defineProperty(this, "setCRNNodesManagementAddress", void 0);

    _defineProperty(this, "setCRNTokenAddress", void 0);

    _defineProperty(this, "setEnableRewardsBoosting", void 0);

    _defineProperty(this, "setEnableV1Claim", void 0);

    _defineProperty(this, "setEnableV1Migration", void 0);

    _defineProperty(this, "setGoldNFTContractAddress", void 0);

    _defineProperty(this, "setMaxNodesPerAccount", void 0);

    _defineProperty(this, "newPaymentDaysCycle", void 0);

    _defineProperty(this, "setSilverNFTContractAddress", void 0);

    _defineProperty(this, "setSimulateV1Migration", void 0);

    _defineProperty(this, "setTierConfiguration", void 0);

    _defineProperty(this, "setV1DistributionAddress", void 0);

    _defineProperty(this, "setV1MigrationDays", void 0);

    _defineProperty(this, "silverNftContractAddress", void 0);

    _defineProperty(this, "simulateV1Migration", void 0);

    _defineProperty(this, "transferOwnership", void 0);

    _defineProperty(this, "v1MigrationDays", void 0);

    _defineProperty(this, "withdrawCRN", void 0);

    _defineProperty(this, "withdrawCRO", void 0);
  }

}

exports.default = PlatformManagementInterface;