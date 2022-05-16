"use strict";

require("core-js/modules/es.promise.js");

var _ContractCommander = _interopRequireDefault(require("./class/ContractCommander.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const run = async () => {
  if (!window || !window.ethereum) return;

  try {
    const contractCommander = new _ContractCommander.default(); // When running in the console, do not use this method.

    await contractCommander.connectToMetamask();
    console.log(await contractCommander.balance());
  } catch (exception) {
    console.log(exception);
  }
};

run();