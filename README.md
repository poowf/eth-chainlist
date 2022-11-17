# eth-chainlist

`eth-chainlist` is a Node.JS NPM Package that provides evm chain  based on the data from [https://chainlist.org/](https://chainlist.org/)

This package automatically updates itself once a day as long as there is chain data updates.

## Usage
```javascript
import { getChainById } from 'eth-chainlist';
const currentChain = getChainById(1);
/**
 * {
    name: 'Ethereum Mainnet',
    chain: 'ETH',
    icon: 'ethereum',
    rpc: [
      'https://mainnet.infura.io/v3/${INFURA_API_KEY}',
      'wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}',
      'https://api.mycryptoapi.com/eth',
      'https://cloudflare-eth.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://ethereum.org',
    shortName: 'eth',
    chainId: 1,
    networkId: 1,
    slip44: 60,
    ens: { registry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
    explorers: [
      {
        name: 'etherscan',
        url: 'https://etherscan.io',
        standard: 'EIP3091'
      }
    ]
  }
 * **/
```

## APIs

The following APIs are available in this package:

`rawChainData` will return all the chain data in JSON format.

`getChainById` takes in a chain id and will return you a single chain

`getChainByNetworkId` takes in a network id and will return you a single chain

`getChainByName` takes in a name and will return you a single chain

`getChainByShortName` takes in a short name and will return you a single chain