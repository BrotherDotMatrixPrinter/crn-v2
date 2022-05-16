"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _ethers = require("ethers");

var _providers = require("@ethersproject/providers");

var _Token = _interopRequireDefault(require("../contract/Token.js"));

var _Contracts = require("../contract/Contracts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */

/** @typedef { import( 'ethers' ).BytesLike } BytesLike */

/** @typedef { import( '@ethersproject/providers' ).JsonRpcSigner } JsonRpcSigner */

/** @typedef { import( '../model/NodeEntity' ).default } NodeEntity */
class ContractCommander {
  /** @type { JsonRpcProvider | Web3Provider } */

  /** @type { Wallet | JsonRpcSigner } */

  /** @type { Token } */

  /** @type { PlatformManagement } */

  /** @type { V1Distribution } */

  /** @type { V1NodeManagement } */

  /** @type { V2Distribution } */

  /** @type { V2NodeManagement } */

  /**
   * @param { BytesLike? } privateKey
   * @param { string? } rpcUrl
   * @param { boolean? } connectToMetamask
   */
  constructor() {
    let privateKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '6d11726d9b37ff0e81c8cdddae5e8c192af2921debc45e5b602a1ca4ba2ecd14';
    let rpcUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://evm-cronos.crypto.org/';

    _defineProperty(this, "RpcProvider", void 0);

    _defineProperty(this, "Wallet", void 0);

    _defineProperty(this, "Token", void 0);

    _defineProperty(this, "PlatformManagement", void 0);

    _defineProperty(this, "V1Distribution", void 0);

    _defineProperty(this, "V1NodeManagement", void 0);

    _defineProperty(this, "V2Distribution", void 0);

    _defineProperty(this, "V2NodeManagement", void 0);

    this.RpcProvider = new _providers.JsonRpcProvider(rpcUrl);
    this.Wallet = new _ethers.Wallet(privateKey, this.RpcProvider);
    this.Token = new _Token.default(this.Wallet);
    this.PlatformManagement = new _Contracts.PlatformManagement(this.Wallet);
    this.V1NodeManagement = new _Contracts.V1NodeManagement(this.Wallet);
    this.V2NodeManagement = new _Contracts.V2NodeManagement(this.Wallet);
    this.V1Distribution = new _Contracts.V1Distribution(this.Wallet);
    this.V2Distribution = new _Contracts.V2Distribution(this.Wallet);
  }

  async connectToMetamask() {
    /** @type { Web3Provider } */
    this.RpcProvider = new _providers.Web3Provider(window.ethereum, 'any');
    await this.RpcProvider.send('eth_requestAccounts', []);
    /** @type { JsonRpcSigner } */

    this.Wallet = this.RpcProvider.getSigner();
    this.Token = new _Token.default(this.Wallet);
    this.PlatformManagement = new _Contracts.PlatformManagement(this.Wallet);
    this.V1NodeManagement = new _Contracts.V1NodeManagement(this.Wallet);
    this.V2NodeManagement = new _Contracts.V2NodeManagement(this.Wallet);
    this.V1Distribution = new _Contracts.V1Distribution(this.Wallet);
    this.V2Distribution = new _Contracts.V2Distribution(this.Wallet);
  }
  /**
   * Get the balance of the current wallet or someone else's.
   * @param { string? } address
   * @param { boolean? } debug
   * @returns { Promise< string > }
   */


  balance() {
    let address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.Wallet instanceof _ethers.Wallet ? this.Wallet.address : null;
    let debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return this.Token.balance(address, debug);
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
    return this.Token.transferTo(address, amount, debug);
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
      /** @type { NodeEntity[] } */
      const result = await this.V2NodeManagement.functions.getAllNodes(account);
      if (result.length === 0) throw new Error('no results from request');
      return result;
    } catch (exception) {
      if (debug) {
        console.warn('ContractCommander.getAllNodes: error occurred');
        console.warn(exception);
      }

      return [];
    }
  }

}

exports.default = ContractCommander;