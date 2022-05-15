"use strict";

require("core-js/modules/es.promise.js");

var _ContractCommander = require("./class/ContractCommander.js");

const contractCommander = new _ContractCommander.ContractCommander();

const run = async () => {
  console.log(await contractCommander.balance());
};

run();