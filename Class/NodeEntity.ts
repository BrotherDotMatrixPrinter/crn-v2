import { BigNumber } from 'ethers'

export default class NodeEntity {

	readonly components: [

		string,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		BigNumber,
		boolean,
		BigNumber,
		BigNumber

	]

	constructor(

		name: string,
		nodeTier: BigNumber,
		creationTime: BigNumber,
		lastClaimTime: BigNumber,
		lastPaidTime: BigNumber,
		paymentDueTime: BigNumber,
		hasMonthlyFee: boolean,
		extendedParam1: BigNumber,
		extendedParam2: BigNumber

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