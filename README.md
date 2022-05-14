You don't really need any of the code, you can make your own implementation with the ABIs.
Please update to the latest version of node and npm, if you have typescript installed globally, make sure it is also updated to the latest version.

##### The typescript, mjs, cjs, and python implementations will either be removed or archived and will be replaced by a vanilla JS and ESM implementation that includes an interface for the metamask chrome extension.
This will make it easier for more people to use as well as introduce people to the metamask extension in JS.

---

This contains four different implementations:
- index.ts:
	- Outputs to typescript/build folder.
	- Uses TypeScript and ES Modules.
- index.mjs:
	- Does not need to be built.
	- Uses vanilla JS and ES Modules.
- index.cjs:
	- Does not need to be built.
	- Uses vanilla JS and Common JS.
- index.py:
	- This is just an example of how you could use Python.

ABIs and more info are the CrnInfo folder and CrnInfo/CrnInfo.(mjs/cjs) files.

The ABI for the Coin Toss is only partially complete, I might try to reverse the transactions and create an ABI or JS interface for it using the raw data.

I'm also contemplating trying to reverse the contract using decompiled bytecode and the ABIs.
I'm not the best with Solidity but it should give some more insights as to how the contracts function.

---

- Setup:
	- TypeScript:
		- This is going to be used to build vanilla js libraries and I will ultimately trim the ABIs.
		- The reduced functionality will allow the script to run in a browser a little more easily.
		- Since the plan is to use this for a browser extension, we don't need things like the ownable functions.
		- I need to be able to show the user the raw transactions before sending them as well.
	- ES Modules/Common JS:
		- npm i (installs ethers)
		- node index.(mjs/cjs)
	- Python:
		- Use one of these to install:
			- virtual environment + web3py with something like venv and pip
			- install web3py globally with pip
		- python index.py

A default private key is provided for testing, do not put any funds in the wallet lol.