var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
	{
		type:"native",
		name:"NOR",
		multiplier:1,
		default:true,
		values:["", "nor", "NOR"],
		decimalPlaces:8
	},
	{
		type:"native",
		name:"mNOR",
		multiplier:1000,
		values:["mnor"],
		decimalPlaces:5
	},
	{
		type:"native",
		name:"µNOR",
		multiplier:1000000,
		values:["µnor"],
		decimalPlaces:2
	},
	{
		type:"native",
		name:"sat",
		multiplier:100000000,
		values:["sat", "satoshi"],
		decimalPlaces:0
	},
];

module.exports = {
	name:"Noir",
	ticker:"NOR",
	logoUrlsByNetwork:{
		"main":"./img/logo/nor.svg",
		"test":"./img/logo/nor.svg",
		"regtest":"./img/logo/nor.svg",
		"signet":"./img/logo/nor.svg"
	},
	siteTitlesByNetwork: {
		"main":"Noir Explorer",
		"test":"Noir Testnet Explorer",
		"regtest":"Noir Regtest Explorer",
		"signet":"Noir Signet Explorer",
	},
	siteDescriptionHtml:"<b>NOR Explorer</b> is <a href='https://github.com/noirofficial/nor-rpc-explorer). If you run your own [Noir Full Node](https://noirofficial.org/#wallets), **NOR Explorer** can easily run alongside it, communicating via RPC calls. See the project [ReadMe](https://github.com/noirofficial/nor-rpc-explorer) for a list of features and instructions for running.",
	nodeTitle:"Noir Full Node",
	nodeUrl:"https://noirofficial.org/#wallets",
	demoSiteUrl: "https://new-explorer.noirofficial.org",
	miningPoolsConfigUrls:[
	],
	maxBlockWeight: 4000000,
	maxBlockSize: 1000000,
	difficultyAdjustmentBlockCount: 3,
	maxSupplyByNetwork: {
		"main": new Decimal(Infinity), // ref: https://bitcoin.stackexchange.com/a/38998
		"test": new Decimal(Infinity),
		"regtest": new Decimal(Infinity),
		"signet": new Decimal(Infinity)
	},
	targetBlockTimeSeconds: 150,
	targetBlockTimeMinutes: 2.5,
	currencyUnits:currencyUnits,
	currencyUnitsByName:{"NOR":currencyUnits[0], "mNOR":currencyUnits[1], "µNOR":currencyUnits[2], "sat":currencyUnits[3]},
	baseCurrencyUnit:currencyUnits[3],
	defaultCurrencyUnit:currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
	genesisBlockHashesByNetwork:{
		"main":	"000006a09dc95e0eb30c677e1c8a01080e2c49d1dd22ad1479492c61ffde9177",
		"test":	"00000dc0f9a616345cb61c95b51f9863d3a3c3978561304670f89464ff9f3b90",
		"regtest": "000000afd0cd7d8d708f5cb75d4cffd13a2302536f101943ae87d8e23a7040f8",
		"signet":  "00000008819873e925422c1ff0f99f7cc9bbb232af63a077a480a3633bee1ef6", 
	},
	genesisCoinbaseTransactionIdsByNetwork: {
		"main":	"1646db34f423b77ea40d5bfc35c63beb7c53975ff7f83e1971115ed3cf6c152a",
		"test":	"1646db34f423b77ea40d5bfc35c63beb7c53975ff7f83e1971115ed3cf6c152a",
		"regtest": "1646db34f423b77ea40d5bfc35c63beb7c53975ff7f83e1971115ed3cf6c152a",
		"signet":  "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"
	},
	genesisCoinbaseTransactionsByNetwork:{
		"main": {
	  	    "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff2f04ffff001d0104274e6f6972202d20436f6d6d756e697479206275696c742c20707269766163792064726976656e2effffffff010000000000000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
	        "txid": "1646db34f423b77ea40d5bfc35c63beb7c53975ff7f83e1971115ed3cf6c152a",
	        "hash": "1646db34f423b77ea40d5bfc35c63beb7c53975ff7f83e1971115ed3cf6c152a",
	        "size": 174,
	        "vsize": 174,
	        "version": 1,
	        "weight": 696,
	        "locktime": 0,
	        "vin": [
	          {
	            "coinbase": "04ffff001d0104274e6f6972202d20436f6d6d756e697479206275696c742c20707269766163792064726976656e2e",
	            "sequence": 4294967295
	          }
	        ],
	        "vout": [
	          {
	            "value": 0.00000000,
	            "n": 0,
	            "scriptPubKey": {
	              "asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
	              "hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
	              "type": "pubkey"
	            }
	          }
	        ],
			"blockhash": "000006a09dc95e0eb30c677e1c8a01080e2c49d1dd22ad1479492c61ffde9177",
		    "time": 1609599446,
		    "blocktime": 1609599446
		},
		"test": {
	  	    "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff2f04ffff001d0104274e6f6972202d20436f6d6d756e697479206275696c742c20707269766163792064726976656e2effffffff010000000000000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
	        "txid": "1646db34f423b77ea40d5bfc35c63beb7c53975ff7f83e1971115ed3cf6c152a",
	        "hash": "1646db34f423b77ea40d5bfc35c63beb7c53975ff7f83e1971115ed3cf6c152a",
	        "size": 174,
	        "vsize": 174,
	        "version": 1,
	        "weight": 696,
	        "locktime": 0,
	        "vin": [
	          {
	            "coinbase": "04ffff001d0104274e6f6972202d20436f6d6d756e697479206275696c742c20707269766163792064726976656e2e",
	            "sequence": 4294967295
	          }
	        ],
	        "vout": [
	          {
	            "value": 0.00000000,
	            "n": 0,
	            "scriptPubKey": {
	              "asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
	              "hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
	              "type": "pubkey",
		          "addresses": [
		            "21W2T9ksA2ZThFZEmuDksmWYWbvGtKULRnk"
		          ]
	            }
	          }
	        ],
			"blockhash": "000006a09dc95e0eb30c677e1c8a01080e2c49d1dd22ad1479492c61ffde9177",
		    "time": 1609599446,
		    "blocktime": 1609599446
		},
		"regtest": {
		},
		"signet": {
		}
	},
	genesisBlockStatsByNetwork:{
		"main": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "000006a09dc95e0eb30c677e1c8a01080e2c49d1dd22ad1479492c61ffde9177",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1609599446,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 0,
			"swtotal_size": 0,
			"swtotal_weight": 0,
			"swtxs": 0,
			"time": 1609599446,
			"total_out": 0,
			"total_size": 0,
			"total_weight": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		},
		"test": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "00000dc0f9a616345cb61c95b51f9863d3a3c3978561304670f89464ff9f3b90",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1609600837,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 0,
			"swtotal_size": 0,
			"swtotal_weight": 0,
			"swtxs": 0,
			"time": 1609600837,
			"total_out": 0,
			"total_size": 0,
			"total_weight": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		},
		"regtest": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "000000afd0cd7d8d708f5cb75d4cffd13a2302536f101943ae87d8e23a7040f8",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1609602800,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 0,
			"swtotal_size": 0,
			"swtotal_weight": 0,
			"swtxs": 0,
			"time": 1609602800,
			"total_out": 0,
			"total_size": 0,
			"total_weight": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		},
		"signet": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "00000008819873e925422c1ff0f99f7cc9bbb232af63a077a480a3633bee1ef6",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1598918400,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 5000000000,
			"swtotal_size": 0,
			"swtotal_weight": 0,
			"swtxs": 0,
			"time": 1598918400,
			"total_out": 0,
			"total_size": 0,
			"total_weight": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		}
	},
	genesisCoinbaseOutputAddressScripthash:"8b01df4e368ea28f8dc0423bcf7a4923e3a12d307c875e47a0cfbf90b5c39161",
	historicalData: [
	],
	exchangeRateData:{
		jsonUrl:"https://api.coindesk.com/v1/bpi/currentprice.json",
		responseBodySelectorFunction:function(responseBody) {
			//console.log("Exchange Rate Response: " + JSON.stringify(responseBody));

			var exchangedCurrencies = ["USD", "GBP", "EUR"];

			if (responseBody.bpi) {
				var exchangeRates = {};

				for (var i = 0; i < exchangedCurrencies.length; i++) {
					if (responseBody.bpi[exchangedCurrencies[i]]) {
						exchangeRates[exchangedCurrencies[i].toLowerCase()] = responseBody.bpi[exchangedCurrencies[i]].rate_float;
					}
				}

				return exchangeRates;
			}
			
			return null;
		}
	},
	blockRewardFunction:function(blockHeight, chain) {
		if (blockHeight == 0)
			return new Decimal8(0);

		return new Decimal8(2.2);
	}
};
