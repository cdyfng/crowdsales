var Web3 = require("web3");

var RPC_SERVER = "http://localhost:8545";
var web3 = new Web3(new Web3.providers.HttpProvider(RPC_SERVER));

var abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "claimed",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "owner_",
        "type": "address"
      }
    ],
    "name": "setOwner",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "time",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint128"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "foundersAllocation",
    "outputs": [
      {
        "name": "",
        "type": "uint128"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "day",
        "type": "uint256"
      }
    ],
    "name": "claim",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "foundersKey",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "userBuys",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "day",
        "type": "uint256"
      }
    ],
    "name": "createOnDay",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "freeze",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "keys",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "startTime",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "authority_",
        "type": "address"
      }
    ],
    "name": "setAuthority",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "dailyTotals",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "buy",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "openTime",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "EOS",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "today",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "authority",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "eos",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "createFirstDay",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "claimAll",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "dayFor",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "day",
        "type": "uint256"
      },
      {
        "name": "limit",
        "type": "uint256"
      }
    ],
    "name": "buyWithLimit",
    "outputs": [],
    "payable": true,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "collect",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "numberOfDays",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "key",
        "type": "string"
      }
    ],
    "name": "register",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "createPerDay",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_numberOfDays",
        "type": "uint256"
      },
      {
        "name": "_totalSupply",
        "type": "uint128"
      },
      {
        "name": "_openTime",
        "type": "uint256"
      },
      {
        "name": "_startTime",
        "type": "uint256"
      },
      {
        "name": "_foundersAllocation",
        "type": "uint128"
      },
      {
        "name": "_foundersKey",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "constructor"
  },
  {
    "payable": true,
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "window",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "LogBuy",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "window",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "LogClaim",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "key",
        "type": "string"
      }
    ],
    "name": "LogRegister",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "LogCollect",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "LogFreeze",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "authority",
        "type": "address"
      }
    ],
    "name": "LogSetAuthority",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "LogSetOwner",
    "type": "event"
  }
];

var address = '0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf';

if (!web3.isConnected()) {
  console.log("error", "web3 is not connected to the RPC");
  process.exit(1);
}

var MyContract = web3.eth.contract(abi);

// initiate contract for an address
var myContractInstance = MyContract.at(address);

var event2 = myContractInstance.LogBuy(
  {
  },
  {
    fromBlock: 3798640,
    toBlock: 'latest'
  }
)

//    event LogBuy      (uint window, address user, uint amount);
//    event LogClaim    (uint window, address user, uint amount);
//    event LogRegister (address user, string key);
//    event LogCollect  (uint amount);
//    event LogFreeze   ();
// watch for changes
var ether_fund = {};
event2.watch(function(error, result) {
  if (!error) {
    switch (result.event) {
      case 'LogBuy':
        if (ether_fund[result.args.window] == undefined)
          ether_fund[result.args.window] = web3.fromWei(result.args.amount, 'ether').toNumber();
        else
          ether_fund[result.args.window] += web3.fromWei(result.args.amount, 'ether').toNumber();

        if (result.blockNumber >= 3968417) {
          console.log("LogBuy Total: ");
          for (var i in ether_fund) {
            console.log(i, "  ", ether_fund[i]);
          }
        }
        break;
      case 'LogClaim':
        console.log("LogClaim");
        break;
      case 'LogRegister':
        console.log("LogRegister");
        break;
      case 'LogCollect':
        console.log("LogCollect");
        break;
      default:

    }
    console.log(result);
  }
});
