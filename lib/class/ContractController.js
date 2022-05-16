"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ethers = require("ethers");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @typedef { import( 'ethers' ).ContractInterface } ContractInterface */

/** @typedef { import( 'ethers' ).ContractFunction } ContractFunction */

/** @typedef { import( 'ethers' ).providers.Provider } Provider */

/** @typedef { import( '../interface/ContractFunctionsInterface' ).default } ContractFunctionsInterface */

/**
 * The base class for the contracts.
 * @template { ContractFunctionsInterface } T
 */
class ContractController {
  /** @type { Contract } */

  /** @type { string } */

  /** @type { boolean } */

  /** @type { T & [ name: string ]: ContractFunction< any > } */
  get functions() {
    return this.ethersContract.functions;
  }
  /**
   * @param { string } addressOrName
   * @param { ContractInterface } contractInterface
   * @param { ( Provider | Signer )? } signerOrProvider
   */


  constructor(addressOrName, contractInterface, signerOrProvider) {
    _defineProperty(this, "ethersContract", void 0);

    _defineProperty(this, "address", void 0);

    _defineProperty(this, "isSigned", void 0);

    this.ethersContract = new _ethers.Contract(addressOrName, contractInterface, signerOrProvider);
    this.address = addressOrName;
    this.isSigned = signerOrProvider instanceof _ethers.Signer;
  }
  /** @param { Signer } signer */


  sign(signer) {
    this.ethersContract.connect(signer);
    this.isSigned = true;
  }

}

exports.default = ContractController;