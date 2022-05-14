import { Contract, Signer } from 'ethers';
export default class ContractController {
    ethersContract;
    address;
    _isSigned;
    get isSigned() {
        return this._isSigned;
    }
    get functions() {
        return this.ethersContract.functions;
    }
    constructor(addressOrName, contractInterface, signerOrProvider) {
        this.address = addressOrName;
        this.ethersContract = new Contract(addressOrName, contractInterface, signerOrProvider);
        this._isSigned = signerOrProvider instanceof Signer;
    }
    sign(signer) {
        this.ethersContract.connect(signer);
        this._isSigned = true;
    }
}
