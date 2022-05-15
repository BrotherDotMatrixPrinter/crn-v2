"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _ethers = require("ethers");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _ethersContract = /*#__PURE__*/new WeakMap();

var _address = /*#__PURE__*/new WeakMap();

var _isSigned = /*#__PURE__*/new WeakMap();

/** @typedef { import( 'ethers' ).ContractInterface } ContractInterface */

/** @typedef { import( 'ethers' ).ContractFunction } ContractFunction */

/** @typedef { import( 'ethers' ).providers.Provider } Provider */

/** @typedef { import( '../interface/ContractFunctionsInterface' ).default } ContractFunctionsInterface */

/**
 * The base class for the contracts.
 * @template { ContractFunctionsInterface } T
 */
class ContractController {
  /**
   * @type { Contract }
   */

  /**
   * @type { string }
   */

  /**
   * @type { boolean }
   */
  get ethersContract() {
    return _classPrivateFieldGet(this, _ethersContract);
  }

  get address() {
    return _classPrivateFieldGet(this, _address);
  }

  get isSigned() {
    return _classPrivateFieldGet(this, _isSigned);
  }
  /**
   * @type { T & [ name: string ]: ContractFunction< any > }
   */


  get functions() {
    return this.ethersContract.functions;
  }
  /**
   * @param { string } addressOrName
   * @param { ContractInterface } contractInterface
   * @param { ( Provider | Signer )? } signerOrProvider
   */


  constructor(addressOrName, contractInterface, signerOrProvider) {
    _classPrivateFieldInitSpec(this, _ethersContract, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _address, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _isSigned, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _ethersContract, new _ethers.Contract(addressOrName, contractInterface, signerOrProvider));

    _classPrivateFieldSet(this, _address, addressOrName);

    _classPrivateFieldSet(this, _isSigned, signerOrProvider instanceof _ethers.Signer);
  }
  /**
   * @param { Signer } signer
   */


  sign(signer) {
    _classPrivateFieldGet(this, _ethersContract).connect(signer);

    _classPrivateFieldSet(this, _isSigned, true);
  }

}

exports.default = ContractController;