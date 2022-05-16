"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.to-string.js");

var _CrnInfo = _interopRequireDefault(require("../class/CrnInfo.js"));

var _ContractController = _interopRequireDefault(require("../class/ContractController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @typedef { import( 'ethers' ).BigNumber } BigNumber */

/** @typedef { import( 'ethers' ).providers.Provider } Provider */

/** @typedef { import( 'ethers' ).Signer } Signer */

/** @typedef { import( '../interface/TokenInterface' ).default } TokenInterface */

/**
 * For use as a constructor for the Token contract.
 * Use with TokenAbi and TokenInterface.
 * @extends { ContractController< TokenInterface > }
 */
class Token extends _ContractController.default {
  /** @param { ( Provider | Signer )? } signerOrProvider */
  constructor() {
    let signerOrProvider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    super(_CrnInfo.default.token.address, _CrnInfo.default.token.abi, signerOrProvider);
  }
  /**
   * Get the balance of the address.
   * @param { string? } address
   * @param { boolean? } debug
   * @returns { Promise< string > }
   */


  async balance() {
    let address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!address) address = await this.ethersContract.signer.getAddress();
    /** @type { TokenInterface } */

    const functions = this.ethersContract.functions;

    try {
      /** @type { BigNumber[] } */
      const result = await functions.balanceOf(address);
      if (result.length === 0) throw new Error('no results from request');
      return result[0].toString();
    } catch (exception) {
      console.warn('Token.balance: error occurred');
      if (debug) console.warn(exception);
      return '0';
    }
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

    /** @type { TokenInterface } */
    const functions = this.ethersContract.functions;

    try {
      /** @type { boolean[] } */
      const result = await functions.transfer(address, BigNumber.from(amount));
      if (result.length === 0) throw new Error('no results from request');
      return result[0];
    } catch (exception) {
      console.warn('Token.transferTo: error occurred');
      if (debug) console.warn(exception);
      return false;
    }
  }

}

exports.default = Token;