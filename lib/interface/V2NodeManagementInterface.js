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

/** @typedef { import( '../model/NodeEntity' ).default } NodeEntity */

/** For use as an interface with V2NodeManagementAbi. */
class V2NodeManagementInterface extends _ContractFunctionsInterface.default {
  constructor() {
    super(...arguments);

    _defineProperty(this, "blacklistMalicious", void 0);

    _defineProperty(this, "burnNode", void 0);

    _defineProperty(this, "checkBlacklist", void 0);

    _defineProperty(this, "claimAllNodes", void 0);

    _defineProperty(this, "claimNode", void 0);

    _defineProperty(this, "createNode", void 0);

    _defineProperty(this, "deleteAccount", void 0);

    _defineProperty(this, "getAccountTier2Credit", void 0);

    _defineProperty(this, "getAccountTotalNodes", void 0);

    _defineProperty(this, "getAllNodes", void 0);

    _defineProperty(this, "getCreatedStats", void 0);

    _defineProperty(this, "getNodeTransfer", void 0);

    _defineProperty(this, "getSingleNode", void 0);

    _defineProperty(this, "hasNodeTransferred", void 0);

    _defineProperty(this, "isActive", void 0);

    _defineProperty(this, "managementAddress", void 0);

    _defineProperty(this, "nodesOfAccount", void 0);

    _defineProperty(this, "owner", void 0);

    _defineProperty(this, "payAllNodes", void 0);

    _defineProperty(this, "payNode", void 0);

    _defineProperty(this, "renewNode", void 0);

    _defineProperty(this, "renounceOwnership", void 0);

    _defineProperty(this, "setActive", void 0);

    _defineProperty(this, "setManagementAddress", void 0);

    _defineProperty(this, "setNodeTransfer", void 0);

    _defineProperty(this, "setTier2Credit", void 0);

    _defineProperty(this, "totalNodesCreated", void 0);

    _defineProperty(this, "totalTierFiveNodesCreated", void 0);

    _defineProperty(this, "totalTierFourNodesCreated", void 0);

    _defineProperty(this, "totalTierThreeNodesCreated", void 0);

    _defineProperty(this, "totalTierTwoNodesCreated", void 0);

    _defineProperty(this, "totalTierOneNodesCreated", void 0);

    _defineProperty(this, "transferOwnership", void 0);

    _defineProperty(this, "updateNode", void 0);
  }

}

exports.default = V2NodeManagementInterface;