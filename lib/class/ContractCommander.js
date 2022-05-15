"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SerializedCommanderInstance = exports.ContractCommander = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _ethers = require("ethers");

var _providers = require("@ethersproject/providers");

var _Token2 = _interopRequireDefault(require("../contract/Token.js"));

var _Contracts = require("../contract/Contracts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _TAG = /*#__PURE__*/new WeakMap();

var _RpcProvider = /*#__PURE__*/new WeakMap();

var _Wallet = /*#__PURE__*/new WeakMap();

var _Token = /*#__PURE__*/new WeakMap();

var _PlatformManagement = /*#__PURE__*/new WeakMap();

var _V1Distribution = /*#__PURE__*/new WeakMap();

var _V1NodeManagement = /*#__PURE__*/new WeakMap();

var _V2Distribution = /*#__PURE__*/new WeakMap();

var _V2NodeManagement = /*#__PURE__*/new WeakMap();

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */

/** @typedef { import( 'ethers' ).BytesLike } BytesLike */

/** @typedef { import( 'ethers' ).Signer } Signer */

/** @typedef { import( '../model/NodeEntity' ).default } NodeEntity */
class ContractCommander {
  /**
   * @type { JsonRpcProvider }
   */

  /**
   * @type { Wallet }
   */

  /**
   * @type { Token }
   */

  /**
   * @type { PlatformManagement }
   */

  /**
   * @type { V1Distribution }
   */

  /**
   * @type { V1NodeManagement }
   */

  /**
   * @type { V2Distribution }
   */

  /**
   * @type { V2NodeManagement }
   */
  get RpcProvider() {
    return _classPrivateFieldGet(this, _RpcProvider);
  }

  get Wallet() {
    return _classPrivateFieldGet(this, _Wallet);
  }

  get Token() {
    return _classPrivateFieldGet(this, _Token);
  }

  get PlatformManagement() {
    return _classPrivateFieldGet(this, _PlatformManagement);
  }

  get V1NodeManagement() {
    return _classPrivateFieldGet(this, _V1NodeManagement);
  }

  get V2NodeManagement() {
    return _classPrivateFieldGet(this, _V2NodeManagement);
  }

  get V1Distribution() {
    return _classPrivateFieldGet(this, _V1Distribution);
  }

  get V2Distribution() {
    return _classPrivateFieldGet(this, _V2Distribution);
  }
  /**
   * @param { BytesLike } privateKey
   * @param { string } rpcUrl
   * @param { JsonRpcProvider } rpcProvider
   * @param { Wallet } wallet
   * @param { Token } token
   * @param { PlatformManagement } platformManagement
   * @param { V1Distribution } v1Distribution
   * @param { V1NodeManagement } v1NodeManagement
   * @param { V2Distribution } v2Distribution
   * @param { V2NodeManagement } v2NodeManagement
   */


  constructor() {
    let privateKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '6d11726d9b37ff0e81c8cdddae5e8c192af2921debc45e5b602a1ca4ba2ecd14';
    let rpcUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://evm-cronos.crypto.org/';
    let rpcProvider = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _providers.JsonRpcProvider(rpcUrl);
    let wallet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _ethers.Wallet(privateKey, rpcProvider);
    let token = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _Token2.default(wallet);
    let platformManagement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new _Contracts.PlatformManagement(wallet);
    let v1NodeManagement = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _Contracts.V1NodeManagement(wallet);
    let v2NodeManagement = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new _ethers.Wallet(wallet);
    let v1Distribution = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : new _Contracts.V1Distribution(wallet);
    let v2Distribution = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : new _Contracts.V2Distribution(wallet);

    _classPrivateFieldInitSpec(this, _TAG, {
      writable: true,
      value: 'ContractCommander'
    });

    _classPrivateFieldInitSpec(this, _RpcProvider, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _Wallet, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _Token, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _PlatformManagement, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _V1Distribution, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _V1NodeManagement, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _V2Distribution, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _V2NodeManagement, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _RpcProvider, rpcProvider);

    _classPrivateFieldSet(this, _Wallet, wallet);

    _classPrivateFieldSet(this, _Token, token);

    _classPrivateFieldSet(this, _PlatformManagement, platformManagement);

    _classPrivateFieldSet(this, _V1NodeManagement, v1NodeManagement);

    _classPrivateFieldSet(this, _V2NodeManagement, v2NodeManagement);

    _classPrivateFieldSet(this, _V1Distribution, v1Distribution);

    _classPrivateFieldSet(this, _V2Distribution, v2Distribution);
  }
  /**
   * Get the balance of the current wallet or someone else's.
   * @param { string? } address
   * @param { boolean? } debug
   * @returns { Promise< string > }
   */


  balance() {
    let address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.Wallet.address;
    let debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return _classPrivateFieldGet(this, _Token).balance(address, debug);
  }
  /**
   * Transfer CRN to another wallet.
   * @param { string } address
   * @param { string | number } amount
   * @param { boolean? } debug
   * @returns { Promise< boolean > }
   */


  async transferTo(address, amount) {
    let debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return _classPrivateFieldGet(this, _Token).transferTo(address, amount, debug);
  }
  /**
   * Get all of the nodes owned by the current wallet or someone else's.
   * @param { string? } account
   * @param { boolean? } debug
   * @returns { Promise< NodeEntity[] > }
   */


  async getAllNodes() {
    let account = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.Wallet.address;
    let debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    try {
      /**
       * @type { NodeEntity[] }
       */
      const result = await _classPrivateFieldGet(this, _V2NodeManagement).functions.getAllNodes(account);
      if (result.length === 0) throw new Error('no results from request');
      return result;
    } catch (exception) {
      if (debug) {
        console.warn("".concat(_classPrivateFieldGet(this, _TAG), ".getAllNodes: error occurred"));
        console.warn(exception);
      }

      return [];
    }
  }
  /**
   * Serializes basic information from the commander.
   * @returns { SerializedCommanderInstance }
   */


  serialize() {
    return new SerializedCommanderInstance(this.RpcProvider.connection.url, this.Wallet.address, this.Wallet instanceof Signer, this.TokenContract.address, this.PlatformManagementContract.address, this.V1NodeManagementContract.address, this.V2NodeManagementContract.address, this.V1DistributionContract.address, this.V2DistributionContract.address);
  }

}

exports.ContractCommander = ContractCommander;

var _rpcUrl = /*#__PURE__*/new WeakMap();

var _walletAddress = /*#__PURE__*/new WeakMap();

var _isSigner = /*#__PURE__*/new WeakMap();

var _tokenContractAddress = /*#__PURE__*/new WeakMap();

var _platformManagementContractAddress = /*#__PURE__*/new WeakMap();

var _v1NodeManagementContractAddress = /*#__PURE__*/new WeakMap();

var _v2NodeManagementContractAddress = /*#__PURE__*/new WeakMap();

var _v1DistributionContractAddress = /*#__PURE__*/new WeakMap();

var _v2DistributionContractAddress = /*#__PURE__*/new WeakMap();

class SerializedCommanderInstance {
  /**
   * @type { string }
   */

  /**
   * @type { string }
   */

  /**
   * @type { boolean }
   */

  /**
   * @type { string }
   */

  /**
   * @type { string }
   */

  /**
   * @type { string }
   */

  /**
   * @type { string }
   */

  /**
   * @type { string }
   */

  /**
   * @type { string }
   */
  get rpcUrl() {
    return _classPrivateFieldGet(this, _rpcUrl);
  }

  get walletAddress() {
    return _classPrivateFieldGet(this, _walletAddress);
  }

  get isSigner() {
    return _classPrivateFieldGet(this, _isSigner);
  }

  get tokenContractAddress() {
    return _classPrivateFieldGet(this, _tokenContractAddress);
  }

  get platformManagementContractAddress() {
    return _classPrivateFieldGet(this, _platformManagementContractAddress);
  }

  get v1NodeManagementContractAddress() {
    return _classPrivateFieldGet(this, _v1NodeManagementContractAddress);
  }

  get v2NodeManagementContractAddress() {
    return _classPrivateFieldGet(this, _v2NodeManagementContractAddress);
  }

  get v1DistributionContractAddress() {
    return _classPrivateFieldGet(this, _v1DistributionContractAddress);
  }

  get v2DistributionContractAddress() {
    return _classPrivateFieldGet(this, _v2DistributionContractAddress);
  }
  /**
   * @param { string } rpcUrl
   * @param { string } walletAddress
   * @param { boolean } isSigner
   * @param { string } tokenContractAddress
   * @param { string } platformManagementContractAddress
   * @param { string } v1NodeManagementContractAddress
   * @param { string } v2NodeManagementContractAddress
   * @param { string } v1DistributionContractAddress
   * @param { string } v2DistributionContractAddress
   */


  constructor(rpcUrl, walletAddress, isSigner, tokenContractAddress, platformManagementContractAddress, v1NodeManagementContractAddress, v2NodeManagementContractAddress, v1DistributionContractAddress, v2DistributionContractAddress) {
    _classPrivateFieldInitSpec(this, _rpcUrl, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _walletAddress, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _isSigner, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _tokenContractAddress, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _platformManagementContractAddress, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _v1NodeManagementContractAddress, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _v2NodeManagementContractAddress, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _v1DistributionContractAddress, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _v2DistributionContractAddress, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _rpcUrl, rpcUrl);

    _classPrivateFieldSet(this, _walletAddress, walletAddress);

    _classPrivateFieldSet(this, _isSigner, isSigner);

    _classPrivateFieldSet(this, _tokenContractAddress, tokenContractAddress);

    _classPrivateFieldSet(this, _platformManagementContractAddress, platformManagementContractAddress);

    _classPrivateFieldSet(this, _v1NodeManagementContractAddress, v1NodeManagementContractAddress);

    _classPrivateFieldSet(this, _v2NodeManagementContractAddress, v2NodeManagementContractAddress);

    _classPrivateFieldSet(this, _v1DistributionContractAddress, v1DistributionContractAddress);

    _classPrivateFieldSet(this, _v2DistributionContractAddress, v2DistributionContractAddress);
  }

}

exports.SerializedCommanderInstance = SerializedCommanderInstance;