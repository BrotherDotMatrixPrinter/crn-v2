import CrnInfo from '../../../CrnInfo/CrnInfo.mjs';
import ContractController from './ContractController.mjs';
export class Token extends ContractController {
    constructor(signerOrProvider) {
        super(CrnInfo.token.address, CrnInfo.token.abi, signerOrProvider);
    }
}
export class PlatformManagement extends ContractController {
    constructor(signerOrProvider) {
        super(CrnInfo.platformManagement.address, CrnInfo.platformManagement.abi, signerOrProvider);
    }
}
export class V1NodeManagement extends ContractController {
    constructor(signerOrProvider) {
        super(CrnInfo.v1NodeManagement.address, CrnInfo.v1NodeManagement.abi, signerOrProvider);
    }
}
export class V2NodeManagement extends ContractController {
    constructor(signerOrProvider) {
        super(CrnInfo.v2NodeManagement.address, CrnInfo.v2NodeManagement.abi, signerOrProvider);
    }
}
export class V1Distribution extends ContractController {
    constructor(signerOrProvider) {
        super(CrnInfo.v1Distribution.address, CrnInfo.v1Distribution.abi, signerOrProvider);
    }
}
export class V2Distribution extends ContractController {
    constructor(signerOrProvider) {
        super(CrnInfo.v2Distribution.address, CrnInfo.v2Distribution.abi, signerOrProvider);
    }
}
export default {
    Token,
    PlatformManagement,
    V1NodeManagement,
    V2NodeManagement,
    V1Distribution,
    V2Distribution
};
