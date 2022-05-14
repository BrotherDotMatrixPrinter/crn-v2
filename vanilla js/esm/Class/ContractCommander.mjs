import { Wallet, Signer, BigNumber } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Token, PlatformManagement, V1NodeManagement, V2NodeManagement, V1Distribution, V2Distribution } from './Contracts.mjs';
export class ContractCommander {
    TAG = 'ContractCommander';
    RpcProvider;
    Wallet;
    TokenContract;
    PlatformManagementContract;
    V1NodeManagementContract;
    V2NodeManagementContract;
    V1DistributionContract;
    V2DistributionContract;
    constructor(privateKey = '6d11726d9b37ff0e81c8cdddae5e8c192af2921debc45e5b602a1ca4ba2ecd14', rpcUrl = 'https://evm-cronos.crypto.org/', rpcProvider = new JsonRpcProvider(rpcUrl), wallet = new Wallet(privateKey, rpcProvider), tokenContract = new Token(wallet), platformManagementContract = new PlatformManagement(wallet), v1NodeManagementContract = new V1NodeManagement(wallet), v2NodeManagementContract = new V2NodeManagement(wallet), v1DistributionContract = new V1Distribution(wallet), v2DistributionContract = new V2Distribution(wallet)) {
        this.RpcProvider = rpcProvider;
        this.Wallet = wallet;
        this.TokenContract = tokenContract;
        this.PlatformManagementContract = platformManagementContract;
        this.V1NodeManagementContract = v1NodeManagementContract;
        this.V2NodeManagementContract = v2NodeManagementContract;
        this.V1DistributionContract = v1DistributionContract;
        this.V2DistributionContract = v2DistributionContract;
    }
    async balance(address = this.Wallet.address, debug = false) {
        try {
            const result = await this.TokenContract.functions.balanceOf(address);
            if (result.length === 0)
                throw new Error('no results from request');
            return result[0].toString();
        }
        catch (exception) {
            console.warn(`${this.TAG}.balance: error occurred`);
            if (debug)
                console.warn(exception);
            return '0';
        }
    }
    async transferTo(address, amount, debug = false) {
        try {
            const result = await this.TokenContract.functions.transfer(address, BigNumber.from(amount));
            if (result.length === 0)
                throw new Error('no results from request');
            return result[0];
        }
        catch (exception) {
            console.warn(`${this.TAG}.transferTo: error occurred`);
            if (debug)
                console.warn(exception);
            return false;
        }
    }
    async getAllNodes(account = this.Wallet.address, debug = false) {
        try {
            const result = await this.V2NodeManagementContract.functions.getAllNodes(account);
            if (result.length === 0)
                throw new Error('no results from request');
            return result;
        }
        catch (exception) {
            if (debug) {
                console.warn(`${this.TAG}.getAllNodes: error occurred`);
                console.warn(exception);
            }
            return [];
        }
    }
    serialize() {
        return new SerializedCommanderInstance(this.RpcProvider.connection.url, this.Wallet.address, this.Wallet instanceof Signer, this.TokenContract.address, this.PlatformManagementContract.address, this.V1NodeManagementContract.address, this.V2NodeManagementContract.address, this.V1DistributionContract.address, this.V2DistributionContract.address);
    }
}
export class SerializedCommanderInstance {
    rpcUrl;
    walletAddress;
    isSigner;
    tokenContractAddress;
    platformManagementContractAddress;
    v1NodeManagementContractAddress;
    v2NodeManagementContractAddress;
    v1DistributionContractAddress;
    v2DistributionContractAddress;
    constructor(rpcUrl, walletAddress, isSigner, tokenContractAddress, platformManagementContractAddress, v1NodeManagementContractAddress, v2NodeManagementContractAddress, v1DistributionContractAddress, v2DistributionContractAddress) {
        this.rpcUrl = rpcUrl;
        this.walletAddress = walletAddress;
        this.isSigner = isSigner;
        this.tokenContractAddress = tokenContractAddress;
        this.platformManagementContractAddress = platformManagementContractAddress;
        this.v1NodeManagementContractAddress = v1NodeManagementContractAddress;
        this.v2NodeManagementContractAddress = v2NodeManagementContractAddress;
        this.v1DistributionContractAddress = v1DistributionContractAddress;
        this.v2DistributionContractAddress = v2DistributionContractAddress;
    }
}
