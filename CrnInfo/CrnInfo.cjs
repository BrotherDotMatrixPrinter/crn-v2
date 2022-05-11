const TokenAbi = require( './TokenAbi.json' ),
	PlatformManagementAbi = require( './PlatformManagementAbi.json' ),
	V1NodeManagementAbi = require( './V1NodeManagementAbi.json' ),
	V2NodeManagementAbi = require( './V2NodeManagementAbi.json' ),
	V1DistributionAbi = require( './V1DistributionAbi.json' ),
	V2DistributionAbi = require( './V2DistributionAbi.json' ),
	CoinTossAbi = require( './CoinTossAbi.json' )

module.exports = {

	token: {

		address: '0x8174BaC1453c3AC7CaED909c20ceaDeb5E1CDA00',
		abi: TokenAbi,

		events: [

			'Approval',
			'ERC20PaymentReleased',
			'LiquidityWalletUpdated',
			'OwnershipTransferred',
			'PayeeAdded',
			'PaymentReceived',
			'PaymentReleased',
			'SetAutomatedMarketMakerPair',
			'SwapAndLiquify',
			'Transfer',
			'UpdateCronaswapV2Router'

		]

	},

	platformManagement: {

		address: '0xFe688f455B018E531D30EF0B0584821193a14f07',
		abi: PlatformManagementAbi,

		events: [

			'CRNTokenAddressUpdated',
			'ClaimedAllNodes',
			'ClaimedSingleNode',
			'MaxNodesPerAccountUpdated',
			'NodeManagementAddressUpdated',
			'OwnershipTransferred',
			'PaidAllNodes',
			'PaidSingleNode',
			'PaymentDaysCycleUpdated',
			'TierConfigUpdated'

		]

	},

	v1NodeManagement: {

		address: '0x7f0CCde008102a2Db79c3372A10E21c07451dB38',
		abi: V1NodeManagementAbi

	},

	v2NodeManagement: {

		address: '0x523CE472D66FC8001C2C78D6A1c7d88e93Ab1dDC',
		abi: V2NodeManagementAbi,

		events: [

			'DeletedAccount',
			'ManagementAddressUpdated',
			'NodeClaimed',
			'NodeCreated',
			'NodePaid',
			'NodeRenewed',
			'NodeUpdated',
			'OwnershipTransferred'

		]

	},

	v1Distribution: {

		address: '0x6aD4Ff63fD7CF6672eE33Cdad8e3EE14Bad52B4E',
		abi: V1DistributionAbi,

		events: [

			'BlocksPerDayChanged',
			'FeeChanged',
			'FundsDeposited',
			'MultiplierChanged',
			'OwnershipTransferred',
			'UserClaimedRewards'

		]

	},

	v2Distribution: {

		address: '0xb0Dd5606A1201992E354Fc820101DB23113744Ef',
		abi: V2DistributionAbi

	},

	/**
	 * I only got parts of what I think may be the ABI, I'd advise you to not use this.
	 */
	coinToss: {

		address: '0xC15D6AF0c782c16Ee8f5Bd9D70BE51D0CEe46ab4',
		abi: CoinTossAbi

	},

	futureUsePool: '0x3e815fa1Bda78eB627aE35b0dAd9fC47377af3AE',

	tier: {

		one: {

			crnCostPerNode: 10.00,
			crnRewardPerDay: 0.06,
			monthlyCROFee: 2.00

		},

		two: {

			crnCostPerNode: 20.00,
			crnRewardPerDay: 0.18,
			monthlyCROFee: 10.00

		},

		three: {

			crnCostPerNode: 55.00,
			crnRewardPerDay: 0.57,
			monthlyCROFee: 20.00

		},

		four: {

			crnCostPerNode: 110.00,
			crnRewardPerDay: 1.20,
			monthlyCROFee: 40.00

		},

		/**
		 * This is just a shitty guess, ABIs mention five tiers.
		 */
		five: {

			crnCostPerNode: 145.00,
			crnRewardPerDay: 2.50,
			monthlyCROFee: 80.00

		}

	},

	boostNft: {

		bronze: 0.02,
		silver: 0.05,
		gold: 0.10

	},

	/**
	 * @param { number } days
	 * @param { boolean } hasTaxNft
	 * @returns { number? }
	 */
	tax: ( days, hasTaxNft ) => {

		switch ( true ) {

			case days >= 0 && days <= 5: return 0.50
			case days >= 6 && days <= 10: return 0.40
			case days >= 11 && days <= 15: return 0.30
			case days > 15 && ! hasTaxNft: return 0.10
			case days > 15 && hasTaxNft: return 0.05

		}

		return null

	}

}