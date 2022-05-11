import json

from web3 import HTTPProvider, Web3
from web3.contract import Contract
from web3.eth import Eth

# I kind of hate doing this in Python

Wallet = { 'address': '0x911DAFa509cf86ead7720f3642FE251C05c4E22F', 'privateKey': '6d11726d9b37ff0e81c8cdddae5e8c192af2921debc45e5b602a1ca4ba2ecd14' }
TokenAbi = json.load( open( 'TokenAbi.json' ) )
RpcProvider = HTTPProvider( 'https://evm-cronos.crypto.org/' )
web3 = Eth( Web3( RpcProvider ) )
contract: Contract = web3.contract( address = '0x8174BaC1453c3AC7CaED909c20ceaDeb5E1CDA00', abi = TokenAbi )

print( contract.functions.balanceOf( '0x8174BaC1453c3AC7CaED909c20ceaDeb5E1CDA00' ).call() )

