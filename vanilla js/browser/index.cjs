const { Wallet, Contract } = require( 'ethers' ),
	{ JsonRpcProvider } = require( '@ethersproject/providers' ),
	PrivateKey = '6d11726d9b37ff0e81c8cdddae5e8c192af2921debc45e5b602a1ca4ba2ecd14',
	RpcUrl = 'https://evm-cronos.crypto.org/',
	RpcProvider = new JsonRpcProvider( RpcUrl ),
	UserWallet = new Wallet( PrivateKey, RpcProvider )