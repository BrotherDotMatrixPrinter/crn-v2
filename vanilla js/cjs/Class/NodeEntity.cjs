module.exports = class NodeEntity {
    components;
    constructor(name, nodeTier, creationTime, lastClaimTime, lastPaidTime, paymentDueTime, hasMonthlyFee, extendedParam1, extendedParam2) {
        this.components = [
            name,
            nodeTier,
            creationTime,
            lastClaimTime,
            lastPaidTime,
            paymentDueTime,
            hasMonthlyFee,
            extendedParam1,
            extendedParam2
        ];
    }
}
