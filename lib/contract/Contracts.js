"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.V2NodeManagement = exports.V2Distribution = exports.V1NodeManagement = exports.V1Distribution = exports.PlatformManagement = void 0;

var _CrnInfo = _interopRequireDefault(require("../class/CrnInfo.js"));

var _ContractController = _interopRequireDefault(require("../class/ContractController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @typedef { import( 'ethers' ).providers.Provider } Provider */

/** @typedef { import( 'ethers' ).Signer } Signer */

/** @typedef { import( '../interface/PlatformManagementInterface' ).default } PlatformManagementInterface */

/** @typedef { import( '../interface/V1DistributionInterface' ).default } V1DistributionInterface */

/** @typedef { import( '../interface/V1NodeManagementInterface' ).default } V1NodeManagementInterface */

/** @typedef { import( '../interface/V2DistributionInterface' ).default } V2DistributionInterface */

/** @typedef { import( '../interface/V2NodeManagementInterface' ).default } V2NodeManagementInterface */

/**
 * For use as a constructor for the Platform Management contract.
 * Use with PlatformManagementAbi and PlatformManagementInterface.
 * @extends { ContractController< PlatformManagementInterface > }
 */
class PlatformManagement extends _ContractController.default {
  /** @param { ( Provider | Signer )? } signerOrProvider */
  constructor() {
    let signerOrProvider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    super(_CrnInfo.default.platformManagement.address, _CrnInfo.default.platformManagement.abi, signerOrProvider);
  }

}
/**
 * For use as a constructor for the V1 Distribution contract.
 * Use with V1DistributionAbi and V1DistributionInterface.
 * @extends { ContractController< V1DistributionInterface > }
 */


exports.PlatformManagement = PlatformManagement;

class V1Distribution extends _ContractController.default {
  /** @param { ( Provider | Signer )? } signerOrProvider */
  constructor() {
    let signerOrProvider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    super(_CrnInfo.default.v1Distribution.address, _CrnInfo.default.v1Distribution.abi, signerOrProvider);
  }

}
/**
 * For use as a constructor for the V1 Node Management contract.
 * Use with V1NodeManagementAbi and V1NodeManagementInterface.
 * @extends { ContractController< V1NodeManagementInterface > }
 */


exports.V1Distribution = V1Distribution;

class V1NodeManagement extends _ContractController.default {
  /** @param { ( Provider | Signer )? } signerOrProvider */
  constructor() {
    let signerOrProvider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    super(_CrnInfo.default.v1NodeManagement.address, _CrnInfo.default.v1NodeManagement.abi, signerOrProvider);
  }

}
/**
 * For use as a constructor for the V2 Distribution contract.
 * Use with V2DistributionAbi and V2DistributionInterface.
 * @extends { ContractController< V2DistributionInterface > }
 */


exports.V1NodeManagement = V1NodeManagement;

class V2Distribution extends _ContractController.default {
  /** @param { ( Provider | Signer )? } signerOrProvider */
  constructor() {
    let signerOrProvider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    super(_CrnInfo.default.v2Distribution.address, _CrnInfo.default.v2Distribution.abi, signerOrProvider);
  }

}
/**
 * For use as a constructor for the V2 Node Management contract.
 * Use with V2NodeManagementAbi and V2NodeManagementInterface.
 * @extends { ContractController< V2NodeManagementInterface > }
 */


exports.V2Distribution = V2Distribution;

class V2NodeManagement extends _ContractController.default {
  /** @param { ( Provider | Signer )? } signerOrProvider */
  constructor() {
    let signerOrProvider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    super(_CrnInfo.default.v2NodeManagement.address, _CrnInfo.default.v2NodeManagement.abi, signerOrProvider);
  }

}

exports.V2NodeManagement = V2NodeManagement;