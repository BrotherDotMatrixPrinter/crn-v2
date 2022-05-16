/** @typedef { import( 'ethers' ).BigNumber } BigNumber */

export default class NodeEntity {

	/** @type { [ string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean, BigNumber, BigNumber ] } */
	components

	/**
	 * @param { string } name
	 * @param { BigNumber } nodeTier
	 * @param { BigNumber } creationTime
	 * @param { BigNumber } lastClaimTime
	 * @param { BigNumber } lastPaidTime
	 * @param { BigNumber } paymentDueTime
	 * @param { boolean } hasMonthlyFee
	 * @param { BigNumber } extendedParam1
	 * @param { BigNumber } extendedParam2
	 */
	constructor(

		name,
		nodeTier,
		creationTime,
		lastClaimTime,
		lastPaidTime,
		paymentDueTime,
		hasMonthlyFee,
		extendedParam1,
		extendedParam2

	) {

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

		]

	}

}