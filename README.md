You don't really need any of the code, you can make your own implementation with the ABIs.

---

This contains four different implementations that pretty much do the same thing but use different module resolutions:
- index.ts:
	- Outputs to build folder.
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
		- npm i
		- npm run build
		- npm run start
	- ES Modules/Common JS:
		- Use one of these to install:
			- npm i (installs TypeScript and ethers)
			- npm i ethers (installs ethers but not TypeScript)
		- node index.(mjs/cjs)
	- Python:
		- Use one of these to install:
			- virtual environment + web3py with something like venv and pip
			- install web3py globally with pip
		- python index.py

A default private key is provided for testing, do not put any funds in the wallet lol.
