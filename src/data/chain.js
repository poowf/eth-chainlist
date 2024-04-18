const chainArray = [
  {
    name: 'Ethereum Mainnet',
    chain: 'ETH',
    icon: 'ethereum',
    rpc: [
      'https://mainnet.infura.io/v3/${INFURA_API_KEY}',
      'wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}',
      'https://api.mycryptoapi.com/eth',
      'https://cloudflare-eth.com',
      'https://ethereum-rpc.publicnode.com',
      'wss://ethereum-rpc.publicnode.com',
      'https://mainnet.gateway.tenderly.co',
      'wss://mainnet.gateway.tenderly.co',
      'https://rpc.blocknative.com/boost',
      'https://rpc.flashbots.net',
      'https://rpc.flashbots.net/fast',
      'https://rpc.mevblocker.io',
      'https://rpc.mevblocker.io/fast',
      'https://rpc.mevblocker.io/noreverts',
      'https://rpc.mevblocker.io/fullprivacy',
      'https://eth.drpc.org',
      'wss://eth.drpc.org'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
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
      },
      {
        name: 'blockscout',
        url: 'https://eth.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      },
      {
        name: 'dexguru',
        url: 'https://ethereum.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Expanse Network',
    chain: 'EXP',
    rpc: [ 'https://node.expanse.tech' ],
    faucets: [],
    nativeCurrency: { name: 'Expanse Network Ether', symbol: 'EXP', decimals: 18 },
    infoURL: 'https://expanse.tech',
    shortName: 'exp',
    chainId: 2,
    networkId: 1,
    slip44: 40
  },
  {
    name: 'Ropsten',
    title: 'Ethereum Testnet Ropsten',
    chain: 'ETH',
    rpc: [
      'https://ropsten.infura.io/v3/${INFURA_API_KEY}',
      'wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}'
    ],
    faucets: [
      'http://fauceth.komputing.org?chain=3&address=${ADDRESS}',
      'https://faucet.ropsten.be?${ADDRESS}'
    ],
    nativeCurrency: { name: 'Ropsten Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://github.com/ethereum/ropsten',
    shortName: 'rop',
    chainId: 3,
    networkId: 3,
    slip44: 1,
    ens: { registry: '0x112234455c3a32fd11230c42e7bccd4a84e02010' },
    explorers: [
      {
        name: 'etherscan',
        url: 'https://ropsten.etherscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Rinkeby',
    title: 'Ethereum Testnet Rinkeby',
    chain: 'ETH',
    rpc: [
      'https://rinkeby.infura.io/v3/${INFURA_API_KEY}',
      'wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}'
    ],
    faucets: [
      'http://fauceth.komputing.org?chain=4&address=${ADDRESS}',
      'https://faucet.rinkeby.io'
    ],
    nativeCurrency: { name: 'Rinkeby Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://www.rinkeby.io',
    shortName: 'rin',
    chainId: 4,
    networkId: 4,
    slip44: 1,
    ens: { registry: '0xe7410170f87102df0055eb195163a03b7f2bff4a' },
    explorers: [
      {
        name: 'etherscan-rinkeby',
        url: 'https://rinkeby.etherscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Goerli',
    title: 'Ethereum Testnet Goerli',
    chain: 'ETH',
    rpc: [
      'https://goerli.infura.io/v3/${INFURA_API_KEY}',
      'wss://goerli.infura.io/v3/${INFURA_API_KEY}',
      'https://rpc.goerli.mudit.blog/',
      'https://ethereum-goerli-rpc.publicnode.com',
      'wss://ethereum-goerli-rpc.publicnode.com',
      'https://goerli.gateway.tenderly.co',
      'wss://goerli.gateway.tenderly.co'
    ],
    faucets: [
      'http://fauceth.komputing.org?chain=5&address=${ADDRESS}',
      'https://goerli-faucet.slock.it?address=${ADDRESS}',
      'https://faucet.goerli.mudit.blog'
    ],
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://goerli.net/#about',
    shortName: 'gor',
    chainId: 5,
    networkId: 5,
    slip44: 1,
    ens: { registry: '0x112234455c3a32fd11230c42e7bccd4a84e02010' },
    explorers: [
      {
        name: 'etherscan-goerli',
        url: 'https://goerli.etherscan.io',
        standard: 'EIP3091'
      },
      {
        name: 'blockscout-goerli',
        url: 'https://eth-goerli.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Kotti Testnet',
    title: 'Ethereum Classic Kotti Testnet',
    status: 'deprecated',
    chain: 'ETC',
    icon: 'ethereumclassictestnet',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Kotti Ether', symbol: 'KOT', decimals: 18 },
    infoURL: 'https://ethereumclassic.org/development/testnets',
    shortName: 'kot',
    chainId: 6,
    networkId: 6,
    slip44: 1
  },
  {
    name: 'ThaiChain',
    chain: 'TCH',
    rpc: [ 'https://rpc.dome.cloud', 'https://rpc.thaichain.org' ],
    faucets: [],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    nativeCurrency: { name: 'ThaiChain Ether', symbol: 'TCH', decimals: 18 },
    infoURL: 'https://thaichain.io',
    shortName: 'tch',
    chainId: 7,
    networkId: 7,
    explorers: [
      {
        name: 'Thaichain Explorer',
        url: 'https://exp.thaichain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ubiq',
    chain: 'UBQ',
    rpc: [ 'https://rpc.octano.dev', 'https://pyrus2.ubiqscan.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ubiq Ether', symbol: 'UBQ', decimals: 18 },
    infoURL: 'https://ubiqsmart.com',
    shortName: 'ubq',
    chainId: 8,
    networkId: 8,
    slip44: 108,
    explorers: [
      {
        name: 'ubiqscan',
        url: 'https://ubiqscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ubiq Network Testnet',
    chain: 'UBQ',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ubiq Testnet Ether', symbol: 'TUBQ', decimals: 18 },
    infoURL: 'https://ethersocial.org',
    shortName: 'tubq',
    chainId: 9,
    networkId: 2,
    slip44: 1
  },
  {
    name: 'OP Mainnet',
    chain: 'ETH',
    rpc: [
      'https://mainnet.optimism.io',
      'https://optimism-rpc.publicnode.com',
      'wss://optimism-rpc.publicnode.com',
      'https://optimism.gateway.tenderly.co',
      'wss://optimism.gateway.tenderly.co',
      'https://optimism.drpc.org',
      'wss://optimism.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://optimism.io',
    shortName: 'oeth',
    chainId: 10,
    networkId: 10,
    explorers: [
      {
        name: 'etherscan',
        url: 'https://optimistic.etherscan.io',
        standard: 'EIP3091'
      },
      {
        name: 'blockscout',
        url: 'https://optimism.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      },
      {
        name: 'dexguru',
        url: 'https://optimism.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Metadium Mainnet',
    chain: 'META',
    rpc: [ 'https://api.metadium.com/prod' ],
    faucets: [],
    nativeCurrency: { name: 'Metadium Mainnet Ether', symbol: 'META', decimals: 18 },
    infoURL: 'https://metadium.com',
    shortName: 'meta',
    chainId: 11,
    networkId: 11,
    slip44: 916
  },
  {
    name: 'Metadium Testnet',
    chain: 'META',
    rpc: [ 'https://api.metadium.com/dev' ],
    faucets: [],
    nativeCurrency: { name: 'Metadium Testnet Ether', symbol: 'KAL', decimals: 18 },
    infoURL: 'https://metadium.com',
    shortName: 'kal',
    chainId: 12,
    networkId: 12,
    slip44: 1
  },
  {
    name: 'Diode Testnet Staging',
    chain: 'DIODE',
    rpc: [
      'https://staging.diode.io:8443/',
      'wss://staging.diode.io:8443/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'Staging Diodes', symbol: 'sDIODE', decimals: 18 },
    infoURL: 'https://diode.io/staging',
    shortName: 'dstg',
    chainId: 13,
    networkId: 13,
    slip44: 1
  },
  {
    name: 'Flare Mainnet',
    chain: 'FLR',
    icon: 'flare',
    rpc: [
      'https://flare-api.flare.network/ext/C/rpc',
      'https://flare.rpc.thirdweb.com',
      'https://flare-bundler.etherspot.io',
      'https://rpc.ankr.com/flare',
      'https://01-gravelines-003-01.rpc.tatum.io/ext/bc/C/rpc',
      'https://01-vinthill-003-02.rpc.tatum.io/ext/bc/C/rpc',
      'https://rpc.ftso.au/flare',
      'https://flare.enosys.global/ext/C/rpc',
      'https://flare.solidifi.app/ext/C/rpc'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Flare', symbol: 'FLR', decimals: 18 },
    infoURL: 'https://flare.network',
    shortName: 'flr',
    chainId: 14,
    networkId: 14,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://flare-explorer.flare.network',
        standard: 'EIP3091'
      },
      {
        name: 'flarescan',
        url: 'https://mainnet.flarescan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Diode Prenet',
    chain: 'DIODE',
    rpc: [
      'https://prenet.diode.io:8443/',
      'wss://prenet.diode.io:8443/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'Diodes', symbol: 'DIODE', decimals: 18 },
    infoURL: 'https://diode.io/prenet',
    shortName: 'diode',
    chainId: 15,
    networkId: 15
  },
  {
    name: 'Songbird Testnet Coston',
    chain: 'SGB',
    icon: 'coston',
    rpc: [
      'https://coston-api.flare.network/ext/C/rpc',
      'https://songbird-testnet-coston.rpc.thirdweb.com',
      'https://01-gravelines-004-01.rpc.tatum.io/ext/bc/C/rpc',
      'https://02-chicago-004-02.rpc.tatum.io/ext/bc/C/rpc',
      'https://02-tokyo-004-03.rpc.tatum.io/ext/bc/C/rpc',
      'https://coston.enosys.global/ext/C/rpc'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [ 'https://faucet.flare.network' ],
    nativeCurrency: { name: 'Coston Flare', symbol: 'CFLR', decimals: 18 },
    infoURL: 'https://flare.network',
    shortName: 'cflr',
    chainId: 16,
    networkId: 16,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://coston-explorer.flare.network',
        standard: 'EIP3091'
      },
      {
        name: 'flarescan',
        url: 'https://coston.testnet.flarescan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ThaiChain 2.0 ThaiFi',
    chain: 'TCH',
    rpc: [ 'https://rpc.thaifi.com' ],
    faucets: [],
    nativeCurrency: { name: 'Thaifi Ether', symbol: 'TFI', decimals: 18 },
    infoURL: 'https://exp.thaifi.com',
    shortName: 'tfi',
    chainId: 17,
    networkId: 17
  },
  {
    name: 'ThunderCore Testnet',
    chain: 'TST',
    rpc: [
      'https://testnet-rpc.thundercore.com',
      'https://thundercore-testnet.drpc.org',
      'wss://thundercore-testnet.drpc.org'
    ],
    faucets: [ 'https://faucet-testnet.thundercore.com' ],
    nativeCurrency: { name: 'ThunderCore Testnet Token', symbol: 'TST', decimals: 18 },
    infoURL: 'https://thundercore.com',
    shortName: 'TST',
    chainId: 18,
    networkId: 18,
    slip44: 1,
    explorers: [
      {
        name: 'thundercore-blockscout-testnet',
        url: 'https://explorer-testnet.thundercore.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Songbird Canary-Network',
    chain: 'SGB',
    icon: 'songbird',
    rpc: [
      'https://songbird-api.flare.network/ext/C/rpc',
      'https://01-gravelines-006-01.rpc.tatum.io/ext/bc/C/rpc',
      'https://01-vinthill-006-02.rpc.tatum.io/ext/bc/C/rpc',
      'https://02-tokyo-006-03.rpc.tatum.io/ext/bc/C/rpc',
      'https://rpc.ftso.au/songbird',
      'https://songbird.enosys.global/ext/C/rpc',
      'https://songbird.solidifi.app/ext/C/rpc'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Songbird', symbol: 'SGB', decimals: 18 },
    infoURL: 'https://flare.network',
    shortName: 'sgb',
    chainId: 19,
    networkId: 19,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://songbird-explorer.flare.network',
        standard: 'EIP3091'
      },
      {
        name: 'flarescan',
        url: 'https://songbird.flarescan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Elastos Smart Chain',
    chain: 'ETH',
    rpc: [ 'https://api.elastos.io/eth' ],
    faucets: [],
    nativeCurrency: { name: 'Elastos', symbol: 'ELA', decimals: 18 },
    infoURL: 'https://www.elastos.org/',
    shortName: 'esc',
    chainId: 20,
    networkId: 20,
    explorers: [
      {
        name: 'elastos esc explorer',
        url: 'https://esc.elastos.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Elastos Smart Chain Testnet',
    chain: 'ETH',
    rpc: [ 'https://api-testnet.elastos.io/eth' ],
    faucets: [ 'https://esc-faucet.elastos.io/' ],
    nativeCurrency: { name: 'Elastos', symbol: 'tELA', decimals: 18 },
    infoURL: 'https://www.elastos.org/',
    shortName: 'esct',
    chainId: 21,
    networkId: 21,
    explorers: [
      {
        name: 'elastos esc explorer',
        url: 'https://esc-testnet.elastos.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ELA-DID-Sidechain Mainnet',
    chain: 'ETH',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Elastos', symbol: 'ELA', decimals: 18 },
    infoURL: 'https://www.elastos.org/',
    shortName: 'eladid',
    chainId: 22,
    networkId: 22
  },
  {
    name: 'ELA-DID-Sidechain Testnet',
    chain: 'ETH',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Elastos', symbol: 'tELA', decimals: 18 },
    infoURL: 'https://elaeth.io/',
    shortName: 'eladidt',
    chainId: 23,
    networkId: 23,
    slip44: 1
  },
  {
    name: 'KardiaChain Mainnet',
    chain: 'KAI',
    icon: 'kardiachain',
    rpc: [ 'https://rpc.kardiachain.io' ],
    faucets: [],
    nativeCurrency: { name: 'KardiaChain', symbol: 'KAI', decimals: 18 },
    infoURL: 'https://kardiachain.io',
    shortName: 'kardiachain',
    chainId: 24,
    networkId: 0,
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'Cronos Mainnet',
    chain: 'CRO',
    rpc: [
      'https://evm.cronos.org',
      'https://cronos-evm-rpc.publicnode.com',
      'wss://cronos-evm-rpc.publicnode.com',
      'https://cronos.drpc.org',
      'wss://cronos.drpc.org'
    ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Cronos', symbol: 'CRO', decimals: 18 },
    infoURL: 'https://cronos.org/',
    shortName: 'cro',
    chainId: 25,
    networkId: 25,
    explorers: [
      {
        name: 'Cronos Explorer',
        url: 'https://explorer.cronos.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Genesis L1 testnet',
    chain: 'genesis',
    rpc: [ 'https://testrpc.genesisl1.org' ],
    faucets: [],
    nativeCurrency: { name: 'L1 testcoin', symbol: 'L1test', decimals: 18 },
    infoURL: 'https://www.genesisl1.com',
    shortName: 'L1test',
    chainId: 26,
    networkId: 26,
    slip44: 1,
    explorers: [
      {
        name: 'Genesis L1 testnet explorer',
        url: 'https://testnet.genesisl1.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ShibaChain',
    chain: 'SHIB',
    rpc: [ 'https://rpc.shibchain.org' ],
    faucets: [],
    nativeCurrency: { name: 'SHIBA INU COIN', symbol: 'SHIB', decimals: 18 },
    infoURL: 'https://shibchain.org',
    shortName: 'shib',
    chainId: 27,
    networkId: 27,
    explorers: [
      {
        name: 'Shiba Explorer',
        url: 'https://exp.shibchain.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Boba Network Rinkeby Testnet',
    chain: 'ETH',
    status: 'deprecated',
    rpc: [ 'https://rinkeby.boba.network/' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'BobaRinkeby',
    chainId: 28,
    networkId: 28,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://blockexplorer.rinkeby.boba.network',
        standard: 'none'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-4',
      bridges: [ { url: 'https://gateway.rinkeby.boba.network' } ]
    }
  },
  {
    name: 'Genesis L1',
    chain: 'genesis',
    rpc: [ 'https://rpc.genesisl1.org' ],
    faucets: [],
    nativeCurrency: { name: 'L1 coin', symbol: 'L1', decimals: 18 },
    infoURL: 'https://www.genesisl1.com',
    shortName: 'L1',
    chainId: 29,
    networkId: 29,
    explorers: [
      {
        name: 'Genesis L1 blockchain explorer',
        url: 'https://explorer.genesisl1.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Rootstock Mainnet',
    chain: 'Rootstock',
    rpc: [ 'https://public-node.rsk.co', 'https://mycrypto.rsk.co' ],
    faucets: [],
    icon: 'rootstock',
    nativeCurrency: { name: 'Smart Bitcoin', symbol: 'RBTC', decimals: 18 },
    infoURL: 'https://rootstock.io',
    shortName: 'rsk',
    chainId: 30,
    networkId: 30,
    slip44: 137,
    explorers: [
      {
        name: 'Rootstock Explorer',
        url: 'https://explorer.rsk.co',
        standard: 'EIP3091'
      },
      {
        name: 'blockscout',
        url: 'https://rootstock.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Rootstock Testnet',
    chain: 'Rootstock',
    rpc: [
      'https://public-node.testnet.rsk.co',
      'https://mycrypto.testnet.rsk.co'
    ],
    faucets: [ 'https://faucet.rsk.co/' ],
    icon: 'rootstock',
    nativeCurrency: { name: 'Testnet Smart Bitcoin', symbol: 'tRBTC', decimals: 18 },
    infoURL: 'https://rootstock.io',
    shortName: 'trsk',
    chainId: 31,
    networkId: 31,
    slip44: 1,
    explorers: [
      {
        name: 'RSK Testnet Explorer',
        url: 'https://explorer.testnet.rsk.co',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'GoodData Testnet',
    chain: 'GooD',
    rpc: [ 'https://test2.goodata.io' ],
    faucets: [],
    nativeCurrency: { name: 'GoodData Testnet Ether', symbol: 'GooD', decimals: 18 },
    infoURL: 'https://www.goodata.org',
    shortName: 'GooDT',
    chainId: 32,
    networkId: 32,
    slip44: 1
  },
  {
    name: 'GoodData Mainnet',
    chain: 'GooD',
    rpc: [ 'https://rpc.goodata.io' ],
    faucets: [],
    nativeCurrency: { name: 'GoodData Mainnet Ether', symbol: 'GooD', decimals: 18 },
    infoURL: 'https://www.goodata.org',
    shortName: 'GooD',
    chainId: 33,
    networkId: 33
  },
  {
    name: 'SecureChain Mainnet',
    chain: 'SCAI',
    icon: 'scaiIcon',
    rpc: [ 'https://mainnet-rpc.scai.network' ],
    faucets: [],
    nativeCurrency: { name: 'SecureChain', symbol: 'SCAI', decimals: 18 },
    infoURL: 'https://securechain.ai',
    shortName: 'scai',
    chainId: 34,
    networkId: 34,
    redFlags: [ 'reusedChainId' ],
    explorers: [
      {
        name: 'SecureChain Mainnet',
        url: 'https://explorer.securechain.ai',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'TBWG Chain',
    chain: 'TBWG',
    rpc: [ 'https://rpc.tbwg.io' ],
    faucets: [],
    nativeCurrency: { name: 'TBWG Ether', symbol: 'TBG', decimals: 18 },
    infoURL: 'https://tbwg.io',
    shortName: 'tbwg',
    chainId: 35,
    networkId: 35
  },
  {
    name: 'Dxchain Mainnet',
    chain: 'Dxchain',
    icon: 'dx',
    rpc: [ 'https://mainnet.dxchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Dxchain', symbol: 'DX', decimals: 18 },
    infoURL: 'https://www.dxchain.com/',
    shortName: 'dx',
    chainId: 36,
    networkId: 36,
    explorers: [
      { name: 'dxscan', url: 'https://dxscan.io', standard: 'EIP3091' }
    ]
  },
  {
    name: 'Xpla Mainnet',
    chain: 'XPLA',
    rpc: [ 'https://dimension-evm-rpc.xpla.dev' ],
    faucets: [],
    nativeCurrency: { name: 'XPLA', symbol: 'XPLA', decimals: 18 },
    infoURL: 'https://xpla.io',
    shortName: 'xpla',
    chainId: 37,
    networkId: 37,
    icon: 'xpla',
    explorers: [
      {
        name: 'XPLA Explorer',
        url: 'https://explorer.xpla.io/mainnet',
        standard: 'EIP3091'
      }
    ],
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'Valorbit',
    chain: 'VAL',
    rpc: [ 'https://rpc.valorbit.com/v2' ],
    faucets: [],
    nativeCurrency: { name: 'Valorbit', symbol: 'VAL', decimals: 18 },
    infoURL: 'https://valorbit.com',
    shortName: 'val',
    chainId: 38,
    networkId: 38,
    slip44: 538
  },
  {
    name: 'U2U Solaris Mainnet',
    chain: 'u2u',
    rpc: [ 'https://rpc-mainnet.uniultra.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Unicorn Ultra', symbol: 'U2U', decimals: 18 },
    infoURL: 'https://uniultra.xyz',
    shortName: 'u2u',
    chainId: 39,
    networkId: 39,
    icon: 'u2u',
    explorers: [
      {
        icon: 'u2u',
        name: 'U2U Explorer',
        url: 'https://u2uscan.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Telos EVM Mainnet',
    chain: 'TLOS',
    rpc: [
      'https://mainnet.telos.net/evm',
      'https://telos.drpc.org',
      'wss://telos.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Telos', symbol: 'TLOS', decimals: 18 },
    infoURL: 'https://telos.net',
    shortName: 'TelosEVM',
    chainId: 40,
    networkId: 40,
    explorers: [
      {
        name: 'teloscan',
        url: 'https://teloscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Telos EVM Testnet',
    chain: 'TLOS',
    rpc: [
      'https://testnet.telos.net/evm',
      'https://telos-testnet.drpc.org',
      'wss://telos-testnet.drpc.org'
    ],
    faucets: [ 'https://app.telos.net/testnet/developers' ],
    nativeCurrency: { name: 'Telos', symbol: 'TLOS', decimals: 18 },
    infoURL: 'https://telos.net',
    shortName: 'TelosEVMTestnet',
    chainId: 41,
    networkId: 41,
    slip44: 1,
    explorers: [
      {
        name: 'teloscan',
        url: 'https://testnet.teloscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'LUKSO Mainnet',
    chain: 'LUKSO',
    icon: 'lukso',
    rpc: [
      'https://rpc.mainnet.lukso.network',
      'wss://ws-rpc.mainnet.lukso.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'LUKSO', symbol: 'LYX', decimals: 18 },
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer.execution.mainnet.lukso.network',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://lukso.network',
    shortName: 'lukso',
    chainId: 42,
    networkId: 42,
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'Darwinia Pangolin Testnet',
    chain: 'pangolin',
    rpc: [ 'https://pangolin-rpc.darwinia.network' ],
    faucets: [
      'https://docs.darwinia.network/pangolin-testnet-1e9ac8b09e874e8abd6a7f18c096ca6a'
    ],
    nativeCurrency: {
      name: 'Pangolin Network Native Token',
      symbol: 'PRING',
      decimals: 18
    },
    infoURL: 'https://darwinia.network/',
    shortName: 'pangolin',
    chainId: 43,
    networkId: 43,
    slip44: 1,
    explorers: [
      {
        name: 'subscan',
        url: 'https://pangolin.subscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Crab Network',
    chain: 'crab',
    rpc: [
      'https://crab-rpc.darwinia.network',
      'https://crab-rpc.darwiniacommunitydao.xyz'
    ],
    faucets: [],
    nativeCurrency: { name: 'Crab Network Native Token', symbol: 'CRAB', decimals: 18 },
    infoURL: 'https://crab.network/',
    shortName: 'crab',
    chainId: 44,
    networkId: 44,
    explorers: [
      {
        name: 'subscan',
        url: 'https://crab.subscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Darwinia Pangoro Testnet',
    chain: 'pangoro',
    rpc: [ 'https://pangoro-rpc.darwinia.network' ],
    faucets: [
      'https://docs.darwinia.network/pangoro-testnet-70cfec5dc9ca42759959ba3803edaec2'
    ],
    nativeCurrency: {
      name: 'Pangoro Network Native Token',
      symbol: 'ORING',
      decimals: 18
    },
    infoURL: 'https://darwinia.network/',
    shortName: 'pangoro',
    chainId: 45,
    networkId: 45,
    slip44: 1,
    explorers: [
      {
        name: 'subscan',
        url: 'https://pangoro.subscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Darwinia Network',
    chain: 'darwinia',
    rpc: [
      'https://rpc.darwinia.network',
      'https://darwinia-rpc.darwiniacommunitydao.xyz',
      'https://darwinia-rpc.dwellir.com'
    ],
    faucets: [],
    nativeCurrency: {
      name: 'Darwinia Network Native Token',
      symbol: 'RING',
      decimals: 18
    },
    infoURL: 'https://darwinia.network/',
    shortName: 'darwinia',
    chainId: 46,
    networkId: 46,
    explorers: [
      {
        name: 'subscan',
        url: 'https://darwinia.subscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Acria IntelliChain',
    chain: 'AIC',
    rpc: [ 'https://aic.acria.ai' ],
    faucets: [],
    nativeCurrency: { name: 'ACRIA', symbol: 'ACRIA', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://acria.ai',
    shortName: 'aic',
    chainId: 47,
    networkId: 47,
    explorers: [
      {
        name: 'Acria IntelliChain-Explorer',
        url: 'https://explorer.acria.ai',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ennothem Mainnet Proterozoic',
    chain: 'ETMP',
    rpc: [ 'https://rpc.etm.network' ],
    faucets: [],
    nativeCurrency: { name: 'Ennothem', symbol: 'ETMP', decimals: 18 },
    infoURL: 'https://etm.network',
    shortName: 'etmp',
    chainId: 48,
    networkId: 48,
    icon: 'etmp',
    explorers: [
      {
        name: 'etmpscan',
        url: 'https://etmscan.network',
        icon: 'etmp',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ennothem Testnet Pioneer',
    chain: 'ETMP',
    rpc: [ 'https://rpc.pioneer.etm.network' ],
    faucets: [],
    nativeCurrency: { name: 'Ennothem', symbol: 'ETMP', decimals: 18 },
    infoURL: 'https://etm.network',
    shortName: 'etmpTest',
    chainId: 49,
    networkId: 49,
    slip44: 1,
    icon: 'etmp',
    explorers: [
      {
        name: 'etmp',
        url: 'https://pioneer.etmscan.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'XDC Network',
    chain: 'XDC',
    rpc: [
      'https://erpc.xinfin.network',
      'https://rpc.xinfin.network',
      'https://rpc1.xinfin.network',
      'https://rpc-xdc.icecreamswap.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'XinFin', symbol: 'XDC', decimals: 18 },
    infoURL: 'https://xinfin.org',
    shortName: 'xdc',
    chainId: 50,
    networkId: 50,
    icon: 'xdc',
    explorers: [
      {
        name: 'xdcscan',
        url: 'https://xdcscan.io',
        icon: 'blocksscan',
        standard: 'EIP3091'
      },
      {
        name: 'blocksscan',
        url: 'https://xdc.blocksscan.io',
        icon: 'blocksscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'XDC Apothem Network',
    chain: 'XDC',
    rpc: [ 'https://rpc.apothem.network', 'https://erpc.apothem.network' ],
    faucets: [ 'https://faucet.apothem.network' ],
    nativeCurrency: { name: 'XinFin', symbol: 'TXDC', decimals: 18 },
    infoURL: 'https://xinfin.org',
    shortName: 'txdc',
    chainId: 51,
    networkId: 51,
    icon: 'xdc',
    explorers: [
      {
        name: 'xdcscan',
        url: 'https://apothem.xinfinscan.com',
        icon: 'blocksscan',
        standard: 'EIP3091'
      },
      {
        name: 'blocksscan',
        url: 'https://apothem.blocksscan.io',
        icon: 'blocksscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CoinEx Smart Chain Mainnet',
    chain: 'CSC',
    rpc: [ 'https://rpc.coinex.net' ],
    faucets: [],
    nativeCurrency: { name: 'CoinEx Chain Native Token', symbol: 'cet', decimals: 18 },
    infoURL: 'https://www.coinex.org/',
    shortName: 'cet',
    chainId: 52,
    networkId: 52,
    explorers: [
      {
        name: 'coinexscan',
        url: 'https://www.coinex.net',
        standard: 'none'
      }
    ]
  },
  {
    name: 'CoinEx Smart Chain Testnet',
    chain: 'CSC',
    rpc: [ 'https://testnet-rpc.coinex.net/' ],
    faucets: [],
    nativeCurrency: {
      name: 'CoinEx Chain Test Native Token',
      symbol: 'cett',
      decimals: 18
    },
    infoURL: 'https://www.coinex.org/',
    shortName: 'tcet',
    chainId: 53,
    networkId: 53,
    slip44: 1,
    explorers: [
      {
        name: 'coinexscan',
        url: 'https://testnet.coinex.net',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Openpiece Mainnet',
    chain: 'OPENPIECE',
    icon: 'openpiece',
    rpc: [ 'https://mainnet.openpiece.io' ],
    faucets: [],
    nativeCurrency: { name: 'Belly', symbol: 'BELLY', decimals: 18 },
    infoURL: 'https://cryptopiece.online',
    shortName: 'OP',
    chainId: 54,
    networkId: 54,
    explorers: [
      {
        name: 'Belly Scan',
        url: 'https://bellyscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Zyx Mainnet',
    chain: 'ZYX',
    rpc: [
      'https://rpc-1.zyx.network/',
      'https://rpc-2.zyx.network/',
      'https://rpc-3.zyx.network/',
      'https://rpc-4.zyx.network/',
      'https://rpc-5.zyx.network/',
      'https://rpc-6.zyx.network/'
    ],
    faucets: [],
    nativeCurrency: { name: 'Zyx', symbol: 'ZYX', decimals: 18 },
    infoURL: 'https://zyx.network/',
    shortName: 'ZYX',
    chainId: 55,
    networkId: 55,
    explorers: [
      { name: 'zyxscan', url: 'https://zyxscan.com', standard: 'none' }
    ]
  },
  {
    name: 'BNB Smart Chain Mainnet',
    chain: 'BSC',
    rpc: [
      'https://bsc-dataseed1.bnbchain.org',
      'https://bsc-dataseed2.bnbchain.org',
      'https://bsc-dataseed3.bnbchain.org',
      'https://bsc-dataseed4.bnbchain.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed3.defibit.io',
      'https://bsc-dataseed4.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://bsc-dataseed2.ninicoin.io',
      'https://bsc-dataseed3.ninicoin.io',
      'https://bsc-dataseed4.ninicoin.io',
      'https://bsc-rpc.publicnode.com',
      'wss://bsc-rpc.publicnode.com',
      'wss://bsc-ws-node.nariox.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'BNB Chain Native Token', symbol: 'BNB', decimals: 18 },
    infoURL: 'https://www.bnbchain.org/en',
    shortName: 'bnb',
    chainId: 56,
    networkId: 56,
    slip44: 714,
    explorers: [
      {
        name: 'bscscan',
        url: 'https://bscscan.com',
        standard: 'EIP3091'
      },
      {
        name: 'dexguru',
        url: 'https://bnb.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Syscoin Mainnet',
    chain: 'SYS',
    rpc: [
      'https://rpc.syscoin.org',
      'https://rpc.ankr.com/syscoin/${ANKR_API_KEY}',
      'https://syscoin.public-rpc.com',
      'wss://rpc.syscoin.org/wss',
      'https://syscoin-evm.publicnode.com',
      'wss://syscoin-evm.publicnode.com'
    ],
    faucets: [ 'https://faucet.syscoin.org' ],
    nativeCurrency: { name: 'Syscoin', symbol: 'SYS', decimals: 18 },
    infoURL: 'https://www.syscoin.org',
    shortName: 'sys',
    chainId: 57,
    networkId: 57,
    explorers: [
      {
        name: 'Syscoin Block Explorer',
        url: 'https://explorer.syscoin.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ontology Mainnet',
    chain: 'Ontology',
    icon: 'ontology',
    rpc: [
      'http://dappnode1.ont.io:20339',
      'http://dappnode2.ont.io:20339',
      'http://dappnode3.ont.io:20339',
      'http://dappnode4.ont.io:20339',
      'https://dappnode1.ont.io:10339',
      'https://dappnode2.ont.io:10339',
      'https://dappnode3.ont.io:10339',
      'https://dappnode4.ont.io:10339'
    ],
    faucets: [],
    nativeCurrency: { name: 'ONG', symbol: 'ONG', decimals: 18 },
    infoURL: 'https://ont.io/',
    shortName: 'OntologyMainnet',
    chainId: 58,
    networkId: 58,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.ont.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'EOS EVM Legacy',
    chain: 'EOS',
    rpc: [ 'https://api.eosargentina.io' ],
    faucets: [],
    nativeCurrency: { name: 'EOS', symbol: 'EOS', decimals: 18 },
    infoURL: 'https://eosargentina.io',
    shortName: 'eos-legacy',
    chainId: 59,
    networkId: 59,
    explorers: [],
    status: 'deprecated'
  },
  {
    name: 'GoChain',
    chain: 'GO',
    rpc: [ 'https://rpc.gochain.io' ],
    faucets: [],
    nativeCurrency: { name: 'GoChain Ether', symbol: 'GO', decimals: 18 },
    infoURL: 'https://gochain.io',
    shortName: 'go',
    chainId: 60,
    networkId: 60,
    slip44: 6060,
    explorers: [
      {
        name: 'GoChain Explorer',
        url: 'https://explorer.gochain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ethereum Classic',
    title: 'Ethereum Classic Mainnet',
    status: 'active',
    chain: 'ETC',
    icon: 'ethereumclassic',
    rpc: [
      'https://etc.rivet.link',
      'https://besu-at.etc-network.info',
      'https://besu-de.etc-network.info',
      'https://geth-at.etc-network.info',
      'https://geth-de.etc-network.info',
      'https://etc.etcdesktop.com',
      'https://rpc.etcinscribe.com',
      'https://etc.mytokenpocket.vip'
    ],
    features: [ { name: 'EIP155' } ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETC', decimals: 18 },
    infoURL: 'https://ethereumclassic.org',
    shortName: 'etc',
    chainId: 61,
    networkId: 1,
    slip44: 61,
    explorers: [
      {
        name: 'blockscout-ethereum-classic',
        url: 'https://etc.blockscout.com',
        standard: 'EIP3091'
      },
      {
        name: 'etcnetworkinfo-blockscout-ethereum-classic',
        url: 'https://explorer-blockscout.etc-network.info',
        standard: 'none'
      },
      {
        name: 'etcnetworkinfo-alethio-ethereum-classic',
        url: 'https://explorer-alethio.etc-network.info',
        standard: 'none'
      },
      {
        name: 'etcnetworkinfo-expedition-ethereum-classic',
        url: 'https://explorer-expedition.etc-network.info',
        standard: 'none'
      },
      {
        name: 'hebeblock-ethereum-classic',
        url: 'https://etcerscan.com',
        standard: 'EIP3091'
      },
      {
        name: 'oklink-ethereum-classic',
        url: 'https://www.oklink.com/etc',
        standard: 'EIP3091'
      },
      {
        name: 'tokenview-ethereum-classic',
        url: 'https://etc.tokenview.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Morden Testnet',
    title: 'Ethereum Classic Morden Testnet',
    status: 'deprecated',
    chain: 'ETC',
    icon: 'ethereumclassictestnet',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Morden Ether', symbol: 'TETC', decimals: 18 },
    infoURL: 'https://ethereumclassic.org/development/testnets',
    shortName: 'tetc',
    chainId: 62,
    networkId: 2,
    slip44: 1
  },
  {
    name: 'Mordor Testnet',
    title: 'Ethereum Classic Mordor Testnet',
    status: 'active',
    chain: 'ETC',
    icon: 'ethereumclassictestnet',
    rpc: [
      'https://rpc.mordor.etccooperative.org',
      'https://geth-mordor.etc-network.info'
    ],
    features: [ { name: 'EIP155' } ],
    faucets: [
      'https://easy.hebeswap.com/#/faucet',
      'https://faucet.mordortest.net'
    ],
    nativeCurrency: { name: 'Mordor Ether', symbol: 'METC', decimals: 18 },
    infoURL: 'https://ethereumclassic.org/development/testnets',
    shortName: 'metc',
    chainId: 63,
    networkId: 7,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout-mordor',
        url: 'https://etc-mordor.blockscout.com',
        standard: 'EIP3091'
      },
      {
        name: 'etcnetworkinfo-expedition-mordor',
        url: 'https://explorer-expedition.etc-network.info/?network=Ethereum+Classic+at+etc-network.info+GETH+Mordor',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Ellaism',
    chain: 'ELLA',
    rpc: [ 'https://jsonrpc.ellaism.org' ],
    faucets: [],
    nativeCurrency: { name: 'Ellaism Ether', symbol: 'ELLA', decimals: 18 },
    infoURL: 'https://ellaism.org',
    shortName: 'ellaism',
    chainId: 64,
    networkId: 64,
    slip44: 163
  },
  {
    name: 'OKExChain Testnet',
    chain: 'okexchain',
    rpc: [ 'https://exchaintestrpc.okex.org' ],
    faucets: [ 'https://www.okex.com/drawdex' ],
    nativeCurrency: {
      name: 'OKExChain Global Utility Token in testnet',
      symbol: 'OKT',
      decimals: 18
    },
    infoURL: 'https://www.okex.com/okexchain',
    shortName: 'tokt',
    chainId: 65,
    networkId: 65,
    slip44: 1,
    explorers: [
      {
        name: 'OKLink',
        url: 'https://www.oklink.com/okexchain-test',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'OKXChain Mainnet',
    chain: 'okxchain',
    rpc: [
      'https://exchainrpc.okex.org',
      'https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff'
    ],
    faucets: [],
    nativeCurrency: {
      name: 'OKXChain Global Utility Token',
      symbol: 'OKT',
      decimals: 18
    },
    infoURL: 'https://www.okex.com/okc',
    shortName: 'okt',
    chainId: 66,
    networkId: 66,
    explorers: [
      {
        name: 'OKLink',
        url: 'https://www.oklink.com/en/okc',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DBChain Testnet',
    chain: 'DBM',
    rpc: [ 'http://test-rpc.dbmbp.com' ],
    faucets: [],
    nativeCurrency: { name: 'DBChain Testnet', symbol: 'DBM', decimals: 18 },
    infoURL: 'http://test.dbmbp.com',
    shortName: 'dbm',
    chainId: 67,
    networkId: 67,
    slip44: 1
  },
  {
    name: 'SoterOne Mainnet',
    chain: 'SOTER',
    rpc: [ 'https://rpc.soter.one' ],
    faucets: [],
    nativeCurrency: { name: 'SoterOne Mainnet Ether', symbol: 'SOTER', decimals: 18 },
    infoURL: 'https://www.soterone.com',
    shortName: 'SO1',
    chainId: 68,
    networkId: 68
  },
  {
    name: 'Optimism Kovan',
    title: 'Optimism Testnet Kovan',
    chain: 'ETH',
    rpc: [ 'https://kovan.optimism.io/' ],
    faucets: [ 'http://fauceth.komputing.org?chain=69&address=${ADDRESS}' ],
    nativeCurrency: { name: 'Kovan Ether', symbol: 'ETH', decimals: 18 },
    explorers: [
      {
        name: 'etherscan',
        url: 'https://kovan-optimistic.etherscan.io',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://optimism.io',
    shortName: 'okov',
    chainId: 69,
    networkId: 69,
    slip44: 1
  },
  {
    name: 'Hoo Smart Chain',
    chain: 'HSC',
    rpc: [
      'https://http-mainnet.hoosmartchain.com',
      'https://http-mainnet2.hoosmartchain.com',
      'wss://ws-mainnet.hoosmartchain.com',
      'wss://ws-mainnet2.hoosmartchain.com'
    ],
    faucets: [],
    nativeCurrency: {
      name: 'Hoo Smart Chain Native Token',
      symbol: 'HOO',
      decimals: 18
    },
    infoURL: 'https://www.hoosmartchain.com',
    shortName: 'hsc',
    chainId: 70,
    networkId: 70,
    slip44: 1170,
    explorers: [
      {
        name: 'hooscan',
        url: 'https://www.hooscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Conflux eSpace (Testnet)',
    chain: 'Conflux',
    rpc: [ 'https://evmtestnet.confluxrpc.com' ],
    faucets: [ 'https://faucet.confluxnetwork.org' ],
    nativeCurrency: { name: 'CFX', symbol: 'CFX', decimals: 18 },
    infoURL: 'https://confluxnetwork.org',
    shortName: 'cfxtest',
    chainId: 71,
    networkId: 71,
    icon: 'conflux',
    explorers: [
      {
        name: 'Conflux Scan',
        url: 'https://evmtestnet.confluxscan.net',
        standard: 'none'
      }
    ]
  },
  {
    name: 'DxChain Testnet',
    chain: 'DxChain',
    rpc: [ 'https://testnet-http.dxchain.com' ],
    faucets: [ 'https://faucet.dxscan.io' ],
    nativeCurrency: { name: 'DxChain Testnet', symbol: 'DX', decimals: 18 },
    infoURL: 'https://testnet.dxscan.io/',
    shortName: 'dxc',
    chainId: 72,
    networkId: 72,
    slip44: 1
  },
  {
    name: 'FNCY',
    chain: 'FNCY',
    rpc: [ 'https://fncy-seed1.fncy.world' ],
    faucets: [ 'https://faucet-testnet.fncy.world' ],
    nativeCurrency: { name: 'FNCY', symbol: 'FNCY', decimals: 18 },
    infoURL: 'https://fncyscan.fncy.world',
    shortName: 'FNCY',
    chainId: 73,
    networkId: 73,
    icon: 'fncy',
    explorers: [
      {
        name: 'fncy scan',
        url: 'https://fncyscan.fncy.world',
        icon: 'fncy',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'IDChain Mainnet',
    chain: 'IDChain',
    rpc: [ 'https://idchain.one/rpc/', 'wss://idchain.one/ws/' ],
    faucets: [],
    nativeCurrency: { name: 'EIDI', symbol: 'EIDI', decimals: 18 },
    infoURL: 'https://idchain.one/begin/',
    shortName: 'idchain',
    chainId: 74,
    networkId: 74,
    icon: 'idchain',
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.idchain.one',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Decimal Smart Chain Mainnet',
    chain: 'DSC',
    rpc: [
      'https://node.decimalchain.com/web3/',
      'https://node1-mainnet.decimalchain.com/web3/',
      'https://node2-mainnet.decimalchain.com/web3/',
      'https://node3-mainnet.decimalchain.com/web3/',
      'https://node4-mainnet.decimalchain.com/web3/'
    ],
    faucets: [],
    nativeCurrency: { name: 'Decimal', symbol: 'DEL', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://decimalchain.com',
    shortName: 'DSC',
    chainId: 75,
    networkId: 75,
    icon: 'dsc',
    explorers: [
      {
        name: 'DSC Explorer Mainnet',
        url: 'https://explorer.decimalchain.com',
        icon: 'dsc',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Mix',
    chain: 'MIX',
    rpc: [ 'https://rpc2.mix-blockchain.org:8647' ],
    faucets: [],
    nativeCurrency: { name: 'Mix Ether', symbol: 'MIX', decimals: 18 },
    infoURL: 'https://mix-blockchain.org',
    shortName: 'mix',
    chainId: 76,
    networkId: 76,
    slip44: 76
  },
  {
    name: 'POA Network Sokol',
    chain: 'POA',
    rpc: [
      'https://sokol.poa.network',
      'wss://sokol.poa.network/wss',
      'ws://sokol.poa.network:8546'
    ],
    faucets: [],
    nativeCurrency: { name: 'POA Sokol Ether', symbol: 'SPOA', decimals: 18 },
    infoURL: 'https://poa.network',
    shortName: 'spoa',
    chainId: 77,
    networkId: 77,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.com/poa/sokol',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PrimusChain mainnet',
    chain: 'PC',
    rpc: [ 'https://ethnode.primusmoney.com/mainnet' ],
    faucets: [],
    nativeCurrency: { name: 'Primus Ether', symbol: 'PETH', decimals: 18 },
    infoURL: 'https://primusmoney.com',
    shortName: 'primuschain',
    chainId: 78,
    networkId: 78
  },
  {
    name: 'Zenith Mainnet',
    chain: 'Zenith',
    rpc: [
      'https://dataserver-us-1.zenithchain.co/',
      'https://dataserver-asia-3.zenithchain.co/',
      'https://dataserver-asia-4.zenithchain.co/',
      'https://dataserver-asia-2.zenithchain.co/',
      'https://dataserver-asia-5.zenithchain.co/',
      'https://dataserver-asia-6.zenithchain.co/',
      'https://dataserver-asia-7.zenithchain.co/'
    ],
    faucets: [],
    nativeCurrency: { name: 'ZENITH', symbol: 'ZENITH', decimals: 18 },
    infoURL: 'https://www.zenithchain.co/',
    chainId: 79,
    networkId: 79,
    shortName: 'zenith',
    explorers: [
      {
        name: 'zenith scan',
        url: 'https://scan.zenithchain.co',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'GeneChain',
    chain: 'GeneChain',
    rpc: [ 'https://rpc.genechain.io' ],
    faucets: [],
    nativeCurrency: { name: 'RNA', symbol: 'RNA', decimals: 18 },
    infoURL: 'https://scan.genechain.io/',
    shortName: 'GeneChain',
    chainId: 80,
    networkId: 80,
    explorers: [
      {
        name: 'GeneChain Scan',
        url: 'https://scan.genechain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Japan Open Chain Mainnet',
    chain: 'JOC',
    rpc: [
      'https://rpc-1.japanopenchain.org:8545',
      'https://rpc-2.japanopenchain.org:8545'
    ],
    faucets: [],
    nativeCurrency: { name: 'Japan Open Chain Token', symbol: 'JOC', decimals: 18 },
    infoURL: 'https://www.japanopenchain.org/',
    shortName: 'joc',
    chainId: 81,
    networkId: 81,
    icon: 'joc',
    explorers: [
      {
        name: 'Block Explorer',
        url: 'https://explorer.japanopenchain.org',
        standard: 'EIP3091',
        icon: 'joc'
      }
    ],
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'Meter Mainnet',
    chain: 'METER',
    rpc: [ 'https://rpc.meter.io' ],
    faucets: [ 'https://faucet.meter.io' ],
    nativeCurrency: { name: 'Meter', symbol: 'MTR', decimals: 18 },
    infoURL: 'https://www.meter.io',
    shortName: 'Meter',
    chainId: 82,
    networkId: 82,
    explorers: [
      {
        name: 'Meter Mainnet Scan',
        url: 'https://scan.meter.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Meter Testnet',
    chain: 'METER Testnet',
    rpc: [ 'https://rpctest.meter.io' ],
    faucets: [ 'https://faucet-warringstakes.meter.io' ],
    nativeCurrency: { name: 'Meter', symbol: 'MTR', decimals: 18 },
    infoURL: 'https://www.meter.io',
    shortName: 'MeterTest',
    chainId: 83,
    networkId: 83,
    slip44: 1,
    explorers: [
      {
        name: 'Meter Testnet Scan',
        url: 'https://scan-warringstakes.meter.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Linqto Devnet',
    chain: 'LNQ',
    rpc: [ 'https://linqto-dev.com' ],
    faucets: [],
    nativeCurrency: { name: 'XRP', symbol: 'XRP', decimals: 18 },
    infoURL: 'https://linqto.com',
    shortName: 'linqto-devnet',
    chainId: 84,
    networkId: 84,
    explorers: [
      {
        name: 'Linqto Devnet Explorer',
        url: 'https://explorer.linqto-dev.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'GateChain Testnet',
    chainId: 85,
    shortName: 'gttest',
    chain: 'GTTEST',
    networkId: 85,
    slip44: 1,
    nativeCurrency: { name: 'GateToken', symbol: 'GT', decimals: 18 },
    rpc: [ 'https://testnet.gatenode.cc' ],
    faucets: [ 'https://www.gatescan.org/testnet/faucet' ],
    explorers: [
      {
        name: 'GateScan',
        url: 'https://www.gatescan.org/testnet',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://www.gatechain.io'
  },
  {
    name: 'GateChain Mainnet',
    chainId: 86,
    shortName: 'gt',
    chain: 'GT',
    networkId: 86,
    nativeCurrency: { name: 'GateToken', symbol: 'GT', decimals: 18 },
    rpc: [ 'https://evm.gatenode.cc' ],
    faucets: [ 'https://www.gatescan.org/faucet' ],
    explorers: [
      {
        name: 'GateScan',
        url: 'https://www.gatescan.org',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://www.gatechain.io'
  },
  {
    name: 'Nova Network',
    chain: 'NNW',
    icon: 'novanetwork',
    rpc: [
      'https://connect.novanetwork.io',
      'https://0x57.redjackstudio.com',
      'https://rpc.novanetwork.io:9070'
    ],
    faucets: [],
    nativeCurrency: { name: 'Supernova', symbol: 'SNT', decimals: 18 },
    infoURL: 'https://novanetwork.io',
    shortName: 'nnw',
    chainId: 87,
    networkId: 87,
    explorers: [
      {
        name: 'novanetwork',
        url: 'https://explorer.novanetwork.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Viction',
    chain: 'Viction',
    rpc: [ 'https://rpc.viction.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Viction', symbol: 'VIC', decimals: 18 },
    infoURL: 'https://viction.xyz',
    shortName: 'vic',
    chainId: 88,
    networkId: 88,
    slip44: 889
  },
  {
    name: 'Viction Testnet',
    chain: 'Viction',
    rpc: [ 'https://rpc-testnet.viction.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Viction', symbol: 'VIC', decimals: 18 },
    infoURL: 'https://viction.xyz',
    shortName: 'vict',
    chainId: 89,
    networkId: 89,
    slip44: 1
  },
  {
    name: 'Garizon Stage0',
    chain: 'GAR',
    icon: 'garizon',
    rpc: [ 'https://s0.garizon.net/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Garizon', symbol: 'GAR', decimals: 18 },
    infoURL: 'https://garizon.com',
    shortName: 'gar-s0',
    chainId: 90,
    networkId: 90,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.garizon.com',
        icon: 'garizon',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Garizon Stage1',
    chain: 'GAR',
    icon: 'garizon',
    rpc: [ 'https://s1.garizon.net/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Garizon', symbol: 'GAR', decimals: 18 },
    infoURL: 'https://garizon.com',
    shortName: 'gar-s1',
    chainId: 91,
    networkId: 91,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.garizon.com',
        icon: 'garizon',
        standard: 'EIP3091'
      }
    ],
    parent: { chain: 'eip155-90', type: 'shard' }
  },
  {
    name: 'Garizon Stage2',
    chain: 'GAR',
    icon: 'garizon',
    rpc: [ 'https://s2.garizon.net/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Garizon', symbol: 'GAR', decimals: 18 },
    infoURL: 'https://garizon.com',
    shortName: 'gar-s2',
    chainId: 92,
    networkId: 92,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.garizon.com',
        icon: 'garizon',
        standard: 'EIP3091'
      }
    ],
    parent: { chain: 'eip155-90', type: 'shard' }
  },
  {
    name: 'Garizon Stage3',
    chain: 'GAR',
    icon: 'garizon',
    rpc: [ 'https://s3.garizon.net/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Garizon', symbol: 'GAR', decimals: 18 },
    infoURL: 'https://garizon.com',
    shortName: 'gar-s3',
    chainId: 93,
    networkId: 93,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.garizon.com',
        icon: 'garizon',
        standard: 'EIP3091'
      }
    ],
    parent: { chain: 'eip155-90', type: 'shard' }
  },
  {
    name: 'SwissDLT',
    chain: 'SDLT',
    rpc: [ 'https://rpc.swissdlt.ch' ],
    faucets: [],
    nativeCurrency: { name: 'BCTS', symbol: 'BCTS', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://bcts.ch',
    shortName: 'sdlt',
    chainId: 94,
    networkId: 94,
    icon: 'bcts',
    explorers: [
      {
        name: 'SwissDLT Explorer',
        url: 'https://explorer.swissdlt.ch',
        icon: 'bcts',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CamDL Mainnet',
    chain: 'CADL',
    rpc: [ 'https://rpc1.camdl.gov.kh/' ],
    faucets: [ 'https://faucet.camdl.gov.kh/' ],
    nativeCurrency: { name: 'CADL', symbol: 'CADL', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://camdl.gov.kh/',
    shortName: 'camdl',
    chainId: 95,
    networkId: 95,
    redFlags: [ 'reusedChainId' ],
    icon: 'camdl',
    explorers: [
      {
        name: 'CamDL Block Explorer',
        url: 'https://explorer.camdl.gov.kh',
        standard: 'EIP3091'
      }
    ],
    status: 'active'
  },
  {
    name: 'Bitkub Chain',
    chain: 'BKC',
    icon: 'bkc',
    rpc: [ 'https://rpc.bitkubchain.io', 'wss://wss.bitkubchain.io' ],
    faucets: [],
    nativeCurrency: { name: 'Bitkub Coin', symbol: 'KUB', decimals: 18 },
    infoURL: 'https://www.bitkubchain.com/',
    shortName: 'bkc',
    chainId: 96,
    networkId: 96,
    explorers: [
      {
        name: 'Bitkub Chain Explorer',
        url: 'https://bkcscan.com',
        standard: 'none',
        icon: 'bkc'
      }
    ],
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'BNB Smart Chain Testnet',
    chain: 'BSC',
    rpc: [
      'https://data-seed-prebsc-1-s1.bnbchain.org:8545',
      'https://data-seed-prebsc-2-s1.bnbchain.org:8545',
      'https://data-seed-prebsc-1-s2.bnbchain.org:8545',
      'https://data-seed-prebsc-2-s2.bnbchain.org:8545',
      'https://data-seed-prebsc-1-s3.bnbchain.org:8545',
      'https://data-seed-prebsc-2-s3.bnbchain.org:8545',
      'https://bsc-testnet-rpc.publicnode.com',
      'wss://bsc-testnet-rpc.publicnode.com'
    ],
    faucets: [ 'https://testnet.bnbchain.org/faucet-smart' ],
    nativeCurrency: { name: 'BNB Chain Native Token', symbol: 'tBNB', decimals: 18 },
    infoURL: 'https://www.bnbchain.org/en',
    shortName: 'bnbt',
    chainId: 97,
    networkId: 97,
    slip44: 1,
    explorers: [
      {
        name: 'bscscan-testnet',
        url: 'https://testnet.bscscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Six Protocol',
    chain: 'SIXNET',
    icon: 'six',
    rpc: [ 'https://sixnet-rpc-evm.sixprotocol.net' ],
    faucets: [],
    nativeCurrency: { name: 'SIX evm token', symbol: 'SIX', decimals: 18 },
    infoURL: 'https://six.network/',
    shortName: 'six',
    chainId: 98,
    networkId: 98,
    explorers: [
      {
        name: 'SIX Scan',
        url: 'https://sixscan.io/sixnet',
        standard: 'none',
        icon: 'six'
      }
    ]
  },
  {
    name: 'POA Network Core',
    chain: 'POA',
    rpc: [ 'https://core.poa.network' ],
    faucets: [],
    nativeCurrency: { name: 'POA Network Core Ether', symbol: 'POA', decimals: 18 },
    infoURL: 'https://poa.network',
    shortName: 'poa',
    chainId: 99,
    networkId: 99,
    slip44: 178,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.com/poa/core',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Gnosis',
    chain: 'GNO',
    icon: 'gnosis',
    rpc: [
      'https://rpc.gnosischain.com',
      'https://rpc.gnosis.gateway.fm',
      'https://rpc.ankr.com/gnosis',
      'https://gnosischain-rpc.gateway.pokt.network',
      'https://gnosis-mainnet.public.blastapi.io',
      'https://gnosis.api.onfinality.io/public',
      'https://gnosis.blockpi.network/v1/rpc/public',
      'https://web3endpoints.com/gnosischain-mainnet',
      'https://gnosis.oat.farm',
      'wss://rpc.gnosischain.com/wss',
      'https://gnosis-rpc.publicnode.com',
      'wss://gnosis-rpc.publicnode.com'
    ],
    faucets: [
      'https://gnosisfaucet.com',
      'https://stakely.io/faucet/gnosis-chain-xdai',
      'https://faucet.prussia.dev/xdai'
    ],
    nativeCurrency: { name: 'xDAI', symbol: 'XDAI', decimals: 18 },
    infoURL: 'https://docs.gnosischain.com',
    shortName: 'gno',
    chainId: 100,
    networkId: 100,
    slip44: 700,
    explorers: [
      {
        name: 'gnosisscan',
        url: 'https://gnosisscan.io',
        standard: 'EIP3091'
      },
      {
        name: 'blockscout',
        url: 'https://gnosis.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      },
      {
        name: 'dexguru',
        url: 'https://gnosis.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'EtherInc',
    chain: 'ETI',
    rpc: [ 'https://api.einc.io/jsonrpc/mainnet' ],
    faucets: [],
    nativeCurrency: { name: 'EtherInc Ether', symbol: 'ETI', decimals: 18 },
    infoURL: 'https://einc.io',
    shortName: 'eti',
    chainId: 101,
    networkId: 1,
    slip44: 464
  },
  {
    name: 'Web3Games Testnet',
    chain: 'Web3Games',
    icon: 'web3games',
    rpc: [
      'https://testnet-rpc-0.web3games.org/evm',
      'https://testnet-rpc-1.web3games.org/evm',
      'https://testnet-rpc-2.web3games.org/evm'
    ],
    faucets: [],
    nativeCurrency: { name: 'Web3Games', symbol: 'W3G', decimals: 18 },
    infoURL: 'https://web3games.org/',
    shortName: 'tw3g',
    chainId: 102,
    networkId: 102,
    slip44: 1
  },
  {
    name: 'Worldland Mainnet',
    chain: 'Worldland',
    icon: 'worldland',
    rpc: [ 'https://seoul.worldland.foundation' ],
    faucets: [],
    nativeCurrency: { name: 'Worldland', symbol: 'WLC', decimals: 18 },
    infoURL: 'https://worldland.foundation',
    shortName: 'WLC',
    chainId: 103,
    networkId: 103,
    explorers: [
      {
        name: 'Worldland Explorer',
        url: 'https://scan.worldland.foundation',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Kaiba Lightning Chain Testnet',
    chain: 'tKLC',
    rpc: [ 'https://klc.live/' ],
    faucets: [],
    nativeCurrency: { name: 'Kaiba Testnet Token', symbol: 'tKAIBA', decimals: 18 },
    infoURL: 'https://kaibadefi.com',
    shortName: 'tklc',
    chainId: 104,
    networkId: 104,
    slip44: 1,
    icon: 'kaiba',
    explorers: [
      {
        name: 'kaibascan',
        url: 'https://kaibascan.io',
        icon: 'kaibascan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Web3Games Devnet',
    chain: 'Web3Games',
    icon: 'web3games',
    rpc: [ 'https://devnet.web3games.org/evm' ],
    faucets: [],
    nativeCurrency: { name: 'Web3Games', symbol: 'W3G', decimals: 18 },
    infoURL: 'https://web3games.org/',
    shortName: 'dw3g',
    chainId: 105,
    networkId: 105,
    explorers: [
      {
        name: 'Web3Games Explorer',
        url: 'https://explorer-devnet.web3games.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Velas EVM Mainnet',
    chain: 'Velas',
    icon: 'velas',
    rpc: [
      'https://evmexplorer.velas.com/rpc',
      'https://explorer.velas.com/rpc'
    ],
    faucets: [],
    nativeCurrency: { name: 'Velas', symbol: 'VLX', decimals: 18 },
    infoURL: 'https://velas.com',
    shortName: 'vlx',
    chainId: 106,
    networkId: 106,
    explorers: [
      {
        name: 'Velas Explorer',
        url: 'https://evmexplorer.velas.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Nebula Testnet',
    chain: 'NTN',
    icon: 'nebulatestnet',
    rpc: [ 'https://testnet.rpc.novanetwork.io' ],
    faucets: [ 'https://faucet.novanetwork.io' ],
    nativeCurrency: { name: 'Nebula X', symbol: 'NBX', decimals: 18 },
    infoURL: 'https://novanetwork.io',
    shortName: 'ntn',
    chainId: 107,
    networkId: 107,
    slip44: 1,
    explorers: [
      {
        name: 'nebulatestnet',
        url: 'https://explorer.novanetwork.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ThunderCore Mainnet',
    chain: 'TT',
    rpc: [
      'https://mainnet-rpc.thundercore.com',
      'https://mainnet-rpc.thundertoken.net',
      'https://mainnet-rpc.thundercore.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'ThunderCore Token', symbol: 'TT', decimals: 18 },
    infoURL: 'https://thundercore.com',
    shortName: 'TT',
    chainId: 108,
    networkId: 108,
    slip44: 1001,
    explorers: [
      {
        name: 'thundercore-viewblock',
        url: 'https://viewblock.io/thundercore',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Shibarium',
    chain: 'Shibarium',
    icon: 'shibarium',
    rpc: [ 'https://www.shibrpc.com' ],
    faucets: [],
    nativeCurrency: { name: 'BONE Shibarium', symbol: 'BONE', decimals: 18 },
    infoURL: 'https://shibariumecosystem.com',
    shortName: 'shibariumecosystem',
    chainId: 109,
    networkId: 109,
    explorers: [
      {
        name: 'shibariumscan',
        url: 'https://www.shibariumscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Proton Testnet',
    chain: 'XPR',
    rpc: [ 'https://protontestnet.greymass.com/' ],
    faucets: [],
    nativeCurrency: { name: 'Proton', symbol: 'XPR', decimals: 4 },
    infoURL: 'https://protonchain.com',
    shortName: 'xpr',
    chainId: 110,
    networkId: 110,
    slip44: 1
  },
  {
    name: 'EtherLite Chain',
    chain: 'ETL',
    rpc: [ 'https://rpc.etherlite.org' ],
    faucets: [ 'https://etherlite.org/faucets' ],
    nativeCurrency: { name: 'EtherLite', symbol: 'ETL', decimals: 18 },
    infoURL: 'https://etherlite.org',
    shortName: 'ETL',
    chainId: 111,
    networkId: 111,
    icon: 'etherlite'
  },
  {
    name: 'Coinbit Mainnet',
    chain: 'Coinbit',
    rpc: [ 'https://coinbit-rpc-mainnet.chain.sbcrypto.app' ],
    faucets: [],
    nativeCurrency: { name: 'Gas IDR', symbol: 'GIDR', decimals: 18 },
    infoURL: 'https://crypto.stockbit.com/',
    shortName: 'coinbit',
    chainId: 112,
    networkId: 112,
    icon: 'coinbit',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://coinbit-explorer.chain.sbcrypto.app',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Dehvo',
    chain: 'Dehvo',
    rpc: [
      'https://connect.dehvo.com',
      'https://rpc.dehvo.com',
      'https://rpc1.dehvo.com',
      'https://rpc2.dehvo.com'
    ],
    faucets: [ 'https://buy.dehvo.com' ],
    nativeCurrency: { name: 'Dehvo', symbol: 'Deh', decimals: 18 },
    infoURL: 'https://dehvo.com',
    shortName: 'deh',
    chainId: 113,
    networkId: 113,
    slip44: 714,
    explorers: [
      {
        name: 'Dehvo Explorer',
        url: 'https://explorer.dehvo.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Flare Testnet Coston2',
    chain: 'FLR',
    icon: 'coston2',
    rpc: [
      'https://coston2-api.flare.network/ext/C/rpc',
      'https://flare-testnet-coston2.rpc.thirdweb.com',
      'https://flaretestnet-bundler.etherspot.io',
      'https://01-gravelines-005-01.rpc.tatum.io/ext/bc/C/rpc',
      'https://02-chicago-005-02.rpc.tatum.io/ext/bc/C/rpc',
      'https://02-tokyo-005-03.rpc.tatum.io/ext/bc/C/rpc',
      'https://coston2.enosys.global/ext/C/rpc'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [ 'https://faucet.flare.network' ],
    nativeCurrency: { name: 'Coston2 Flare', symbol: 'C2FLR', decimals: 18 },
    infoURL: 'https://flare.network',
    shortName: 'c2flr',
    chainId: 114,
    networkId: 114,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://coston2-explorer.flare.network',
        standard: 'EIP3091'
      },
      {
        name: 'flarescan',
        url: 'https://coston2.testnet.flarescan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DeBank Testnet(Deprecated)',
    chain: 'DeBank',
    rpc: [],
    faucets: [],
    icon: 'debank',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    status: 'deprecated',
    infoURL: 'https://debank.com',
    shortName: 'debank-testnet',
    chainId: 115,
    networkId: 115,
    slip44: 1,
    explorers: []
  },
  {
    name: 'DeBank Mainnet',
    chain: 'DeBank',
    rpc: [],
    faucets: [],
    icon: 'debank',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    status: 'deprecated',
    infoURL: 'https://debank.com',
    shortName: 'debank-mainnet',
    chainId: 116,
    networkId: 116,
    explorers: []
  },
  {
    name: 'Uptick Mainnet',
    chain: 'Uptick',
    rpc: [ 'https://json-rpc.uptick.network' ],
    faucets: [],
    nativeCurrency: { name: 'Uptick', symbol: 'UPTICK', decimals: 18 },
    infoURL: 'https://www.uptick.network',
    shortName: 'auptick',
    chainId: 117,
    networkId: 117,
    icon: 'uptick',
    explorers: [
      {
        name: 'Uptick Explorer',
        url: 'https://evm-explorer.uptick.network',
        icon: 'uptick',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Arcology Testnet',
    chain: 'Arcology',
    icon: 'acolicon',
    rpc: [ 'https://testnet.arcology.network/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Arcology Coin', symbol: 'Acol', decimals: 18 },
    infoURL: 'https://arcology.network/',
    shortName: 'arcology',
    chainId: 118,
    networkId: 118,
    slip44: 1,
    explorers: [
      {
        name: 'arcology',
        url: 'https://testnet.arcology.network/explorer',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ENULS Mainnet',
    chain: 'ENULS',
    rpc: [ 'https://evmapi.nuls.io', 'https://evmapi2.nuls.io' ],
    faucets: [],
    nativeCurrency: { name: 'NULS', symbol: 'NULS', decimals: 18 },
    infoURL: 'https://nuls.io',
    shortName: 'enuls',
    chainId: 119,
    networkId: 119,
    icon: 'enuls',
    explorers: [
      {
        name: 'enulsscan',
        url: 'https://evmscan.nuls.io',
        icon: 'enuls',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ENULS Testnet',
    chain: 'ENULS',
    rpc: [ 'https://beta.evmapi.nuls.io', 'https://beta.evmapi2.nuls.io' ],
    faucets: [ 'http://faucet.nuls.io' ],
    nativeCurrency: { name: 'NULS', symbol: 'NULS', decimals: 18 },
    infoURL: 'https://nuls.io',
    shortName: 'enulst',
    chainId: 120,
    networkId: 120,
    slip44: 1,
    icon: 'enuls',
    explorers: [
      {
        name: 'enulsscan',
        url: 'https://beta.evmscan.nuls.io',
        icon: 'enuls',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Realchain Mainnet',
    chain: 'REAL',
    rpc: [
      'https://rcl-dataseed1.rclsidechain.com',
      'https://rcl-dataseed2.rclsidechain.com',
      'https://rcl-dataseed3.rclsidechain.com',
      'https://rcl-dataseed4.rclsidechain.com',
      'wss://rcl-dataseed1.rclsidechain.com/v1/',
      'wss://rcl-dataseed2.rclsidechain.com/v1/',
      'wss://rcl-dataseed3.rclsidechain.com/v1/',
      'wss://rcl-dataseed4.rclsidechain.com/v1/'
    ],
    faucets: [],
    nativeCurrency: { name: 'Realchain', symbol: 'REAL', decimals: 18 },
    infoURL: 'https://www.rclsidechain.com/',
    shortName: 'REAL',
    chainId: 121,
    networkId: 121,
    slip44: 714,
    explorers: [
      {
        name: 'realscan',
        url: 'https://rclscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Fuse Mainnet',
    chain: 'FUSE',
    rpc: [
      'https://rpc.fuse.io',
      'https://fuse.drpc.org',
      'wss://fuse.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Fuse', symbol: 'FUSE', decimals: 18 },
    infoURL: 'https://fuse.io/',
    shortName: 'fuse',
    chainId: 122,
    networkId: 122,
    icon: 'fuse',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.fuse.io',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Fuse Sparknet',
    chain: 'fuse',
    rpc: [ 'https://rpc.fusespark.io' ],
    faucets: [ 'https://get.fusespark.io' ],
    nativeCurrency: { name: 'Spark', symbol: 'SPARK', decimals: 18 },
    infoURL: 'https://docs.fuse.io/general/fuse-network-blockchain/fuse-testnet',
    shortName: 'spark',
    chainId: 123,
    networkId: 123
  },
  {
    name: 'Decentralized Web Mainnet',
    shortName: 'dwu',
    chain: 'DWU',
    chainId: 124,
    networkId: 124,
    rpc: [ 'https://decentralized-web.tech/dw_rpc.php' ],
    faucets: [],
    infoURL: 'https://decentralized-web.tech/dw_chain.php',
    nativeCurrency: { name: 'Decentralized Web Utility', symbol: 'DWU', decimals: 18 }
  },
  {
    name: 'OYchain Testnet',
    chain: 'OYchain',
    rpc: [ 'https://rpc.testnet.oychain.io' ],
    faucets: [ 'https://faucet.oychain.io' ],
    nativeCurrency: { name: 'OYchain Token', symbol: 'OY', decimals: 18 },
    infoURL: 'https://www.oychain.io',
    shortName: 'OYchainTestnet',
    chainId: 125,
    networkId: 125,
    slip44: 1,
    explorers: [
      {
        name: 'OYchain Testnet Explorer',
        url: 'https://explorer.testnet.oychain.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'OYchain Mainnet',
    chain: 'OYchain',
    icon: 'oychain',
    rpc: [ 'https://rpc.mainnet.oychain.io' ],
    faucets: [],
    nativeCurrency: { name: 'OYchain Token', symbol: 'OY', decimals: 18 },
    infoURL: 'https://www.oychain.io',
    shortName: 'OYchainMainnet',
    chainId: 126,
    networkId: 126,
    slip44: 126,
    explorers: [
      {
        name: 'OYchain Mainnet Explorer',
        url: 'https://explorer.oychain.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Factory 127 Mainnet',
    chain: 'FETH',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Factory 127 Token', symbol: 'FETH', decimals: 18 },
    infoURL: 'https://www.factory127.com',
    shortName: 'feth',
    chainId: 127,
    networkId: 127,
    slip44: 127
  },
  {
    name: 'Huobi ECO Chain Mainnet',
    chain: 'Heco',
    rpc: [
      'https://http-mainnet.hecochain.com',
      'wss://ws-mainnet.hecochain.com'
    ],
    faucets: [],
    nativeCurrency: {
      name: 'Huobi ECO Chain Native Token',
      symbol: 'HT',
      decimals: 18
    },
    infoURL: 'https://www.hecochain.com',
    shortName: 'heco',
    chainId: 128,
    networkId: 128,
    slip44: 1010,
    explorers: [
      {
        name: 'hecoinfo',
        url: 'https://hecoinfo.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Innovator Chain',
    chain: 'INNOVATOR',
    rpc: [ 'https://rpc.innovatorchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'INOV8', symbol: 'INOV8', decimals: 18 },
    features: [],
    infoURL: 'https://innovatorchain.com',
    shortName: 'Innovator',
    chainId: 129,
    networkId: 129,
    icon: 'innovator',
    explorers: [
      {
        name: 'Innovator Explorer',
        url: 'https://evm.innovatorchain.com',
        icon: 'blockscout',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Engram Testnet',
    chain: 'tGRAM',
    icon: 'engram',
    rpc: [
      'https://tokioswift.engram.tech',
      'https://tokio-archive.engram.tech'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Engram Tokio Testnet', symbol: 'tGRAM', decimals: 18 },
    infoURL: 'https://engramnet.io',
    shortName: 'tgram',
    chainId: 131,
    networkId: 131,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://tokioscan-v2.engram.tech',
        icon: 'engram',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'iExec Sidechain',
    chain: 'Bellecour',
    icon: 'rlc',
    rpc: [ 'https://bellecour.iex.ec' ],
    faucets: [],
    nativeCurrency: { name: 'xRLC', symbol: 'xRLC', decimals: 18 },
    infoURL: 'https://iex.ec',
    shortName: 'rlc',
    chainId: 134,
    networkId: 134,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.bellecour.iex.ec',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Alyx Chain Testnet',
    chain: 'Alyx Chain Testnet',
    rpc: [ 'https://testnet-rpc.alyxchain.com' ],
    faucets: [ 'https://faucet.alyxchain.com' ],
    nativeCurrency: { name: 'Alyx Testnet Native Token', symbol: 'ALYX', decimals: 18 },
    infoURL: 'https://www.alyxchain.com',
    shortName: 'AlyxTestnet',
    chainId: 135,
    networkId: 135,
    slip44: 1,
    explorers: [
      {
        name: 'alyx testnet scan',
        url: 'https://testnet.alyxscan.com',
        standard: 'EIP3091'
      }
    ],
    icon: 'alyx'
  },
  {
    name: 'Deamchain Mainnet',
    chain: 'Deamchain',
    icon: 'deam',
    rpc: [ 'https://mainnet.deamchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Deamchain Native Token', symbol: 'DEAM', decimals: 18 },
    infoURL: 'https://deamchain.com',
    shortName: 'deam',
    chainId: 136,
    networkId: 136,
    explorers: [
      {
        name: 'Deamchain Block Explorer',
        url: 'https://scan.deamchain.com',
        standard: 'EIP3091',
        icon: 'deam'
      }
    ]
  },
  {
    name: 'Polygon Mainnet',
    chain: 'Polygon',
    icon: 'polygon',
    rpc: [
      'https://polygon-rpc.com/',
      'https://rpc-mainnet.matic.network',
      'https://matic-mainnet.chainstacklabs.com',
      'https://rpc-mainnet.maticvigil.com',
      'https://rpc-mainnet.matic.quiknode.pro',
      'https://matic-mainnet-full-rpc.bwarelabs.com',
      'https://polygon-bor-rpc.publicnode.com',
      'wss://polygon-bor-rpc.publicnode.com',
      'https://polygon.gateway.tenderly.co',
      'wss://polygon.gateway.tenderly.co',
      'https://polygon.drpc.org',
      'wss://polygon.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    infoURL: 'https://polygon.technology/',
    shortName: 'matic',
    chainId: 137,
    networkId: 137,
    slip44: 966,
    explorers: [
      {
        name: 'polygonscan',
        url: 'https://polygonscan.com',
        standard: 'EIP3091'
      },
      {
        name: 'dexguru',
        url: 'https://polygon.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Defi Oracle Meta Mainnet',
    chain: 'dfiometa',
    icon: 'defioraclemeta',
    rpc: [ 'https://rpc.defi-oracle.io', 'wss://wss.defi-oracle.io' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://info.defi-oracle.io/',
    shortName: 'dfio-meta-main',
    chainId: 138,
    networkId: 1,
    slip44: 60,
    ens: { registry: '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85' },
    explorers: [
      {
        name: 'Blockscout Explorer',
        url: 'https://blockscout.defi-oracle.io',
        standard: 'none'
      },
      {
        name: 'Quorum Explorer',
        url: 'https://explorer.defi-oracle.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'WoopChain Mainnet',
    chain: 'WOOP',
    icon: 'woopchain',
    rpc: [ 'https://rpc.woop.ai/rpc' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'WoopCoin', symbol: 'WOOC', decimals: 18 },
    infoURL: 'https://wikiwoop.com',
    shortName: 'woop',
    chainId: 139,
    networkId: 139,
    explorers: [
      {
        name: 'wikiwoop',
        url: 'https://explorer.wikiwoop.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Openpiece Testnet',
    chain: 'OPENPIECE',
    icon: 'openpiece',
    rpc: [ 'https://testnet.openpiece.io' ],
    faucets: [],
    nativeCurrency: { name: 'Belly', symbol: 'BELLY', decimals: 18 },
    infoURL: 'https://cryptopiece.online',
    shortName: 'OPtest',
    chainId: 141,
    networkId: 141,
    slip44: 1,
    explorers: [
      {
        name: 'Belly Scan',
        url: 'https://testnet.bellyscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'DAX CHAIN',
    chain: 'DAX',
    rpc: [ 'https://rpc.prodax.io' ],
    faucets: [],
    nativeCurrency: { name: 'Prodax', symbol: 'DAX', decimals: 18 },
    infoURL: 'https://prodax.io/',
    shortName: 'dax',
    chainId: 142,
    networkId: 142
  },
  {
    name: 'PHI Network v2',
    chain: 'PHI',
    rpc: [ 'https://connect.phi.network' ],
    faucets: [],
    nativeCurrency: { name: 'PHI', symbol: 'Φ', decimals: 18 },
    infoURL: 'https://phi.network',
    shortName: 'PHI',
    chainId: 144,
    networkId: 144,
    icon: 'phi',
    explorers: [
      {
        name: 'Phiscan',
        url: 'https://phiscan.com',
        icon: 'phi',
        standard: 'none'
      }
    ]
  },
  {
    name: 'SoraAI Testnet',
    chain: 'SETH',
    icon: 'ethereum',
    rpc: [ 'https://rpc-testnet.soraai.bot' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'SoraETH', symbol: 'SETH', decimals: 18 },
    infoURL: 'https://soraai.bot',
    shortName: 'SETH',
    chainId: 145,
    networkId: 145,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.soraai.bot',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.soraai.bot' } ]
    }
  },
  {
    name: 'ShimmerEVM',
    title: 'ShimmerEVM',
    chain: 'ShimmerEVM',
    rpc: [ 'https://json-rpc.evm.shimmer.network' ],
    faucets: [],
    nativeCurrency: { name: 'SMR', symbol: 'SMR', decimals: 18 },
    infoURL: 'https://shimmer.network',
    shortName: 'shimmerevm',
    chainId: 148,
    networkId: 148,
    icon: 'shimmerevm',
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.evm.shimmer.network',
        icon: 'shimmerevm',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Six Protocol Testnet',
    chain: 'FIVENET',
    icon: 'six',
    rpc: [ 'https://rpc-evm.fivenet.sixprotocol.net' ],
    faucets: [ 'https://faucet.sixprotocol.net' ],
    nativeCurrency: { name: 'SIX testnet evm token', symbol: 'tSIX', decimals: 18 },
    infoURL: 'https://six.network/',
    shortName: 'sixt',
    chainId: 150,
    networkId: 150,
    explorers: [
      {
        name: 'SIX Scan fivenet',
        url: 'https://sixscan.io/fivenet',
        standard: 'none',
        icon: 'six'
      }
    ]
  },
  {
    name: 'Redbelly Network Mainnet',
    shortName: 'rbn',
    chain: 'RBN',
    chainId: 151,
    networkId: 151,
    rpc: [],
    faucets: [],
    infoURL: 'https://redbelly.network',
    nativeCurrency: { name: 'Redbelly Network Coin', symbol: 'RBNT', decimals: 18 },
    status: 'incubating'
  },
  {
    name: 'Redbelly Network Devnet',
    shortName: 'rbn-devnet',
    chain: 'RBN',
    chainId: 152,
    networkId: 152,
    rpc: [],
    faucets: [],
    infoURL: 'https://redbelly.network',
    nativeCurrency: { name: 'Redbelly Network Coin', symbol: 'RBNT', decimals: 18 },
    status: 'incubating'
  },
  {
    name: 'Redbelly Network Testnet',
    shortName: 'rbn-testnet',
    chain: 'RBN',
    chainId: 153,
    networkId: 153,
    slip44: 1,
    rpc: [],
    faucets: [],
    infoURL: 'https://redbelly.network',
    nativeCurrency: { name: 'Redbelly Network Coin', symbol: 'RBNT', decimals: 18 },
    status: 'incubating'
  },
  {
    name: 'Redbelly Network TGE',
    shortName: 'rbn-tge',
    chain: 'RBN',
    chainId: 154,
    networkId: 154,
    rpc: [],
    faucets: [],
    infoURL: 'https://redbelly.network',
    nativeCurrency: { name: 'Redbelly Network Coin', symbol: 'RBNT', decimals: 18 }
  },
  {
    name: 'Tenet Testnet',
    title: 'Tenet Testnet',
    chain: 'TENET',
    icon: 'tenet',
    rpc: [ 'https://rpc.testnet.tenet.org' ],
    faucets: [ 'https://faucet.testnet.tenet.org' ],
    nativeCurrency: { name: 'TENET', symbol: 'TENET', decimals: 18 },
    infoURL: 'https://tenet.org/',
    shortName: 'tenet-testnet',
    chainId: 155,
    networkId: 155,
    slip44: 1,
    explorers: [
      {
        name: 'TenetScan Testnet',
        url: 'https://testnet.tenetscan.io',
        icon: 'tenet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'OEBlock Testnet',
    chain: 'OEBt',
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    rpc: [ 'https://testnet-rpc.oeblock.com' ],
    faucets: [],
    nativeCurrency: { name: 'OEBlock', symbol: 'OEB', decimals: 18 },
    infoURL: 'https://www.oeblock.com/',
    shortName: 'obe',
    chainId: 156,
    networkId: 156,
    slip44: 1,
    icon: 'oescan',
    explorers: [
      {
        name: 'OEScan explorer',
        url: 'https://testnet.oescan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Puppynet Shibarium',
    chain: 'Puppynet Shibarium',
    icon: 'shibarium',
    rpc: [ 'https://puppynet.shibrpc.com' ],
    faucets: [ 'https://beta.shibariumtech.com/faucet' ],
    nativeCurrency: { name: 'BONE', symbol: 'BONE', decimals: 18 },
    infoURL: 'https://shibariumecosystem.com',
    shortName: 'puppynet',
    chainId: 157,
    networkId: 157,
    explorers: [
      {
        name: 'puppyscan',
        url: 'https://puppyscan.shib.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Roburna Mainnet',
    chain: 'RBA',
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    rpc: [ 'https://dataseed.roburna.com' ],
    faucets: [],
    nativeCurrency: { name: 'Roburna', symbol: 'RBA', decimals: 18 },
    infoURL: 'https://www.roburna.com/',
    shortName: 'rba',
    chainId: 158,
    networkId: 158,
    icon: 'roburna',
    explorers: [
      {
        name: 'Rbascan Explorer',
        url: 'https://rbascan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Roburna Testnet',
    chain: 'RBAT',
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    rpc: [ 'https://preseed-testnet-1.roburna.com' ],
    faucets: [],
    nativeCurrency: { name: 'Roburna', symbol: 'RBAT', decimals: 18 },
    infoURL: 'https://www.roburna.com/',
    shortName: 'rbat',
    chainId: 159,
    networkId: 159,
    icon: 'roburna',
    explorers: [
      {
        name: 'Rbascan Testnet Explorer',
        url: 'https://testnet.rbascan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Armonia Eva Chain Mainnet',
    chain: 'Eva',
    rpc: [ 'https://evascan.io/api/eth-rpc/' ],
    faucets: [],
    nativeCurrency: {
      name: 'Armonia Multichain Native Token',
      symbol: 'AMAX',
      decimals: 18
    },
    infoURL: 'https://amax.network',
    shortName: 'eva',
    chainId: 160,
    networkId: 160,
    status: 'incubating'
  },
  {
    name: 'Armonia Eva Chain Testnet',
    chain: 'Wall-e',
    rpc: [ 'https://testnet.evascan.io/api/eth-rpc/' ],
    faucets: [],
    nativeCurrency: {
      name: 'Armonia Multichain Native Token',
      symbol: 'AMAX',
      decimals: 18
    },
    infoURL: 'https://amax.network',
    shortName: 'wall-e',
    chainId: 161,
    networkId: 161,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout - evascan',
        url: 'https://testnet.evascan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Lightstreams Testnet',
    chain: 'PHT',
    rpc: [ 'https://node.sirius.lightstreams.io' ],
    faucets: [ 'https://discuss.lightstreams.network/t/request-test-tokens' ],
    nativeCurrency: { name: 'Lightstreams PHT', symbol: 'PHT', decimals: 18 },
    infoURL: 'https://explorer.sirius.lightstreams.io',
    shortName: 'tpht',
    chainId: 162,
    networkId: 162,
    slip44: 1
  },
  {
    name: 'Lightstreams Mainnet',
    chain: 'PHT',
    rpc: [ 'https://node.mainnet.lightstreams.io' ],
    faucets: [],
    nativeCurrency: { name: 'Lightstreams PHT', symbol: 'PHT', decimals: 18 },
    infoURL: 'https://explorer.lightstreams.io',
    shortName: 'pht',
    chainId: 163,
    networkId: 163
  },
  {
    name: 'Omni Testnet',
    chain: 'Omni',
    rpc: [ 'https://testnet.omni.network' ],
    features: [ { name: 'EIP155' } ],
    faucets: [],
    nativeCurrency: { name: 'Omni', symbol: 'OMNI', decimals: 18 },
    infoURL: 'https://docs.omni.network/',
    shortName: 'omni_testnet',
    chainId: 165,
    networkId: 165,
    slip44: 1,
    explorers: [
      {
        name: 'Omni Explorer',
        url: 'https://testnet.explorer.omni.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Omni',
    chain: 'Omni',
    status: 'incubating',
    rpc: [],
    features: [ { name: 'EIP155' } ],
    faucets: [],
    nativeCurrency: { name: 'Omni', symbol: 'OMNI', decimals: 18 },
    infoURL: 'https://docs.omni.network/',
    shortName: 'omni',
    chainId: 166,
    networkId: 166,
    slip44: 1
  },
  {
    name: 'Atoshi Testnet',
    chain: 'ATOSHI',
    icon: 'atoshi',
    rpc: [ 'https://node.atoshi.io/' ],
    faucets: [],
    nativeCurrency: { name: 'ATOSHI', symbol: 'ATOS', decimals: 18 },
    infoURL: 'https://atoshi.org',
    shortName: 'atoshi',
    chainId: 167,
    networkId: 167,
    slip44: 1,
    explorers: [
      {
        name: 'atoshiscan',
        url: 'https://scan.atoverse.info',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'AIOZ Network',
    chain: 'AIOZ',
    icon: 'aioz',
    rpc: [ 'https://eth-dataseed.aioz.network' ],
    faucets: [],
    nativeCurrency: { name: 'AIOZ', symbol: 'AIOZ', decimals: 18 },
    infoURL: 'https://aioz.network',
    shortName: 'aioz',
    chainId: 168,
    networkId: 168,
    slip44: 60,
    explorers: [
      {
        name: 'AIOZ Network Explorer',
        url: 'https://explorer.aioz.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Manta Pacific Mainnet',
    chain: 'Manta Pacific',
    rpc: [
      'https://pacific-rpc.manta.network/http',
      'https://manta-pacific.drpc.org',
      'wss://manta-pacific.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://pacific-info.manta.network',
    shortName: 'manta',
    chainId: 169,
    networkId: 169,
    icon: 'manta',
    explorers: [
      {
        name: 'manta-pacific Explorer',
        url: 'https://pacific-explorer.manta.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'HOO Smart Chain Testnet',
    chain: 'ETH',
    rpc: [ 'https://http-testnet.hoosmartchain.com' ],
    faucets: [ 'https://faucet-testnet.hscscan.com/' ],
    nativeCurrency: { name: 'HOO', symbol: 'HOO', decimals: 18 },
    infoURL: 'https://www.hoosmartchain.com',
    shortName: 'hoosmartchain',
    chainId: 170,
    networkId: 170,
    slip44: 1
  },
  {
    name: 'Latam-Blockchain Resil Testnet',
    chain: 'Resil',
    rpc: [
      'https://rpc.latam-blockchain.com',
      'wss://ws.latam-blockchain.com'
    ],
    faucets: [ 'https://faucet.latam-blockchain.com' ],
    nativeCurrency: {
      name: 'Latam-Blockchain Resil Test Native Token',
      symbol: 'usd',
      decimals: 18
    },
    infoURL: 'https://latam-blockchain.com',
    shortName: 'resil',
    chainId: 172,
    networkId: 172,
    slip44: 1
  },
  {
    name: 'AME Chain Mainnet',
    chain: 'AME',
    rpc: [ 'https://node1.amechain.io/' ],
    faucets: [],
    nativeCurrency: { name: 'AME', symbol: 'AME', decimals: 18 },
    infoURL: 'https://amechain.io/',
    shortName: 'ame',
    chainId: 180,
    networkId: 180,
    explorers: [
      {
        name: 'AME Scan',
        url: 'https://amescan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Seele Mainnet',
    chain: 'Seele',
    rpc: [ 'https://rpc.seelen.pro/' ],
    faucets: [],
    nativeCurrency: { name: 'Seele', symbol: 'Seele', decimals: 18 },
    infoURL: 'https://seelen.pro/',
    shortName: 'Seele',
    chainId: 186,
    networkId: 186,
    explorers: [
      {
        name: 'seeleview',
        url: 'https://seeleview.net',
        standard: 'none'
      }
    ]
  },
  {
    name: 'BMC Mainnet',
    chain: 'BMC',
    rpc: [ 'https://mainnet.bmcchain.com/' ],
    faucets: [],
    nativeCurrency: { name: 'BTM', symbol: 'BTM', decimals: 18 },
    infoURL: 'https://bmc.bytom.io/',
    shortName: 'BMC',
    chainId: 188,
    networkId: 188,
    explorers: [
      {
        name: 'Blockmeta',
        url: 'https://bmc.blockmeta.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'BMC Testnet',
    chain: 'BMC',
    rpc: [ 'https://testnet.bmcchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'BTM', symbol: 'BTM', decimals: 18 },
    infoURL: 'https://bmc.bytom.io/',
    shortName: 'BMCT',
    chainId: 189,
    networkId: 189,
    slip44: 1,
    explorers: [
      {
        name: 'Blockmeta',
        url: 'https://bmctestnet.blockmeta.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'FileFileGo',
    chain: 'FFG',
    icon: 'ffgIcon',
    rpc: [ 'https://rpc.filefilego.com/rpc' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'FFG', symbol: 'FFG', decimals: 18 },
    infoURL: 'https://filefilego.com',
    shortName: 'ffg',
    chainId: 191,
    networkId: 191
  },
  {
    name: 'Crypto Emergency',
    chain: 'CEM',
    rpc: [ 'https://cemchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Crypto Emergency', symbol: 'CEM', decimals: 18 },
    infoURL: 'https://cemblockchain.com/',
    shortName: 'cem',
    chainId: 193,
    networkId: 193,
    explorers: [
      {
        name: 'cemscan',
        url: 'https://cemscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'X Layer Testnet',
    chain: 'X Layer',
    rpc: [ 'https://testrpc.xlayer.tech', 'https://xlayertestrpc.okx.com' ],
    faucets: [ 'https://www.okx.com/xlayer/faucet' ],
    nativeCurrency: {
      name: 'X Layer Global Utility Token in testnet',
      symbol: 'OKB',
      decimals: 18
    },
    features: [],
    infoURL: 'https://www.okx.com/xlayer',
    shortName: 'tokb',
    chainId: 195,
    networkId: 195,
    slip44: 1,
    explorers: [
      {
        name: 'OKLink',
        url: 'https://www.oklink.com/xlayer-test',
        standard: 'EIP3091'
      }
    ],
    status: 'active'
  },
  {
    name: 'X Layer Mainnet',
    chain: 'X Layer',
    rpc: [ 'https://rpc.xlayer.tech', 'https://xlayerrpc.okx.com' ],
    faucets: [],
    nativeCurrency: {
      name: 'X Layer Global Utility Token',
      symbol: 'OKB',
      decimals: 18
    },
    features: [],
    infoURL: 'https://www.okx.com/xlayer',
    shortName: 'okb',
    chainId: 196,
    networkId: 196,
    explorers: [
      {
        name: 'OKLink',
        url: 'https://www.oklink.com/xlayer',
        standard: 'EIP3091'
      }
    ],
    status: 'active'
  },
  {
    name: 'Neutrinos TestNet',
    chain: 'NEUTR',
    rpc: [ 'https://testnet-rpc.neutrinoschain.com' ],
    faucets: [ 'https://neutrinoschain.com/faucet' ],
    nativeCurrency: { name: 'Neutrinos', symbol: 'NEUTR', decimals: 18 },
    infoURL: 'https://docs.neutrinoschain.com',
    shortName: 'NEUTR',
    chainId: 197,
    networkId: 197,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet.neutrinoschain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bitchain Mainnet',
    chain: 'Bit',
    rpc: [ 'https://rpc.bitchain.biz/' ],
    faucets: [],
    nativeCurrency: { name: 'Bitcoin', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://www.bitchain.biz/',
    shortName: 'bit',
    chainId: 198,
    networkId: 198,
    explorers: [
      {
        name: 'Bitchain Scan',
        url: 'https://explorer.bitchain.biz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BitTorrent Chain Mainnet',
    chain: 'BTTC',
    rpc: [
      'https://rpc.bt.io',
      'https://bittorrent.drpc.org',
      'wss://bittorrent.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'BitTorrent', symbol: 'BTT', decimals: 18 },
    infoURL: 'https://bt.io',
    shortName: 'BTT',
    chainId: 199,
    networkId: 199,
    explorers: [
      {
        name: 'BitTorrent Chain Explorer',
        url: 'https://bttcscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Arbitrum on xDai',
    chain: 'AOX',
    rpc: [ 'https://arbitrum.xdaichain.com/' ],
    faucets: [],
    nativeCurrency: { name: 'xDAI', symbol: 'xDAI', decimals: 18 },
    infoURL: 'https://xdaichain.com',
    shortName: 'aox',
    chainId: 200,
    networkId: 200,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.com/xdai/arbitrum',
        standard: 'EIP3091'
      }
    ],
    parent: { chain: 'eip155-100', type: 'L2' }
  },
  {
    name: 'MOAC testnet',
    chain: 'MOAC',
    rpc: [ 'https://gateway.moac.io/testnet' ],
    faucets: [],
    nativeCurrency: { name: 'MOAC', symbol: 'mc', decimals: 18 },
    infoURL: 'https://moac.io',
    shortName: 'moactest',
    chainId: 201,
    networkId: 201,
    slip44: 1,
    explorers: [
      {
        name: 'moac testnet explorer',
        url: 'https://testnet.moac.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Edgeless Testnet',
    chain: 'EdgelessTestnet',
    rpc: [ 'https://testnet.rpc.edgeless.network/http' ],
    features: [ { name: 'EIP155' } ],
    faucets: [],
    nativeCurrency: { name: 'Edgeless Wrapped Eth', symbol: 'EwEth', decimals: 18 },
    infoURL: 'https://edgeless.network',
    shortName: 'edgeless-testnet',
    chainId: 202,
    networkId: 202,
    explorers: [
      {
        name: 'Edgeless Explorer',
        url: 'https://testnet.explorer.edgeless.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'opBNB Mainnet',
    icon: 'bnbchain',
    chain: 'opBNB',
    rpc: [
      'https://opbnb-mainnet-rpc.bnbchain.org',
      'https://opbnb-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3',
      'wss://opbnb-mainnet.nodereal.io/ws/v1/64a9df0874fb4a93b9d0a3849de012d3',
      'https://opbnb-mainnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
      'wss://opbnb-mainnet.nodereal.io/ws/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
      'https://opbnb-rpc.publicnode.com',
      'wss://opbnb-rpc.publicnode.com',
      'https://opbnb.drpc.org',
      'wss://opbnb.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'BNB Chain Native Token', symbol: 'BNB', decimals: 18 },
    infoURL: 'https://opbnb.bnbchain.org/en',
    shortName: 'obnb',
    chainId: 204,
    networkId: 204,
    slip44: 714,
    explorers: [
      {
        name: 'opbnbscan',
        url: 'https://mainnet.opbnbscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'VinuChain Testnet',
    chain: 'VinuChain Testnet',
    rpc: [ 'https://vinufoundation-rpc.com' ],
    faucets: [],
    nativeCurrency: { name: 'VinuChain', symbol: 'VC', decimals: 18 },
    infoURL: 'https://vitainu.org',
    shortName: 'VCTEST',
    chainId: 206,
    networkId: 206,
    slip44: 1,
    icon: 'vitainu-testnet',
    explorers: [
      {
        name: 'VinuScan Testnet',
        url: 'https://testnet.vinuscan.com',
        icon: 'vinuscan-testnet',
        standard: 'none'
      }
    ]
  },
  {
    name: 'VinuChain Network',
    chain: 'VinuChain',
    rpc: [ 'https://vinuchain-rpc.com' ],
    faucets: [],
    nativeCurrency: { name: 'VinuChain', symbol: 'VC', decimals: 18 },
    infoURL: 'https://vitainu.org',
    shortName: 'VC',
    chainId: 207,
    networkId: 207,
    icon: 'vitainu',
    explorers: [
      {
        name: 'VinuScan',
        url: 'https://vinuscan.com',
        icon: 'vinuscan',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Structx Mainnet',
    chain: 'utx',
    rpc: [ 'https://mainnet.structx.io' ],
    faucets: [],
    nativeCurrency: { name: 'Notes', symbol: 'utx', decimals: 18 },
    infoURL: 'https://structx.io',
    shortName: 'utx',
    chainId: 208,
    networkId: 208
  },
  {
    name: 'Bitnet',
    chain: 'BTN',
    icon: 'bitnet',
    rpc: [ 'https://rpc.bitnet.money', 'https://rpc.btnscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'Bitnet', symbol: 'BTN', decimals: 18 },
    infoURL: 'https://bitnet.money',
    shortName: 'BTN',
    chainId: 210,
    networkId: 210,
    explorers: [
      {
        name: 'Bitnet Explorer',
        url: 'https://btnscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Freight Trust Network',
    chain: 'EDI',
    rpc: [
      'http://13.57.207.168:3435',
      'https://app.freighttrust.net/ftn/${API_KEY}'
    ],
    faucets: [ 'http://faucet.freight.sh' ],
    nativeCurrency: { name: 'Freight Trust Native', symbol: '0xF', decimals: 18 },
    infoURL: 'https://freighttrust.com',
    shortName: 'EDI',
    chainId: 211,
    networkId: 0
  },
  {
    name: 'MAPO Makalu',
    title: 'MAPO Testnet Makalu',
    chain: 'MAPO',
    rpc: [ 'https://testnet-rpc.maplabs.io' ],
    faucets: [ 'https://faucet.mapprotocol.io' ],
    nativeCurrency: { name: 'Makalu MAPO', symbol: 'MAPO', decimals: 18 },
    infoURL: 'https://mapprotocol.io/',
    shortName: 'makalu',
    chainId: 212,
    networkId: 212,
    explorers: [
      {
        name: 'maposcan',
        url: 'https://testnet.maposcan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'B2 Hub Mainnet',
    chain: 'B2',
    rpc: [ 'https://hub-rpc.bsquared.network' ],
    faucets: [],
    nativeCurrency: { name: 'BSquared Token', symbol: 'B2', decimals: 18 },
    infoURL: 'https://www.bsquared.network',
    shortName: 'B2Hub-mainnet',
    chainId: 213,
    networkId: 213,
    icon: 'bsquare',
    explorers: [
      {
        name: 'B2 Hub Mainnet Explorer',
        url: 'https://hub-explorer.bsquared.network',
        icon: 'bsquare',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Shinarium Mainnet',
    chain: 'Shinarium',
    icon: 'shinarium',
    rpc: [ 'https://mainnet.shinarium.org' ],
    faucets: [],
    nativeCurrency: { name: 'Shina Inu', symbol: 'SHI', decimals: 18 },
    infoURL: 'https://shinarium.org',
    shortName: 'shinarium',
    chainId: 214,
    networkId: 214,
    explorers: [
      {
        name: 'shinascan',
        url: 'https://shinascan.shinarium.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SiriusNet V2',
    chain: 'SIN2',
    faucets: [],
    rpc: [ 'https://rpc2.siriusnet.io' ],
    icon: 'siriusnet',
    nativeCurrency: { name: 'MCD', symbol: 'MCD', decimals: 18 },
    infoURL: 'https://siriusnet.io',
    shortName: 'SIN2',
    chainId: 217,
    networkId: 217,
    explorers: [
      {
        name: 'siriusnet explorer',
        url: 'https://scan.siriusnet.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'SoterOne Mainnet old',
    chain: 'SOTER',
    rpc: [ 'https://rpc.soter.one' ],
    faucets: [],
    nativeCurrency: { name: 'SoterOne Mainnet Ether', symbol: 'SOTER', decimals: 18 },
    infoURL: 'https://www.soterone.com',
    shortName: 'SO1-old',
    chainId: 218,
    networkId: 218,
    status: 'deprecated'
  },
  {
    name: 'Scalind Testnet',
    chain: 'ETH',
    icon: 'scalind',
    rpc: [ 'https://rpc-sepolia.scalind.com' ],
    faucets: [ 'https://faucet.scalind.com' ],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://scalind.com',
    shortName: 'sepscal',
    chainId: 220,
    networkId: 220,
    explorers: [
      {
        name: 'scalind',
        url: 'https://explorer-sepolia.scalind.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Permission',
    chain: 'ASK',
    rpc: [ 'https://blockchain-api-mainnet.permission.io/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'ASK', symbol: 'ASK', decimals: 18 },
    infoURL: 'https://permission.io/',
    shortName: 'ASK',
    chainId: 222,
    networkId: 2221,
    slip44: 2221,
    status: 'deprecated'
  },
  {
    name: 'B2 Mainnet',
    title: 'B2 Mainnet',
    chain: 'B2',
    rpc: [
      'https://rpc.bsquared.network',
      'https://b2-mainnet.alt.technology'
    ],
    faucets: [],
    nativeCurrency: { name: 'Bitcoin', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://www.bsquared.network',
    shortName: 'B2-mainnet',
    chainId: 223,
    networkId: 223,
    icon: 'bsquare',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.bsquared.network',
        icon: 'bsquare',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-213',
      bridges: [ { url: 'https://www.bsquared.network/bridge' } ]
    }
  },
  {
    name: 'Viridis Testnet',
    chain: 'VRD',
    icon: 'viridis',
    rpc: [ 'https://testnet-rpc.vrd.network' ],
    faucets: [ 'https://faucet.vrd.network' ],
    nativeCurrency: { name: 'Viridis Token', symbol: 'VRD', decimals: 18 },
    infoURL: 'https://viridis.network',
    shortName: 'VRD-Testnet',
    chainId: 224,
    networkId: 224,
    explorers: [
      {
        name: 'Viridis Testnet',
        url: 'https://testnet.vrd.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'LACHAIN Mainnet',
    chain: 'LA',
    icon: 'lachain-io',
    rpc: [ 'https://rpc-mainnet.lachain.io' ],
    faucets: [],
    nativeCurrency: { name: 'LA', symbol: 'LA', decimals: 18 },
    infoURL: 'https://lachain.io',
    shortName: 'LA',
    chainId: 225,
    networkId: 225,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://scan.lachain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'LACHAIN Testnet',
    chain: 'TLA',
    icon: 'lachain-io',
    rpc: [ 'https://rpc-testnet.lachain.io' ],
    faucets: [],
    nativeCurrency: { name: 'TLA', symbol: 'TLA', decimals: 18 },
    infoURL: 'https://lachain.io',
    shortName: 'TLA',
    chainId: 226,
    networkId: 226,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://scan-test.lachain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SwapDEX',
    chain: 'SDX',
    rpc: [ 'https://rpc.swapdex.network', 'wss://ss.swapdex.network' ],
    faucets: [],
    nativeCurrency: { name: 'SwapDEX', symbol: 'SDX', decimals: 18 },
    infoURL: 'https://swapdex.network/',
    shortName: 'SDX',
    chainId: 230,
    networkId: 230,
    explorers: [
      {
        name: 'SwapDEX',
        url: 'https://evm.swapdex.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ProtoJumbo Testnet',
    chain: 'Jumbo',
    rpc: [ 'https://testnode.jumbochain.org' ],
    faucets: [ 'https://protojumbo.jumbochain.org/faucet-smart' ],
    nativeCurrency: { name: 'JNFTC', symbol: 'JNFTC', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://jumbochain.org',
    shortName: 'ProtoJumbo',
    chainId: 234,
    networkId: 234,
    slip44: 1,
    explorers: [
      {
        name: 'ProtoJumbo',
        url: 'https://protojumbo.jumbochain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Deamchain Testnet',
    chain: 'Deamchain',
    icon: 'deam',
    rpc: [ 'https://testnet.deamchain.com' ],
    faucets: [ 'https://faucet.deamchain.com' ],
    nativeCurrency: { name: 'Deamchain Native Token', symbol: 'DEAM', decimals: 18 },
    infoURL: 'https://deamchain.com',
    shortName: 'deamtest',
    chainId: 236,
    networkId: 236,
    slip44: 1,
    explorers: [
      {
        name: 'Deamchain Testnet Explorer',
        url: 'https://testnet-scan.deamchain.com',
        standard: 'EIP3091',
        icon: 'deam'
      }
    ]
  },
  {
    name: 'Blast Mainnet',
    chain: 'ETH',
    icon: 'blastIcon',
    rpc: [ 'https://rpc.blastblockchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://docs.blastblockchain.com',
    shortName: 'blast',
    chainId: 238,
    networkId: 238,
    explorers: [
      {
        name: 'Blast Mainnet',
        url: 'https://scan.blastblockchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Plinga Mainnet',
    chain: 'Plinga',
    icon: 'plinga',
    rpc: [
      'https://rpcurl.mainnet.plgchain.com',
      'https://rpcurl.plgchain.blockchain.evmnode.online',
      'https://rpcurl.mainnet.plgchain.plinga.technology'
    ],
    faucets: [],
    nativeCurrency: { name: 'Plinga', symbol: 'PLINGA', decimals: 18 },
    infoURL: 'https://www.plinga.technology/',
    shortName: 'plgchain',
    chainId: 242,
    networkId: 242,
    explorers: [
      {
        name: 'plgscan',
        url: 'https://www.plgscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Energy Web Chain',
    chain: 'Energy Web Chain',
    rpc: [ 'https://rpc.energyweb.org', 'wss://rpc.energyweb.org/ws' ],
    faucets: [],
    nativeCurrency: { name: 'Energy Web Token', symbol: 'EWT', decimals: 18 },
    infoURL: 'https://energyweb.org',
    shortName: 'ewt',
    chainId: 246,
    networkId: 246,
    slip44: 246,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.energyweb.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Oasys Mainnet',
    chain: 'Oasys',
    icon: 'oasys',
    rpc: [ 'https://rpc.mainnet.oasys.games' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://oasys.games',
    shortName: 'OAS',
    chainId: 248,
    networkId: 248,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.oasys.games',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Fantom Opera',
    chain: 'FTM',
    rpc: [
      'https://rpc.ftm.tools',
      'https://fantom-rpc.publicnode.com',
      'wss://fantom-rpc.publicnode.com',
      'https://fantom.drpc.org',
      'wss://fantom.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
    infoURL: 'https://fantom.foundation',
    shortName: 'ftm',
    chainId: 250,
    networkId: 250,
    icon: 'fantom',
    explorers: [
      {
        name: 'ftmscan',
        url: 'https://ftmscan.com',
        icon: 'ftmscan',
        standard: 'EIP3091'
      },
      {
        name: 'dexguru',
        url: 'https://fantom.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Fraxtal',
    chain: 'FRAX',
    rpc: [ 'https://rpc.frax.com' ],
    faucets: [],
    nativeCurrency: { name: 'Frax Ether', symbol: 'frxETH', decimals: 18 },
    infoURL: 'https://mainnet.frax.com',
    shortName: 'fraxtal',
    chainId: 252,
    networkId: 252,
    icon: 'fraxtal',
    explorers: [
      {
        name: 'fraxscan',
        url: 'https://fraxscan.com',
        standard: 'EIP3091'
      }
    ],
    status: 'active'
  },
  {
    name: 'Kroma',
    chain: 'ETH',
    rpc: [ 'https://api.kroma.network' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://kroma.network',
    icon: 'kroma',
    shortName: 'kroma',
    chainId: 255,
    networkId: 255,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.kroma.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://kroma.network/bridge' } ]
    }
  },
  {
    name: 'Huobi ECO Chain Testnet',
    chain: 'Heco',
    rpc: [
      'https://http-testnet.hecochain.com',
      'wss://ws-testnet.hecochain.com'
    ],
    faucets: [ 'https://scan-testnet.hecochain.com/faucet' ],
    nativeCurrency: {
      name: 'Huobi ECO Chain Test Native Token',
      symbol: 'htt',
      decimals: 18
    },
    infoURL: 'https://testnet.hecoinfo.com',
    shortName: 'hecot',
    chainId: 256,
    networkId: 256
  },
  {
    name: 'Setheum',
    chain: 'Setheum',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Setheum', symbol: 'SETM', decimals: 18 },
    infoURL: 'https://setheum.xyz',
    shortName: 'setm',
    chainId: 258,
    networkId: 258
  },
  {
    name: 'Neonlink Mainnet',
    chain: 'Neonlink',
    rpc: [ 'https://mainnet.neonlink.io' ],
    faucets: [],
    nativeCurrency: { name: 'Neonlink Native Token', symbol: 'NEON', decimals: 18 },
    infoURL: 'https://neonlink.io',
    shortName: 'neon',
    chainId: 259,
    networkId: 259,
    icon: 'neonlink',
    explorers: [
      {
        name: 'Neon Blockchain Explorer',
        url: 'https://scan.neonlink.io',
        standard: 'EIP3091',
        icon: 'neonlink'
      }
    ]
  },
  {
    name: 'SUR Blockchain Network',
    chain: 'SUR',
    rpc: [ 'https://sur.nilin.org' ],
    faucets: [],
    nativeCurrency: { name: 'Suren', symbol: 'SRN', decimals: 18 },
    infoURL: 'https://surnet.org',
    shortName: 'SUR',
    chainId: 262,
    networkId: 1,
    icon: 'SUR',
    explorers: [
      {
        name: 'Surnet Explorer',
        url: 'https://explorer.surnet.org',
        icon: 'SUR',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Neura',
    title: 'Neura Mainnet',
    chain: 'NEURA',
    icon: 'neura',
    rpc: [],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Ankr', symbol: 'ANKR', decimals: 18 },
    infoURL: 'https://www.neuraprotocol.io/',
    shortName: 'neura',
    chainId: 266,
    networkId: 266,
    status: 'incubating',
    explorers: []
  },
  {
    name: 'Neura Testnet',
    title: 'Neura Testnet',
    chain: 'NEURA',
    icon: 'neura',
    rpc: [ 'https://rpc.ankr.com/neura_testnet' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [ 'https://testnet.neuraprotocol.io/faucet' ],
    nativeCurrency: { name: 'Testnet Ankr', symbol: 'ANKR', decimals: 18 },
    infoURL: 'https://www.neuraprotocol.io/',
    shortName: 'tneura',
    chainId: 267,
    networkId: 267,
    explorers: [
      {
        name: 'ankrscan-neura',
        url: 'https://testnet.neuraprotocol.io/explorer',
        icon: 'neura',
        standard: 'none'
      },
      {
        name: 'blockscout',
        url: 'https://explorer.neura-testnet.ankr.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    status: 'active',
    slip44: 1
  },
  {
    name: 'Neura Devnet',
    title: 'Neura Devnet',
    chain: 'NEURA',
    icon: 'neura',
    rpc: [],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Devnet Ankr', symbol: 'ANKR', decimals: 18 },
    infoURL: 'https://www.neuraprotocol.io/',
    shortName: 'dneura',
    chainId: 268,
    networkId: 268,
    explorers: [],
    status: 'incubating',
    slip44: 1
  },
  {
    name: 'High Performance Blockchain',
    chain: 'HPB',
    rpc: [ 'https://hpbnode.com', 'wss://ws.hpbnode.com' ],
    faucets: [ 'https://myhpbwallet.com/' ],
    nativeCurrency: {
      name: 'High Performance Blockchain Ether',
      symbol: 'HPB',
      decimals: 18
    },
    infoURL: 'https://hpb.io',
    shortName: 'hpb',
    chainId: 269,
    networkId: 269,
    slip44: 269,
    explorers: [
      { name: 'hscan', url: 'https://hscan.org', standard: 'EIP3091' }
    ]
  },
  {
    name: 'EgonCoin Mainnet',
    chain: 'EGON',
    icon: 'egonicon',
    rpc: [ 'https://rpc.egonscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'EgonCoin', symbol: 'EGON', decimals: 18 },
    infoURL: 'https://egonscan.com',
    shortName: 'EGONm',
    chainId: 271,
    networkId: 271,
    explorers: [
      {
        name: 'EgonCoin Mainnet',
        url: 'https://egonscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'LaChain',
    chain: 'LaChain',
    icon: 'lachain-network',
    rpc: [
      'https://rpc1.mainnet.lachain.network',
      'https://rpc2.mainnet.lachain.network',
      'https://lachain.rpc-nodes.cedalio.dev'
    ],
    faucets: [],
    nativeCurrency: { name: 'LaCoin', symbol: 'LAC', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: '',
    shortName: 'lachain',
    chainId: 274,
    networkId: 274,
    explorers: [
      {
        name: 'LaChain Explorer',
        url: 'https://explorer.lachain.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BPX Blockchain',
    chain: 'BPX',
    icon: 'bpx',
    rpc: [
      'https://rpc.mainnet.bpxchain.cc',
      'https://bpx-dataseed.infinex.cc'
    ],
    faucets: [],
    nativeCurrency: { name: 'BPX', symbol: 'BPX', decimals: 18 },
    infoURL: 'https://bpxchain.cc',
    shortName: 'bpx',
    chainId: 279,
    networkId: 279
  },
  {
    name: 'zkSync Era Goerli Testnet (deprecated)',
    status: 'deprecated',
    chain: 'ETH',
    rpc: [ 'https://testnet.era.zksync.dev' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://zksync.io/',
    shortName: 'zksync-goerli',
    chainId: 280,
    networkId: 280,
    slip44: 1,
    icon: 'zksync-era',
    explorers: [
      {
        name: 'zkSync Era Block Explorer',
        url: 'https://goerli.explorer.zksync.io',
        icon: 'zksync-era',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.zksync.io/' } ]
    }
  },
  {
    name: 'Cronos zkEVM Testnet',
    chain: 'CronosZkEVMTestnet',
    rpc: [ 'https://rpc-zkevm-t0.cronos.org' ],
    faucets: [ 'https://zkevm-t0.cronos.org/faucet' ],
    nativeCurrency: { name: 'Cronos zkEVM Test Coin', symbol: 'TCRO', decimals: 18 },
    infoURL: 'https://docs.cronos.org/cronos-zkevm-chain/introduction-to-cronos-zkevm-chain-testnet',
    shortName: 'zktcro',
    chainId: 282,
    networkId: 282,
    slip44: 1,
    explorers: [
      {
        name: 'Cronos zkEVM Testnet Explorer',
        url: 'https://zkevm-t0.cronos.org/explorer',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Boba Network',
    chain: 'ETH',
    rpc: [
      'https://mainnet.boba.network',
      'https://replica.boba.network',
      'https://boba-ethereum.gateway.tenderly.co',
      'https://gateway.tenderly.co/public/boba-ethereum',
      'wss://boba-ethereum.gateway.tenderly.co/',
      'wss://gateway.tenderly.co/public/boba-ethereum',
      'https://boba-eth.drpc.org',
      'wss://boba-eth.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'Boba',
    chainId: 288,
    networkId: 288,
    explorers: [
      {
        name: 'Bobascan',
        url: 'https://bobascan.com',
        standard: 'none'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://gateway.boba.network' } ]
    }
  },
  {
    name: 'Orderly Mainnet',
    chain: 'ETH',
    rpc: [
      'https://rpc.orderly.network',
      'https://l2-orderly-mainnet-0.t.conduit.xyz'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'www.orderly.network',
    shortName: 'orderly',
    chainId: 291,
    networkId: 291,
    icon: 'orderly',
    explorers: [
      {
        name: 'orderlyscout',
        url: 'https://explorer.orderly.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Hedera Mainnet',
    chain: 'Hedera',
    icon: 'hedera',
    rpc: [ 'https://mainnet.hashio.io/api' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'hbar', symbol: 'HBAR', decimals: 18 },
    infoURL: 'https://hedera.com',
    shortName: 'hedera-mainnet',
    chainId: 295,
    networkId: 295,
    slip44: 3030,
    explorers: [
      {
        name: 'HashScan',
        url: 'https://hashscan.io/mainnet',
        standard: 'EIP3091'
      },
      {
        name: 'Arkhia Explorer',
        url: 'https://explorer.arkhia.io',
        standard: 'none'
      },
      {
        name: 'DragonGlass',
        url: 'https://app.dragonglass.me',
        standard: 'none'
      },
      {
        name: 'Hedera Explorer',
        url: 'https://hederaexplorer.io',
        standard: 'none'
      },
      {
        name: 'Ledger Works Explore',
        url: 'https://explore.lworks.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Hedera Testnet',
    chain: 'Hedera',
    icon: 'hedera',
    rpc: [ 'https://testnet.hashio.io/api' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [ 'https://portal.hedera.com' ],
    nativeCurrency: { name: 'hbar', symbol: 'HBAR', decimals: 18 },
    infoURL: 'https://hedera.com',
    shortName: 'hedera-testnet',
    chainId: 296,
    networkId: 296,
    slip44: 1,
    explorers: [
      {
        name: 'HashScan',
        url: 'https://hashscan.io/testnet',
        standard: 'EIP3091'
      },
      {
        name: 'Arkhia Explorer',
        url: 'https://explorer.arkhia.io',
        standard: 'none'
      },
      {
        name: 'DragonGlass',
        url: 'https://app.dragonglass.me',
        standard: 'none'
      },
      {
        name: 'Hedera Explorer',
        url: 'https://hederaexplorer.io',
        standard: 'none'
      },
      {
        name: 'Ledger Works Explore',
        url: 'https://explore.lworks.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Hedera Previewnet',
    chain: 'Hedera',
    icon: 'hedera',
    rpc: [ 'https://previewnet.hashio.io/api' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [ 'https://portal.hedera.com' ],
    nativeCurrency: { name: 'hbar', symbol: 'HBAR', decimals: 18 },
    infoURL: 'https://hedera.com',
    shortName: 'hedera-previewnet',
    chainId: 297,
    networkId: 297,
    slip44: 3030,
    explorers: [
      {
        name: 'HashScan',
        url: 'https://hashscan.io/previewnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Hedera Localnet',
    chain: 'Hedera',
    icon: 'hedera',
    rpc: [],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'hbar', symbol: 'HBAR', decimals: 18 },
    infoURL: 'https://hedera.com',
    shortName: 'hedera-localnet',
    chainId: 298,
    networkId: 298,
    slip44: 3030,
    explorers: []
  },
  {
    name: 'zkSync Sepolia Testnet',
    chain: 'ETH',
    rpc: [
      'https://sepolia.era.zksync.dev',
      'https://zksync-sepolia.drpc.org',
      'wss://zksync-sepolia.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://zksync.io/',
    shortName: 'zksync-sepolia',
    chainId: 300,
    networkId: 300,
    slip44: 1,
    icon: 'zksync-era',
    explorers: [
      {
        name: 'zkSync Block Explorer',
        url: 'https://sepolia.explorer.zksync.io',
        icon: 'zksync-era',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.zksync.io/' } ]
    },
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'Bobaopera',
    chain: 'Bobaopera',
    status: 'deprecated',
    rpc: [
      'https://bobaopera.boba.network',
      'wss://wss.bobaopera.boba.network',
      'https://replica.bobaopera.boba.network',
      'wss://replica-wss.bobaopera.boba.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Boba Token', symbol: 'BOBA', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'Bobaopera',
    chainId: 301,
    networkId: 301,
    explorers: [
      {
        name: 'Bobaopera block explorer',
        url: 'https://blockexplorer.bobaopera.boba.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Neurochain Testnet',
    chain: 'NCN',
    rpc: [ 'https://nc-rpc-test1.neurochain.io' ],
    faucets: [],
    nativeCurrency: { name: 'Neurochain', symbol: 'tNCN', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://www.neurochain.ai',
    shortName: 'ncnt',
    chainId: 303,
    networkId: 303,
    slip44: 1,
    explorers: [
      {
        name: 'neuroscan',
        url: 'https://testnet.ncnscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ZKSats Mainnet',
    title: 'ZKSats Mainnet',
    chain: 'ZKSats',
    rpc: [ 'https://mainnet.zksats.io' ],
    faucets: [],
    nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://zksats.io',
    shortName: 'ZKSats-Mainnet',
    chainId: 305,
    networkId: 305,
    icon: 'zksats',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.zksats.io',
        icon: 'zksats',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Lovely Network Testnet',
    chain: 'Lovely',
    icon: 'lovely',
    rpc: [ 'https://trpc.lovely.network' ],
    faucets: [ 'https://faucet.lovely.network' ],
    nativeCurrency: { name: 'Lovely', symbol: 'LOVELY', decimals: 18 },
    infoURL: 'https://lovely.network',
    shortName: 'LOVELY-Testnet',
    chainId: 307,
    networkId: 307,
    explorers: [
      {
        name: 'Lovely Network Testnet',
        url: 'https://tscan.lovely.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Furtheon',
    chain: 'Furtheon Network',
    rpc: [ 'https://rpc.furtheon.org' ],
    faucets: [],
    nativeCurrency: { name: 'Furtheon', symbol: 'FTH', decimals: 18 },
    infoURL: 'https://furtheon.org/',
    shortName: 'furtheon',
    chainId: 308,
    networkId: 308,
    explorers: [
      {
        name: 'furthscan',
        url: 'http://furthscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Wyzth Testnet',
    chain: 'WYZ',
    rpc: [ 'https://rpc-testnet3.wyzthchain.org/' ],
    faucets: [],
    nativeCurrency: { name: 'Wyzth', symbol: 'WYZ', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://wyzth.org/',
    shortName: 'wyz',
    chainId: 309,
    networkId: 309,
    slip44: 1,
    icon: 'wyzth_icon',
    explorers: [
      {
        name: 'wyzth',
        url: 'http://24.199.108.65:4000',
        icon: 'wyzth',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Omax Mainnet',
    chain: 'OMAX Chain',
    rpc: [ 'https://mainapi.omaxray.com' ],
    faucets: [ 'https://faucet.omaxray.com/' ],
    nativeCurrency: { name: 'OMAX COIN', symbol: 'OMAX', decimals: 18 },
    infoURL: 'https://www.omaxcoin.com/',
    shortName: 'omax',
    chainId: 311,
    networkId: 311,
    icon: 'omaxchain',
    explorers: [
      {
        name: 'Omax Chain Explorer',
        url: 'https://omaxray.com',
        icon: 'omaxray',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Neurochain Mainnet',
    chain: 'NCN',
    rpc: [
      'https://nc-rpc-prd1.neurochain.io',
      'https://nc-rpc-prd2.neurochain.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'Neurochain', symbol: 'NCN', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://www.neurochain.ai',
    shortName: 'ncn',
    chainId: 313,
    networkId: 313,
    explorers: [
      {
        name: 'neuroscan',
        url: 'https://ncnscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Filecoin - Mainnet',
    chain: 'FIL',
    icon: 'filecoin',
    rpc: [
      'https://api.node.glif.io/',
      'https://rpc.ankr.com/filecoin',
      'https://filecoin-mainnet.chainstacklabs.com/rpc/v1',
      'https://filfox.info/rpc/v1',
      'https://filecoin.drpc.org',
      'wss://filecoin.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'filecoin', symbol: 'FIL', decimals: 18 },
    infoURL: 'https://filecoin.io',
    shortName: 'filecoin',
    chainId: 314,
    networkId: 314,
    slip44: 461,
    explorers: [
      {
        name: 'Filfox',
        url: 'https://filfox.info/en',
        standard: 'none'
      },
      {
        name: 'Beryx',
        url: 'https://beryx.zondax.ch',
        standard: 'none'
      },
      {
        name: 'Glif Explorer',
        url: 'https://explorer.glif.io',
        standard: 'EIP3091'
      },
      {
        name: 'Dev.storage',
        url: 'https://dev.storage',
        standard: 'none'
      },
      { name: 'Filscan', url: 'https://filscan.io', standard: 'none' },
      {
        name: 'Filscout',
        url: 'https://filscout.io/en',
        standard: 'none'
      }
    ]
  },
  {
    name: 'KCC Mainnet',
    chain: 'KCC',
    rpc: [
      'https://rpc-mainnet.kcc.network',
      'https://kcc.mytokenpocket.vip',
      'https://public-rpc.blockpi.io/http/kcc'
    ],
    faucets: [],
    nativeCurrency: { name: 'KuCoin Token', symbol: 'KCS', decimals: 18 },
    infoURL: 'https://kcc.io',
    shortName: 'kcs',
    chainId: 321,
    networkId: 321,
    slip44: 641,
    explorers: [
      {
        name: 'KCC Explorer',
        url: 'https://explorer.kcc.io/en',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'KCC Testnet',
    chain: 'KCC',
    rpc: [ 'https://rpc-testnet.kcc.network' ],
    faucets: [ 'https://faucet-testnet.kcc.network' ],
    nativeCurrency: { name: 'KuCoin Testnet Token', symbol: 'tKCS', decimals: 18 },
    infoURL: 'https://scan-testnet.kcc.network',
    shortName: 'kcst',
    chainId: 322,
    networkId: 322,
    slip44: 1,
    explorers: [
      {
        name: 'kcc-scan-testnet',
        url: 'https://scan-testnet.kcc.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Cosvm Mainnet',
    chain: 'CVM',
    rpc: [ 'https://rpc.cosvm.net' ],
    faucets: [],
    nativeCurrency: { name: 'Cosvm', symbol: 'CVM', decimals: 18 },
    infoURL: 'https://cosvm.network',
    shortName: 'cvm',
    chainId: 323,
    networkId: 323,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer.cosvm.net',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'zkSync Mainnet',
    chain: 'ETH',
    rpc: [
      'https://mainnet.era.zksync.io',
      'https://zksync.drpc.org',
      'wss://zksync.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://zksync.io/',
    shortName: 'zksync',
    chainId: 324,
    networkId: 324,
    icon: 'zksync-era',
    explorers: [
      {
        name: 'zkSync Era Block Explorer',
        url: 'https://explorer.zksync.io',
        icon: 'zksync-era',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.zksync.io/' } ]
    }
  },
  {
    name: 'Web3Q Mainnet',
    chain: 'Web3Q',
    rpc: [ 'https://mainnet.web3q.io:8545' ],
    faucets: [],
    nativeCurrency: { name: 'Web3Q', symbol: 'W3Q', decimals: 18 },
    infoURL: 'https://web3q.io/home.w3q/',
    shortName: 'w3q',
    chainId: 333,
    networkId: 333,
    explorers: [
      {
        name: 'w3q-mainnet',
        url: 'https://explorer.mainnet.web3q.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DFK Chain Test',
    chain: 'DFK',
    icon: 'dfk',
    rpc: [
      'https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc'
    ],
    faucets: [],
    nativeCurrency: { name: 'Jewel', symbol: 'JEWEL', decimals: 18 },
    infoURL: 'https://defikingdoms.com',
    shortName: 'DFKTEST',
    chainId: 335,
    networkId: 335,
    slip44: 1,
    explorers: [
      {
        name: 'ethernal',
        url: 'https://explorer-test.dfkchain.com',
        icon: 'ethereum',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Shiden',
    chain: 'SDN',
    rpc: [
      'https://shiden.api.onfinality.io/public',
      'https://shiden-rpc.dwellir.com',
      'https://shiden.public.blastapi.io',
      'wss://shiden.api.onfinality.io/public-ws',
      'wss://shiden.public.blastapi.io',
      'wss://shiden-rpc.dwellir.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Shiden', symbol: 'SDN', decimals: 18 },
    infoURL: 'https://shiden.astar.network/',
    shortName: 'sdn',
    chainId: 336,
    networkId: 336,
    icon: 'shiden',
    explorers: [
      {
        name: 'subscan',
        url: 'https://shiden.subscan.io',
        standard: 'none',
        icon: 'subscan'
      },
      {
        name: 'blockscout',
        url: 'https://blockscout.com/shiden',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Cronos Testnet',
    chain: 'CRO',
    rpc: [
      'https://evm-t3.cronos.org',
      'https://cronos-testnet.drpc.org',
      'wss://cronos-testnet.drpc.org'
    ],
    faucets: [ 'https://cronos.org/faucet' ],
    nativeCurrency: { name: 'Cronos Test Coin', symbol: 'TCRO', decimals: 18 },
    infoURL: 'https://cronos.org',
    shortName: 'tcro',
    chainId: 338,
    networkId: 338,
    slip44: 1,
    explorers: [
      {
        name: 'Cronos Testnet Explorer',
        url: 'https://explorer.cronos.org/testnet',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Theta Mainnet',
    chain: 'Theta',
    rpc: [ 'https://eth-rpc-api.thetatoken.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Theta Fuel', symbol: 'TFUEL', decimals: 18 },
    infoURL: 'https://www.thetatoken.org/',
    shortName: 'theta-mainnet',
    chainId: 361,
    networkId: 361,
    explorers: [
      {
        name: 'Theta Mainnet Explorer',
        url: 'https://explorer.thetatoken.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Theta Sapphire Testnet',
    chain: 'Theta',
    rpc: [ 'https://eth-rpc-api-sapphire.thetatoken.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Theta Fuel', symbol: 'TFUEL', decimals: 18 },
    infoURL: 'https://www.thetatoken.org/',
    shortName: 'theta-sapphire',
    chainId: 363,
    networkId: 363,
    slip44: 1,
    explorers: [
      {
        name: 'Theta Sapphire Testnet Explorer',
        url: 'https://guardian-testnet-sapphire-explorer.thetatoken.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Theta Amber Testnet',
    chain: 'Theta',
    rpc: [ 'https://eth-rpc-api-amber.thetatoken.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Theta Fuel', symbol: 'TFUEL', decimals: 18 },
    infoURL: 'https://www.thetatoken.org/',
    shortName: 'theta-amber',
    chainId: 364,
    networkId: 364,
    slip44: 1,
    explorers: [
      {
        name: 'Theta Amber Testnet Explorer',
        url: 'https://guardian-testnet-amber-explorer.thetatoken.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Theta Testnet',
    chain: 'Theta',
    rpc: [ 'https://eth-rpc-api-testnet.thetatoken.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Theta Fuel', symbol: 'TFUEL', decimals: 18 },
    infoURL: 'https://www.thetatoken.org/',
    shortName: 'theta-testnet',
    chainId: 365,
    networkId: 365,
    slip44: 1,
    explorers: [
      {
        name: 'Theta Testnet Explorer',
        url: 'https://testnet-explorer.thetatoken.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PulseChain',
    shortName: 'pls',
    chain: 'PLS',
    chainId: 369,
    networkId: 369,
    infoURL: 'https://pulsechain.com/',
    rpc: [
      'https://rpc.pulsechain.com',
      'wss://rpc.pulsechain.com',
      'https://pulsechain-rpc.publicnode.com',
      'wss://pulsechain-rpc.publicnode.com',
      'https://rpc-pulsechain.g4mm4.io',
      'wss://rpc-pulsechain.g4mm4.io'
    ],
    slip44: 60,
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    ens: { registry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
    status: 'active',
    nativeCurrency: { name: 'Pulse', symbol: 'PLS', decimals: 18 },
    explorers: [
      {
        name: 'blockscout',
        url: 'https://scan.pulsechain.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      },
      {
        name: 'otterscan',
        url: 'https://otter.pulsechain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Consta Testnet',
    chain: 'tCNT',
    rpc: [ 'https://rpc-testnet.theconsta.com' ],
    faucets: [],
    nativeCurrency: { name: 'tCNT', symbol: 'tCNT', decimals: 18 },
    infoURL: 'http://theconsta.com',
    shortName: 'tCNT',
    chainId: 371,
    networkId: 371,
    slip44: 1,
    icon: 'constachain',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer-testnet.theconsta.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ZKAmoeba Testnet',
    chain: 'FIL',
    rpc: [
      'https://rpc.testnet.zkamoeba.com:4050/',
      'https://rpc1.testnet.zkamoeba.com:4050/'
    ],
    faucets: [],
    nativeCurrency: { name: 'filecoin', symbol: 'FIL', decimals: 18 },
    infoURL: 'https://testnet.zkamoeba.com',
    shortName: 'zkamoeba-test',
    chainId: 380,
    networkId: 380,
    icon: 'zkamoeba-micro',
    explorers: [
      {
        name: 'ZKAmoeba Test Explorer',
        url: 'https://testnetexplorer.zkamoeba.com',
        icon: 'zkamoeba-micro',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-314',
      bridges: [ { url: 'https://testnet.zkamoeba.com/en/bridge' } ]
    }
  },
  {
    name: 'ZKAmoeba Mainnet',
    chain: 'FIL',
    rpc: [ 'https://rpc.mainnet.zkamoeba.com/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'filecoin', symbol: 'FIL', decimals: 18 },
    infoURL: 'https://www.zkamoeba.com',
    shortName: 'zkamoeba',
    chainId: 381,
    networkId: 381,
    icon: 'zkamoeba-micro',
    explorers: [
      {
        name: 'ZKAmoeba Explorer',
        url: 'https://explorer.zkamoeba.com',
        icon: 'zkamoeba-micro',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-314',
      bridges: [ { url: 'https://www.zkamoeba.com/en/bridge' } ]
    }
  },
  {
    name: 'Lisinski',
    chain: 'CRO',
    rpc: [ 'https://rpc-bitfalls1.lisinski.online' ],
    faucets: [ 'https://pipa.lisinski.online' ],
    nativeCurrency: { name: 'Lisinski Ether', symbol: 'LISINS', decimals: 18 },
    infoURL: 'https://lisinski.online',
    shortName: 'lisinski',
    chainId: 385,
    networkId: 385
  },
  {
    name: 'CamDL Testnet',
    chain: 'CADL',
    rpc: [ 'https://rpc1.testnet.camdl.gov.kh/' ],
    faucets: [ 'https://faucet.testnet.camdl.gov.kh/' ],
    nativeCurrency: { name: 'CADL', symbol: 'CADL', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://camdl.gov.kh/',
    shortName: 'camdl-testnet',
    chainId: 395,
    networkId: 395,
    icon: 'camdl',
    explorers: [
      {
        name: 'CamDL Testnet Explorer',
        url: 'https://explorer.testnet.camdl.gov.kh',
        standard: 'EIP3091'
      }
    ],
    status: 'active'
  },
  {
    name: 'Near Mainnet',
    chain: 'NEAR',
    rpc: [],
    icon: 'near',
    faucets: [],
    nativeCurrency: { name: 'NEAR', symbol: 'NEAR', decimals: 18 },
    infoURL: 'https://near.org/',
    shortName: 'near',
    chainId: 397,
    networkId: 397,
    explorers: [
      {
        name: 'Near Blocks',
        url: 'https://nearblocks.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Near Testnet',
    chain: 'NEAR',
    rpc: [],
    icon: 'near',
    faucets: [],
    nativeCurrency: { name: 'Testnet NEAR', symbol: 'NEAR', decimals: 18 },
    infoURL: 'https://aurora.dev',
    shortName: 'near-testnet',
    chainId: 398,
    networkId: 398,
    explorers: [
      {
        name: 'Near blocks',
        url: 'https://testnet.nearblocks.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Nativ3 Mainnet',
    chainId: 399,
    shortName: 'N3',
    chain: 'Nativ3',
    icon: 'nativ3',
    networkId: 399,
    nativeCurrency: { name: 'USNT', symbol: 'USNT', decimals: 18 },
    rpc: [ 'https://rpc.nativ3.network', 'wss://ws.nativ3.network' ],
    faucets: [],
    explorers: [
      {
        name: 'N3scan',
        url: 'https://scan.nativ3.network',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://nativ3.network',
    parent: {
      type: 'L2',
      chain: 'eip155-42161',
      bridges: [ { url: 'https://bridge.nativ3.network' } ]
    }
  },
  {
    name: 'HyperonChain TestNet',
    chain: 'HPN',
    icon: 'hyperonchain',
    rpc: [ 'https://testnet-rpc.hyperonchain.com' ],
    faucets: [ 'https://faucet.hyperonchain.com' ],
    nativeCurrency: { name: 'HyperonChain', symbol: 'HPN', decimals: 18 },
    infoURL: 'https://docs.hyperonchain.com',
    shortName: 'hpn',
    chainId: 400,
    networkId: 400,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet.hyperonchain.com',
        icon: 'hyperonchain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ozone Chain Testnet',
    chain: 'OZONE',
    rpc: [ 'https://node1.testnet.ozonechain.io' ],
    faucets: [],
    nativeCurrency: { name: 'OZONE', symbol: 'OZO', decimals: 18 },
    infoURL: 'https://ozonechain.io',
    shortName: 'ozo_tst',
    chainId: 401,
    networkId: 401,
    slip44: 1,
    icon: 'ozonechain',
    explorers: [
      {
        name: 'OZONE Scan',
        url: 'https://testnet.ozonescan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Syndr L3',
    chainId: 404,
    shortName: 'syndr-l3',
    title: 'Syndr L3 Rollup',
    chain: 'SYNDR',
    networkId: 404,
    icon: 'syndr',
    rpc: [ 'https://rpc.syndr.com', 'wss://rpc.syndr.com/ws' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://syndr.com',
    explorers: [
      {
        name: 'Syndr L3 Explorer',
        url: 'https://explorer.syndr.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-42161',
      bridges: [ { url: 'https://bridge.syndr.com' } ]
    }
  },
  {
    name: 'Pepe Chain Mainnet',
    chain: 'PC',
    status: 'active',
    icon: 'pepechain',
    rpc: [ 'https://rpc.pepe-chain.vip' ],
    faucets: [],
    nativeCurrency: { name: 'Pepe', symbol: 'PEPE', decimals: 18 },
    infoURL: 'https://pepe-chain.vip',
    shortName: 'pepe',
    chainId: 411,
    networkId: 411,
    explorers: [
      {
        name: 'pepechain explorer',
        url: 'https://explorer.pepe-chain.vip',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SX Network Mainnet',
    chain: 'SX',
    icon: 'SX',
    rpc: [ 'https://rpc.sx.technology' ],
    faucets: [],
    nativeCurrency: { name: 'SX Network', symbol: 'SX', decimals: 18 },
    infoURL: 'https://www.sx.technology',
    shortName: 'SX',
    chainId: 416,
    networkId: 416,
    explorers: [
      {
        name: 'SX Network Explorer',
        url: 'https://explorer.sx.technology',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'LaTestnet',
    chain: 'LaTestnet',
    icon: 'lachain-network',
    rpc: [
      'https://rpc.testnet.lachain.network',
      'https://lachain-testnet.rpc-nodes.cedalio.dev'
    ],
    faucets: [ 'https://faucet.lachain.network' ],
    nativeCurrency: { name: 'Test LaCoin', symbol: 'TLA', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: '',
    shortName: 'latestnet',
    chainId: 418,
    networkId: 418,
    explorers: [
      {
        name: 'LaTestnet Explorer',
        url: 'https://testexplorer.lachain.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Optimism Goerli Testnet',
    chain: 'ETH',
    rpc: [
      'https://goerli.optimism.io',
      'https://optimism-goerli-rpc.publicnode.com',
      'wss://optimism-goerli-rpc.publicnode.com',
      'https://optimism-goerli.gateway.tenderly.co',
      'wss://optimism-goerli.gateway.tenderly.co',
      'https://optimism-testnet.drpc.org',
      'wss://optimism-testnet.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://optimism.io',
    shortName: 'ogor',
    chainId: 420,
    networkId: 420,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://optimism-goerli.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Viridis Mainnet',
    chain: 'VRD',
    icon: 'viridis',
    rpc: [ 'https://mainnet-rpc.vrd.network' ],
    faucets: [],
    nativeCurrency: { name: 'Viridis Token', symbol: 'VRD', decimals: 18 },
    infoURL: 'https://viridis.network',
    shortName: 'vrd',
    chainId: 422,
    networkId: 422,
    explorers: [
      {
        name: 'Viridis Mainnet',
        url: 'https://explorer.vrd.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PGN (Public Goods Network)',
    chain: 'ETH',
    rpc: [ 'https://rpc.publicgoods.network' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://publicgoods.network/',
    shortName: 'PGN',
    chainId: 424,
    networkId: 424,
    icon: 'publicGoodsNetwork',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.publicgoods.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.publicgoods.network' } ]
    }
  },
  {
    name: 'Zeeth Chain',
    chain: 'ZeethChain',
    rpc: [ 'https://rpc.zeeth.io' ],
    faucets: [],
    nativeCurrency: { name: 'Zeeth Token', symbol: 'ZTH', decimals: 18 },
    infoURL: '',
    shortName: 'zeeth',
    chainId: 427,
    networkId: 427,
    explorers: [
      {
        name: 'Zeeth Explorer',
        url: 'https://explorer.zeeth.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Geso Verse',
    chain: 'Geso Verse',
    rpc: [ 'https://rpc.verse.gesoten.com/' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://gesoten.com/',
    shortName: 'GSV',
    icon: 'gesoten',
    chainId: 428,
    networkId: 428,
    explorers: [
      {
        name: 'Geso Verse Explorer',
        url: 'https://explorer.verse.gesoten.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Boyaa Mainnet',
    chain: 'BYC',
    rpc: [ 'https://evm-rpc.mainnet.boyaa.network' ],
    faucets: [],
    nativeCurrency: { name: 'Boyaa mainnet native coin', symbol: 'BYC', decimals: 18 },
    infoURL: 'https://boyaa.network',
    shortName: 'BYC',
    chainId: 434,
    networkId: 434,
    icon: 'boyaanetwork',
    explorers: [
      {
        name: 'Boyaa explorer',
        url: 'https://explorer.mainnet.boyaa.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ten Testnet',
    title: 'Ten Sepolia Rollup Testnet',
    chainId: 443,
    shortName: 'ten-testnet',
    chain: 'ETH',
    networkId: 443,
    slip44: 1,
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpc: [ 'https://testnet.ten.xyz' ],
    faucets: [],
    infoURL: 'https://ten.xyz',
    explorers: [
      {
        name: 'Ten Sepolia Rollup Explorer',
        url: 'https://tenscan.io',
        standard: 'none'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-5',
      bridges: [ { url: 'https://bridge.ten.xyz' } ]
    }
  },
  {
    name: 'Synapse Chain Testnet',
    status: 'active',
    chain: 'ETH',
    rpc: [ 'https://sepolia.synapseprotocol.com' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia ETH', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://synapseprotocol.com',
    shortName: 'synapse-sepolia',
    chainId: 444,
    networkId: 444,
    slip44: 1,
    redFlags: [ 'reusedChainId' ],
    explorers: [
      {
        name: 'Synapse Chain Sepolia',
        url: 'https://sepolia.synapsescan.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [
        {
          url: 'https://docs.synapseprotocol.com/synapse-chain/using-synapse-chain/bridging-to-synapse-chain'
        }
      ]
    }
  },
  {
    name: 'ARZIO Chain',
    chain: 'ARZIO',
    icon: 'arzio',
    rpc: [ 'https://chain-rpc.arzio.co' ],
    faucets: [],
    nativeCurrency: { name: 'ARZIO', symbol: 'AZO', decimals: 18 },
    infoURL: 'https://chain.arzio.co',
    shortName: 'arzio',
    chainId: 456,
    networkId: 456,
    explorers: [
      {
        name: 'ARZIO Scan',
        url: 'https://scan.arzio.co',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Areon Network Testnet',
    chain: 'Areon',
    icon: 'areon',
    rpc: [
      'https://testnet-rpc.areon.network',
      'https://testnet-rpc2.areon.network',
      'https://testnet-rpc3.areon.network',
      'https://testnet-rpc4.areon.network',
      'https://testnet-rpc5.areon.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Areon', symbol: 'TAREA', decimals: 18 },
    infoURL: 'https://areon.network',
    shortName: 'tarea',
    chainId: 462,
    networkId: 462,
    slip44: 1,
    explorers: [
      {
        name: 'AreonScan',
        url: 'https://areonscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Areon Network Mainnet',
    chain: 'Areon',
    icon: 'areon',
    rpc: [
      'https://mainnet-rpc.areon.network',
      'https://mainnet-rpc2.areon.network',
      'https://mainnet-rpc3.areon.network',
      'https://mainnet-rpc4.areon.network',
      'https://mainnet-rpc5.areon.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Areon', symbol: 'AREA', decimals: 18 },
    infoURL: 'https://areon.network',
    shortName: 'area',
    chainId: 463,
    networkId: 463,
    explorers: [
      {
        name: 'AreonScan',
        url: 'https://areonscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Rupaya',
    chain: 'RUPX',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Rupaya', symbol: 'RUPX', decimals: 18 },
    infoURL: 'https://www.rupaya.io',
    shortName: 'rupx',
    chainId: 499,
    networkId: 499,
    slip44: 499
  },
  {
    name: 'Camino C-Chain',
    chain: 'CAM',
    rpc: [ 'https://api.camino.network/ext/bc/C/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Camino', symbol: 'CAM', decimals: 18 },
    infoURL: 'https://camino.network/',
    shortName: 'Camino',
    chainId: 500,
    networkId: 1000,
    icon: 'camino',
    explorers: [
      {
        name: 'blockexplorer',
        url: 'https://suite.camino.network/explorer',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Columbus Test Network',
    chain: 'CAM',
    rpc: [ 'https://columbus.camino.network/ext/bc/C/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Camino', symbol: 'CAM', decimals: 18 },
    infoURL: 'https://camino.network/',
    shortName: 'Columbus',
    chainId: 501,
    networkId: 1001,
    slip44: 1,
    icon: 'camino',
    explorers: [
      {
        name: 'blockexplorer',
        url: 'https://suite.camino.network/explorer',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Syndicate Chain',
    title: 'Syndicate Chain',
    chain: 'Syndicate',
    rpc: [ 'https://rpc-mainnet.syndicate.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://syndicate.io',
    shortName: 'syndicate-chain-mainnet',
    chainId: 510,
    networkId: 510,
    status: 'incubating',
    icon: 'syndicate'
  },
  {
    name: 'Double-A Chain Mainnet',
    chain: 'AAC',
    rpc: [ 'https://rpc.acuteangle.com' ],
    faucets: [],
    nativeCurrency: { name: 'Acuteangle Native Token', symbol: 'AAC', decimals: 18 },
    infoURL: 'https://www.acuteangle.com/',
    shortName: 'aac',
    chainId: 512,
    networkId: 512,
    slip44: 1512,
    explorers: [
      {
        name: 'aacscan',
        url: 'https://scan.acuteangle.com',
        standard: 'EIP3091'
      }
    ],
    icon: 'aac'
  },
  {
    name: 'Double-A Chain Testnet',
    chain: 'AAC',
    icon: 'aac',
    rpc: [ 'https://rpc-testnet.acuteangle.com' ],
    faucets: [ 'https://scan-testnet.acuteangle.com/faucet' ],
    nativeCurrency: { name: 'Acuteangle Native Token', symbol: 'AAC', decimals: 18 },
    infoURL: 'https://www.acuteangle.com/',
    shortName: 'aact',
    chainId: 513,
    networkId: 513,
    slip44: 1,
    explorers: [
      {
        name: 'aacscan-testnet',
        url: 'https://scan-testnet.acuteangle.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Gear Zero Network Mainnet',
    chain: 'GearZero',
    rpc: [ 'https://gzn.linksme.info' ],
    faucets: [],
    nativeCurrency: {
      name: 'Gear Zero Network Native Token',
      symbol: 'GZN',
      decimals: 18
    },
    infoURL: 'https://token.gearzero.ca/mainnet',
    shortName: 'gz-mainnet',
    chainId: 516,
    networkId: 516,
    slip44: 516,
    explorers: []
  },
  {
    name: 'XT Smart Chain Mainnet',
    chain: 'XSC',
    icon: 'xsc',
    rpc: [
      'https://datarpc1.xsc.pub',
      'https://datarpc2.xsc.pub',
      'https://datarpc3.xsc.pub'
    ],
    faucets: [ 'https://xsc.pub/faucet' ],
    nativeCurrency: { name: 'XT Smart Chain Native Token', symbol: 'XT', decimals: 18 },
    infoURL: 'https://xsc.pub/',
    shortName: 'xt',
    chainId: 520,
    networkId: 1024,
    explorers: [
      {
        name: 'xscscan',
        url: 'https://xscscan.pub',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Firechain Mainnet',
    chain: 'FIRE',
    icon: 'firechain',
    rpc: [ 'https://rpc-mainnet.thefirechain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Firechain', symbol: 'FIRE', decimals: 18 },
    infoURL: 'https://thefirechain.com',
    shortName: 'fire',
    chainId: 529,
    networkId: 529,
    explorers: [],
    status: 'incubating'
  },
  {
    name: 'F(x)Core Mainnet Network',
    chain: 'Fxcore',
    rpc: [ 'https://fx-json-web3.functionx.io:8545' ],
    faucets: [],
    nativeCurrency: { name: 'Function X', symbol: 'FX', decimals: 18 },
    infoURL: 'https://functionx.io/',
    shortName: 'FxCore',
    chainId: 530,
    networkId: 530,
    icon: 'fxcore',
    explorers: [
      {
        name: 'FunctionX Explorer',
        url: 'https://fx-evm.functionx.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Candle',
    chain: 'Candle',
    rpc: [ 'https://candle-rpc.com/', 'https://rpc.cndlchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'CANDLE', symbol: 'CNDL', decimals: 18 },
    infoURL: 'https://candlelabs.org/',
    shortName: 'CNDL',
    chainId: 534,
    networkId: 534,
    slip44: 674,
    explorers: [
      {
        name: 'candleexplorer',
        url: 'https://candleexplorer.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'OpTrust Mainnet',
    chain: 'OpTrust',
    rpc: [ 'https://rpc.optrust.io' ],
    faucets: [],
    nativeCurrency: { name: 'BSC', symbol: 'BNB', decimals: 18 },
    infoURL: 'https://optrust.io',
    shortName: 'optrust',
    chainId: 537,
    networkId: 537,
    icon: 'optrust',
    explorers: [
      {
        name: 'OpTrust explorer',
        url: 'https://scan.optrust.io',
        icon: 'optrust',
        standard: 'none'
      }
    ]
  },
  {
    name: 'PAWCHAIN Testnet',
    chain: 'PAW',
    rpc: [ 'https://pawchainx.com/' ],
    faucets: [],
    nativeCurrency: { name: 'PAW', symbol: 'PAW', decimals: 18 },
    infoURL: 'https://pawchainx.com/',
    shortName: 'PAW',
    chainId: 542,
    networkId: 542,
    slip44: 1,
    explorers: [
      {
        name: 'PAWCHAIN Testnet',
        url: 'https://pawscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Testnet',
    chain: 'Flow',
    rpc: [ 'https://testnet.evm.nodes.onflow.org' ],
    faucets: [ 'https://testnet-faucet.onflow.org' ],
    nativeCurrency: { name: 'FLOW', symbol: 'FLOW', decimals: 18 },
    infoURL: 'https://developers.flow.com/evm/about',
    shortName: 'flow-testnet',
    chainId: 545,
    networkId: 545,
    icon: 'flowevm',
    explorers: [
      {
        name: 'Flow Diver',
        url: 'https://testnet.flowdiver.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Vela1 Chain Mainnet',
    chain: 'VELA1',
    rpc: [ 'https://rpc.velaverse.io' ],
    faucets: [],
    nativeCurrency: { name: 'CLASS COIN', symbol: 'CLASS', decimals: 18 },
    infoURL: 'https://velaverse.io',
    shortName: 'CLASS',
    chainId: 555,
    networkId: 555,
    explorers: [
      {
        name: 'Vela1 Chain Mainnet Explorer',
        url: 'https://exp.velaverse.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Tao Network',
    chain: 'TAO',
    rpc: [
      'https://rpc.testnet.tao.network',
      'http://rpc.testnet.tao.network:8545',
      'https://rpc.tao.network',
      'wss://rpc.tao.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Tao', symbol: 'TAO', decimals: 18 },
    infoURL: 'https://tao.network',
    shortName: 'tao',
    chainId: 558,
    networkId: 558
  },
  {
    name: 'Dogechain Testnet',
    chain: 'DC',
    icon: 'dogechain',
    rpc: [ 'https://rpc-testnet.dogechain.dog' ],
    faucets: [ 'https://faucet.dogechain.dog' ],
    nativeCurrency: { name: 'Dogecoin', symbol: 'DOGE', decimals: 18 },
    infoURL: 'https://dogechain.dog',
    shortName: 'dct',
    chainId: 568,
    networkId: 568,
    slip44: 1,
    explorers: [
      {
        name: 'dogechain testnet explorer',
        url: 'https://explorer-testnet.dogechain.dog',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Rollux Mainnet',
    chain: 'SYS',
    rpc: [
      'https://rpc.rollux.com',
      'wss://rpc.rollux.com/wss',
      'https://rollux.rpc.syscoin.org',
      'wss://rollux.rpc.syscoin.org/wss'
    ],
    faucets: [ 'https://rollux.id/faucetapp' ],
    nativeCurrency: { name: 'Syscoin', symbol: 'SYS', decimals: 18 },
    infoURL: 'https://rollux.com',
    shortName: 'sys-rollux',
    chainId: 570,
    networkId: 570,
    explorers: [
      {
        name: 'Rollux Explorer',
        url: 'https://explorer.rollux.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'MetaChain Mainnet',
    chain: 'MTC',
    icon: 'metachain',
    rpc: [ 'https://rpc.metatime.com' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Metatime Coin', symbol: 'MTC', decimals: 18 },
    infoURL: 'https://metatime.com/en',
    shortName: 'metatime',
    chainId: 571,
    networkId: 571,
    slip44: 571,
    explorers: [
      {
        name: 'MetaExplorer',
        url: 'https://explorer.metatime.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Filenova Mainnet',
    chain: 'Filenova',
    rpc: [ 'https://rpc.filenova.org' ],
    faucets: [],
    nativeCurrency: { name: 'Filecoin', symbol: 'FIL', decimals: 18 },
    infoURL: 'https://filenova.org',
    shortName: 'filenova',
    chainId: 579,
    networkId: 579,
    icon: 'filenova',
    explorers: [
      {
        name: 'filenova explorer',
        url: 'https://scan.filenova.org',
        icon: 'filenova',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Metis Stardust Testnet',
    chain: 'ETH',
    rpc: [ 'https://stardust.metis.io/?owner=588' ],
    faucets: [],
    nativeCurrency: { name: 'tMetis', symbol: 'METIS', decimals: 18 },
    infoURL: 'https://www.metis.io',
    shortName: 'metis-stardust',
    chainId: 588,
    networkId: 588,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://stardust-explorer.metis.io',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-4',
      bridges: [ { url: 'https://bridge.metis.io' } ]
    },
    status: 'deprecated'
  },
  {
    name: 'Astar',
    chain: 'ASTR',
    rpc: [ 'https://rpc.astar.network:8545' ],
    faucets: [],
    nativeCurrency: { name: 'Astar', symbol: 'ASTR', decimals: 18 },
    infoURL: 'https://astar.network/',
    shortName: 'astr',
    chainId: 592,
    networkId: 592,
    icon: 'astar',
    explorers: [
      {
        name: 'subscan',
        url: 'https://astar.subscan.io',
        standard: 'none',
        icon: 'subscan'
      },
      {
        name: 'blockscout',
        url: 'https://blockscout.com/astar',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Acala Mandala Testnet TC9',
    chain: 'mACA',
    rpc: [
      'https://eth-rpc-tc9.aca-staging.network',
      'wss://eth-rpc-tc9.aca-staging.network'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Acala Mandala Token', symbol: 'mACA', decimals: 18 },
    infoURL: 'https://acala.network',
    shortName: 'maca',
    chainId: 595,
    networkId: 595,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.mandala.aca-staging.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Karura Network Testnet',
    chain: 'KAR',
    rpc: [
      'https://eth-rpc-karura-testnet.aca-staging.network',
      'wss://eth-rpc-karura-testnet.aca-staging.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Karura Token', symbol: 'KAR', decimals: 18 },
    infoURL: 'https://karura.network',
    shortName: 'tkar',
    chainId: 596,
    networkId: 596,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.karura-testnet.aca-staging.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Acala Network Testnet',
    chain: 'ACA',
    rpc: [
      'https://eth-rpc-acala-testnet.aca-staging.network',
      'wss://eth-rpc-acala-testnet.aca-staging.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Acala Token', symbol: 'ACA', decimals: 18 },
    infoURL: 'https://acala.network',
    shortName: 'taca',
    chainId: 597,
    networkId: 597,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.acala-dev.aca-dev.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Metis Goerli Testnet',
    chain: 'ETH',
    rpc: [ 'https://goerli.gateway.metisdevops.link' ],
    faucets: [ 'https://goerli.faucet.metisdevops.link' ],
    nativeCurrency: { name: 'Goerli Metis', symbol: 'METIS', decimals: 18 },
    infoURL: 'https://www.metis.io',
    shortName: 'metis-goerli',
    chainId: 599,
    networkId: 599,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://goerli.explorer.metisdevops.link',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-4',
      bridges: [ { url: 'https://testnet-bridge.metis.io' } ]
    }
  },
  {
    name: 'Meshnyan testnet',
    chain: 'MeshTestChain',
    rpc: [],
    faucets: [],
    nativeCurrency: {
      name: 'Meshnyan Testnet Native Token',
      symbol: 'MESHT',
      decimals: 18
    },
    infoURL: '',
    shortName: 'mesh-chain-testnet',
    chainId: 600,
    networkId: 600,
    slip44: 1
  },
  {
    name: 'Vine Testnet',
    chain: 'VINE',
    rpc: [ 'https://rpc-testnet.vne.network' ],
    faucets: [ 'https://vne.network/rose' ],
    nativeCurrency: { name: 'VINE', symbol: 'VNE', decimals: 18 },
    infoURL: 'https://www.peer.inc',
    shortName: 'VINE',
    chainId: 601,
    networkId: 601,
    icon: 'vine',
    explorers: [
      {
        name: 'Vine Explorer',
        url: 'https://vne.network/rose',
        standard: 'none',
        icon: 'vine'
      }
    ]
  },
  {
    name: 'EIOB Mainnet',
    chain: 'EIOB',
    icon: 'eiob',
    rpc: [ 'https://rpc.eiob.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'EIOB', symbol: 'EIOB', decimals: 18 },
    infoURL: '',
    shortName: 'eiob',
    chainId: 612,
    networkId: 612,
    explorers: [
      {
        name: 'EIOB Explorer',
        url: 'https://explorer.eiob.xyz',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Graphlinq Blockchain Mainnet',
    chain: 'GLQ Blockchain',
    rpc: [ 'https://glq-dataseed.graphlinq.io' ],
    faucets: [],
    nativeCurrency: { name: 'GLQ', symbol: 'GLQ', decimals: 18 },
    infoURL: 'https://graphlinq.io',
    shortName: 'glq',
    chainId: 614,
    networkId: 614,
    explorers: [
      {
        name: 'GLQ Explorer',
        url: 'https://explorer.graphlinq.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Avocado',
    chain: 'Avocado',
    rpc: [ 'https://rpc.avocado.instadapp.io' ],
    faucets: [],
    nativeCurrency: { name: 'USDC', symbol: 'USDC', decimals: 18 },
    infoURL: 'https://avocado.instadapp.io',
    shortName: 'avocado',
    chainId: 634,
    networkId: 634,
    icon: 'avocado',
    explorers: [
      {
        name: 'avoscan',
        url: 'https://avoscan.co',
        icon: 'avocado',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Previewnet',
    chain: 'Flow',
    rpc: [ 'https://previewnet.evm.nodes.onflow.org' ],
    faucets: [ 'https://previewnet-faucet.onflow.org' ],
    nativeCurrency: { name: 'FLOW', symbol: 'FLOW', decimals: 18 },
    infoURL: 'https://developers.flow.com/evm/about',
    shortName: 'flow-previewnet',
    chainId: 646,
    networkId: 646,
    icon: 'flowevm',
    explorers: [
      {
        name: 'Flow Diver',
        url: 'https://previewnet.flowdiver.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'SX Network Testnet',
    chain: 'SX',
    icon: 'SX',
    rpc: [ 'https://rpc.toronto.sx.technology' ],
    faucets: [ 'https://faucet.toronto.sx.technology' ],
    nativeCurrency: { name: 'SX Network', symbol: 'SX', decimals: 18 },
    infoURL: 'https://www.sx.technology',
    shortName: 'SX-Testnet',
    chainId: 647,
    networkId: 647,
    slip44: 1,
    explorers: [
      {
        name: 'SX Network Toronto Explorer',
        url: 'https://explorer.toronto.sx.technology',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Endurance Smart Chain Mainnet',
    chain: 'ACE',
    rpc: [ 'https://rpc-endurance.fusionist.io/' ],
    faucets: [],
    nativeCurrency: {
      name: 'Endurance Chain Native Token',
      symbol: 'ACE',
      decimals: 18
    },
    infoURL: 'https://ace.fusionist.io/',
    shortName: 'ace',
    chainId: 648,
    networkId: 648,
    explorers: [
      {
        name: 'Endurance Scan',
        url: 'https://explorer.endurance.fusionist.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Kalichain Testnet',
    chain: 'Kalichain',
    rpc: [ 'https://rpc.kalichain.com' ],
    faucets: [],
    nativeCurrency: { name: 'kalis', symbol: 'KALIS', decimals: 18 },
    infoURL: 'https://kalichain.com',
    shortName: 'kalichain',
    chainId: 653,
    networkId: 653,
    icon: 'kalichain',
    explorers: [
      {
        name: 'kalichain explorer',
        url: 'https://explorer.kalichain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Kalichain',
    chain: 'Kalichain',
    rpc: [ 'https://mainnet.kalichain.com' ],
    faucets: [],
    nativeCurrency: { name: 'kalis', symbol: 'KALIS', decimals: 18 },
    infoURL: 'https://kalichain.com',
    shortName: 'kalichainMainnet',
    chainId: 654,
    networkId: 654,
    icon: 'kalichain',
    explorers: [
      {
        name: 'kalichain explorer',
        url: 'https://explorer.kalichain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Pixie Chain Testnet',
    chain: 'PixieChain',
    rpc: [
      'https://http-testnet.chain.pixie.xyz',
      'wss://ws-testnet.chain.pixie.xyz'
    ],
    faucets: [ 'https://chain.pixie.xyz/faucet' ],
    nativeCurrency: {
      name: 'Pixie Chain Testnet Native Token',
      symbol: 'PCTT',
      decimals: 18
    },
    infoURL: 'https://scan-testnet.chain.pixie.xyz',
    shortName: 'pixie-chain-testnet',
    chainId: 666,
    networkId: 666,
    slip44: 1
  },
  {
    name: 'LAOS Arrakis',
    title: 'LAOS Testnet Arrakis',
    chain: 'LAOS',
    icon: 'laos',
    rpc: [
      'https://arrakis.gorengine.com/own',
      'wss://arrakis.gorengine.com/own'
    ],
    faucets: [],
    nativeCurrency: { name: 'LAOS', symbol: 'LAOS', decimals: 18 },
    infoURL: 'https://www.laosfoundation.io/',
    shortName: 'laos',
    chainId: 667,
    networkId: 667,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://arrakis.gorengine.com',
        icon: 'laos',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'JuncaChain',
    chain: 'JuncaChain',
    rpc: [ 'https://rpc.juncachain.com' ],
    nativeCurrency: { name: 'JuncaChain Native Token', symbol: 'JGC', decimals: 18 },
    faucets: [],
    infoURL: 'https://junca-cash.world',
    shortName: 'junca',
    chainId: 668,
    networkId: 668,
    explorers: [
      {
        name: 'JuncaScan',
        url: 'https://scan.juncachain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'JuncaChain testnet',
    chain: 'JuncaChain testnet',
    rpc: [
      'https://rpc-testnet.juncachain.com',
      'wss://ws-testnet.juncachain.com'
    ],
    faucets: [ 'https://faucet-testnet.juncachain.com' ],
    nativeCurrency: {
      name: 'JuncaChain Testnet Native Token',
      symbol: 'JGCT',
      decimals: 18
    },
    infoURL: 'https://junca-cash.world',
    shortName: 'juncat',
    chainId: 669,
    networkId: 669,
    slip44: 1,
    explorers: [
      {
        name: 'JuncaScan',
        url: 'https://scan-testnet.juncachain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Karura Network',
    chain: 'KAR',
    rpc: [
      'https://eth-rpc-karura.aca-api.network',
      'wss://eth-rpc-karura.aca-api.network'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Karura Token', symbol: 'KAR', decimals: 18 },
    infoURL: 'https://acala.network/karura',
    shortName: 'kar',
    chainId: 686,
    networkId: 686,
    slip44: 686,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.karura.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Star Social Testnet',
    chain: 'SNS',
    rpc: [ 'https://avastar.cc/ext/bc/C/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Social', symbol: 'SNS', decimals: 18 },
    infoURL: 'https://info.avastar.cc',
    shortName: 'SNS',
    chainId: 700,
    networkId: 700,
    slip44: 1,
    explorers: [
      {
        name: 'starscan',
        url: 'https://avastar.info',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BlockChain Station Mainnet',
    chain: 'BCS',
    rpc: [
      'https://rpc-mainnet.bcsdev.io',
      'wss://rpc-ws-mainnet.bcsdev.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'BCS Token', symbol: 'BCS', decimals: 18 },
    infoURL: 'https://blockchainstation.io',
    shortName: 'bcs',
    chainId: 707,
    networkId: 707,
    explorers: [
      {
        name: 'BlockChain Station Explorer',
        url: 'https://explorer.bcsdev.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BlockChain Station Testnet',
    chain: 'BCS',
    rpc: [
      'https://rpc-testnet.bcsdev.io',
      'wss://rpc-ws-testnet.bcsdev.io'
    ],
    faucets: [ 'https://faucet.bcsdev.io' ],
    nativeCurrency: { name: 'BCS Testnet Token', symbol: 'tBCS', decimals: 18 },
    infoURL: 'https://blockchainstation.io',
    shortName: 'tbcs',
    chainId: 708,
    networkId: 708,
    slip44: 1,
    explorers: [
      {
        name: 'BlockChain Station Explorer',
        url: 'https://testnet.bcsdev.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Highbury',
    chain: 'HIGHBURY',
    rpc: [ 'https://highbury.furya.io', 'https://rest.furya.io' ],
    faucets: [],
    nativeCurrency: { name: 'Fury', symbol: 'FURY', decimals: 18 },
    infoURL: 'https://www.fury.black',
    shortName: 'fury',
    chainId: 710,
    networkId: 710,
    icon: 'highbury',
    explorers: [
      {
        name: 'Furya EVM Explorer',
        url: 'https://explorer.furya.io',
        standard: 'EIP3091',
        icon: 'highbury'
      }
    ]
  },
  {
    name: 'Vrcscan Mainnet',
    chain: 'VRC',
    rpc: [
      'https://rpc-mainnet-5.vrcscan.com',
      'https://rpc-mainnet-6.vrcscan.com',
      'https://rpc-mainnet-7.vrcscan.com',
      'https://rpc-mainnet-8.vrcscan.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'VRC Chain', symbol: 'VRC', decimals: 18 },
    infoURL: 'https://vrccoin.com',
    shortName: 'vrc',
    chainId: 713,
    networkId: 713,
    explorers: [
      {
        name: 'vrcscan',
        url: 'https://vrcscan.com',
        standard: 'EIP3091'
      },
      {
        name: 'dxbscan',
        url: 'https://dxb.vrcscan.com',
        standard: 'EIP3091'
      }
    ],
    icon: 'vrcscan'
  },
  {
    name: 'Shibarium Beta',
    chain: 'Shibarium',
    icon: 'shibarium',
    rpc: [ 'https://puppynet.shibrpc.com' ],
    faucets: [],
    nativeCurrency: { name: 'BONE', symbol: 'BONE', decimals: 18 },
    infoURL: 'https://beta.shibariumtech.com',
    shortName: 'shibarium',
    chainId: 719,
    networkId: 719,
    explorers: [
      {
        name: 'shibscan',
        url: 'https://puppyscan.shib.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Lycan Chain',
    chain: 'LYC',
    rpc: [ 'https://rpc.lycanchain.com/' ],
    faucets: [],
    nativeCurrency: { name: 'Lycan', symbol: 'LYC', decimals: 18 },
    infoURL: 'https://lycanchain.com',
    shortName: 'LYC',
    chainId: 721,
    networkId: 721,
    icon: 'lycanchain',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.lycanchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Blucrates',
    chain: 'BLU',
    rpc: [ 'https://data.bluchain.pro' ],
    faucets: [],
    nativeCurrency: { name: 'Blucrates', symbol: 'BLU', decimals: 18 },
    infoURL: 'https://www.blucrates.com',
    shortName: 'blu',
    chainId: 727,
    networkId: 727,
    slip44: 727
  },
  {
    name: 'Lovely Network Mainnet',
    chain: 'Lovely',
    icon: 'lovely',
    rpc: [ 'https://rpc.lovely.network' ],
    faucets: [],
    nativeCurrency: { name: 'Lovely', symbol: 'LOVELY', decimals: 18 },
    infoURL: 'https://lovely.network',
    shortName: 'LOVELY',
    chainId: 730,
    networkId: 730,
    explorers: [
      {
        name: 'Lovely Network Mainnet',
        url: 'https://scan.lovely.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Canto Testnet',
    chain: 'Canto Tesnet',
    rpc: [ 'https://eth.plexnode.wtf/' ],
    faucets: [],
    nativeCurrency: { name: 'Canto', symbol: 'CANTO', decimals: 18 },
    infoURL: 'https://canto.io',
    shortName: 'tcanto',
    chainId: 740,
    networkId: 740,
    slip44: 1,
    explorers: [
      {
        name: 'Canto Tesnet Explorer (Neobase)',
        url: 'https://testnet-explorer.canto.neobase.one',
        standard: 'none'
      }
    ],
    status: 'deprecated'
  },
  {
    name: 'Vention Smart Chain Testnet',
    chain: 'VSCT',
    icon: 'ventionTestnet',
    rpc: [ 'https://node-testnet.vention.network' ],
    faucets: [ 'https://faucet.vention.network' ],
    nativeCurrency: { name: 'VNT', symbol: 'VNT', decimals: 18 },
    infoURL: 'https://testnet.ventionscan.io',
    shortName: 'vsct',
    chainId: 741,
    networkId: 741,
    slip44: 1,
    explorers: [
      {
        name: 'ventionscan',
        url: 'https://testnet.ventionscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Script Testnet',
    chain: 'SPAY',
    rpc: [ 'https://testeth-rpc-api.script.tv/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Script', symbol: 'SPAY', decimals: 18 },
    infoURL: 'https://token.script.tv',
    shortName: 'SPAY',
    chainId: 742,
    networkId: 742,
    slip44: 1,
    explorers: [
      {
        name: 'Script Explorer',
        url: 'https://explorer.script.tv',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Mainnet',
    chain: 'Flow',
    rpc: [ 'https://mainnet.evm.nodes.onflow.org' ],
    faucets: [],
    nativeCurrency: { name: 'FLOW', symbol: 'FLOW', decimals: 18 },
    infoURL: 'https://developers.flow.com/evm/about',
    shortName: 'flow-mainnet',
    chainId: 747,
    networkId: 747,
    icon: 'flowevm',
    explorers: [
      {
        name: 'Flow Diver',
        url: 'https://flowdiver.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'QL1',
    chain: 'QOM',
    status: 'incubating',
    rpc: [ 'https://rpc.qom.one' ],
    faucets: [],
    nativeCurrency: { name: 'Shiba Predator', symbol: 'QOM', decimals: 18 },
    infoURL: 'https://qom.one',
    shortName: 'qom',
    chainId: 766,
    networkId: 766,
    icon: 'qom',
    explorers: [
      {
        name: 'QL1 Mainnet Explorer',
        url: 'https://mainnet.qom.one',
        icon: 'qom',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'OpenChain Testnet',
    chain: 'OpenChain Testnet',
    rpc: [],
    faucets: [ 'https://faucet.openchain.info/' ],
    nativeCurrency: { name: 'Openchain Testnet', symbol: 'TOPC', decimals: 18 },
    infoURL: 'https://testnet.openchain.info/',
    shortName: 'opc',
    chainId: 776,
    networkId: 776,
    slip44: 1,
    explorers: [
      {
        name: 'OPEN CHAIN TESTNET',
        url: 'https://testnet.openchain.info',
        standard: 'none'
      }
    ]
  },
  {
    name: 'cheapETH',
    chain: 'cheapETH',
    rpc: [ 'https://node.cheapeth.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'cTH', symbol: 'cTH', decimals: 18 },
    infoURL: 'https://cheapeth.org/',
    shortName: 'cth',
    chainId: 777,
    networkId: 777
  },
  {
    name: 'MAAL Chain',
    chain: 'MAAL',
    icon: 'maal',
    rpc: [
      'https://node1-mainnet.maalscan.io/',
      'https://node2-mainnet.maalscan.io/',
      'https://node3-mainnet.maalscan.io/'
    ],
    faucets: [],
    nativeCurrency: { name: 'MAAL', symbol: 'MAAL', decimals: 18 },
    infoURL: 'https://www.maalchain.com/',
    shortName: 'maal',
    chainId: 786,
    networkId: 786,
    explorers: [
      {
        name: 'maalscan',
        url: 'https://maalscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Acala Network',
    chain: 'ACA',
    rpc: [
      'https://eth-rpc-acala.aca-api.network',
      'wss://eth-rpc-acala.aca-api.network'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Acala Token', symbol: 'ACA', decimals: 18 },
    infoURL: 'https://acala.network',
    shortName: 'aca',
    chainId: 787,
    networkId: 787,
    slip44: 787,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.acala.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Aerochain Testnet',
    chain: 'Aerochain',
    rpc: [ 'https://testnet-rpc.aerochain.id/' ],
    faucets: [ 'https://faucet.aerochain.id/' ],
    nativeCurrency: { name: 'Aerochain Testnet', symbol: 'TAero', decimals: 18 },
    infoURL: 'https://aerochaincoin.org/',
    shortName: 'taero',
    chainId: 788,
    networkId: 788,
    slip44: 1,
    explorers: [
      {
        name: 'aeroscan',
        url: 'https://testnet.aeroscan.id',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Patex',
    chain: 'ETH',
    icon: 'patex',
    rpc: [ 'https://rpc.patex.io/' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://patex.io/',
    shortName: 'peth',
    chainId: 789,
    networkId: 789,
    explorers: [
      {
        name: 'patexscan',
        url: 'https://patexscan.io',
        icon: 'patex',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Rupaya Testnet',
    chain: 'Rupaya Testnet',
    rpc: [ 'https://rpc.testnet.rupaya.io' ],
    faucets: [ 'https://faucet.testnet.rupaya.io' ],
    nativeCurrency: { name: 'Test Rupaya', symbol: 'TRUPX', decimals: 18 },
    infoURL: 'https://www.rupaya.io',
    shortName: 'RupayaTestnet',
    chainId: 799,
    networkId: 799,
    slip44: 1,
    explorers: [
      {
        name: 'rupayascan',
        url: 'https://scan.testnet.rupaya.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Lucid Blockchain',
    chain: 'Lucid',
    icon: 'lucid',
    rpc: [ 'https://rpc.lucidcoin.io' ],
    faucets: [ 'https://faucet.lucidcoin.io' ],
    nativeCurrency: { name: 'LUCID', symbol: 'LUCID', decimals: 18 },
    infoURL: 'https://lucidcoin.io',
    shortName: 'LUCID',
    chainId: 800,
    networkId: 800,
    explorers: [
      {
        name: 'Lucid Explorer',
        url: 'https://explorer.lucidcoin.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Haic',
    chain: 'Haic',
    rpc: [ 'https://orig.haichain.io/' ],
    faucets: [],
    nativeCurrency: { name: 'Haicoin', symbol: 'HAIC', decimals: 18 },
    infoURL: 'https://www.haichain.io/',
    shortName: 'haic',
    chainId: 803,
    networkId: 803
  },
  {
    name: 'Portal Fantasy Chain Test',
    chain: 'PF',
    icon: 'pf',
    rpc: [ 'https://subnets.avax.network/portal-fantasy/testnet/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Portal Fantasy Token', symbol: 'PFT', decimals: 18 },
    infoURL: 'https://portalfantasy.io',
    shortName: 'PFTEST',
    chainId: 808,
    networkId: 808,
    slip44: 1,
    explorers: []
  },
  {
    name: 'Haven1 Testnet',
    chain: 'haven1',
    rpc: [ 'https://testnet-rpc.haven1.org' ],
    faucets: [ 'https://www.haven1.org/faucet' ],
    nativeCurrency: { name: 'Haven1', symbol: 'H1', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://www.haven1.org',
    shortName: 'h1',
    chainId: 810,
    networkId: 810,
    icon: 'haven1',
    explorers: [
      {
        name: 'Haven1 Explorer',
        url: 'https://testnet-explorer.haven1.org',
        icon: 'haven1',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Qitmeer Network Mainnet',
    chain: 'MEER',
    rpc: [
      'https://evm-dataseed1.meerscan.io',
      'https://evm-dataseed2.meerscan.io',
      'https://evm-dataseed3.meerscan.io',
      'https://evm-dataseed.meerscan.com',
      'https://qng.rpc.qitmeer.io',
      'https://mainnet.meerlabs.com',
      'https://rpc.dimai.ai',
      'https://rpc.woowow.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'Qitmeer', symbol: 'MEER', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'meer',
    chainId: 813,
    networkId: 813,
    slip44: 813,
    icon: 'meer',
    explorers: [
      {
        name: 'meerscan',
        icon: 'meer',
        url: 'https://qng.qitmeer.io',
        standard: 'EIP3091'
      },
      {
        name: 'meerscan',
        icon: 'meer',
        url: 'https://qng.meerscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Firechain zkEVM',
    title: 'Firechain zkEVM',
    chain: 'Firechain',
    rpc: [ 'https://rpc-zkevm.thefirechain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://docs.thefirechain.com/',
    shortName: 'firechan-zkEVM',
    chainId: 814,
    networkId: 814,
    icon: 'firechain',
    explorers: [],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://zkevm-bridge-rpc.thefirechain.com' } ]
    }
  },
  {
    name: 'BeOne Chain Mainnet',
    chain: 'BOC',
    icon: 'beonechain',
    rpc: [
      'https://dataseed1.beonechain.com',
      'https://dataseed2.beonechain.com',
      'https://dataseed-us1.beonechain.com',
      'https://dataseed-us2.beonechain.com',
      'https://dataseed-uk1.beonechain.com',
      'https://dataseed-uk2.beonechain.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'BeOne Chain Mainnet', symbol: 'BOC', decimals: 18 },
    infoURL: 'https://beonechain.com',
    shortName: 'BOC',
    chainId: 818,
    networkId: 818,
    slip44: 8181,
    explorers: [
      {
        name: 'BeOne Chain Mainnet',
        url: 'https://beonescan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Callisto Mainnet',
    chain: 'CLO',
    rpc: [ 'https://rpc.callisto.network/' ],
    faucets: [],
    nativeCurrency: { name: 'Callisto', symbol: 'CLO', decimals: 18 },
    infoURL: 'https://callisto.network',
    shortName: 'clo',
    chainId: 820,
    networkId: 1,
    slip44: 820
  },
  {
    name: 'Callisto Testnet Deprecated',
    chain: 'CLO',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Callisto Testnet Ether', symbol: 'TCLO', decimals: 18 },
    infoURL: 'https://callisto.network',
    shortName: 'tclo',
    chainId: 821,
    networkId: 2,
    slip44: 1,
    status: 'deprecated'
  },
  {
    name: 'Runic Chain Testnet',
    chain: 'Runic',
    rpc: [ 'https://rpc-testnet.runic.build' ],
    faucets: [ 'https://faucet.runic.build' ],
    nativeCurrency: { name: 'Bitcoin', symbol: 'rBTC', decimals: 18 },
    infoURL: 'https://runic.build',
    shortName: 'runic-testnet',
    chainId: 822,
    networkId: 822,
    status: 'active',
    icon: 'runic-testnet',
    explorers: [
      {
        name: 'RunicScan',
        url: 'https://scan.runic.build',
        icon: 'runic-testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CheckDot Blockchain Devnet',
    chain: 'CDT Blockchain',
    rpc: [ 'https://devnet.checkdot.io' ],
    faucets: [],
    nativeCurrency: { name: 'CDT', symbol: 'CDT', decimals: 18 },
    infoURL: 'https://checkdot.io',
    shortName: 'cdt',
    chainId: 831,
    networkId: 831,
    explorers: [
      {
        name: 'CDT Explorer',
        url: 'https://explorer.checkdot.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Taraxa Mainnet',
    chain: 'Tara',
    icon: 'taraxa',
    rpc: [ 'https://rpc.mainnet.taraxa.io/' ],
    faucets: [],
    nativeCurrency: { name: 'Tara', symbol: 'TARA', decimals: 18 },
    infoURL: 'https://taraxa.io',
    shortName: 'tara',
    chainId: 841,
    networkId: 841,
    explorers: [
      {
        name: 'Taraxa Explorer',
        url: 'https://explorer.mainnet.taraxa.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Taraxa Testnet',
    chain: 'Tara',
    icon: 'taraxa',
    rpc: [ 'https://rpc.testnet.taraxa.io/' ],
    faucets: [],
    nativeCurrency: { name: 'Tara', symbol: 'TARA', decimals: 18 },
    infoURL: 'https://taraxa.io',
    shortName: 'taratest',
    chainId: 842,
    networkId: 842,
    slip44: 1,
    explorers: [
      {
        name: 'Taraxa Explorer',
        url: 'https://explorer.testnet.taraxa.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Zeeth Chain Dev',
    chain: 'ZeethChainDev',
    rpc: [ 'https://rpc.dev.zeeth.io' ],
    faucets: [],
    nativeCurrency: { name: 'Zeeth Token', symbol: 'ZTH', decimals: 18 },
    infoURL: '',
    shortName: 'zeethdev',
    chainId: 859,
    networkId: 859,
    explorers: [
      {
        name: 'Zeeth Explorer Dev',
        url: 'https://explorer.dev.zeeth.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Fantasia Chain Mainnet',
    chain: 'FSC',
    rpc: [
      'https://mainnet-data1.fantasiachain.com/',
      'https://mainnet-data2.fantasiachain.com/',
      'https://mainnet-data3.fantasiachain.com/'
    ],
    faucets: [],
    nativeCurrency: { name: 'FST', symbol: 'FST', decimals: 18 },
    infoURL: 'https://fantasiachain.com/',
    shortName: 'FSCMainnet',
    chainId: 868,
    networkId: 868,
    explorers: [
      {
        name: 'FSCScan',
        url: 'https://explorer.fantasiachain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bandai Namco Research Verse Mainnet',
    chain: 'Bandai Namco Research Verse',
    icon: 'bnken',
    rpc: [ 'https://rpc.main.oasvrs.bnken.net' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://www.bandainamco-mirai.com/en/',
    shortName: 'BNKEN',
    chainId: 876,
    networkId: 876,
    explorers: [
      {
        name: 'Bandai Namco Research Verse Explorer',
        url: 'https://explorer.main.oasvrs.bnken.net',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-248' }
  },
  {
    name: 'Dexit Network',
    chain: 'DXT',
    rpc: [ 'https://dxt.dexit.network' ],
    faucets: [ 'https://faucet.dexit.network' ],
    nativeCurrency: { name: 'Dexit network', symbol: 'DXT', decimals: 18 },
    infoURL: 'https://dexit.network',
    shortName: 'DXT',
    chainId: 877,
    networkId: 877,
    explorers: [
      {
        name: 'dxtscan',
        url: 'https://dxtscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ambros Chain Mainnet',
    chain: 'ambroschain',
    rpc: [ 'https://api.ambros.network' ],
    faucets: [],
    nativeCurrency: { name: 'AMBROS', symbol: 'AMBROS', decimals: 18 },
    infoURL: 'https://ambros.network',
    shortName: 'ambros',
    chainId: 880,
    networkId: 880,
    explorers: [
      {
        name: 'Ambros Chain Explorer',
        url: 'https://ambrosscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Wanchain',
    chain: 'WAN',
    rpc: [ 'https://gwan-ssl.wandevs.org:56891/' ],
    faucets: [],
    nativeCurrency: { name: 'Wancoin', symbol: 'WAN', decimals: 18 },
    infoURL: 'https://www.wanscan.org',
    shortName: 'wan',
    chainId: 888,
    networkId: 888,
    slip44: 5718350
  },
  {
    name: 'MAXI Chain Testnet',
    chain: 'MAXI',
    rpc: [ 'https://rpc-testnet.maxi.network' ],
    faucets: [ 'https://faucet.maxi.network' ],
    nativeCurrency: { name: 'MAXICOIN', symbol: 'MAXI', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://maxi.network',
    shortName: 'maxi-testnet',
    chainId: 898,
    networkId: 898,
    icon: 'maxi',
    explorers: [
      {
        name: 'Maxi Chain Testnet Explorer',
        url: 'https://testnet.maxi.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Garizon Testnet Stage0',
    chain: 'GAR',
    icon: 'garizon',
    rpc: [ 'https://s0-testnet.garizon.net/rpc' ],
    faucets: [ 'https://faucet-testnet.garizon.com' ],
    nativeCurrency: { name: 'Garizon', symbol: 'GAR', decimals: 18 },
    infoURL: 'https://garizon.com',
    shortName: 'gar-test-s0',
    chainId: 900,
    networkId: 900,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer-testnet.garizon.com',
        icon: 'garizon',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Garizon Testnet Stage1',
    chain: 'GAR',
    icon: 'garizon',
    rpc: [ 'https://s1-testnet.garizon.net/rpc' ],
    faucets: [ 'https://faucet-testnet.garizon.com' ],
    nativeCurrency: { name: 'Garizon', symbol: 'GAR', decimals: 18 },
    infoURL: 'https://garizon.com',
    shortName: 'gar-test-s1',
    chainId: 901,
    networkId: 901,
    slip44: 1,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer-testnet.garizon.com',
        icon: 'garizon',
        standard: 'EIP3091'
      }
    ],
    parent: { chain: 'eip155-900', type: 'shard' }
  },
  {
    name: 'Garizon Testnet Stage2',
    chain: 'GAR',
    icon: 'garizon',
    rpc: [ 'https://s2-testnet.garizon.net/rpc' ],
    faucets: [ 'https://faucet-testnet.garizon.com' ],
    nativeCurrency: { name: 'Garizon', symbol: 'GAR', decimals: 18 },
    infoURL: 'https://garizon.com',
    shortName: 'gar-test-s2',
    chainId: 902,
    networkId: 902,
    slip44: 1,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer-testnet.garizon.com',
        icon: 'garizon',
        standard: 'EIP3091'
      }
    ],
    parent: { chain: 'eip155-900', type: 'shard' }
  },
  {
    name: 'Garizon Testnet Stage3',
    chain: 'GAR',
    icon: 'garizon',
    rpc: [ 'https://s3-testnet.garizon.net/rpc' ],
    faucets: [ 'https://faucet-testnet.garizon.com' ],
    nativeCurrency: { name: 'Garizon', symbol: 'GAR', decimals: 18 },
    infoURL: 'https://garizon.com',
    shortName: 'gar-test-s3',
    chainId: 903,
    networkId: 903,
    slip44: 1,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer-testnet.garizon.com',
        icon: 'garizon',
        standard: 'EIP3091'
      }
    ],
    parent: { chain: 'eip155-900', type: 'shard' }
  },
  {
    name: 'Portal Fantasy Chain',
    chain: 'PF',
    icon: 'pf',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Portal Fantasy Token', symbol: 'PFT', decimals: 18 },
    infoURL: 'https://portalfantasy.io',
    shortName: 'PF',
    chainId: 909,
    networkId: 909,
    explorers: [],
    status: 'incubating'
  },
  {
    name: 'DecentraBone Layer1 Testnet',
    chain: 'DBONE',
    rpc: [ 'https://layer1test.decentrabone.com' ],
    faucets: [],
    nativeCurrency: { name: 'DecentraBone', symbol: 'DBONE', decimals: 18 },
    infoURL: 'https://decentrabone.com',
    shortName: 'DBONE',
    chainId: 910,
    networkId: 910,
    slip44: 1
  },
  {
    name: 'TAPROOT Mainnet',
    title: 'TAPROOT Mainnet',
    chain: 'TAPROOT CHAIN',
    rpc: [ 'https://rpc.taprootchain.io' ],
    faucets: [],
    nativeCurrency: { name: 'TBTC', symbol: 'TBTC', decimals: 18 },
    infoURL: 'https://taprootchain.io',
    shortName: 'TAPROOT-Mainnet',
    chainId: 911,
    networkId: 911,
    icon: 'taproot',
    explorers: [
      {
        name: 'TAPROOT Scan',
        url: 'https://scan.taprootchain.io',
        icon: 'taproot',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Rinia Testnet',
    chain: 'FIRE',
    icon: 'rinia',
    rpc: [ 'https://rinia-rpc1.thefirechain.com' ],
    faucets: [ 'https://faucet.thefirechain.com' ],
    nativeCurrency: { name: 'Firechain', symbol: 'FIRE', decimals: 18 },
    infoURL: 'https://thefirechain.com',
    shortName: 'tfire',
    chainId: 917,
    networkId: 917,
    slip44: 1,
    explorers: [
      {
        name: 'FireScan',
        url: 'https://rinia.firescan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Mode Testnet',
    chain: 'ETH',
    rpc: [ 'https://sepolia.mode.network' ],
    faucets: [ 'https://sepoliafaucet.com/' ],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://docs.mode.network/',
    shortName: 'modesep',
    chainId: 919,
    networkId: 919,
    slip44: 1,
    icon: 'modeTestnet',
    explorers: [
      {
        name: 'modescout',
        url: 'https://sepolia.explorer.mode.network',
        standard: 'none'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [ { url: 'https://bridge.mode.network/' } ]
    }
  },
  {
    name: 'Yidark Chain Mainnet',
    chain: 'Yidark',
    icon: 'ydk',
    rpc: [ 'https://rpc.yidark.io' ],
    faucets: [],
    nativeCurrency: { name: 'Yidark', symbol: 'YDK', decimals: 18 },
    infoURL: 'https://yidarkscan.com',
    shortName: 'ydk',
    chainId: 927,
    networkId: 927,
    explorers: [
      {
        name: 'Yidarkscan',
        url: 'https://yidarkscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PulseChain Testnet',
    shortName: 'tpls',
    chain: 'tPLS',
    chainId: 940,
    networkId: 940,
    slip44: 1,
    infoURL: 'https://pulsechain.com/',
    rpc: [
      'https://rpc.v2.testnet.pulsechain.com/',
      'wss://rpc.v2.testnet.pulsechain.com/'
    ],
    faucets: [ 'https://faucet.v2.testnet.pulsechain.com/' ],
    status: 'deprecated',
    nativeCurrency: { name: 'Test Pulse', symbol: 'tPLS', decimals: 18 }
  },
  {
    name: 'PulseChain Testnet v2b',
    shortName: 't2bpls',
    chain: 't2bPLS',
    chainId: 941,
    networkId: 941,
    slip44: 1,
    infoURL: 'https://pulsechain.com/',
    rpc: [
      'https://rpc.v2b.testnet.pulsechain.com/',
      'wss://rpc.v2b.testnet.pulsechain.com/'
    ],
    faucets: [ 'https://faucet.v2b.testnet.pulsechain.com/' ],
    status: 'deprecated',
    nativeCurrency: { name: 'Test Pulse', symbol: 'tPLS', decimals: 18 }
  },
  {
    name: 'PulseChain Testnet v3',
    shortName: 't3pls',
    chain: 't3PLS',
    chainId: 942,
    networkId: 942,
    slip44: 1,
    infoURL: 'https://pulsechain.com/',
    rpc: [
      'https://rpc.v3.testnet.pulsechain.com/',
      'wss://rpc.v3.testnet.pulsechain.com/'
    ],
    faucets: [ 'https://faucet.v3.testnet.pulsechain.com/' ],
    status: 'deprecated',
    nativeCurrency: { name: 'Test Pulse', symbol: 'tPLS', decimals: 18 }
  },
  {
    name: 'PulseChain Testnet v4',
    shortName: 't4pls',
    chain: 't4PLS',
    chainId: 943,
    networkId: 943,
    icon: 'pulsechain',
    infoURL: 'https://pulsechain.com',
    rpc: [
      'https://rpc.v4.testnet.pulsechain.com',
      'wss://rpc.v4.testnet.pulsechain.com',
      'https://pulsechain-testnet-rpc.publicnode.com',
      'wss://pulsechain-testnet-rpc.publicnode.com',
      'https://rpc-testnet-pulsechain.g4mm4.io',
      'wss://rpc-testnet-pulsechain.g4mm4.io'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [ 'https://faucet.v4.testnet.pulsechain.com/' ],
    ens: { registry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
    status: 'active',
    slip44: 1,
    nativeCurrency: { name: 'Test Pulse', symbol: 'tPLS', decimals: 18 },
    explorers: [
      {
        name: 'blockscout',
        url: 'https://scan.v4.testnet.pulsechain.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      },
      {
        name: 'blockscout',
        url: 'https://otter-testnet-pulsechain.g4mm4.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'muNode Testnet',
    chain: 'munode',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://munode.dev/',
    shortName: 'munode',
    chainId: 956,
    networkId: 956,
    slip44: 1
  },
  {
    name: 'Lyra Chain',
    chain: 'Lyra',
    rpc: [ 'https://rpc.lyra.finance' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://lyra.finance',
    shortName: 'lyra',
    chainId: 957,
    networkId: 957,
    icon: 'lyra',
    explorers: [
      {
        name: 'Lyra Explorer',
        url: 'https://explorer.lyra.finance',
        icon: 'lyra',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BTC20 Smart Chain',
    chain: 'BTC20',
    rpc: [ 'https://rpc.bitcoincode.technology/' ],
    faucets: [],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    nativeCurrency: { name: 'BTCC', symbol: 'BTCC', decimals: 18 },
    infoURL: 'https://bitcoincode.technology',
    shortName: 'btc20',
    chainId: 963,
    networkId: 963,
    icon: 'btc20',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://scan.bitcoincode.technology',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Oort Mainnet',
    chain: 'Oort Mainnet',
    rpc: [ 'https://mainnet-rpc.oortech.com' ],
    faucets: [],
    nativeCurrency: { name: 'Oort', symbol: 'OORT', decimals: 18 },
    infoURL: 'https://oortech.com',
    shortName: 'ccn',
    chainId: 970,
    networkId: 970,
    icon: 'oort',
    explorers: [
      {
        name: 'Oort Mainnet Explorer',
        url: 'https://mainnet-scan.oortech.com',
        standard: 'none',
        icon: 'oort'
      }
    ]
  },
  {
    name: 'Oort Huygens',
    chain: 'Huygens',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Oort', symbol: 'CCN', decimals: 18 },
    infoURL: 'https://oortech.com',
    shortName: 'Huygens',
    chainId: 971,
    networkId: 971,
    icon: 'ccn'
  },
  {
    name: 'Oort Ascraeus',
    title: 'Oort Ascraeus',
    chain: 'Ascraeus',
    rpc: [ 'https://ascraeus-rpc.oortech.com' ],
    faucets: [],
    nativeCurrency: { name: 'Oort', symbol: 'CCNA', decimals: 18 },
    infoURL: 'https://oortech.com',
    shortName: 'Ascraeus',
    chainId: 972,
    networkId: 972,
    icon: 'oort',
    explorers: [
      {
        name: 'Oort Ascraeus Explorer',
        url: 'https://ascraeus-scan.oortech.com',
        standard: 'none',
        icon: 'oort'
      }
    ]
  },
  {
    name: 'Nepal Blockchain Network',
    chain: 'YETI',
    rpc: [
      'https://api.nepalblockchain.dev',
      'https://api.nepalblockchain.network'
    ],
    faucets: [ 'https://faucet.nepalblockchain.network' ],
    nativeCurrency: {
      name: 'Nepal Blockchain Network Ether',
      symbol: 'YETI',
      decimals: 18
    },
    infoURL: 'https://nepalblockchain.network',
    shortName: 'yeti',
    chainId: 977,
    networkId: 977
  },
  {
    name: 'TOP Mainnet EVM',
    chain: 'TOP',
    icon: 'top',
    rpc: [ 'https://ethapi.topnetwork.org' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://www.topnetwork.org/',
    shortName: 'top_evm',
    chainId: 980,
    networkId: 0,
    explorers: [
      {
        name: 'topscan.dev',
        url: 'https://www.topscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Memo Smart Chain Mainnet',
    chain: 'MEMO',
    rpc: [
      'https://chain.metamemo.one:8501',
      'wss://chain.metamemo.one:16801'
    ],
    faucets: [ 'https://faucet.metamemo.one/' ],
    nativeCurrency: { name: 'Memo', symbol: 'CMEMO', decimals: 18 },
    infoURL: 'www.memolabs.org',
    shortName: 'memochain',
    chainId: 985,
    networkId: 985,
    icon: 'memo',
    explorers: [
      {
        name: 'Memo Mainnet Explorer',
        url: 'https://scan.metamemo.one:8080',
        icon: 'memo',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'TOP Mainnet',
    chain: 'TOP',
    icon: 'top',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'TOP', symbol: 'TOP', decimals: 6 },
    infoURL: 'https://www.topnetwork.org/',
    shortName: 'top',
    chainId: 989,
    networkId: 0,
    explorers: [
      {
        name: 'topscan.dev',
        url: 'https://www.topscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'eLiberty Mainnet',
    chain: '$EL',
    icon: 'eLiberty',
    rpc: [ 'https://rpc.eliberty.ngo' ],
    faucets: [ 'https://faucet.eliberty.ngo' ],
    nativeCurrency: { name: 'eLiberty', symbol: '$EL', decimals: 18 },
    infoURL: 'https://eliberty.ngo',
    shortName: 'ELm',
    chainId: 990,
    networkId: 990,
    explorers: [
      {
        name: 'eLiberty Mainnet',
        url: 'https://explorer.eliberty.ngo',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: '5ireChain Thunder',
    chain: '5ireChain',
    rpc: [ 'https://rpc-testnet.5ire.network' ],
    faucets: [ 'https://explorer.5ire.network/faucet' ],
    nativeCurrency: { name: '5ire Token', symbol: '5ire', decimals: 18 },
    infoURL: 'https://5ire.org',
    shortName: '5ire',
    chainId: 997,
    networkId: 997,
    icon: '5ireChain',
    explorers: [
      {
        name: '5ireChain Explorer',
        url: 'https://explorer.5ire.network',
        standard: 'none',
        icon: '5ireChain'
      }
    ]
  },
  {
    name: 'Lucky Network',
    chain: 'LN',
    rpc: [
      'https://rpc.luckynetwork.org',
      'wss://ws.lnscan.org',
      'https://rpc.lnscan.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Lucky', symbol: 'L99', decimals: 18 },
    infoURL: 'https://luckynetwork.org',
    shortName: 'ln',
    chainId: 998,
    networkId: 998,
    icon: 'lucky',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.luckynetwork.org',
        standard: 'none'
      },
      {
        name: 'expedition',
        url: 'https://lnscan.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Wanchain Testnet',
    chain: 'WAN',
    rpc: [ 'https://gwan-ssl.wandevs.org:46891/' ],
    faucets: [],
    nativeCurrency: { name: 'Wancoin', symbol: 'WAN', decimals: 18 },
    infoURL: 'https://testnet.wanscan.org',
    shortName: 'twan',
    chainId: 999,
    networkId: 999,
    slip44: 1
  },
  {
    name: 'GTON Mainnet',
    chain: 'GTON',
    rpc: [ 'https://rpc.gton.network/' ],
    faucets: [],
    nativeCurrency: { name: 'GCD', symbol: 'GCD', decimals: 18 },
    infoURL: 'https://gton.capital',
    shortName: 'gton',
    chainId: 1000,
    networkId: 1000,
    explorers: [
      {
        name: 'GTON Network Explorer',
        url: 'https://explorer.gton.network',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-1' }
  },
  {
    name: 'Klaytn Testnet Baobab',
    chain: 'KLAY',
    rpc: [
      'https://public-en-baobab.klaytn.net',
      'https://api.baobab.klaytn.net:8651'
    ],
    faucets: [ 'https://baobab.wallet.klaytn.com/access?next=faucet' ],
    nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
    infoURL: 'https://klaytn.foundation',
    shortName: 'Baobab',
    chainId: 1001,
    networkId: 1001,
    slip44: 1,
    explorers: [
      {
        name: 'Klaytnscope',
        url: 'https://baobab.klaytnscope.com',
        standard: 'EIP3091'
      },
      {
        name: 'Klaytnfinder',
        url: 'https://baobab.klaytnfinder.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Tectum Emission Token',
    chain: 'TET',
    rpc: [ 'https://rpc.softnote.com/' ],
    faucets: [],
    nativeCurrency: { name: 'Tectum', symbol: 'TET', decimals: 8 },
    infoURL: 'https://softnote.com',
    shortName: 'tet',
    chainId: 1003,
    networkId: 1003,
    explorers: [
      {
        name: 'Tectum explorer',
        url: 'https://explorer.tectum.io',
        icon: 'Tettoken256',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'T-EKTA',
    title: 'EKTA Testnet T-EKTA',
    chain: 'T-EKTA',
    rpc: [ 'https://test.ekta.io:8545' ],
    faucets: [],
    nativeCurrency: { name: 'T-EKTA', symbol: 'T-EKTA', decimals: 18 },
    infoURL: 'https://www.ekta.io',
    shortName: 't-ekta',
    chainId: 1004,
    networkId: 1004,
    icon: 'ekta',
    explorers: [
      {
        name: 'test-ektascan',
        url: 'https://test.ektascan.io',
        icon: 'ekta',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Newton Testnet',
    chain: 'NEW',
    rpc: [ 'https://rpc1.newchain.newtonproject.org' ],
    faucets: [],
    nativeCurrency: { name: 'Newton', symbol: 'NEW', decimals: 18 },
    infoURL: 'https://www.newtonproject.org/',
    shortName: 'tnew',
    chainId: 1007,
    networkId: 1007,
    slip44: 1
  },
  {
    name: 'Eurus Mainnet',
    chain: 'EUN',
    rpc: [ 'https://mainnet.eurus.network/' ],
    faucets: [],
    nativeCurrency: { name: 'Eurus', symbol: 'EUN', decimals: 18 },
    infoURL: 'https://eurus.network',
    shortName: 'eun',
    chainId: 1008,
    networkId: 1008,
    icon: 'eurus',
    explorers: [
      {
        name: 'eurusexplorer',
        url: 'https://explorer.eurus.network',
        icon: 'eurus',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Jumbochain Mainnet',
    chain: 'Jumbo',
    rpc: [ 'https://rpcpriv.jumbochain.org' ],
    faucets: [],
    nativeCurrency: { name: 'JNFTC', symbol: 'JNFTC', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://jumbochain.org',
    shortName: 'Jumboscan',
    chainId: 1009,
    networkId: 1009,
    slip44: 1,
    explorers: [
      {
        name: 'Jumboscan',
        url: 'https://jumboscan.jumbochain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Evrice Network',
    chain: 'EVC',
    rpc: [ 'https://meta.evrice.com' ],
    faucets: [],
    nativeCurrency: { name: 'Evrice', symbol: 'EVC', decimals: 18 },
    infoURL: 'https://evrice.com',
    shortName: 'EVC',
    chainId: 1010,
    networkId: 1010,
    slip44: 1020
  },
  {
    name: 'Newton',
    chain: 'NEW',
    rpc: [ 'https://global.rpc.mainnet.newtonproject.org' ],
    faucets: [],
    nativeCurrency: { name: 'Newton', symbol: 'NEW', decimals: 18 },
    infoURL: 'https://www.newtonproject.org/',
    shortName: 'new',
    chainId: 1012,
    networkId: 1012
  },
  {
    name: 'Sakura',
    chain: 'Sakura',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Sakura', symbol: 'SKU', decimals: 18 },
    infoURL: 'https://clover.finance/sakura',
    shortName: 'sku',
    chainId: 1022,
    networkId: 1022
  },
  {
    name: 'Clover Testnet',
    chain: 'Clover',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Clover', symbol: 'CLV', decimals: 18 },
    infoURL: 'https://clover.finance',
    shortName: 'tclv',
    chainId: 1023,
    networkId: 1023,
    slip44: 1
  },
  {
    name: 'CLV Parachain',
    chain: 'CLV',
    rpc: [ 'https://api-para.clover.finance' ],
    faucets: [],
    nativeCurrency: { name: 'CLV', symbol: 'CLV', decimals: 18 },
    infoURL: 'https://clv.org',
    shortName: 'clv',
    chainId: 1024,
    networkId: 1024
  },
  {
    name: 'BitTorrent Chain Testnet',
    chain: 'BTTC',
    rpc: [ 'https://testrpc.bittorrentchain.io/' ],
    faucets: [],
    nativeCurrency: { name: 'BitTorrent', symbol: 'BTT', decimals: 18 },
    infoURL: 'https://bittorrentchain.io/',
    shortName: 'tbtt',
    chainId: 1028,
    networkId: 1028,
    slip44: 1,
    explorers: [
      {
        name: 'testbttcscan',
        url: 'https://testscan.bittorrentchain.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Conflux eSpace',
    chain: 'Conflux',
    rpc: [ 'https://evm.confluxrpc.com' ],
    faucets: [],
    nativeCurrency: { name: 'CFX', symbol: 'CFX', decimals: 18 },
    infoURL: 'https://confluxnetwork.org',
    shortName: 'cfx',
    chainId: 1030,
    networkId: 1030,
    icon: 'conflux',
    explorers: [
      {
        name: 'Conflux Scan',
        url: 'https://evm.confluxscan.net',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Proxy Network Testnet',
    chain: 'Proxy Network',
    rpc: [ 'http://128.199.94.183:8041' ],
    faucets: [],
    nativeCurrency: { name: 'PRX', symbol: 'PRX', decimals: 18 },
    infoURL: 'https://theproxy.network',
    shortName: 'prx',
    chainId: 1031,
    networkId: 1031,
    slip44: 1,
    explorers: [
      {
        name: 'proxy network testnet',
        url: 'http://testnet-explorer.theproxy.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bronos Testnet',
    chain: 'Bronos',
    rpc: [ 'https://evm-testnet.bronos.org' ],
    faucets: [ 'https://faucet.bronos.org' ],
    nativeCurrency: { name: 'tBRO', symbol: 'tBRO', decimals: 18 },
    infoURL: 'https://bronos.org',
    shortName: 'bronos-testnet',
    chainId: 1038,
    networkId: 1038,
    slip44: 1,
    icon: 'bronos',
    explorers: [
      {
        name: 'Bronos Testnet Explorer',
        url: 'https://tbroscan.bronos.org',
        standard: 'none',
        icon: 'bronos'
      }
    ]
  },
  {
    name: 'Bronos Mainnet',
    chain: 'Bronos',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'BRO', symbol: 'BRO', decimals: 18 },
    infoURL: 'https://bronos.org',
    shortName: 'bronos-mainnet',
    chainId: 1039,
    networkId: 1039,
    icon: 'bronos',
    explorers: [
      {
        name: 'Bronos Explorer',
        url: 'https://broscan.bronos.org',
        standard: 'none',
        icon: 'bronos'
      }
    ]
  },
  {
    name: 'ShimmerEVM Testnet Deprecated',
    title: 'ShimmerEVM Testnet Deprecated',
    chain: 'ShimmerEVM',
    icon: 'shimmerevm',
    rpc: [],
    faucets: [
      'https://evm-toolkit.evm.testnet.shimmer.network',
      'https://evm-faucet.testnet.shimmer.network'
    ],
    nativeCurrency: { name: 'SMR', symbol: 'SMR', decimals: 18 },
    infoURL: 'https://shimmer.network',
    shortName: 'shimmerevm-testnet-deprecated',
    chainId: 1071,
    networkId: 1071,
    slip44: 1,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.evm.testnet.shimmer.network',
        standard: 'EIP3091'
      }
    ],
    status: 'deprecated'
  },
  {
    name: 'ShimmerEVM Testnet Deprecated 1072',
    title: 'ShimmerEVM Testnet Deprecated 1072',
    chain: 'ShimmerEVM',
    icon: 'shimmerevm',
    rpc: [],
    faucets: [
      'https://evm-toolkit.evm.testnet.shimmer.network',
      'https://evm-faucet.testnet.shimmer.network'
    ],
    nativeCurrency: { name: 'SMR', symbol: 'SMR', decimals: 6 },
    infoURL: 'https://shimmer.network',
    shortName: 'shimmerevm-testnet-deprecated-1072',
    chainId: 1072,
    networkId: 1072,
    slip44: 1,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.evm.testnet.shimmer.network',
        standard: 'EIP3091'
      }
    ],
    status: 'deprecated'
  },
  {
    name: 'ShimmerEVM Testnet',
    title: 'ShimmerEVM Testnet',
    chain: 'ShimmerEVM',
    icon: 'shimmerevm',
    rpc: [ 'https://json-rpc.evm.testnet.shimmer.network' ],
    faucets: [
      'https://evm-toolkit.evm.testnet.shimmer.network',
      'https://evm-faucet.testnet.shimmer.network'
    ],
    nativeCurrency: { name: 'SMR', symbol: 'SMR', decimals: 6 },
    infoURL: 'https://shimmer.network',
    shortName: 'shimmerevm-testnet',
    chainId: 1073,
    networkId: 1073,
    slip44: 1,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.evm.testnet.shimmer.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Mintara Testnet',
    title: 'Mintara Testnet',
    chain: 'Mintara',
    icon: 'mintara',
    rpc: [ 'https://subnets.avax.network/mintara/testnet/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'MINTARA', symbol: 'MNTR', decimals: 18 },
    infoURL: 'https://playthink.co.jp',
    shortName: 'mintara-testnet',
    chainId: 1079,
    networkId: 1079,
    slip44: 1,
    explorers: [
      {
        name: 'explorer',
        url: 'https://subnets-test.avax.network/mintara',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Mintara Mainnet',
    title: 'Mintara Mainnet',
    chain: 'Mintara',
    icon: 'mintara',
    rpc: [ 'https://subnets.avax.network/mintara/mainnet/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'MINTARA', symbol: 'MNTR', decimals: 18 },
    infoURL: 'https://playthink.co.jp',
    shortName: 'mintara',
    chainId: 1080,
    networkId: 1080,
    explorers: [
      {
        name: 'explorer',
        url: 'https://subnets.avax.network/mintara',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Metis Andromeda Mainnet',
    chain: 'ETH',
    rpc: [
      'https://andromeda.metis.io/?owner=1088',
      'https://metis.drpc.org',
      'wss://metis.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Metis', symbol: 'METIS', decimals: 18 },
    infoURL: 'https://www.metis.io',
    shortName: 'metis-andromeda',
    chainId: 1088,
    networkId: 1088,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://andromeda-explorer.metis.io',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.metis.io' } ]
    }
  },
  {
    name: 'Humans.ai Mainnet',
    chain: 'Humans',
    rpc: [
      'https://jsonrpc.humans.nodestake.top',
      'https://humans-mainnet-evm.itrocket.net',
      'https://humans-evm-rpc.staketab.org:443',
      'https://evm.humans.stakepool.dev.br',
      'https://mainnet-humans-evm.konsortech.xyz',
      'https://evm-rpc.mainnet.humans.zone',
      'https://json-rpc.humans.bh.rocks',
      'https://evm-rpc.humans.huginn.tech'
    ],
    faucets: [],
    nativeCurrency: { name: 'HEART', symbol: 'HEART', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://humans.ai',
    shortName: 'humans',
    chainId: 1089,
    networkId: 1089,
    icon: 'humans-dark',
    explorers: [
      {
        name: 'explorer.guru',
        url: 'https://humans.explorers.guru',
        icon: 'humans',
        standard: 'none'
      }
    ]
  },
  {
    name: 'MOAC mainnet',
    chain: 'MOAC',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'MOAC', symbol: 'mc', decimals: 18 },
    infoURL: 'https://moac.io',
    shortName: 'moac',
    chainId: 1099,
    networkId: 1099,
    slip44: 314,
    explorers: [
      {
        name: 'moac explorer',
        url: 'https://explorer.moac.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Dymension',
    chain: 'Dymension',
    rpc: [
      'https://dymension-evm.blockpi.network/v1/rpc/public',
      'https://dymension-evm-rpc.publicnode.com',
      'wss://dymension-evm-rpc.publicnode.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'DYM', symbol: 'DYM', decimals: 18 },
    infoURL: 'https://dymension.xyz',
    shortName: 'dymension',
    icon: 'dymension',
    chainId: 1100,
    networkId: 1100,
    explorers: [
      { name: 'dym.fyi', url: 'https://dym.fyi', standard: 'EIP3091' }
    ]
  },
  {
    name: 'Polygon zkEVM',
    title: 'Polygon zkEVM',
    chain: 'Polygon',
    rpc: [
      'https://zkevm-rpc.com',
      'https://polygon-zkevm.drpc.org',
      'wss://polygon-zkevm.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://polygon.technology/polygon-zkevm',
    shortName: 'zkevm',
    chainId: 1101,
    networkId: 1101,
    icon: 'zkevm',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://zkevm.polygonscan.com',
        icon: 'zkevm',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.zkevm-rpc.com' } ]
    }
  },
  {
    name: 'BLXq Testnet',
    chain: 'BLXQ',
    icon: 'blxq',
    rpc: [ 'https://testnetq1.blx.org' ],
    faucets: [],
    nativeCurrency: { name: 'BLXQ', symbol: 'BLXQ', decimals: 18 },
    infoURL: 'https://blx.org',
    shortName: 'tblxq',
    chainId: 1107,
    networkId: 1107,
    slip44: 1,
    explorers: [
      {
        name: 'BLXq Explorer',
        url: 'https://explorer.blx.org',
        icon: 'blxq',
        standard: 'none'
      }
    ]
  },
  {
    name: 'BLXq Mainnet',
    chain: 'BLXQ',
    icon: 'blxq',
    rpc: [ 'https://mainnet.blxq.org' ],
    faucets: [],
    nativeCurrency: { name: 'BLXQ', symbol: 'BLXQ', decimals: 18 },
    infoURL: 'https://blx.org',
    shortName: 'blxq',
    chainId: 1108,
    networkId: 1108,
    explorers: [
      {
        name: 'BLXq Explorer',
        url: 'https://explorer.blxq.org',
        icon: 'blxq',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'WEMIX3.0 Mainnet',
    chain: 'WEMIX',
    rpc: [ 'https://api.wemix.com', 'wss://ws.wemix.com' ],
    faucets: [],
    nativeCurrency: { name: 'WEMIX', symbol: 'WEMIX', decimals: 18 },
    infoURL: 'https://wemix.com',
    shortName: 'wemix',
    chainId: 1111,
    networkId: 1111,
    explorers: [
      {
        name: 'WEMIX Block Explorer',
        url: 'https://explorer.wemix.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'WEMIX3.0 Testnet',
    chain: 'TWEMIX',
    rpc: [ 'https://api.test.wemix.com', 'wss://ws.test.wemix.com' ],
    faucets: [ 'https://wallet.test.wemix.com/faucet' ],
    nativeCurrency: { name: 'TestnetWEMIX', symbol: 'tWEMIX', decimals: 18 },
    infoURL: 'https://wemix.com',
    shortName: 'twemix',
    chainId: 1112,
    networkId: 1112,
    slip44: 1,
    explorers: [
      {
        name: 'WEMIX Testnet Microscope',
        url: 'https://microscope.test.wemix.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'B2 Hub Habitat Testnet',
    chain: 'BSQ',
    rpc: [ 'https://habitat-hub-rpc.bsquared.network' ],
    faucets: [],
    nativeCurrency: { name: 'BSquared Token', symbol: 'BSQ', decimals: 18 },
    infoURL: 'https://www.bsquared.network',
    shortName: 'B2Hub-testnet',
    chainId: 1113,
    networkId: 1113,
    icon: 'bsquare',
    explorers: [
      {
        name: 'B2 Hub Habitat Testnet Explorer',
        url: 'https://habitat-hub-explorer.bsquared.network',
        icon: 'bsquare',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Core Blockchain Testnet',
    chain: 'Core',
    icon: 'core',
    rpc: [ 'https://rpc.test.btcs.network/' ],
    faucets: [ 'https://scan.test.btcs.network/faucet' ],
    nativeCurrency: {
      name: 'Core Blockchain Testnet Native Token',
      symbol: 'tCORE',
      decimals: 18
    },
    infoURL: 'https://www.coredao.org',
    shortName: 'tcore',
    chainId: 1115,
    networkId: 1115,
    slip44: 1,
    explorers: [
      {
        name: 'Core Scan Testnet',
        url: 'https://scan.test.btcs.network',
        icon: 'core',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Core Blockchain Mainnet',
    chain: 'Core',
    icon: 'core',
    rpc: [
      'https://rpc.coredao.org/',
      'https://rpc-core.icecreamswap.com',
      'https://core.drpc.org',
      'wss://core.drpc.org'
    ],
    faucets: [],
    nativeCurrency: {
      name: 'Core Blockchain Native Token',
      symbol: 'CORE',
      decimals: 18
    },
    infoURL: 'https://www.coredao.org',
    shortName: 'core',
    chainId: 1116,
    networkId: 1116,
    explorers: [
      {
        name: 'Core Scan',
        url: 'https://scan.coredao.org',
        icon: 'core',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Dogcoin Mainnet',
    chain: 'DOGS',
    icon: 'dogs',
    rpc: [ 'https://mainnet-rpc.dogcoin.me' ],
    faucets: [ 'https://faucet.dogcoin.network' ],
    nativeCurrency: { name: 'Dogcoin', symbol: 'DOGS', decimals: 18 },
    infoURL: 'https://dogcoin.network',
    shortName: 'DOGSm',
    chainId: 1117,
    networkId: 1117,
    explorers: [
      {
        name: 'Dogcoin',
        url: 'https://explorer.dogcoin.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'B2 Habitat Testnet',
    title: 'B2 Habitat Testnet',
    chain: 'Habitat',
    rpc: [
      'https://b2habitat-testnet.alt.technology',
      'https://habitat-rpc.bsquared.network',
      'https://habitat-rpc-public.bsquared.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Bitcoin', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://www.bsquared.network',
    shortName: 'B2-testnet',
    chainId: 1123,
    networkId: 1123,
    icon: 'bsquare',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://habitat-explorer.bsquared.network',
        icon: 'bsquare',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-1113' }
  },
  {
    name: 'DeFiChain EVM Network Mainnet',
    chain: 'defichain-evm',
    status: 'incubating',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'DeFiChain', symbol: 'DFI', decimals: 18 },
    infoURL: 'https://meta.defichain.com/',
    shortName: 'DFI',
    chainId: 1130,
    networkId: 1130,
    slip44: 1130,
    icon: 'defichain-network',
    explorers: []
  },
  {
    name: 'DeFiChain EVM Network Testnet',
    chain: 'defichain-evm-testnet',
    status: 'incubating',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'DeFiChain', symbol: 'DFI', decimals: 18 },
    infoURL: 'https://meta.defichain.com/',
    shortName: 'DFI-T',
    chainId: 1131,
    networkId: 1131,
    slip44: 1,
    icon: 'defichain-network',
    explorers: []
  },
  {
    name: 'DeFiMetaChain Changi Testnet',
    icon: 'defichain-network',
    chain: 'DFI',
    rpc: [
      'https://dmc.mydefichain.com/changi',
      'https://testnet-dmc.mydefichain.com:20551'
    ],
    faucets: [ 'http://tc04.mydefichain.com/faucet' ],
    nativeCurrency: { name: 'DeFiChain Token', symbol: 'DFI', decimals: 18 },
    infoURL: 'https://meta.defichain.com',
    shortName: 'changi',
    chainId: 1133,
    networkId: 1133,
    explorers: [
      {
        name: 'MetaScan',
        url: 'https://meta.defiscan.live',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'AmStar Testnet',
    chain: 'AmStar',
    icon: 'amstar',
    rpc: [ 'https://testnet-rpc.amstarscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'SINSO', symbol: 'SINSO', decimals: 18 },
    infoURL: 'https://sinso.io',
    shortName: 'ASARt',
    chainId: 1138,
    networkId: 1138,
    slip44: 1,
    explorers: [
      {
        name: 'amstarscan-testnet',
        url: 'https://testnet.amstarscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'MathChain',
    chain: 'MATH',
    rpc: [
      'https://mathchain-asia.maiziqianbao.net/rpc',
      'https://mathchain-us.maiziqianbao.net/rpc'
    ],
    faucets: [],
    nativeCurrency: { name: 'MathChain', symbol: 'MATH', decimals: 18 },
    infoURL: 'https://mathchain.org',
    shortName: 'MATH',
    chainId: 1139,
    networkId: 1139
  },
  {
    name: 'MathChain Testnet',
    chain: 'MATH',
    rpc: [ 'https://galois-hk.maiziqianbao.net/rpc' ],
    faucets: [ 'https://scan.boka.network/#/Galois/faucet' ],
    nativeCurrency: { name: 'MathChain', symbol: 'MATH', decimals: 18 },
    infoURL: 'https://mathchain.org',
    shortName: 'tMATH',
    chainId: 1140,
    networkId: 1140,
    slip44: 1
  },
  {
    name: 'Symplexia Smart Chain',
    chain: 'Plexchain',
    rpc: [ 'https://plex-rpc.plexfinance.us' ],
    faucets: [],
    nativeCurrency: { name: 'Plex Native Token', symbol: 'PLEX', decimals: 18 },
    infoURL: 'https://plexfinance.us/',
    shortName: 'Plexchain',
    chainId: 1149,
    networkId: 1149,
    icon: 'plexchain',
    explorers: [
      {
        name: 'Plexchain Explorer',
        url: 'https://explorer.plexfinance.us',
        icon: 'plexchain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Origin Testnet',
    chain: 'Origin',
    rpc: [ 'https://json-rpc.origin.uptick.network' ],
    faucets: [],
    nativeCurrency: { name: 'Origin', symbol: 'UOC', decimals: 18 },
    infoURL: 'https://www.uptick.network',
    shortName: 'auoc',
    chainId: 1170,
    networkId: 1170,
    slip44: 1,
    icon: 'origin',
    explorers: [
      {
        name: 'Origin Explorer',
        url: 'https://evm-explorer.origin.uptick.network',
        icon: 'origin',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Smart Host Teknoloji TESTNET',
    chain: 'SHT',
    rpc: [ 'https://s2.tl.web.tr:4041' ],
    faucets: [],
    nativeCurrency: {
      name: 'Smart Host Teknoloji TESTNET',
      symbol: 'tSHT',
      decimals: 18
    },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://smart-host.com.tr',
    shortName: 'sht',
    chainId: 1177,
    networkId: 1177,
    slip44: 1,
    icon: 'smarthost',
    explorers: [
      {
        name: 'Smart Host Teknoloji TESTNET Explorer',
        url: 'https://s2.tl.web.tr:4000',
        icon: 'smarthost',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Iora Chain',
    chain: 'IORA',
    icon: 'iorachain',
    rpc: [ 'https://dataseed.iorachain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Iora', symbol: 'IORA', decimals: 18 },
    infoURL: 'https://iorachain.com',
    shortName: 'iora',
    chainId: 1197,
    networkId: 1197,
    explorers: [
      {
        name: 'ioraexplorer',
        url: 'https://explorer.iorachain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Evanesco Testnet',
    chain: 'Evanesco Testnet',
    rpc: [ 'https://seed5.evanesco.org:8547' ],
    faucets: [],
    nativeCurrency: { name: 'AVIS', symbol: 'AVIS', decimals: 18 },
    infoURL: 'https://evanesco.org/',
    shortName: 'avis',
    chainId: 1201,
    networkId: 1201,
    slip44: 1
  },
  {
    name: 'World Trade Technical Chain Mainnet',
    chain: 'WTT',
    rpc: [ 'https://rpc.cadaut.com', 'wss://rpc.cadaut.com/ws' ],
    faucets: [],
    nativeCurrency: { name: 'World Trade Token', symbol: 'WTT', decimals: 18 },
    infoURL: 'http://www.cadaut.com',
    shortName: 'wtt',
    chainId: 1202,
    networkId: 2048,
    explorers: [
      {
        name: 'WTTScout',
        url: 'https://explorer.cadaut.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Popcateum Mainnet',
    chain: 'POPCATEUM',
    rpc: [ 'https://dataseed.popcateum.org' ],
    faucets: [],
    nativeCurrency: { name: 'Popcat', symbol: 'POP', decimals: 18 },
    infoURL: 'https://popcateum.org',
    shortName: 'popcat',
    chainId: 1213,
    networkId: 1213,
    explorers: [
      {
        name: 'popcateum explorer',
        url: 'https://explorer.popcateum.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'EnterChain Mainnet',
    chain: 'ENTER',
    rpc: [ 'https://tapi.entercoin.net/' ],
    faucets: [],
    nativeCurrency: { name: 'EnterCoin', symbol: 'ENTER', decimals: 18 },
    infoURL: 'https://entercoin.net',
    shortName: 'enter',
    chainId: 1214,
    networkId: 1214,
    icon: 'enter',
    explorers: [
      {
        name: 'Enter Explorer - Expenter',
        url: 'https://explorer.entercoin.net',
        icon: 'enter',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Hybrid Testnet',
    chain: 'HYB',
    icon: 'hybridIcon',
    rpc: [ 'https://testnet-rpc.buildonhybrid.com' ],
    faucets: [],
    nativeCurrency: { name: 'Hybrid', symbol: 'HYB', decimals: 18 },
    infoURL: 'https://buildonhybrid.com',
    shortName: 'hyb',
    chainId: 1224,
    networkId: 1224,
    explorers: [
      {
        name: 'Hybrid Testnet',
        url: 'https://explorer.buildonhybrid.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Exzo Network Mainnet',
    chain: 'EXZO',
    icon: 'exzo',
    rpc: [ 'https://mainnet.exzo.technology' ],
    faucets: [],
    nativeCurrency: { name: 'Exzo', symbol: 'XZO', decimals: 18 },
    infoURL: 'https://exzo.network',
    shortName: 'xzo',
    chainId: 1229,
    networkId: 1229,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://exzoscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ultron Testnet',
    chain: 'Ultron',
    icon: 'ultron',
    rpc: [ 'https://ultron-dev.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ultron', symbol: 'ULX', decimals: 18 },
    infoURL: 'https://ultron.foundation',
    shortName: 'UltronTestnet',
    chainId: 1230,
    networkId: 1230,
    slip44: 1,
    explorers: [
      {
        name: 'Ultron Testnet Explorer',
        url: 'https://explorer.ultron-dev.io',
        icon: 'ultron',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Ultron Mainnet',
    chain: 'Ultron',
    icon: 'ultron',
    rpc: [ 'https://ultron-rpc.net' ],
    faucets: [],
    nativeCurrency: { name: 'Ultron', symbol: 'ULX', decimals: 18 },
    infoURL: 'https://ultron.foundation',
    shortName: 'UtronMainnet',
    chainId: 1231,
    networkId: 1231,
    explorers: [
      {
        name: 'Ultron Explorer',
        url: 'https://ulxscan.com',
        icon: 'ultron',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Step Network',
    title: 'Step Main Network',
    chain: 'STEP',
    icon: 'step',
    rpc: [ 'https://rpc.step.network' ],
    faucets: [],
    nativeCurrency: { name: 'FITFI', symbol: 'FITFI', decimals: 18 },
    infoURL: 'https://step.network',
    shortName: 'step',
    chainId: 1234,
    networkId: 1234,
    explorers: [
      {
        name: 'StepScan',
        url: 'https://stepscan.io',
        icon: 'step',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-43114',
      bridges: [ { url: 'https://bridge.step.network' } ]
    }
  },
  {
    name: 'ARC Mainnet',
    chain: 'ARC',
    icon: 'arc',
    rpc: [ 'https://rpc-main-1.archiechain.io' ],
    faucets: [],
    nativeCurrency: { name: 'ARC', symbol: 'ARC', decimals: 18 },
    infoURL: 'https://archiechain.io/',
    shortName: 'ARC',
    chainId: 1243,
    networkId: 1243,
    explorers: [
      {
        name: 'archiescan',
        url: 'https://app.archiescan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ARC Testnet',
    chain: 'ARC',
    icon: 'arc',
    rpc: [ 'https://rpc-test-1.archiechain.io' ],
    faucets: [ 'https://faucet.archiechain.io' ],
    nativeCurrency: { name: 'ARC', symbol: 'ARC', decimals: 18 },
    infoURL: 'https://archiechain.io/',
    shortName: 'TARC',
    chainId: 1244,
    networkId: 1244,
    slip44: 1,
    explorers: [
      {
        name: 'archiescan',
        url: 'https://testnet.archiescan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'OM Platform Mainnet',
    chain: 'omplatform',
    rpc: [ 'https://rpc-cnx.omplatform.com/' ],
    faucets: [],
    nativeCurrency: { name: 'OMCOIN', symbol: 'OM', decimals: 18 },
    infoURL: 'https://omplatform.com/',
    shortName: 'om',
    chainId: 1246,
    networkId: 1246,
    explorers: [
      {
        name: 'OMSCAN - Expenter',
        url: 'https://omscan.omplatform.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Dogether Mainnet',
    chain: 'Dogether',
    rpc: [ 'https://rpc.dogether.dog/' ],
    faucets: [],
    nativeCurrency: { name: 'Dogether', symbol: 'dogeth', decimals: 18 },
    infoURL: 'https://www.dogether.dog/',
    shortName: 'Dogether',
    chainId: 1248,
    networkId: 1248,
    explorers: [
      {
        name: 'DogetherExplorer',
        url: 'https://explorer.dogether.dog',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CIC Chain Testnet',
    chain: 'CICT',
    rpc: [ 'https://testapi.cicscan.com' ],
    faucets: [ 'https://cicfaucet.com' ],
    nativeCurrency: { name: 'Crazy Internet Coin', symbol: 'CICT', decimals: 18 },
    infoURL: 'https://www.cicchain.net',
    shortName: 'CICT',
    chainId: 1252,
    networkId: 1252,
    slip44: 1,
    icon: 'cicchain',
    explorers: [
      {
        name: 'CICscan',
        url: 'https://testnet.cicscan.com',
        icon: 'cicchain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'HALO Mainnet',
    chain: 'HALO',
    rpc: [ 'https://nodes.halo.land' ],
    faucets: [],
    nativeCurrency: { name: 'HALO', symbol: 'HO', decimals: 18 },
    infoURL: 'https://halo.land/#/',
    shortName: 'HO',
    chainId: 1280,
    networkId: 1280,
    explorers: [
      {
        name: 'HALOexplorer',
        url: 'https://browser.halo.land',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Moonbeam',
    chain: 'MOON',
    rpc: [
      'https://rpc.api.moonbeam.network',
      'wss://wss.api.moonbeam.network',
      'https://moonbeam-rpc.publicnode.com',
      'wss://moonbeam-rpc.publicnode.com',
      'https://moonbeam.drpc.org',
      'wss://moonbeam.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Glimmer', symbol: 'GLMR', decimals: 18 },
    infoURL: 'https://moonbeam.network/networks/moonbeam/',
    shortName: 'mbeam',
    chainId: 1284,
    networkId: 1284,
    explorers: [
      {
        name: 'moonscan',
        url: 'https://moonbeam.moonscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Moonriver',
    chain: 'MOON',
    rpc: [
      'https://rpc.api.moonriver.moonbeam.network',
      'wss://wss.api.moonriver.moonbeam.network',
      'https://moonriver-rpc.publicnode.com',
      'wss://moonriver-rpc.publicnode.com',
      'https://moonriver.drpc.org',
      'wss://moonriver.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Moonriver', symbol: 'MOVR', decimals: 18 },
    infoURL: 'https://moonbeam.network/networks/moonriver/',
    shortName: 'mriver',
    chainId: 1285,
    networkId: 1285,
    explorers: [
      {
        name: 'moonscan',
        url: 'https://moonriver.moonscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Moonrock old',
    chain: 'MOON',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Rocs', symbol: 'ROC', decimals: 18 },
    infoURL: '',
    shortName: 'mrock-old',
    chainId: 1286,
    networkId: 1286,
    status: 'deprecated'
  },
  {
    name: 'Moonbase Alpha',
    chain: 'MOON',
    rpc: [
      'https://rpc.api.moonbase.moonbeam.network',
      'wss://wss.api.moonbase.moonbeam.network',
      'https://moonbase-alpha.drpc.org',
      'wss://moonbase-alpha.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Dev', symbol: 'DEV', decimals: 18 },
    infoURL: 'https://docs.moonbeam.network/networks/testnet/',
    shortName: 'mbase',
    chainId: 1287,
    networkId: 1287,
    slip44: 1,
    explorers: [
      {
        name: 'moonscan',
        url: 'https://moonbase.moonscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Moonrock',
    chain: 'MOON',
    rpc: [
      'https://rpc.api.moonrock.moonbeam.network',
      'wss://wss.api.moonrock.moonbeam.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Rocs', symbol: 'ROC', decimals: 18 },
    infoURL: 'https://docs.moonbeam.network/learn/platform/networks/overview/',
    shortName: 'mrock',
    chainId: 1288,
    networkId: 1288
  },
  {
    name: 'Swisstronik Testnet',
    chain: 'SWTR',
    rpc: [ 'https://json-rpc.testnet.swisstronik.com' ],
    faucets: [ 'https://faucet.testnet.swisstronik.com' ],
    nativeCurrency: { name: 'Swisstronik', symbol: 'SWTR', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://www.swisstronik.com',
    shortName: 'swtr',
    chainId: 1291,
    networkId: 1291,
    slip44: 1,
    icon: 'swisstronik',
    explorers: [
      {
        name: 'Swisstronik Scout',
        url: 'https://explorer-evm.testnet.swisstronik.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Bobabeam',
    chain: 'Bobabeam',
    status: 'deprecated',
    rpc: [
      'https://bobabeam.boba.network',
      'wss://wss.bobabeam.boba.network',
      'https://replica.bobabeam.boba.network',
      'wss://replica-wss.bobabeam.boba.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Boba Token', symbol: 'BOBA', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'Bobabeam',
    chainId: 1294,
    networkId: 1294,
    explorers: [
      {
        name: 'Bobabeam block explorer',
        url: 'https://blockexplorer.bobabeam.boba.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Bobabase Testnet',
    chain: 'Bobabase Testnet',
    status: 'deprecated',
    rpc: [
      'https://bobabase.boba.network',
      'wss://wss.bobabase.boba.network',
      'https://replica.bobabase.boba.network',
      'wss://replica-wss.bobabase.boba.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Boba Token', symbol: 'BOBA', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'Bobabase',
    chainId: 1297,
    networkId: 1297,
    slip44: 1,
    explorers: [
      {
        name: 'Bobabase block explorer',
        url: 'https://blockexplorer.bobabase.boba.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Dos Fuji Subnet',
    chain: 'DOS',
    rpc: [ 'https://test.doschain.com/jsonrpc' ],
    faucets: [],
    nativeCurrency: { name: 'Dos Native Token', symbol: 'DOS', decimals: 18 },
    infoURL: 'http://doschain.io/',
    shortName: 'TDOS',
    chainId: 1311,
    networkId: 1311,
    explorers: [
      {
        name: 'dos-testnet',
        url: 'https://test.doscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Alyx Mainnet',
    chain: 'ALYX',
    rpc: [ 'https://rpc.alyxchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Alyx Chain Native Token', symbol: 'ALYX', decimals: 18 },
    infoURL: 'https://www.alyxchain.com',
    shortName: 'alyx',
    chainId: 1314,
    networkId: 1314,
    explorers: [
      {
        name: 'alyxscan',
        url: 'https://www.alyxscan.com',
        standard: 'EIP3091'
      }
    ],
    icon: 'alyx'
  },
  {
    name: 'AIA Mainnet',
    chain: 'AIA',
    icon: 'aia',
    rpc: [
      'https://aia-dataseed1.aiachain.org',
      'https://aia-dataseed2.aiachain.org',
      'https://aia-dataseed3.aiachain.org',
      'https://aia-dataseed4.aiachain.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'AIA Mainnet', symbol: 'AIA', decimals: 18 },
    infoURL: 'https://aiachain.org/',
    shortName: 'aia',
    chainId: 1319,
    networkId: 1319,
    explorers: [
      {
        name: 'AIA Chain Explorer Mainnet',
        url: 'https://aiascan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'AIA Testnet',
    chain: 'AIA',
    icon: 'aia',
    rpc: [ 'https://aia-dataseed1-testnet.aiachain.org' ],
    faucets: [ 'https://aia-faucet-testnet.aiachain.org' ],
    nativeCurrency: { name: 'AIA Testnet', symbol: 'AIA', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://aiachain.org',
    shortName: 'aiatestnet',
    chainId: 1320,
    networkId: 1320,
    slip44: 1,
    explorers: [
      {
        name: 'AIA Chain Explorer Testnet',
        url: 'https://testnet.aiascan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Geth Testnet',
    title: 'Go Ethereum (Geth) Private Testnet',
    chain: 'ETH',
    rpc: [ 'http://127.0.0.1:8545' ],
    faucets: [],
    nativeCurrency: { name: 'Geth Testnet Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://geth.ethereum.org',
    shortName: 'geth',
    chainId: 1337,
    networkId: 1337,
    slip44: 1
  },
  {
    name: 'Elysium Testnet',
    title: 'An L1, carbon-neutral, tree-planting, metaverse dedicated blockchain created by VulcanForged',
    chain: 'Elysium',
    rpc: [ 'https://elysium-test-rpc.vulcanforged.com' ],
    faucets: [],
    nativeCurrency: { name: 'LAVA', symbol: 'LAVA', decimals: 18 },
    infoURL: 'https://elysiumscan.vulcanforged.com',
    shortName: 'ELST',
    chainId: 1338,
    networkId: 1338,
    slip44: 1,
    explorers: [
      {
        name: 'Elysium testnet explorer',
        url: 'https://elysium-explorer.vulcanforged.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Elysium Mainnet',
    title: 'An L1, carbon-neutral, tree-planting, metaverse dedicated blockchain created by VulcanForged',
    chain: 'Elysium',
    rpc: [ 'https://rpc.elysiumchain.tech/' ],
    faucets: [],
    nativeCurrency: { name: 'LAVA', symbol: 'LAVA', decimals: 18 },
    infoURL: 'https://elysiumscan.vulcanforged.com',
    shortName: 'ELSM',
    chainId: 1339,
    networkId: 1339,
    explorers: [
      {
        name: 'Elysium mainnet explorer',
        url: 'https://explorer.elysiumchain.tech',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Blitz Subnet',
    chain: 'BLITZ',
    rpc: [ 'https://subnets.avax.network/blitz/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'BLITZ GAS', symbol: 'BGAS', decimals: 18 },
    infoURL: 'https://blitz.gg',
    shortName: 'blitz',
    chainId: 1343,
    networkId: 1343,
    explorers: [
      {
        name: 'BLITZ Explorer',
        url: 'https://subnets-test.avax.network/blitz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CIC Chain Mainnet',
    chain: 'CIC',
    rpc: [ 'https://xapi.cicscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'Crazy Internet Coin', symbol: 'CIC', decimals: 18 },
    infoURL: 'https://www.cicchain.net',
    shortName: 'CIC',
    chainId: 1353,
    networkId: 1353,
    icon: 'cicchain',
    explorers: [
      {
        name: 'CICscan',
        url: 'https://cicscan.com',
        icon: 'cicchain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Zafirium Mainnet',
    chain: 'ZAFIC',
    icon: 'zafirium',
    rpc: [ 'https://mainnet.zakumi.io' ],
    faucets: [],
    nativeCurrency: {
      name: 'Zakumi Chain Native Token',
      symbol: 'ZAFIC',
      decimals: 18
    },
    infoURL: 'https://www.zakumi.io',
    shortName: 'zafic',
    chainId: 1369,
    networkId: 1369,
    explorers: [
      {
        name: 'zafirium-explorer',
        url: 'https://explorer.zakumi.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Kalar Chain',
    chain: 'KLC',
    icon: 'kalarchain',
    rpc: [ 'https://rpc-api.kalarchain.tech' ],
    faucets: [],
    nativeCurrency: { name: 'Kalar', symbol: 'KLC', decimals: 18 },
    infoURL: 'https://kalarchain.tech',
    shortName: 'KLC',
    chainId: 1379,
    networkId: 1379,
    explorers: [
      {
        name: 'kalarscan',
        url: 'https://explorer.kalarchain.tech',
        icon: 'kalarscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'AmStar Mainnet',
    chain: 'AmStar',
    icon: 'amstar',
    rpc: [ 'https://mainnet-rpc.amstarscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'SINSO', symbol: 'SINSO', decimals: 18 },
    infoURL: 'https://sinso.io',
    shortName: 'ASAR',
    chainId: 1388,
    networkId: 1388,
    explorers: [
      {
        name: 'amstarscan',
        url: 'https://mainnet.amstarscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Joseon Mainnet',
    chain: 'Joseon',
    icon: 'joseon',
    rpc: [ 'https://rpc.modchain.net/blockchain.joseon.com/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Joseon Mun', symbol: 'JSM', decimals: 18 },
    infoURL: 'https://www.joseon.com/',
    shortName: 'mun',
    chainId: 1392,
    networkId: 1392,
    explorers: [
      {
        name: 'BlockExplorer',
        url: 'https://www.blockexplorer.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Polygon zkEVM Testnet old',
    title: 'Polygon zkEVM Testnet',
    chain: 'Polygon',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://polygon.technology/solutions/polygon-zkevm/',
    shortName: 'zkevmtest',
    chainId: 1402,
    networkId: 1402,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.public.zkevm-test.net',
        standard: 'EIP3091'
      }
    ],
    status: 'deprecated'
  },
  {
    name: 'Polygon zkEVM Testnet Pre Audit-Upgraded',
    title: 'Polygon zkEVM Testnet Pre Audit-Upgraded',
    chain: 'Polygon',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://polygon.technology/solutions/polygon-zkevm/',
    shortName: 'testnet-zkEVM-mango-pre-audit-upgraded',
    chainId: 1422,
    networkId: 1422,
    slip44: 1,
    explorers: [
      {
        name: 'Polygon zkEVM explorer',
        url: 'https://explorer.public.zkevm-test.net',
        standard: 'EIP3091'
      }
    ],
    status: 'deprecated'
  },
  {
    name: 'Rikeza Network Mainnet',
    title: 'Rikeza Network Mainnet',
    chain: 'Rikeza',
    icon: 'rikeza',
    rpc: [ 'https://rpc.rikscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'Rikeza', symbol: 'RIK', decimals: 18 },
    infoURL: 'https://rikeza.io',
    shortName: 'RIK',
    chainId: 1433,
    networkId: 1433,
    explorers: [
      {
        name: 'Rikeza Blockchain explorer',
        url: 'https://rikscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Living Assets Mainnet',
    chain: 'LAS',
    icon: 'livingassets',
    rpc: [
      'https://beta.mainnet.livingassets.io/rpc',
      'https://gamma.mainnet.livingassets.io/rpc'
    ],
    faucets: [],
    nativeCurrency: { name: 'LAS', symbol: 'LAS', decimals: 18 },
    infoURL: 'https://dev.livingassets.io/',
    shortName: 'LAS',
    chainId: 1440,
    networkId: 1440
  },
  {
    name: 'Polygon zkEVM Testnet',
    title: 'Polygon zkEVM Testnet',
    chain: 'Polygon',
    rpc: [
      'https://rpc.public.zkevm-test.net',
      'https://polygon-zkevm-testnet.drpc.org',
      'wss://polygon-zkevm-testnet.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://polygon.technology/solutions/polygon-zkevm/',
    shortName: 'testnet-zkEVM-mango',
    chainId: 1442,
    networkId: 1442,
    slip44: 1,
    explorers: [
      {
        name: 'Polygon zkEVM explorer',
        url: 'https://explorer.public.zkevm-test.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'GIL Testnet',
    chain: 'GIL',
    icon: 'gauss',
    rpc: [ 'https://rpc.giltestnet.com' ],
    faucets: [],
    nativeCurrency: { name: 'GANG', symbol: 'GANG', decimals: 18 },
    infoURL: 'https://gaussgang.com/',
    shortName: 'gil',
    chainId: 1452,
    networkId: 1452,
    slip44: 1,
    explorers: [
      {
        name: 'GIL Explorer',
        url: 'https://explorer.giltestnet.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'MetaChain Istanbul',
    title: 'MetaChain Testnet Istanbul',
    chain: 'MTC',
    icon: 'metachain',
    rpc: [ 'https://istanbul-rpc.metachain.dev' ],
    faucets: [ 'https://istanbul-faucet.metachain.dev' ],
    nativeCurrency: { name: 'Metatime Coin', symbol: 'MTC', decimals: 18 },
    infoURL: 'https://metatime.com/en',
    shortName: 'metatimeistanbul',
    chainId: 1453,
    networkId: 1453,
    slip44: 1453,
    explorers: [
      {
        name: 'MetaExplorer',
        url: 'https://istanbul-explorer.metachain.dev',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ctex Scan Blockchain',
    chain: 'Ctex Scan Blockchain',
    icon: 'ctex',
    rpc: [ 'https://mainnet-rpc.ctexscan.com/' ],
    faucets: [ 'https://faucet.ctexscan.com' ],
    nativeCurrency: { name: 'CTEX', symbol: 'CTEX', decimals: 18 },
    infoURL: 'https://ctextoken.io',
    shortName: 'CTEX',
    chainId: 1455,
    networkId: 1455,
    explorers: [
      {
        name: 'Ctex Scan Explorer',
        url: 'https://ctexscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Vitruveo Mainnet',
    title: 'Vitruveo is a blockchain for Creators',
    chain: 'Vitruveo',
    rpc: [ 'https://rpc.vitruveo.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Vitruveo Coin', symbol: 'VTRU', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://www.vitruveo.xyz',
    shortName: 'vitruveo',
    chainId: 1490,
    networkId: 1490,
    icon: 'vitruveo',
    explorers: [
      {
        name: 'Vitruveo Explorer',
        url: 'https://explorer.vitruveo.xyz',
        icon: 'vitruveo',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BEVM Canary',
    chain: 'ChainX',
    rpc: [
      'https://rpc-canary-1.bevm.io/',
      'https://rpc-canary-2.bevm.io/'
    ],
    faucets: [],
    nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://chainx.org',
    shortName: 'chainx',
    chainId: 1501,
    networkId: 1501,
    icon: 'bevmcanary',
    explorers: [
      {
        name: 'bevm canary scan',
        url: 'https://scan-canary.bevm.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Sherpax Mainnet',
    chain: 'Sherpax Mainnet',
    rpc: [ 'https://mainnet.sherpax.io/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'KSX', symbol: 'KSX', decimals: 18 },
    infoURL: 'https://sherpax.io/',
    shortName: 'Sherpax',
    chainId: 1506,
    networkId: 1506,
    explorers: [
      {
        name: 'Sherpax Mainnet Explorer',
        url: 'https://evm.sherpax.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Sherpax Testnet',
    chain: 'Sherpax Testnet',
    rpc: [ 'https://sherpax-testnet.chainx.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'KSX', symbol: 'KSX', decimals: 18 },
    infoURL: 'https://sherpax.io/',
    shortName: 'SherpaxTestnet',
    chainId: 1507,
    networkId: 1507,
    slip44: 1,
    explorers: [
      {
        name: 'Sherpax Testnet Explorer',
        url: 'https://evm-pre.sherpax.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Beagle Messaging Chain',
    chain: 'BMC',
    rpc: [ 'https://beagle.chat/eth' ],
    faucets: [ 'https://faucet.beagle.chat/' ],
    nativeCurrency: { name: 'Beagle', symbol: 'BG', decimals: 18 },
    infoURL: 'https://beagle.chat/',
    shortName: 'beagle',
    chainId: 1515,
    networkId: 1515,
    explorers: [
      {
        name: 'Beagle Messaging Chain Explorer',
        url: 'https://eth.beagle.chat',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Tenet',
    title: 'Tenet Mainnet',
    chain: 'TENET',
    icon: 'tenet',
    rpc: [
      'https://rpc.tenet.org',
      'https://tenet-evm.publicnode.com',
      'wss://tenet-evm.publicnode.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'TENET', symbol: 'TENET', decimals: 18 },
    infoURL: 'https://tenet.org/',
    shortName: 'tenet',
    chainId: 1559,
    networkId: 1559,
    explorers: [
      {
        name: 'TenetScan Mainnet',
        url: 'https://tenetscan.io',
        icon: 'tenet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ethereum Inscription Mainnet',
    chain: 'ETINS',
    rpc: [ 'https://rpc.etins.org' ],
    faucets: [],
    nativeCurrency: { name: 'Ethereum Inscription', symbol: 'ETINS', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://www.etins.org',
    shortName: 'etins',
    chainId: 1617,
    networkId: 1617,
    explorers: [
      {
        name: 'Ethereum Inscription Explorer',
        url: 'https://explorer.etins.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Catecoin Chain Mainnet',
    chain: 'Catechain',
    rpc: [ 'https://send.catechain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Catecoin', symbol: 'CATE', decimals: 18 },
    infoURL: 'https://catechain.com',
    shortName: 'cate',
    chainId: 1618,
    networkId: 1618
  },
  {
    name: 'Atheios',
    chain: 'ATH',
    rpc: [ 'https://rpc.atheios.org/' ],
    faucets: [],
    nativeCurrency: { name: 'Atheios Ether', symbol: 'ATH', decimals: 18 },
    infoURL: 'https://atheios.org',
    shortName: 'ath',
    chainId: 1620,
    networkId: 11235813,
    slip44: 1620
  },
  {
    name: 'Btachain',
    chain: 'btachain',
    rpc: [ 'https://dataseed1.btachain.com/' ],
    faucets: [],
    nativeCurrency: { name: 'Bitcoin Asset', symbol: 'BTA', decimals: 18 },
    infoURL: 'https://bitcoinasset.io/',
    shortName: 'bta',
    chainId: 1657,
    networkId: 1657
  },
  {
    name: 'Liquichain',
    shortName: 'Liquichain',
    chain: 'LQC',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Licoin', symbol: 'LCN', decimals: 18 },
    infoURL: 'https://liquichain.io/',
    chainId: 1662,
    networkId: 1662,
    explorers: [
      {
        name: 'Liquichain Mainnet',
        url: 'https://mainnet.liquichain.io',
        standard: 'EIP3091'
      }
    ],
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'Horizen Gobi Testnet',
    shortName: 'Gobi',
    chain: 'Gobi',
    icon: 'eon',
    rpc: [
      'https://gobi-rpc.horizenlabs.io/ethv1',
      'https://rpc.ankr.com/horizen_gobi_testnet'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [ 'https://faucet.horizen.io' ],
    nativeCurrency: { name: 'Testnet Zen', symbol: 'tZEN', decimals: 18 },
    infoURL: 'https://horizen.io/',
    chainId: 1663,
    networkId: 1663,
    slip44: 1,
    explorers: [
      {
        name: 'Gobi Testnet Block Explorer',
        url: 'https://gobi-explorer.horizen.io',
        icon: 'eon',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Mint Testnet',
    chain: 'ETH',
    rpc: [ 'https://testnet-rpc.mintchain.io' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://www.mintchain.io',
    shortName: 'minttest',
    chainId: 1686,
    networkId: 1686,
    icon: 'mintTestnet',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet-explorer.mintchain.io',
        icon: 'mintTestnet',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://testnet-bridge.mintchain.io' } ]
    }
  },
  {
    name: 'Mint Sepolia Testnet',
    chain: 'ETH',
    rpc: [ 'https://sepolia-testnet-rpc.mintchain.io' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://www.mintchain.io',
    shortName: 'mintsepoliatest',
    chainId: 1687,
    networkId: 1687,
    icon: 'mintTestnet',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://sepolia-testnet-explorer.mintchain.io',
        icon: 'mintTestnet',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://sepolia-testnet-bridge.mintchain.io' } ]
    }
  },
  {
    name: 'LUDAN Mainnet',
    chain: 'LUDAN',
    rpc: [ 'https://rpc.ludan.org/' ],
    faucets: [],
    nativeCurrency: { name: 'LUDAN', symbol: 'LUDAN', decimals: 18 },
    infoURL: 'https://www.ludan.org/',
    shortName: 'LUDAN',
    icon: 'ludan',
    chainId: 1688,
    networkId: 1688
  },
  {
    name: 'Anytype EVM Chain',
    chain: 'ETH',
    icon: 'any',
    rpc: [ 'https://geth.anytype.io' ],
    faucets: [ 'https://evm.anytype.io/faucet' ],
    nativeCurrency: { name: 'ANY', symbol: 'ANY', decimals: 18 },
    infoURL: 'https://evm.anytype.io',
    shortName: 'AnytypeChain',
    chainId: 1701,
    networkId: 1701,
    explorers: [
      {
        name: 'Anytype Explorer',
        url: 'https://explorer.anytype.io',
        icon: 'any',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'TBSI Mainnet',
    title: 'Thai Blockchain Service Infrastructure Mainnet',
    chain: 'TBSI',
    rpc: [ 'https://rpc.blockchain.or.th' ],
    faucets: [],
    nativeCurrency: { name: 'Jinda', symbol: 'JINDA', decimals: 18 },
    infoURL: 'https://blockchain.or.th',
    shortName: 'TBSI',
    chainId: 1707,
    networkId: 1707,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://exp.blockchain.or.th',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'TBSI Testnet',
    title: 'Thai Blockchain Service Infrastructure Testnet',
    chain: 'TBSI',
    rpc: [ 'https://rpc.testnet.blockchain.or.th' ],
    faucets: [ 'https://faucet.blockchain.or.th' ],
    nativeCurrency: { name: 'Jinda', symbol: 'JINDA', decimals: 18 },
    infoURL: 'https://blockchain.or.th',
    shortName: 'tTBSI',
    chainId: 1708,
    networkId: 1708,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://exp.testnet.blockchain.or.th',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Doric Network',
    chain: 'DRC',
    icon: 'doric',
    rpc: [ 'https://mainnet.doric.network' ],
    faucets: [],
    nativeCurrency: { name: 'Doric Native Token', symbol: 'DRC', decimals: 18 },
    infoURL: 'https://doric.network',
    shortName: 'DRC',
    chainId: 1717,
    networkId: 1717,
    explorers: [
      {
        name: 'Doric Explorer',
        url: 'https://explorer.doric.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Palette Chain Mainnet',
    chain: 'PLT',
    rpc: [ 'https://palette-rpc.com:22000' ],
    faucets: [],
    nativeCurrency: { name: 'Palette Token', symbol: 'PLT', decimals: 18 },
    features: [],
    infoURL: 'https://hashpalette.com/',
    shortName: 'PCM',
    chainId: 1718,
    networkId: 1718,
    icon: 'PLT',
    explorers: [
      {
        name: 'Palettescan',
        url: 'https://palettescan.com',
        icon: 'PLT',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Reya Network',
    chain: 'Reya',
    rpc: [ 'https://rpc.reya.network', 'wss://ws.reya.network' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://reya.network',
    shortName: 'reya',
    chainId: 1729,
    networkId: 1729,
    explorers: [
      {
        name: 'Reya Network Explorer',
        url: 'https://explorer.reya.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PartyChain',
    chain: 'mainnet',
    rpc: [
      'https://tea.mining4people.com/rpc',
      'http://172.104.194.36:8545'
    ],
    faucets: [],
    nativeCurrency: { name: 'Grams', symbol: 'GRAMS', decimals: 18 },
    infoURL: 'TeaPartyCrypto.com',
    shortName: 'TeaParty',
    chainId: 1773,
    networkId: 1773,
    icon: 'grams',
    status: 'incubating',
    explorers: [
      {
        name: 'PartyExplorer',
        url: 'https://partyexplorer.co',
        icon: 'grams',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Gauss Mainnet',
    chain: 'Gauss',
    icon: 'gauss',
    rpc: [ 'https://rpc.gaussgang.com' ],
    faucets: [],
    nativeCurrency: { name: 'GANG', symbol: 'GANG', decimals: 18 },
    infoURL: 'https://gaussgang.com/',
    shortName: 'gauss',
    chainId: 1777,
    networkId: 1777,
    explorers: [
      {
        name: 'Gauss Explorer',
        url: 'https://explorer.gaussgang.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Kerleano',
    title: 'Proof of Climate awaReness testnet',
    chain: 'CRC',
    status: 'active',
    rpc: [
      'https://cacib-saturn-test.francecentral.cloudapp.azure.com',
      'wss://cacib-saturn-test.francecentral.cloudapp.azure.com:9443'
    ],
    faucets: [
      'https://github.com/ethereum-pocr/kerleano/blob/main/docs/faucet.md'
    ],
    nativeCurrency: { name: 'Climate awaReness Coin', symbol: 'CRC', decimals: 18 },
    infoURL: 'https://github.com/ethereum-pocr/kerleano',
    shortName: 'kerleano',
    chainId: 1804,
    networkId: 1804,
    slip44: 1,
    icon: 'pocr',
    explorers: [
      {
        name: 'Lite Explorer',
        url: 'https://ethereum-pocr.github.io/explorer/kerleano',
        icon: 'pocr',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Rabbit Analog Testnet Chain',
    chain: 'rAna',
    icon: 'rabbit',
    rpc: [ 'https://rabbit.analog-rpc.com' ],
    faucets: [ 'https://analogfaucet.com' ],
    nativeCurrency: {
      name: 'Rabbit Analog Test Chain Native Token ',
      symbol: 'rAna',
      decimals: 18
    },
    infoURL: 'https://rabbit.analogscan.com',
    shortName: 'rAna',
    chainId: 1807,
    networkId: 1807,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://rabbit.analogscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Cube Chain Mainnet',
    chain: 'Cube',
    icon: 'cube',
    rpc: [
      'https://http-mainnet.cube.network',
      'wss://ws-mainnet.cube.network',
      'https://http-mainnet-sg.cube.network',
      'wss://ws-mainnet-sg.cube.network',
      'https://http-mainnet-us.cube.network',
      'wss://ws-mainnet-us.cube.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Cube Chain Native Token', symbol: 'CUBE', decimals: 18 },
    infoURL: 'https://www.cube.network',
    shortName: 'cube',
    chainId: 1818,
    networkId: 1818,
    slip44: 1818,
    explorers: [
      {
        name: 'cube-scan',
        url: 'https://cubescan.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Cube Chain Testnet',
    chain: 'Cube',
    icon: 'cube',
    rpc: [
      'https://http-testnet.cube.network',
      'wss://ws-testnet.cube.network',
      'https://http-testnet-sg.cube.network',
      'wss://ws-testnet-sg.cube.network',
      'https://http-testnet-jp.cube.network',
      'wss://ws-testnet-jp.cube.network',
      'https://http-testnet-us.cube.network',
      'wss://ws-testnet-us.cube.network'
    ],
    faucets: [ 'https://faucet.cube.network' ],
    nativeCurrency: {
      name: 'Cube Chain Test Native Token',
      symbol: 'CUBET',
      decimals: 18
    },
    infoURL: 'https://www.cube.network',
    shortName: 'cubet',
    chainId: 1819,
    networkId: 1819,
    slip44: 1,
    explorers: [
      {
        name: 'cubetest-scan',
        url: 'https://testnet.cubescan.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ruby Smart Chain MAINNET',
    chain: 'RUBY',
    rpc: [
      'https://mainnet-data.rubychain.io/',
      'https://mainnet.rubychain.io/'
    ],
    nativeCurrency: {
      name: 'RUBY Smart Chain Native Token',
      symbol: 'RUBY',
      decimals: 18
    },
    infoURL: 'https://rubychain.io',
    faucets: [],
    shortName: 'RUBY',
    chainId: 1821,
    networkId: 1821,
    slip44: 1,
    icon: 'ruby',
    explorers: [
      {
        name: 'RUBY Smart Chain MAINNET Explorer',
        icon: 'ruby',
        url: 'https://rubyscan.net',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Teslafunds',
    chain: 'TSF',
    rpc: [ 'https://tsfapi.europool.me' ],
    faucets: [],
    nativeCurrency: { name: 'Teslafunds Ether', symbol: 'TSF', decimals: 18 },
    infoURL: 'https://teslafunds.io',
    shortName: 'tsf',
    chainId: 1856,
    networkId: 1
  },
  {
    name: 'Whitechain',
    chain: 'WBT',
    rpc: [ 'https://rpc.whitechain.io' ],
    faucets: [],
    nativeCurrency: { name: 'WhiteBIT Coin', symbol: 'WBT', decimals: 18 },
    infoURL: 'https://whitechain.io',
    shortName: 'wbt',
    chainId: 1875,
    networkId: 1875,
    icon: 'whitechain',
    explorers: [
      {
        name: 'whitechain-explorer',
        url: 'https://explorer.whitechain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Gitshock Cartenz Testnet',
    chain: 'Gitshock Cartenz',
    icon: 'gitshockchain',
    rpc: [ 'https://rpc.cartenz.works' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Gitshock Cartenz', symbol: 'tGTFX', decimals: 18 },
    infoURL: 'https://gitshock.com',
    shortName: 'gitshockchain',
    chainId: 1881,
    networkId: 1881,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://scan.cartenz.works',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Lightlink Phoenix Mainnet',
    chain: 'Lightlink Phoenix Mainnet',
    icon: 'lightlink',
    rpc: [ 'https://replicator.phoenix.lightlink.io/rpc/v1' ],
    features: [ { name: 'EIP155' } ],
    faucets: [],
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://lightlink.io',
    shortName: 'lightlink_phoenix',
    chainId: 1890,
    networkId: 1890,
    explorers: [
      {
        name: 'phoenix',
        url: 'https://phoenix.lightlink.io',
        icon: 'lightlink',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Lightlink Pegasus Testnet',
    chain: 'Lightlink Pegasus Testnet',
    icon: 'lightlink',
    rpc: [ 'https://replicator.pegasus.lightlink.io/rpc/v1' ],
    features: [ { name: 'EIP155' } ],
    faucets: [ 'https://faucet.pegasus.lightlink.io/' ],
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://lightlink.io',
    shortName: 'lightlink_pegasus',
    chainId: 1891,
    networkId: 1891,
    slip44: 1,
    explorers: [
      {
        name: 'pegasus',
        url: 'https://pegasus.lightlink.io',
        icon: 'lightlink',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BON Network',
    chain: 'BON',
    rpc: [ 'http://rpc.boyanet.org:8545', 'ws://rpc.boyanet.org:8546' ],
    faucets: [],
    nativeCurrency: { name: 'BOYACoin', symbol: 'BOY', decimals: 18 },
    infoURL: 'https://boyanet.org',
    shortName: 'boya',
    chainId: 1898,
    networkId: 1,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.boyanet.org:4001',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Sports Chain Network',
    chain: 'SCN',
    rpc: [ 'https://rpc.sportschainnetwork.xyz/' ],
    faucets: [],
    nativeCurrency: { name: 'SCN', symbol: 'SCN', decimals: 18 },
    infoURL: 'https://sportschainnetwork.xyz',
    shortName: 'SCN',
    chainId: 1904,
    networkId: 1904,
    icon: 'scn',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.sportschainnetwork.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bitcichain Mainnet',
    chain: 'BITCI',
    icon: 'bitci',
    rpc: [ 'https://rpc.bitci.com' ],
    faucets: [],
    nativeCurrency: { name: 'Bitci', symbol: 'BITCI', decimals: 18 },
    infoURL: 'https://www.bitcichain.com',
    shortName: 'bitci',
    chainId: 1907,
    networkId: 1907,
    explorers: [
      {
        name: 'Bitci Explorer',
        url: 'https://bitciexplorer.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bitcichain Testnet',
    chain: 'TBITCI',
    icon: 'bitci',
    rpc: [ 'https://testnet.bitcichain.com' ],
    faucets: [ 'https://faucet.bitcichain.com' ],
    nativeCurrency: { name: 'Test Bitci', symbol: 'TBITCI', decimals: 18 },
    infoURL: 'https://www.bitcichain.com',
    shortName: 'tbitci',
    chainId: 1908,
    networkId: 1908,
    slip44: 1,
    explorers: [
      {
        name: 'Bitci Explorer Testnet',
        url: 'https://testnet.bitciexplorer.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Merkle Scan',
    chain: 'MRK',
    icon: 'merklescan',
    rpc: [ 'https://marklechain-rpc.merklescan.com' ],
    faucets: [],
    nativeCurrency: { name: 'Merkle', symbol: 'MRK', decimals: 18 },
    infoURL: 'https://merklescan.com',
    shortName: 'MRK',
    chainId: 1909,
    networkId: 1909,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://merklescan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Scalind',
    chain: 'ETH',
    icon: 'scalind',
    rpc: [ 'https://rpc.scalind.com' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://scalind.com',
    shortName: 'scal',
    chainId: 1911,
    networkId: 1911,
    explorers: [
      {
        name: 'scalind',
        url: 'https://explorer.scalind.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ruby Smart Chain Testnet',
    chain: 'RUBY',
    rpc: [ 'https://testnet-rchain.rubychain.io/' ],
    nativeCurrency: {
      name: 'RUBY Smart Chain Native Token',
      symbol: 'tRUBY',
      decimals: 18
    },
    infoURL: 'https://rubychain.io',
    faucets: [ 'https://claim-faucet.rubychain.io/' ],
    shortName: 'tRUBY',
    chainId: 1912,
    networkId: 1912,
    slip44: 1,
    icon: 'ruby',
    explorers: [
      {
        name: 'RUBY Smart Chain Testnet Explorer',
        icon: 'ruby',
        url: 'https://testnet.rubyscan.net',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ONUS Chain Testnet',
    title: 'ONUS Chain Testnet',
    chain: 'onus',
    rpc: [ 'https://rpc-testnet.onuschain.io' ],
    faucets: [],
    nativeCurrency: { name: 'ONUS', symbol: 'ONUS', decimals: 18 },
    infoURL: 'https://onuschain.io',
    shortName: 'onus-testnet',
    chainId: 1945,
    networkId: 1945,
    slip44: 1,
    explorers: [
      {
        name: 'Onus explorer testnet',
        url: 'https://explorer-testnet.onuschain.io',
        icon: 'onus',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'D-Chain Mainnet',
    chain: 'D-Chain',
    rpc: [
      'https://mainnet.d-chain.network/ext/bc/2ZiR1Bro5E59siVuwdNuRFzqL95NkvkbzyLBdrsYR9BLSHV7H4/rpc'
    ],
    nativeCurrency: { name: 'DOINX', symbol: 'DOINX', decimals: 18 },
    shortName: 'dchain-mainnet',
    chainId: 1951,
    networkId: 1951,
    icon: 'dchain',
    faucets: [],
    infoURL: ''
  },
  {
    name: 'Selendra Network Testnet',
    chain: 'tSEL',
    rpc: [
      'https://rpc0-testnet.selendra.org',
      'https://rpc1-testnet.selendra.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Selendra', symbol: 'tSEL', decimals: 18 },
    infoURL: 'https://selendra.org',
    shortName: 'tSEL',
    chainId: 1953,
    networkId: 1953,
    icon: 'selendra'
  },
  {
    name: 'Dexilla Testnet',
    chain: 'Dexilla',
    rpc: [ 'https://rpc.dexilla.com' ],
    faucets: [],
    icon: 'dxz',
    nativeCurrency: { name: 'Dexilla Native Token', symbol: 'DXZ', decimals: 18 },
    infoURL: 'https://dexilla.com',
    shortName: 'Dexilla',
    chainId: 1954,
    networkId: 1954,
    slip44: 1,
    explorers: [
      {
        name: 'dos-mainnet',
        url: 'https://exp.dexilla.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [ { url: 'https://bridge.dexilla.com' } ]
    }
  },
  {
    name: 'Selendra Network Mainnet',
    chain: 'SEL',
    rpc: [ 'https://rpc0.selendra.org', 'https://rpc1.selendra.org' ],
    faucets: [],
    nativeCurrency: { name: 'Selendra', symbol: 'SEL', decimals: 18 },
    infoURL: 'https://selendra.org',
    shortName: 'SEL',
    chainId: 1961,
    networkId: 1961,
    icon: 'selendra',
    explorers: [
      {
        name: 'Selendra Scan',
        url: 'https://scan.selendra.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Eleanor',
    title: 'Metatime Testnet Eleanor',
    chain: 'MTC',
    rpc: [
      'https://rpc.metatime.com/eleanor',
      'wss://ws.metatime.com/eleanor'
    ],
    faucets: [ 'https://faucet.metatime.com/eleanor' ],
    nativeCurrency: { name: 'Eleanor Metacoin', symbol: 'MTC', decimals: 18 },
    infoURL: 'https://eleanor.metatime.com',
    shortName: 'mtc',
    chainId: 1967,
    networkId: 1967,
    slip44: 1,
    explorers: [
      {
        name: 'metaexplorer-eleanor',
        url: 'https://explorer.metatime.com/eleanor',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Super Smart Chain Testnet',
    chain: 'TSCS',
    rpc: [ 'https://testnetrpc.scschain.com' ],
    faucets: [ 'https://testnet.scschain.com' ],
    nativeCurrency: { name: 'Super Chain Native Token', symbol: 'TSCS', decimals: 18 },
    infoURL: 'https://testnet.scschain.com',
    shortName: 'tscs',
    chainId: 1969,
    networkId: 1969,
    slip44: 1,
    icon: 'super',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnetscan.scschain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Super Smart Chain Mainnet',
    chain: 'SCS',
    rpc: [ 'https://rpc.scschain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Super Chain Native Token', symbol: 'SCS', decimals: 18 },
    infoURL: 'https://scschain.com',
    shortName: 'scs',
    chainId: 1970,
    networkId: 1970,
    icon: 'super',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://scan.scschain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Atelier',
    title: 'Atelier Test Network',
    chain: 'ALTR',
    rpc: [ 'https://1971.network/atlr', 'wss://1971.network/atlr' ],
    faucets: [],
    nativeCurrency: { name: 'ATLR', symbol: 'ATLR', decimals: 18 },
    infoURL: 'https://1971.network/',
    shortName: 'atlr',
    chainId: 1971,
    networkId: 1971,
    slip44: 1,
    icon: 'atlr'
  },
  {
    name: 'RedeCoin',
    chain: 'REDEV2',
    rpc: [ 'https://rpc2.redecoin.eu' ],
    faucets: [],
    nativeCurrency: { name: 'RedeCoin', symbol: 'REDEV2', decimals: 18 },
    infoURL: 'https://www.redecoin.eu',
    shortName: 'rede',
    chainId: 1972,
    networkId: 1972,
    explorers: [
      {
        name: 'RedeCoin Explorer',
        url: 'https://explorer3.redecoin.eu',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ONUS Chain Mainnet',
    title: 'ONUS Chain Mainnet',
    chain: 'onus',
    rpc: [ 'https://rpc.onuschain.io', 'wss://ws.onuschain.io' ],
    faucets: [],
    nativeCurrency: { name: 'ONUS', symbol: 'ONUS', decimals: 18 },
    infoURL: 'https://onuschain.io',
    shortName: 'onus-mainnet',
    chainId: 1975,
    networkId: 1975,
    explorers: [
      {
        name: 'Onus explorer mainnet',
        url: 'https://explorer.onuschain.io',
        icon: 'onus',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Eurus Testnet',
    chain: 'EUN',
    rpc: [ 'https://testnet.eurus.network' ],
    faucets: [],
    nativeCurrency: { name: 'Eurus', symbol: 'EUN', decimals: 18 },
    infoURL: 'https://eurus.network',
    shortName: 'euntest',
    chainId: 1984,
    networkId: 1984,
    slip44: 1,
    icon: 'eurus',
    explorers: [
      {
        name: 'testnetexplorer',
        url: 'https://testnetexplorer.eurus.network',
        icon: 'eurus',
        standard: 'none'
      }
    ]
  },
  {
    name: 'SatoshIE',
    chain: 'TUSHY',
    rpc: [ 'http://rpc.satosh.ie' ],
    faucets: [],
    nativeCurrency: { name: 'Tushy Token', symbol: 'TUSHY', decimals: 18 },
    infoURL: 'https://satosh.ie',
    shortName: 'satoshie',
    chainId: 1985,
    networkId: 1985,
    icon: 'satoshie',
    explorers: [
      {
        name: 'mainnetexplorer',
        url: 'http://explore.satosh.ie',
        icon: 'satoshie',
        standard: 'none'
      }
    ]
  },
  {
    name: 'SatoshIE Testnet',
    chain: 'TUSHY',
    rpc: [ 'http://testnet.satosh.ie' ],
    faucets: [],
    nativeCurrency: { name: 'Tushy Token', symbol: 'TUSHY', decimals: 18 },
    infoURL: 'https://satosh.ie',
    shortName: 'satoshie_testnet',
    chainId: 1986,
    networkId: 1986,
    slip44: 1,
    icon: 'satoshie',
    explorers: [
      {
        name: 'testnetexplorer',
        url: 'http://explore-testnet.satosh.ie',
        icon: 'satoshie',
        standard: 'none'
      }
    ]
  },
  {
    name: 'EtherGem',
    chain: 'EGEM',
    rpc: [ 'https://jsonrpc.egem.io/custom' ],
    faucets: [],
    nativeCurrency: { name: 'EtherGem Ether', symbol: 'EGEM', decimals: 18 },
    infoURL: 'https://egem.io',
    shortName: 'egem',
    chainId: 1987,
    networkId: 1987,
    slip44: 1987
  },
  {
    name: 'Hubble Exchange',
    chain: 'Hubblenet',
    icon: 'hubblenet',
    rpc: [ 'https://rpc.hubble.exchange', 'wss://ws-rpc.hubble.exchange' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'USD Coin', symbol: 'USDC', decimals: 18 },
    infoURL: 'https://www.hubble.exchange',
    shortName: 'hubblenet',
    chainId: 1992,
    networkId: 1992,
    slip44: 60,
    explorers: [
      {
        name: 'routescan',
        url: 'https://explorer.hubble.exchange',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ekta',
    chain: 'EKTA',
    rpc: [ 'https://main.ekta.io' ],
    faucets: [],
    nativeCurrency: { name: 'EKTA', symbol: 'EKTA', decimals: 18 },
    infoURL: 'https://www.ekta.io',
    shortName: 'ekta',
    chainId: 1994,
    networkId: 1994,
    icon: 'ekta',
    explorers: [
      {
        name: 'ektascan',
        url: 'https://ektascan.io',
        icon: 'ekta',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'edeXa Testnet',
    chain: 'edeXa TestNetwork',
    rpc: [
      'https://testnet.edexa.com/rpc',
      'https://io-dataseed1.testnet.edexa.io-market.com/rpc'
    ],
    faucets: [ 'https://faucet.edexa.com/' ],
    nativeCurrency: { name: 'EDEXA', symbol: 'EDX', decimals: 18 },
    infoURL: 'https://edexa.com/',
    shortName: 'edx',
    chainId: 1995,
    networkId: 1995,
    slip44: 1,
    icon: 'edexa',
    explorers: [
      {
        name: 'edexa-testnet',
        url: 'https://explorer.testnet.edexa.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Kyoto Testnet',
    chain: 'KYOTO',
    rpc: [ 'https://rpc.testnet.kyotoprotocol.io:8545' ],
    faucets: [ 'https://faucet.kyotoprotocol.io' ],
    nativeCurrency: { name: 'Kyoto', symbol: 'KYOTO', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://kyotoprotocol.io',
    shortName: 'kyoto-testnet',
    chainId: 1998,
    networkId: 1998,
    slip44: 1,
    explorers: [
      {
        name: 'Kyotoscan',
        url: 'https://testnet.kyotoscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Dogechain Mainnet',
    chain: 'DC',
    icon: 'dogechain',
    rpc: [
      'https://rpc.dogechain.dog',
      'https://rpc01-sg.dogechain.dog',
      'https://rpc.ankr.com/dogechain'
    ],
    faucets: [],
    nativeCurrency: { name: 'Dogecoin', symbol: 'DOGE', decimals: 18 },
    infoURL: 'https://dogechain.dog',
    shortName: 'dc',
    chainId: 2000,
    networkId: 2000,
    explorers: [
      {
        name: 'dogechain explorer',
        url: 'https://explorer.dogechain.dog',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Milkomeda C1 Mainnet',
    chain: 'milkAda',
    icon: 'milkomeda',
    rpc: [
      'https://rpc-mainnet-cardano-evm.c1.milkomeda.com',
      'wss://rpc-mainnet-cardano-evm.c1.milkomeda.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'milkAda', symbol: 'mADA', decimals: 18 },
    infoURL: 'https://milkomeda.com',
    shortName: 'milkAda',
    chainId: 2001,
    networkId: 2001,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Milkomeda A1 Mainnet',
    chain: 'milkALGO',
    icon: 'milkomeda',
    rpc: [
      'https://rpc-mainnet-algorand-rollup.a1.milkomeda.com',
      'wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'milkALGO', symbol: 'mALGO', decimals: 18 },
    infoURL: 'https://milkomeda.com',
    shortName: 'milkALGO',
    chainId: 2002,
    networkId: 2002,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'CloudWalk Testnet',
    chain: 'CloudWalk Testnet',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'CloudWalk Native Token', symbol: 'CWN', decimals: 18 },
    infoURL: 'https://cloudwalk.io',
    shortName: 'cloudwalk_testnet',
    chainId: 2008,
    networkId: 2008,
    slip44: 1,
    explorers: [
      {
        name: 'CloudWalk Testnet Explorer',
        url: 'https://explorer.testnet.cloudwalk.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'CloudWalk Mainnet',
    chain: 'CloudWalk Mainnet',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'CloudWalk Native Token', symbol: 'CWN', decimals: 18 },
    infoURL: 'https://cloudwalk.io',
    shortName: 'cloudwalk_mainnet',
    chainId: 2009,
    networkId: 2009,
    explorers: [
      {
        name: 'CloudWalk Mainnet Explorer',
        url: 'https://explorer.mainnet.cloudwalk.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'MainnetZ Mainnet',
    chain: 'NetZ',
    icon: 'mainnetz',
    rpc: [ 'https://mainnet-rpc.mainnetz.io', 'https://eu-rpc.mainnetz.io' ],
    faucets: [],
    nativeCurrency: { name: 'MainnetZ', symbol: 'NetZ', decimals: 18 },
    infoURL: 'https://mainnetz.io',
    shortName: 'netz',
    chainId: 2016,
    networkId: 2016,
    explorers: [
      {
        name: 'MainnetZ',
        url: 'https://explorer.mainnetz.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PublicMint Devnet',
    title: 'Public Mint Devnet',
    chain: 'PublicMint',
    rpc: [ 'https://rpc.dev.publicmint.io:8545' ],
    faucets: [],
    nativeCurrency: { name: 'USD', symbol: 'USD', decimals: 18 },
    infoURL: 'https://publicmint.com',
    shortName: 'pmint_dev',
    chainId: 2018,
    networkId: 2018,
    slip44: 60,
    explorers: [
      {
        name: 'PublicMint Explorer',
        url: 'https://explorer.dev.publicmint.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PublicMint Testnet',
    title: 'Public Mint Testnet',
    chain: 'PublicMint',
    rpc: [ 'https://rpc.tst.publicmint.io:8545' ],
    faucets: [],
    nativeCurrency: { name: 'USD', symbol: 'USD', decimals: 18 },
    infoURL: 'https://publicmint.com',
    shortName: 'pmint_test',
    chainId: 2019,
    networkId: 2019,
    slip44: 1,
    explorers: [
      {
        name: 'PublicMint Explorer',
        url: 'https://explorer.tst.publicmint.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PublicMint Mainnet',
    title: 'Public Mint Mainnet',
    chain: 'PublicMint',
    rpc: [ 'https://rpc.publicmint.io:8545' ],
    faucets: [],
    nativeCurrency: { name: 'USD', symbol: 'USD', decimals: 18 },
    infoURL: 'https://publicmint.com',
    shortName: 'pmint',
    chainId: 2020,
    networkId: 2020,
    slip44: 60,
    explorers: [
      {
        name: 'PublicMint Explorer',
        url: 'https://explorer.publicmint.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Edgeware EdgeEVM Mainnet',
    chain: 'EDG',
    icon: 'edgeware',
    rpc: [
      'https://edgeware-evm.jelliedowl.net',
      'https://mainnet2.edgewa.re/evm',
      'https://mainnet3.edgewa.re/evm',
      'https://mainnet4.edgewa.re/evm',
      'https://mainnet5.edgewa.re/evm',
      'wss://edgeware.jelliedowl.net',
      'wss://mainnet2.edgewa.re',
      'wss://mainnet3.edgewa.re',
      'wss://mainnet4.edgewa.re',
      'wss://mainnet5.edgewa.re'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Edgeware', symbol: 'EDG', decimals: 18 },
    infoURL: 'https://edgeware.io',
    shortName: 'edg',
    chainId: 2021,
    networkId: 2021,
    slip44: 523,
    explorers: [
      {
        name: 'Edgscan by Bharathcoorg',
        url: 'https://edgscan.live',
        standard: 'EIP3091'
      },
      {
        name: 'Subscan',
        url: 'https://edgeware.subscan.io',
        standard: 'none',
        icon: 'subscan'
      }
    ]
  },
  {
    name: 'Beresheet BereEVM Testnet',
    chain: 'EDG',
    rpc: [
      'https://beresheet-evm.jelliedowl.net',
      'wss://beresheet.jelliedowl.net'
    ],
    faucets: [],
    nativeCurrency: { name: 'Testnet EDG', symbol: 'tEDG', decimals: 18 },
    infoURL: 'https://edgeware.io/build',
    shortName: 'edgt',
    chainId: 2022,
    networkId: 2022,
    slip44: 1,
    explorers: [
      {
        name: 'Edgscan by Bharathcoorg',
        url: 'https://testnet.edgscan.live',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Taycan Testnet',
    chain: 'Taycan',
    rpc: [ 'https://test-taycan.hupayx.io' ],
    faucets: [ 'https://ttaycan-faucet.hupayx.io/' ],
    nativeCurrency: { name: 'test-Shuffle', symbol: 'tSFL', decimals: 18 },
    infoURL: 'https://hupayx.io',
    shortName: 'taycan-testnet',
    chainId: 2023,
    networkId: 2023,
    slip44: 1,
    icon: 'shuffle',
    explorers: [
      {
        name: 'Taycan Explorer(Blockscout)',
        url: 'https://evmscan-test.hupayx.io',
        standard: 'none',
        icon: 'shuffle'
      },
      {
        name: 'Taycan Cosmos Explorer',
        url: 'https://cosmoscan-test.hupayx.io',
        standard: 'none',
        icon: 'shuffle'
      }
    ]
  },
  {
    name: 'Swan Saturn Testnet',
    chain: 'SWAN',
    rpc: [ 'https://saturn-rpc.swanchain.io' ],
    faucets: [],
    nativeCurrency: { name: 'SWANETH', symbol: 'sETH', decimals: 18 },
    infoURL: 'https://swanchain.io/',
    shortName: 'swan',
    chainId: 2024,
    networkId: 2024
  },
  {
    name: 'Rangers Protocol Mainnet',
    chain: 'Rangers',
    icon: 'rangers',
    rpc: [ 'https://mainnet.rangersprotocol.com/api/jsonrpc' ],
    faucets: [],
    nativeCurrency: { name: 'Rangers Protocol Gas', symbol: 'RPG', decimals: 18 },
    infoURL: 'https://rangersprotocol.com',
    shortName: 'rpg',
    chainId: 2025,
    networkId: 2025,
    slip44: 1008,
    explorers: [
      {
        name: 'rangersscan',
        url: 'https://scan.rangersprotocol.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Edgeless Network',
    chain: 'Edgeless',
    rpc: [ 'https://rpc.edgeless.network/http' ],
    features: [ { name: 'EIP155' } ],
    faucets: [],
    nativeCurrency: { name: 'Edgeless Wrapped Eth', symbol: 'EwEth', decimals: 18 },
    infoURL: 'https://edgeless.network',
    shortName: 'edgeless',
    chainId: 2026,
    networkId: 2026,
    explorers: [
      {
        name: 'Edgeless Explorer',
        url: 'https://explorer.edgeless.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Centrifuge',
    chain: 'CFG',
    icon: 'centrifuge',
    rpc: [
      'https://fullnode.centrifuge.io',
      'wss://fullnode.centrifuge.io',
      'https://centrifuge-parachain.api.onfinality.io/public',
      'wss://centrifuge-parachain.api.onfinality.io/public-ws',
      'https://centrifuge-rpc.dwellir.com',
      'wss://centrifuge-rpc.dwellir.com',
      'https://rpc-centrifuge.luckyfriday.io',
      'wss://rpc-centrifuge.luckyfriday.io'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Centrifuge', symbol: 'CFG', decimals: 18 },
    infoURL: 'https://centrifuge.io',
    shortName: 'cfg',
    chainId: 2031,
    networkId: 2031,
    explorers: [
      {
        name: 'subscan',
        url: 'https://centrifuge.subscan.io',
        standard: 'EIP3091',
        icon: 'subscan'
      }
    ]
  },
  {
    name: 'Catalyst',
    chain: 'CFG',
    rpc: [ 'wss://fullnode.catalyst.cntrfg.com' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Catalyst CFG', symbol: 'NCFG', decimals: 18 },
    infoURL: 'https://centrifuge.io',
    shortName: 'ncfg',
    chainId: 2032,
    networkId: 2032
  },
  {
    name: 'Phala Network',
    chain: 'PHA',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Phala', symbol: 'PHA', decimals: 18 },
    infoURL: 'https://phala.network',
    shortName: 'pha',
    chainId: 2035,
    networkId: 2035
  },
  {
    name: 'Kiwi Subnet',
    chain: 'KIWI',
    rpc: [ 'https://subnets.avax.network/kiwi/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Shrapgas', symbol: 'SHRAP', decimals: 18 },
    infoURL: '',
    shortName: 'kiwi',
    chainId: 2037,
    networkId: 2037,
    slip44: 1,
    explorers: [
      {
        name: 'KIWI Explorer',
        url: 'https://subnets-test.avax.network/kiwi',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Shrapnel Testnet',
    chain: 'SHRAPNEL',
    rpc: [ 'https://subnets.avax.network/shrapnel/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'SHRAPG', symbol: 'SHRAPG', decimals: 18 },
    infoURL: 'https://www.shrapnel.com/',
    shortName: 'shraptest',
    chainId: 2038,
    networkId: 2038,
    slip44: 1,
    explorers: [
      {
        name: 'SHRAPNEL Explorer',
        url: 'https://subnets-test.avax.network/shrapnel',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Vanar Mainnet',
    title: 'Vanarchain',
    chain: 'VANAR',
    rpc: [ 'https://rpc.vanarchain.com', 'wss://ws.vanarchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'VANRY', symbol: 'VANRY', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://vanarchain.com',
    shortName: 'Vanar',
    chainId: 2040,
    networkId: 2040,
    icon: 'vanar'
  },
  {
    name: 'OriginTrail Parachain',
    chain: 'OTP',
    rpc: [
      'https://astrosat.origintrail.network',
      'wss://parachain-rpc.origin-trail.network'
    ],
    faucets: [],
    nativeCurrency: {
      name: 'OriginTrail Parachain Token',
      symbol: 'OTP',
      decimals: 12
    },
    infoURL: 'https://parachain.origintrail.io',
    shortName: 'otp',
    chainId: 2043,
    networkId: 2043
  },
  {
    name: 'Shrapnel Subnet',
    chain: 'shrapnel',
    rpc: [ 'https://subnets.avax.network/shrapnel/mainnet/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Shrapnel Gas Token', symbol: 'SHRAPG', decimals: 18 },
    infoURL: 'https://www.shrapnel.com/',
    shortName: 'Shrapnel',
    chainId: 2044,
    networkId: 2044
  },
  {
    name: 'Stratos Testnet',
    chain: 'STOS',
    rpc: [ 'https://web3-rpc-mesos.thestratos.org' ],
    faucets: [],
    nativeCurrency: { name: 'STOS', symbol: 'STOS', decimals: 18 },
    infoURL: 'https://www.thestratos.org',
    shortName: 'stos-testnet',
    chainId: 2047,
    networkId: 2047,
    slip44: 1,
    explorers: [
      {
        name: 'Stratos EVM Explorer (Blockscout)',
        url: 'https://web3-explorer-mesos.thestratos.org',
        standard: 'none'
      },
      {
        name: 'Stratos Cosmos Explorer (BigDipper)',
        url: 'https://big-dipper-mesos.thestratos.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Stratos',
    chain: 'STOS',
    rpc: [ 'https://web3-rpc.thestratos.org' ],
    faucets: [],
    nativeCurrency: { name: 'STOS', symbol: 'STOS', decimals: 18 },
    infoURL: 'https://www.thestratos.org',
    shortName: 'stos-mainnet',
    chainId: 2048,
    networkId: 2048,
    explorers: [
      {
        name: 'Stratos EVM Explorer (Blockscout)',
        url: 'https://web3-explorer.thestratos.org',
        standard: 'none'
      },
      {
        name: 'Stratos Cosmos Explorer (BigDipper)',
        url: 'https://explorer.thestratos.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Movo Smart Chain Mainnet',
    chain: 'MOVO',
    icon: 'movo',
    rpc: [
      'https://msc-rpc.movoscan.com',
      'https://msc-rpc.movochain.org',
      'https://msc-rpc.movoswap.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Movo Smart Chain', symbol: 'MOVO', decimals: 18 },
    infoURL: 'https://movo.uk',
    shortName: 'movo',
    chainId: 2049,
    networkId: 2049,
    slip44: 2050,
    explorers: [
      {
        name: 'movoscan',
        url: 'https://movoscan.com',
        icon: 'movoscan',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Quokkacoin Mainnet',
    chain: 'Qkacoin',
    rpc: [ 'https://rpc.qkacoin.org' ],
    faucets: [],
    nativeCurrency: { name: 'Qkacoin', symbol: 'QKA', decimals: 18 },
    infoURL: 'https://qkacoin.org',
    shortName: 'QKA',
    chainId: 2077,
    networkId: 2077,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.qkacoin.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Altair',
    chain: 'AIR',
    icon: 'altair',
    rpc: [
      'wss://fullnode.altair.centrifuge.io',
      'wss://altair.api.onfinality.io/public-ws'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Altair', symbol: 'AIR', decimals: 18 },
    infoURL: 'https://centrifuge.io',
    shortName: 'air',
    chainId: 2088,
    networkId: 2088
  },
  {
    name: 'Algol',
    chain: 'algol',
    status: 'deprecated',
    rpc: [ 'wss://fullnode.algol.cntrfg.com' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Algol', symbol: 'ALGL', decimals: 18 },
    infoURL: 'https://centrifuge.io',
    shortName: 'algl',
    chainId: 2089,
    networkId: 2089
  },
  {
    name: 'Ecoball Mainnet',
    chain: 'ECO',
    rpc: [ 'https://api.ecoball.org/ecoball/' ],
    faucets: [],
    nativeCurrency: { name: 'Ecoball Coin', symbol: 'ECO', decimals: 18 },
    infoURL: 'https://ecoball.org',
    shortName: 'eco',
    chainId: 2100,
    networkId: 2100,
    explorers: [
      {
        name: 'Ecoball Explorer',
        url: 'https://scan.ecoball.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ecoball Testnet Espuma',
    chain: 'ECO',
    rpc: [ 'https://api.ecoball.org/espuma/' ],
    faucets: [],
    nativeCurrency: { name: 'Espuma Coin', symbol: 'ECO', decimals: 18 },
    infoURL: 'https://ecoball.org',
    shortName: 'esp',
    chainId: 2101,
    networkId: 2101,
    slip44: 1,
    explorers: [
      {
        name: 'Ecoball Testnet Explorer',
        url: 'https://espuma-scan.ecoball.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Exosama Network',
    chain: 'EXN',
    rpc: [ 'https://rpc.exosama.com', 'wss://rpc.exosama.com' ],
    faucets: [],
    nativeCurrency: { name: 'Sama Token', symbol: 'SAMA', decimals: 18 },
    infoURL: 'https://moonsama.com',
    shortName: 'exn',
    chainId: 2109,
    networkId: 2109,
    slip44: 2109,
    icon: 'exn',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.exosama.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Catena Mainnet',
    chain: 'CMCX',
    rpc: [ 'https://rpc1.catenarpc.com' ],
    faucets: [],
    nativeCurrency: { name: 'Catena', symbol: 'CMCX', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://catena.network',
    shortName: 'cmcx',
    chainId: 2121,
    networkId: 2121,
    icon: 'catena',
    explorers: [
      {
        name: 'catenascan',
        url: 'https://catenascan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Metaplayerone Mainnet',
    chain: 'METAD',
    icon: 'metad',
    rpc: [ 'https://rpc.metaplayer.one/' ],
    faucets: [],
    nativeCurrency: { name: 'METAD', symbol: 'METAD', decimals: 18 },
    infoURL: 'https://docs.metaplayer.one/',
    shortName: 'Metad',
    chainId: 2122,
    networkId: 2122,
    explorers: [
      {
        name: 'Metad Scan',
        url: 'https://scan.metaplayer.one',
        icon: 'metad',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Metaplayerone Dubai Testnet',
    chain: 'MP1 Dubai-Testnet',
    rpc: [ 'https://rpc-dubai.mp1network.com/' ],
    faucets: [],
    nativeCurrency: { name: 'Metaunit', symbol: 'MEU', decimals: 18 },
    infoURL: 'https://docs.metaplayer.one/',
    shortName: 'MEU',
    chainId: 2124,
    networkId: 2124,
    slip44: 1,
    explorers: [
      {
        name: 'MP1Scan',
        url: 'https://dubai.mp1scan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BigShortBets Testnet',
    chain: 'BIGSB Testnet',
    rpc: [ 'https://test-market.bigsb.io', 'wss://test-market.bigsb.io' ],
    faucets: [],
    nativeCurrency: { name: 'Dolarz', symbol: 'Dolarz', decimals: 18 },
    infoURL: 'https://bigshortbets.com/',
    shortName: 'bigsb_testnet',
    chainId: 2136,
    networkId: 2136,
    explorers: [
      {
        name: 'Polkadot.js',
        url: 'https://polkadot.js.org/apps/?rpc=wss://test-market.bigsb.network#/explorer',
        standard: 'none'
      }
    ]
  },
  {
    name: 'BigShortBets',
    chain: 'BIGSB',
    rpc: [ 'https://market.bigsb.io', 'wss://market.bigsb.io' ],
    faucets: [],
    nativeCurrency: { name: 'USD Coin', symbol: 'USDC', decimals: 18 },
    infoURL: 'https://bigshortbets.com/',
    shortName: 'bigsb',
    chainId: 2137,
    networkId: 2137,
    explorers: []
  },
  {
    name: 'Defi Oracle Meta Testnet',
    chain: 'dfiometatest',
    icon: 'defioraclemeta',
    rpc: [
      'https://rpc.public-2138.defi-oracle.io',
      'wss://rpc.public-2138.defi-oracle.io'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'testEther', symbol: 'tETH', decimals: 18 },
    infoURL: 'https://defi-oracle.io/',
    shortName: 'dfio-meta-test',
    chainId: 2138,
    networkId: 21,
    slip44: 1,
    ens: { registry: '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85' },
    explorers: [
      {
        name: 'Quorum Explorer',
        url: 'https://public-2138.defi-oracle.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'BOSagora Mainnet',
    chain: 'ETH',
    rpc: [ 'https://mainnet.bosagora.org', 'https://rpc.bosagora.org' ],
    faucets: [],
    nativeCurrency: { name: 'BOSAGORA', symbol: 'BOA', decimals: 18 },
    infoURL: 'https://docs.bosagora.org',
    shortName: 'boa',
    chainId: 2151,
    networkId: 2151,
    icon: 'agora',
    explorers: [
      {
        name: 'BOASCAN',
        url: 'https://boascan.io',
        icon: 'agora',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Findora Mainnet',
    chain: 'Findora',
    rpc: [ 'https://rpc-mainnet.findora.org' ],
    faucets: [],
    nativeCurrency: { name: 'FRA', symbol: 'FRA', decimals: 18 },
    infoURL: 'https://findora.org/',
    shortName: 'fra',
    chainId: 2152,
    networkId: 2152,
    explorers: [
      {
        name: 'findorascan',
        url: 'https://evm.findorascan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Findora Testnet',
    chain: 'Testnet-anvil',
    rpc: [ 'https://prod-testnet.prod.findora.org:8545/' ],
    faucets: [],
    nativeCurrency: { name: 'FRA', symbol: 'FRA', decimals: 18 },
    infoURL: 'https://findora.org/',
    shortName: 'findora-testnet',
    chainId: 2153,
    networkId: 2153,
    slip44: 1,
    explorers: [
      {
        name: 'findorascan',
        url: 'https://testnet-anvil.evm.findorascan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Findora Forge',
    chain: 'Testnet-forge',
    rpc: [ 'https://prod-forge.prod.findora.org:8545/' ],
    faucets: [],
    nativeCurrency: { name: 'FRA', symbol: 'FRA', decimals: 18 },
    infoURL: 'https://findora.org/',
    shortName: 'findora-forge',
    chainId: 2154,
    networkId: 2154,
    slip44: 1,
    explorers: [
      {
        name: 'findorascan',
        url: 'https://testnet-forge.evm.findorascan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Moonsama Network',
    chain: 'MSN',
    rpc: [ 'https://rpc.moonsama.com', 'wss://rpc.moonsama.com/ws' ],
    faucets: [ 'https://multiverse.moonsama.com/faucet' ],
    nativeCurrency: { name: 'Sama Token', symbol: 'SAMA', decimals: 18 },
    infoURL: 'https://moonsama.com',
    shortName: 'msn',
    chainId: 2199,
    networkId: 2199,
    slip44: 2199,
    icon: 'msn',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.moonsama.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Antofy Mainnet',
    chain: 'ABN',
    icon: 'antofy',
    rpc: [ 'https://rpc.antofy.io' ],
    faucets: [ 'https://faucet.antofy.io' ],
    nativeCurrency: { name: 'Antofy', symbol: 'ABN', decimals: 18 },
    infoURL: 'https://antofy.io',
    shortName: 'ABNm',
    chainId: 2202,
    networkId: 2202,
    explorers: [
      {
        name: 'Antofy Mainnet',
        url: 'https://antofyscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bitcoin EVM',
    chain: 'Bitcoin EVM',
    rpc: [ 'https://connect.bitcoinevm.com' ],
    faucets: [],
    nativeCurrency: { name: 'Bitcoin', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://bitcoinevm.com',
    shortName: 'BTC',
    chainId: 2203,
    networkId: 2203,
    icon: 'ebtc',
    explorers: [
      {
        name: 'Explorer',
        url: 'https://explorer.bitcoinevm.com',
        icon: 'ebtc',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Evanesco Mainnet',
    chain: 'EVA',
    rpc: [ 'https://seed4.evanesco.org:8546' ],
    faucets: [],
    nativeCurrency: { name: 'EVA', symbol: 'EVA', decimals: 18 },
    infoURL: 'https://evanesco.org/',
    shortName: 'evanesco',
    chainId: 2213,
    networkId: 2213,
    icon: 'evanesco',
    explorers: [
      {
        name: 'Evanesco Explorer',
        url: 'https://explorer.evanesco.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Kava Testnet',
    chain: 'KAVA',
    rpc: [
      'https://evm.testnet.kava.io',
      'https://kava-evm-testnet.rpc.thirdweb.com',
      'wss://wevm.testnet.kava.io',
      'https://kava-testnet.drpc.org',
      'wss://kava-testnet.drpc.org'
    ],
    faucets: [ 'https://faucet.kava.io' ],
    nativeCurrency: { name: 'TKava', symbol: 'TKAVA', decimals: 18 },
    infoURL: 'https://www.kava.io',
    shortName: 'tkava',
    chainId: 2221,
    networkId: 2221,
    icon: 'kava',
    explorers: [
      {
        name: 'Kava Testnet Explorer',
        url: 'http://testnet.kavascan.com',
        standard: 'EIP3091',
        icon: 'kava'
      }
    ]
  },
  {
    name: 'Kava',
    chain: 'KAVA',
    rpc: [
      'https://evm.kava.io',
      'https://kava-rpc.gateway.pokt.network',
      'https://kava-evm.rpc.thirdweb.com',
      'wss://wevm.kava.io',
      'https://kava-evm-rpc.publicnode.com',
      'wss://kava-evm-rpc.publicnode.com',
      'https://evm.kava-rpc.com',
      'https://rpc.ankr.com/kava_evm',
      'wss://wevm.kava-rpc.com',
      'https://kava.drpc.org',
      'wss://kava.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Kava', symbol: 'KAVA', decimals: 18 },
    infoURL: 'https://www.kava.io',
    shortName: 'kava',
    chainId: 2222,
    networkId: 2222,
    icon: 'kava',
    explorers: [
      {
        name: 'Kava EVM Explorer',
        url: 'https://kavascan.com',
        standard: 'EIP3091',
        icon: 'kava'
      }
    ]
  },
  {
    name: 'VChain Mainnet',
    chain: 'VChain',
    rpc: [ 'https://bc.vcex.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'VNDT', symbol: 'VNDT', decimals: 18 },
    infoURL: 'https://bo.vcex.xyz/',
    shortName: 'VChain',
    chainId: 2223,
    networkId: 2223,
    explorers: [
      {
        name: 'VChain Scan',
        url: 'https://scan.vcex.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Krest Network',
    chain: 'Krest',
    icon: 'krest',
    rpc: [
      'https://erpc-krest.peaq.network',
      'https://krest.unitedbloc.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Krest', symbol: 'KRST', decimals: 18 },
    infoURL: 'https://www.peaq.network',
    shortName: 'KRST',
    chainId: 2241,
    networkId: 2241,
    explorers: [
      {
        name: 'Polkadot.js',
        url: 'https://polkadot.js.org/apps/?rpc=wss://wss-krest.peaq.network#/explorer',
        standard: 'none'
      },
      {
        name: 'Subscan',
        url: 'https://krest.subscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'BOMB Chain',
    chain: 'BOMB',
    rpc: [ 'https://rpc.bombchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'BOMB Token', symbol: 'BOMB', decimals: 18 },
    infoURL: 'https://www.bombchain.com',
    shortName: 'bomb',
    chainId: 2300,
    networkId: 2300,
    icon: 'bomb',
    explorers: [
      {
        name: 'bombscan',
        icon: 'bomb',
        url: 'https://bombscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ebro Network',
    chain: 'ebro',
    rpc: [ 'https://greendinoswap.com' ],
    faucets: [],
    nativeCurrency: { name: 'Ebro', symbol: 'ebro', decimals: 18 },
    infoURL: 'https://www.ebrochain.com',
    shortName: 'ebro',
    chainId: 2306,
    networkId: 2306
  },
  {
    name: 'Arevia',
    chain: 'Arevia',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Arev', symbol: 'ARÉV', decimals: 18 },
    infoURL: '',
    shortName: 'arevia',
    chainId: 2309,
    networkId: 2309,
    explorers: [],
    status: 'incubating'
  },
  {
    name: 'SOMA Network Testnet',
    chain: 'SOMA',
    rpc: [
      'https://data-testnet-v1.somanetwork.io/',
      'https://testnet-au-server-2.somanetwork.io',
      'https://testnet-au-server-1.somanetwork.io',
      'https://testnet-sg-server-1.somanetwork.io',
      'https://testnet-sg-server-2.somanetwork.io'
    ],
    faucets: [ 'https://faucet.somanetwork.io' ],
    nativeCurrency: { name: 'SMA', symbol: 'tSMA', decimals: 18 },
    infoURL: 'https://somanetwork.io',
    shortName: 'sma',
    chainId: 2323,
    networkId: 2323,
    slip44: 1,
    icon: 'soma',
    explorers: [
      {
        name: 'SOMA Testnet Explorer',
        icon: 'soma',
        url: 'https://testnet.somascan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Altcoinchain',
    chain: 'mainnet',
    rpc: [ 'https://rpc0.altcoinchain.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Altcoin', symbol: 'ALT', decimals: 18 },
    infoURL: 'https://altcoinchain.org',
    shortName: 'alt',
    chainId: 2330,
    networkId: 2330,
    icon: 'altcoinchain',
    status: 'active',
    explorers: [
      {
        name: 'expedition',
        url: 'http://expedition.altcoinchain.org',
        icon: 'altcoinchain',
        standard: 'none'
      }
    ]
  },
  {
    name: 'RSS3 VSL Sepolia Testnet',
    chain: 'RSS3',
    rpc: [ 'https://rpc.testnet.rss3.io' ],
    faucets: [],
    nativeCurrency: { name: 'RSS3', symbol: 'RSS3', decimals: 18 },
    infoURL: 'https://rss3.io',
    shortName: 'rss3-testnet',
    chainId: 2331,
    networkId: 2331,
    icon: 'rss3-testnet',
    explorers: [
      {
        name: 'RSS3 VSL Sepolia Testnet Scan',
        url: 'https://scan.testnet.rss3.io',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [ { url: 'https://explorer.testnet.rss3.io/bridge' } ]
    }
  },
  {
    name: 'SOMA Network Mainnet',
    chain: 'SOMA',
    rpc: [
      'https://data-mainnet-v1.somanetwork.io/',
      'https://id-mainnet.somanetwork.io',
      'https://hk-mainnet.somanetwork.io',
      'https://sg-mainnet.somanetwork.io'
    ],
    faucets: [ 'https://airdrop.somanetwork.io' ],
    nativeCurrency: { name: 'Soma Native Token', symbol: 'SMA', decimals: 18 },
    infoURL: 'https://somanetwork.io',
    shortName: 'smam',
    chainId: 2332,
    networkId: 2332,
    icon: 'soma',
    status: 'incubating',
    explorers: [
      {
        name: 'SOMA Explorer Mainnet',
        icon: 'soma',
        url: 'https://somascan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Atleta Testnet',
    chain: 'Atleta',
    rpc: [ 'wss://testnet-rpc.atleta.network:9944' ],
    faucets: [ 'https://faucet.atleta.network' ],
    nativeCurrency: { name: 'Atla', symbol: 'ATLA', decimals: 18 },
    infoURL: 'https://atleta.network',
    shortName: 'atla',
    chainId: 2340,
    networkId: 2340,
    slip44: 1,
    icon: 'atleta',
    explorers: [
      {
        name: 'Atleta Testnet Explorer',
        icon: 'atleta',
        url: 'https://polkadot-explorer.atleta.network/#/explorer',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Omnia Chain',
    chain: 'OMNIA',
    icon: 'omnia',
    rpc: [ 'https://rpc.omniaverse.io' ],
    faucets: [ 'https://www.omniaverse.io' ],
    nativeCurrency: { name: 'Omnia', symbol: 'OMNIA', decimals: 18 },
    infoURL: 'https://www.omniaverse.io',
    shortName: 'omnia',
    chainId: 2342,
    networkId: 2342,
    explorers: [
      {
        name: 'OmniaVerse Explorer',
        url: 'https://scan.omniaverse.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: '(deprecated) Kroma Sepolia',
    title: '(deprecated) Kroma Testnet Sepolia',
    chainId: 2357,
    shortName: 'deprecated-kroma-sepolia',
    chain: 'ETH',
    networkId: 2357,
    slip44: 1,
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpc: [ 'https://api.sepolia-deprecated.kroma.network' ],
    faucets: [],
    infoURL: 'https://kroma.network',
    icon: 'kroma',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.sepolia-deprecated.kroma.network',
        icon: 'kroma',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [ { url: 'https://kroma.network/bridge' } ]
    },
    status: 'deprecated'
  },
  {
    name: 'Kroma Sepolia',
    title: 'Kroma Testnet Sepolia',
    chainId: 2358,
    shortName: 'kroma-sepolia',
    chain: 'ETH',
    networkId: 2358,
    slip44: 1,
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpc: [ 'https://api.sepolia.kroma.network' ],
    faucets: [],
    infoURL: 'https://kroma.network',
    icon: 'kroma',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.sepolia.kroma.network',
        icon: 'kroma',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [ { url: 'https://kroma.network/bridge' } ]
    }
  },
  {
    name: 'BOMB Chain Testnet',
    chain: 'BOMB',
    rpc: [ 'https://bombchain-testnet.ankr.com/bas_full_rpc_1' ],
    faucets: [ 'https://faucet.bombchain-testnet.ankr.com/' ],
    nativeCurrency: { name: 'BOMB Token', symbol: 'tBOMB', decimals: 18 },
    infoURL: 'https://www.bombmoney.com',
    shortName: 'bombt',
    chainId: 2399,
    networkId: 2399,
    slip44: 1,
    icon: 'bomb',
    explorers: [
      {
        name: 'bombscan-testnet',
        icon: 'bomb',
        url: 'https://explorer.bombchain-testnet.ankr.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'TCG Verse Mainnet',
    chain: 'TCG Verse',
    icon: 'tcg_verse',
    rpc: [ 'https://rpc.tcgverse.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://tcgverse.xyz/',
    shortName: 'TCGV',
    chainId: 2400,
    networkId: 2400,
    explorers: [
      {
        name: 'TCG Verse Explorer',
        url: 'https://explorer.tcgverse.xyz',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-248' }
  },
  {
    name: 'Karak Mainnet',
    chain: 'Karak',
    icon: 'karak',
    rpc: [ 'https://rpc.karak.network' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://karak.network',
    shortName: 'karak-mainnet',
    chainId: 2410,
    networkId: 2410,
    explorers: [
      {
        name: 'Karak Mainnet Explorer',
        url: 'https://explorer.karak.network',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-1' }
  },
  {
    name: 'XODEX',
    chain: 'XODEX',
    rpc: [ 'https://mainnet.xo-dex.com/rpc', 'https://xo-dex.io' ],
    faucets: [],
    nativeCurrency: { name: 'XODEX Native Token', symbol: 'XODEX', decimals: 18 },
    infoURL: 'https://xo-dex.com',
    shortName: 'xodex',
    chainId: 2415,
    networkId: 10,
    icon: 'xodex',
    explorers: [
      {
        name: 'XODEX Explorer',
        url: 'https://explorer.xo-dex.com',
        standard: 'EIP3091',
        icon: 'xodex'
      }
    ]
  },
  {
    name: 'King Of Legends Devnet',
    title: 'King Of Legends Devnet',
    chain: 'KOL',
    icon: 'kol',
    rpc: [ 'https://rpc-devnet.kinggamer.org/' ],
    faucets: [],
    nativeCurrency: { name: 'King Of Legends', symbol: 'KOL', decimals: 18 },
    infoURL: 'https://kingoflegends.net/',
    shortName: 'kol',
    chainId: 2425,
    networkId: 2425,
    slip44: 1,
    explorers: [
      {
        name: 'King Of Legends Devnet Explorer',
        url: 'https://devnet.kingscan.org',
        icon: 'kol',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Polygon zkEVM Cardona Testnet',
    title: 'Polygon zkEVM Cardona Testnet',
    chain: 'Polygon',
    rpc: [ 'https://rpc.cardona.zkevm-rpc.com' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://polygon.technology/polygon-zkevm',
    shortName: 'zkevm-testnet-cardona',
    chainId: 2442,
    networkId: 2442,
    icon: 'zkevm',
    explorers: [
      {
        name: 'polygonscan',
        url: 'https://cardona-zkevm.polygonscan.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge-ui.cardona.zkevm-rpc.com' } ]
    }
  },
  {
    name: 'Hybrid Chain Network Testnet',
    chain: 'HYBRID',
    rpc: [ 'https://rpc-testnet.hybridchain.ai/' ],
    faucets: [ 'https://faucet-testnet.hybridchain.ai' ],
    nativeCurrency: { name: 'Hybrid Chain Native Token', symbol: 'tHRC', decimals: 18 },
    infoURL: 'https://hybridchain.ai',
    shortName: 'thrc',
    chainId: 2458,
    networkId: 2458,
    slip44: 1,
    icon: 'hybrid',
    explorers: [
      {
        name: 'Hybrid Chain Explorer Testnet',
        icon: 'hybrid',
        url: 'https://testnet.hybridscan.ai',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Hybrid Chain Network Mainnet',
    chain: 'HYBRID',
    rpc: [
      'https://coredata-mainnet.hybridchain.ai/',
      'https://rpc-mainnet.hybridchain.ai'
    ],
    faucets: [ 'https://faucet-testnet.hybridchain.ai' ],
    nativeCurrency: { name: 'Hybrid Chain Native Token', symbol: 'HRC', decimals: 18 },
    infoURL: 'https://hybridchain.ai',
    shortName: 'hrc',
    chainId: 2468,
    networkId: 2468,
    icon: 'hybrid',
    explorers: [
      {
        name: 'Hybrid Chain Explorer Mainnet',
        icon: 'hybrid',
        url: 'https://hybridscan.ai',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Unicorn Ultra Nebulas Testnet',
    chain: 'u2u',
    rpc: [ 'https://rpc-nebulas-testnet.uniultra.xyz' ],
    faucets: [ 'https://faucet.uniultra.xyz' ],
    nativeCurrency: {
      name: 'Unicorn Ultra Nebulas Testnet',
      symbol: 'U2U',
      decimals: 18
    },
    infoURL: 'https://uniultra.xyz',
    shortName: 'u2u_nebulas',
    chainId: 2484,
    networkId: 2484,
    slip44: 1,
    icon: 'u2u_nebulas',
    explorers: [
      {
        icon: 'u2u_nebulas',
        name: 'U2U Explorer',
        url: 'https://testnet.u2uscan.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Karak Goerli',
    chain: 'Karak',
    icon: 'karak',
    status: 'deprecated',
    rpc: [ 'https://goerli.node1.karak.network' ],
    faucets: [],
    nativeCurrency: { name: 'Karak', symbol: 'KRK', decimals: 18 },
    infoURL: 'https://karak.network',
    shortName: 'karak-goerli',
    chainId: 2511,
    networkId: 2511,
    explorers: [
      {
        name: 'Karak Goerli Explorer',
        url: 'https://goerli.scan.karak.network',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-5' }
  },
  {
    name: 'Fraxtal Testnet',
    chain: 'FRAX',
    rpc: [ 'https://rpc.testnet.frax.com' ],
    faucets: [],
    nativeCurrency: { name: 'Frax Ether', symbol: 'frxETH', decimals: 18 },
    infoURL: 'https://testnet.frax.com',
    shortName: 'fraxtal-testnet',
    chainId: 2522,
    networkId: 2522,
    slip44: 1,
    icon: 'fraxtal',
    explorers: [
      {
        name: 'fraxscan',
        url: 'https://holesky.fraxscan.com',
        standard: 'EIP3091'
      }
    ],
    status: 'active'
  },
  {
    name: 'inEVM Mainnet',
    chain: 'inEVM',
    icon: 'inevm',
    rpc: [ 'https://mainnet.rpc.inevm.com/http' ],
    faucets: [],
    nativeCurrency: { name: 'Injective', symbol: 'INJ', decimals: 18 },
    infoURL: 'https://inevm.com',
    shortName: 'inevm',
    chainId: 2525,
    networkId: 2525,
    explorers: [],
    status: 'active'
  },
  {
    name: 'Kortho Mainnet',
    chain: 'Kortho Chain',
    rpc: [ 'https://www.kortho-chain.com' ],
    faucets: [],
    nativeCurrency: { name: 'KorthoChain', symbol: 'KTO', decimals: 11 },
    infoURL: 'https://www.kortho.io/',
    shortName: 'ktoc',
    chainId: 2559,
    networkId: 2559
  },
  {
    name: 'TechPay Mainnet',
    chain: 'TPC',
    rpc: [ 'https://api.techpay.io/' ],
    faucets: [],
    nativeCurrency: { name: 'TechPay', symbol: 'TPC', decimals: 18 },
    infoURL: 'https://techpay.io/',
    shortName: 'tpc',
    chainId: 2569,
    networkId: 2569,
    icon: 'techpay',
    explorers: [
      {
        name: 'tpcscan',
        url: 'https://tpcscan.com',
        icon: 'techpay',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PoCRNet',
    title: 'Proof of Climate awaReness mainnet',
    chain: 'CRC',
    status: 'active',
    rpc: [
      'https://pocrnet.westeurope.cloudapp.azure.com/http',
      'wss://pocrnet.westeurope.cloudapp.azure.com/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'Climate awaReness Coin', symbol: 'CRC', decimals: 18 },
    infoURL: 'https://github.com/ethereum-pocr/pocrnet',
    shortName: 'pocrnet',
    chainId: 2606,
    networkId: 2606,
    icon: 'pocr',
    explorers: [
      {
        name: 'Lite Explorer',
        url: 'https://ethereum-pocr.github.io/explorer/pocrnet',
        icon: 'pocr',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Redlight Chain Mainnet',
    chain: 'REDLC',
    rpc: [ 'https://dataseed2.redlightscan.finance' ],
    faucets: [],
    nativeCurrency: { name: 'Redlight Coin', symbol: 'REDLC', decimals: 18 },
    infoURL: 'https://redlight.finance/',
    shortName: 'REDLC',
    chainId: 2611,
    networkId: 2611,
    explorers: [
      {
        name: 'REDLC Explorer',
        url: 'https://redlightscan.finance',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'EZChain C-Chain Mainnet',
    chain: 'EZC',
    rpc: [ 'https://api.ezchain.com/ext/bc/C/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'EZChain', symbol: 'EZC', decimals: 18 },
    infoURL: 'https://ezchain.com',
    shortName: 'EZChain',
    chainId: 2612,
    networkId: 2612,
    icon: 'ezchain',
    explorers: [
      {
        name: 'ezchain',
        url: 'https://cchain-explorer.ezchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'EZChain C-Chain Testnet',
    chain: 'EZC',
    rpc: [ 'https://testnet-api.ezchain.com/ext/bc/C/rpc' ],
    faucets: [ 'https://testnet-faucet.ezchain.com' ],
    nativeCurrency: { name: 'EZChain', symbol: 'EZC', decimals: 18 },
    infoURL: 'https://ezchain.com',
    shortName: 'Fuji-EZChain',
    chainId: 2613,
    networkId: 2613,
    slip44: 1,
    icon: 'ezchain',
    explorers: [
      {
        name: 'ezchain',
        url: 'https://testnet-cchain-explorer.ezchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Whitechain Testnet',
    chain: 'WBT',
    rpc: [ 'https://rpc-testnet.whitechain.io' ],
    faucets: [ 'https://testnet.whitechain.io/faucet' ],
    nativeCurrency: { name: 'WhiteBIT Coin', symbol: 'WBT', decimals: 18 },
    infoURL: 'https://whitechain.io',
    shortName: 'twbt',
    chainId: 2625,
    networkId: 2625,
    slip44: 1,
    icon: 'whitechain-testnet',
    explorers: [
      {
        name: 'whitechain-testnet-explorer',
        url: 'https://testnet.whitechain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'APEX',
    status: 'incubating',
    chain: 'ETH',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://apexlayer.xyz/',
    shortName: 'apexmainnet',
    chainId: 2662,
    networkId: 2662,
    icon: 'apexmainnet',
    explorers: [],
    parent: { type: 'L2', chain: 'eip155-1' }
  },
  {
    name: 'Morph Testnet',
    chain: 'ETH',
    rpc: [ 'https://rpc-testnet.morphl2.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://morphl2.io',
    shortName: 'tmorph',
    chainId: 2710,
    networkId: 2710,
    slip44: 1,
    explorers: [
      {
        name: 'Morph Testnet Explorer',
        url: 'https://explorer-testnet.morphl2.io',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge-testnet.morphl2.io' } ]
    }
  },
  {
    name: 'K-LAOS',
    title: 'K-LAOS: LAOS on Kusama',
    chain: 'K-LAOS',
    icon: 'k-laos',
    rpc: [
      'https://rpc.klaos.laosfoundation.io',
      'wss://rpc.klaos.laosfoundation.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'KLAOS', symbol: 'KLAOS', decimals: 18 },
    infoURL: 'https://www.laosfoundation.io/',
    shortName: 'k-laos',
    chainId: 2718,
    networkId: 2718,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.klaos.laosfoundation.io',
        icon: 'k-laos',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'XR Sepolia',
    chain: 'ETH',
    rpc: [ 'https://xr-sepolia-testnet.rpc.caldera.xyz/http' ],
    faucets: [],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    nativeCurrency: { name: 'tXR', symbol: 'tXR', decimals: 18 },
    infoURL: 'https://xr-one.gitbook.io',
    shortName: 'txr',
    chainId: 2730,
    networkId: 2730,
    icon: 'xr',
    slip44: 60,
    explorers: [
      {
        name: 'XR Sepolia Explorer',
        url: 'https://xr-sepolia-testnet.explorer.caldera.xyz',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-421614',
      bridges: [ { url: 'https://xr-sepolia-testnet.bridge.caldera.xyz' } ]
    },
    status: 'active'
  },
  {
    name: 'Elizabeth Testnet',
    chain: 'Elizabeth',
    rpc: [ 'https://testnet-rpc.timenetwork.io' ],
    faucets: [],
    nativeCurrency: { name: 'TIME', symbol: 'TIME', decimals: 18 },
    infoURL: 'https://whitepaper.anttime.net/overview/anttime',
    shortName: 'TIME',
    chainId: 2731,
    networkId: 2731,
    icon: 'timenet',
    explorers: [
      {
        name: 'Time Network Explorer',
        url: 'https://testnet-scanner.timenetwork.io',
        standard: 'none',
        icon: 'timenet'
      }
    ]
  },
  {
    name: 'Boba Network Goerli Testnet',
    chain: 'ETH',
    status: 'deprecated',
    rpc: [
      'https://goerli.boba.network/',
      'wss://wss.goerli.boba.network/'
    ],
    faucets: [],
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'BobaGoerli',
    chainId: 2888,
    networkId: 2888,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://testnet.bobascan.com',
        standard: 'none'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-5',
      bridges: [ { url: 'https://gateway.boba.network' } ]
    }
  },
  {
    name: 'Elux Chain',
    chain: 'ELUX',
    icon: 'eluxchain',
    rpc: [ 'https://rpc.eluxscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'Elux Chain', symbol: 'ELUX', decimals: 18 },
    infoURL: 'https://eluxscan.com',
    shortName: 'ELUX',
    chainId: 2907,
    networkId: 2907,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://eluxscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'HYCHAIN',
    chainId: 2911,
    shortName: 'hychain',
    chain: 'ETH',
    networkId: 2911,
    nativeCurrency: { name: 'TOPIA', symbol: 'TOPIA', decimals: 18 },
    rpc: [ 'https://rpc.hychain.com/http' ],
    faucets: [],
    infoURL: 'https://www.hychain.com',
    icon: 'hychain',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.hychain.com',
        icon: 'hychain',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.hychain.com' } ]
    }
  },
  {
    name: 'Xenon Chain Testnet',
    chain: 'XEN',
    rpc: [
      'https://testnet-chain.xenonchain.com/',
      'https://testnet-dev.xenonchain.com/'
    ],
    faucets: [ 'https://xfaucet.xenonchain.com' ],
    nativeCurrency: { name: 'Xenon Testnet', symbol: 'tXEN', decimals: 18 },
    infoURL: 'https://xenonchain.com',
    shortName: 'xenon',
    chainId: 2941,
    networkId: 2941,
    icon: 'xenon',
    slip44: 1,
    explorers: [
      {
        name: 'Xenon testnet Explorer',
        url: 'https://testnet.xenonchain.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'BitYuan Mainnet',
    chain: 'BTY',
    rpc: [ 'https://mainnet.bityuan.com/eth' ],
    faucets: [],
    nativeCurrency: { name: 'BTY', symbol: 'BTY', decimals: 18 },
    infoURL: 'https://www.bityuan.com',
    shortName: 'bty',
    chainId: 2999,
    networkId: 2999,
    icon: 'bty',
    explorers: [
      {
        name: 'BitYuan Block Chain Explorer',
        url: 'https://mainnet.bityuan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'CENNZnet Rata',
    chain: 'CENNZnet',
    rpc: [],
    faucets: [ 'https://app-faucet.centrality.me' ],
    nativeCurrency: { name: 'CPAY', symbol: 'CPAY', decimals: 18 },
    infoURL: 'https://cennz.net',
    shortName: 'cennz-r',
    chainId: 3000,
    networkId: 3000,
    icon: 'cennz'
  },
  {
    name: 'CENNZnet Nikau',
    chain: 'CENNZnet',
    rpc: [ 'https://nikau.centrality.me/public' ],
    faucets: [ 'https://app-faucet.centrality.me' ],
    nativeCurrency: { name: 'CPAY', symbol: 'CPAY', decimals: 18 },
    infoURL: 'https://cennz.net',
    shortName: 'cennz-n',
    chainId: 3001,
    networkId: 3001,
    icon: 'cennz',
    explorers: [
      {
        name: 'UNcover',
        url: 'https://www.uncoverexplorer.com/?network=Nikau',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Canxium Mainnet',
    chain: 'CAU',
    icon: 'canxium',
    rpc: [ 'https://rpc.canxium.org' ],
    faucets: [],
    nativeCurrency: { name: 'Canxium', symbol: 'CAU', decimals: 18 },
    infoURL: 'https://canxium.org',
    shortName: 'cau',
    chainId: 3003,
    networkId: 3003,
    explorers: [
      {
        name: 'canxium explorer',
        url: 'https://explorer.canxium.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'PLAYA3ULL GAMES',
    chain: '3ULL',
    rpc: [ 'https://api.mainnet.playa3ull.games' ],
    faucets: [],
    nativeCurrency: { name: '3ULL', symbol: '3ULL', decimals: 18 },
    features: [ { name: 'EIP1559' } ],
    infoURL: 'https://playa3ull.games',
    shortName: '3ULL',
    chainId: 3011,
    networkId: 3011,
    icon: 'playa3ull',
    explorers: [
      {
        name: 'PLAYA3ULL GAMES Explorer',
        url: 'https://3011.routescan.io',
        icon: 'playa3ull',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Orlando Chain',
    chain: 'ORL',
    rpc: [ 'https://rpc-testnet.orlchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Orlando', symbol: 'ORL', decimals: 18 },
    infoURL: 'https://orlchain.com',
    shortName: 'ORL',
    chainId: 3031,
    networkId: 3031,
    icon: 'orl',
    explorers: [
      {
        name: 'Orlando (ORL) Explorer',
        url: 'https://orlscan.com',
        icon: 'orl',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bifrost Mainnet',
    title: 'Bifrost Network Mainnet',
    chain: 'BFC',
    rpc: [
      'https://public-01.mainnet.bifrostnetwork.com/rpc',
      'https://public-02.mainnet.bifrostnetwork.com/rpc'
    ],
    faucets: [],
    nativeCurrency: { name: 'Bifrost', symbol: 'BFC', decimals: 18 },
    infoURL: 'https://bifrostnetwork.com',
    shortName: 'bfc',
    chainId: 3068,
    networkId: 3068,
    icon: 'bifrost',
    explorers: [
      {
        name: 'explorer-thebifrost',
        url: 'https://explorer.mainnet.bifrostnetwork.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Immu3 EVM',
    chain: 'EVMCC',
    rpc: [
      'https://fraa-dancebox-3043-rpc.a.dancebox.tanssi.network',
      'wss://fraa-dancebox-3043-rpc.a.dancebox.tanssi.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'IMMU', symbol: 'IMMU', decimals: 18 },
    infoURL: 'https://immu3.io',
    shortName: 'Immu3',
    chainId: 3100,
    networkId: 3100,
    explorers: []
  },
  {
    name: 'Vulture EVM Beta',
    chain: 'VFIEVMCC',
    rpc: [
      'https://fraa-dancebox-3050-rpc.a.dancebox.tanssi.network',
      'wss://fraa-dancebox-3050-rpc.a.dancebox.tanssi.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'VFI', symbol: 'VFI', decimals: 18 },
    infoURL: 'https://vulture.finance',
    shortName: 'VFI',
    chainId: 3102,
    networkId: 3102,
    explorers: []
  },
  {
    name: 'SatoshiVM Alpha Mainnet',
    chain: 'SatoshiVM',
    rpc: [ 'https://alpha-rpc-node-http.svmscan.io' ],
    faucets: [],
    nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://www.satoshivm.io/',
    shortName: 'SAVM',
    chainId: 3109,
    networkId: 3109,
    icon: 'satoshivm'
  },
  {
    name: 'SatoshiVM Testnet',
    chain: 'SatoshiVM',
    rpc: [ 'https://test-rpc-node-http.svmscan.io' ],
    faucets: [],
    nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://www.satoshivm.io/',
    shortName: 'tSAVM',
    chainId: 3110,
    networkId: 3110,
    icon: 'satoshivm'
  },
  {
    name: 'Filecoin - Hyperspace testnet',
    status: 'deprecated',
    chain: 'FIL',
    icon: 'filecoin',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'testnet filecoin', symbol: 'tFIL', decimals: 18 },
    infoURL: 'https://filecoin.io',
    shortName: 'filecoin-hyperspace',
    chainId: 3141,
    networkId: 3141,
    slip44: 1,
    explorers: []
  },
  {
    name: 'Dubxcoin network',
    chain: 'DUBX',
    rpc: [ 'https://rpcmain.arabianchain.org' ],
    faucets: [],
    nativeCurrency: { name: 'Dubxcoin mainnet', symbol: 'DUBX', decimals: 18 },
    infoURL: 'https://arabianchain.org',
    shortName: 'dubx',
    chainId: 3269,
    networkId: 3269
  },
  {
    name: 'Dubxcoin testnet',
    chain: 'TESTDUBX',
    rpc: [ 'https://rpctestnet.arabianchain.org' ],
    faucets: [ 'https://faucet.arabianchain.org/' ],
    nativeCurrency: { name: 'Dubxcoin testnet', symbol: 'TDUBX', decimals: 18 },
    infoURL: 'https://arabianchain.org',
    shortName: 'testdubx',
    chainId: 3270,
    networkId: 3270,
    slip44: 1
  },
  {
    name: 'Debounce Subnet Testnet',
    chain: 'Debounce Network',
    icon: 'debounce',
    rpc: [ 'https://dev-rpc.debounce.network' ],
    faucets: [],
    nativeCurrency: { name: 'Debounce Network', symbol: 'DB', decimals: 18 },
    infoURL: 'https://debounce.network',
    shortName: 'debounce-devnet',
    chainId: 3306,
    networkId: 3306,
    slip44: 1,
    explorers: [
      {
        name: 'Debounce Devnet Explorer',
        url: 'https://explorer.debounce.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ZCore Testnet',
    chain: 'Beach',
    icon: 'zcore',
    rpc: [ 'https://rpc-testnet.zcore.cash' ],
    faucets: [ 'https://faucet.zcore.cash' ],
    nativeCurrency: { name: 'ZCore', symbol: 'ZCR', decimals: 18 },
    infoURL: 'https://zcore.cash',
    shortName: 'zcrbeach',
    chainId: 3331,
    networkId: 3331,
    slip44: 1
  },
  {
    name: 'Web3Q Testnet',
    chain: 'Web3Q',
    rpc: [ 'https://testnet.web3q.io:8545' ],
    faucets: [],
    nativeCurrency: { name: 'Web3Q', symbol: 'W3Q', decimals: 18 },
    infoURL: 'https://testnet.web3q.io/home.w3q/',
    shortName: 'w3q-t',
    chainId: 3333,
    networkId: 3333,
    slip44: 1,
    explorers: [
      {
        name: 'w3q-testnet',
        url: 'https://explorer.testnet.web3q.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Web3Q Galileo',
    chain: 'Web3Q',
    rpc: [ 'https://galileo.web3q.io:8545' ],
    faucets: [],
    nativeCurrency: { name: 'Web3Q', symbol: 'W3Q', decimals: 18 },
    infoURL: 'https://galileo.web3q.io/home.w3q/',
    shortName: 'w3q-g',
    chainId: 3334,
    networkId: 3334,
    explorers: [
      {
        name: 'w3q-galileo',
        url: 'https://explorer.galileo.web3q.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Paribu Net Mainnet',
    chain: 'PRB',
    rpc: [ 'https://rpc.paribu.network' ],
    faucets: [],
    nativeCurrency: { name: 'PRB', symbol: 'PRB', decimals: 18 },
    infoURL: 'https://net.paribu.com',
    shortName: 'prb',
    chainId: 3400,
    networkId: 3400,
    icon: 'prb',
    explorers: [
      {
        name: 'Paribu Net Explorer',
        url: 'https://explorer.paribu.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'EVOLVE Mainnet',
    chain: 'EVO',
    icon: 'evolveIcon',
    rpc: [ 'https://rpc.evolveblockchain.io' ],
    faucets: [],
    nativeCurrency: { name: 'Evolve', symbol: 'EVO', decimals: 18 },
    infoURL: 'https://evolveblockchain.io',
    shortName: 'EVOm',
    chainId: 3424,
    networkId: 3424,
    explorers: [
      {
        name: 'Evolve Mainnet Explorer',
        url: 'https://evoexplorer.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SecureChain Testnet',
    chain: 'SCAI',
    icon: 'scaiIcon',
    rpc: [ 'https://testnet-rpc.securechain.ai' ],
    faucets: [ 'https://faucet.securechain.ai' ],
    nativeCurrency: { name: 'SCAI', symbol: 'SCAI', decimals: 18 },
    infoURL: 'https://securechain.ai',
    shortName: 'SCAIt',
    chainId: 3434,
    networkId: 3434,
    slip44: 1,
    explorers: [
      {
        name: 'SecureChain',
        url: 'https://testnet.securechain.ai',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Paribu Net Testnet',
    chain: 'PRB',
    rpc: [ 'https://rpc.testnet.paribuscan.com' ],
    faucets: [ 'https://faucet.paribuscan.com' ],
    nativeCurrency: { name: 'PRB', symbol: 'PRB', decimals: 18 },
    infoURL: 'https://net.paribu.com',
    shortName: 'prbtestnet',
    chainId: 3500,
    networkId: 3500,
    slip44: 1,
    icon: 'prb',
    explorers: [
      {
        name: 'Paribu Net Testnet Explorer',
        url: 'https://testnet.paribuscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'JFIN Chain',
    chain: 'JFIN',
    rpc: [ 'https://rpc.jfinchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'JFIN Coin', symbol: 'JFIN', decimals: 18 },
    infoURL: 'https://jfinchain.com',
    shortName: 'JFIN',
    chainId: 3501,
    networkId: 3501,
    explorers: [
      {
        name: 'JFIN Chain Explorer',
        url: 'https://exp.jfinchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PandoProject Mainnet',
    chain: 'PandoProject',
    icon: 'pando',
    rpc: [ 'https://eth-rpc-api.pandoproject.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'pando-token', symbol: 'PTX', decimals: 18 },
    infoURL: 'https://www.pandoproject.org/',
    shortName: 'pando-mainnet',
    chainId: 3601,
    networkId: 3601,
    explorers: [
      {
        name: 'Pando Mainnet Explorer',
        url: 'https://explorer.pandoproject.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'PandoProject Testnet',
    chain: 'PandoProject',
    icon: 'pando',
    rpc: [ 'https://testnet.ethrpc.pandoproject.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'pando-token', symbol: 'PTX', decimals: 18 },
    infoURL: 'https://www.pandoproject.org/',
    shortName: 'pando-testnet',
    chainId: 3602,
    networkId: 3602,
    slip44: 1,
    explorers: [
      {
        name: 'Pando Testnet Explorer',
        url: 'https://testnet.explorer.pandoproject.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Botanix Testnet',
    chain: 'BOTANIX',
    icon: 'botanix',
    rpc: [ 'https://node.botanixlabs.dev' ],
    faucets: [ 'https://faucet.botanixlabs.dev' ],
    nativeCurrency: { name: 'Botanix', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://botanixlabs.xyz',
    shortName: 'BTNX',
    chainId: 3636,
    networkId: 3636,
    slip44: 1,
    explorers: [
      {
        name: '3xpl',
        url: 'https://3xpl.com/botanix',
        standard: 'EIP3091'
      },
      {
        name: 'Blockscout',
        url: 'https://blockscout.botanixlabs.dev',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Botanix Mainnet',
    chain: 'BTC',
    icon: 'botanix',
    rpc: [ 'https://rpc.btxtestchain.com' ],
    faucets: [ 'https://faucet.btxtestchain.com' ],
    nativeCurrency: { name: 'Botanix', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://btxtestchain.com',
    shortName: 'BTCm',
    chainId: 3637,
    networkId: 3637,
    explorers: [
      {
        name: 'Botanix',
        url: 'https://btxtestchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'iChain Network',
    chain: 'iChain',
    rpc: [ 'https://rpc.ichainscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'ISLAMICOIN', symbol: 'ISLAMI', decimals: 18 },
    infoURL: 'https://islamicoin.finance',
    shortName: 'ISLAMI',
    chainId: 3639,
    networkId: 3639,
    explorers: [
      {
        name: 'iChainscan',
        url: 'https://ichainscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Jouleverse Mainnet',
    chain: 'Jouleverse',
    rpc: [ 'https://rpc.jnsdao.com:8503' ],
    faucets: [],
    nativeCurrency: { name: 'J', symbol: 'J', decimals: 18 },
    infoURL: 'https://jnsdao.com',
    shortName: 'jouleverse',
    chainId: 3666,
    networkId: 3666,
    explorers: [
      {
        name: 'jscan',
        url: 'https://jscan.jnsdao.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bittex Mainnet',
    chain: 'BTX',
    rpc: [ 'https://rpc1.bittexscan.info', 'https://rpc2.bittexscan.info' ],
    faucets: [],
    nativeCurrency: { name: 'Bittex', symbol: 'BTX', decimals: 18 },
    infoURL: 'https://bittexscan.com',
    shortName: 'btx',
    chainId: 3690,
    networkId: 3690,
    explorers: [
      {
        name: 'bittexscan',
        url: 'https://bittexscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Empire Network',
    chain: 'EMPIRE',
    rpc: [ 'https://rpc.empirenetwork.io' ],
    faucets: [],
    nativeCurrency: { name: 'Empire', symbol: 'EMPIRE', decimals: 18 },
    infoURL: 'https://www.empirenetwork.io/',
    shortName: 'empire',
    chainId: 3693,
    networkId: 3693,
    explorers: [
      {
        name: 'Empire Explorer',
        url: 'https://explorer.empirenetwork.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'SenjePowers Testnet',
    chain: 'SPC',
    icon: 'SenjePowers',
    rpc: [ 'https://testnet-rpc.senjepowersscan.com' ],
    faucets: [ 'https://faucet.senjepowersscan.com' ],
    nativeCurrency: { name: 'SenjePowers', symbol: 'SPC', decimals: 18 },
    infoURL: 'https://senjepowersscan.com',
    shortName: 'SPCt',
    chainId: 3698,
    networkId: 3698,
    slip44: 1,
    explorers: [
      {
        name: 'SenjePowers',
        url: 'https://testnet.senjepowersscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SenjePowers Mainnet',
    chain: 'SPC',
    icon: 'SenjePowers',
    rpc: [ 'https://rpc.senjepowersscan.com' ],
    faucets: [ 'https://faucet.senjepowersscan.com' ],
    nativeCurrency: { name: 'SenjePowers', symbol: 'SPC', decimals: 18 },
    infoURL: 'https://senjepowersscan.com',
    shortName: 'SPCm',
    chainId: 3699,
    networkId: 3699,
    explorers: [
      {
        name: 'SenjePowers',
        url: 'https://senjepowersscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Xpla Testnet',
    chain: 'XPLATest',
    rpc: [ 'https://dimension-rpc.xpla.dev' ],
    faucets: [ 'https://faucet.xpla.io' ],
    nativeCurrency: { name: 'XPLA', symbol: 'XPLA', decimals: 18 },
    infoURL: 'https://xpla.io',
    shortName: 'xplatest',
    chainId: 3701,
    networkId: 3701,
    slip44: 1,
    icon: 'xpla',
    explorers: [
      {
        name: 'XPLA Explorer',
        url: 'https://explorer.xpla.io',
        standard: 'none'
      }
    ],
    status: 'deprecated'
  },
  {
    name: 'Crossbell',
    chain: 'Crossbell',
    rpc: [ 'https://rpc.crossbell.io' ],
    faucets: [ 'https://faucet.crossbell.io' ],
    nativeCurrency: { name: 'Crossbell Token', symbol: 'CSB', decimals: 18 },
    infoURL: 'https://crossbell.io',
    shortName: 'csb',
    chainId: 3737,
    networkId: 3737,
    icon: 'crossbell',
    explorers: [
      {
        name: 'Crossbell Explorer',
        url: 'https://scan.crossbell.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Astar zkEVM',
    shortName: 'astrzk',
    title: 'Astar zkEVM Mainnet',
    chain: 'ETH',
    icon: 'astar',
    rpc: [ 'https://rpc.startale.com/astar-zkevm' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://astar.network',
    chainId: 3776,
    networkId: 3776,
    explorers: [
      {
        name: 'Blockscout Astar zkEVM explorer',
        url: 'https://astar-zkevm.explorer.startale.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://portal.astar.network' } ]
    }
  },
  {
    name: 'AlveyChain Mainnet',
    chain: 'ALV',
    rpc: [
      'https://elves-core1.alvey.io',
      'https://elves-core2.alvey.io',
      'https://elves-core3.alvey.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'AlveyCoin', symbol: 'ALV', decimals: 18 },
    infoURL: 'https://alveychain.com/',
    shortName: 'alv',
    chainId: 3797,
    networkId: 3797,
    icon: 'alveychain',
    explorers: [
      {
        name: 'AlveyScan',
        url: 'https://alveyscan.com',
        icon: 'alveychain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Tangle Testnet',
    chain: 'Tangle Testnet',
    icon: 'tangle',
    rpc: [
      'https://testnet-rpc.tangle.tools',
      'https://testnet-rpc-archive.tangle.tools',
      'wss://testnet-rpc.tangle.tools',
      'wss://testnet-rpc-archive.tangle.tools'
    ],
    faucets: [ 'https://faucet.tangle.tools' ],
    nativeCurrency: {
      name: 'Testnet Tangle Network Token',
      symbol: 'tTNT',
      decimals: 18
    },
    infoURL: 'https://docs.tangle.tools',
    shortName: 'tTangle',
    chainId: 3799,
    networkId: 3799,
    explorers: [
      {
        name: 'ttntscan',
        url: 'https://testnet-explorer.tangle.tools',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Firechain zkEVM Ghostrider',
    title: 'Firechain zkEVM Testnet',
    chain: 'Firechain',
    rpc: [ 'https://rpc-zkevm-ghostrider.thefirechain.com' ],
    faucets: [ 'zkevm-faucet.thefirechain.com' ],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://docs.thefirechain.com/',
    shortName: 'firechain-zkEVM-testnet',
    chainId: 3885,
    networkId: 3885,
    explorers: []
  },
  {
    name: 'KalyChain Mainnet',
    chain: 'KLC',
    icon: 'kalychain',
    rpc: [ 'https://rpc.kalychain.io/rpc' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'KalyCoin', symbol: 'KLC', decimals: 18 },
    infoURL: 'https://kalychain.io',
    shortName: 'kalymainnet',
    chainId: 3888,
    networkId: 3888,
    explorers: [
      {
        name: 'KalyScan',
        url: 'https://kalyscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'KalyChain Testnet',
    chain: 'KLC',
    icon: 'kalychain',
    rpc: [ 'https://testnetrpc.kalychain.io/rpc' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'KalyCoin', symbol: 'KLC', decimals: 18 },
    infoURL: 'https://kalychain.io',
    shortName: 'kalytestnet',
    chainId: 3889,
    networkId: 3889,
    slip44: 1,
    explorers: [
      {
        name: 'KalyScan',
        url: 'https://testnet.kalyscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DRAC Network',
    chain: 'DRAC',
    rpc: [ 'https://www.dracscan.com/rpc' ],
    faucets: [ 'https://www.dracscan.io/faucet' ],
    nativeCurrency: { name: 'DRAC', symbol: 'DRAC', decimals: 18 },
    infoURL: 'https://drac.io/',
    shortName: 'drac',
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    chainId: 3912,
    networkId: 3912,
    icon: 'drac',
    explorers: [
      {
        name: 'DRAC_Network Scan',
        url: 'https://www.dracscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DOS Tesnet',
    chain: 'DOS',
    rpc: [ 'https://test.doschain.com' ],
    faucets: [],
    nativeCurrency: { name: 'DOS', symbol: 'DOS', decimals: 18 },
    infoURL: 'http://doschain.io/',
    shortName: 'dost',
    chainId: 3939,
    networkId: 3939,
    slip44: 1,
    icon: 'doschain',
    explorers: [
      {
        name: 'DOScan-Test',
        url: 'https://test.doscan.io',
        icon: 'doschain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DYNO Mainnet',
    chain: 'DYNO',
    rpc: [ 'https://api.dynoprotocol.com' ],
    faucets: [ 'https://faucet.dynoscan.io' ],
    nativeCurrency: { name: 'DYNO Token', symbol: 'DYNO', decimals: 18 },
    infoURL: 'https://dynoprotocol.com',
    shortName: 'dyno',
    chainId: 3966,
    networkId: 3966,
    explorers: [
      {
        name: 'DYNO Explorer',
        url: 'https://dynoscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DYNO Testnet',
    chain: 'DYNO',
    rpc: [ 'https://tapi.dynoprotocol.com' ],
    faucets: [ 'https://faucet.dynoscan.io' ],
    nativeCurrency: { name: 'DYNO Token', symbol: 'tDYNO', decimals: 18 },
    infoURL: 'https://dynoprotocol.com',
    shortName: 'tdyno',
    chainId: 3967,
    networkId: 3967,
    slip44: 1,
    explorers: [
      {
        name: 'DYNO Explorer',
        url: 'https://testnet.dynoscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'APEX Testnet',
    chain: 'ETH',
    rpc: [ 'https://rpc-testnet.apexlayer.xyz' ],
    faucets: [ 'https://sepoliafaucet.com/' ],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://docs.apexlayer.xyz/',
    shortName: 'apexsep',
    chainId: 3993,
    networkId: 3993,
    slip44: 1,
    icon: 'apextestnet',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://exp-testnet.apexlayer.xyz',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [ { url: 'https://apexlayer.xyz/bridge' } ]
    }
  },
  {
    name: 'YuanChain Mainnet',
    chain: 'YCC',
    rpc: [ 'https://mainnet.yuan.org/eth' ],
    faucets: [],
    nativeCurrency: { name: 'YCC', symbol: 'YCC', decimals: 18 },
    infoURL: 'https://www.yuan.org',
    shortName: 'ycc',
    chainId: 3999,
    networkId: 3999,
    icon: 'ycc',
    explorers: [
      {
        name: 'YuanChain Explorer',
        url: 'https://mainnet.yuan.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Ozone Chain Mainnet',
    chain: 'OZONE',
    rpc: [ 'https://node1.ozonechain.io' ],
    faucets: [],
    nativeCurrency: { name: 'OZONE', symbol: 'OZO', decimals: 18 },
    infoURL: 'https://ozonechain.io',
    shortName: 'ozo',
    chainId: 4000,
    networkId: 4000,
    icon: 'ozonechain',
    explorers: [
      {
        name: 'OZONE Scan',
        url: 'https://ozonescan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Peperium Chain Testnet',
    chain: 'PERIUM',
    rpc: [ 'https://rpc-testnet.peperium.io' ],
    faucets: [],
    nativeCurrency: { name: 'Peperium Chain Testnet', symbol: 'PERIUM', decimals: 18 },
    infoURL: 'https://peperium.io',
    shortName: 'PERIUM',
    chainId: 4001,
    networkId: 4001,
    slip44: 1,
    icon: 'peperium',
    explorers: [
      {
        name: 'Peperium Chain Explorer',
        url: 'https://scan-testnet.peperium.io',
        icon: 'peperium',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Fantom Testnet',
    chain: 'FTM',
    rpc: [
      'https://rpc.testnet.fantom.network',
      'https://fantom-testnet-rpc.publicnode.com',
      'wss://fantom-testnet-rpc.publicnode.com',
      'https://fantom-testnet.drpc.org',
      'wss://fantom-testnet.drpc.org'
    ],
    faucets: [ 'https://faucet.fantom.network' ],
    nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
    infoURL: 'https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet',
    shortName: 'tftm',
    chainId: 4002,
    networkId: 4002,
    slip44: 1,
    icon: 'fantom',
    explorers: [
      {
        name: 'ftmscan',
        url: 'https://testnet.ftmscan.com',
        icon: 'ftmscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'X1 Fastnet',
    chain: 'X1',
    rpc: [ 'https://x1-fastnet.xen.network' ],
    faucets: [],
    nativeCurrency: { name: 'XN', symbol: 'XN', decimals: 18 },
    infoURL: 'https://docs.xen.network/go-x1/',
    shortName: 'x1-fastnet',
    chainId: 4003,
    networkId: 4003,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer.x1-fastnet.xen.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bobaopera Testnet',
    chain: 'Bobaopera Testnet',
    status: 'deprecated',
    rpc: [
      'https://testnet.bobaopera.boba.network',
      'wss://wss.testnet.bobaopera.boba.network',
      'https://replica.testnet.bobaopera.boba.network',
      'wss://replica-wss.testnet.bobaopera.boba.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Boba Token', symbol: 'BOBA', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'BobaoperaTestnet',
    chainId: 4051,
    networkId: 4051,
    slip44: 1,
    explorers: [
      {
        name: 'Bobaopera Testnet block explorer',
        url: 'https://blockexplorer.testnet.bobaopera.boba.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Nahmii 3 Mainnet',
    chain: 'Nahmii',
    rpc: [],
    status: 'incubating',
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://nahmii.io',
    shortName: 'Nahmii3Mainnet',
    chainId: 4061,
    networkId: 4061,
    icon: 'nahmii',
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.nahmii.io' } ]
    }
  },
  {
    name: 'Nahmii 3 Testnet',
    chain: 'Nahmii',
    rpc: [ 'https://ngeth.testnet.n3.nahmii.io' ],
    faucets: [],
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://nahmii.io',
    shortName: 'Nahmii3Testnet',
    chainId: 4062,
    networkId: 4062,
    slip44: 1,
    icon: 'nahmii',
    explorers: [
      {
        name: 'Nahmii 3 Testnet Explorer',
        url: 'https://explorer.testnet.n3.nahmii.io',
        icon: 'nahmii',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-3',
      bridges: [ { url: 'https://bridge.testnet.n3.nahmii.io' } ]
    }
  },
  {
    name: 'Muster Mainnet',
    chainId: 4078,
    shortName: 'muster',
    chain: 'Muster',
    icon: 'muster',
    networkId: 4078,
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpc: [ 'https://muster.alt.technology' ],
    faucets: [],
    explorers: [
      {
        name: 'Musterscan',
        url: 'https://muster-explorer.alt.technology',
        standard: 'EIP3091'
      }
    ],
    infoURL: '',
    parent: { type: 'L2', chain: 'eip155-42161', bridges: [] }
  },
  {
    name: 'Fastex Chain (Bahamut) Oasis Testnet',
    title: 'Bahamut testnet Oasis',
    icon: 'bahamut',
    chain: 'Fastex Chain (Bahamut)',
    rpc: [ 'https://rpc1.oasis.bahamutchain.com' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [ 'https://faucet.oasis.fastexchain.com' ],
    nativeCurrency: { name: 'FTN', symbol: 'FTN', decimals: 18 },
    infoURL: 'https://fastexchain.com',
    shortName: 'Oasis',
    chainId: 4090,
    networkId: 4090,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://oasis.ftnscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Bitindi Testnet',
    chain: 'BNI',
    icon: 'bitindiTestnet',
    rpc: [ 'https://testnet-rpc.bitindi.org' ],
    faucets: [ 'https://faucet.bitindi.org' ],
    nativeCurrency: { name: 'BNI', symbol: '$BNI', decimals: 18 },
    infoURL: 'https://bitindi.org',
    shortName: 'BNIt',
    chainId: 4096,
    networkId: 4096,
    slip44: 1,
    explorers: [
      {
        name: 'Bitindi',
        url: 'https://testnet.bitindiscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bitindi Mainnet',
    chain: 'BNI',
    icon: 'bitindi',
    rpc: [ 'https://mainnet-rpc.bitindi.org' ],
    faucets: [ 'https://faucet.bitindi.org' ],
    nativeCurrency: { name: 'BNI', symbol: '$BNI', decimals: 18 },
    infoURL: 'https://bitindi.org',
    shortName: 'BNIm',
    chainId: 4099,
    networkId: 4099,
    explorers: [
      {
        name: 'Bitindi',
        url: 'https://bitindiscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'AIOZ Network Testnet',
    chain: 'AIOZ',
    icon: 'aioz',
    rpc: [ 'https://eth-ds.testnet.aioz.network' ],
    faucets: [],
    nativeCurrency: { name: 'testAIOZ', symbol: 'AIOZ', decimals: 18 },
    infoURL: 'https://aioz.network',
    shortName: 'aioz-testnet',
    chainId: 4102,
    networkId: 4102,
    slip44: 1,
    explorers: [
      {
        name: 'AIOZ Network Testnet Explorer',
        url: 'https://testnet.explorer.aioz.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Humans.ai Testnet',
    chain: 'Humans Testnet',
    rpc: [ 'https://evm-rpc.testnet.humans.zone' ],
    faucets: [],
    nativeCurrency: { name: 'HEART', symbol: 'HEART', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://humans.ai',
    shortName: 'humans_testnet',
    chainId: 4139,
    networkId: 4139,
    slip44: 1,
    icon: 'humans-dark'
  },
  {
    name: 'Tipboxcoin Testnet',
    chain: 'TPBX',
    icon: 'tipboxcoinIcon',
    rpc: [ 'https://testnet-rpc.tipboxcoin.net' ],
    faucets: [ 'https://faucet.tipboxcoin.net' ],
    nativeCurrency: { name: 'Tipboxcoin', symbol: 'TPBX', decimals: 18 },
    infoURL: 'https://tipboxcoin.net',
    shortName: 'TPBXt',
    chainId: 4141,
    networkId: 4141,
    slip44: 1,
    explorers: [
      {
        name: 'Tipboxcoin',
        url: 'https://testnet.tipboxcoin.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CrossFi Testnet',
    title: 'CrossFi Testnet',
    chain: 'XFI',
    rpc: [ 'https://rpc.testnet.ms' ],
    faucets: [],
    nativeCurrency: { name: 'XFI', symbol: 'XFI', decimals: 18 },
    infoURL: 'https://crossfi.org/',
    shortName: 'crossfi-testnet',
    chainId: 4157,
    networkId: 4157,
    slip44: 1,
    explorers: [
      {
        name: 'CrossFi Testnet Scan',
        url: 'https://scan.testnet.ms',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PHI Network V1',
    chain: 'PHI V1',
    rpc: [ 'https://rpc1.phi.network', 'https://rpc2.phi.network' ],
    faucets: [],
    nativeCurrency: { name: 'PHI', symbol: 'Φ', decimals: 18 },
    infoURL: 'https://phi.network',
    shortName: 'PHIv1',
    chainId: 4181,
    networkId: 4181,
    icon: 'phi',
    explorers: [
      {
        name: 'PHI Explorer',
        url: 'https://explorer.phi.network',
        icon: 'phi',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Merlin Mainnet',
    title: 'Merlin Mainnet',
    chain: 'Merlin',
    rpc: [ 'https://rpc.merlinchain.io' ],
    faucets: [],
    nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://merlinchain.io',
    shortName: 'Merlin-Mainnet',
    chainId: 4200,
    networkId: 4200,
    icon: 'merlin',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://scan.merlinchain.io',
        icon: 'merlin',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'LUKSO Testnet',
    chain: 'LUKSO Testnet',
    icon: 'lukso',
    rpc: [
      'https://rpc.testnet.lukso.network',
      'wss://ws-rpc.testnet.lukso.network'
    ],
    faucets: [ 'https://faucet.testnet.lukso.network' ],
    nativeCurrency: { name: 'TestLYX', symbol: 'LYXt', decimals: 18 },
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer.execution.testnet.lukso.network',
        standard: 'none'
      }
    ],
    infoURL: 'https://lukso.network',
    shortName: 'lukso-testnet',
    chainId: 4201,
    networkId: 4201,
    slip44: 1,
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ]
  },
  {
    name: 'Lisk Sepolia Testnet',
    chain: 'ETH',
    rpc: [ 'https://rpc.sepolia-api.lisk.com' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://lisk.com',
    shortName: 'lisksep',
    chainId: 4202,
    networkId: 4202,
    slip44: 134,
    explorers: [
      {
        name: 'liskscout',
        url: 'https://sepolia-blockscout.lisk.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Nexi Mainnet',
    chain: 'Nexi',
    icon: 'nexi',
    rpc: [
      'https://rpc.chain.nexi.technology/',
      'https://chain.nexilix.com',
      'https://chain.nexi.evmnode.online'
    ],
    faucets: [],
    nativeCurrency: { name: 'Nexi', symbol: 'NEXI', decimals: 18 },
    infoURL: 'https://www.nexi.technology/',
    shortName: 'nexi',
    chainId: 4242,
    networkId: 4242,
    slip44: 2500,
    explorers: [
      {
        name: 'nexiscan',
        url: 'https://www.nexiscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Nexi V2 Mainnet',
    chain: 'Nexi V2',
    icon: 'nexi',
    rpc: [
      'https://chain.nexiv2.nexilix.com',
      'https://rpc.chainv1.nexi.technology'
    ],
    faucets: [],
    nativeCurrency: { name: 'NexiV2', symbol: 'NEXI', decimals: 18 },
    infoURL: 'https://www.nexi.technology/',
    shortName: 'NexiV2',
    chainId: 4243,
    networkId: 4243,
    slip44: 2500,
    explorers: [
      {
        name: 'nexiscan',
        url: 'https://www.nexiscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bobafuji Testnet',
    chain: 'Bobafuji Testnet',
    status: 'deprecated',
    rpc: [
      'https://testnet.avax.boba.network',
      'wss://wss.testnet.avax.boba.network',
      'https://replica.testnet.avax.boba.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Boba Token', symbol: 'BOBA', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'BobaFujiTestnet',
    chainId: 4328,
    networkId: 4328,
    slip44: 1,
    explorers: [
      {
        name: 'Bobafuji Testnet block explorer',
        url: 'https://blockexplorer.testnet.avax.boba.network',
        standard: 'none'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-5',
      bridges: [ { url: 'https://gateway.boba.network' } ]
    }
  },
  {
    name: 'Beam',
    chain: 'BEAM',
    rpc: [
      'https://build.onbeam.com/rpc',
      'wss://build.onbeam.com/ws',
      'https://subnets.avax.network/beam/mainnet/rpc',
      'wss://subnets.avax.network/beam/mainnet/ws'
    ],
    features: [ { name: 'EIP1559' } ],
    faucets: [ 'https://faucet.onbeam.com' ],
    nativeCurrency: { name: 'Beam', symbol: 'BEAM', decimals: 18 },
    infoURL: 'https://www.onbeam.com',
    shortName: 'beam',
    icon: 'beam',
    chainId: 4337,
    networkId: 4337,
    explorers: [
      {
        name: 'Beam Explorer',
        url: 'https://subnets.avax.network/beam',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Credit Smart Chain Mainnet',
    chain: 'CREDIT',
    rpc: [ 'https://rpc.creditsmartchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Credit', symbol: 'CREDIT', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://creditsmartchain.com',
    shortName: 'CreditEdge',
    chainId: 4400,
    networkId: 4400,
    icon: 'credit',
    explorers: [
      {
        name: 'Creditscan',
        url: 'https://scan.creditsmartchain.com',
        icon: 'credit',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Htmlcoin Mainnet',
    chain: 'mainnet',
    rpc: [ 'https://janus.htmlcoin.com/api/' ],
    faucets: [ 'https://gruvin.me/htmlcoin' ],
    nativeCurrency: { name: 'Htmlcoin', symbol: 'HTML', decimals: 8 },
    infoURL: 'https://htmlcoin.com',
    shortName: 'html',
    chainId: 4444,
    networkId: 4444,
    icon: 'htmlcoin',
    status: 'active',
    explorers: [
      {
        name: 'htmlcoin',
        url: 'https://explorer.htmlcoin.com',
        icon: 'htmlcoin',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Orderly Sepolia Testnet',
    chain: 'ETH',
    rpc: [ 'https://l2-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'www.orderly.network',
    shortName: 'orderlyl2',
    chainId: 4460,
    networkId: 4460,
    slip44: 1,
    icon: 'orderlyTestnet',
    explorers: [
      {
        name: 'basescout',
        url: 'https://explorerl2new-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Emoney Network Testnet',
    chain: 'Emoney',
    rpc: [ 'https://testnet.emoney.network/' ],
    faucets: [ 'https://faucet.emoney.network/faucet' ],
    nativeCurrency: { name: 'Emoney Network', symbol: 'EMYC', decimals: 18 },
    infoURL: 'https://emoney.network/',
    shortName: 'emoney',
    chainId: 4544,
    networkId: 4544,
    slip44: 118,
    icon: 'emoney',
    explorers: [
      {
        name: 'EMoney ethscan',
        url: 'https://ethscan.emoney.network',
        icon: 'emoney',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Gold Chain',
    title: 'Gold Chain',
    chain: 'Gold',
    rpc: [ 'https://chain-rpc.gold.dev' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://gold.dev',
    shortName: 'gold',
    chainId: 4653,
    networkId: 4653,
    status: 'incubating',
    icon: 'gold'
  },
  {
    name: 'IoTeX Network Mainnet',
    chain: 'iotex.io',
    rpc: [ 'https://babel-api.mainnet.iotex.io' ],
    faucets: [],
    nativeCurrency: { name: 'IoTeX', symbol: 'IOTX', decimals: 18 },
    infoURL: 'https://iotex.io',
    shortName: 'iotex-mainnet',
    chainId: 4689,
    networkId: 4689,
    explorers: [
      {
        name: 'iotexscan',
        url: 'https://iotexscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'IoTeX Network Testnet',
    chain: 'iotex.io',
    rpc: [ 'https://babel-api.testnet.iotex.io' ],
    faucets: [ 'https://faucet.iotex.io/' ],
    nativeCurrency: { name: 'IoTeX', symbol: 'IOTX', decimals: 18 },
    infoURL: 'https://iotex.io',
    shortName: 'iotex-testnet',
    chainId: 4690,
    networkId: 4690,
    slip44: 1,
    explorers: [
      {
        name: 'testnet iotexscan',
        url: 'https://testnet.iotexscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'MEVerse Chain Testnet',
    chain: 'MEVerse',
    rpc: [ 'https://rpc.meversetestnet.io' ],
    faucets: [],
    nativeCurrency: { name: 'MEVerse', symbol: 'MEV', decimals: 18 },
    infoURL: 'https://www.meverse.sg',
    shortName: 'TESTMEV',
    chainId: 4759,
    networkId: 4759,
    slip44: 1,
    icon: 'meverse',
    explorers: [
      {
        name: 'MEVerse Chain Testnet Explorer',
        url: 'https://testnet.meversescan.io',
        standard: 'none',
        icon: 'meverse'
      }
    ]
  },
  {
    name: 'BlackFort Exchange Network Testnet',
    chain: 'TBXN',
    rpc: [ 'https://testnet.blackfort.network/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'BlackFort Testnet Token', symbol: 'TBXN', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://blackfort.exchange',
    shortName: 'TBXN',
    chainId: 4777,
    networkId: 4777,
    slip44: 1,
    icon: 'bxn',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet-explorer.blackfort.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Globel Chain',
    chain: 'GC',
    icon: 'globelchain',
    rpc: [ 'https://rpc.gcscan.io' ],
    faucets: [],
    nativeCurrency: { name: 'Globel Chain', symbol: 'GC', decimals: 18 },
    infoURL: 'https://gcscan.io',
    shortName: 'GC',
    chainId: 4893,
    networkId: 4893,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://gcscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Venidium Testnet',
    chain: 'XVM',
    rpc: [ 'https://rpc-evm-testnet.venidium.io' ],
    faucets: [],
    nativeCurrency: { name: 'Venidium', symbol: 'XVM', decimals: 18 },
    infoURL: 'https://venidium.io',
    shortName: 'txvm',
    chainId: 4918,
    networkId: 4918,
    slip44: 1,
    explorers: [
      {
        name: 'Venidium EVM Testnet Explorer',
        url: 'https://evm-testnet.venidiumexplorer.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Venidium Mainnet',
    chain: 'XVM',
    icon: 'venidium',
    rpc: [ 'https://rpc.venidium.io' ],
    faucets: [],
    nativeCurrency: { name: 'Venidium', symbol: 'XVM', decimals: 18 },
    infoURL: 'https://venidium.io',
    shortName: 'xvm',
    chainId: 4919,
    networkId: 4919,
    explorers: [
      {
        name: 'Venidium Explorer',
        url: 'https://evm.venidiumexplorer.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BlackFort Exchange Network',
    chain: 'BXN',
    rpc: [
      'https://mainnet.blackfort.network/rpc',
      'https://mainnet-1.blackfort.network/rpc',
      'https://mainnet-2.blackfort.network/rpc',
      'https://mainnet-3.blackfort.network/rpc'
    ],
    faucets: [],
    nativeCurrency: { name: 'BlackFort Token', symbol: 'BXN', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://blackfort.exchange',
    shortName: 'BXN',
    chainId: 4999,
    networkId: 4999,
    icon: 'bxn',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.blackfort.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Mantle',
    chain: 'ETH',
    icon: 'mantle',
    rpc: [
      'https://rpc.mantle.xyz',
      'https://mantle-rpc.publicnode.com',
      'wss://mantle-rpc.publicnode.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Mantle', symbol: 'MNT', decimals: 18 },
    infoURL: 'https://mantle.xyz',
    shortName: 'mantle',
    chainId: 5000,
    networkId: 5000,
    explorers: [
      {
        name: 'Mantle Explorer',
        url: 'https://explorer.mantle.xyz',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.mantle.xyz' } ]
    }
  },
  {
    name: 'Mantle Testnet',
    chain: 'ETH',
    rpc: [ 'https://rpc.testnet.mantle.xyz' ],
    faucets: [ 'https://faucet.testnet.mantle.xyz' ],
    nativeCurrency: { name: 'Testnet Mantle', symbol: 'MNT', decimals: 18 },
    infoURL: 'https://mantle.xyz',
    shortName: 'mantle-testnet',
    chainId: 5001,
    networkId: 5001,
    slip44: 1,
    explorers: [
      {
        name: 'Mantle Testnet Explorer',
        url: 'https://explorer.testnet.mantle.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Treasurenet Mainnet Alpha',
    chain: 'Treasurenet Mainnet Alpha',
    icon: 'treasurenet',
    rpc: [
      'https://node0.treasurenet.io',
      'https://node1.treasurenet.io',
      'https://node2.treasurenet.io',
      'https://node3.treasurenet.io'
    ],
    features: [ { name: 'EIP155' } ],
    faucets: [],
    nativeCurrency: { name: 'UNIT', symbol: 'UNIT', decimals: 18 },
    infoURL: 'https://www.treasurenet.io',
    shortName: 'treasurenet',
    chainId: 5002,
    networkId: 5002,
    explorers: [
      {
        name: 'Treasurenet EVM BlockExplorer',
        url: 'https://evmexplorer.treasurenet.io',
        icon: 'treasurenet',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Mantle Sepolia Testnet',
    chain: 'ETH',
    rpc: [ 'https://rpc.sepolia.mantle.xyz' ],
    faucets: [ 'https://faucet.sepolia.mantle.xyz' ],
    nativeCurrency: { name: 'Sepolia Mantle', symbol: 'MNT', decimals: 18 },
    infoURL: 'https://mantle.xyz',
    shortName: 'mnt-sep',
    chainId: 5003,
    networkId: 5003,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.sepolia.mantle.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Treasurenet Testnet',
    chain: 'Treasurenet Testnet',
    icon: 'treasurenet',
    rpc: [
      'https://node0.testnet.treasurenet.io',
      'https://node1.testnet.treasurenet.io',
      'https://node2.testnet.treasurenet.io',
      'https://node3.testnet.treasurenet.io'
    ],
    features: [ { name: 'EIP155' } ],
    faucets: [],
    nativeCurrency: { name: 'UNIT', symbol: 'UNIT', decimals: 18 },
    infoURL: 'https://www.testnet.treasurenet.io',
    shortName: 'tntest',
    chainId: 5005,
    networkId: 5005,
    slip44: 1,
    explorers: [
      {
        name: 'Treasurenet EVM BlockExplorer',
        url: 'https://evmexplorer.testnet.treasurenet.io',
        icon: 'treasurenet',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ONIGIRI Test Subnet',
    chain: 'ONIGIRI',
    rpc: [ 'https://subnets.avax.network/onigiri/testnet/rpc' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'ONIGIRI', symbol: 'ONGR', decimals: 18 },
    infoURL: 'https://www.ongr.org/',
    shortName: 'onigiri',
    chainId: 5039,
    networkId: 5039,
    explorers: [
      {
        name: 'ONIGIRI Explorer',
        url: 'https://subnets-test.avax.network/onigiri',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Nollie Skatechain Testnet',
    chain: 'Skatechain',
    rpc: [ 'https://nollie-rpc.skatechain.org/' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: '',
    shortName: 'nollie-testnet',
    chainId: 5051,
    networkId: 5051,
    icon: 'nollie',
    explorers: [
      {
        name: 'Nollie Skate Chain Testnet Explorer',
        url: 'https://nolliescan.skatechain.org',
        standard: 'EIP3091'
      }
    ],
    status: 'active'
  },
  {
    name: 'Syndicate Testnet',
    title: 'Syndicate Testnet',
    chain: 'Syndicate',
    rpc: [ 'https://rpc-testnet.syndicate.io' ],
    faucets: [],
    nativeCurrency: { name: 'S-Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://syndicate.io',
    shortName: 'syndicate-chain-testnet',
    chainId: 5100,
    networkId: 5100,
    status: 'incubating',
    icon: 'syndicate'
  },
  {
    name: 'Syndicate Frame Chain',
    title: 'Syndicate Frame Chain',
    chain: 'Syndicate Frame',
    rpc: [ 'https://rpc-frame.syndicate.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://syndicate.io',
    shortName: 'syndicate-chain-frame',
    chainId: 5101,
    networkId: 5101,
    status: 'incubating',
    icon: 'syndicate'
  },
  {
    name: 'SIC Testnet',
    chain: 'SIC Testnet',
    rpc: [ 'https://rpc-sic-testnet-zvr7tlkzsi.t.conduit.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://www.fwb.help/',
    shortName: 'sic-testnet',
    chainId: 5102,
    networkId: 5102,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorerl2new-sic-testnet-zvr7tlkzsi.t.conduit.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Coordinape Testnet',
    chain: 'Coordinape Testnet',
    rpc: [ 'https://rpc-coordinape-testnet-vs9se3oc4v.t.conduit.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://coordinape.com/',
    shortName: 'coordinape-testnet',
    chainId: 5103,
    networkId: 5103
  },
  {
    name: 'Charmverse Testnet',
    chain: 'Charmverse Testnet',
    rpc: [ 'https://rpc-charmverse-testnet-g6blnaebes.t.conduit.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://charmverse.io/',
    shortName: 'charmverse-testnet',
    chainId: 5104,
    networkId: 5104
  },
  {
    name: 'Superloyalty Testnet',
    chain: 'Superloyalty Testnet',
    rpc: [ 'https://rpc-superloyalty-testnet-1m5gwjbsv1.t.conduit.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://www.superloyal.com/',
    shortName: 'superloyalty-testnet',
    chainId: 5105,
    networkId: 5105
  },
  {
    name: 'Azra Testnet',
    chain: 'Azra Testnet',
    rpc: [ 'https://rpc-azra-testnet-6hz86owb1n.t.conduit.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://azragames.com',
    shortName: 'azra-testnet',
    chainId: 5106,
    networkId: 5106,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorerl2new-azra-testnet-6hz86owb1n.t.conduit.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bahamut',
    title: 'Bahamut mainnet',
    chain: 'Bahamut',
    icon: 'bahamut',
    rpc: [
      'https://rpc1.bahamut.io',
      'https://rpc2.bahamut.io',
      'wss://ws1.sahara.bahamutchain.com',
      'wss://ws2.sahara.bahamutchain.com',
      'https://bahamut-rpc.publicnode.com',
      'wss://bahamut-rpc.publicnode.com'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'FTN', symbol: 'FTN', decimals: 18 },
    shortName: 'ftn',
    infoURL: 'https://bahamut.io',
    chainId: 5165,
    networkId: 5165,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://ftnscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Smart Layer Network',
    chain: 'SLN',
    rpc: [ 'https://rpc.main.smartlayer.network' ],
    faucets: [],
    nativeCurrency: { name: 'Service Unit Token', symbol: 'SU', decimals: 18 },
    infoURL: 'https://www.smartlayer.network/',
    shortName: 'SLN',
    chainId: 5169,
    networkId: 5169,
    explorers: [
      {
        name: 'SLN Mainnet Explorer',
        url: 'https://explorer.main.smartlayer.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'TLChain Network Mainnet',
    chain: 'TLC',
    icon: 'tlc',
    rpc: [ 'https://mainnet-rpc.tlxscan.com/' ],
    faucets: [],
    nativeCurrency: { name: 'TLChain Network', symbol: 'TLC', decimals: 18 },
    infoURL: 'https://tlchain.network/',
    shortName: 'tlc',
    chainId: 5177,
    networkId: 5177,
    explorers: [
      {
        name: 'TLChain Explorer',
        url: 'https://explorer.tlchain.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'EraSwap Mainnet',
    chain: 'ESN',
    icon: 'eraswap',
    rpc: [
      'https://mainnet.eraswap.network',
      'https://rpc-mumbai.mainnet.eraswap.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'EraSwap', symbol: 'ES', decimals: 18 },
    infoURL: 'https://eraswap.info/',
    shortName: 'es',
    chainId: 5197,
    networkId: 5197
  },
  {
    name: 'Humanode Mainnet',
    chain: 'HMND',
    rpc: [ 'https://explorer-rpc-http.mainnet.stages.humanode.io' ],
    faucets: [],
    nativeCurrency: { name: 'eHMND', symbol: 'eHMND', decimals: 18 },
    infoURL: 'https://humanode.io',
    shortName: 'hmnd',
    chainId: 5234,
    networkId: 5234,
    icon: 'humanode',
    explorers: [
      {
        name: 'Subscan',
        url: 'https://humanode.subscan.io',
        standard: 'EIP3091',
        icon: 'subscan'
      }
    ]
  },
  {
    name: 'Firechain Mainnet Old',
    chain: 'FIRE',
    icon: 'firechain',
    rpc: [ 'https://mainnet.rpc1.thefirechain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Firechain', symbol: 'FIRE', decimals: 18 },
    infoURL: 'https://thefirechain.com',
    shortName: '_old_fire',
    chainId: 5290,
    networkId: 5290,
    explorers: [],
    status: 'deprecated'
  },
  {
    name: 'Uzmi Network Mainnet',
    chain: 'UZMI',
    rpc: [ 'https://network.uzmigames.com.br/' ],
    faucets: [],
    nativeCurrency: { name: 'UZMI', symbol: 'UZMI', decimals: 18 },
    infoURL: 'https://uzmigames.com.br/',
    shortName: 'UZMI',
    chainId: 5315,
    networkId: 5315
  },
  {
    name: 'OpTrust Testnet',
    chain: 'OpTrust',
    rpc: [ 'https://rpctest.optrust.io' ],
    faucets: [],
    nativeCurrency: { name: 'TestBSC', symbol: 'tBNB', decimals: 18 },
    infoURL: 'https://optrust.io',
    shortName: 'toptrust',
    chainId: 5317,
    networkId: 5317,
    icon: 'optrust',
    explorers: [
      {
        name: 'OpTrust Testnet explorer',
        url: 'https://scantest.optrust.io',
        icon: 'optrust',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Tritanium Testnet',
    chain: 'TRITANIUM',
    rpc: [
      'https://nodetestnet-station-one.tritanium.network/',
      'https://nodetestnet-station-two.tritanium.network/'
    ],
    faucets: [ 'https://faucet.tritanium.network' ],
    nativeCurrency: { name: 'Tritanium Native Token', symbol: 'tTRN', decimals: 18 },
    infoURL: 'https://tritanium.network',
    shortName: 'ttrn',
    chainId: 5353,
    networkId: 5353,
    slip44: 1,
    icon: 'tritanium',
    explorers: [
      {
        name: 'TRITANIUM Testnet Explorer',
        icon: 'tritanium',
        url: 'https://testnet.tritanium.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Egochain',
    chainId: 5439,
    shortName: 'egax',
    chain: 'EGAX',
    networkId: 5439,
    nativeCurrency: { name: 'EGAX', symbol: 'EGAX', decimals: 18 },
    rpc: [ 'https://mainnet.egochain.org' ],
    faucets: [],
    infoURL: 'https://docs.egochain.org/',
    explorers: [
      {
        name: 'egoscan',
        url: 'https://egoscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'VEX EVM TESTNET',
    chain: 'vex',
    icon: 'vex',
    rpc: [ 'https://testnet.vexascan.com/evmapi' ],
    faucets: [ 'https://t.me/vexfaucetbot' ],
    nativeCurrency: { name: 'VEX EVM TESTNET', symbol: 'VEX', decimals: 18 },
    infoURL: 'https://vexanium.com',
    shortName: 'VEX',
    chainId: 5522,
    networkId: 5522,
    slip44: 1,
    explorers: [
      {
        name: 'Vexascan-EVM-TestNet',
        url: 'https://testnet.vexascan.com/evmexplorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Nahmii Mainnet',
    chain: 'Nahmii',
    rpc: [ 'https://l2.nahmii.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://nahmii.io',
    shortName: 'Nahmii',
    chainId: 5551,
    networkId: 5551,
    icon: 'nahmii',
    explorers: [
      {
        name: 'Nahmii mainnet explorer',
        url: 'https://explorer.nahmii.io',
        icon: 'nahmii',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.nahmii.io' } ]
    }
  },
  {
    name: 'Nahmii Testnet',
    chain: 'Nahmii',
    rpc: [ 'https://l2.testnet.nahmii.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://nahmii.io',
    shortName: 'NahmiiTestnet',
    chainId: 5553,
    networkId: 5553,
    slip44: 1,
    icon: 'nahmii',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.testnet.nahmii.io',
        icon: 'nahmii',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-3',
      bridges: [ { url: 'https://bridge.nahmii.io' } ]
    }
  },
  {
    name: 'Chain Verse Mainnet',
    chain: 'CVERSE',
    icon: 'chain_verse',
    rpc: [ 'https://rpc.chainverse.info' ],
    faucets: [],
    nativeCurrency: { name: 'Oasys', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://chainverse.info',
    shortName: 'cverse',
    chainId: 5555,
    networkId: 5555,
    explorers: [
      {
        name: 'Chain Verse Explorer',
        url: 'https://explorer.chainverse.info',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'opBNB Testnet',
    chain: 'opBNB',
    icon: 'bnbchain',
    rpc: [
      'https://opbnb-testnet-rpc.bnbchain.org',
      'https://opbnb-testnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3',
      'wss://opbnb-testnet.nodereal.io/ws/v1/64a9df0874fb4a93b9d0a3849de012d3',
      'https://opbnb-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
      'wss://opbnb-testnet.nodereal.io/ws/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
      'https://opbnb-testnet-rpc.publicnode.com',
      'wss://opbnb-testnet-rpc.publicnode.com'
    ],
    faucets: [ 'https://testnet.bnbchain.org/faucet-smart' ],
    nativeCurrency: { name: 'BNB Chain Native Token', symbol: 'tBNB', decimals: 18 },
    infoURL: 'https://opbnb.bnbchain.org/en',
    shortName: 'obnbt',
    chainId: 5611,
    networkId: 5611,
    slip44: 1,
    explorers: [
      {
        name: 'bscscan-opbnb-testnet',
        url: 'https://opbnb-testnet.bscscan.com',
        standard: 'EIP3091'
      },
      {
        name: 'opbnbscan',
        url: 'https://opbnbscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Arcturus Testneet',
    chain: 'Arcturus',
    rpc: [ 'https://rpc-testnet.arcturuschain.io/' ],
    faucets: [ 'https://faucet.arcturuschain.io' ],
    nativeCurrency: { name: 'tARC', symbol: 'tARC', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://arcturuschain.io',
    shortName: 'arcturus-testnet',
    chainId: 5615,
    networkId: 5615,
    explorers: [
      {
        name: 'explorer-arcturus-testnet',
        url: 'https://testnet.arcscan.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Arcturus Chain Testnet',
    chain: 'ARCTURUS',
    rpc: [ 'http://185.99.196.3:8545' ],
    faucets: [],
    nativeCurrency: { name: 'Test Arct', symbol: 'tARCT', decimals: 18 },
    infoURL: 'https://arcturuschain.io',
    shortName: 'ARCT',
    chainId: 5616,
    networkId: 5616,
    slip44: 1
  },
  {
    name: 'QIE Blockchain',
    chain: 'QIE',
    icon: 'qie',
    rpc: [
      'https://rpc-main1.qiblockchain.online/',
      'https://rpc-main2.qiblockchain.online/'
    ],
    faucets: [],
    nativeCurrency: { name: 'QIE Blockchain', symbol: 'QIE', decimals: 18 },
    infoURL: 'https://qiblockchain.online/',
    shortName: 'QIE',
    chainId: 5656,
    networkId: 5656,
    explorers: [
      {
        name: 'QIE Explorer',
        url: 'https://mainnet.qiblockchain.online',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Filenova Testnet',
    chain: 'Filenova',
    rpc: [ 'https://rpctest.filenova.org' ],
    faucets: [],
    nativeCurrency: { name: 'Test Filecoin', symbol: 'tFIL', decimals: 18 },
    infoURL: 'https://filenova.org',
    shortName: 'tfilenova',
    chainId: 5675,
    networkId: 5675,
    icon: 'filenova',
    explorers: [
      {
        name: 'filenova testnet explorer',
        url: 'https://scantest.filenova.org',
        icon: 'filenova',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Tanssi EVM ContainerChain',
    chain: 'EVMCC',
    rpc: [
      'https://fraa-dancebox-3001-rpc.a.dancebox.tanssi.network',
      'wss://fraa-dancebox-3001-rpc.a.dancebox.tanssi.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'TANGO', symbol: 'TANGO', decimals: 18 },
    infoURL: 'https://tanssi.network',
    shortName: 'TanssiCC',
    chainId: 5678,
    networkId: 5678,
    explorers: []
  },
  {
    name: 'Syscoin Tanenbaum Testnet',
    chain: 'SYS',
    rpc: [
      'https://rpc.tanenbaum.io',
      'wss://rpc.tanenbaum.io/wss',
      'https://syscoin-tanenbaum-evm.publicnode.com',
      'wss://syscoin-tanenbaum-evm.publicnode.com'
    ],
    faucets: [ 'https://faucet.tanenbaum.io' ],
    nativeCurrency: { name: 'Testnet Syscoin', symbol: 'tSYS', decimals: 18 },
    infoURL: 'https://syscoin.org',
    shortName: 'tsys',
    chainId: 5700,
    networkId: 5700,
    slip44: 1,
    explorers: [
      {
        name: 'Syscoin Testnet Block Explorer',
        url: 'https://tanenbaum.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Hika Network Testnet',
    title: 'Hika Network Testnet',
    chain: 'HIK',
    icon: 'hik',
    rpc: [ 'https://rpc-testnet.hika.network/' ],
    faucets: [],
    nativeCurrency: { name: 'Hik Token', symbol: 'HIK', decimals: 18 },
    infoURL: 'https://hika.network/',
    shortName: 'hik',
    chainId: 5729,
    networkId: 5729,
    explorers: [
      {
        name: 'Hika Network Testnet Explorer',
        url: 'https://scan-testnet.hika.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'SatoshiChain Testnet',
    chain: 'SATS',
    icon: 'satoshichain',
    rpc: [ 'https://testnet-rpc.satoshichain.io' ],
    faucets: [ 'https://faucet.satoshichain.io' ],
    nativeCurrency: { name: 'SatoshiChain Coin', symbol: 'SATS', decimals: 18 },
    infoURL: 'https://satoshichain.net',
    shortName: 'satst',
    chainId: 5758,
    networkId: 5758,
    slip44: 1,
    explorers: [
      {
        name: 'SatoshiChain Testnet Explorer',
        url: 'https://testnet.satoshiscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ganache',
    title: 'Ganache GUI Ethereum Testnet',
    chain: 'ETH',
    icon: 'ganache',
    rpc: [ 'https://127.0.0.1:7545' ],
    faucets: [],
    nativeCurrency: { name: 'Ganache Test Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://trufflesuite.com/ganache/',
    shortName: 'ggui',
    chainId: 5777,
    networkId: 5777,
    slip44: 1,
    explorers: []
  },
  {
    name: 'Tangle',
    chain: 'Tangle',
    rpc: [ 'https://rpc.tangle.tools', 'wss://rpc.tangle.tools' ],
    faucets: [],
    nativeCurrency: { name: 'Tangle', symbol: 'TNT', decimals: 18 },
    infoURL: 'https://docs.tangle.tools',
    shortName: 'tangle',
    chainId: 5845,
    networkId: 5845,
    icon: 'tangle',
    explorers: [
      {
        name: 'Tangle EVM Explorer',
        url: 'https://explorer.tangle.tools',
        standard: 'EIP3091',
        icon: 'tangle'
      }
    ]
  },
  {
    name: 'Ontology Testnet',
    chain: 'Ontology',
    icon: 'ontology',
    rpc: [
      'http://polaris1.ont.io:20339',
      'http://polaris2.ont.io:20339',
      'http://polaris3.ont.io:20339',
      'http://polaris4.ont.io:20339',
      'https://polaris1.ont.io:10339',
      'https://polaris2.ont.io:10339',
      'https://polaris3.ont.io:10339',
      'https://polaris4.ont.io:10339'
    ],
    faucets: [ 'https://developer.ont.io/' ],
    nativeCurrency: { name: 'ONG', symbol: 'ONG', decimals: 18 },
    infoURL: 'https://ont.io/',
    shortName: 'OntologyTestnet',
    chainId: 5851,
    networkId: 5851,
    slip44: 1,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.ont.io/testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Wegochain Rubidium Mainnet',
    chain: 'RBD',
    rpc: [ 'https://proxy.wegochain.io', 'http://wallet.wegochain.io:7764' ],
    faucets: [],
    nativeCurrency: { name: 'Rubid', symbol: 'RBD', decimals: 18 },
    infoURL: 'https://www.wegochain.io',
    shortName: 'rbd',
    chainId: 5869,
    networkId: 5869,
    explorers: [
      {
        name: 'wegoscan2',
        url: 'https://scan2.wegochain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BounceBit Testnet',
    chain: 'BounceBit',
    rpc: [ 'https://fullnode-testnet.bouncebitapi.com/' ],
    faucets: [],
    nativeCurrency: { name: 'BounceBit', symbol: 'BB', decimals: 18 },
    infoURL: 'https://bouncebit.io',
    shortName: 'bouncebit-testnet',
    chainId: 6000,
    networkId: 6000,
    explorers: [
      {
        name: 'BBScan Testnet Explorer',
        url: 'https://bbscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'BounceBit Mainnet',
    chain: 'BounceBit',
    rpc: [ 'https://fullnode-mainnet.bouncebitapi.com/' ],
    faucets: [],
    nativeCurrency: { name: 'BounceBit', symbol: 'BB', decimals: 18 },
    infoURL: 'https://bouncebit.io',
    shortName: 'bouncebit-mainnet',
    chainId: 6001,
    networkId: 6001,
    explorers: [
      {
        name: 'BBScan Mainnet Explorer',
        url: 'https://bbscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Tres Testnet',
    chain: 'TresLeches',
    rpc: [ 'https://rpc-test.tresleches.finance/' ],
    faucets: [ 'http://faucet.tresleches.finance:8080' ],
    nativeCurrency: { name: 'TRES', symbol: 'TRES', decimals: 18 },
    infoURL: 'https://treschain.com',
    shortName: 'TRESTEST',
    chainId: 6065,
    networkId: 6065,
    slip44: 1,
    icon: 'tresleches',
    explorers: [
      {
        name: 'treslechesexplorer',
        url: 'https://explorer-test.tresleches.finance',
        icon: 'treslechesexplorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Tres Mainnet',
    chain: 'TresLeches',
    rpc: [ 'https://rpc.tresleches.finance/', 'https://rpc.treschain.io/' ],
    faucets: [],
    nativeCurrency: { name: 'TRES', symbol: 'TRES', decimals: 18 },
    infoURL: 'https://treschain.com',
    shortName: 'TRESMAIN',
    chainId: 6066,
    networkId: 6066,
    icon: 'tresleches',
    explorers: [
      {
        name: 'treslechesexplorer',
        url: 'https://explorer.tresleches.finance',
        icon: 'treslechesexplorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Cascadia Testnet',
    chain: 'Cascadia',
    rpc: [ 'https://testnet.cascadia.foundation' ],
    faucets: [ 'https://www.cascadia.foundation/faucet' ],
    nativeCurrency: { name: 'CC', symbol: 'tCC', decimals: 18 },
    infoURL: 'https://www.cascadia.foundation',
    shortName: 'cascadia',
    chainId: 6102,
    networkId: 6102,
    icon: 'cascadia',
    explorers: [
      {
        name: 'Cascadia EVM Explorer',
        url: 'https://explorer.cascadia.foundation',
        standard: 'none',
        icon: 'cascadia'
      },
      {
        name: 'Cascadia Cosmos Explorer',
        url: 'https://validator.cascadia.foundation',
        standard: 'none',
        icon: 'cascadia'
      }
    ]
  },
  {
    name: 'UPTN Testnet',
    chain: 'UPTN',
    icon: 'uptn',
    rpc: [ 'https://node-api.alp.uptn.io/v1/ext/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'UPTN', symbol: 'UPTN', decimals: 18 },
    infoURL: 'https://uptn.io',
    shortName: 'UPTN-TEST',
    chainId: 6118,
    networkId: 6118,
    slip44: 1,
    explorers: [
      {
        name: 'UPTN Testnet Explorer',
        url: 'https://testnet.explorer.uptn.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'UPTN',
    chain: 'UPTN',
    icon: 'uptn',
    rpc: [ 'https://node-api.uptn.io/v1/ext/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'UPTN', symbol: 'UPTN', decimals: 18 },
    infoURL: 'https://uptn.io',
    shortName: 'UPTN',
    chainId: 6119,
    networkId: 6119,
    explorers: [
      {
        name: 'UPTN Explorer',
        url: 'https://explorer.uptn.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Digit Soul Smart Chain',
    chain: 'DGS',
    rpc: [ 'https://dsc-rpc.digitsoul.co.th' ],
    faucets: [],
    icon: 'pnet',
    nativeCurrency: { name: 'Digit Coin', symbol: 'DGC', decimals: 18 },
    infoURL: '',
    shortName: 'DGS',
    chainId: 6363,
    networkId: 6363
  },
  {
    name: 'Peerpay',
    chain: 'P2P',
    rpc: [ 'https://peerpay.su.gy/p2p' ],
    faucets: [],
    nativeCurrency: { name: 'Peerpay', symbol: 'P2P', decimals: 18 },
    infoURL: 'https://peerpay.su.gy',
    shortName: 'Peerpay',
    chainId: 6502,
    networkId: 6502,
    explorers: []
  },
  {
    name: 'Scolcoin WeiChain Testnet',
    chain: 'SCOLWEI-testnet',
    rpc: [ 'https://testnet-rpc.scolcoin.com' ],
    faucets: [ 'https://faucet.scolcoin.com' ],
    nativeCurrency: { name: 'Scolcoin', symbol: 'SCOL', decimals: 18 },
    infoURL: 'https://scolcoin.com',
    shortName: 'SRC-test',
    chainId: 6552,
    networkId: 6552,
    slip44: 1,
    icon: 'scolcoin',
    explorers: [
      {
        name: 'Scolscan Testnet Explorer',
        url: 'https://testnet-explorer.scolcoin.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Fox Testnet Network',
    chain: 'FOX',
    rpc: [
      'https://rpc-testnet-v1.foxchain.app/',
      'https://rpc2-testnet-v1.foxchain.app/',
      'https://rpc3-testnet-v1.foxchain.app'
    ],
    faucets: [ 'https://faucet.foxchain.app' ],
    nativeCurrency: { name: 'FOX Native Token', symbol: 'tFOX', decimals: 18 },
    infoURL: 'https://foxchain.app',
    shortName: 'fox',
    chainId: 6565,
    networkId: 6565,
    slip44: 1,
    icon: 'fox',
    explorers: [
      {
        name: 'FOX Testnet Explorer',
        icon: 'fox',
        url: 'https://testnet.foxscan.app',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Pixie Chain Mainnet',
    chain: 'PixieChain',
    rpc: [
      'https://http-mainnet.chain.pixie.xyz',
      'wss://ws-mainnet.chain.pixie.xyz'
    ],
    faucets: [],
    nativeCurrency: { name: 'Pixie Chain Native Token', symbol: 'PIX', decimals: 18 },
    infoURL: 'https://chain.pixie.xyz',
    shortName: 'pixie-chain',
    chainId: 6626,
    networkId: 6626,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://scan.chain.pixie.xyz',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Latest Chain Testnet',
    chain: 'LATEST',
    icon: 'latestChain',
    rpc: [ 'https://testnet-rpc.latestcoin.io' ],
    faucets: [ 'http://faucet.latestchain.io' ],
    nativeCurrency: { name: 'Latest', symbol: 'LATEST', decimals: 18 },
    infoURL: 'https://latestcoin.io',
    shortName: 'LATESTt',
    chainId: 6660,
    networkId: 6660,
    explorers: [
      {
        name: 'Latest Chain',
        url: 'http://testnet.latestchain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Cybria Mainnet',
    chain: 'CYBA',
    rpc: [ 'https://rpc-mainnet.cybria.io' ],
    faucets: [],
    nativeCurrency: { name: 'Cybria', symbol: 'CYBA', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://cybria.io',
    shortName: 'cyba',
    chainId: 6661,
    networkId: 6661,
    icon: 'cybria',
    explorers: [
      {
        name: 'Cybria Explorer',
        url: 'https://cybascan.io',
        icon: 'cybascan',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155420',
      bridges: [ { url: 'https://app.optimism.io/bridge' } ]
    }
  },
  {
    name: 'Cybria Testnet',
    chain: 'CYBA',
    rpc: [ 'https://l2-rpc.cybascan.io' ],
    faucets: [ 'https://faucet.cybascan.io' ],
    nativeCurrency: { name: 'Cybria', symbol: 'CYBA', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://cybria.io',
    shortName: 'tcyba',
    chainId: 6666,
    networkId: 6666,
    icon: 'cybria',
    explorers: [
      {
        name: 'Cybria Explorer',
        url: 'https://explorer.cybascan.io',
        icon: 'cybascan',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155420',
      bridges: [ { url: 'https://app.optimism.io/bridge' } ]
    }
  },
  {
    name: 'IRIShub',
    chain: 'IRIShub',
    rpc: [
      'https://evmrpc.irishub-1.irisnet.org',
      'https://iris-evm.publicnode.com',
      'wss://iris-evm.publicnode.com'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Eris', symbol: 'ERIS', decimals: 18 },
    infoURL: 'https://www.irisnet.org',
    shortName: 'iris',
    chainId: 6688,
    networkId: 6688,
    icon: 'irishub',
    explorers: [
      {
        name: 'IRISHub Cosmos Explorer (IOBScan)',
        url: 'https://irishub.iobscan.io',
        standard: 'none',
        icon: 'irishub'
      }
    ]
  },
  {
    name: 'PAXB Mainnet',
    chain: 'PAXB',
    rpc: [ 'https://chain.paxb.io' ],
    faucets: [],
    nativeCurrency: { name: 'PAXB', symbol: 'PAXB', decimals: 18 },
    infoURL: 'https://paxb.io/',
    shortName: 'PAXB',
    chainId: 6701,
    networkId: 6701,
    icon: 'paxb',
    explorers: [
      {
        name: 'PAXB Explorer',
        url: 'https://scan.paxb.io',
        icon: 'paxb',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Compverse Mainnet',
    chain: 'CPV',
    icon: 'compverse',
    rpc: [
      'https://rpc.compverse.io/',
      'https://rpc-useast1.compverse.io/'
    ],
    faucets: [],
    nativeCurrency: { name: 'compverse', symbol: 'CPV', decimals: 18 },
    infoURL: 'https://compverse.io',
    shortName: 'compverse',
    chainId: 6779,
    networkId: 6779,
    slip44: 7779,
    explorers: [
      {
        name: 'cpvscan',
        url: 'https://scan.compverse.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Gold Smart Chain Mainnet',
    chain: 'STAND',
    icon: 'stand',
    rpc: [ 'https://rpc-mainnet.goldsmartchain.com' ],
    faucets: [ 'https://faucet.goldsmartchain.com' ],
    nativeCurrency: { name: 'Standard in Gold', symbol: 'STAND', decimals: 18 },
    infoURL: 'https://goldsmartchain.com',
    shortName: 'STANDm',
    chainId: 6789,
    networkId: 6789,
    explorers: [
      {
        name: 'Gold Smart Chain',
        url: 'https://mainnet.goldsmartchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Tomb Chain Mainnet',
    chain: 'Tomb Chain',
    rpc: [ 'https://rpc.tombchain.com/' ],
    faucets: [],
    nativeCurrency: { name: 'Tomb', symbol: 'TOMB', decimals: 18 },
    infoURL: 'https://tombchain.com/',
    shortName: 'tombchain',
    chainId: 6969,
    networkId: 6969,
    explorers: [
      {
        name: 'tombscout',
        url: 'https://tombscout.com',
        standard: 'none'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-250',
      bridges: [ { url: 'https://lif3.com/bridge' } ]
    }
  },
  {
    name: 'PolySmartChain',
    chain: 'PSC',
    rpc: [
      'https://seed0.polysmartchain.com/',
      'https://seed1.polysmartchain.com/',
      'https://seed2.polysmartchain.com/'
    ],
    faucets: [],
    nativeCurrency: { name: 'PSC', symbol: 'PSC', decimals: 18 },
    infoURL: 'https://www.polysmartchain.com/',
    shortName: 'psc',
    chainId: 6999,
    networkId: 6999
  },
  {
    name: 'ZetaChain Mainnet',
    chain: 'ZetaChain',
    icon: 'zetachain',
    rpc: [
      'https://zetachain-evm.blockpi.network/v1/rpc/public',
      'https://zetachain-mainnet-archive.allthatnode.com:8545'
    ],
    faucets: [],
    nativeCurrency: { name: 'Zeta', symbol: 'ZETA', decimals: 18 },
    infoURL: 'https://zetachain.com/docs/',
    shortName: 'zetachain-mainnet',
    chainId: 7000,
    networkId: 7000,
    status: 'active',
    explorers: [
      {
        name: 'ZetaChain Mainnet Explorer',
        url: 'https://explorer.mainnet.zetachain.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ZetaChain Athens 3 Testnet',
    chain: 'ZetaChain',
    icon: 'zetachain',
    rpc: [
      'https://zetachain-athens-evm.blockpi.network/v1/rpc/public',
      'wss://zetachain-athens.blockpi.network/rpc/v1/public/websocket',
      'https://zetachain-testnet-archive.allthatnode.com:8545'
    ],
    faucets: [ 'https://labs.zetachain.com/get-zeta' ],
    nativeCurrency: { name: 'Zeta', symbol: 'ZETA', decimals: 18 },
    infoURL: 'https://zetachain.com/docs',
    shortName: 'zetachain-athens',
    chainId: 7001,
    networkId: 7001,
    slip44: 1,
    status: 'active',
    explorers: [
      {
        name: 'ZetaChain Athens Testnet Explorer',
        url: 'https://athens3.explorer.zetachain.com',
        standard: 'none'
      },
      {
        name: 'blockscout',
        url: 'https://zetachain-athens-3.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BST Chain',
    chain: 'BSTC',
    rpc: [ 'https://rpc.bstchain.io/' ],
    faucets: [],
    nativeCurrency: { name: 'BST Chain', symbol: 'BSTC', decimals: 18 },
    infoURL: 'https://bstchain.io',
    shortName: 'BSTC',
    chainId: 7007,
    networkId: 7007,
    icon: 'bstc',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://bstscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ella the heart',
    chain: 'ella',
    icon: 'ella',
    rpc: [ 'https://rpc.ella.network' ],
    faucets: [],
    nativeCurrency: { name: 'Ella', symbol: 'ELLA', decimals: 18 },
    infoURL: 'https://ella.network',
    shortName: 'ELLA',
    chainId: 7027,
    networkId: 7027,
    explorers: [
      {
        name: 'Ella',
        url: 'https://ella.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Planq Mainnet',
    chain: 'Planq',
    icon: 'planq',
    rpc: [ 'https://evm-rpc.planq.network' ],
    faucets: [],
    nativeCurrency: { name: 'Planq', symbol: 'PLQ', decimals: 18 },
    infoURL: 'https://planq.network',
    shortName: 'planq',
    chainId: 7070,
    networkId: 7070,
    explorers: [
      {
        name: 'Planq EVM Explorer (Blockscout)',
        url: 'https://evm.planq.network',
        standard: 'none'
      },
      {
        name: 'Planq Cosmos Explorer (BigDipper)',
        url: 'https://explorer.planq.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Nume',
    title: 'Nume',
    chain: 'Nume',
    rpc: [ 'https://rpc.numecrypto.com' ],
    faucets: [],
    nativeCurrency: { name: 'Dai Stablecoin', symbol: 'DAI', decimals: 18 },
    infoURL: 'https://numecrypto.com',
    shortName: 'nume',
    chainId: 7100,
    networkId: 7100,
    icon: 'nume',
    explorers: [
      {
        name: 'numeexplorer',
        url: 'https://explorer.numecrypto.com',
        icon: 'nume',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Help The Homeless',
    chain: 'mainnet',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Help The Homeless Coin', symbol: 'HTH', decimals: 18 },
    infoURL: 'https://hth.world',
    shortName: 'hth',
    chainId: 7118,
    networkId: 7118,
    icon: 'hth',
    status: 'incubating',
    explorers: []
  },
  {
    name: 'Bitrock Mainnet',
    chain: 'Bitrock',
    icon: 'bitrock',
    rpc: [ 'https://connect.bit-rock.io', 'https://brockrpc.io' ],
    faucets: [],
    nativeCurrency: { name: 'BITROCK', symbol: 'BROCK', decimals: 18 },
    infoURL: 'https://bit-rock.io',
    shortName: 'bitrock',
    chainId: 7171,
    networkId: 7171,
    explorers: [
      {
        name: 'Bitrock Explorer',
        url: 'https://explorer.bit-rock.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'KLYNTAR',
    chain: 'KLY',
    rpc: [
      'https://evm.klyntar.org/kly_evm_rpc',
      'https://evm.klyntarscan.org/kly_evm_rpc'
    ],
    faucets: [],
    nativeCurrency: { name: 'KLYNTAR', symbol: 'KLY', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://klyntar.org',
    shortName: 'kly',
    chainId: 7331,
    networkId: 7331,
    icon: 'klyntar',
    explorers: [],
    status: 'incubating'
  },
  {
    name: 'Horizen EON Mainnet',
    shortName: 'EON',
    chain: 'EON',
    icon: 'eon',
    rpc: [
      'https://eon-rpc.horizenlabs.io/ethv1',
      'https://rpc.ankr.com/horizen_eon'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Zencash', symbol: 'ZEN', decimals: 18 },
    infoURL: 'https://horizen.io/',
    chainId: 7332,
    networkId: 7332,
    slip44: 121,
    explorers: [
      {
        name: 'Horizen EON Block Explorer',
        url: 'https://eon-explorer.horizenlabs.io',
        icon: 'eon',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Shyft Mainnet',
    chain: 'SHYFT',
    icon: 'shyft',
    rpc: [ 'https://rpc.shyft.network/' ],
    faucets: [],
    nativeCurrency: { name: 'Shyft', symbol: 'SHYFT', decimals: 18 },
    infoURL: 'https://shyft.network',
    shortName: 'shyft',
    chainId: 7341,
    networkId: 7341,
    slip44: 2147490989,
    explorers: [
      {
        name: 'Shyft BX',
        url: 'https://bx.shyft.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Raba Network Mainnet',
    chain: 'Raba',
    icon: 'raba',
    rpc: [ 'https://rpc.x.raba.app/', 'wss://rpc.x.raba.app/ws/' ],
    faucets: [],
    nativeCurrency: { name: 'Raba', symbol: 'RABA', decimals: 18 },
    infoURL: 'https://x.raba.app/',
    shortName: 'raba',
    chainId: 7484,
    networkId: 7484,
    explorers: [
      {
        name: 'raba',
        url: 'https://x.raba.app/explorer',
        standard: 'none'
      }
    ]
  },
  {
    name: 'MEVerse Chain Mainnet',
    chain: 'MEVerse',
    rpc: [ 'https://rpc.meversemainnet.io' ],
    faucets: [],
    nativeCurrency: { name: 'MEVerse', symbol: 'MEV', decimals: 18 },
    infoURL: 'https://www.meverse.sg',
    shortName: 'MEV',
    chainId: 7518,
    networkId: 7518,
    icon: 'meverse',
    explorers: [
      {
        name: 'MEVerse Chain Explorer',
        url: 'https://www.meversescan.io',
        standard: 'none',
        icon: 'meverse'
      }
    ]
  },
  {
    name: 'Cyber Mainnet',
    chain: 'Cyber',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    icon: 'cyber',
    infoURL: 'https://cyber.co/',
    shortName: 'cyeth',
    chainId: 7560,
    networkId: 7560,
    status: 'incubating',
    parent: { type: 'L2', chain: 'eip155-1' }
  },
  {
    name: 'ADIL Testnet',
    chain: 'ADIL',
    icon: 'adil',
    rpc: [ 'https://testnet.adilchain-rpc.io' ],
    faucets: [ 'https://testnet-faucet.adil-scan.io' ],
    nativeCurrency: { name: 'Testnet ADIL', symbol: 'ADIL', decimals: 18 },
    infoURL: 'https://adilchain.io',
    shortName: 'tadil',
    chainId: 7575,
    networkId: 7575,
    slip44: 1,
    explorers: [
      {
        name: 'ADIL Testnet Explorer',
        url: 'https://testnet.adilchain-scan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Adil Chain V2 Mainnet',
    chain: 'ADIL',
    icon: 'adil',
    rpc: [ 'https://adilchain-rpc.io' ],
    faucets: [],
    nativeCurrency: { name: 'ADIL', symbol: 'ADIL', decimals: 18 },
    infoURL: 'https://adilchain.io',
    shortName: 'adil',
    chainId: 7576,
    networkId: 7576,
    explorers: [
      {
        name: 'ADIL Mainnet Explorer',
        url: 'https://adilchain-scan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'The Root Network - Mainnet',
    chain: 'TRN',
    rpc: [
      'https://root.rootnet.live/archive',
      'wss://root.rootnet.live/archive/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'XRP', symbol: 'XRP', decimals: 6 },
    infoURL: 'https://www.futureverse.com/technology/root',
    shortName: 'trn-mainnet',
    chainId: 7668,
    networkId: 7668,
    explorers: [
      {
        name: 'rootnet',
        url: 'https://explorer.rootnet.live',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'The Root Network - Porcini Testnet',
    chain: 'TRN',
    rpc: [
      'https://porcini.rootnet.app/archive',
      'wss://porcini.rootnet.app/archive/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'XRP', symbol: 'XRP', decimals: 6 },
    infoURL: 'https://www.futureverse.com/technology/root',
    shortName: 'trn-porcini',
    chainId: 7672,
    networkId: 7672,
    slip44: 1,
    explorers: [
      {
        name: 'rootnet',
        url: 'https://explorer.rootnet.cloud',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Canto',
    chain: 'Canto',
    rpc: [
      'https://canto.slingshot.finance',
      'https://canto-rpc.ansybl.io',
      'https://mainnode.plexnode.org:8545',
      'https://canto.gravitychain.io/'
    ],
    faucets: [],
    nativeCurrency: { name: 'Canto', symbol: 'CANTO', decimals: 18 },
    infoURL: 'https://canto.io',
    shortName: 'canto',
    chainId: 7700,
    networkId: 7700,
    explorers: [
      {
        name: 'Canto Explorer (OKLink)',
        url: 'https://www.oklink.com/canto',
        standard: 'EIP3091'
      },
      {
        name: 'Canto EVM Explorer (Blockscout)',
        url: 'https://tuber.build',
        standard: 'EIP3091'
      },
      {
        name: 'dexguru',
        url: 'https://canto.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Canto Tesnet',
    chain: 'Canto',
    rpc: [ 'https://testnet-archive.plexnode.wtf' ],
    faucets: [],
    nativeCurrency: { name: 'Testnet Canto', symbol: 'CANTO', decimals: 18 },
    infoURL: 'https://canto.io',
    shortName: 'TestnetCanto',
    chainId: 7701,
    networkId: 7701,
    slip44: 1,
    explorers: [
      {
        name: 'Canto Testnet EVM Explorer (Blockscout)',
        url: 'https://testnet.tuber.build',
        standard: 'none'
      },
      {
        name: 'dexguru',
        url: 'https://canto-test.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bitrock Testnet',
    chain: 'Bitrock',
    icon: 'bitrock',
    rpc: [ 'https://testnet.bit-rock.io' ],
    faucets: [ 'https://faucet.bit-rock.io' ],
    nativeCurrency: { name: 'BITROCK', symbol: 'BROCK', decimals: 18 },
    infoURL: 'https://bit-rock.io',
    shortName: 'tbitrock',
    chainId: 7771,
    networkId: 7771,
    slip44: 1,
    explorers: [
      {
        name: 'Bitrock Testnet Explorer',
        url: 'https://testnetscan.bit-rock.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Rise of the Warbots Testnet',
    chain: 'nmactest',
    rpc: [
      'https://testnet1.riseofthewarbots.com',
      'https://testnet2.riseofthewarbots.com',
      'https://testnet3.riseofthewarbots.com',
      'https://testnet4.riseofthewarbots.com',
      'https://testnet5.riseofthewarbots.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Nano Machines', symbol: 'NMAC', decimals: 18 },
    infoURL: 'https://riseofthewarbots.com/',
    shortName: 'RiseOfTheWarbotsTestnet',
    chainId: 7777,
    networkId: 7777,
    slip44: 1,
    explorers: [
      {
        name: 'avascan',
        url: 'https://testnet.avascan.info/blockchain/2mZ9doojfwHzXN3VXDQELKnKyZYxv7833U8Yq5eTfFx3hxJtiy',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Orenium Mainnet Protocol',
    chain: 'ORE',
    rpc: [
      'https://validator-mainnet.orenium.org',
      'https://rpc-oracle-mainnet.orenium.org',
      'https://portalmainnet.orenium.org'
    ],
    nativeCurrency: { name: 'ORENIUM', symbol: 'ORE', decimals: 18 },
    infoURL: 'https://orenium.org',
    shortName: 'ore',
    chainId: 7778,
    networkId: 7778,
    slip44: 1,
    icon: 'ore',
    faucets: [],
    explorers: [
      {
        name: 'ORE Mainnet Explorer',
        icon: 'ore',
        url: 'https://oreniumscan.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'OpenEX LONG Testnet',
    title: 'OpenEX LONG Testnet',
    chain: 'OEX',
    icon: 'oex',
    rpc: [ 'https://long.rpc.openex.network/' ],
    faucets: [ 'https://long.hub.openex.network/faucet' ],
    nativeCurrency: { name: 'USDT Testnet', symbol: 'USDT', decimals: 18 },
    infoURL: 'https://openex.network',
    shortName: 'oex',
    chainId: 7798,
    networkId: 7798,
    slip44: 1,
    explorers: [
      {
        name: 'OpenEX Long Testnet Explorer',
        url: 'https://scan.long.openex.network',
        icon: 'oex',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'MaalChain Testnet',
    chain: 'MaalChain Testnet',
    icon: 'maal-test',
    rpc: [ 'https://node1.maalscan.io/', 'https://rpc-bntest.maalscan.io/' ],
    faucets: [ 'https://faucet-testnet.maalscan.io/' ],
    nativeCurrency: { name: 'MAAL', symbol: 'MAAL', decimals: 18 },
    infoURL: 'https://www.maalchain.com/',
    shortName: 'maal-test',
    chainId: 7860,
    networkId: 7860,
    slip44: 1,
    explorers: [
      {
        name: 'maalscan testnet',
        url: 'https://testnet.maalscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Hazlor Testnet',
    chain: 'SCAS',
    rpc: [
      'https://hatlas.rpc.hazlor.com:8545',
      'wss://hatlas.rpc.hazlor.com:8546'
    ],
    faucets: [ 'https://faucet.hazlor.com' ],
    nativeCurrency: { name: 'Hazlor Test Coin', symbol: 'TSCAS', decimals: 18 },
    infoURL: 'https://hazlor.com',
    shortName: 'tscas',
    chainId: 7878,
    networkId: 7878,
    slip44: 1,
    explorers: [
      {
        name: 'Hazlor Testnet Explorer',
        url: 'https://explorer.hazlor.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Kinto Mainnet',
    chain: 'Kinto Mainnet',
    rpc: [
      'https://rpc.kinto.xyz/http',
      'https://kinto-mainnet.calderachain.xyz/http'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://kinto.xyz',
    shortName: 'kintoMainnet',
    chainId: 7887,
    networkId: 7887,
    icon: 'kinto',
    explorers: [
      {
        name: 'Kinto Explorer',
        url: 'https://explorer.kinto.xyz',
        icon: 'kinto',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ARDENIUM Athena',
    chain: 'ATHENA',
    rpc: [ 'https://rpc-athena.ardescan.com/' ],
    faucets: [ 'https://faucet-athena.ardescan.com/' ],
    nativeCurrency: { name: 'ARD', symbol: 'tARD', decimals: 18 },
    infoURL: 'https://ardenium.org',
    shortName: 'ard',
    chainId: 7895,
    networkId: 7895,
    icon: 'ard',
    explorers: [
      {
        name: 'ARDENIUM Athena Explorer',
        icon: 'ard',
        url: 'https://testnet.ardscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Dot Blox',
    chain: 'DTBX',
    icon: 'dotblox',
    rpc: [ 'https://rpc.dotblox.io' ],
    faucets: [],
    nativeCurrency: { name: 'Dot Blox', symbol: 'DTBX', decimals: 18 },
    infoURL: 'https://explorer.dotblox.io',
    shortName: 'DTBX',
    chainId: 7923,
    networkId: 7923,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.dotblox.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'DOS Chain',
    chain: 'DOS',
    rpc: [ 'https://main.doschain.com' ],
    faucets: [],
    nativeCurrency: { name: 'DOS', symbol: 'DOS', decimals: 18 },
    infoURL: 'https://doschain.io',
    shortName: 'dos',
    chainId: 7979,
    networkId: 7979,
    icon: 'doschain',
    explorers: [
      {
        name: 'DOScan',
        url: 'https://doscan.io',
        icon: 'doschain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Teleport',
    chain: 'Teleport',
    rpc: [ 'https://evm-rpc.teleport.network' ],
    faucets: [],
    nativeCurrency: { name: 'Tele', symbol: 'TELE', decimals: 18 },
    infoURL: 'https://teleport.network',
    shortName: 'teleport',
    chainId: 8000,
    networkId: 8000,
    icon: 'teleport',
    explorers: [
      {
        name: 'Teleport EVM Explorer (Blockscout)',
        url: 'https://evm-explorer.teleport.network',
        standard: 'none',
        icon: 'teleport'
      },
      {
        name: 'Teleport Cosmos Explorer (Big Dipper)',
        url: 'https://explorer.teleport.network',
        standard: 'none',
        icon: 'teleport'
      }
    ]
  },
  {
    name: 'Teleport Testnet',
    chain: 'Teleport',
    rpc: [ 'https://evm-rpc.testnet.teleport.network' ],
    faucets: [ 'https://chain-docs.teleport.network/testnet/faucet.html' ],
    nativeCurrency: { name: 'Tele', symbol: 'TELE', decimals: 18 },
    infoURL: 'https://teleport.network',
    shortName: 'teleport-testnet',
    chainId: 8001,
    networkId: 8001,
    slip44: 1,
    icon: 'teleport',
    explorers: [
      {
        name: 'Teleport EVM Explorer (Blockscout)',
        url: 'https://evm-explorer.testnet.teleport.network',
        standard: 'none',
        icon: 'teleport'
      },
      {
        name: 'Teleport Cosmos Explorer (Big Dipper)',
        url: 'https://explorer.testnet.teleport.network',
        standard: 'none',
        icon: 'teleport'
      }
    ]
  },
  {
    name: 'MDGL Testnet',
    chain: 'MDGL',
    rpc: [ 'https://testnet.mdgl.io' ],
    faucets: [],
    nativeCurrency: { name: 'MDGL Token', symbol: 'MDGLT', decimals: 18 },
    infoURL: 'https://mdgl.io',
    shortName: 'mdgl',
    chainId: 8029,
    networkId: 8029,
    slip44: 1
  },
  {
    name: 'Karak Sepolia',
    title: 'Karak Testnet Sepolia',
    chain: 'Karak',
    icon: 'karak',
    rpc: [ 'https://rpc.sepolia.karak.network' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://karak.network',
    shortName: 'karak-sepolia',
    chainId: 8054,
    networkId: 8054,
    explorers: [
      {
        name: 'Karak Sepolia Explorer',
        url: 'https://explorer.sepolia.karak.network',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-11155111' }
  },
  {
    name: 'Shardeum Liberty 1.X',
    chain: 'Shardeum',
    icon: 'shardeum',
    rpc: [ 'https://liberty10.shardeum.org/' ],
    faucets: [ 'https://faucet.liberty10.shardeum.org' ],
    nativeCurrency: { name: 'Shardeum SHM', symbol: 'SHM', decimals: 18 },
    infoURL: 'https://docs.shardeum.org/',
    shortName: 'Liberty10',
    chainId: 8080,
    networkId: 8080,
    explorers: [
      {
        name: 'Shardeum Scan',
        url: 'https://explorer-liberty10.shardeum.org',
        standard: 'EIP3091'
      }
    ],
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'Shardeum Liberty 2.X',
    chain: 'Shardeum',
    icon: 'shardeum',
    rpc: [ 'https://liberty20.shardeum.org/' ],
    faucets: [ 'https://faucet.liberty20.shardeum.org' ],
    nativeCurrency: { name: 'Shardeum SHM', symbol: 'SHM', decimals: 18 },
    infoURL: 'https://docs.shardeum.org/',
    shortName: 'Liberty20',
    chainId: 8081,
    networkId: 8081,
    explorers: [
      {
        name: 'Shardeum Scan',
        url: 'https://explorer-liberty20.shardeum.org',
        standard: 'EIP3091'
      }
    ],
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'Shardeum Sphinx 1.X',
    chain: 'Shardeum',
    icon: 'shardeum',
    rpc: [ 'https://sphinx.shardeum.org/' ],
    faucets: [ 'https://faucet-sphinx.shardeum.org/' ],
    nativeCurrency: { name: 'Shardeum SHM', symbol: 'SHM', decimals: 18 },
    infoURL: 'https://docs.shardeum.org/',
    shortName: 'Sphinx10',
    chainId: 8082,
    networkId: 8082,
    explorers: [
      {
        name: 'Shardeum Scan',
        url: 'https://explorer-sphinx.shardeum.org',
        standard: 'EIP3091'
      }
    ],
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'Bitcoin Chain',
    chain: 'BTC',
    rpc: [ 'https://rpc.biteth.org' ],
    faucets: [],
    nativeCurrency: { name: 'Bitcoin', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://biteth.org',
    shortName: 'Bitcoin',
    chainId: 8086,
    networkId: 8086,
    explorers: []
  },
  {
    name: 'E-Dollar',
    chain: 'USD',
    rpc: [ 'https://rpc.e-dollar.org' ],
    faucets: [],
    nativeCurrency: { name: 'E-Dollar', symbol: 'USD', decimals: 18 },
    infoURL: 'https://e-dollar.org',
    shortName: 'E-Dollar',
    chainId: 8087,
    networkId: 8087,
    explorers: []
  },
  {
    name: 'StreamuX Blockchain',
    chain: 'StreamuX',
    rpc: [
      'https://u0ma6t6heb:KDNwOsRDGcyM2Oeui1p431Bteb4rvcWkuPgQNHwB4FM@u0xy4x6x82-u0e2mg517m-rpc.us0-aws.kaleido.io/'
    ],
    faucets: [],
    nativeCurrency: { name: 'StreamuX', symbol: 'SmuX', decimals: 18 },
    infoURL: 'https://www.streamux.cloud',
    shortName: 'StreamuX',
    chainId: 8098,
    networkId: 8098
  },
  {
    name: 'Qitmeer Network Testnet',
    chain: 'MEER',
    rpc: [
      'https://testnet-qng.rpc.qitmeer.io',
      'https://testnet.meerlabs.com',
      'https://meer.testnet.meerfans.club'
    ],
    faucets: [ 'https://faucet.qitmeer.io' ],
    nativeCurrency: { name: 'Qitmeer Testnet', symbol: 'MEER-T', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'meertest',
    chainId: 8131,
    networkId: 8131,
    slip44: 1,
    icon: 'meer',
    explorers: [
      {
        name: 'meerscan testnet',
        icon: 'meer',
        url: 'https://testnet-qng.qitmeer.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Qitmeer Network Mixnet',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Qitmeer Mixnet', symbol: 'MEER-M', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'meermix',
    icon: 'meer',
    chainId: 8132,
    networkId: 8132,
    status: 'incubating'
  },
  {
    name: 'Qitmeer Network Privnet',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Qitmeer Privnet', symbol: 'MEER-P', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'meerpriv',
    icon: 'meer',
    chainId: 8133,
    networkId: 8133,
    status: 'incubating'
  },
  {
    name: 'Amana',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Amana Mainnet', symbol: 'MEER', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'amana',
    icon: 'meer',
    chainId: 8134,
    networkId: 8134,
    status: 'incubating'
  },
  {
    name: 'Flana',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Flana Mainnet', symbol: 'MEER', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'flana',
    icon: 'meer',
    chainId: 8135,
    networkId: 8135,
    status: 'incubating'
  },
  {
    name: 'Mizana',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Mizana Mainnet', symbol: 'MEER', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'mizana',
    icon: 'meer',
    chainId: 8136,
    networkId: 8136,
    status: 'incubating'
  },
  {
    name: 'Testnet BeOne Chain',
    chain: 'tBOC',
    rpc: [ 'https://pre-boc1.beonechain.com' ],
    faucets: [ 'https://testnet.beonescan.com/faucet' ],
    nativeCurrency: { name: 'Testnet BeOne Chain', symbol: 'tBOC', decimals: 18 },
    infoURL: 'https://testnet.beonescan.com',
    shortName: 'tBOC',
    chainId: 8181,
    networkId: 8181,
    slip44: 1,
    icon: 'beonechain',
    explorers: [
      {
        name: 'Testnet BeOne Chain',
        url: 'https://testnet.beonescan.com',
        icon: 'beonechain',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Torus Mainnet',
    chain: 'TQF',
    icon: 'torus',
    rpc: [ 'https://rpc.toruschain.com' ],
    faucets: [],
    nativeCurrency: { name: 'TQF', symbol: 'TQF', decimals: 18 },
    infoURL: 'https://docs.toruschain.com',
    shortName: 'tqf',
    chainId: 8192,
    networkId: 8192,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://toruscan.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Torus Testnet',
    chain: 'TQF',
    icon: 'torus',
    rpc: [ 'https://rpc.testnet.toruschain.com' ],
    faucets: [],
    nativeCurrency: { name: 'tTQF', symbol: 'TTQF', decimals: 18 },
    infoURL: 'https://docs.toruschain.com',
    shortName: 'ttqf',
    chainId: 8194,
    networkId: 8194,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet.toruscan.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Klaytn Mainnet Cypress',
    chain: 'KLAY',
    rpc: [ 'https://public-en-cypress.klaytn.net' ],
    faucets: [],
    nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
    infoURL: 'https://klaytn.foundation',
    shortName: 'Cypress',
    chainId: 8217,
    networkId: 8217,
    slip44: 8217,
    explorers: [
      {
        name: 'Klaytnscope',
        url: 'https://scope.klaytn.com',
        standard: 'EIP3091'
      },
      {
        name: 'Klaytnfinder',
        url: 'https://klaytnfinder.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Blockton Blockchain',
    chain: 'Blockton Blockchain',
    icon: 'bton',
    rpc: [ 'https://rpc.blocktonscan.com/' ],
    faucets: [ 'https://faucet.blocktonscan.com/' ],
    nativeCurrency: { name: 'BLOCKTON', symbol: 'BTON', decimals: 18 },
    infoURL: 'https://blocktoncoin.com',
    shortName: 'BTON',
    chainId: 8272,
    networkId: 8272,
    explorers: [
      {
        name: 'Blockton Explorer',
        url: 'https://blocktonscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'KorthoTest',
    chain: 'Kortho',
    rpc: [ 'https://www.krotho-test.net' ],
    faucets: [],
    nativeCurrency: { name: 'Kortho Test', symbol: 'KTO', decimals: 11 },
    infoURL: 'https://www.kortho.io/',
    shortName: 'Kortho',
    chainId: 8285,
    networkId: 8285,
    slip44: 1
  },
  {
    name: 'Dracones Financial Services',
    title: 'The Dracones Mainnet',
    chain: 'FUCK',
    rpc: [ 'https://api.dracones.net/' ],
    faucets: [],
    nativeCurrency: {
      name: 'Functionally Universal Coin Kind',
      symbol: 'FUCK',
      decimals: 18
    },
    infoURL: 'https://wolfery.com',
    shortName: 'fuck',
    chainId: 8387,
    networkId: 8387,
    icon: 'dracones',
    explorers: []
  },
  {
    name: 'Base',
    chain: 'ETH',
    rpc: [
      'https://mainnet.base.org/',
      'https://developer-access-mainnet.base.org/',
      'https://base.gateway.tenderly.co',
      'wss://base.gateway.tenderly.co',
      'https://base-rpc.publicnode.com',
      'wss://base-rpc.publicnode.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://base.org',
    shortName: 'base',
    chainId: 8453,
    networkId: 8453,
    icon: 'base',
    explorers: [
      {
        name: 'basescan',
        url: 'https://basescan.org',
        standard: 'none'
      },
      {
        name: 'basescout',
        url: 'https://base.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      },
      {
        name: 'dexguru',
        url: 'https://base.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ],
    status: 'active'
  },
  {
    name: 'Toki Network',
    chain: 'TOKI',
    rpc: [ 'https://mainnet.buildwithtoki.com/v0/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Toki', symbol: 'TOKI', decimals: 18 },
    infoURL: 'https://www.buildwithtoki.com',
    shortName: 'toki',
    chainId: 8654,
    networkId: 8654,
    icon: 'toki',
    explorers: []
  },
  {
    name: 'Toki Testnet',
    chain: 'TOKI',
    rpc: [ 'https://testnet.buildwithtoki.com/v0/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Toki', symbol: 'TOKI', decimals: 18 },
    infoURL: 'https://www.buildwithtoki.com',
    shortName: 'toki-testnet',
    chainId: 8655,
    networkId: 8655,
    slip44: 1,
    icon: 'toki',
    explorers: []
  },
  {
    name: 'Hela Official Runtime Mainnet',
    chain: 'Hela',
    icon: 'hela',
    rpc: [ 'https://mainnet-rpc.helachain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Hela HLUSD', symbol: 'HLUSD', decimals: 18 },
    infoURL: 'https://helalabs.com',
    shortName: 'hela',
    chainId: 8668,
    networkId: 8668,
    explorers: [
      {
        name: 'Hela Official Runtime Mainnet Explorer',
        url: 'https://mainnet-blockexplorer.helachain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'TOOL Global Mainnet',
    chain: 'OLO',
    rpc: [ 'https://mainnet-web3.wolot.io' ],
    faucets: [],
    nativeCurrency: { name: 'TOOL Global', symbol: 'OLO', decimals: 18 },
    infoURL: 'https://ibdt.io',
    shortName: 'olo',
    chainId: 8723,
    networkId: 8723,
    slip44: 479,
    explorers: [
      {
        name: 'OLO Block Explorer',
        url: 'https://www.olo.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'TOOL Global Testnet',
    chain: 'OLO',
    rpc: [ 'https://testnet-web3.wolot.io' ],
    faucets: [ 'https://testnet-explorer.wolot.io' ],
    nativeCurrency: { name: 'TOOL Global', symbol: 'OLO', decimals: 18 },
    infoURL: 'https://testnet-explorer.wolot.io',
    shortName: 'tolo',
    chainId: 8724,
    networkId: 8724,
    slip44: 1
  },
  {
    name: 'Storagechain Mainnet',
    chain: 'Storagechain',
    rpc: [ 'https://mainnet-validator.storagechain.io' ],
    icon: 'storagechain',
    faucets: [],
    shortName: 'stor',
    nativeCurrency: { name: 'Storagechain', symbol: 'STOR', decimals: 18 },
    infoURL: 'https://storagechain.io/about-us',
    chainId: 8726,
    networkId: 8726,
    explorers: [
      {
        name: 'Storscan',
        url: 'https://explorer-storagechain.invo.zone/?network=StorageChain',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Storagechain Testnet',
    chain: 'Storagechain',
    rpc: [ 'https://testnet-validator.storagechain.io' ],
    icon: 'storagechain',
    faucets: [],
    nativeCurrency: { name: 'Storagechain', symbol: 'STOR', decimals: 18 },
    shortName: 'tstor',
    infoURL: 'https://storagechain.io/about-us',
    chainId: 8727,
    networkId: 8727,
    explorers: [
      {
        name: 'Storscan',
        url: 'https://explorer-storagechain.invo.zone/?network=StorageChain%20Testnet',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Alph Network',
    chain: 'ALPH',
    rpc: [ 'https://rpc.alph.network', 'wss://rpc.alph.network' ],
    faucets: [],
    nativeCurrency: { name: 'Alph Network', symbol: 'ALPH', decimals: 18 },
    infoURL: 'https://alph.network',
    shortName: 'alph',
    chainId: 8738,
    networkId: 8738,
    explorers: [
      {
        name: 'alphscan',
        url: 'https://explorer.alph.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'TMY Chain',
    chain: 'TMY',
    icon: 'tmychain',
    rpc: [ 'https://node1.tmyblockchain.org/rpc' ],
    faucets: [ 'https://faucet.tmychain.org/' ],
    nativeCurrency: { name: 'TMY', symbol: 'TMY', decimals: 18 },
    infoURL: 'https://tmychain.org/',
    shortName: 'tmy',
    chainId: 8768,
    networkId: 8768
  },
  {
    name: 'IOTA EVM',
    title: 'IOTA EVM',
    chain: 'IOTA EVM',
    rpc: [ 'https://json-rpc.evm.iotaledger.net' ],
    faucets: [],
    nativeCurrency: { name: 'IOTA', symbol: 'IOTA', decimals: 18 },
    infoURL: 'https://www.iota.org',
    shortName: 'iotaevm',
    chainId: 8822,
    networkId: 8822,
    icon: 'iotaevm',
    explorers: [
      {
        name: 'explorer',
        url: 'https://iota-evm.blockscout.com',
        icon: 'iotaevm',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'MARO Blockchain Mainnet',
    chain: 'MARO Blockchain',
    icon: 'MARO',
    rpc: [ 'https://rpc-mainnet.ma.ro' ],
    faucets: [],
    nativeCurrency: { name: 'MARO', symbol: 'MARO', decimals: 18 },
    infoURL: 'https://ma.ro/',
    shortName: 'maro',
    chainId: 8848,
    networkId: 8848,
    explorers: [
      {
        name: 'MARO Scan',
        url: 'https://scan.ma.ro/#',
        standard: 'none'
      }
    ]
  },
  {
    name: 'SuperLumio',
    chain: 'SuperLumio',
    icon: 'superlumio',
    rpc: [ 'https://mainnet.lumio.io/' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://lumio.io/',
    shortName: 'superlumio',
    chainId: 8866,
    networkId: 8866,
    explorers: [
      {
        name: 'Lumio explorer',
        url: 'https://explorer.lumio.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Unique',
    icon: 'unique',
    chain: 'UNQ',
    rpc: [
      'https://rpc.unique.network',
      'https://eu-rpc.unique.network',
      'https://asia-rpc.unique.network',
      'https://us-rpc.unique.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Unique', symbol: 'UNQ', decimals: 18 },
    infoURL: 'https://unique.network',
    shortName: 'unq',
    chainId: 8880,
    networkId: 8880,
    explorers: [
      {
        name: 'Unique Scan',
        url: 'https://uniquescan.io/unique',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Quartz by Unique',
    icon: 'quartz',
    chain: 'UNQ',
    rpc: [
      'https://rpc-quartz.unique.network',
      'https://quartz.api.onfinality.io/public-ws',
      'https://eu-rpc-quartz.unique.network',
      'https://asia-rpc-quartz.unique.network',
      'https://us-rpc-quartz.unique.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Quartz', symbol: 'QTZ', decimals: 18 },
    infoURL: 'https://unique.network',
    shortName: 'qtz',
    chainId: 8881,
    networkId: 8881,
    explorers: [
      {
        name: 'Unique Scan / Quartz',
        url: 'https://uniquescan.io/quartz',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Opal testnet by Unique',
    icon: 'opal',
    chain: 'UNQ',
    rpc: [
      'https://rpc-opal.unique.network',
      'https://us-rpc-opal.unique.network',
      'https://eu-rpc-opal.unique.network',
      'https://asia-rpc-opal.unique.network'
    ],
    faucets: [ 'https://t.me/unique2faucet_opal_bot' ],
    nativeCurrency: { name: 'Opal', symbol: 'UNQ', decimals: 18 },
    infoURL: 'https://unique.network',
    shortName: 'opl',
    chainId: 8882,
    networkId: 8882,
    slip44: 1,
    explorers: [
      {
        name: 'Unique Scan / Opal',
        url: 'https://uniquescan.io/opal',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Sapphire by Unique',
    icon: 'sapphire',
    chain: 'UNQ',
    rpc: [
      'https://rpc-sapphire.unique.network',
      'https://us-rpc-sapphire.unique.network',
      'https://eu-rpc-sapphire.unique.network',
      'https://asia-rpc-sapphire.unique.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Quartz', symbol: 'QTZ', decimals: 18 },
    infoURL: 'https://unique.network',
    shortName: 'sph',
    chainId: 8883,
    networkId: 8883,
    explorers: [
      {
        name: 'Unique Scan / Sapphire',
        url: 'https://uniquescan.io/sapphire',
        standard: 'none'
      }
    ]
  },
  {
    name: 'XANAChain',
    chain: 'XANAChain',
    rpc: [ 'https://mainnet.xana.net/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'XETA', symbol: 'XETA', decimals: 18 },
    infoURL: 'https://xanachain.xana.net/',
    shortName: 'XANAChain',
    chainId: 8888,
    networkId: 8888,
    icon: 'xeta',
    explorers: [
      {
        name: 'XANAChain',
        url: 'https://xanachain.xana.net',
        standard: 'EIP3091'
      }
    ],
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'Vyvo Smart Chain',
    chain: 'VSC',
    rpc: [ 'https://vsc-dataseed.vyvo.org:8889' ],
    faucets: [],
    nativeCurrency: { name: 'VSC', symbol: 'VSC', decimals: 18 },
    infoURL: 'https://vsc-dataseed.vyvo.org',
    shortName: 'vsc',
    chainId: 8889,
    networkId: 8889
  },
  {
    name: 'Orenium Testnet Protocol',
    chain: 'ORE',
    rpc: [
      'https://rpc-dev-testnet.orenium.org/',
      'https://rpc-testnet.orenium.org/',
      'https://rpc-orc.oredex.finance',
      'https://testnet-rpc.oredex.finance',
      'https://oredex-node.oredex.finance'
    ],
    nativeCurrency: { name: 'ORENIUM', symbol: 'tORE', decimals: 18 },
    infoURL: 'https://orenium.org',
    shortName: 'tore',
    chainId: 8890,
    networkId: 8890,
    slip44: 1,
    icon: 'ore',
    faucets: [ 'https://faucetcoin.orenium.org' ],
    explorers: [
      {
        name: 'ORE Testnet Explorer',
        icon: 'ore',
        url: 'https://testnet.oreniumscan.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Mammoth Mainnet',
    title: 'Mammoth Chain',
    chain: 'MMT',
    rpc: [
      'https://dataseed.mmtscan.io',
      'https://dataseed1.mmtscan.io',
      'https://dataseed2.mmtscan.io'
    ],
    faucets: [ 'https://faucet.mmtscan.io/' ],
    nativeCurrency: { name: 'Mammoth Token', symbol: 'MMT', decimals: 18 },
    infoURL: 'https://mmtchain.io/',
    shortName: 'mmt',
    chainId: 8898,
    networkId: 8898,
    icon: 'mmt',
    explorers: [
      {
        name: 'mmtscan',
        url: 'https://mmtscan.io',
        standard: 'EIP3091',
        icon: 'mmt'
      }
    ]
  },
  {
    name: 'JIBCHAIN L1',
    chain: 'JBC',
    rpc: [ 'https://rpc-l1.jibchain.net', 'https://jib-rpc.inan.in.th' ],
    faucets: [],
    icon: 'jbc',
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    nativeCurrency: { name: 'JIBCOIN', symbol: 'JBC', decimals: 18 },
    infoURL: 'https://jibchain.net',
    shortName: 'jbc',
    chainId: 8899,
    networkId: 8899,
    explorers: [
      {
        name: 'JIBCHAIN Explorer',
        url: 'https://exp-l1.jibchain.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Giant Mammoth Mainnet',
    title: 'Giant Mammoth Chain',
    chain: 'GMMT',
    rpc: [ 'https://rpc-asia.gmmtchain.io' ],
    faucets: [],
    nativeCurrency: { name: 'Giant Mammoth Coin', symbol: 'GMMT', decimals: 18 },
    infoURL: 'https://gmmtchain.io/',
    shortName: 'gmmt',
    chainId: 8989,
    networkId: 8989,
    icon: 'gmmt',
    explorers: [
      {
        name: 'gmmtscan',
        url: 'https://scan.gmmtchain.io',
        standard: 'EIP3091',
        icon: 'gmmt'
      }
    ]
  },
  {
    name: 'bloxberg',
    chain: 'bloxberg',
    rpc: [ 'https://core.bloxberg.org' ],
    faucets: [ 'https://faucet.bloxberg.org/' ],
    nativeCurrency: { name: 'BERG', symbol: 'U+25B3', decimals: 18 },
    infoURL: 'https://bloxberg.org',
    shortName: 'berg',
    chainId: 8995,
    networkId: 8995
  },
  {
    name: 'Evmos Testnet',
    chain: 'Evmos',
    rpc: [
      'https://evmos-testnet.lava.build',
      'https://eth.bd.evmos.dev:8545'
    ],
    faucets: [ 'https://faucet.evmos.dev' ],
    nativeCurrency: { name: 'test-Evmos', symbol: 'tEVMOS', decimals: 18 },
    infoURL: 'https://evmos.org',
    shortName: 'evmos-testnet',
    chainId: 9000,
    networkId: 9000,
    slip44: 1,
    icon: 'evmos',
    explorers: [
      {
        name: 'Evmos Explorer (Escan)',
        url: 'https://testnet.escan.live',
        standard: 'none',
        icon: 'evmos'
      }
    ]
  },
  {
    name: 'Evmos',
    chain: 'Evmos',
    rpc: [
      'https://evmos.lava.build',
      'wss://evmos.lava.build/websocket',
      'https://evmos-evm.publicnode.com',
      'wss://evmos-evm.publicnode.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Evmos', symbol: 'EVMOS', decimals: 18 },
    infoURL: 'https://evmos.org',
    shortName: 'evmos',
    chainId: 9001,
    networkId: 9001,
    icon: 'evmos',
    explorers: [
      {
        name: 'Evmos Explorer (Escan)',
        url: 'https://escan.live',
        standard: 'none',
        icon: 'evmos'
      }
    ]
  },
  {
    name: 'Shido Testnet Block',
    chain: 'Shido Testnet',
    rpc: [
      'https://rpc-testnet-nodes.shidoscan.com',
      'wss://wss-testnet-nodes.shidoscan.com'
    ],
    faucets: [ 'https://testnet.shidoscan.com/faucet' ],
    nativeCurrency: { name: 'Shido Testnet Token', symbol: 'SHIDO', decimals: 18 },
    infoURL: 'https://www.nexablock.io',
    shortName: 'ShidoTestnet',
    chainId: 9007,
    networkId: 9007,
    icon: 'shidoChain',
    explorers: [
      {
        name: 'Shidoblock Testnet Explorer',
        url: 'https://testnet.shidoscan.com',
        standard: 'none',
        icon: 'shidoChain'
      }
    ]
  },
  {
    name: 'Shido Mainnet Block',
    chain: 'Shido Mainnet',
    rpc: [
      'https://rpc-nodes.shidoscan.com',
      'wss://wss-nodes.shidoscan.com',
      'https://rpc-delta-nodes.shidoscan.com',
      'wss://wss-delta-nodes.shidoscan.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Shido Mainnet Token', symbol: 'SHIDO', decimals: 18 },
    infoURL: 'https://shido.io',
    shortName: 'Shido',
    chainId: 9008,
    networkId: 9008,
    icon: 'shidoChain',
    explorers: [
      {
        name: 'Shidoblock Mainnet Explorer',
        url: 'https://shidoscan.com',
        standard: 'none',
        icon: 'shidoChain'
      }
    ]
  },
  {
    name: 'BerylBit Mainnet',
    chain: 'BRB',
    rpc: [ 'https://mainnet.berylbit.io' ],
    faucets: [ 'https://t.me/BerylBit' ],
    nativeCurrency: {
      name: 'BerylBit Chain Native Token',
      symbol: 'BRB',
      decimals: 18
    },
    infoURL: 'https://www.beryl-bit.com',
    shortName: 'brb',
    chainId: 9012,
    networkId: 9012,
    icon: 'berylbit',
    explorers: [
      {
        name: 'berylbit-explorer',
        url: 'https://explorer.berylbit.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Nexa Testnet Block',
    chain: 'Nexa Testnet',
    rpc: [ 'https://rpc-testnet-nodes.nexablockscan.io' ],
    faucets: [ 'https://testnet.nexablockscan.io/faucet' ],
    nativeCurrency: { name: 'Nexa Testnet Token', symbol: 'NEXB', decimals: 18 },
    infoURL: 'https://www.nexablock.io',
    shortName: 'NexaTestnet',
    chainId: 9024,
    networkId: 9024,
    icon: 'nexaChain',
    explorers: [
      {
        name: 'Nexablock Testnet Explorer',
        url: 'https://testnet.nexablockscan.io',
        standard: 'none',
        icon: 'nexaChain'
      }
    ]
  },
  {
    name: 'Nexa Mainnet Block',
    chain: 'Nexa Mainnet',
    rpc: [
      'https://rpc-nodes.nexablockscan.io',
      'wss://wss-nodes.nexablockscan.io',
      'https://rpc-nodes-delta.nexablockscan.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'Nexa Mainnet Token', symbol: 'NEXB', decimals: 18 },
    infoURL: 'https://www.nexablock.io',
    shortName: 'Nexa',
    chainId: 9025,
    networkId: 9025,
    icon: 'nexaChain',
    explorers: [
      {
        name: 'Nexablock Mainnet Explorer',
        url: 'https://nexablockscan.io',
        standard: 'none',
        icon: 'nexaChain'
      }
    ]
  },
  {
    name: 'Genesis Coin',
    chain: 'Genesis',
    rpc: [ 'https://genesis-gn.com', 'wss://genesis-gn.com' ],
    faucets: [],
    nativeCurrency: { name: 'GN Coin', symbol: 'GNC', decimals: 18 },
    infoURL: 'https://genesis-gn.com',
    shortName: 'GENEC',
    chainId: 9100,
    networkId: 9100
  },
  {
    name: 'Rinia Testnet Old',
    chain: 'FIRE',
    icon: 'rinia',
    rpc: [],
    faucets: [ 'https://faucet.thefirechain.com' ],
    nativeCurrency: { name: 'Firechain', symbol: 'FIRE', decimals: 18 },
    infoURL: 'https://thefirechain.com',
    shortName: '_old_tfire',
    chainId: 9170,
    networkId: 9170,
    slip44: 1,
    explorers: [],
    status: 'deprecated'
  },
  {
    name: 'Codefin Mainnet',
    chain: 'COF',
    icon: 'codefin',
    rpc: [ 'https://chain-rpc.codefin.pro' ],
    faucets: [],
    nativeCurrency: { name: 'Codefin', symbol: 'COF', decimals: 18 },
    infoURL: 'https://network.codefin.pro',
    shortName: 'COF',
    chainId: 9223,
    networkId: 9223,
    explorers: [
      {
        name: 'Codefin Net Explorer',
        url: 'https://explorer.codefin.pro',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Dogcoin Testnet',
    chain: 'DOGS',
    icon: 'dogs',
    rpc: [ 'https://testnet-rpc.dogcoin.me' ],
    faucets: [ 'https://faucet.dogcoin.network' ],
    nativeCurrency: { name: 'Dogcoin', symbol: 'DOGS', decimals: 18 },
    infoURL: 'https://dogcoin.network',
    shortName: 'DOGSt',
    chainId: 9339,
    networkId: 9339,
    slip44: 1,
    explorers: [
      {
        name: 'Dogcoin',
        url: 'https://testnet.dogcoin.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Dela Sepolia Testnet',
    chain: 'ETH',
    rpc: [ 'https://sepolia-dela.deperp.com' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://www.deperp.com/dela',
    shortName: 'delasep',
    chainId: 9393,
    networkId: 9393,
    slip44: 1,
    icon: 'delaTestnet',
    explorers: [
      {
        name: 'basescout',
        url: 'https://sepolia-delascan.deperp.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Evoke Mainnet',
    chain: 'MTHN',
    icon: 'mthn',
    rpc: [ 'https://mainnet-rpc.evokescan.org' ],
    faucets: [],
    nativeCurrency: { name: 'MTHN', symbol: 'MTHN', decimals: 18 },
    infoURL: 'https://explorer.evokescan.org',
    shortName: 'MTHN',
    chainId: 9395,
    networkId: 9395,
    explorers: [
      {
        name: 'Evoke SmartChain Explorer',
        url: 'https://explorer.evokescan.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Rangers Protocol Testnet Robin',
    chain: 'Rangers',
    icon: 'rangers',
    rpc: [ 'https://robin.rangersprotocol.com/api/jsonrpc' ],
    faucets: [ 'https://robin-faucet.rangersprotocol.com' ],
    nativeCurrency: { name: 'Rangers Protocol Gas', symbol: 'tRPG', decimals: 18 },
    infoURL: 'https://rangersprotocol.com',
    shortName: 'trpg',
    chainId: 9527,
    networkId: 9527,
    slip44: 1,
    explorers: [
      {
        name: 'rangersscan-robin',
        url: 'https://robin-rangersscan.rangersprotocol.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'QEasyWeb3 Testnet',
    chain: 'QET',
    rpc: [ 'https://qeasyweb3.com' ],
    faucets: [ 'http://faucet.qeasyweb3.com' ],
    nativeCurrency: { name: 'QET', symbol: 'QET', decimals: 18 },
    infoURL: 'https://www.qeasyweb3.com',
    shortName: 'QETTest',
    chainId: 9528,
    networkId: 9528,
    slip44: 1,
    explorers: [
      {
        name: 'QEasyWeb3 Explorer',
        url: 'https://www.qeasyweb3.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Neonlink Testnet',
    chain: 'Neonlink',
    rpc: [ 'https://testnet.neonlink.io' ],
    faucets: [ 'https://faucet.neonlink.io/' ],
    nativeCurrency: { name: 'Neonlink Native Token', symbol: 'tNEON', decimals: 18 },
    infoURL: 'https://neonlink.io',
    shortName: 'testneon',
    chainId: 9559,
    networkId: 9559,
    slip44: 1,
    icon: 'neonlink',
    explorers: [
      {
        name: 'Neon Blockchain Explorer',
        url: 'https://testnet-scan.neonlink.io',
        standard: 'EIP3091',
        icon: 'neonlink'
      }
    ]
  },
  {
    name: 'Oort MainnetDev',
    title: 'Oort MainnetDev',
    chain: 'MainnetDev',
    rpc: [ 'https://dev-rpc.oortech.com' ],
    faucets: [],
    nativeCurrency: { name: 'Oort', symbol: 'OORT', decimals: 18 },
    infoURL: 'https://oortech.com',
    shortName: 'MainnetDev',
    chainId: 9700,
    networkId: 9700,
    icon: 'oort',
    explorers: [
      {
        name: 'Oort MainnetDev Scan',
        url: 'https://dev-scan.oortech.com',
        standard: 'none',
        icon: 'oort'
      }
    ]
  },
  {
    name: 'Boba BNB Testnet',
    chain: 'Boba BNB Testnet',
    rpc: [
      'https://testnet.bnb.boba.network',
      'wss://wss.testnet.bnb.boba.network',
      'https://replica.testnet.bnb.boba.network',
      'wss://replica-wss.testnet.bnb.boba.network',
      'https://boba-bnb-testnet.gateway.tenderly.co',
      'wss://boba-bnb-testnet.gateway.tenderly.co'
    ],
    faucets: [],
    nativeCurrency: { name: 'Boba Token', symbol: 'BOBA', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'BobaBnbTestnet',
    chainId: 9728,
    networkId: 9728,
    slip44: 1,
    explorers: [
      {
        name: 'Boba BNB Testnet block explorer',
        url: 'https://testnet.bobascan.com',
        standard: 'none'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-5',
      bridges: [ { url: 'https://gateway.boba.network' } ]
    }
  },
  {
    name: 'MainnetZ Testnet',
    chain: 'NetZ',
    icon: 'mainnetzTestnet',
    rpc: [ 'https://testnet-rpc.mainnetz.io' ],
    faucets: [ 'https://faucet.mainnetz.io' ],
    nativeCurrency: { name: 'MainnetZ', symbol: 'NetZ', decimals: 18 },
    infoURL: 'https://testnet.mainnetz.io',
    shortName: 'NetZt',
    chainId: 9768,
    networkId: 9768,
    slip44: 1,
    explorers: [
      {
        name: 'MainnetZ',
        url: 'https://testnet.mainnetz.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PepeNetwork Mainnet',
    chain: 'PepeNetwork',
    rpc: [ 'https://rpc-mainnet.pepenetwork.io' ],
    faucets: [],
    nativeCurrency: { name: 'Pepe', symbol: 'WPEPE', decimals: 18 },
    infoURL: 'https://pepenetwork.io',
    shortName: 'pn',
    chainId: 9779,
    networkId: 9779,
    icon: 'pepenetwork',
    explorers: [
      {
        name: 'Pepe Explorer',
        url: 'https://explorer.pepenetwork.io',
        icon: 'pepenetwork',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Carbon EVM',
    chain: 'Carbon',
    icon: 'carbon',
    rpc: [ 'https://evm-api.carbon.network/' ],
    faucets: [],
    nativeCurrency: { name: 'swth', symbol: 'SWTH', decimals: 18 },
    infoURL: 'https://carbon.network/',
    shortName: 'carbon',
    chainId: 9790,
    networkId: 9790,
    explorers: []
  },
  {
    name: 'Carbon EVM Testnet',
    chain: 'Carbon',
    icon: 'carbon',
    rpc: [ 'https://test-evm-api.carbon.network/' ],
    faucets: [],
    nativeCurrency: { name: 'swth', symbol: 'SWTH', decimals: 18 },
    infoURL: 'https://carbon.network/',
    shortName: 'carbon-testnet',
    chainId: 9792,
    networkId: 9792,
    slip44: 1,
    explorers: []
  },
  {
    name: 'IMPERIUM TESTNET',
    chain: 'tIMP',
    rpc: [
      'https://data-aws-testnet.imperiumchain.com',
      'https://data-aws2-testnet.imperiumchain.com'
    ],
    faucets: [ 'https://faucet.imperiumchain.com/' ],
    nativeCurrency: { name: 'tIMP', symbol: 'tIMP', decimals: 18 },
    infoURL: 'https://imperiumchain.com',
    shortName: 'tIMP',
    chainId: 9818,
    networkId: 9818,
    slip44: 1,
    icon: 'timp',
    explorers: [
      {
        name: 'IMPERIUM TESTNET Explorer',
        icon: 'timp',
        url: 'https://network.impscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'IMPERIUM MAINNET',
    chain: 'IMP',
    rpc: [
      'https://data-aws-mainnet.imperiumchain.com',
      'https://data-aws2-mainnet.imperiumchain.com'
    ],
    faucets: [ 'https://faucet.imperiumchain.com/' ],
    nativeCurrency: { name: 'IMP', symbol: 'IMP', decimals: 18 },
    infoURL: 'https://imperiumchain.com',
    shortName: 'IMP',
    chainId: 9819,
    networkId: 9819,
    icon: 'imp',
    explorers: [
      {
        name: 'IMPERIUM Explorer',
        icon: 'imp',
        url: 'https://impscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Dogelayer Mainnet',
    chain: 'Dogelayer',
    rpc: [ 'https://dl-rpc.dogelayer.org' ],
    faucets: [],
    nativeCurrency: { name: 'Dogecoin', symbol: 'DOGE', decimals: 18 },
    infoURL: 'https://dogelayer.org',
    shortName: 'Dogelayer',
    chainId: 9888,
    networkId: 9888,
    explorers: [
      {
        name: 'Dogelayer mainnet explorer',
        url: 'https://dl-explorer.dogelayer.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Larissa Chain',
    title: 'Larissa Chain',
    chain: 'Larissa',
    rpc: [ 'https://rpc.larissa.network' ],
    faucets: [],
    nativeCurrency: { name: 'Larissa', symbol: 'LRS', decimals: 18 },
    infoURL: 'https://larissa.network',
    shortName: 'lrs',
    chainId: 9898,
    networkId: 1,
    slip44: 9898,
    status: 'active',
    icon: 'larissa',
    explorers: [
      {
        name: 'Larissa Scan',
        url: 'https://scan.larissa.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Espento Mainnet',
    chain: 'SPENT',
    rpc: [ 'https://rpc.escscan.com/' ],
    faucets: [],
    nativeCurrency: { name: 'ESPENTO', symbol: 'SPENT', decimals: 18 },
    infoURL: 'https://espento.network',
    shortName: 'spent',
    chainId: 9911,
    networkId: 9911,
    icon: 'espento',
    explorers: [
      {
        name: 'escscan',
        url: 'https://escscan.com',
        icon: 'espento',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Mind Smart Chain Testnet',
    chain: 'tMIND',
    icon: 'mindchain',
    rpc: [
      'https://testnet-msc.mindchain.info/',
      'wss://testnet-msc.mindchain.info/ws'
    ],
    faucets: [ 'https://faucet.mindchain.info/' ],
    nativeCurrency: { name: 'MIND Coin', symbol: 'tMIND', decimals: 18 },
    infoURL: 'https://mindchain.info',
    shortName: 'tMIND',
    chainId: 9977,
    networkId: 9977,
    slip44: 1,
    explorers: [
      {
        name: 'Mind Chain explorer',
        url: 'https://testnet.mindscan.info',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Combo Mainnet',
    chain: 'Combo',
    icon: 'combo',
    rpc: [ 'https://rpc.combonetwork.io' ],
    faucets: [],
    nativeCurrency: { name: 'BNB Chain Native Token', symbol: 'BNB', decimals: 18 },
    infoURL: 'https://combonetwork.io',
    shortName: 'combo-mainnet',
    chainId: 9980,
    networkId: 9980,
    explorers: [
      {
        name: 'combotrace explorer',
        url: 'https://combotrace.nodereal.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Agung Network',
    chain: 'Agung',
    icon: 'agung',
    rpc: [ 'https://rpcpc1-qa.agung.peaq.network' ],
    faucets: [],
    nativeCurrency: { name: 'Agung', symbol: 'AGNG', decimals: 18 },
    infoURL: 'https://www.peaq.network',
    shortName: 'AGNG',
    chainId: 9990,
    networkId: 9990,
    explorers: [
      {
        name: 'Polkadot.js',
        url: 'https://polkadot.js.org/apps/?rpc=wss://wsspc1-qa.agung.peaq.network#/explorer',
        standard: 'none'
      },
      {
        name: 'Subscan',
        url: 'https://agung.subscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Mind Smart Chain Mainnet',
    chain: 'MIND',
    icon: 'mindchain',
    rpc: [
      'https://rpc-msc.mindchain.info/',
      'https://seednode.mindchain.info',
      'https://archive.mindchain.info/',
      'https://mind-smart-chain.rpc.thirdweb.com',
      'wss://archive.mindchain.info/ws',
      'wss://seednode.mindchain.info/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'MIND Coin', symbol: 'MIND', decimals: 18 },
    infoURL: 'https://mindchain.info',
    shortName: 'MIND',
    chainId: 9996,
    networkId: 9996,
    explorers: [
      {
        name: 'Mind Chain explorer',
        url: 'https://mainnet.mindscan.info',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'AltLayer Testnet',
    chain: 'ETH',
    rpc: [ 'https://testnet-rollup-api.altlayer.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://altlayer.io',
    shortName: 'alt-testnet',
    chainId: 9997,
    networkId: 9997,
    slip44: 1,
    icon: 'altlayer',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet-rollup-explorer.altlayer.io',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ztc Mainnet',
    chain: 'ZTC',
    rpc: [ 'https://zitcoin.us' ],
    faucets: [],
    nativeCurrency: { name: 'Ztcer', symbol: 'ZTC', decimals: 5 },
    infoURL: 'https://ztc.best',
    shortName: 'ZTC',
    chainId: 9998,
    networkId: 9998
  },
  {
    name: 'myOwn Testnet',
    chain: 'myOwn',
    rpc: [ 'https://geth.dev.bccloud.net' ],
    faucets: [],
    nativeCurrency: { name: 'MYN', symbol: 'MYN', decimals: 18 },
    infoURL: 'https://docs.bccloud.net/',
    shortName: 'myn',
    chainId: 9999,
    networkId: 9999,
    slip44: 1
  },
  {
    name: 'Smart Bitcoin Cash',
    chain: 'smartBCH',
    rpc: [
      'https://smartbch.greyh.at',
      'https://rpc-mainnet.smartbch.org',
      'https://smartbch.fountainhead.cash/mainnet',
      'https://smartbch.devops.cash/mainnet'
    ],
    faucets: [],
    nativeCurrency: { name: 'Bitcoin Cash', symbol: 'BCH', decimals: 18 },
    infoURL: 'https://smartbch.org/',
    shortName: 'smartbch',
    chainId: 10000,
    networkId: 10000
  },
  {
    name: 'Smart Bitcoin Cash Testnet',
    chain: 'smartBCHTest',
    rpc: [
      'https://rpc-testnet.smartbch.org',
      'https://smartbch.devops.cash/testnet'
    ],
    faucets: [],
    nativeCurrency: { name: 'Bitcoin Cash Test Token', symbol: 'BCHT', decimals: 18 },
    infoURL: 'http://smartbch.org/',
    shortName: 'smartbchtest',
    chainId: 10001,
    networkId: 10001,
    slip44: 1
  },
  {
    name: 'Gon Chain',
    chain: 'GonChain',
    icon: 'gonchain',
    rpc: [
      'https://node1.testnet.gaiaopen.network',
      'https://node1.mainnet.gon.network',
      'https://node2.mainnet.gon.network',
      'https://node3.mainnet.gon.network',
      'https://node4.mainnet.gon.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Gon Token', symbol: 'GT', decimals: 18 },
    infoURL: '',
    shortName: 'gon',
    chainId: 10024,
    networkId: 10024,
    explorers: [
      {
        name: 'Gon Explorer',
        url: 'https://gonscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Japan Open Chain Testnet',
    chain: 'JOCT',
    rpc: [
      'https://rpc-1.testnet.japanopenchain.org:8545',
      'https://rpc-2.testnet.japanopenchain.org:8545'
    ],
    faucets: [],
    nativeCurrency: {
      name: 'Japan Open Chain Testnet Token',
      symbol: 'JOCT',
      decimals: 18
    },
    infoURL: 'https://www.japanopenchain.org/',
    shortName: 'joct',
    chainId: 10081,
    networkId: 10081,
    slip44: 1,
    explorers: [
      {
        name: 'Testnet Block Explorer',
        url: 'https://explorer.testnet.japanopenchain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SJATSH',
    chain: 'ETH',
    rpc: [ 'http://geth.free.idcfengye.com' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://sjis.me',
    shortName: 'SJ',
    chainId: 10086,
    networkId: 10086
  },
  {
    name: 'Blockchain Genesis Mainnet',
    chain: 'GEN',
    rpc: [
      'https://eu.mainnet.xixoio.com',
      'https://us.mainnet.xixoio.com',
      'https://asia.mainnet.xixoio.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'GEN', symbol: 'GEN', decimals: 18 },
    infoURL: 'https://www.xixoio.com/',
    shortName: 'GEN',
    chainId: 10101,
    networkId: 10101
  },
  {
    name: 'Gnosis Chiado Testnet',
    chain: 'GNO',
    icon: 'gnosis',
    rpc: [
      'https://rpc.chiadochain.net',
      'https://rpc.chiado.gnosis.gateway.fm',
      'wss://rpc.chiadochain.net/wss',
      'https://gnosis-chiado-rpc.publicnode.com',
      'wss://gnosis-chiado-rpc.publicnode.com',
      'https://gnosis-chiado.drpc.org',
      'wss://gnosis-chiado.drpc.org'
    ],
    faucets: [ 'https://gnosisfaucet.com' ],
    nativeCurrency: { name: 'Chiado xDAI', symbol: 'XDAI', decimals: 18 },
    infoURL: 'https://docs.gnosischain.com',
    shortName: 'chi',
    chainId: 10200,
    networkId: 10200,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout-chiadochain',
        url: 'https://blockscout.chiadochain.net',
        icon: 'blockscout',
        standard: 'EIP3091'
      },
      {
        name: 'blockscout',
        url: 'https://gnosis-chiado.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'MaxxChain Mainnet',
    chain: 'MaxxChain',
    rpc: [
      'https://rpc.maxxchain.org',
      'https://rpc1.maxxchain.org',
      'https://rpc2.maxxchain.org'
    ],
    faucets: [ 'https://faucet.maxxchain.org' ],
    nativeCurrency: { name: 'Power', symbol: 'PWR', decimals: 18 },
    icon: 'pwr',
    infoURL: 'https://www.maxxchain.org/',
    shortName: 'PWR',
    chainId: 10201,
    networkId: 10201,
    explorers: [
      {
        name: 'MaxxChain Block Explorer',
        url: 'https://explorer.maxxchain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Arthera Mainnet',
    chain: 'AA',
    icon: 'arthera',
    rpc: [ 'https://rpc.arthera.net' ],
    faucets: [],
    nativeCurrency: { name: 'Arthera', symbol: 'AA', decimals: 18 },
    infoURL: 'https://docs.arthera.net/build/developing-sc/using-hardhat',
    shortName: 'aa',
    chainId: 10242,
    networkId: 10242,
    slip44: 10242,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.arthera.net',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Arthera Testnet',
    chain: 'AA',
    icon: 'arthera',
    rpc: [ 'https://rpc-test.arthera.net' ],
    faucets: [ 'https://faucet.arthera.net' ],
    nativeCurrency: { name: 'Arthera', symbol: 'AA', decimals: 18 },
    infoURL: 'https://docs.arthera.net',
    shortName: 'aat',
    chainId: 10243,
    networkId: 10243,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer-test.arthera.net',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: '0XTade',
    chain: '0XTade Chain',
    rpc: [ 'https://node.0xtchain.com' ],
    faucets: [],
    nativeCurrency: { name: '0XT', symbol: '0XT', decimals: 18 },
    infoURL: 'https://www.0xtrade.finance/',
    shortName: '0xt',
    chainId: 10248,
    networkId: 10248,
    explorers: [
      {
        name: '0xtrade Scan',
        url: 'https://www.0xtscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Worldland Testnet',
    chain: 'Worldland',
    icon: 'worldland',
    rpc: [ 'https://gwangju.worldland.foundation' ],
    faucets: [],
    nativeCurrency: { name: 'Worldland', symbol: 'WLC', decimals: 18 },
    infoURL: 'https://worldland.foundation',
    shortName: 'TWLC',
    chainId: 10395,
    networkId: 10395,
    slip44: 1,
    explorers: [
      {
        name: 'Worldland Explorer',
        url: 'https://testscan.worldland.foundation',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Numbers Mainnet',
    chain: 'NUM',
    icon: 'num',
    rpc: [ 'https://mainnetrpc.num.network' ],
    faucets: [],
    nativeCurrency: { name: 'NUM Token', symbol: 'NUM', decimals: 18 },
    infoURL: 'https://numbersprotocol.io',
    shortName: 'Jade',
    chainId: 10507,
    networkId: 10507,
    explorers: [
      {
        name: 'ethernal',
        url: 'https://mainnet.num.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Numbers Testnet',
    chain: 'NUM',
    icon: 'num',
    rpc: [ 'https://testnetrpc.num.network' ],
    faucets: [
      'https://faucet.avax.network/?subnet=num',
      'https://faucet.num.network'
    ],
    nativeCurrency: { name: 'NUM Token', symbol: 'NUM', decimals: 18 },
    infoURL: 'https://numbersprotocol.io',
    shortName: 'Snow',
    chainId: 10508,
    networkId: 10508,
    slip44: 1,
    explorers: [
      {
        name: 'ethernal',
        url: 'https://testnet.num.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CryptoCoinPay',
    chain: 'CCP',
    rpc: [
      'http://node106.cryptocoinpay.info:8545',
      'ws://node106.cryptocoinpay.info:8546'
    ],
    faucets: [],
    icon: 'ccp',
    nativeCurrency: { name: 'CryptoCoinPay', symbol: 'CCP', decimals: 18 },
    infoURL: 'https://www.cryptocoinpay.co',
    shortName: 'CCP',
    chainId: 10823,
    networkId: 10823,
    explorers: [
      {
        name: 'CCP Explorer',
        url: 'https://cryptocoinpay.info',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Quadrans Blockchain',
    chain: 'QDC',
    icon: 'quadrans',
    rpc: [
      'https://rpc.quadrans.io',
      'https://rpcna.quadrans.io',
      'https://rpceu.quadrans.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'Quadrans Coin', symbol: 'QDC', decimals: 18 },
    infoURL: 'https://quadrans.io',
    shortName: 'quadrans',
    chainId: 10946,
    networkId: 10946,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.quadrans.io',
        icon: 'quadrans',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Quadrans Blockchain Testnet',
    chain: 'tQDC',
    icon: 'quadrans',
    rpc: [ 'https://rpctest.quadrans.io', 'https://rpctest2.quadrans.io' ],
    faucets: [ 'https://faucetpage.quadrans.io' ],
    nativeCurrency: { name: 'Quadrans Testnet Coin', symbol: 'tQDC', decimals: 18 },
    infoURL: 'https://quadrans.io',
    shortName: 'quadranstestnet',
    chainId: 10947,
    networkId: 10947,
    slip44: 1,
    explorers: [
      {
        name: 'explorer',
        url: 'https://explorer.testnet.quadrans.io',
        icon: 'quadrans',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Astra',
    chain: 'Astra',
    rpc: [ 'https://rpc.astranaut.io', 'https://rpc1.astranaut.io' ],
    faucets: [],
    nativeCurrency: { name: 'Astra', symbol: 'ASA', decimals: 18 },
    infoURL: 'https://astranaut.io',
    shortName: 'astra',
    chainId: 11110,
    networkId: 11110,
    icon: 'astra',
    explorers: [
      {
        name: 'Astra EVM Explorer (Blockscout)',
        url: 'https://explorer.astranaut.io',
        standard: 'none',
        icon: 'astra'
      },
      {
        name: 'Astra PingPub Explorer',
        url: 'https://ping.astranaut.io/astra',
        standard: 'none',
        icon: 'astra'
      }
    ]
  },
  {
    name: 'WAGMI',
    chain: 'WAGMI',
    icon: 'wagmi',
    rpc: [ 'https://subnets.avax.network/wagmi/wagmi-chain-testnet/rpc' ],
    faucets: [ 'https://faucet.avax.network/?subnet=wagmi' ],
    nativeCurrency: { name: 'WAGMI', symbol: 'WGM', decimals: 18 },
    infoURL: 'https://subnets-test.avax.network/wagmi/details',
    shortName: 'WAGMI',
    chainId: 11111,
    networkId: 11111,
    explorers: [
      {
        name: 'Avalanche Subnet Explorer',
        url: 'https://subnets-test.avax.network/wagmi',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Astra Testnet',
    chain: 'Astra',
    rpc: [ 'https://rpc.astranaut.dev' ],
    faucets: [ 'https://faucet.astranaut.dev' ],
    nativeCurrency: { name: 'test-Astra', symbol: 'tASA', decimals: 18 },
    infoURL: 'https://astranaut.io',
    shortName: 'astra-testnet',
    chainId: 11115,
    networkId: 11115,
    slip44: 1,
    icon: 'astra',
    explorers: [
      {
        name: 'Astra EVM Explorer',
        url: 'https://explorer.astranaut.dev',
        standard: 'EIP3091',
        icon: 'astra'
      },
      {
        name: 'Astra PingPub Explorer',
        url: 'https://ping.astranaut.dev/astra',
        standard: 'none',
        icon: 'astra'
      }
    ]
  },
  {
    name: 'HashBit Mainnet',
    chain: 'HBIT',
    rpc: [ 'https://mainnet-rpc.hashbit.org', 'https://rpc.hashbit.org' ],
    faucets: [],
    nativeCurrency: { name: 'HashBit Native Token', symbol: 'HBIT', decimals: 18 },
    infoURL: 'https://hashbit.org',
    shortName: 'hbit',
    chainId: 11119,
    networkId: 11119,
    explorers: [
      {
        name: 'hashbitscan',
        url: 'https://explorer.hashbit.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Shine Chain',
    chain: 'SC20',
    rpc: [ 'https://rpc.shinescan.io' ],
    faucets: [],
    nativeCurrency: { name: 'Shine', symbol: 'SC20', decimals: 18 },
    infoURL: 'https://shinechain.tech',
    shortName: 'SC20',
    chainId: 11221,
    networkId: 11221,
    icon: 'shine',
    explorers: [
      {
        name: 'shinescan',
        url: 'https://shinescan.io',
        icon: 'shine',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Haqq Network',
    chain: 'Haqq',
    rpc: [
      'https://rpc.eth.haqq.network',
      'https://haqq-evm-rpc.publicnode.com',
      'wss://haqq-evm-rpc.publicnode.com',
      'https://haqq.drpc.org',
      'wss://haqq.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Islamic Coin', symbol: 'ISLM', decimals: 18 },
    infoURL: 'https://islamiccoin.net',
    shortName: 'ISLM',
    chainId: 11235,
    networkId: 11235,
    explorers: [
      {
        name: 'Mainnet HAQQ Explorer',
        url: 'https://explorer.haqq.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Shyft Testnet',
    chain: 'SHYFTT',
    icon: 'shyft',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Shyft Test Token', symbol: 'SHYFTT', decimals: 18 },
    infoURL: 'https://shyft.network',
    shortName: 'shyftt',
    chainId: 11437,
    networkId: 11437,
    slip44: 1,
    explorers: [
      {
        name: 'Shyft Testnet BX',
        url: 'https://bx.testnet.shyft.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BEVM Mainnet',
    chain: 'BEVM',
    rpc: [
      'https://rpc-mainnet-1.bevm.io/',
      'https://rpc-mainnet-2.bevm.io/'
    ],
    faucets: [],
    nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://bevm.io',
    shortName: 'bevm',
    chainId: 11501,
    networkId: 11501,
    icon: 'bevm',
    explorers: [
      {
        name: 'bevm mainnet scan',
        url: 'https://scan-mainnet.bevm.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'BEVM Testnet',
    chain: 'BEVM',
    rpc: [ 'https://testnet.bevm.io/' ],
    faucets: [],
    nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://bevm.io',
    shortName: 'bevm-test',
    chainId: 11503,
    networkId: 11503,
    icon: 'bevm',
    explorers: [
      {
        name: 'bevm testnet scan',
        url: 'https://scan-testnet.bevm.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Sardis Testnet',
    chain: 'SRDX',
    icon: 'sardisTestnet',
    rpc: [ 'https://testnet-rpc.sardisnetwork.com' ],
    faucets: [ 'https://faucet.sardisnetwork.com' ],
    nativeCurrency: { name: 'Sardis', symbol: 'SRDX', decimals: 18 },
    infoURL: 'https://mysardis.com',
    shortName: 'SRDXt',
    chainId: 11612,
    networkId: 11612,
    slip44: 1,
    explorers: [
      {
        name: 'Sardis',
        url: 'https://testnet.sardisnetwork.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Santiment Intelligence Network',
    chain: 'Santiment Intelligence Network',
    rpc: [ 'https://sanrchain-node.santiment.net' ],
    faucets: [],
    nativeCurrency: { name: 'SANR', symbol: 'SANR', decimals: 18 },
    infoURL: 'https://sanr.app',
    shortName: 'SAN',
    chainId: 11888,
    networkId: 11888,
    icon: 'sanrchain',
    parent: {
      chain: 'eip155-1',
      type: 'L2',
      bridges: [ { url: 'https://sanr.app' } ]
    },
    explorers: [
      {
        name: 'Santiment Intelligence Explorer',
        url: 'https://app-explorer-pos.sanr.app',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Polygon Supernet Arianee',
    chain: 'Arianee',
    rpc: [ 'https://rpc.polygonsupernet.public.arianee.net' ],
    faucets: [],
    nativeCurrency: { name: 'Arianee', symbol: 'ARIA20', decimals: 18 },
    infoURL: 'https://arianee.org',
    shortName: 'Arianee',
    chainId: 11891,
    networkId: 11891,
    explorers: [
      {
        name: 'Polygon Supernet Arianee Explorer',
        url: 'https://polygonsupernet.explorer.arianee.net',
        standard: 'EIP3091'
      }
    ],
    parent: { chain: 'eip155-1', type: 'L2' }
  },
  {
    name: 'SatoshiChain Mainnet',
    chain: 'SATS',
    icon: 'satoshichain',
    rpc: [ 'https://mainnet-rpc.satoshichain.io' ],
    faucets: [],
    nativeCurrency: { name: 'SatoshiChain Coin', symbol: 'SATS', decimals: 18 },
    infoURL: 'https://satoshichain.net',
    shortName: 'sats',
    chainId: 12009,
    networkId: 12009,
    explorers: [
      {
        name: 'SatoshiChain Explorer',
        url: 'https://satoshiscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Aternos',
    chain: 'Aternos',
    icon: 'aternos',
    rpc: [ 'https://rpc.aternoschain.com' ],
    faucets: [ 'https://faucet.aternoschain.com' ],
    nativeCurrency: { name: 'Aternos', symbol: 'ATR', decimals: 18 },
    infoURL: 'https://aternoschain.com',
    shortName: 'ATR',
    chainId: 12020,
    networkId: 12020,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.aternoschain.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Singularity ZERO Testnet',
    chain: 'ZERO',
    rpc: [ 'https://betaenv.singularity.gold:18545' ],
    faucets: [ 'https://nft.singularity.gold' ],
    nativeCurrency: { name: 'ZERO', symbol: 'tZERO', decimals: 18 },
    infoURL: 'https://www.singularity.gold',
    shortName: 'tZERO',
    chainId: 12051,
    networkId: 12051,
    slip44: 1,
    explorers: [
      {
        name: 'zeroscan',
        url: 'https://betaenv.singularity.gold:18002',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Singularity ZERO Mainnet',
    chain: 'ZERO',
    rpc: [ 'https://zerorpc.singularity.gold' ],
    faucets: [ 'https://zeroscan.singularity.gold' ],
    nativeCurrency: { name: 'ZERO', symbol: 'ZERO', decimals: 18 },
    infoURL: 'https://www.singularity.gold',
    shortName: 'ZERO',
    chainId: 12052,
    networkId: 12052,
    slip44: 621,
    explorers: [
      {
        name: 'zeroscan',
        url: 'https://zeroscan.singularity.gold',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BRC Chain Mainnet',
    chain: 'BRC',
    rpc: [ 'https://rpc.brcchain.io' ],
    faucets: [ 'https://faucet.brcchain.io' ],
    nativeCurrency: {
      name: 'BRC Chain mainnet native token',
      symbol: 'BRC',
      decimals: 18
    },
    infoURL: 'https://bridge.brcchain.io',
    shortName: 'BRC',
    chainId: 12123,
    networkId: 12123,
    icon: 'brcchain',
    explorers: [
      {
        name: 'BRC Chain Explorer',
        url: 'https://scan.brcchain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Fibonacci Mainnet',
    chain: 'FIBO',
    icon: 'fibonacci',
    rpc: [
      'https://node1.fibo-api.asia',
      'https://node2.fibo-api.asia',
      'https://node3.fibo-api.asia',
      'https://node4.fibo-api.asia',
      'https://node5.fibo-api.asia',
      'https://node6.fibo-api.asia',
      'https://node7.fibo-api.asia',
      'https://node1.fibo-rpc.asia',
      'https://node2.fibo-rpc.asia',
      'https://node3.fibo-rpc.asia',
      'https://node4.fibo-rpc.asia',
      'https://node5.fibo-rpc.asia',
      'https://node6.fibo-rpc.asia',
      'https://node7.fibo-rpc.asia'
    ],
    faucets: [ 'https://test.fibochain.org/faucets' ],
    nativeCurrency: { name: 'FIBONACCI UTILITY TOKEN', symbol: 'FIBO', decimals: 18 },
    infoURL: 'https://fibochain.org',
    shortName: 'fibo',
    chainId: 12306,
    networkId: 1230,
    explorers: [
      {
        name: 'fiboscan',
        url: 'https://scan.fibochain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BLG Testnet',
    chain: 'BLG',
    icon: 'blg',
    rpc: [ 'https://rpc.blgchain.com' ],
    faucets: [ 'https://faucet.blgchain.com' ],
    nativeCurrency: { name: 'Blg', symbol: 'BLG', decimals: 18 },
    infoURL: 'https://blgchain.com',
    shortName: 'blgchain',
    chainId: 12321,
    networkId: 12321,
    slip44: 1
  },
  {
    name: 'Step Testnet',
    title: 'Step Test Network',
    chain: 'STEP',
    icon: 'step',
    rpc: [ 'https://rpc.testnet.step.network' ],
    faucets: [ 'https://faucet.step.network' ],
    nativeCurrency: { name: 'FITFI', symbol: 'FITFI', decimals: 18 },
    infoURL: 'https://step.network',
    shortName: 'steptest',
    chainId: 12345,
    networkId: 12345,
    slip44: 1,
    explorers: [
      {
        name: 'StepScan',
        url: 'https://testnet.stepscan.io',
        icon: 'step',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-43113' }
  },
  {
    name: 'RSS3 VSL Mainnet',
    chain: 'RSS3',
    rpc: [ 'https://rpc.rss3.io' ],
    faucets: [],
    nativeCurrency: { name: 'RSS3', symbol: 'RSS3', decimals: 18 },
    infoURL: 'https://rss3.io',
    shortName: 'rss3',
    chainId: 12553,
    networkId: 12553,
    icon: 'rss3',
    explorers: [
      {
        name: 'RSS3 VSL Scan',
        url: 'https://scan.rss3.io',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://explorer.rss3.io/bridge' } ]
    }
  },
  {
    name: 'Rikeza Network Testnet',
    title: 'Rikeza Network Testnet',
    chain: 'Rikeza',
    icon: 'rikeza',
    rpc: [ 'https://testnet-rpc.rikscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'Rikeza', symbol: 'RIK', decimals: 18 },
    infoURL: 'https://rikeza.io',
    shortName: 'tRIK',
    chainId: 12715,
    networkId: 12715,
    slip44: 1,
    explorers: [
      {
        name: 'Rikeza Blockchain explorer',
        url: 'https://testnet.rikscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Quantum Chain Testnet',
    chain: 'tQNET',
    icon: 'qnet',
    rpc: [ 'https://testnet-rpc.quantumscan.org' ],
    faucets: [],
    nativeCurrency: { name: 'Quantum Chain', symbol: 'tQNET', decimals: 18 },
    infoURL: 'https://quantumnetwork.gg',
    shortName: 'tqnet',
    chainId: 12890,
    networkId: 12890,
    slip44: 1,
    explorers: [
      {
        name: 'Quantum Scan Testnet',
        url: 'https://testnet.quantumscan.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SPS',
    chain: 'SPS',
    rpc: [ 'https://rpc.ssquad.games' ],
    faucets: [],
    nativeCurrency: { name: 'ECG', symbol: 'ECG', decimals: 18 },
    infoURL: 'https://ssquad.games/',
    shortName: 'SPS',
    chainId: 13000,
    networkId: 13000,
    explorers: [
      {
        name: 'SPS Explorer',
        url: 'http://spsscan.ssquad.games',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Credit Smart Chain',
    chain: 'CREDIT',
    rpc: [ 'https://rpc.creditsmartchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Credit', symbol: 'CREDIT', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://creditsmartchain.com',
    shortName: 'Credit',
    chainId: 13308,
    networkId: 13308,
    icon: 'credit',
    explorers: [
      {
        name: 'Creditscan',
        url: 'https://scan.creditsmartchain.com',
        icon: 'credit',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Beam Testnet',
    chain: 'BEAM',
    rpc: [
      'https://build.onbeam.com/rpc/testnet',
      'wss://build.onbeam.com/ws/testnet',
      'https://subnets.avax.network/beam/testnet/rpc',
      'wss://subnets.avax.network/beam/testnet/ws'
    ],
    features: [ { name: 'EIP1559' } ],
    faucets: [
      'https://faucet.avax.network/?subnet=beam',
      'https://faucet.onbeam.com'
    ],
    nativeCurrency: { name: 'Beam', symbol: 'BEAM', decimals: 18 },
    infoURL: 'https://www.onbeam.com',
    shortName: 'beam-testnet',
    icon: 'beam',
    chainId: 13337,
    networkId: 13337,
    slip44: 1,
    explorers: [
      {
        name: 'Beam Explorer',
        url: 'https://subnets-test.avax.network/beam',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Immutable zkEVM',
    chain: 'Immutable zkEVM',
    rpc: [
      'https://rpc.immutable.com',
      'https://immutable-zkevm.drpc.org',
      'wss://immutable-zkevm.drpc.org'
    ],
    faucets: [ 'https://docs.immutable.com/docs/zkEVM/guides/faucet' ],
    nativeCurrency: { name: 'IMX', symbol: 'IMX', decimals: 18 },
    infoURL: 'https://www.immutable.com',
    shortName: 'imx',
    chainId: 13371,
    networkId: 13371,
    icon: 'immutable',
    explorers: [
      {
        name: 'Immutable explorer',
        url: 'https://explorer.immutable.com',
        standard: 'EIP3091',
        icon: 'immutable'
      }
    ]
  },
  {
    name: 'Phoenix Mainnet',
    chain: 'Phoenix',
    rpc: [ 'https://rpc.phoenixplorer.com/' ],
    faucets: [],
    nativeCurrency: { name: 'Phoenix', symbol: 'PHX', decimals: 18 },
    infoURL: 'https://cryptophoenix.org/phoenix',
    shortName: 'Phoenix',
    chainId: 13381,
    networkId: 13381,
    icon: 'phoenix',
    explorers: [
      {
        name: 'phoenixplorer',
        url: 'https://phoenixplorer.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Masa',
    chain: 'MASA',
    icon: 'masa',
    rpc: [ 'https://subnets.avax.network/masanetwork/mainnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Masa Token', symbol: 'MASA', decimals: 18 },
    infoURL: 'https://masa.finance',
    shortName: 'masa',
    chainId: 13396,
    networkId: 13396,
    explorers: [
      {
        name: 'Masa Explorer',
        url: 'https://subnets.avax.network/masa',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Immutable zkEVM Testnet',
    chain: 'Immutable zkEVM',
    rpc: [
      'https://rpc.testnet.immutable.com',
      'https://immutable-zkevm-testnet.drpc.org',
      'wss://immutable-zkevm-testnet.drpc.org'
    ],
    faucets: [ 'https://docs.immutable.com/docs/zkEVM/guides/faucet' ],
    nativeCurrency: { name: 'Test IMX', symbol: 'tIMX', decimals: 18 },
    infoURL: 'https://www.immutable.com',
    shortName: 'imx-testnet',
    chainId: 13473,
    networkId: 13473,
    slip44: 1,
    icon: 'immutable',
    explorers: [
      {
        name: 'Immutable Testnet explorer',
        url: 'https://explorer.testnet.immutable.com',
        standard: 'EIP3091',
        icon: 'immutable'
      }
    ]
  },
  {
    name: 'Kronobit Mainnet',
    title: 'Kronobit Mainnet',
    chain: 'KNB',
    rpc: [ 'https://mainnet-rpc.qbitscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'Kronobit', symbol: 'KNB', decimals: 18 },
    infoURL: 'https://kronobit.org',
    shortName: 'KNB',
    chainId: 13600,
    networkId: 13600,
    icon: 'kronobit',
    explorers: [
      {
        name: 'qbitscan',
        url: 'https://explorer.qbitscan.com',
        icon: 'kronobit',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Susono',
    chain: 'SUS',
    rpc: [
      'https://gateway.opn.network/node/ext/bc/2VsZe5DstWw2bfgdx3YbjKcMsJnNDjni95sZorBEdk9L9Qr9Fr/rpc'
    ],
    faucets: [],
    nativeCurrency: { name: 'Susono', symbol: 'OPN', decimals: 18 },
    infoURL: '',
    shortName: 'sus',
    chainId: 13812,
    networkId: 13812,
    explorers: [
      {
        name: 'Susono',
        url: 'http://explorer.opn.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'SPS Testnet',
    chain: 'SPS-Testnet',
    rpc: [ 'https://www.3sps.net' ],
    faucets: [],
    nativeCurrency: { name: 'ECG', symbol: 'ECG', decimals: 18 },
    infoURL: 'https://ssquad.games/',
    shortName: 'SPS-Test',
    chainId: 14000,
    networkId: 14000,
    slip44: 1,
    explorers: [
      {
        name: 'SPS Test Explorer',
        url: 'https://explorer.3sps.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'EVOLVE Testnet',
    chain: 'EVO',
    icon: 'evolveIcon',
    rpc: [ 'https://testnet-rpc.evolveblockchain.io' ],
    faucets: [ 'https://faucet.evolveblockchain.io' ],
    nativeCurrency: { name: 'Evolve', symbol: 'EVO', decimals: 18 },
    infoURL: 'https://evolveblockchain.io',
    shortName: 'evo',
    chainId: 14324,
    networkId: 14324,
    explorers: [
      {
        name: 'Evolve Testnet Explorer',
        url: 'https://testnet.evolveblockchain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Vitruveo Testnet',
    title: 'Vitruveo is a blockchain for Creators',
    chain: 'Vitruveo',
    rpc: [ 'https://test-rpc.vitruveo.xyz' ],
    faucets: [ 'https://faucet.vitruveo.xyz' ],
    nativeCurrency: { name: 'Vitruveo Test Coin', symbol: 'tVTRU', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://www.vitruveo.xyz',
    shortName: 'vitruveo-test',
    chainId: 14333,
    networkId: 14333,
    icon: 'vitruveo',
    explorers: [
      {
        name: 'Vitruveo Testnet Explorer',
        url: 'https://test-explorer.vitruveo.xyz',
        icon: 'vitruveo',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Humanode Testnet 5 Israfel',
    chain: 'Humanode Testnet 5',
    rpc: [ 'https://explorer-rpc-http.testnet5.stages.humanode.io' ],
    faucets: [ 'https://t.me/HumanodeTestnet5FaucetBot' ],
    nativeCurrency: { name: 'eHMND', symbol: 'eHMND', decimals: 18 },
    infoURL: 'https://humanode.io',
    shortName: 'hmnd-t5',
    chainId: 14853,
    networkId: 14853,
    slip44: 1,
    icon: 'humanode',
    explorers: []
  },
  {
    name: 'Immutable zkEVM Devnet',
    chain: 'Immutable zkEVM',
    rpc: [ 'https://rpc.dev.immutable.com' ],
    faucets: [ 'https://docs.immutable.com/docs/zkEVM/guides/faucet' ],
    nativeCurrency: { name: 'Dev IMX', symbol: 'dIMX', decimals: 18 },
    infoURL: 'https://www.immutable.com',
    shortName: 'imx-devnet',
    chainId: 15003,
    networkId: 15003,
    icon: 'immutable',
    explorers: [
      {
        name: 'Immutable Devnet explorer',
        url: 'https://explorer.dev.immutable.com',
        standard: 'EIP3091',
        icon: 'immutable'
      }
    ]
  },
  {
    name: 'LoopNetwork Mainnet',
    chain: 'LoopNetwork',
    rpc: [ 'https://api.mainnetloop.com' ],
    faucets: [],
    nativeCurrency: { name: 'LOOP', symbol: 'LOOP', decimals: 18 },
    infoURL: 'http://theloopnetwork.org/',
    shortName: 'loop',
    chainId: 15551,
    networkId: 15551,
    explorers: [
      {
        name: 'loopscan',
        url: 'http://explorer.mainnetloop.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Trust EVM Testnet',
    chain: 'Trust EVM Testnet',
    rpc: [ 'https://api.testnet-dev.trust.one' ],
    faucets: [ 'https://faucet.testnet-dev.trust.one/' ],
    nativeCurrency: { name: 'Trust EVM', symbol: 'EVM', decimals: 18 },
    infoURL: 'https://www.trust.one/',
    shortName: 'TrustTestnet',
    chainId: 15555,
    networkId: 15555,
    slip44: 1,
    explorers: [
      {
        name: 'Trust EVM Explorer',
        url: 'https://trustscan.one',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'EOS EVM Network Testnet',
    chain: 'EOS',
    icon: 'eos',
    rpc: [ 'https://api.testnet.evm.eosnetwork.com' ],
    faucets: [],
    nativeCurrency: { name: 'EOS', symbol: 'EOS', decimals: 18 },
    infoURL: 'https://eosnetwork.com/eos-evm',
    shortName: 'eos-testnet',
    chainId: 15557,
    networkId: 15557,
    slip44: 1,
    explorers: [
      {
        name: 'EOS EVM Explorer',
        url: 'https://explorer.testnet.evm.eosnetwork.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.testnet.evm.eosnetwork.com' } ]
    }
  },
  {
    name: 'MetaDot Mainnet',
    chain: 'MTT',
    rpc: [ 'https://mainnet.metadot.network' ],
    faucets: [],
    nativeCurrency: { name: 'MetaDot Token', symbol: 'MTT', decimals: 18 },
    infoURL: 'https://metadot.network',
    shortName: 'mtt',
    chainId: 16000,
    networkId: 16000
  },
  {
    name: 'MetaDot Testnet',
    chain: 'MTTTest',
    rpc: [ 'https://testnet.metadot.network' ],
    faucets: [ 'https://faucet.metadot.network/' ],
    nativeCurrency: { name: 'MetaDot Token TestNet', symbol: 'MTTest', decimals: 18 },
    infoURL: 'https://metadot.network',
    shortName: 'mtttest',
    chainId: 16001,
    networkId: 16001,
    slip44: 1
  },
  {
    name: 'Genesys Mainnet',
    chain: 'Genesys',
    icon: 'genesys',
    rpc: [ 'https://rpc.genesys.network' ],
    faucets: [],
    nativeCurrency: { name: 'Genesys', symbol: 'GSYS', decimals: 18 },
    infoURL: 'https://www.genesys.network/',
    shortName: 'Genesys',
    chainId: 16507,
    networkId: 16507,
    explorers: [
      {
        name: 'GchainExplorer',
        url: 'https://gchainexplorer.genesys.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'IRIShub Testnet',
    chain: 'IRIShub',
    rpc: [ 'https://evmrpc.nyancat.irisnet.org' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Eris', symbol: 'ERIS', decimals: 18 },
    infoURL: 'https://www.irisnet.org',
    shortName: 'nyancat',
    chainId: 16688,
    networkId: 16688,
    slip44: 1,
    icon: 'nyancat',
    explorers: [
      {
        name: 'IRISHub Testnet Cosmos Explorer (IOBScan)',
        url: 'https://nyancat.iobscan.io',
        standard: 'none',
        icon: 'nyancat'
      }
    ]
  },
  {
    name: 'AirDAO Mainnet',
    chain: 'ambnet',
    icon: 'airdao',
    rpc: [ 'https://network.ambrosus.io' ],
    faucets: [],
    nativeCurrency: { name: 'Amber', symbol: 'AMB', decimals: 18 },
    infoURL: 'https://airdao.io',
    shortName: 'airdao',
    chainId: 16718,
    networkId: 16718,
    explorers: [
      {
        name: 'AirDAO Network Explorer',
        url: 'https://airdao.io/explorer',
        standard: 'none'
      }
    ]
  },
  {
    name: 'IVAR Chain Testnet',
    chain: 'IVAR',
    icon: 'ivar',
    rpc: [ 'https://testnet-rpc.ivarex.com' ],
    faucets: [ 'https://tfaucet.ivarex.com/' ],
    nativeCurrency: { name: 'tIvar', symbol: 'tIVAR', decimals: 18 },
    infoURL: 'https://ivarex.com',
    shortName: 'tivar',
    chainId: 16888,
    networkId: 16888,
    slip44: 1,
    explorers: [
      {
        name: 'ivarscan',
        url: 'https://testnet.ivarscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Holesky',
    title: 'Ethereum Testnet Holesky',
    chain: 'ETH',
    rpc: [
      'https://rpc.holesky.ethpandaops.io',
      'https://ethereum-holesky-rpc.publicnode.com',
      'wss://ethereum-holesky-rpc.publicnode.com',
      'https://holesky.drpc.org',
      'wss://holesky.drpc.org'
    ],
    faucets: [
      'https://faucet.holesky.ethpandaops.io',
      'https://holesky-faucet.pk910.de'
    ],
    nativeCurrency: { name: 'Testnet ETH', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://holesky.ethpandaops.io',
    shortName: 'holesky',
    chainId: 17000,
    networkId: 17000,
    slip44: 1,
    icon: 'ethereum',
    status: 'incubating',
    explorers: [
      {
        name: 'Holesky Explorer',
        url: 'https://holesky.beaconcha.in',
        icon: 'ethereum',
        standard: 'EIP3091'
      },
      {
        name: 'otterscan-holesky',
        url: 'https://holesky.otterscan.io',
        icon: 'ethereum',
        standard: 'EIP3091'
      },
      {
        name: 'Holesky Etherscan',
        url: 'https://holesky.etherscan.io',
        icon: 'ethereum',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Redstone Holesky Testnet',
    chain: 'ETH',
    rpc: [ 'https://rpc.holesky.redstone.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Redstone Testnet Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://redstone.xyz/docs/network-info',
    shortName: 'redstone',
    chainId: 17001,
    networkId: 17001,
    slip44: 1,
    icon: 'redstone',
    explorers: [
      {
        name: 'Redstone Holesky Explorer',
        url: 'https://explorer.holesky.redstone.xyz',
        icon: 'ethereum',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'G8Chain Mainnet',
    chain: 'G8C',
    icon: 'G8Chain',
    rpc: [ 'https://mainnet-rpc.oneg8.network' ],
    faucets: [ 'https://faucet.oneg8.network' ],
    nativeCurrency: { name: 'G8Chain', symbol: 'G8C', decimals: 18 },
    infoURL: 'https://oneg8.one',
    shortName: 'G8Cm',
    chainId: 17171,
    networkId: 17171,
    explorers: [
      {
        name: 'G8Chain',
        url: 'https://mainnet.oneg8.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Eclipse Subnet',
    chain: 'ECLIPSE',
    rpc: [ 'https://subnets.avax.network/eclipse/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Eclipse', symbol: 'ECLP', decimals: 16 },
    infoURL: 'http://eclipsenet.io',
    shortName: 'eclipse',
    chainId: 17172,
    networkId: 17172,
    explorers: [
      {
        name: 'ECLIPSE Explorer',
        url: 'https://subnets-test.avax.network/eclipse',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Palette Chain Testnet',
    chain: 'PLT',
    rpc: [ 'https://palette-opennet.com:22000' ],
    faucets: [],
    nativeCurrency: { name: 'Palette Token', symbol: 'PLT', decimals: 18 },
    features: [],
    infoURL: 'https://hashpalette.com/',
    shortName: 'PCT',
    chainId: 17180,
    networkId: 17180,
    slip44: 1,
    icon: 'PLT',
    explorers: [
      {
        name: 'Palettescan',
        url: 'https://testnet.palettescan.com',
        icon: 'PLT',
        standard: 'none'
      }
    ]
  },
  {
    name: 'KONET Mainnet',
    chain: 'KONET',
    rpc: [ 'https://api.kon-wallet.com' ],
    faucets: [],
    nativeCurrency: { name: 'KONET', symbol: 'KONET', decimals: 18 },
    infoURL: 'https://konetmain.com',
    shortName: 'KONET',
    chainId: 17217,
    networkId: 17217,
    slip44: 1,
    icon: 'konet',
    explorers: [
      {
        name: 'konet-explorer',
        url: 'https://explorer.kon-wallet.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'EOS EVM Network',
    chain: 'EOS',
    icon: 'eos',
    rpc: [ 'https://api.evm.eosnetwork.com' ],
    faucets: [],
    nativeCurrency: { name: 'EOS', symbol: 'EOS', decimals: 18 },
    infoURL: 'https://eosnetwork.com/eos-evm',
    shortName: 'eos',
    chainId: 17777,
    networkId: 17777,
    explorers: [
      {
        name: 'EOS EVM Explorer',
        url: 'https://explorer.evm.eosnetwork.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [
        { url: 'https://bridge.evm.eosnetwork.com' },
        { url: 'https://app.multichain.org' }
      ]
    }
  },
  {
    name: 'Frontier of Dreams Testnet',
    chain: 'Game Network',
    rpc: [ 'https://rpc.fod.games/' ],
    nativeCurrency: { name: 'ZKST', symbol: 'ZKST', decimals: 18 },
    faucets: [],
    shortName: 'ZKST',
    chainId: 18000,
    networkId: 18000,
    slip44: 1,
    infoURL: 'https://goexosphere.com',
    explorers: [
      {
        name: 'Game Network',
        url: 'https://explorer.fod.games',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Smart Trade Networks',
    chain: 'Smart Trade Networks',
    rpc: [ 'https://beefledgerwallet.com:8544' ],
    faucets: [],
    nativeCurrency: { name: 'STN', symbol: 'STN', decimals: 18 },
    infoURL: 'https://www.smarttradenetworks.com',
    shortName: 'STN',
    chainId: 18122,
    networkId: 18122,
    icon: 'stn',
    explorers: [
      {
        name: 'stnscan',
        url: 'https://stnscan.com',
        icon: 'stn',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Proof Of Memes',
    title: 'Proof Of Memes Mainnet',
    chain: 'POM',
    icon: 'pom',
    rpc: [
      'https://mainnet-rpc.memescan.io',
      'https://mainnet-rpc2.memescan.io',
      'https://mainnet-rpc3.memescan.io',
      'https://mainnet-rpc4.memescan.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'Proof Of Memes', symbol: 'POM', decimals: 18 },
    infoURL: 'https://proofofmemes.org',
    shortName: 'pom',
    chainId: 18159,
    networkId: 18159,
    explorers: [
      {
        name: 'explorer-proofofmemes',
        url: 'https://memescan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'G8Chain Testnet',
    chain: 'G8C',
    icon: 'G8Chain',
    rpc: [ 'https://testnet-rpc.oneg8.network' ],
    faucets: [ 'https://faucet.oneg8.network' ],
    nativeCurrency: { name: 'G8Coin', symbol: 'G8C', decimals: 18 },
    infoURL: 'https://oneg8.one',
    shortName: 'G8Ct',
    chainId: 18181,
    networkId: 18181,
    slip44: 1,
    explorers: [
      {
        name: 'G8Chain',
        url: 'https://testnet.oneg8.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'unreal-old',
    title: 'unreal testnet for re.al',
    chain: 'unreal',
    rpc: [
      'https://rpc.unreal.gelato.digital',
      'wss://ws.unreal.gelato.digital'
    ],
    nativeCurrency: { name: 'unreal Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://raas.gelato.network/rollups/details/public/unreal',
    faucets: [],
    shortName: 'unreal-old',
    chainId: 18231,
    networkId: 18231,
    slip44: 60,
    icon: 'unreal',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://unreal.blockscout.com',
        icon: 'unreal',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-11155111', bridges: [] },
    status: 'deprecated'
  },
  {
    name: 'unreal',
    title: 'unreal testnet for re.al',
    chain: 'unreal',
    rpc: [
      'https://rpc.unreal-orbit.gelato.digital',
      'wss://ws.unreal-orbit.gelato.digital'
    ],
    nativeCurrency: { name: 'unreal Ether', symbol: 'reETH', decimals: 18 },
    infoURL: 'https://raas.gelato.network/rollups/details/public/unreal',
    faucets: [],
    shortName: 'unreal',
    chainId: 18233,
    networkId: 18233,
    slip44: 60,
    icon: 'unreal',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://unreal.blockscout.com',
        icon: 'unreal',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-17000',
      bridges: [ { url: 'https://bridge.gelato.network/bridge/unreal' } ]
    }
  },
  {
    name: 'MXC zkEVM Moonchain',
    chain: 'MXC zkEVM',
    icon: 'mxczkevm',
    rpc: [ 'https://rpc.mxc.com' ],
    faucets: [],
    nativeCurrency: { name: 'MXC zkEVM Moonchain', symbol: 'MXC', decimals: 18 },
    infoURL: 'https://doc.mxc.com/docs/intro',
    shortName: 'MXCzkEVM',
    chainId: 18686,
    networkId: 18686,
    explorers: [
      {
        name: 'MXC zkEVM Moonchain',
        url: 'https://explorer.moonchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Titan (TKX)',
    chain: 'Titan (TKX)',
    rpc: [
      'https://titan-json-rpc.titanlab.io',
      'https://titan-json-rpc-tokyo.titanlab.io',
      'https://titan-json-rpc-seoul.titanlab.io',
      'https://titan-json-rpc-hongkong.titanlab.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'Titan tkx', symbol: 'TKX', decimals: 18 },
    infoURL: 'https://titanlab.io',
    shortName: 'titan_tkx',
    chainId: 18888,
    networkId: 18888,
    slip44: 1,
    icon: 'titan_tkx',
    explorers: [
      {
        name: 'Titan Explorer',
        url: 'https://tkxscan.io/Titan',
        standard: 'none',
        icon: 'titan_tkx'
      }
    ]
  },
  {
    name: 'Titan (TKX) Testnet',
    chain: 'Titan (TKX)',
    rpc: [
      'https://titan-testnet-json-rpc.titanlab.io',
      'https://titan-testnet-json-rpc-1.titanlab.io',
      'https://titan-testnet-json-rpc-2.titanlab.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'Titan tkx', symbol: 'TKX', decimals: 18 },
    infoURL: 'https://titanlab.io',
    shortName: 'titan_tkx-testnet',
    chainId: 18889,
    networkId: 18889,
    slip44: 1,
    icon: 'titan_tkx',
    explorers: [
      {
        name: 'Titan Explorer',
        url: 'https://titan-testnet-explorer-light.titanlab.io/Titan%20Testnet',
        standard: 'none',
        icon: 'titan_tkx'
      }
    ]
  },
  {
    name: 'HOME Verse Mainnet',
    chain: 'HOME Verse',
    icon: 'home_verse',
    rpc: [ 'https://rpc.mainnet.oasys.homeverse.games/' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://www.homeverse.games/',
    shortName: 'HMV',
    chainId: 19011,
    networkId: 19011,
    explorers: [
      {
        name: 'HOME Verse Explorer',
        url: 'https://explorer.oasys.homeverse.games',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-248' }
  },
  {
    name: 'Decentraconnect Social',
    chain: 'DCSM',
    icon: 'dcsmIcon',
    rpc: [ 'https://rpc.decentraconnect.io' ],
    faucets: [],
    nativeCurrency: { name: 'Decentraconnect Social', symbol: 'DCSM', decimals: 18 },
    infoURL: 'https://docs.decentraconnect.io',
    shortName: 'DCSMs',
    chainId: 19224,
    networkId: 19224,
    explorers: [
      {
        name: 'Decentraconnect Social',
        url: 'https://decentraconnect.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Magnet Network',
    chain: 'Magnet',
    rpc: [ 'https://magnet-rpc.magport.io/' ],
    faucets: [],
    nativeCurrency: { name: 'Magnet Network', symbol: 'DOT', decimals: 18 },
    infoURL: 'https://magnet.magport.io/',
    shortName: 'mgt',
    chainId: 19527,
    networkId: 19527,
    explorers: []
  },
  {
    name: 'BTCIX Network',
    chain: 'BTCIX',
    rpc: [ 'https://seed.btcix.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'BTCIX Network', symbol: 'BTCIX', decimals: 18 },
    infoURL: 'https://bitcolojix.org',
    shortName: 'btcix',
    chainId: 19845,
    networkId: 19845,
    explorers: [
      {
        name: 'BTCIXScan',
        url: 'https://btcixscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Camelark Mainnet',
    chainId: 20001,
    shortName: 'Camelark',
    chain: 'ETHW',
    icon: 'camelark',
    networkId: 20001,
    nativeCurrency: { name: 'EthereumPoW', symbol: 'ETHW', decimals: 18 },
    rpc: [ 'https://mainnet-http-rpc.camelark.com' ],
    faucets: [],
    explorers: [
      {
        name: 'CamelarkScan',
        url: 'https://scan.camelark.com',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://www.camelark.com'
  },
  {
    name: 'Callisto Testnet',
    chain: 'CLO',
    rpc: [ 'https://testnet-rpc.callisto.network/' ],
    faucets: [ 'https://faucet.callisto.network/' ],
    nativeCurrency: { name: 'Callisto', symbol: 'CLO', decimals: 18 },
    infoURL: 'https://callisto.network',
    shortName: 'CLOTestnet',
    chainId: 20729,
    networkId: 79,
    slip44: 1
  },
  {
    name: 'P12 Chain',
    chain: 'P12',
    icon: 'p12',
    rpc: [ 'https://rpc-chain.p12.games' ],
    faucets: [],
    nativeCurrency: { name: 'Hooked P2', symbol: 'hP2', decimals: 18 },
    infoURL: 'https://p12.network',
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    shortName: 'p12',
    chainId: 20736,
    networkId: 20736,
    explorers: [
      {
        name: 'P12 Chain Explorer',
        url: 'https://explorer.p12.games',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Jono11 Subnet',
    chain: 'JONO11',
    icon: 'jono11',
    rpc: [ 'https://subnets.avax.network/jono11/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Jono11 Token', symbol: 'JONO', decimals: 18 },
    infoURL: '',
    shortName: 'jono11',
    chainId: 20765,
    networkId: 20765,
    explorers: [
      {
        name: 'JONO11 Explorer',
        url: 'https://subnets-test.avax.network/jono11',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'C4EI',
    chain: 'C4EI',
    rpc: [ 'https://rpc.c4ei.net' ],
    faucets: [ 'https://play.google.com/store/apps/details?id=net.c4ei.fps2' ],
    nativeCurrency: { name: 'C4EI', symbol: 'C4EI', decimals: 18 },
    infoURL: 'https://c4ei.net',
    shortName: 'c4ei',
    chainId: 21004,
    networkId: 21004,
    explorers: [
      {
        name: 'C4EI sirato',
        url: 'https://exp.c4ei.net',
        icon: 'c4ei',
        standard: 'none'
      }
    ]
  },
  {
    name: 'All About Healthy',
    chain: 'AAH',
    rpc: [ 'https://rpc.c4ex.net' ],
    faucets: [ 'https://t.me/c4eiAirdrop' ],
    nativeCurrency: { name: 'AAH', symbol: 'AAH', decimals: 18 },
    infoURL: 'https://c4ex.net',
    shortName: 'aah',
    chainId: 21133,
    networkId: 21133,
    explorers: [
      {
        name: 'AAH Blockscout',
        url: 'https://exp.c4ex.net',
        icon: 'aah',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CENNZnet Azalea',
    chain: 'CENNZnet',
    rpc: [ 'https://cennznet.unfrastructure.io/public' ],
    faucets: [],
    nativeCurrency: { name: 'CPAY', symbol: 'CPAY', decimals: 18 },
    infoURL: 'https://cennz.net',
    shortName: 'cennz-a',
    chainId: 21337,
    networkId: 21337,
    icon: 'cennz',
    explorers: [
      {
        name: 'UNcover',
        url: 'https://uncoverexplorer.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'omChain Mainnet',
    chain: 'OML',
    icon: 'omlira',
    rpc: [ 'https://seed.omchain.io' ],
    faucets: [],
    nativeCurrency: { name: 'omChain', symbol: 'OMC', decimals: 18 },
    infoURL: 'https://omchain.io',
    shortName: 'omc',
    chainId: 21816,
    networkId: 21816,
    explorers: [
      {
        name: 'omChain Explorer',
        url: 'https://explorer.omchain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BSL Mainnet',
    chain: 'BSL',
    rpc: [
      'http://rpc-mainnet.nftruth.io:8545',
      'ws://rpc-mainnet.nftruth.io:8645'
    ],
    faucets: [],
    nativeCurrency: { name: 'Origin NFT', symbol: 'ONF', decimals: 18 },
    infoURL: 'https://bsquarelab.com/',
    shortName: 'onf',
    chainId: 21912,
    networkId: 21912,
    explorers: [
      {
        name: 'BSL Mainnet Explorer',
        url: 'https://scan.nftruth.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Taycan',
    chain: 'Taycan',
    rpc: [ 'https://taycan-rpc.hupayx.io:8545' ],
    faucets: [],
    nativeCurrency: { name: 'shuffle', symbol: 'SFL', decimals: 18 },
    infoURL: 'https://hupayx.io',
    shortName: 'SFL',
    chainId: 22023,
    networkId: 22023,
    icon: 'shuffle',
    explorers: [
      {
        name: 'Taycan Explorer(Blockscout)',
        url: 'https://taycan-evmscan.hupayx.io',
        standard: 'none',
        icon: 'shuffle'
      },
      {
        name: 'Taycan Cosmos Explorer(BigDipper)',
        url: 'https://taycan-cosmoscan.hupayx.io',
        standard: 'none',
        icon: 'shuffle'
      }
    ]
  },
  {
    name: 'AirDAO Testnet',
    chain: 'ambnet-test',
    icon: 'airdao',
    rpc: [ 'https://network.ambrosus-test.io' ],
    faucets: [],
    nativeCurrency: { name: 'Amber', symbol: 'AMB', decimals: 18 },
    infoURL: 'https://testnet.airdao.io',
    shortName: 'airdao-test',
    chainId: 22040,
    networkId: 22040,
    slip44: 1,
    explorers: [
      {
        name: 'AirDAO Network Explorer',
        url: 'https://testnet.airdao.io/explorer',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Nautilus Mainnet',
    chain: 'ETH',
    icon: 'nautilus',
    rpc: [ 'https://api.nautilus.nautchain.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Zebec', symbol: 'ZBC', decimals: 18 },
    infoURL: 'https://docs.nautchain.xyz',
    shortName: 'NAUTCHAIN',
    chainId: 22222,
    networkId: 22222,
    explorers: [
      {
        name: 'Nautscan',
        url: 'https://nautscan.com',
        standard: 'EIP3091',
        icon: 'nautilus'
      }
    ]
  },
  {
    name: 'GoldXChain Testnet',
    chain: 'GoldXTestnet',
    rpc: [ 'https://testnet-rpc.goldxchain.io' ],
    faucets: [ 'https://faucet.goldxchain.io' ],
    nativeCurrency: { name: 'GoldX', symbol: 'GOLDX', decimals: 18 },
    infoURL: 'https://goldxchain.io',
    shortName: 'goldx-testnet',
    chainId: 22324,
    networkId: 22324,
    explorers: [
      {
        name: 'GoldXChain Testnet Explorer',
        url: 'https://testnet-explorer.goldxchain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'MAP Protocol',
    chain: 'MAPO',
    icon: 'map',
    rpc: [ 'https://rpc.maplabs.io' ],
    faucets: [],
    nativeCurrency: { name: 'MAPO', symbol: 'MAPO', decimals: 18 },
    infoURL: 'https://mapprotocol.io/',
    shortName: 'mapo',
    chainId: 22776,
    networkId: 22776,
    slip44: 60,
    explorers: [
      {
        name: 'maposcan',
        url: 'https://maposcan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Antofy Testnet',
    chain: 'ABN',
    icon: 'antofy',
    rpc: [ 'https://testnet-rpc.antofy.io' ],
    faucets: [ 'https://faucet.antofy.io' ],
    nativeCurrency: { name: 'Antofy', symbol: 'ABN', decimals: 18 },
    infoURL: 'https://antofy.io',
    shortName: 'ABNt',
    chainId: 23006,
    networkId: 23006,
    slip44: 1,
    explorers: [
      {
        name: 'Antofy Testnet',
        url: 'https://test.antofyscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Opside Testnet',
    chain: 'Opside',
    rpc: [ 'https://testrpc.opside.network' ],
    faucets: [ 'https://faucet.opside.network' ],
    nativeCurrency: { name: 'IDE', symbol: 'IDE', decimals: 18 },
    infoURL: 'https://opside.network',
    shortName: 'opside',
    chainId: 23118,
    networkId: 23118,
    slip44: 1,
    icon: 'opside',
    explorers: [
      {
        name: 'opsideInfo',
        url: 'https://opside.info',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Oasis Sapphire',
    chain: 'Sapphire',
    icon: 'oasis',
    rpc: [ 'https://sapphire.oasis.io', 'wss://sapphire.oasis.io/ws' ],
    faucets: [],
    nativeCurrency: { name: 'Sapphire Rose', symbol: 'ROSE', decimals: 18 },
    infoURL: 'https://docs.oasis.io/dapp/sapphire',
    shortName: 'sapphire',
    chainId: 23294,
    networkId: 23294,
    explorers: [
      {
        name: 'Oasis Sapphire Explorer',
        url: 'https://explorer.oasis.io/mainnet/sapphire',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Oasis Sapphire Testnet',
    chain: 'Sapphire',
    icon: 'oasis',
    rpc: [
      'https://testnet.sapphire.oasis.io',
      'wss://testnet.sapphire.oasis.io/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'Sapphire Test Rose', symbol: 'TEST', decimals: 18 },
    infoURL: 'https://docs.oasis.io/dapp/sapphire',
    shortName: 'sapphire-testnet',
    chainId: 23295,
    networkId: 23295,
    slip44: 1,
    explorers: [
      {
        name: 'Oasis Sapphire Testnet Explorer',
        url: 'https://explorer.oasis.io/testnet/sapphire',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DreyerX Mainnet',
    chain: 'DreyerX',
    rpc: [ 'https://rpc.dreyerx.com' ],
    faucets: [],
    nativeCurrency: { name: 'DreyerX', symbol: 'DRX', decimals: 18 },
    infoURL: 'https://dreyerx.com',
    shortName: 'dreyerx',
    chainId: 23451,
    networkId: 23451,
    icon: 'dreyerx',
    explorers: [
      {
        name: 'drxscan',
        url: 'https://scan.dreyerx.com',
        icon: 'dreyerx',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DreyerX Testnet',
    chain: 'DreyerX',
    rpc: [ 'https://testnet-rpc.dreyerx.com' ],
    faucets: [],
    nativeCurrency: { name: 'DreyerX', symbol: 'DRX', decimals: 18 },
    infoURL: 'https://dreyerx.com',
    shortName: 'dreyerx-testnet',
    chainId: 23452,
    networkId: 23452,
    icon: 'dreyerx',
    explorers: [
      {
        name: 'drxscan',
        url: 'https://testnet-scan.dreyerx.com',
        icon: 'dreyerx',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Blast Testnet',
    chain: 'ETH',
    icon: 'blastIcon',
    rpc: [ 'http://testnet-rpc.blastblockchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://docs.blastblockchain.com',
    shortName: 'blastT',
    chainId: 23888,
    networkId: 23888,
    explorers: [
      {
        name: 'Blast Testnet',
        url: 'http://testnet-explorer.blastblockchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Webchain',
    chain: 'WEB',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Webchain Ether', symbol: 'WEB', decimals: 18 },
    infoURL: 'https://webchain.network',
    shortName: 'web',
    chainId: 24484,
    networkId: 37129,
    slip44: 227
  },
  {
    name: 'MintMe.com Coin',
    chain: 'MINTME',
    rpc: [ 'https://node1.mintme.com' ],
    faucets: [],
    nativeCurrency: { name: 'MintMe.com Coin', symbol: 'MINTME', decimals: 18 },
    infoURL: 'https://www.mintme.com',
    shortName: 'mintme',
    chainId: 24734,
    networkId: 37480
  },
  {
    name: 'LiquidLayer Mainnet',
    chain: 'LiquidLayer',
    icon: 'lila',
    rpc: [ 'https://mainnet.liquidlayer.network' ],
    faucets: [],
    nativeCurrency: { name: 'LiquidLayer', symbol: 'LILA', decimals: 18 },
    infoURL: 'https://scan.liquidlayer.network',
    shortName: 'LILA',
    chainId: 25186,
    networkId: 25186,
    explorers: [
      {
        name: 'LiquidLayer Mainnet Explorer',
        url: 'https://scan.liquidlayer.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'AlveyChain Testnet',
    chain: 'tALV',
    rpc: [ 'https://testnet-rpc.alvey.io' ],
    faucets: [ 'https://faucet.alveytestnet.com' ],
    nativeCurrency: { name: 'AlveyCoin Testnet', symbol: 'tALV', decimals: 18 },
    infoURL: 'https://alveychain.com/',
    shortName: 'talv',
    chainId: 25839,
    networkId: 25839,
    icon: 'alveychain',
    explorers: [
      {
        name: 'AlveyScan Testnet',
        url: 'https://alveytestnet.com',
        icon: 'alveychain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Hammer Chain Mainnet',
    chain: 'HammerChain',
    rpc: [ 'https://www.hammerchain.io/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'GOLDT', symbol: 'GOLDT', decimals: 18 },
    infoURL: 'https://www.hammerchain.io',
    shortName: 'GOLDT',
    chainId: 25888,
    networkId: 25888,
    explorers: [
      {
        name: 'Hammer Chain Explorer',
        url: 'https://www.hammerchain.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Bitkub Chain Testnet',
    chain: 'BKC',
    icon: 'bkc',
    rpc: [
      'https://rpc-testnet.bitkubchain.io',
      'wss://wss-testnet.bitkubchain.io'
    ],
    faucets: [ 'https://faucet.bitkubchain.com' ],
    nativeCurrency: { name: 'Bitkub Coin', symbol: 'tKUB', decimals: 18 },
    infoURL: 'https://www.bitkubchain.com/',
    shortName: 'bkct',
    chainId: 25925,
    networkId: 25925,
    slip44: 1,
    explorers: [
      {
        name: 'bkcscan-testnet',
        url: 'https://testnet.bkcscan.com',
        standard: 'none',
        icon: 'bkc'
      }
    ]
  },
  {
    name: 'Ferrum Testnet',
    chain: 'tFRM',
    rpc: [ 'http://testnet.dev.svcs.ferrumnetwork.io:9933' ],
    faucets: [ 'https://testnet.faucet.ferrumnetwork.io' ],
    nativeCurrency: { name: 'Ferrum', symbol: 'tFRM', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://ferrum.network',
    shortName: 'frm',
    chainId: 26026,
    networkId: 26026,
    slip44: 1,
    explorers: [
      {
        name: 'polkadotjs',
        url: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftestnet.dev.svcs.ferrumnetwork.io#/explorer',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Hertz Network Mainnet',
    chain: 'HTZ',
    rpc: [ 'https://mainnet-rpc.hertzscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'Hertz', symbol: 'HTZ', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://www.hertz-network.com',
    shortName: 'HTZ',
    chainId: 26600,
    networkId: 26600,
    icon: 'hertz-network',
    explorers: [
      {
        name: 'Hertz Scan',
        url: 'https://hertzscan.com',
        icon: 'hertz-network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'OasisChain Mainnet',
    chain: 'OasisChain',
    rpc: [
      'https://rpc1.oasischain.io',
      'https://rpc2.oasischain.io',
      'https://rpc3.oasischain.io'
    ],
    faucets: [ 'http://faucet.oasischain.io' ],
    nativeCurrency: { name: 'OAC', symbol: 'OAC', decimals: 18 },
    infoURL: 'https://scan.oasischain.io',
    shortName: 'OAC',
    chainId: 26863,
    networkId: 26863,
    explorers: [
      {
        name: 'OasisChain Explorer',
        url: 'https://scan.oasischain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'KLAOS Nova',
    title: 'KLAOS Nova Test Chain',
    chain: 'KLAOS Nova',
    icon: 'k-laos',
    rpc: [
      'https://rpc.klaosnova.laosfoundation.io',
      'wss://rpc.klaosnova.laosfoundation.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'KLAOS', symbol: 'KLAOS', decimals: 18 },
    infoURL: 'https://www.laosfoundation.io/',
    shortName: 'klaosnova',
    chainId: 27181,
    networkId: 27181,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.klaosnova.laosfoundation.io',
        icon: 'k-laos',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Vizing Mainnet',
    title: 'Vizing Mainnet',
    chain: 'Vizing Mainnet',
    rpc: [ 'https://rpc.vizing.com' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://vizing.com',
    shortName: 'Vizing',
    chainId: 28518,
    networkId: 28518,
    icon: 'vizing',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.vizing.com',
        icon: 'vizing',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.vizing.com' } ]
    }
  },
  {
    name: 'Optimism Bedrock (Goerli Alpha Testnet)',
    chain: 'ETH',
    rpc: [
      'https://alpha-1-replica-0.bedrock-goerli.optimism.io',
      'https://alpha-1-replica-1.bedrock-goerli.optimism.io',
      'https://alpha-1-replica-2.bedrock-goerli.optimism.io',
      'https://alpha-1-replica-2.bedrock-goerli.optimism.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://community.optimism.io/docs/developers/bedrock',
    shortName: 'obgor',
    chainId: 28528,
    networkId: 28528,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscout.com/optimism/bedrock-alpha',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Boba Sepolia',
    chain: 'ETH',
    rpc: [
      'https://sepolia.boba.network',
      'https://boba-sepolia.gateway.tenderly.co',
      'https://gateway.tenderly.co/public/boba-sepolia',
      'wss://boba-sepolia.gateway.tenderly.co/',
      'wss://gateway.tenderly.co/public/boba-sepolia'
    ],
    faucets: [ 'https://www.l2faucet.com/boba' ],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'BobaSepolia',
    chainId: 28882,
    networkId: 28882,
    explorers: [
      {
        name: 'Bobascan',
        url: 'https://testnet.bobascan.com',
        standard: 'none'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://gateway.boba.network' } ]
    }
  },
  {
    name: 'HYCHAIN Testnet',
    chainId: 29112,
    shortName: 'hychain-testnet',
    chain: 'ETH',
    networkId: 29112,
    nativeCurrency: { name: 'TOPIA', symbol: 'TOPIA', decimals: 18 },
    rpc: [ 'https://testnet-rpc.hychain.com/http' ],
    faucets: [],
    infoURL: 'https://www.hychain.com',
    icon: 'hychain',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet.explorer.hychain.com',
        icon: 'hychain',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-58008', bridges: [] }
  },
  {
    name: 'KaiChain Testnet',
    chain: 'KaiChain',
    rpc: [ 'https://testnet-rpc.kaichain.net' ],
    faucets: [ 'https://faucet.kaichain.net' ],
    nativeCurrency: {
      name: 'KaiChain Testnet Native Token',
      symbol: 'KEC',
      decimals: 18
    },
    infoURL: 'https://kaichain.net',
    shortName: 'tkec',
    chainId: 29536,
    networkId: 29536,
    explorers: [
      {
        name: 'KaiChain Explorer',
        url: 'https://testnet-explorer.kaichain.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'MCH Verse Mainnet',
    chain: 'MCH Verse',
    icon: 'mch_verse',
    rpc: [ 'https://rpc.oasys.mycryptoheroes.net' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://www.mycryptoheroes.net/verse',
    shortName: 'MCHV',
    chainId: 29548,
    networkId: 29548,
    explorers: [
      {
        name: 'MCH Verse Explorer',
        url: 'https://explorer.oasys.mycryptoheroes.net',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-248' }
  },
  {
    name: 'Piece testnet',
    chain: 'PieceNetwork',
    icon: 'piecechain',
    rpc: [ 'https://testnet-rpc0.piecenetwork.com' ],
    faucets: [ 'https://piecenetwork.com/faucet' ],
    nativeCurrency: { name: 'ECE', symbol: 'ECE', decimals: 18 },
    infoURL: 'https://piecenetwork.com',
    shortName: 'Piece',
    chainId: 30067,
    networkId: 30067,
    slip44: 1,
    explorers: [
      {
        name: 'Piece Scan',
        url: 'https://testnet-scan.piecenetwork.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Cerium Testnet',
    chain: 'CAU',
    icon: 'canxium',
    rpc: [ 'https://cerium-rpc.canxium.net' ],
    faucets: [],
    nativeCurrency: { name: 'Canxium', symbol: 'CAU', decimals: 18 },
    infoURL: 'https://canxium.org',
    shortName: 'ceri',
    chainId: 30103,
    networkId: 30103,
    slip44: 1,
    explorers: [
      {
        name: 'canxium explorer',
        url: 'https://cerium-explorer.canxium.net',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Ethersocial Network',
    chain: 'ESN',
    rpc: [ 'https://api.esn.gonspool.com' ],
    faucets: [],
    nativeCurrency: { name: 'Ethersocial Network Ether', symbol: 'ESN', decimals: 18 },
    infoURL: 'https://ethersocial.org',
    shortName: 'esn',
    chainId: 31102,
    networkId: 1,
    slip44: 31102
  },
  {
    name: 'CloudTx Mainnet',
    chain: 'CLD',
    icon: 'cloudtx',
    rpc: [ 'https://mainnet-rpc.cloudtx.finance' ],
    faucets: [],
    nativeCurrency: { name: 'CloudTx', symbol: 'CLD', decimals: 18 },
    infoURL: 'https://cloudtx.finance',
    shortName: 'CLDTX',
    chainId: 31223,
    networkId: 31223,
    explorers: [
      {
        name: 'cloudtxscan',
        url: 'https://scan.cloudtx.finance',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CloudTx Testnet',
    chain: 'CloudTx',
    icon: 'cloudtx',
    rpc: [ 'https://testnet-rpc.cloudtx.finance' ],
    faucets: [ 'https://faucet.cloudtx.finance' ],
    nativeCurrency: { name: 'CloudTx', symbol: 'CLD', decimals: 18 },
    infoURL: 'https://cloudtx.finance/',
    shortName: 'CLD',
    chainId: 31224,
    networkId: 31224,
    slip44: 1,
    explorers: [
      {
        name: 'cloudtxexplorer',
        url: 'https://explorer.cloudtx.finance',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'GoChain Testnet',
    chain: 'GO',
    rpc: [ 'https://testnet-rpc.gochain.io' ],
    faucets: [],
    nativeCurrency: { name: 'GoChain Coin', symbol: 'GO', decimals: 18 },
    infoURL: 'https://gochain.io',
    shortName: 'got',
    chainId: 31337,
    networkId: 31337,
    slip44: 1,
    explorers: [
      {
        name: 'GoChain Testnet Explorer',
        url: 'https://testnet-explorer.gochain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Evoke Testnet',
    chain: 'Evoke',
    icon: 'mthn',
    rpc: [ 'https://testnet-rpc.evokescan.org' ],
    faucets: [ 'https://faucet.evokescan.org' ],
    nativeCurrency: { name: 'MTHN Testnet', symbol: 'MTHN', decimals: 18 },
    infoURL: 'https://testnet-explorer.evokescan.org',
    shortName: 'tmthn',
    chainId: 31414,
    networkId: 31414,
    explorers: [
      {
        name: 'Evoke SmartChain Testnet Explorer',
        url: 'https://testnet-explorer.evokescan.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Filecoin - Wallaby testnet',
    status: 'deprecated',
    chain: 'FIL',
    icon: 'filecoin',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'testnet filecoin', symbol: 'tFIL', decimals: 18 },
    infoURL: 'https://filecoin.io',
    shortName: 'filecoin-wallaby',
    chainId: 31415,
    networkId: 31415,
    slip44: 1,
    explorers: []
  },
  {
    name: 'W3Gamez Holesky Testnet',
    chain: 'ETH',
    rpc: [ 'https://rpc-holesky.w3gamez.network' ],
    faucets: [],
    nativeCurrency: { name: 'W3Gamez Testnet Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://web3games.com/',
    shortName: 'w3gamez',
    chainId: 32001,
    networkId: 32001,
    slip44: 1,
    icon: 'w3gamez',
    explorers: [
      {
        name: 'W3Gamez Holesky Explorer',
        url: 'https://w3gamez-holesky.web3games.com',
        icon: 'web3games',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bitgert Mainnet',
    chain: 'Brise',
    rpc: [
      'https://rpc.icecreamswap.com',
      'https://mainnet-rpc.brisescan.com',
      'https://chainrpc.com',
      'https://serverrpc.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Bitrise Token', symbol: 'Brise', decimals: 18 },
    infoURL: 'https://bitgert.com/',
    shortName: 'Brise',
    chainId: 32520,
    networkId: 32520,
    icon: 'brise',
    explorers: [
      {
        name: 'Brise Scan',
        url: 'https://brisescan.com',
        icon: 'brise',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Fusion Mainnet',
    chain: 'FSN',
    icon: 'fusion',
    rpc: [
      'https://mainnet.fusionnetwork.io',
      'wss://mainnet.fusionnetwork.io'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Fusion', symbol: 'FSN', decimals: 18 },
    infoURL: 'https://fusion.org',
    shortName: 'fsn',
    chainId: 32659,
    networkId: 32659,
    slip44: 288,
    explorers: [
      {
        name: 'fsnscan',
        url: 'https://fsnscan.com',
        icon: 'fsnscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Zilliqa EVM',
    chain: 'ZIL',
    rpc: [ 'https://api.zilliqa.com' ],
    faucets: [],
    nativeCurrency: { name: 'Zilliqa', symbol: 'ZIL', decimals: 18 },
    infoURL: 'https://www.zilliqa.com/',
    shortName: 'zil',
    chainId: 32769,
    networkId: 32769,
    icon: 'zilliqa',
    explorers: [
      {
        name: 'Zilliqa EVM Explorer',
        url: 'https://evmx.zilliqa.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Zilliqa EVM Isolated Server',
    chain: 'ZIL',
    rpc: [ 'https://zilliqa-isolated-server.zilliqa.com/' ],
    faucets: [ 'https://dev-wallet.zilliqa.com/faucet?network=isolated_server' ],
    nativeCurrency: { name: 'Zilliqa', symbol: 'ZIL', decimals: 18 },
    infoURL: 'https://www.zilliqa.com/',
    shortName: 'zil-isolated-server',
    chainId: 32990,
    networkId: 32990,
    icon: 'zilliqa',
    explorers: [
      {
        name: 'Zilliqa EVM Isolated Server Explorer',
        url: 'https://devex.zilliqa.com/?network=https://zilliqa-isolated-server.zilliqa.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Zilliqa EVM Testnet',
    chain: 'ZIL',
    rpc: [ 'https://dev-api.zilliqa.com' ],
    faucets: [ 'https://dev-wallet.zilliqa.com/faucet?network=testnet' ],
    nativeCurrency: { name: 'Zilliqa', symbol: 'ZIL', decimals: 18 },
    infoURL: 'https://www.zilliqa.com/',
    shortName: 'zil-testnet',
    chainId: 33101,
    networkId: 33101,
    slip44: 1,
    explorers: [
      {
        name: 'Zilliqa EVM Explorer',
        url: 'https://evmx.zilliqa.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Cloudverse Subnet',
    chain: 'CLOUDVERSE',
    rpc: [ 'https://subnets.avax.network/cloudverse/mainnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'XCLOUD', symbol: 'XCLOUD', decimals: 18 },
    infoURL: 'https://muadao.build/',
    shortName: 'cloudverse',
    chainId: 33210,
    networkId: 33210,
    explorers: [
      {
        name: 'CLOUDVERSE Explorer',
        url: 'https://subnets.avax.network/cloudverse',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Aves Mainnet',
    chain: 'AVS',
    rpc: [ 'https://rpc.avescoin.io' ],
    faucets: [],
    nativeCurrency: { name: 'Aves', symbol: 'AVS', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://avescoin.io',
    shortName: 'avs',
    chainId: 33333,
    networkId: 33333,
    icon: 'aves',
    explorers: [
      {
        name: 'avescan',
        url: 'https://avescan.io',
        icon: 'avescan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Zilliqa EVM Devnet',
    chain: 'ZIL',
    rpc: [ 'https://api.devnet.zilliqa.com/' ],
    faucets: [ 'https://faucet.devnet.zilliqa.com/' ],
    nativeCurrency: { name: 'Zilliqa', symbol: 'ZIL', decimals: 18 },
    infoURL: 'https://www.zilliqa.com/',
    shortName: 'zil-devnet',
    chainId: 33385,
    networkId: 33385,
    icon: 'zilliqa',
    explorers: [
      {
        name: 'Zilliqa EVM Devnet Explorer',
        url: 'https://otterscan.devnet.zilliqa.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Zilliqa-2 EVM Devnet',
    chain: 'ZIL',
    rpc: [ 'https://api.zq2-devnet.zilliqa.com' ],
    faucets: [ 'https://faucet.zq2-devnet.zilliqa.com' ],
    nativeCurrency: { name: 'Zilliqa', symbol: 'ZIL', decimals: 18 },
    infoURL: 'https://www.zilliqa.com/',
    shortName: 'zq2-devnet',
    chainId: 33469,
    networkId: 33469,
    icon: 'zilliqa',
    explorers: [
      {
        name: 'Zilliqa-2 EVM Devnet Explorer',
        url: 'https://explorer.zq2-devnet.zilliqa.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Mode',
    chain: 'ETH',
    rpc: [
      'https://mainnet.mode.network',
      'https://mode.drpc.org',
      'wss://mode.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://docs.mode.network/',
    shortName: 'mode',
    chainId: 34443,
    networkId: 34443,
    icon: 'mode',
    explorers: [
      {
        name: 'modescout',
        url: 'https://explorer.mode.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'J2O Taro',
    chain: 'TARO',
    rpc: [ 'https://rpc.j2o.io' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'TARO Coin', symbol: 'taro', decimals: 18 },
    infoURL: 'https://j2o.io',
    shortName: 'j2o',
    chainId: 35011,
    networkId: 35011,
    explorers: [
      {
        name: 'J2O Taro Explorer',
        url: 'https://exp.j2o.io',
        icon: 'j2otaro',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Q Mainnet',
    chain: 'Q',
    rpc: [ 'https://rpc.q.org' ],
    faucets: [],
    nativeCurrency: { name: 'QGOV', symbol: 'QGOV', decimals: 18 },
    infoURL: 'https://q.org',
    shortName: 'q',
    chainId: 35441,
    networkId: 35441,
    icon: 'q',
    explorers: [
      {
        name: 'Q explorer',
        url: 'https://explorer.q.org',
        icon: 'q',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Q Testnet',
    chain: 'Q',
    rpc: [ 'https://rpc.qtestnet.org' ],
    faucets: [],
    nativeCurrency: { name: 'Q token', symbol: 'Q', decimals: 18 },
    infoURL: 'https://q.org/',
    shortName: 'q-testnet',
    chainId: 35443,
    networkId: 35443,
    slip44: 1,
    icon: 'q',
    explorers: [
      {
        name: 'Q explorer',
        url: 'https://explorer.qtestnet.org',
        icon: 'q',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ConnectorManager',
    chain: 'Rangers',
    icon: 'rangers',
    rpc: [ 'https://cm.rangersprotocol.com/api/jsonrpc' ],
    faucets: [],
    nativeCurrency: { name: 'Rangers Protocol Gas', symbol: 'cmRPG', decimals: 18 },
    infoURL: 'https://rangersprotocol.com',
    shortName: 'cmrpg',
    chainId: 38400,
    networkId: 38400,
    explorers: [
      {
        name: 'rangersscan',
        url: 'https://scan.rangersprotocol.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ConnectorManager Robin',
    chain: 'Rangers',
    icon: 'rangers',
    rpc: [ 'https://robin-cm.rangersprotocol.com/api/jsonrpc' ],
    faucets: [ 'https://robin-faucet.rangersprotocol.com' ],
    nativeCurrency: { name: 'Rangers Protocol Gas', symbol: 'ttRPG', decimals: 18 },
    infoURL: 'https://rangersprotocol.com',
    shortName: 'ttrpg',
    chainId: 38401,
    networkId: 38401,
    explorers: [
      {
        name: 'rangersscan-robin',
        url: 'https://robin-rangersscan.rangersprotocol.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Energi Mainnet',
    chain: 'NRG',
    rpc: [ 'https://nodeapi.energi.network' ],
    faucets: [],
    nativeCurrency: { name: 'Energi', symbol: 'NRG', decimals: 18 },
    infoURL: 'https://www.energi.world/',
    shortName: 'nrg',
    chainId: 39797,
    networkId: 39797,
    slip44: 39797
  },
  {
    name: 'OHO Mainnet',
    chain: 'OHO',
    rpc: [ 'https://mainnet.oho.ai' ],
    faucets: [],
    nativeCurrency: { name: 'OHO', symbol: 'OHO', decimals: 18 },
    infoURL: 'https://oho.ai',
    shortName: 'oho',
    chainId: 39815,
    networkId: 39815,
    icon: 'oho',
    explorers: [
      {
        name: 'ohoscan',
        url: 'https://ohoscan.com',
        icon: 'ohoscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Opulent-X BETA',
    chainId: 41500,
    shortName: 'ox-beta',
    chain: 'Opulent-X',
    networkId: 41500,
    nativeCurrency: { name: 'Oxyn Gas', symbol: 'OXYN', decimals: 18 },
    rpc: [ 'https://connect.opulent-x.com' ],
    faucets: [],
    infoURL: 'https://beta.opulent-x.com',
    explorers: [
      {
        name: 'Opulent-X BETA Explorer',
        url: 'https://explorer.opulent-x.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'pegglecoin',
    chain: '42069',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'pegglecoin', symbol: 'peggle', decimals: 18 },
    infoURL: 'https://teampeggle.com',
    shortName: 'PC',
    chainId: 42069,
    networkId: 42069
  },
  {
    name: 'Arbitrum One',
    chainId: 42161,
    shortName: 'arb1',
    chain: 'ETH',
    networkId: 42161,
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpc: [
      'https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}',
      'https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}',
      'https://arb1.arbitrum.io/rpc',
      'https://arbitrum-one.publicnode.com',
      'wss://arbitrum-one.publicnode.com'
    ],
    faucets: [],
    explorers: [
      {
        name: 'Arbiscan',
        url: 'https://arbiscan.io',
        standard: 'EIP3091'
      },
      {
        name: 'Arbitrum Explorer',
        url: 'https://explorer.arbitrum.io',
        standard: 'EIP3091'
      },
      {
        name: 'dexguru',
        url: 'https://arbitrum.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://arbitrum.io',
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.arbitrum.io' } ]
    }
  },
  {
    name: 'Arbitrum Nova',
    chainId: 42170,
    shortName: 'arb-nova',
    chain: 'ETH',
    networkId: 42170,
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpc: [
      'https://nova.arbitrum.io/rpc',
      'https://arbitrum-nova.publicnode.com',
      'wss://arbitrum-nova.publicnode.com'
    ],
    faucets: [],
    explorers: [
      {
        name: 'Arbitrum Nova Chain Explorer',
        url: 'https://nova-explorer.arbitrum.io',
        icon: 'blockscout',
        standard: 'EIP3091'
      },
      {
        name: 'dexguru',
        url: 'https://nova.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://arbitrum.io',
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.arbitrum.io' } ]
    }
  },
  {
    name: 'Celo Mainnet',
    chainId: 42220,
    shortName: 'celo',
    chain: 'CELO',
    networkId: 42220,
    nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
    rpc: [ 'https://forno.celo.org', 'wss://forno.celo.org/ws' ],
    faucets: [],
    infoURL: 'https://docs.celo.org/',
    explorers: [
      {
        name: 'Celoscan',
        url: 'https://celoscan.io',
        standard: 'EIP3091'
      },
      {
        name: 'blockscout',
        url: 'https://explorer.celo.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Oasis Emerald Testnet',
    chain: 'Emerald',
    icon: 'oasis',
    rpc: [
      'https://testnet.emerald.oasis.io/',
      'wss://testnet.emerald.oasis.io/ws'
    ],
    faucets: [ 'https://faucet.testnet.oasis.io/' ],
    nativeCurrency: { name: 'Emerald Rose', symbol: 'ROSE', decimals: 18 },
    infoURL: 'https://docs.oasis.io/dapp/emerald',
    shortName: 'emerald-testnet',
    chainId: 42261,
    networkId: 42261,
    slip44: 1,
    explorers: [
      {
        name: 'Oasis Emerald Testnet Explorer',
        url: 'https://explorer.oasis.io/testnet/emerald',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Oasis Emerald',
    chain: 'Emerald',
    icon: 'oasis',
    rpc: [ 'https://emerald.oasis.io', 'wss://emerald.oasis.io/ws' ],
    faucets: [],
    nativeCurrency: { name: 'Emerald Rose', symbol: 'ROSE', decimals: 18 },
    infoURL: 'https://docs.oasis.io/dapp/emerald',
    shortName: 'emerald',
    chainId: 42262,
    networkId: 42262,
    explorers: [
      {
        name: 'Oasis Emerald Explorer',
        url: 'https://explorer.oasis.io/mainnet/emerald',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'GoldXChain Mainnet',
    chain: 'GoldX',
    rpc: [ 'https://mainnet-rpc.goldxchain.io' ],
    faucets: [],
    nativeCurrency: { name: 'GoldX', symbol: 'GOLDX', decimals: 18 },
    infoURL: 'https://goldxchain.io',
    shortName: 'goldx',
    chainId: 42355,
    networkId: 42355,
    explorers: [
      {
        name: 'GoldXChain Explorer',
        url: 'https://explorer.goldxchain.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ZKFair Mainnet',
    title: 'ZKFair Mainnet',
    chain: 'ZKFair',
    rpc: [ 'https://rpc.zkfair.io' ],
    faucets: [],
    nativeCurrency: { name: 'USDC Token', symbol: 'USDC', decimals: 18 },
    infoURL: 'https://zkfair.io',
    shortName: 'ZKFair-Mainnet',
    chainId: 42766,
    networkId: 42766,
    icon: 'zkfair',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://scan.zkfair.io',
        icon: 'zkfair',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://wallet.zkfair.io' } ]
    }
  },
  {
    name: 'Gesoten Verse Testnet',
    chain: 'Gesoten Verse',
    rpc: [ 'https://rpc.testnet.verse.gesoten.com/' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://gesoten.com/',
    shortName: 'GST',
    icon: 'gesoten',
    chainId: 42801,
    networkId: 42801,
    slip44: 1,
    explorers: [
      {
        name: 'Gesoten Verse Testnet Explorer',
        url: 'https://explorer.testnet.verse.gesoten.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Kinto Testnet',
    title: 'Kinto Testnet',
    chain: 'ETH',
    rpc: [ 'http://35.215.120.180:8545' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://ethereum.org',
    shortName: 'keth',
    chainId: 42888,
    networkId: 42888,
    slip44: 1,
    explorers: [
      {
        name: 'kintoscan',
        url: 'http://35.215.120.180:4000',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Athereum',
    chain: 'ATH',
    rpc: [ 'https://ava.network:21015/ext/evm/rpc' ],
    faucets: [ 'http://athfaucet.ava.network//?address=${ADDRESS}' ],
    nativeCurrency: { name: 'Athereum Ether', symbol: 'ATH', decimals: 18 },
    infoURL: 'https://athereum.ava.network',
    shortName: 'avaeth',
    chainId: 43110,
    networkId: 43110
  },
  {
    name: 'Hemi Network',
    chain: 'ETH',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://hemi.xyz',
    shortName: 'hemi',
    chainId: 43111,
    networkId: 43111,
    explorers: [],
    parent: { type: 'L2', chain: 'eip155-1' },
    status: 'incubating'
  },
  {
    name: 'Avalanche Fuji Testnet',
    chain: 'AVAX',
    icon: 'avax',
    rpc: [
      'https://api.avax-test.network/ext/bc/C/rpc',
      'https://avalanche-fuji-c-chain-rpc.publicnode.com',
      'wss://avalanche-fuji-c-chain-rpc.publicnode.com'
    ],
    faucets: [ 'https://faucet.avax-test.network/' ],
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    infoURL: 'https://cchain.explorer.avax-test.network',
    shortName: 'Fuji',
    chainId: 43113,
    networkId: 1,
    slip44: 1,
    explorers: [
      {
        name: 'snowtrace',
        url: 'https://testnet.snowtrace.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Avalanche C-Chain',
    chain: 'AVAX',
    icon: 'avax',
    rpc: [
      'https://api.avax.network/ext/bc/C/rpc',
      'https://avalanche-c-chain-rpc.publicnode.com',
      'wss://avalanche-c-chain-rpc.publicnode.com'
    ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    infoURL: 'https://www.avax.network/',
    shortName: 'avax',
    chainId: 43114,
    networkId: 43114,
    slip44: 9005,
    explorers: [
      {
        name: 'snowtrace',
        url: 'https://snowtrace.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Boba Avax',
    chain: 'Boba Avax',
    status: 'deprecated',
    rpc: [
      'https://avax.boba.network',
      'wss://wss.avax.boba.network',
      'https://replica.avax.boba.network',
      'wss://replica-wss.avax.boba.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Boba Token', symbol: 'BOBA', decimals: 18 },
    infoURL: 'https://docs.boba.network/for-developers/network-avalanche',
    shortName: 'bobaavax',
    chainId: 43288,
    networkId: 43288,
    explorers: [
      {
        name: 'Boba Avax Explorer',
        url: 'https://blockexplorer.avax.boba.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ZKFair Testnet',
    chain: 'ETH',
    rpc: [ 'https://testnet-rpc.zkfair.io' ],
    faucets: [],
    nativeCurrency: { name: 'USDC Token', symbol: 'USDC', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://zkfair.io',
    shortName: 'ZKFair-Testnet',
    chainId: 43851,
    networkId: 43851,
    slip44: 1,
    icon: 'zkfair',
    explorers: [
      {
        name: 'ZKFair Testnet Info',
        url: 'https://testnet-scan.zkfair.io',
        icon: 'zkfair',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Frenchain',
    chain: 'fren',
    rpc: [ 'https://rpc-02.frenscan.io' ],
    faucets: [],
    nativeCurrency: { name: 'FREN', symbol: 'FREN', decimals: 18 },
    infoURL: 'https://frenchain.app',
    shortName: 'FREN',
    chainId: 44444,
    networkId: 44444,
    icon: 'fren',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://frenscan.io',
        icon: 'fren',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Quantum Network',
    chain: 'Quantum',
    rpc: [ 'https://rpcqtm.avescoin.io' ],
    faucets: [],
    nativeCurrency: { name: 'Quantum', symbol: 'QTM', decimals: 18 },
    infoURL: 'https://avescoin.io/',
    shortName: 'QTM',
    chainId: 44445,
    networkId: 44445,
    icon: 'quantum',
    explorers: [
      {
        name: 'Quantum Explorer',
        url: 'https://qtm.avescoin.io',
        icon: 'quantum',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Celo Alfajores Testnet',
    chainId: 44787,
    shortName: 'ALFA',
    chain: 'CELO',
    networkId: 44787,
    slip44: 1,
    nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
    rpc: [
      'https://alfajores-forno.celo-testnet.org',
      'wss://alfajores-forno.celo-testnet.org/ws'
    ],
    faucets: [
      'https://celo.org/developers/faucet',
      'https://cauldron.pretoriaresearchlab.io/alfajores-faucet'
    ],
    infoURL: 'https://docs.celo.org/',
    explorers: [
      {
        name: 'Alfajoresscan',
        url: 'https://alfajores.celoscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Autobahn Network',
    chain: 'TXL',
    rpc: [ 'https://rpc.autobahn.network' ],
    faucets: [],
    nativeCurrency: { name: 'TXL', symbol: 'TXL', decimals: 18 },
    infoURL: 'https://autobahn.network',
    shortName: 'AutobahnNetwork',
    chainId: 45000,
    networkId: 45000,
    icon: 'autobahn',
    explorers: [
      {
        name: 'autobahn explorer',
        url: 'https://explorer.autobahn.network',
        icon: 'autobahn',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Swamps L2',
    chain: 'SWP',
    icon: 'swamps',
    rpc: [ 'https://swamps.tc.l2aas.com' ],
    faucets: [],
    nativeCurrency: { name: 'SWP', symbol: 'SWP', decimals: 18 },
    infoURL: 'https://www.swamps.fi',
    shortName: 'SWP',
    chainId: 45454,
    networkId: 45454,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://swamps-explorer.tc.l2aas.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Deelance Mainnet',
    title: 'Deelance Network Mainnet',
    chain: 'DEE',
    rpc: [ 'https://rpc.deelance.com' ],
    faucets: [ 'https://faucet.deelance.com' ],
    nativeCurrency: { name: 'Deelance', symbol: 'DEE', decimals: 18 },
    infoURL: 'https://deelance.com',
    shortName: 'dee',
    chainId: 45510,
    networkId: 45510,
    icon: 'deelance',
    explorers: [
      {
        name: 'Deelance Mainnet Explorer',
        url: 'https://deescan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Fusion Testnet',
    chain: 'FSN',
    icon: 'fusion',
    rpc: [
      'https://testnet.fusionnetwork.io',
      'wss://testnet.fusionnetwork.io'
    ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Testnet Fusion', symbol: 'T-FSN', decimals: 18 },
    infoURL: 'https://fusion.org',
    shortName: 'tfsn',
    chainId: 46688,
    networkId: 46688,
    slip44: 1,
    explorers: [
      {
        name: 'fsnscan',
        url: 'https://testnet.fsnscan.com',
        icon: 'fsnscan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'REI Network',
    chain: 'REI',
    rpc: [ 'https://rpc.rei.network', 'wss://rpc.rei.network' ],
    faucets: [],
    nativeCurrency: { name: 'REI', symbol: 'REI', decimals: 18 },
    infoURL: 'https://rei.network/',
    shortName: 'REI',
    chainId: 47805,
    networkId: 47805,
    explorers: [
      {
        name: 'rei-scan',
        url: 'https://scan.rei.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Wireshape Floripa Testnet',
    title: 'Wireshape Floripa Testnet',
    chain: 'Wireshape',
    icon: 'wireshape',
    rpc: [
      'https://rpc-floripa.wireshape.org',
      'https://wireshape-floripa-testnet.rpc.thirdweb.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'WIRE', symbol: 'WIRE', decimals: 18 },
    infoURL: 'https://wireshape.org',
    shortName: 'floripa',
    chainId: 49049,
    networkId: 49049,
    slip44: 1,
    explorers: [
      {
        name: 'Wire Explorer',
        url: 'https://floripa-explorer.wireshape.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bifrost Testnet',
    title: 'Bifrost Network Testnet',
    chain: 'BFC',
    rpc: [
      'https://public-01.testnet.bifrostnetwork.com/rpc',
      'https://public-02.testnet.bifrostnetwork.com/rpc'
    ],
    faucets: [],
    nativeCurrency: { name: 'Bifrost', symbol: 'BFC', decimals: 18 },
    infoURL: 'https://bifrostnetwork.com',
    shortName: 'tbfc',
    chainId: 49088,
    networkId: 49088,
    slip44: 1,
    icon: 'bifrost',
    explorers: [
      {
        name: 'explorer-thebifrost',
        url: 'https://explorer.testnet.bifrostnetwork.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'GUNZ Testnet',
    chain: 'tGUN',
    rpc: [
      'https://rpc.gunz.dev/ext/bc/ryk9vkvNuKtewME2PeCgybo9sdWXGmCkBrrx4VPuZPdVdAak8/rpc'
    ],
    faucets: [],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    nativeCurrency: { name: 'GUN', symbol: 'GUN', decimals: 18 },
    icon: 'guntestnet',
    infoURL: 'https://gunbygunz.com',
    shortName: 'Stork',
    chainId: 49321,
    networkId: 49321,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet.gunzscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Energi Testnet',
    chain: 'NRG',
    rpc: [ 'https://nodeapi.test.energi.network' ],
    faucets: [],
    nativeCurrency: { name: 'Energi', symbol: 'NRG', decimals: 18 },
    infoURL: 'https://www.energi.world/',
    shortName: 'tnrg',
    chainId: 49797,
    networkId: 49797,
    slip44: 1
  },
  {
    name: 'Liveplex OracleEVM',
    chain: 'Liveplex OracleEVM Network',
    rpc: [ 'https://rpc.oracle.liveplex.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: '',
    shortName: 'LOE',
    chainId: 50001,
    networkId: 50001,
    explorers: []
  },
  {
    name: 'Yooldo Verse Mainnet',
    chain: 'Yooldo Verse',
    icon: 'yooldo_verse',
    rpc: [ 'https://rpc.yooldo-verse.xyz/' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://yooldo.gg/',
    shortName: 'YVM',
    chainId: 50005,
    networkId: 50005,
    explorers: [
      {
        name: 'Yooldo Verse Explorer',
        url: 'https://explorer.yooldo-verse.xyz',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-248' }
  },
  {
    name: 'Yooldo Verse Testnet',
    chain: 'Yooldo Verse',
    icon: 'yooldo_verse',
    rpc: [ 'https://rpc.testnet.yooldo-verse.xyz/' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://yooldo.gg/',
    shortName: 'YVT',
    chainId: 50006,
    networkId: 50006,
    slip44: 1,
    explorers: [
      {
        name: 'Yooldo Verse Explorer',
        url: 'https://explorer.testnet.yooldo-verse.xyz',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-248' }
  },
  {
    name: 'GTON Testnet',
    chain: 'GTON Testnet',
    rpc: [ 'https://testnet.gton.network/' ],
    faucets: [],
    nativeCurrency: { name: 'GCD', symbol: 'GCD', decimals: 18 },
    infoURL: 'https://gton.capital',
    shortName: 'tgton',
    chainId: 50021,
    networkId: 50021,
    slip44: 1,
    explorers: [
      {
        name: 'GTON Testnet Network Explorer',
        url: 'https://explorer.testnet.gton.network',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-3' }
  },
  {
    name: 'Lumoz Testnet Alpha',
    chain: 'ETH',
    rpc: [
      'https://alpha-us-http-geth.lumoz.org',
      'https://alpha-hk-http-geth.lumoz.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Lumoz Test Token', symbol: 'MOZ', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://lumoz.org',
    shortName: 'Lumoz-Testnet',
    chainId: 51178,
    networkId: 51178,
    slip44: 1,
    icon: 'opside-new',
    explorers: [
      {
        name: 'LumozTestnetInfo',
        url: 'https://lumoz.info',
        icon: 'opside-new',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Sardis Mainnet',
    chain: 'SRDX',
    icon: 'sardis',
    rpc: [ 'https://mainnet-rpc.sardisnetwork.com' ],
    faucets: [ 'https://faucet.sardisnetwork.com' ],
    nativeCurrency: { name: 'Sardis', symbol: 'SRDX', decimals: 18 },
    infoURL: 'https://mysardis.com',
    shortName: 'SRDXm',
    chainId: 51712,
    networkId: 51712,
    explorers: [
      {
        name: 'Sardis',
        url: 'https://contract-mainnet.sardisnetwork.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Electroneum Mainnet',
    chain: 'Electroneum',
    rpc: [ 'https://rpc.electroneum.com' ],
    faucets: [],
    nativeCurrency: { name: 'Electroneum', symbol: 'ETN', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://electroneum.com',
    shortName: 'etn-mainnet',
    chainId: 52014,
    networkId: 52014,
    icon: 'electroneum',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockexplorer.electroneum.com',
        icon: 'electroneum',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DOID',
    chain: 'DOID',
    rpc: [ 'https://rpc.doid.tech' ],
    faucets: [],
    nativeCurrency: { name: 'DOID', symbol: 'DOID', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://doid.tech',
    shortName: 'DOID',
    chainId: 53277,
    networkId: 53277,
    icon: 'doid',
    explorers: [
      {
        name: 'DOID Scan',
        url: 'https://scan.doid.tech',
        icon: 'doid',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DFK Chain',
    chain: 'DFK',
    icon: 'dfk',
    rpc: [ 'https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Jewel', symbol: 'JEWEL', decimals: 18 },
    infoURL: 'https://defikingdoms.com',
    shortName: 'DFK',
    chainId: 53935,
    networkId: 53935,
    explorers: [
      {
        name: 'ethernal',
        url: 'https://explorer.dfkchain.com',
        icon: 'ethereum',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Haqq Chain Testnet',
    chain: 'TestEdge2',
    rpc: [ 'https://rpc.eth.testedge2.haqq.network' ],
    faucets: [ 'https://testedge2.haqq.network' ],
    nativeCurrency: { name: 'Islamic Coin', symbol: 'ISLMT', decimals: 18 },
    infoURL: 'https://islamiccoin.net',
    shortName: 'ISLMT',
    chainId: 54211,
    networkId: 54211,
    slip44: 1,
    explorers: [
      {
        name: 'TestEdge HAQQ Explorer',
        url: 'https://explorer.testedge2.haqq.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Toronet Testnet',
    chain: 'Toronet',
    icon: 'toronet',
    rpc: [ 'http://testnet.toronet.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Toro', symbol: 'TORO', decimals: 18 },
    infoURL: 'https://toronet.org',
    shortName: 'ToronetTestnet',
    chainId: 54321,
    networkId: 54321,
    slip44: 1,
    ens: { registry: '0x059C474f26D65B0458F9da10A649a7322aB02C09' },
    explorers: [
      {
        name: 'toronet_explorer',
        url: 'https://testnet.toronet.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Photon Testnet',
    chain: 'Photon',
    rpc: [ 'https://rpc-test.photonchain.io' ],
    faucets: [ 'https://photonchain.io/airdrop' ],
    nativeCurrency: { name: 'Photon', symbol: 'PTON', decimals: 18 },
    infoURL: 'https://photonchain.io',
    shortName: 'pton',
    chainId: 54555,
    networkId: 54555,
    explorers: [
      {
        name: 'photon_testnet_explorer',
        url: 'https://testnet.photonchain.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Titan',
    chain: 'ETH',
    rpc: [
      'https://rpc.titan.tokamak.network',
      'wss://rpc.titan.tokamak.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://tokamak.network',
    shortName: 'teth',
    chainId: 55004,
    networkId: 55004,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.titan.tokamak.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'REI Chain Mainnet',
    chain: 'REI',
    icon: 'reichain',
    rpc: [ 'https://rei-rpc.moonrhythm.io' ],
    faucets: [ 'http://kururu.finance/faucet?chainId=55555' ],
    nativeCurrency: { name: 'Rei', symbol: 'REI', decimals: 18 },
    infoURL: 'https://reichain.io',
    shortName: 'reichain',
    chainId: 55555,
    networkId: 55555,
    explorers: [
      {
        name: 'reiscan',
        url: 'https://reiscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'REI Chain Testnet',
    chain: 'REI',
    icon: 'reichain',
    rpc: [ 'https://rei-testnet-rpc.moonrhythm.io' ],
    faucets: [ 'http://kururu.finance/faucet?chainId=55556' ],
    nativeCurrency: { name: 'tRei', symbol: 'tREI', decimals: 18 },
    infoURL: 'https://reichain.io',
    shortName: 'trei',
    chainId: 55556,
    networkId: 55556,
    slip44: 1,
    explorers: [
      {
        name: 'reiscan',
        url: 'https://testnet.reiscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Boba BNB Mainnet',
    chain: 'Boba BNB Mainnet',
    rpc: [
      'https://bnb.boba.network',
      'https://boba-bnb.gateway.tenderly.co/',
      'https://gateway.tenderly.co/public/boba-bnb',
      'https://replica.bnb.boba.network',
      'wss://boba-bnb.gateway.tenderly.co/',
      'wss://gateway.tenderly.co/public/boba-bnb'
    ],
    faucets: [],
    nativeCurrency: { name: 'Boba Token', symbol: 'BOBA', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'BobaBnb',
    chainId: 56288,
    networkId: 56288,
    explorers: [
      {
        name: 'Boba BNB block explorer',
        url: 'https://bobascan.com',
        standard: 'none'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-5',
      bridges: [ { url: 'https://gateway.boba.network' } ]
    }
  },
  {
    name: 'VELO Labs Mainnet',
    chain: 'NOVA chain',
    rpc: [ 'https://nova.velo.org' ],
    faucets: [ 'https://nova-faucet.velo.org' ],
    nativeCurrency: { name: 'Nova', symbol: 'NOVA', decimals: 18 },
    infoURL: 'https://velo.org',
    shortName: 'VELO',
    chainId: 56789,
    networkId: 56789,
    icon: 'novachain',
    explorers: [
      {
        name: 'novascan',
        url: 'https://novascan.velo.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DOID Testnet',
    chain: 'DOID',
    rpc: [ 'https://rpc.testnet.doid.tech' ],
    faucets: [],
    nativeCurrency: { name: 'DOID', symbol: 'DOID', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://doid.tech',
    shortName: 'doidTestnet',
    chainId: 56797,
    networkId: 56797,
    icon: 'doid',
    explorers: [
      {
        name: 'DOID Testnet Scan',
        url: 'https://scan.testnet.doid.tech',
        icon: 'doid',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Rollux Testnet',
    chain: 'SYS',
    rpc: [
      'https://rpc-tanenbaum.rollux.com',
      'https://rpc.ankr.com/rollux_testnet/${ANKR_API_KEY}',
      'wss://rpc-tanenbaum.rollux.com/wss',
      'https://rollux.rpc.tanenbaum.io',
      'wss://rollux.rpc.tanenbaum.io/wss'
    ],
    faucets: [ 'https://rollux.id/faucetapp' ],
    nativeCurrency: { name: 'Testnet Syscoin', symbol: 'TSYS', decimals: 18 },
    infoURL: 'https://rollux.com',
    shortName: 'tsys-rollux',
    chainId: 57000,
    networkId: 57000,
    slip44: 1,
    explorers: [
      {
        name: 'Rollux Testnet Explorer',
        url: 'https://rollux.tanenbaum.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Sepolia PGN (Public Goods Network)',
    chain: 'ETH',
    rpc: [ 'https://sepolia.publicgoods.network' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://publicgoods.network/',
    shortName: 'sepPGN',
    chainId: 58008,
    networkId: 58008,
    icon: 'publicGoodsNetwork',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.sepolia.publicgoods.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [ { url: 'https://pgn-bridge.vercel.app/bridge' } ]
    }
  },
  {
    name: 'Linea Goerli',
    title: 'Linea Goerli Testnet',
    chain: 'ETH',
    rpc: [
      'https://rpc.goerli.linea.build',
      'wss://rpc.goerli.linea.build',
      'https://linea-goerli.infura.io/v3/${INFURA_API_KEY}',
      'wss://linea-goerli.infura.io/ws/v3/${INFURA_API_KEY}'
    ],
    faucets: [ 'https://faucetlink.to/goerli' ],
    nativeCurrency: { name: 'Linea Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://linea.build',
    shortName: 'linea-goerli',
    chainId: 59140,
    networkId: 59140,
    slip44: 1,
    icon: 'linea',
    parent: {
      type: 'L2',
      chain: 'eip155-5',
      bridges: [
        {
          url: 'https://goerli.hop.exchange/#/send?token=ETH&sourceNetwork=ethereum&destNetwork=linea'
        }
      ]
    },
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://goerli.lineascan.build',
        standard: 'EIP3091',
        icon: 'linea'
      },
      {
        name: 'Blockscout',
        url: 'https://explorer.goerli.linea.build',
        standard: 'EIP3091',
        icon: 'linea'
      }
    ],
    status: 'active'
  },
  {
    name: 'Linea Sepolia',
    title: 'Linea Sepolia Testnet',
    chain: 'ETH',
    rpc: [
      'https://rpc.sepolia.linea.build',
      'wss://rpc.sepolia.linea.build',
      'https://linea-sepolia.infura.io/v3/${INFURA_API_KEY}',
      'wss://linea-sepolia.infura.io/ws/v3/${INFURA_API_KEY}'
    ],
    faucets: [],
    nativeCurrency: { name: 'Linea Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://linea.build',
    shortName: 'linea-sepolia',
    chainId: 59141,
    networkId: 59141,
    slip44: 1,
    icon: 'linea',
    parent: {
      type: 'L2',
      chain: 'eip155-5',
      bridges: [ { url: 'https://bridge.linea.build/' } ]
    },
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://sepolia.lineascan.build',
        standard: 'EIP3091',
        icon: 'linea'
      },
      {
        name: 'Blockscout',
        url: 'https://explorer.sepolia.linea.build',
        standard: 'EIP3091',
        icon: 'linea'
      }
    ],
    status: 'active'
  },
  {
    name: 'Linea',
    title: 'Linea Mainnet',
    chain: 'ETH',
    rpc: [
      'https://rpc.linea.build',
      'wss://rpc.linea.build',
      'https://linea-mainnet.infura.io/v3/${INFURA_API_KEY}',
      'wss://linea-mainnet.infura.io/ws/v3/${INFURA_API_KEY}'
    ],
    faucets: [],
    nativeCurrency: { name: 'Linea Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://linea.build',
    shortName: 'linea',
    chainId: 59144,
    networkId: 59144,
    icon: 'linea',
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://bridge.linea.build' } ]
    },
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://lineascan.build',
        standard: 'EIP3091',
        icon: 'linea'
      },
      {
        name: 'Blockscout',
        url: 'https://explorer.linea.build',
        standard: 'EIP3091',
        icon: 'linea'
      },
      {
        name: 'L2scan',
        url: 'https://linea.l2scan.co',
        standard: 'EIP3091',
        icon: 'linea'
      }
    ],
    status: 'active'
  },
  {
    name: 'Genesys Code Mainnet',
    chain: 'GCODE',
    rpc: [ 'https://mainnet.genesyscode.io/' ],
    faucets: [],
    nativeCurrency: { name: 'GenesysCode', symbol: 'GCODE', decimals: 18 },
    infoURL: 'https://genesyscode.io',
    shortName: 'gcode',
    chainId: 59971,
    networkId: 59971,
    icon: 'genesyscode',
    explorers: [
      {
        name: 'Genesys Scan',
        url: 'https://genesysscan.io',
        icon: 'genesyscode',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Thinkium Testnet Chain 0',
    chain: 'Thinkium',
    rpc: [ 'https://test.thinkiumrpc.net/' ],
    faucets: [ 'https://www.thinkiumdev.net/faucet' ],
    nativeCurrency: { name: 'TKM', symbol: 'TKM', decimals: 18 },
    infoURL: 'https://thinkium.net/',
    shortName: 'TKM-test0',
    chainId: 60000,
    networkId: 60000,
    slip44: 1,
    explorers: [
      {
        name: 'thinkiumscan',
        url: 'https://test0.thinkiumscan.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Thinkium Testnet Chain 1',
    chain: 'Thinkium',
    rpc: [ 'https://test1.thinkiumrpc.net/' ],
    faucets: [ 'https://www.thinkiumdev.net/faucet' ],
    nativeCurrency: { name: 'TKM', symbol: 'TKM', decimals: 18 },
    infoURL: 'https://thinkium.net/',
    shortName: 'TKM-test1',
    chainId: 60001,
    networkId: 60001,
    slip44: 1,
    explorers: [
      {
        name: 'thinkiumscan',
        url: 'https://test1.thinkiumscan.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Thinkium Testnet Chain 2',
    chain: 'Thinkium',
    rpc: [ 'https://test2.thinkiumrpc.net/' ],
    faucets: [ 'https://www.thinkiumdev.net/faucet' ],
    nativeCurrency: { name: 'TKM', symbol: 'TKM', decimals: 18 },
    infoURL: 'https://thinkium.net/',
    shortName: 'TKM-test2',
    chainId: 60002,
    networkId: 60002,
    slip44: 1,
    explorers: [
      {
        name: 'thinkiumscan',
        url: 'https://test2.thinkiumscan.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Thinkium Testnet Chain 103',
    chain: 'Thinkium',
    rpc: [ 'https://test103.thinkiumrpc.net/' ],
    faucets: [ 'https://www.thinkiumdev.net/faucet' ],
    nativeCurrency: { name: 'TKM', symbol: 'TKM', decimals: 18 },
    infoURL: 'https://thinkium.net/',
    shortName: 'TKM-test103',
    chainId: 60103,
    networkId: 60103,
    slip44: 1,
    explorers: [
      {
        name: 'thinkiumscan',
        url: 'https://test103.thinkiumscan.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BOB',
    chain: 'ETH',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://gobob.xyz',
    shortName: 'bob',
    chainId: 60808,
    networkId: 60808,
    status: 'incubating'
  },
  {
    name: 'KaiChain',
    chain: 'KaiChain',
    rpc: [ 'https://mainnet-rpc.kaichain.net' ],
    faucets: [],
    nativeCurrency: { name: 'KaiChain Native Token', symbol: 'KEC', decimals: 18 },
    infoURL: 'https://kaichain.net',
    shortName: 'kec',
    chainId: 61406,
    networkId: 61406,
    explorers: [
      {
        name: 'KaiChain Explorer',
        url: 'https://explorer.kaichain.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'AxelChain Dev-Net',
    chain: 'AXEL',
    rpc: [ 'https://aium-rpc-dev.viacube.com' ],
    faucets: [],
    nativeCurrency: { name: 'Axelium', symbol: 'AIUM', decimals: 18 },
    infoURL: 'https://www.axel.org',
    shortName: 'aium-dev',
    chainId: 61800,
    networkId: 61800,
    icon: 'axelium',
    explorers: [
      {
        name: 'AxelChain Dev-Net Explorer',
        url: 'https://devexplorer2.viacube.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Etica Mainnet',
    chain: 'Etica Protocol (ETI/EGAZ)',
    icon: 'etica',
    rpc: [
      'https://eticamainnet.eticascan.org',
      'https://eticamainnet.eticaprotocol.org'
    ],
    faucets: [ 'http://faucet.etica-stats.org/' ],
    nativeCurrency: { name: 'EGAZ', symbol: 'EGAZ', decimals: 18 },
    infoURL: 'https://eticaprotocol.org',
    shortName: 'Etica',
    chainId: 61803,
    networkId: 61803,
    explorers: [
      {
        name: 'eticascan',
        url: 'https://eticascan.org',
        standard: 'EIP3091'
      },
      {
        name: 'eticastats',
        url: 'http://explorer.etica-stats.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DoKEN Super Chain Mainnet',
    chain: 'DoKEN Super Chain',
    rpc: [
      'https://sgrpc.doken.dev',
      'https://nyrpc.doken.dev',
      'https://ukrpc.doken.dev'
    ],
    faucets: [],
    nativeCurrency: { name: 'DoKEN', symbol: 'DKN', decimals: 18 },
    infoURL: 'https://doken.dev/',
    shortName: 'DoKEN',
    chainId: 61916,
    networkId: 61916,
    icon: 'doken',
    explorers: [
      {
        name: 'DSC Scan',
        url: 'https://explore.doken.dev',
        icon: 'doken',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'OPTOPIA Testnet',
    chain: 'ETH',
    rpc: [ 'https://rpc-testnet.optopia.ai' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    features: [ { name: 'EIP1559' } ],
    infoURL: 'https://optopia.ai',
    shortName: 'OPTOPIA-Testnet',
    chainId: 62049,
    networkId: 62049,
    icon: 'optopia',
    explorers: [
      {
        name: 'optopia-testnet-scan',
        url: 'https://scan-testnet.optopia.ai',
        icon: 'optopia',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [ { url: 'https://bridge-testnet.optopia.ai' } ]
    }
  },
  {
    name: 'Optopia Mainnet',
    status: 'incubating',
    chain: 'ETH',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    features: [ { name: 'EIP1559' } ],
    infoURL: 'https://optopia.ai',
    shortName: 'Optopia',
    chainId: 62050,
    networkId: 62050,
    icon: 'optopia',
    explorers: [],
    parent: { type: 'L2', chain: 'eip155-1' }
  },
  {
    name: 'Celo Baklava Testnet',
    chainId: 62320,
    shortName: 'BKLV',
    chain: 'CELO',
    networkId: 62320,
    slip44: 1,
    nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
    rpc: [ 'https://baklava-forno.celo-testnet.org' ],
    faucets: [
      'https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform',
      'https://cauldron.pretoriaresearchlab.io/baklava-faucet'
    ],
    infoURL: 'https://docs.celo.org/'
  },
  {
    name: 'MultiVAC Mainnet',
    chain: 'MultiVAC',
    icon: 'multivac',
    rpc: [ 'https://rpc.mtv.ac', 'https://rpc-eu.mtv.ac' ],
    faucets: [],
    nativeCurrency: { name: 'MultiVAC', symbol: 'MTV', decimals: 18 },
    infoURL: 'https://mtv.ac',
    shortName: 'mtv',
    chainId: 62621,
    networkId: 62621,
    explorers: [
      {
        name: 'MultiVAC Explorer',
        url: 'https://e.mtv.ac',
        standard: 'none'
      }
    ]
  },
  {
    name: 'eCredits Mainnet',
    chain: 'ECS',
    rpc: [ 'https://rpc.ecredits.com' ],
    faucets: [],
    nativeCurrency: { name: 'eCredits', symbol: 'ECS', decimals: 18 },
    infoURL: 'https://ecredits.com',
    shortName: 'ecs',
    chainId: 63000,
    networkId: 63000,
    icon: 'ecredits',
    explorers: [
      {
        name: 'eCredits MainNet Explorer',
        url: 'https://explorer.ecredits.com',
        icon: 'ecredits',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'eCredits Testnet',
    chain: 'ECS',
    rpc: [ 'https://rpc.tst.ecredits.com' ],
    faucets: [ 'https://faucet.tst.ecredits.com' ],
    nativeCurrency: { name: 'eCredits', symbol: 'ECS', decimals: 18 },
    infoURL: 'https://ecredits.com',
    shortName: 'ecs-testnet',
    chainId: 63001,
    networkId: 63001,
    slip44: 1,
    icon: 'ecredits',
    explorers: [
      {
        name: 'eCredits TestNet Explorer',
        url: 'https://explorer.tst.ecredits.com',
        icon: 'ecredits',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Scolcoin Mainnet',
    chain: 'SCOLWEI',
    rpc: [ 'https://mainnet-rpc.scolcoin.com' ],
    faucets: [],
    nativeCurrency: { name: 'Scolcoin', symbol: 'SCOL', decimals: 18 },
    infoURL: 'https://scolcoin.com',
    shortName: 'SRC',
    chainId: 65450,
    networkId: 65450,
    icon: 'scolcoin',
    explorers: [
      {
        name: 'Scolscan Explorer',
        url: 'https://explorer.scolcoin.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Janus Testnet',
    chain: 'JanusNetwork',
    icon: 'janusnetwork',
    rpc: [ 'https://rpc.test.janusnetwork.io' ],
    faucets: [],
    nativeCurrency: { name: 'Janus', symbol: 'JNS', decimals: 18 },
    infoURL: 'https://janus-network.gitbook.io/janus',
    shortName: 'janusnetwork-testnet',
    chainId: 66988,
    networkId: 66988,
    slip44: 1,
    status: 'active',
    explorers: [
      {
        name: 'JanusNetwork Testnet Explorer',
        url: 'https://beta.scan.janusnetwork.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'SiriusNet',
    chain: 'SIN',
    status: 'deprecated',
    rpc: [
      'https://u0tnafcv6j:o2T045sxuCNXL878RDQLp5__Zj-es2cvdjtgkl4etn0@u0v7kwtvtg-u0wj114sve-rpc.us0-aws.kaleido.io/'
    ],
    faucets: [],
    nativeCurrency: { name: 'MCD', symbol: 'MCD', decimals: 18 },
    infoURL: 'https://macaucasinolisboa.xyz',
    shortName: 'mcl',
    chainId: 67390,
    networkId: 67390,
    explorers: [
      {
        name: 'siriusnetscan',
        url: 'https://siriusnet.tryethernal.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Cosmic Chain',
    chain: 'COSMIC',
    rpc: [ 'http://testnet.cosmicchain.site:3344' ],
    faucets: [],
    nativeCurrency: { name: 'Cosmic Chain', symbol: 'COSMIC', decimals: 18 },
    infoURL: 'https://cosmicchain.site',
    shortName: 'Cosmic',
    chainId: 67588,
    networkId: 3344
  },
  {
    name: 'DM2 Verse Mainnet',
    chain: 'DM2 Verse',
    icon: 'dm2verse',
    rpc: [ 'https://rpc.dm2verse.dmm.com' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://seamoon.dmm.com',
    shortName: 'dm2',
    chainId: 68770,
    networkId: 68770,
    explorers: [
      {
        name: 'DM2Verse Explorer',
        url: 'https://explorer.dm2verse.dmm.com',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-248' }
  },
  {
    name: 'Condrieu',
    title: 'Ethereum Verkle Testnet Condrieu',
    chain: 'ETH',
    rpc: [ 'https://rpc.condrieu.ethdevops.io:8545' ],
    faucets: [ 'https://faucet.condrieu.ethdevops.io' ],
    nativeCurrency: { name: 'Condrieu Testnet Ether', symbol: 'CTE', decimals: 18 },
    infoURL: 'https://condrieu.ethdevops.io',
    shortName: 'cndr',
    chainId: 69420,
    networkId: 69420,
    slip44: 1,
    explorers: [
      {
        name: 'Condrieu explorer',
        url: 'https://explorer.condrieu.ethdevops.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Thinkium Mainnet Chain 0',
    chain: 'Thinkium',
    rpc: [ 'https://proxy.thinkiumrpc.net/' ],
    faucets: [],
    nativeCurrency: { name: 'TKM', symbol: 'TKM', decimals: 18 },
    infoURL: 'https://thinkium.net/',
    shortName: 'TKM0',
    chainId: 70000,
    networkId: 70000,
    explorers: [
      {
        name: 'thinkiumscan',
        url: 'https://chain0.thinkiumscan.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Thinkium Mainnet Chain 1',
    chain: 'Thinkium',
    rpc: [ 'https://proxy1.thinkiumrpc.net/' ],
    faucets: [],
    nativeCurrency: { name: 'TKM', symbol: 'TKM', decimals: 18 },
    infoURL: 'https://thinkium.net/',
    shortName: 'TKM1',
    chainId: 70001,
    networkId: 70001,
    explorers: [
      {
        name: 'thinkiumscan',
        url: 'https://chain1.thinkiumscan.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Thinkium Mainnet Chain 2',
    chain: 'Thinkium',
    rpc: [ 'https://proxy2.thinkiumrpc.net/' ],
    faucets: [],
    nativeCurrency: { name: 'TKM', symbol: 'TKM', decimals: 18 },
    infoURL: 'https://thinkium.net/',
    shortName: 'TKM2',
    chainId: 70002,
    networkId: 70002,
    explorers: [
      {
        name: 'thinkiumscan',
        url: 'https://chain2.thinkiumscan.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Thinkium Mainnet Chain 103',
    chain: 'Thinkium',
    rpc: [ 'https://proxy103.thinkiumrpc.net/' ],
    faucets: [],
    nativeCurrency: { name: 'TKM', symbol: 'TKM', decimals: 18 },
    infoURL: 'https://thinkium.net/',
    shortName: 'TKM103',
    chainId: 70103,
    networkId: 70103,
    explorers: [
      {
        name: 'thinkiumscan',
        url: 'https://chain103.thinkiumscan.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Proof of Play - Apex',
    chainId: 70700,
    shortName: 'pop-apex',
    chain: 'ETH',
    networkId: 70700,
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpc: [ 'https://rpc.apex.proofofplay.com' ],
    faucets: [],
    explorers: [
      {
        name: 'Proof of Play Apex Explorer',
        url: 'https://explorer.apex.proofofplay.com',
        icon: 'pop-apex',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://proofofplay.com',
    icon: 'pop-apex',
    parent: {
      type: 'L2',
      chain: 'eip155-42161',
      bridges: [
        { url: 'https://bridge.arbitrum.io' },
        { url: 'https://relay.link/bridge/apex/' }
      ]
    }
  },
  {
    name: 'GuapcoinX',
    chain: 'GuapcoinX',
    rpc: [
      'https://rpc-mainnet.guapcoinx.com/',
      'https://rpc-mainnet-1.guapcoinx.com/',
      'https://rpc-mainnet-2.guapcoinx.com/'
    ],
    faucets: [],
    nativeCurrency: { name: 'GuapcoinX', symbol: 'GuapX', decimals: 18 },
    infoURL: 'https://guapcoin.org/',
    shortName: 'GuapX',
    chainId: 71111,
    networkId: 71111,
    icon: 'guapcoinx',
    explorers: [
      {
        name: 'GuapcoinX Explorer',
        url: 'http://explorer.guapcoinx.com',
        standard: 'none',
        icon: 'guapcoinx'
      }
    ]
  },
  {
    name: 'Polyjuice Testnet',
    chain: 'CKB',
    icon: 'polyjuice',
    rpc: [
      'https://godwoken-testnet-web3-rpc.ckbapp.dev',
      'ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws'
    ],
    faucets: [ 'https://faucet.nervos.org/' ],
    nativeCurrency: { name: 'CKB', symbol: 'CKB', decimals: 8 },
    infoURL: 'https://github.com/nervosnetwork/godwoken',
    shortName: 'ckb',
    chainId: 71393,
    networkId: 1,
    slip44: 1
  },
  {
    name: 'Godwoken Testnet v1',
    chain: 'GWT',
    rpc: [
      'https://godwoken-testnet-v1.ckbapp.dev',
      'https://v1.testnet.godwoken.io/rpc'
    ],
    faucets: [ 'https://testnet.bridge.godwoken.io' ],
    nativeCurrency: { name: 'pCKB', symbol: 'pCKB', decimals: 18 },
    infoURL: 'https://www.nervos.org',
    shortName: 'gw-testnet-v1',
    chainId: 71401,
    networkId: 71401,
    slip44: 1,
    explorers: [
      {
        name: 'GWScan Block Explorer',
        url: 'https://v1.testnet.gwscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Godwoken Mainnet',
    chain: 'GWT',
    rpc: [ 'https://v1.mainnet.godwoken.io/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'pCKB', symbol: 'pCKB', decimals: 18 },
    infoURL: 'https://www.nervos.org',
    shortName: 'gw-mainnet-v1',
    chainId: 71402,
    networkId: 71402,
    explorers: [
      {
        name: 'GWScan Block Explorer',
        url: 'https://v1.gwscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'CAGA crypto Ankara testnet',
    chain: 'Ankara',
    rpc: [
      'https://www.ankara-cagacrypto.com',
      'wss://wss.ankara-cagacrypto.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Caga', symbol: 'CAGA', decimals: 18 },
    infoURL: 'https://www.cagacrypto.com/',
    shortName: 'caga',
    chainId: 72778,
    networkId: 72778,
    icon: 'ankaracaga',
    explorers: [
      {
        name: 'ankara',
        url: 'https://explorer.ankara-cagacrypto.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Grok Chain Mainnet',
    chain: 'Grok',
    icon: 'grokicon',
    rpc: [ 'https://mainnet-rpc.grokchain.dev' ],
    faucets: [],
    nativeCurrency: { name: 'Groc', symbol: 'GROC', decimals: 18 },
    infoURL: 'https://grokchain.dev',
    shortName: 'GrokChain',
    chainId: 72992,
    networkId: 72992,
    explorers: [
      {
        name: 'GrokScan',
        url: 'https://mainnet-explorer.grokchain.dev',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ICB Testnet',
    chain: 'ICBT',
    icon: 'icbnetwork',
    rpc: [
      'https://rpc1-testnet.icbnetwork.info/',
      'https://rpc2-testnet.icbnetwork.info/'
    ],
    faucets: [],
    nativeCurrency: { name: 'ICB Testnet Token', symbol: 'ICBT', decimals: 18 },
    infoURL: 'https://icb.network',
    shortName: 'ICBT',
    chainId: 73114,
    networkId: 73114,
    explorers: [
      {
        name: 'ICB Tesnet Explorer',
        url: 'https://testnet.icbscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ICB Network',
    chain: 'ICB',
    icon: 'icbnetwork',
    rpc: [
      'https://rpc1-mainnet.icbnetwork.info/',
      'https://rpc2-mainnet.icbnetwork.info/'
    ],
    faucets: [],
    nativeCurrency: { name: 'ICB Native Token', symbol: 'ICBX', decimals: 18 },
    infoURL: 'https://icb.network',
    shortName: 'ICBX',
    chainId: 73115,
    networkId: 73115,
    explorers: [
      {
        name: 'ICB Explorer',
        url: 'https://icbscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Energy Web Volta Testnet',
    chain: 'Volta',
    rpc: [
      'https://volta-rpc.energyweb.org',
      'wss://volta-rpc.energyweb.org/ws'
    ],
    faucets: [ 'https://voltafaucet.energyweb.org' ],
    nativeCurrency: { name: 'Volta Token', symbol: 'VT', decimals: 18 },
    infoURL: 'https://energyweb.org',
    shortName: 'vt',
    chainId: 73799,
    networkId: 73799,
    slip44: 1
  },
  {
    name: 'Mixin Virtual Machine',
    chain: 'MVM',
    rpc: [ 'https://geth.mvm.dev' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://mvm.dev',
    shortName: 'mvm',
    chainId: 73927,
    networkId: 73927,
    icon: 'mvm',
    explorers: [
      {
        name: 'mvmscan',
        url: 'https://scan.mvm.dev',
        icon: 'mvm',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ResinCoin Mainnet',
    chain: 'RESIN',
    icon: 'resincoin',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'RESIN', decimals: 18 },
    infoURL: 'https://resincoin.dev',
    shortName: 'resin',
    chainId: 75000,
    networkId: 75000,
    explorers: [
      {
        name: 'ResinScan',
        url: 'https://explorer.resincoin.dev',
        standard: 'none'
      }
    ]
  },
  {
    name: 'BORAchain mainnet',
    chain: 'BORA',
    icon: 'bora',
    rpc: [ 'https://public-node.api.boraportal.com/bora/mainnet' ],
    faucets: [],
    nativeCurrency: { name: 'BGAS', symbol: 'BGAS', decimals: 18 },
    infoURL: 'https://www.boraportal.com',
    shortName: 'BORAchain',
    chainId: 77001,
    networkId: 77001,
    slip44: 8217,
    explorers: [
      {
        name: 'BORAchainscope',
        url: 'https://scope.boraportal.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Foundry Chain Testnet',
    chain: 'tFNC',
    icon: 'fnc',
    rpc: [ 'https://testnet-rpc.foundryscan.org/' ],
    faucets: [ 'https://faucet.foundryscan.org' ],
    nativeCurrency: { name: 'Foundry Chain Testnet', symbol: 'tFNC', decimals: 18 },
    infoURL: 'https://foundrychain.org',
    shortName: 'fnc',
    chainId: 77238,
    networkId: 77238,
    slip44: 1,
    explorers: [
      {
        name: 'Foundry Scan Testnet',
        url: 'https://testnet-explorer.foundryscan.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Vention Smart Chain Mainnet',
    chain: 'VSC',
    icon: 'vention',
    rpc: [ 'https://mainnet-rpc.vention.network' ],
    faucets: [ 'https://faucet.vention.network' ],
    nativeCurrency: { name: 'VNT', symbol: 'VNT', decimals: 18 },
    infoURL: 'https://ventionscan.io',
    shortName: 'vscm',
    chainId: 77612,
    networkId: 77612,
    explorers: [
      {
        name: 'ventionscan',
        url: 'https://ventionscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Toronet Mainnet',
    chain: 'Toronet',
    icon: 'toronet',
    rpc: [ 'http://toronet.org/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Toro', symbol: 'TORO', decimals: 18 },
    infoURL: 'https://toronet.org',
    shortName: 'Toronet',
    chainId: 77777,
    networkId: 77777,
    ens: { registry: '0x1f45a71f4aAD769E27c969c4359E0e250C67165c' },
    explorers: [
      {
        name: 'toronet_explorer',
        url: 'https://toronet.org/explorer',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Firenze test network',
    chain: 'ETH',
    rpc: [ 'https://ethnode.primusmoney.com/firenze' ],
    faucets: [],
    nativeCurrency: { name: 'Firenze Ether', symbol: 'FIN', decimals: 18 },
    infoURL: 'https://primusmoney.com',
    shortName: 'firenze',
    chainId: 78110,
    networkId: 78110,
    slip44: 1
  },
  {
    name: 'Dragonfly Mainnet (Hexapod)',
    chain: 'Dragonfly',
    icon: 'dragonfly',
    rpc: [
      'https://dragonfly-rpc.switch.ch',
      'https://dragonfly-rpc.kore-technologies.ch',
      'https://dragonfly-rpc.phoenix-systems.io',
      'https://dragonfly-rpc.block-spirit.ch'
    ],
    faucets: [],
    nativeCurrency: { name: 'Dragonfly', symbol: 'DFLY', decimals: 18 },
    infoURL: 'https://hexapod.network',
    shortName: 'dfly',
    chainId: 78281,
    networkId: 78281,
    explorers: [
      {
        name: 'Dragonfly Blockscout',
        url: 'https://blockscout.dragonfly.hexapod.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Amplify Subnet',
    chain: 'AMPLIFY',
    rpc: [ 'https://subnets.avax.network/amplify/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'AMP', symbol: 'AMP', decimals: 18 },
    infoURL: 'https://www.avax.network',
    shortName: 'amplify',
    chainId: 78430,
    networkId: 78430,
    slip44: 1,
    explorers: [
      {
        name: 'AMPLIFY Explorer',
        url: 'https://subnets-test.avax.network/amplify',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bulletin Subnet',
    chain: 'BULLETIN',
    rpc: [ 'https://subnets.avax.network/bulletin/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'BLT', symbol: 'BLT', decimals: 18 },
    infoURL: 'https://www.avax.network',
    shortName: 'bulletin',
    chainId: 78431,
    networkId: 78431,
    slip44: 1,
    explorers: [
      {
        name: 'BULLETIN Explorer',
        url: 'https://subnets-test.avax.network/bulletin',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Conduit Subnet',
    chain: 'CONDUIT',
    rpc: [ 'https://subnets.avax.network/conduit/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'CON', symbol: 'CON', decimals: 18 },
    infoURL: 'https://www.avax.network',
    shortName: 'conduit',
    chainId: 78432,
    networkId: 78432,
    slip44: 1,
    explorers: [
      {
        name: 'CONDUIT Explorer',
        url: 'https://subnets-test.avax.network/conduit',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Vanguard',
    title: 'Vanar Testnet Vanguard',
    chain: 'VANAR',
    rpc: [
      'https://rpc-vanguard.vanarchain.com',
      'wss://ws-vanguard.vanarchain.com'
    ],
    faucets: [ 'https://faucet.vanarchain.com' ],
    nativeCurrency: { name: 'Vanguard Vanry', symbol: 'VANRY', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://vanarchain.com',
    shortName: 'vanguard',
    chainId: 78600,
    networkId: 78600,
    icon: 'vanguard',
    explorers: [
      {
        name: 'Vanguard Explorer',
        url: 'https://explorer-vanguard.vanarchain.com',
        icon: 'vanguard',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Gold Smart Chain Testnet',
    chain: 'STAND',
    icon: 'standTestnet',
    rpc: [ 'https://rpc-testnet.goldsmartchain.com' ],
    faucets: [ 'https://faucet.goldsmartchain.com' ],
    nativeCurrency: { name: 'Standard in Gold', symbol: 'STAND', decimals: 18 },
    infoURL: 'https://goldsmartchain.com',
    shortName: 'STANDt',
    chainId: 79879,
    networkId: 79879,
    slip44: 1,
    explorers: [
      {
        name: 'Gold Smart Chain',
        url: 'https://testnet.goldsmartchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Mumbai',
    title: 'Polygon Testnet Mumbai',
    chain: 'Polygon',
    icon: 'polygon',
    rpc: [
      'https://rpc-mumbai.maticvigil.com',
      'https://polygon-mumbai-bor-rpc.publicnode.com',
      'wss://polygon-mumbai-bor-rpc.publicnode.com',
      'https://polygon-mumbai.gateway.tenderly.co',
      'wss://polygon-mumbai.gateway.tenderly.co'
    ],
    faucets: [ 'https://faucet.polygon.technology/' ],
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    infoURL: 'https://polygon.technology/',
    shortName: 'maticmum',
    chainId: 80001,
    networkId: 80001,
    slip44: 1,
    explorers: [
      {
        name: 'polygonscan',
        url: 'https://mumbai.polygonscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Amoy',
    title: 'Polygon Amoy Testnet',
    chain: 'Polygon',
    icon: 'polygon',
    rpc: [
      'https://rpc-amoy.polygon.technology',
      'https://polygon-amoy-bor-rpc.publicnode.com',
      'wss://polygon-amoy-bor-rpc.publicnode.com'
    ],
    faucets: [ 'https://faucet.polygon.technology/' ],
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    infoURL: 'https://polygon.technology/',
    shortName: 'polygonamoy',
    chainId: 80002,
    networkId: 80002,
    slip44: 1,
    explorers: [
      {
        name: 'polygonamoy',
        url: 'https://www.oklink.com/amoy',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Berachain Artio',
    chain: 'Berachain Artio',
    rpc: [
      'https://artio.rpc.berachain.com',
      'https://rpc.ankr.com/berachain_testnet'
    ],
    faucets: [ 'https://artio.faucet.berachain.com' ],
    nativeCurrency: { name: 'BERA Token', symbol: 'BERA', decimals: 18 },
    infoURL: 'https://www.berachain.com',
    shortName: 'berachainArtio',
    chainId: 80085,
    networkId: 80085,
    icon: 'berachain',
    explorers: [
      {
        name: 'Beratrail',
        url: 'https://artio.beratrail.io',
        icon: 'berachain',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Hizoco mainnet',
    chain: 'HZC',
    icon: 'hizoco',
    rpc: [ 'https://hizoco.net/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Hizoco', symbol: 'HZC', decimals: 18 },
    infoURL: 'http://hizoco.net',
    shortName: 'hzc',
    chainId: 80096,
    networkId: 80096,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://hizoco.net:38443',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Nordek Mainnet',
    chain: 'Nordek',
    icon: 'nordek',
    rpc: [ 'https://mainnet-rpc.nordekscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'NRK', symbol: 'NRK', decimals: 18 },
    infoURL: 'https://nordekscan.com',
    shortName: 'nordek',
    chainId: 81041,
    networkId: 81041,
    explorers: [
      {
        name: 'nordek',
        url: 'https://nordekscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Amana Testnet',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Amana Testnet', symbol: 'MEER-T', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'amanatest',
    icon: 'meer',
    chainId: 81341,
    networkId: 81341,
    slip44: 1,
    status: 'incubating'
  },
  {
    name: 'Amana Mixnet',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Amana Mixnet', symbol: 'MEER-M', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'amanamix',
    icon: 'meer',
    chainId: 81342,
    networkId: 81342,
    status: 'incubating'
  },
  {
    name: 'Amana Privnet',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Amana Privnet', symbol: 'MEER-P', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'amanapriv',
    icon: 'meer',
    chainId: 81343,
    networkId: 81343,
    status: 'incubating'
  },
  {
    name: 'Flana Testnet',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Flana Testnet', symbol: 'MEER-T', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'flanatest',
    icon: 'meer',
    chainId: 81351,
    networkId: 81351,
    slip44: 1,
    status: 'incubating'
  },
  {
    name: 'Flana Mixnet',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Flana Mixnet', symbol: 'MEER-M', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'flanamix',
    icon: 'meer',
    chainId: 81352,
    networkId: 81352,
    status: 'incubating'
  },
  {
    name: 'Flana Privnet',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Flana Privnet', symbol: 'MEER-P', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'flanapriv',
    icon: 'meer',
    chainId: 81353,
    networkId: 81353,
    status: 'incubating'
  },
  {
    name: 'Mizana Testnet',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Mizana Testnet', symbol: 'MEER-T', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'mizanatest',
    icon: 'meer',
    chainId: 81361,
    networkId: 81361,
    slip44: 1,
    status: 'incubating'
  },
  {
    name: 'Mizana Mixnet',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Mizana Mixnet', symbol: 'MEER-M', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'mizanamix',
    icon: 'meer',
    chainId: 81362,
    networkId: 81362,
    status: 'incubating'
  },
  {
    name: 'Mizana Privnet',
    chain: 'MEER',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Mizana Privnet', symbol: 'MEER-P', decimals: 18 },
    infoURL: 'https://github.com/Qitmeer',
    shortName: 'mizanapriv',
    icon: 'meer',
    chainId: 81363,
    networkId: 81363,
    status: 'incubating'
  },
  {
    name: 'Blast',
    status: 'active',
    chain: 'ETH',
    rpc: [
      'https://rpc.blast.io',
      'https://rpc.ankr.com/blast',
      'https://blast.din.dev/rpc',
      'https://blastl2-mainnet.public.blastapi.io',
      'https://blast.blockpi.network/v1/rpc/public'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://blast.io/',
    shortName: 'blastmainnet',
    chainId: 81457,
    networkId: 81457,
    icon: 'blast',
    explorers: [
      {
        name: 'Blastscan',
        url: 'https://blastscan.io',
        icon: 'blast',
        standard: 'EIP3091'
      },
      {
        name: 'Blast Explorer',
        url: 'https://blastexplorer.io',
        icon: 'blast',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-1' }
  },
  {
    name: 'Quantum Chain Mainnet',
    chain: 'QNET',
    icon: 'qnet',
    rpc: [ 'https://rpc.quantumscan.org' ],
    faucets: [],
    nativeCurrency: { name: 'Quantum Chain', symbol: 'QNET', decimals: 18 },
    infoURL: 'https://quantumnetwork.gg',
    shortName: 'qnet',
    chainId: 81720,
    networkId: 81720,
    explorers: [
      {
        name: 'Quantum Scan Mainnet',
        url: 'https://quantumscan.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Smart Layer Network Testnet',
    chain: 'SLN',
    rpc: [ 'https://rpc.test.smartlayer.network' ],
    faucets: [],
    nativeCurrency: { name: 'Service Unit Token', symbol: 'SU', decimals: 18 },
    infoURL: 'https://www.smartlayer.network/',
    shortName: 'tSLN',
    chainId: 82459,
    networkId: 82459,
    explorers: [
      {
        name: 'SLN Testnet Explorer',
        url: 'https://explorer.test.smartlayer.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ZEDXION',
    chain: 'ZEDXION',
    rpc: [ 'https://mainnet-rpc.zedscan.net' ],
    faucets: [],
    nativeCurrency: { name: 'Zedxion', symbol: 'zedx', decimals: 9 },
    infoURL: 'https://docs.zedscan.net',
    shortName: 'ZEDX',
    chainId: 83872,
    networkId: 83872,
    explorers: [
      {
        name: 'Zedscan',
        url: 'http://zedscan.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Base Goerli Testnet',
    chain: 'ETH',
    rpc: [
      'https://goerli.base.org',
      'https://base-goerli.gateway.tenderly.co',
      'wss://base-goerli.gateway.tenderly.co',
      'https://base-goerli-rpc.publicnode.com',
      'wss://base-goerli-rpc.publicnode.com'
    ],
    faucets: [ 'https://www.coinbase.com/faucets/base-ethereum-goerli-faucet' ],
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://base.org',
    shortName: 'basegor',
    chainId: 84531,
    networkId: 84531,
    slip44: 1,
    icon: 'baseTestnet',
    explorers: [
      {
        name: 'basescan',
        url: 'https://goerli.basescan.org',
        standard: 'none'
      },
      {
        name: 'basescout',
        url: 'https://base-goerli.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      },
      {
        name: 'dexguru',
        url: 'https://base-goerli.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Base Sepolia Testnet',
    chain: 'ETH',
    rpc: [
      'https://sepolia.base.org',
      'https://base-sepolia-rpc.publicnode.com',
      'wss://base-sepolia-rpc.publicnode.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://base.org',
    shortName: 'basesep',
    chainId: 84532,
    networkId: 84532,
    slip44: 1,
    icon: 'baseTestnet',
    explorers: [
      {
        name: 'basescout',
        url: 'https://base-sepolia.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Aerie Network',
    chain: 'Aerie',
    rpc: [ 'https://mainnet.aerielab.io' ],
    faucets: [],
    nativeCurrency: { name: 'Aerie', symbol: 'AER', decimals: 18 },
    infoURL: 'https://aerielab.io/',
    shortName: 'Aerie',
    chainId: 84886,
    networkId: 84886,
    icon: 'aerie',
    explorers: [
      {
        name: 'Aerie Explorer',
        url: 'https://explorer.aerielab.io',
        icon: 'aerie',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CYBERTRUST',
    chain: 'CYBER',
    rpc: [ 'http://testnet.cybertrust.space:48501' ],
    faucets: [],
    nativeCurrency: { name: 'Cyber Trust', symbol: 'CYBER', decimals: 18 },
    infoURL: 'https://cybertrust.space',
    shortName: 'Cyber',
    chainId: 85449,
    networkId: 48501
  },
  {
    name: 'Nautilus Proteus Testnet',
    chain: 'ETH',
    icon: 'nautilus',
    rpc: [ 'https://api.proteus.nautchain.xyz/solana' ],
    faucets: [ 'https://proteusfaucet.nautchain.xyz' ],
    nativeCurrency: { name: 'Zebec Test Token', symbol: 'tZBC', decimals: 18 },
    infoURL: 'https://docs.nautchain.xyz',
    shortName: 'NAUTTest',
    chainId: 88002,
    networkId: 88002,
    slip44: 1,
    explorers: [
      {
        name: 'Nautscan',
        url: 'https://proteus.nautscan.com',
        standard: 'EIP3091',
        icon: 'nautilus'
      }
    ]
  },
  {
    name: 'Unit Zero Testnet',
    chain: 'Unit Zero',
    rpc: [ 'https://rpc-testnet.unit0.dev' ],
    faucets: [],
    nativeCurrency: { name: 'UNIT0', symbol: 'UNIT0', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://units.network',
    shortName: 'unit0-testnet',
    chainId: 88817,
    networkId: 88817,
    explorers: [
      {
        name: 'explorer-testnet',
        url: 'https://explorer-testnet.unit0.dev',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Unit Zero Stagenet',
    chain: 'Unit Zero',
    rpc: [ 'https://rpc-stagenet.unit0.dev' ],
    faucets: [],
    nativeCurrency: { name: 'UNIT0', symbol: 'UNIT0', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://units.network',
    shortName: 'unit0-stagenet',
    chainId: 88819,
    networkId: 88819,
    explorers: [
      {
        name: 'explorer-stagenet',
        url: 'https://explorer-stagenet.unit0.dev',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Chiliz Scoville Testnet',
    chain: 'CHZ',
    rpc: [ 'https://scoville-rpc.chiliz.com' ],
    faucets: [ 'https://scoville-faucet.chiliz.com' ],
    nativeCurrency: { name: 'Chiliz', symbol: 'CHZ', decimals: 18 },
    icon: 'chiliz',
    infoURL: 'https://www.chiliz.com/en/chain',
    shortName: 'chz',
    chainId: 88880,
    networkId: 88880,
    slip44: 1,
    explorers: [
      {
        name: 'scoville-explorer',
        url: 'https://scoville-explorer.chiliz.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'IVAR Chain Mainnet',
    chain: 'IVAR',
    icon: 'ivar',
    rpc: [ 'https://mainnet-rpc.ivarex.com' ],
    faucets: [ 'https://faucet.ivarex.com/' ],
    nativeCurrency: { name: 'Ivar', symbol: 'IVAR', decimals: 18 },
    infoURL: 'https://ivarex.com',
    shortName: 'ivar',
    chainId: 88888,
    networkId: 88888,
    explorers: [
      {
        name: 'ivarscan',
        url: 'https://ivarscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'F(x)Core Testnet Network',
    chain: 'Fxcore',
    rpc: [ 'https://testnet-fx-json-web3.functionx.io:8545' ],
    faucets: [],
    nativeCurrency: { name: 'Function X', symbol: 'FX', decimals: 18 },
    infoURL: 'https://functionx.io/',
    shortName: 'dhobyghaut',
    chainId: 90001,
    networkId: 90001,
    icon: 'fxcore'
  },
  {
    name: 'Beverly Hills',
    title: 'Ethereum multi-client Verkle Testnet Beverly Hills',
    chain: 'ETH',
    rpc: [ 'https://rpc.beverlyhills.ethdevops.io:8545' ],
    faucets: [ 'https://faucet.beverlyhills.ethdevops.io' ],
    nativeCurrency: {
      name: 'Beverly Hills Testnet Ether',
      symbol: 'BVE',
      decimals: 18
    },
    infoURL: 'https://beverlyhills.ethdevops.io',
    shortName: 'bvhl',
    chainId: 90210,
    networkId: 90210,
    status: 'incubating',
    explorers: [
      {
        name: 'Beverly Hills explorer',
        url: 'https://explorer.beverlyhills.ethdevops.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Nautilus Trition Chain',
    title: 'Nautilus Trition Testnet',
    chain: 'ETH',
    icon: 'nautilus',
    rpc: [ 'https://triton.api.nautchain.xyz' ],
    faucets: [ 'https://faucet.eclipse.builders' ],
    nativeCurrency: {
      name: 'Nautilus Zebec Testnet Tokens',
      symbol: 'tZBC',
      decimals: 18
    },
    infoURL: 'https://docs.nautchain.xyz',
    shortName: 'NAUT',
    chainId: 91002,
    networkId: 91002,
    explorers: [
      {
        name: 'Nautscan',
        url: 'https://triton.nautscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'MetaDAP Enterprise Mainnet',
    title: 'MetaDAP Enterprise Mainnet',
    chain: 'MetaDAP',
    icon: 'metadap',
    faucets: [],
    rpc: [ 'https://rpc.chain.metadap.io', 'wss://rpc-ws.chain.metadap.io' ],
    nativeCurrency: { name: 'DAP', symbol: 'DAP', decimals: 18 },
    infoURL: 'https://metadap.io/',
    shortName: 'MetaDAP',
    chainId: 91120,
    networkId: 91120,
    explorers: [
      {
        name: 'MetaDAP Enterprise Mainnet explorer',
        url: 'https://explorer.chain.metadap.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Combo Testnet',
    chain: 'Combo',
    icon: 'combo',
    rpc: [ 'https://test-rpc.combonetwork.io' ],
    faucets: [],
    nativeCurrency: { name: 'BNB Chain Native Token', symbol: 'tcBNB', decimals: 18 },
    infoURL: 'https://combonetwork.io',
    shortName: 'combo-testnet',
    chainId: 91715,
    networkId: 91715,
    explorers: [
      {
        name: 'combotrace explorer',
        url: 'https://combotrace-testnet.nodereal.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Lambda Testnet',
    chain: 'Lambda',
    rpc: [ 'https://evm.lambda.top/' ],
    faucets: [ 'https://faucet.lambda.top' ],
    nativeCurrency: { name: 'test-Lamb', symbol: 'LAMB', decimals: 18 },
    infoURL: 'https://lambda.im',
    shortName: 'lambda-testnet',
    chainId: 92001,
    networkId: 92001,
    slip44: 1,
    icon: 'lambda',
    explorers: [
      {
        name: 'Lambda EVM Explorer',
        url: 'https://explorer.lambda.top',
        standard: 'EIP3091',
        icon: 'lambda'
      }
    ]
  },
  {
    name: 'LiquidLayer Testnet',
    chain: 'LILA',
    icon: 'lila',
    rpc: [ 'https://testnet.liquidlayer.network' ],
    faucets: [ 'https://claim.liquidlayer.network' ],
    nativeCurrency: { name: 'LiquidLayer Testnet', symbol: 'LILA', decimals: 18 },
    infoURL: 'https://testnet-scan.liquidlayer.network',
    shortName: 'tLILA',
    chainId: 93572,
    networkId: 93572,
    explorers: [
      {
        name: 'LiquidLayer Testnet Explorer',
        url: 'https://testnet-scan.liquidlayer.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Mantis Testnet (Hexapod)',
    chain: 'Mantis',
    icon: 'mantis',
    rpc: [
      'https://mantis-rpc.switch.ch',
      'https://mantis-rpc.kore-technologies.ch',
      'https://mantis-rpc.phoenix-systems.io'
    ],
    faucets: [
      'https://mantis.switch.ch/faucet',
      'https://mantis.kore-technologies.ch/faucet',
      'https://mantis.phoenix-systems.io/faucet',
      'https://mantis.block-spirit.ch/faucet'
    ],
    nativeCurrency: { name: 'Mantis', symbol: 'MANTIS', decimals: 18 },
    infoURL: 'https://hexapod.network',
    shortName: 'mantis',
    chainId: 96970,
    networkId: 96970,
    slip44: 1,
    explorers: [
      {
        name: 'Mantis Blockscout',
        url: 'https://blockscout.mantis.hexapod.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Boba BNB Mainnet Old',
    chain: 'Boba BNB Mainnet',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Boba Token', symbol: 'BOBA', decimals: 18 },
    infoURL: 'https://boba.network',
    shortName: 'BobaBnbOld',
    chainId: 97288,
    networkId: 97288,
    explorers: [
      {
        name: 'Boba BNB block explorer',
        url: 'https://blockexplorer.bnb.boba.network',
        standard: 'none'
      }
    ],
    status: 'deprecated'
  },
  {
    name: 'eLiberty Testnet',
    chain: '$EL',
    icon: 'eLiberty',
    rpc: [ 'https://testnet-rpc.eliberty.ngo' ],
    faucets: [ 'https://faucet.eliberty.ngo' ],
    nativeCurrency: { name: 'eLiberty', symbol: '$EL', decimals: 18 },
    infoURL: 'https://eliberty.ngo',
    shortName: 'ELt',
    chainId: 99099,
    networkId: 99099,
    slip44: 1,
    explorers: [
      {
        name: 'eLiberty Testnet',
        url: 'https://testnet.eliberty.ngo',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'UB Smart Chain(testnet)',
    chain: 'USC',
    rpc: [ 'https://testnet.rpc.uschain.network' ],
    faucets: [],
    nativeCurrency: { name: 'UBC', symbol: 'UBC', decimals: 18 },
    infoURL: 'https://www.ubchain.site',
    shortName: 'usctest',
    chainId: 99998,
    networkId: 99998,
    slip44: 1
  },
  {
    name: 'UB Smart Chain',
    chain: 'USC',
    rpc: [ 'https://rpc.uschain.network' ],
    faucets: [],
    nativeCurrency: { name: 'UBC', symbol: 'UBC', decimals: 18 },
    infoURL: 'https://www.ubchain.site/',
    shortName: 'usc',
    chainId: 99999,
    networkId: 99999
  },
  {
    name: 'QuarkChain Mainnet Root',
    chain: 'QuarkChain',
    rpc: [ 'http://jrpc.mainnet.quarkchain.io:38391' ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-r',
    chainId: 100000,
    networkId: 100000
  },
  {
    name: 'QuarkChain Mainnet Shard 0',
    chain: 'QuarkChain',
    rpc: [
      'https://mainnet-s0-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39000'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-s0',
    chainId: 100001,
    networkId: 100001,
    parent: { chain: 'eip155-100000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-mainnet',
        url: 'https://mainnet.quarkchain.io/0',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Mainnet Shard 1',
    chain: 'QuarkChain',
    rpc: [
      'https://mainnet-s1-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39001'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-s1',
    chainId: 100002,
    networkId: 100002,
    parent: { chain: 'eip155-100000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-mainnet',
        url: 'https://mainnet.quarkchain.io/1',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Mainnet Shard 2',
    chain: 'QuarkChain',
    rpc: [
      'https://mainnet-s2-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39002'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-s2',
    chainId: 100003,
    networkId: 100003,
    parent: { chain: 'eip155-100000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-mainnet',
        url: 'https://mainnet.quarkchain.io/2',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Mainnet Shard 3',
    chain: 'QuarkChain',
    rpc: [
      'https://mainnet-s3-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39003'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-s3',
    chainId: 100004,
    networkId: 100004,
    parent: { chain: 'eip155-100000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-mainnet',
        url: 'https://mainnet.quarkchain.io/3',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Mainnet Shard 4',
    chain: 'QuarkChain',
    rpc: [
      'https://mainnet-s4-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39004'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-s4',
    chainId: 100005,
    networkId: 100005,
    parent: { chain: 'eip155-100000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-mainnet',
        url: 'https://mainnet.quarkchain.io/4',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Mainnet Shard 5',
    chain: 'QuarkChain',
    rpc: [
      'https://mainnet-s5-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39005'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-s5',
    chainId: 100006,
    networkId: 100006,
    parent: { chain: 'eip155-100000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-mainnet',
        url: 'https://mainnet.quarkchain.io/5',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Mainnet Shard 6',
    chain: 'QuarkChain',
    rpc: [
      'https://mainnet-s6-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39006'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-s6',
    chainId: 100007,
    networkId: 100007,
    parent: { chain: 'eip155-100000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-mainnet',
        url: 'https://mainnet.quarkchain.io/6',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Mainnet Shard 7',
    chain: 'QuarkChain',
    rpc: [
      'https://mainnet-s7-ethapi.quarkchain.io',
      'http://eth-jrpc.mainnet.quarkchain.io:39007'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-s7',
    chainId: 100008,
    networkId: 100008,
    parent: { chain: 'eip155-100000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-mainnet',
        url: 'https://mainnet.quarkchain.io/7',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'VeChain',
    chain: 'VeChain',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'VeChain', symbol: 'VET', decimals: 18 },
    infoURL: 'https://vechain.org',
    shortName: 'vechain',
    chainId: 100009,
    networkId: 100009,
    explorers: [
      {
        name: 'VeChain Stats',
        url: 'https://vechainstats.com',
        standard: 'none'
      },
      {
        name: 'VeChain Explorer',
        url: 'https://explore.vechain.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'VeChain Testnet',
    chain: 'VeChain',
    rpc: [],
    faucets: [ 'https://faucet.vecha.in' ],
    nativeCurrency: { name: 'VeChain', symbol: 'VET', decimals: 18 },
    infoURL: 'https://vechain.org',
    shortName: 'vechain-testnet',
    chainId: 100010,
    networkId: 100010,
    slip44: 1,
    explorers: [
      {
        name: 'VeChain Explorer',
        url: 'https://explore-testnet.vechain.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Deprecated CHI',
    chain: 'CHI1',
    icon: 'gnosis',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Chiado xDAI', symbol: 'xDAI', decimals: 18 },
    infoURL: 'https://docs.gnosischain.com',
    shortName: 'chi1',
    chainId: 100100,
    networkId: 100100,
    explorers: [],
    status: 'deprecated'
  },
  {
    name: 'Global Trust Network',
    chain: 'GTN',
    icon: 'gtn',
    rpc: [ 'https://gtn.stabilityprotocol.com' ],
    faucets: [],
    nativeCurrency: { name: 'FREE', symbol: 'FREE', decimals: 18 },
    infoURL: 'https://stabilityprotocol.com',
    shortName: 'stabilityprotocol',
    chainId: 101010,
    networkId: 101010,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://stability.blockscout.com',
        standard: 'EIP3091'
      }
    ],
    redFlags: [ 'reusedChainId' ]
  },
  {
    name: 'Creditcoin Testnet',
    chain: 'CTC',
    icon: 'creditcoin',
    rpc: [ 'https://rpc.cc3-testnet.creditcoin.network' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    nativeCurrency: { name: 'Testnet CTC', symbol: 'tCTC', decimals: 18 },
    infoURL: 'https://creditcoin.org',
    shortName: 'ctctest',
    chainId: 102031,
    networkId: 102031,
    faucets: [],
    explorers: [
      {
        name: 'blockscout',
        url: 'https://creditcoin-testnet.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Crystaleum',
    chain: 'crystal',
    rpc: [
      'https://evm.cryptocurrencydevs.org',
      'https://rpc.crystaleum.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'CRFI', symbol: '◈', decimals: 18 },
    infoURL: 'https://crystaleum.org',
    shortName: 'CRFI',
    chainId: 103090,
    networkId: 1,
    icon: 'crystal',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://scan.crystaleum.org',
        icon: 'crystal',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Masa Testnet',
    chain: 'MASA',
    icon: 'masa',
    rpc: [ 'https://subnets.avax.network/masatestne/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Masa Token', symbol: 'MASA', decimals: 18 },
    infoURL: 'https://masa.finance',
    shortName: 'masatest',
    chainId: 103454,
    networkId: 103454,
    explorers: [
      {
        name: 'Masa Testnet Explorer',
        url: 'https://subnets-test.avax.network/masatestnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Stratis Mainnet',
    chain: 'Stratis',
    rpc: [ 'https://rpc.stratisevm.com' ],
    faucets: [],
    nativeCurrency: { name: 'Stratis', symbol: 'STRAX', decimals: 18 },
    infoURL: 'https://www.stratisplatform.com',
    shortName: 'stratis',
    chainId: 105105,
    networkId: 105105,
    icon: 'stratis',
    explorers: [
      {
        name: 'Stratis Explorer',
        url: 'https://explorer.stratisevm.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BROChain Mainnet',
    chain: 'BRO',
    rpc: [
      'https://rpc.brochain.org',
      'http://rpc.brochain.org',
      'https://rpc.brochain.org/mainnet',
      'http://rpc.brochain.org/mainnet'
    ],
    faucets: [],
    nativeCurrency: { name: 'Brother', symbol: 'BRO', decimals: 18 },
    infoURL: 'https://brochain.org',
    shortName: 'bro',
    chainId: 108801,
    networkId: 108801,
    explorers: [
      {
        name: 'BROChain Explorer',
        url: 'https://explorer.brochain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Devnet Root',
    chain: 'QuarkChain',
    rpc: [ 'http://jrpc.devnet.quarkchain.io:38391' ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-d-r',
    chainId: 110000,
    networkId: 110000
  },
  {
    name: 'QuarkChain Devnet Shard 0',
    chain: 'QuarkChain',
    rpc: [
      'https://devnet-s0-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39900'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-d-s0',
    chainId: 110001,
    networkId: 110001,
    parent: { chain: 'eip155-110000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-devnet',
        url: 'https://devnet.quarkchain.io/0',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Devnet Shard 1',
    chain: 'QuarkChain',
    rpc: [
      'https://devnet-s1-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39901'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-d-s1',
    chainId: 110002,
    networkId: 110002,
    parent: { chain: 'eip155-110000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-devnet',
        url: 'https://devnet.quarkchain.io/1',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Devnet Shard 2',
    chain: 'QuarkChain',
    rpc: [
      'https://devnet-s2-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39902'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-d-s2',
    chainId: 110003,
    networkId: 110003,
    parent: { chain: 'eip155-110000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-devnet',
        url: 'https://devnet.quarkchain.io/2',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Devnet Shard 3',
    chain: 'QuarkChain',
    rpc: [
      'https://devnet-s3-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39903'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-d-s3',
    chainId: 110004,
    networkId: 110004,
    parent: { chain: 'eip155-110000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-devnet',
        url: 'https://devnet.quarkchain.io/3',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Devnet Shard 4',
    chain: 'QuarkChain',
    rpc: [
      'https://devnet-s4-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39904'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-d-s4',
    chainId: 110005,
    networkId: 110005,
    parent: { chain: 'eip155-110000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-devnet',
        url: 'https://devnet.quarkchain.io/4',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Devnet Shard 5',
    chain: 'QuarkChain',
    rpc: [
      'https://devnet-s5-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39905'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-d-s5',
    chainId: 110006,
    networkId: 110006,
    parent: { chain: 'eip155-110000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-devnet',
        url: 'https://devnet.quarkchain.io/5',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Devnet Shard 6',
    chain: 'QuarkChain',
    rpc: [
      'https://devnet-s6-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39906'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-d-s6',
    chainId: 110007,
    networkId: 110007,
    parent: { chain: 'eip155-110000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-devnet',
        url: 'https://devnet.quarkchain.io/6',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'QuarkChain Devnet Shard 7',
    chain: 'QuarkChain',
    rpc: [
      'https://devnet-s7-ethapi.quarkchain.io',
      'http://eth-jrpc.devnet.quarkchain.io:39907'
    ],
    faucets: [],
    nativeCurrency: { name: 'QKC', symbol: 'QKC', decimals: 18 },
    infoURL: 'https://www.quarkchain.io',
    shortName: 'qkc-d-s7',
    chainId: 110008,
    networkId: 110008,
    parent: { chain: 'eip155-110000', type: 'shard' },
    explorers: [
      {
        name: 'quarkchain-devnet',
        url: 'https://devnet.quarkchain.io/7',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Siberium Test Network',
    chain: 'SBR',
    rpc: [ 'https://rpc.test.siberium.net' ],
    faucets: [],
    nativeCurrency: { name: 'TestSIBR', symbol: 'SIBR', decimals: 18 },
    infoURL: 'https://siberium.net',
    shortName: 'testsbr',
    chainId: 111000,
    networkId: 111000,
    slip44: 1,
    icon: 'siberium',
    explorers: [
      {
        name: 'Siberium Testnet Explorer - blockscout',
        url: 'https://explorer.test.siberium.net',
        icon: 'siberium',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Siberium Network',
    chain: 'SBR',
    rpc: [
      'https://rpc.main.siberium.net',
      'https://rpc.main.siberium.net.ru'
    ],
    faucets: [],
    nativeCurrency: { name: 'Siberium', symbol: 'SIBR', decimals: 18 },
    infoURL: 'https://siberium.net',
    shortName: 'sbr',
    chainId: 111111,
    networkId: 111111,
    icon: 'siberium',
    explorers: [
      {
        name: 'Siberium Mainnet Explorer - blockscout - 1',
        url: 'https://explorer.main.siberium.net',
        icon: 'siberium',
        standard: 'EIP3091'
      },
      {
        name: 'Siberium Mainnet Explorer - blockscout - 2',
        url: 'https://explorer.main.siberium.net.ru',
        icon: 'siberium',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 're.al',
    title: 're.al Real-World Assets network',
    chain: 're.al',
    rpc: [ 'https://real.drpc.org', 'wss://real.drpc.org' ],
    nativeCurrency: { name: 're.al Ether', symbol: 'reETH', decimals: 18 },
    infoURL: 'https://re.al',
    faucets: [],
    shortName: 're-al',
    chainId: 111188,
    networkId: 111188,
    slip44: 60,
    icon: 'real',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.re.al',
        icon: 'real',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [
        { url: 'https://re.al/bridge' },
        { url: 'https://bridge.gelato.network/bridge/real' }
      ]
    }
  },
  {
    name: 'Metachain One Mainnet',
    chain: 'METAO',
    icon: 'metao',
    rpc: [ 'https://rpc.metachain.one', 'https://rpc2.metachain.one' ],
    faucets: [],
    nativeCurrency: { name: 'Metao', symbol: 'METAO', decimals: 18 },
    infoURL: 'https://metachain.one',
    shortName: 'metao',
    chainId: 112358,
    networkId: 112358,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.metachain.one',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'MetaDAP Enterprise Testnet',
    title: 'MetaDAP Enterprise Testnet',
    chain: 'MetaDAP',
    icon: 'metadap',
    faucets: [],
    rpc: [
      'https://rpc.testnet.chain.metadap.io',
      'wss://rpc-ws.testnet.chain.metadap.io'
    ],
    nativeCurrency: { name: 'DAP', symbol: 'DAP', decimals: 18 },
    infoURL: 'https://metadap.io/',
    shortName: 'MetaDAP-T',
    chainId: 119139,
    networkId: 119139,
    explorers: [
      {
        name: 'MetaDAP Enterprise Testnet explorer',
        url: 'https://explorer.testnet.chain.metadap.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ADIL Devnet',
    chain: 'ADIL',
    icon: 'adil',
    rpc: [ 'https://devnet.adilchain-rpc.io' ],
    faucets: [],
    nativeCurrency: { name: 'Devnet ADIL', symbol: 'ADIL', decimals: 18 },
    infoURL: 'https://adilchain.io',
    shortName: 'dadil',
    chainId: 123456,
    networkId: 123456,
    explorers: [
      {
        name: 'ADIL Devnet Explorer',
        url: 'https://devnet.adilchain-scan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Etherlink Testnet',
    chain: 'Etherlink',
    icon: 'etherlink',
    chainId: 128123,
    networkId: 128123,
    features: [ { name: 'EIP1559' } ],
    infoURL: 'https://etherlink.com',
    shortName: 'etlt',
    nativeCurrency: { name: 'tez', symbol: 'XTZ', decimals: 18 },
    rpc: [ 'https://node.ghostnet.etherlink.com' ],
    faucets: [ 'https://faucet.etherlink.com' ],
    explorers: [
      {
        name: 'Etherlink Testnet Explorer',
        url: 'https://testnet-explorer.etherlink.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Odyssey Chain (Testnet)',
    chain: 'DIONE',
    rpc: [ 'https://testnode.dioneprotocol.com/ext/bc/D/rpc' ],
    faucets: [ 'https://faucet.dioneprotocol.com/' ],
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://www.dioneprotocol.com/',
    shortName: 'DIONE',
    chainId: 131313,
    networkId: 131313,
    icon: 'odyssey',
    nativeCurrency: { name: 'DIONE', symbol: 'DIONE', decimals: 18 }
  },
  {
    name: 'ETND Chain Mainnets',
    chain: 'ETND',
    rpc: [ 'https://rpc.node1.etnd.pro/' ],
    faucets: [],
    nativeCurrency: { name: 'ETND', symbol: 'ETND', decimals: 18 },
    infoURL: 'https://www.etnd.pro',
    shortName: 'ETND',
    chainId: 131419,
    networkId: 131419,
    icon: 'ETND',
    explorers: [
      {
        name: 'etndscan',
        url: 'https://scan.etnd.pro',
        icon: 'ETND',
        standard: 'none'
      }
    ]
  },
  {
    name: 'ICPlaza Mainnet',
    chain: 'ICPlaza',
    icon: 'icplaza',
    rpc: [ 'https://rpcmainnet.ic-plaza.org/' ],
    faucets: [],
    nativeCurrency: { name: 'ict', symbol: 'ict', decimals: 18 },
    infoURL: 'https://docs.ic-plaza.org/',
    shortName: 'ICPlaza',
    chainId: 142857,
    networkId: 142857,
    explorers: [
      {
        name: 'ICPlaza',
        url: 'https://browsemainnet.ic-plaza.org/index',
        standard: 'none'
      }
    ]
  },
  {
    name: 'PlayFi Mainnet',
    chain: 'PLAY',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Play', symbol: 'PLAY', decimals: 18 },
    infoURL: 'https://www.playfi.ai/',
    shortName: 'playfi',
    chainId: 161212,
    networkId: 161212,
    explorers: [],
    status: 'incubating'
  },
  {
    name: 'Taiko (Alpha-2 Testnet)',
    chain: 'ETH',
    status: 'deprecated',
    icon: 'taiko',
    rpc: [ 'https://rpc.a2.taiko.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://taiko.xyz',
    shortName: 'taiko-a2',
    chainId: 167004,
    networkId: 167004,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.a2.taiko.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Taiko Grimsvotn L2',
    chain: 'ETH',
    status: 'deprecated',
    icon: 'taiko',
    rpc: [ 'https://rpc.test.taiko.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://taiko.xyz',
    shortName: 'taiko-l2',
    chainId: 167005,
    networkId: 167005,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.test.taiko.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Taiko Eldfell L3',
    chain: 'ETH',
    status: 'deprecated',
    icon: 'taiko',
    rpc: [ 'https://rpc.l3test.taiko.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://taiko.xyz',
    shortName: 'taiko-l3',
    chainId: 167006,
    networkId: 167006,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.l3test.taiko.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Taiko Jolnir L2',
    chain: 'ETH',
    status: 'deprecated',
    icon: 'taiko',
    rpc: [ 'https://rpc.jolnir.taiko.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://taiko.xyz',
    shortName: 'tko-jolnir',
    chainId: 167007,
    networkId: 167007,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.jolnir.taiko.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Taiko Katla L2',
    chain: 'ETH',
    status: 'active',
    icon: 'taiko',
    rpc: [
      'https://rpc.katla.taiko.xyz',
      'wss://rpc.katla.taiko.xyz',
      'https://taiko-katla.drpc.org',
      'wss://taiko-katla.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://taiko.xyz',
    shortName: 'tko-katla',
    chainId: 167008,
    networkId: 167008,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.katla.taiko.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Taiko Hekla L2',
    chain: 'ETH',
    status: 'active',
    icon: 'taiko',
    rpc: [ 'https://rpc.hekla.taiko.xyz', 'wss://ws.hekla.taiko.xyz' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://taiko.xyz',
    shortName: 'tko-hekla',
    chainId: 167009,
    networkId: 167009,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockscoutapi.hekla.taiko.xyz',
        standard: 'EIP3091'
      },
      {
        name: 'routescan',
        url: 'https://hekla.taikoscan.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bitica Chain Mainnet',
    chain: 'BDCC',
    rpc: [ 'https://mainnet-rpc.biticablockchain.com/' ],
    faucets: [],
    nativeCurrency: { name: 'Bitica Coin', symbol: 'BDCC', decimals: 18 },
    infoURL: 'https://biticablockchain.com/',
    shortName: 'bdcc',
    chainId: 188710,
    networkId: 188710,
    explorers: [
      {
        name: 'Bitica DPOS Blockchain Explorer',
        url: 'https://biticablockchain.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Condor Test Network',
    chain: 'CONDOR',
    icon: 'condor',
    rpc: [ 'https://testnet.condor.systems/rpc' ],
    faucets: [ 'https://faucet.condor.systems' ],
    nativeCurrency: { name: 'Condor Native Token', symbol: 'CONDOR', decimals: 18 },
    infoURL: 'https://condor.systems',
    shortName: 'condor',
    chainId: 188881,
    networkId: 188881,
    slip44: 1,
    explorers: [
      {
        name: 'CondorScan',
        url: 'https://explorer.condor.systems',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Milkomeda C1 Testnet',
    chain: 'milkTAda',
    icon: 'milkomeda',
    rpc: [
      'https://rpc-devnet-cardano-evm.c1.milkomeda.com',
      'wss://rpc-devnet-cardano-evm.c1.milkomeda.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'milkTAda', symbol: 'mTAda', decimals: 18 },
    infoURL: 'https://milkomeda.com',
    shortName: 'milkTAda',
    chainId: 200101,
    networkId: 200101,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Milkomeda A1 Testnet',
    chain: 'milkTAlgo',
    icon: 'milkomeda',
    rpc: [ 'https://rpc-devnet-algorand-rollup.a1.milkomeda.com' ],
    faucets: [],
    nativeCurrency: { name: 'milkTAlgo', symbol: 'mTAlgo', decimals: 18 },
    infoURL: 'https://milkomeda.com',
    shortName: 'milkTAlgo',
    chainId: 200202,
    networkId: 200202,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Akroma',
    chain: 'AKA',
    rpc: [ 'https://remote.akroma.io' ],
    faucets: [],
    nativeCurrency: { name: 'Akroma Ether', symbol: 'AKA', decimals: 18 },
    infoURL: 'https://akroma.io',
    shortName: 'aka',
    chainId: 200625,
    networkId: 200625,
    slip44: 200625
  },
  {
    name: 'Bitlayer Testnet',
    chain: 'Bitlayer',
    rpc: [
      'https://testnet-rpc.bitlayer.org',
      'wss://testnet-ws.bitlayer.org',
      'https://testnet-rpc.bitlayer-rpc.com',
      'wss://testnet-ws.bitlayer-rpc.com',
      'https://rpc.ankr.com/bitlayer_testnet'
    ],
    faucets: [ 'https://www.bitlayer.org/faucet' ],
    nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://docs.bitlayer.org/',
    shortName: 'btrt',
    chainId: 200810,
    networkId: 200810,
    slip44: 1,
    icon: 'bitlayer',
    explorers: [
      {
        name: 'bitlayer testnet scan',
        url: 'https://testnet-scan.bitlayer.org',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Bitlayer Mainnet',
    chain: 'Bitlayer',
    rpc: [
      'https://rpc.bitlayer.org',
      'https://rpc.bitlayer-rpc.com',
      'https://rpc.ankr.com/bitlayer',
      'wss://ws.bitlayer.org',
      'wss://ws.bitlayer-rpc.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'BTC', symbol: 'BTC', decimals: 18 },
    infoURL: 'https://docs.bitlayer.org/',
    shortName: 'btr',
    chainId: 200901,
    networkId: 200901,
    slip44: 1,
    icon: 'bitlayer',
    explorers: [
      {
        name: 'bitlayer mainnet scan',
        url: 'https://www.btrscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Alaya Mainnet',
    chain: 'Alaya',
    rpc: [
      'https://openapi.alaya.network/rpc',
      'wss://openapi.alaya.network/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'ATP', symbol: 'atp', decimals: 18 },
    infoURL: 'https://www.alaya.network/',
    shortName: 'alaya',
    chainId: 201018,
    networkId: 1,
    icon: 'alaya',
    explorers: [
      {
        name: 'alaya explorer',
        url: 'https://scan.alaya.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Alaya Dev Testnet',
    chain: 'Alaya',
    rpc: [
      'https://devnetopenapi.alaya.network/rpc',
      'wss://devnetopenapi.alaya.network/ws'
    ],
    faucets: [
      'https://faucet.alaya.network/faucet/?id=f93426c0887f11eb83b900163e06151c'
    ],
    nativeCurrency: { name: 'ATP', symbol: 'atp', decimals: 18 },
    infoURL: 'https://www.alaya.network/',
    shortName: 'alayadev',
    chainId: 201030,
    networkId: 1,
    slip44: 1,
    icon: 'alaya',
    explorers: [
      {
        name: 'alaya explorer',
        url: 'https://devnetscan.alaya.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Mythical Chain',
    chain: 'MYTH',
    rpc: [ 'https://chain-rpc.mythicalgames.com' ],
    faucets: [],
    nativeCurrency: { name: 'Mythos', symbol: 'MYTH', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://mythicalgames.com/',
    shortName: 'myth',
    chainId: 201804,
    networkId: 201804,
    icon: 'mythical',
    explorers: [
      {
        name: 'Mythical Chain Explorer',
        url: 'https://explorer.mythicalgames.com',
        icon: 'mythical',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Decimal Smart Chain Testnet',
    chain: 'tDSC',
    rpc: [ 'https://testnet-val.decimalchain.com/web3/' ],
    faucets: [],
    nativeCurrency: { name: 'Decimal', symbol: 'tDEL', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://decimalchain.com',
    shortName: 'tDSC',
    chainId: 202020,
    networkId: 202020,
    slip44: 1,
    icon: 'dsc',
    explorers: [
      {
        name: 'DSC Explorer Testnet',
        url: 'https://testnet.explorer.decimalchain.com',
        icon: 'dsc',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'X1 Devnet',
    chain: 'X1',
    rpc: [ 'https://x1-devnet.xen.network' ],
    faucets: [],
    nativeCurrency: { name: 'XN', symbol: 'XN', decimals: 18 },
    infoURL: 'https://docs.xen.network/x1/',
    shortName: 'x1-devnet',
    chainId: 202212,
    networkId: 202212,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer.x1-devnet.xen.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'YMTECH-BESU Testnet',
    chain: 'YMTECH-BESU',
    rpc: [ 'http://39.119.118.216:8545' ],
    faucets: [],
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://www.ymtech.co.kr',
    shortName: 'YMTECH-BESU',
    chainId: 202401,
    networkId: 202401,
    explorers: [
      {
        name: 'YMTECH-BESU Chainlens',
        url: 'http://39.119.118.198',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Jellie',
    title: 'Twala Testnet Jellie',
    shortName: 'twl-jellie',
    chain: 'ETH',
    chainId: 202624,
    networkId: 202624,
    slip44: 1,
    icon: 'twala',
    nativeCurrency: { name: 'Twala Coin', symbol: 'TWL', decimals: 18 },
    rpc: [
      'https://jellie-rpc.twala.io/',
      'wss://jellie-rpc-wss.twala.io/'
    ],
    faucets: [],
    infoURL: 'https://twala.io/',
    explorers: [
      {
        name: 'Jellie Blockchain Explorer',
        url: 'https://jellie.twala.io',
        standard: 'EIP3091',
        icon: 'twala'
      }
    ]
  },
  {
    name: 'X1 Network',
    chain: 'X1',
    rpc: [ 'https://x1-testnet.xen.network' ],
    faucets: [],
    nativeCurrency: { name: 'XN', symbol: 'XN', decimals: 18 },
    infoURL: 'https://docs.xen.network/go-x1/',
    shortName: 'x1-testnet',
    chainId: 204005,
    networkId: 204005,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer.x1-testnet.xen.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Auroria Testnet',
    title: 'Stratis Testnet Auroria',
    chain: 'Auroria',
    rpc: [ 'https://auroria.rpc.stratisevm.com' ],
    faucets: [ 'https://auroria.faucet.stratisevm.com' ],
    nativeCurrency: { name: 'Auroria Stratis', symbol: 'tSTRAX', decimals: 18 },
    infoURL: 'https://www.stratisplatform.com',
    shortName: 'auroria',
    chainId: 205205,
    networkId: 205205,
    icon: 'auroria',
    explorers: [
      {
        name: 'Auroria Testnet Explorer',
        url: 'https://auroria.explorer.stratisevm.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PlatON Mainnet',
    chain: 'PlatON',
    rpc: [
      'https://openapi2.platon.network/rpc',
      'wss://openapi2.platon.network/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'LAT', symbol: 'lat', decimals: 18 },
    infoURL: 'https://www.platon.network',
    shortName: 'platon',
    chainId: 210425,
    networkId: 1,
    icon: 'platon',
    explorers: [
      {
        name: 'PlatON explorer',
        url: 'https://scan.platon.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Mas Mainnet',
    chain: 'MAS',
    rpc: [ 'http://node.masnet.ai:8545' ],
    faucets: [],
    nativeCurrency: { name: 'Master Bank', symbol: 'MAS', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://masterbank.org',
    shortName: 'mas',
    chainId: 220315,
    networkId: 220315,
    icon: 'mas',
    explorers: [
      {
        name: 'explorer masnet',
        url: 'https://explorer.masnet.ai',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Reapchain Mainnet',
    chain: 'REAP',
    rpc: [ 'https://eth.reapchain.org' ],
    faucets: [],
    nativeCurrency: { name: 'Reap', symbol: 'REAP', decimals: 18 },
    features: [],
    infoURL: 'https://reapchain.com',
    shortName: 'reap',
    chainId: 221230,
    networkId: 221230,
    icon: 'reapchain',
    explorers: [
      {
        name: 'Reapchain Dashboard',
        url: 'https://dashboard.reapchain.org',
        icon: 'reapchain',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Reapchain Testnet',
    chain: 'REAP',
    rpc: [ 'https://test-eth.reapchain.org' ],
    faucets: [ 'http://faucet.reapchain.com' ],
    nativeCurrency: { name: 'test-Reap', symbol: 'tREAP', decimals: 18 },
    features: [],
    infoURL: 'https://reapchain.com',
    shortName: 'reap-testnet',
    chainId: 221231,
    networkId: 221231,
    slip44: 1,
    icon: 'reapchain',
    explorers: [
      {
        name: 'Reapchain Testnet Dashboard',
        url: 'https://test-dashboard.reapchain.org',
        icon: 'reapchain',
        standard: 'none'
      }
    ]
  },
  {
    name: 'HydraDX',
    chain: 'HDX',
    rpc: [ 'https://rpc.hydradx.cloud', 'wss://rpc.hydradx.cloud' ],
    faucets: [],
    nativeCurrency: { name: 'Wrapped ETH', symbol: 'WETH', decimals: 18 },
    infoURL: 'https://hydradx.io',
    shortName: 'hdx',
    chainId: 222222,
    networkId: 222222,
    icon: 'hydradx',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.evm.hydration.cloud',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DeepL Mainnet',
    chain: 'DEEPL',
    rpc: [ 'https://rpc.deeplnetwork.org' ],
    faucets: [],
    nativeCurrency: { name: 'DeepL', symbol: 'DEEPL', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://deeplnetwork.org',
    shortName: 'deepl',
    chainId: 222555,
    networkId: 222555,
    icon: 'deepl',
    explorers: [
      {
        name: 'DeepL Mainnet Explorer',
        url: 'https://scan.deeplnetwork.org',
        icon: 'deepl',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DeepL Testnet',
    chain: 'DEEPL',
    rpc: [ 'https://testnet.deeplnetwork.org' ],
    faucets: [ 'https://faucet.deeplnetwork.org' ],
    nativeCurrency: { name: 'DeepL', symbol: 'DEEPL', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://deeplnetwork.org',
    shortName: 'tdeepl',
    chainId: 222666,
    networkId: 222666,
    icon: 'deepl',
    explorers: [
      {
        name: 'DeepL Testnet Explorer',
        url: 'https://testnet-scan.deeplnetwork.org',
        icon: 'deepl',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Taf ECO Chain Mainnet',
    chain: 'Taf ECO Chain',
    icon: 'taf',
    rpc: [ 'https://mainnet.tafchain.com/v1' ],
    faucets: [],
    nativeCurrency: { name: 'Taf ECO Chain Mainnet', symbol: 'TAFECO', decimals: 18 },
    infoURL: 'https://www.tafchain.com',
    shortName: 'TAFECO',
    chainId: 224168,
    networkId: 224168,
    explorers: [
      {
        name: 'Taf ECO Chain Mainnet',
        url: 'https://ecoscan.tafchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CONET Sebolia Testnet',
    chain: 'CONET',
    rpc: [ 'https://rpc1.conet.network' ],
    faucets: [],
    nativeCurrency: { name: 'CONET Sebolia', symbol: 'CONET', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://conet.network',
    shortName: 'conet-sebolia',
    chainId: 224422,
    networkId: 224422,
    slip44: 1,
    icon: 'conet',
    explorers: [
      {
        name: 'CONET Scan',
        url: 'https://scan.conet.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CONET Holesky',
    chain: 'CONET Holesky',
    rpc: [ 'https://holeskyrpc1.conet.network' ],
    faucets: [],
    nativeCurrency: { name: 'CONET Holesky', symbol: 'CONET', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://conet.network',
    shortName: 'conet-holesky',
    chainId: 224433,
    networkId: 224433,
    slip44: 2147708081,
    icon: 'conet',
    explorers: [
      {
        name: 'CONET Holesky Scan',
        url: 'https://scan.conet.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'HashKey Chain Testnet',
    chain: 'HashKey',
    rpc: [ 'https://testnet.hashkeychain/rpc' ],
    faucets: [ 'https://testnet.hashkeychain/faucet' ],
    nativeCurrency: { name: 'HashKey Token', symbol: 'tHSK', decimals: 18 },
    infoURL: 'https://www.hashkey.com',
    shortName: 'hsktest',
    chainId: 230315,
    networkId: 230315,
    slip44: 1,
    icon: 'hsk',
    explorers: [
      {
        name: 'HashKey Chain Testnet Explorer',
        url: 'https://testnet.hashkeyscan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Haymo Testnet',
    chain: 'tHYM',
    rpc: [ 'https://testnet1.haymo.network' ],
    faucets: [],
    nativeCurrency: { name: 'HAYMO', symbol: 'HYM', decimals: 18 },
    infoURL: 'https://haymoswap.web.app/',
    shortName: 'hym',
    chainId: 234666,
    networkId: 234666,
    slip44: 1
  },
  {
    name: 'ARTIS sigma1',
    chain: 'ARTIS',
    rpc: [ 'https://rpc.sigma1.artis.network' ],
    faucets: [],
    nativeCurrency: { name: 'ARTIS sigma1 Ether', symbol: 'ATS', decimals: 18 },
    infoURL: 'https://artis.eco',
    shortName: 'ats',
    chainId: 246529,
    networkId: 246529,
    slip44: 246529
  },
  {
    name: 'ARTIS Testnet tau1',
    chain: 'ARTIS',
    rpc: [ 'https://rpc.tau1.artis.network' ],
    faucets: [],
    nativeCurrency: { name: 'ARTIS tau1 Ether', symbol: 'tATS', decimals: 18 },
    infoURL: 'https://artis.network',
    shortName: 'atstau',
    chainId: 246785,
    networkId: 246785,
    slip44: 1
  },
  {
    name: 'Saakuru Testnet',
    chain: 'Saakuru',
    icon: 'saakuru',
    rpc: [ 'https://rpc-testnet.saakuru.network' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://saakuru.network',
    shortName: 'saakuru-testnet',
    chainId: 247253,
    networkId: 247253,
    slip44: 1,
    explorers: [
      {
        name: 'saakuru-explorer-testnet',
        url: 'https://explorer-testnet.saakuru.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'CMP-Mainnet',
    chain: 'CMP',
    rpc: [
      'https://mainnet.block.caduceus.foundation',
      'wss://mainnet.block.caduceus.foundation'
    ],
    faucets: [],
    nativeCurrency: { name: 'Caduceus Token', symbol: 'CMP', decimals: 18 },
    infoURL: 'https://caduceus.foundation/',
    shortName: 'cmp-mainnet',
    chainId: 256256,
    networkId: 256256,
    explorers: [
      {
        name: 'Mainnet Scan',
        url: 'https://mainnet.scan.caduceus.foundation',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Gear Zero Network Testnet',
    chain: 'GearZero',
    rpc: [ 'https://gzn-test.linksme.info' ],
    faucets: [],
    nativeCurrency: {
      name: 'Gear Zero Network Native Token',
      symbol: 'GZN',
      decimals: 18
    },
    infoURL: 'https://token.gearzero.ca/testnet',
    shortName: 'gz-testnet',
    chainId: 266256,
    networkId: 266256,
    slip44: 1,
    explorers: []
  },
  {
    name: 'EgonCoin Testnet',
    chain: 'EGON',
    icon: 'egonicon',
    rpc: [ 'https://rpctest.egonscan.com' ],
    faucets: [ 'https://faucet.egonscan.com' ],
    nativeCurrency: { name: 'EgonCoin', symbol: 'EGON', decimals: 18 },
    infoURL: 'https://egonscan.com',
    shortName: 'EGONt',
    chainId: 271271,
    networkId: 271271,
    slip44: 1,
    explorers: [
      {
        name: 'EgonCoin Testnet',
        url: 'https://testnet.egonscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Social Smart Chain Mainnet',
    chain: 'SoChain',
    rpc: [ 'https://socialsmartchain.digitalnext.business' ],
    faucets: [],
    nativeCurrency: { name: 'SoChain', symbol: '$OC', decimals: 18 },
    infoURL: 'https://digitalnext.business/SocialSmartChain',
    shortName: 'SoChain',
    chainId: 281121,
    networkId: 281121,
    explorers: []
  },
  {
    name: 'Zillion Sepolia Testnet',
    status: 'active',
    chain: 'ETH',
    rpc: [ 'https://sepolia.zillnet.io/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://zillnet.io',
    shortName: 'zillsep',
    chainId: 282828,
    networkId: 282828,
    slip44: 1,
    icon: 'zillion',
    explorers: [
      {
        name: 'zillscout',
        url: 'https://sepolia.zillnet.io',
        icon: 'zillion',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-11155111' }
  },
  {
    name: 'SaharaAI Testnet',
    chain: 'Sahara',
    rpc: [ 'https://testnet.saharalabs.ai' ],
    faucets: [],
    nativeCurrency: { name: 'SAHARA', symbol: 'SAH', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://saharalabs.ai',
    shortName: 'saharatest',
    chainId: 313313,
    networkId: 313313,
    icon: 'sahara',
    explorers: []
  },
  {
    name: 'Filecoin - Calibration testnet',
    chain: 'FIL',
    icon: 'filecoin',
    rpc: [
      'https://api.calibration.node.glif.io/rpc/v1',
      'https://rpc.ankr.com/filecoin_testnet',
      'https://filecoin-calibration.chainstacklabs.com/rpc/v1',
      'https://filecoin-calibration.chainup.net/rpc/v1',
      'https://calibration.filfox.info/rpc/v1',
      'https://filecoin-calibration.drpc.org',
      'wss://filecoin-calibration.drpc.org'
    ],
    faucets: [ 'https://faucet.calibration.fildev.network/' ],
    nativeCurrency: { name: 'testnet filecoin', symbol: 'tFIL', decimals: 18 },
    infoURL: 'https://filecoin.io',
    shortName: 'filecoin-calibration',
    chainId: 314159,
    networkId: 314159,
    slip44: 1,
    explorers: [
      {
        name: 'Filscan - Calibration',
        url: 'https://calibration.filscan.io',
        standard: 'none'
      },
      {
        name: 'Filscout - Calibration',
        url: 'https://calibration.filscout.com/en',
        standard: 'none'
      },
      {
        name: 'Filfox - Calibration',
        url: 'https://calibration.filfox.info',
        standard: 'none'
      },
      {
        name: 'Glif Explorer - Calibration',
        url: 'https://explorer.glif.io/?network=calibration',
        standard: 'none'
      },
      {
        name: 'Beryx',
        url: 'https://beryx.zondax.ch',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Bloom Genesis Testnet',
    chain: 'Bloom',
    icon: 'bloom',
    rpc: [ 'https://testnet-rpc.bloomgenesis.com' ],
    faucets: [ 'https://faucet.bloomgenesis.com' ],
    nativeCurrency: { name: 'Bloom', symbol: 'BGBC', decimals: 18 },
    infoURL: 'https://www.bloomgenesis.com',
    shortName: 'BGBC-Testnet',
    chainId: 323213,
    networkId: 323213,
    explorers: [
      {
        name: 'Bloom Genesis Testnet',
        url: 'https://testnet.bloomgenesis.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'TTcoin Smart Chain Mainnet',
    chain: 'TSC',
    icon: 'tscscan',
    rpc: [ 'https://mainnet-rpc.tscscan.com' ],
    faucets: [ 'https://faucet.tscscan.com' ],
    nativeCurrency: { name: 'TTcoin', symbol: 'TC', decimals: 18 },
    infoURL: 'https://ttcoin.info/',
    shortName: 'tc',
    chainId: 330844,
    networkId: 330844,
    explorers: [
      {
        name: 'TTcoin Smart Chain Explorer',
        url: 'https://tscscan.com',
        standard: 'EIP3091',
        icon: 'tscscan'
      }
    ]
  },
  {
    name: 'Bloom Genesis Mainnet',
    chain: 'Bloom',
    icon: 'bloom',
    rpc: [ 'https://mainnet-rpc.bloomgenesis.com' ],
    faucets: [],
    nativeCurrency: { name: 'Bloom', symbol: 'BGBC', decimals: 18 },
    infoURL: 'https://www.bloomgenesis.com',
    shortName: 'BGBC',
    chainId: 333313,
    networkId: 333313,
    explorers: [
      {
        name: 'Bloom Genesis Mainnet',
        url: 'https://explorer.bloomgenesis.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Aves Testnet',
    chain: 'AVST',
    rpc: [ 'https://test.rpc.avescoin.io' ],
    faucets: [],
    nativeCurrency: { name: 'AvesT', symbol: 'AVST', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://ethereum.org',
    shortName: 'avst',
    chainId: 333331,
    networkId: 333331,
    slip44: 1,
    icon: 'aves',
    explorers: [
      {
        name: 'avescan',
        url: 'https://testnet.avescoin.io',
        icon: 'avescan',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Nativ3 Testnet',
    chainId: 333333,
    shortName: 'N3-Test',
    chain: 'N3-Test',
    icon: 'nativ3',
    networkId: 333333,
    slip44: 1,
    nativeCurrency: { name: 'USNT', symbol: 'USNT', decimals: 18 },
    rpc: [ 'https://rpctest.nativ3.network', 'wss://wstest.nativ3.network' ],
    faucets: [],
    explorers: [
      {
        name: 'Nativ3 Test Explorer',
        url: 'https://scantest.nativ3.network',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://nativ3.network',
    parent: {
      type: 'L2',
      chain: 'eip155-421613',
      bridges: [ { url: 'https://bridgetest.nativ3.network' } ]
    }
  },
  {
    name: 'Oone Chain Testnet',
    chain: 'OONE Testnet',
    rpc: [ 'https://rpc.testnet.oonechain.com' ],
    faucets: [ 'https://apps-test.adigium.com/faucet' ],
    nativeCurrency: { name: 'tOONE', symbol: 'tOONE', decimals: 18 },
    infoURL: 'https://oonechain.com',
    shortName: 'oonetest',
    chainId: 333666,
    networkId: 333666,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet.oonescan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Oone Chain Devnet',
    chain: 'OONE Devnet',
    rpc: [ 'https://rpc.dev.oonechain.com' ],
    faucets: [ 'https://apps-test.adigium.com/faucet' ],
    nativeCurrency: { name: 'tOONE', symbol: 'tOONE', decimals: 18 },
    infoURL: 'https://oonechain.com',
    shortName: 'oonedev',
    chainId: 333777,
    networkId: 333777,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://dev.oonescan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Polis Testnet',
    chain: 'Sparta',
    icon: 'polis',
    rpc: [ 'https://sparta-rpc.polis.tech' ],
    faucets: [ 'https://faucet.polis.tech' ],
    nativeCurrency: { name: 'tPolis', symbol: 'tPOLIS', decimals: 18 },
    infoURL: 'https://polis.tech',
    shortName: 'sparta',
    chainId: 333888,
    networkId: 333888,
    slip44: 1
  },
  {
    name: 'Polis Mainnet',
    chain: 'Olympus',
    icon: 'polis',
    rpc: [ 'https://rpc.polis.tech' ],
    faucets: [ 'https://faucet.polis.tech' ],
    nativeCurrency: { name: 'Polis', symbol: 'POLIS', decimals: 18 },
    infoURL: 'https://polis.tech',
    shortName: 'olympus',
    chainId: 333999,
    networkId: 333999
  },
  {
    name: 'UPchain Testnet',
    chain: 'UPchain',
    rpc: [ 'https://rpc-testnet.uniport.network' ],
    faucets: [ 'https://faucet-testnet.uniport.network' ],
    nativeCurrency: { name: 'UBTC', symbol: 'UBTC', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://uniport.network',
    shortName: 'UPchain-testnet',
    chainId: 336655,
    networkId: 336655,
    icon: 'up',
    explorers: [
      {
        name: 'UPchain Testnet Explorer',
        url: 'https://explorer-testnet.uniport.network',
        icon: 'up',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'UPchain Mainnet',
    chain: 'UPchain',
    rpc: [ 'https://rpc.uniport.network' ],
    nativeCurrency: { name: 'UBTC', symbol: 'UBTC', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    faucets: [],
    infoURL: 'https://uniport.network',
    shortName: 'UPchain-mainnet',
    chainId: 336666,
    networkId: 336666,
    icon: 'up',
    explorers: [
      {
        name: 'UPchain Mainnet Explorer',
        url: 'https://explorer.uniport.network',
        icon: 'up',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bitfinity Network Testnet',
    chain: 'BFT',
    rpc: [ 'https://testnet.bitfinity.network' ],
    faucets: [ 'https://bitfinity.network/faucet' ],
    nativeCurrency: { name: 'BITFINITY', symbol: 'BFT', decimals: 18 },
    infoURL: 'https://bitfinity.network',
    shortName: 'Bitfinity',
    chainId: 355113,
    networkId: 355113,
    slip44: 1,
    explorers: [
      {
        name: 'Bitfinity Block Explorer',
        url: 'https://explorer.bitfinity.network',
        icon: 'bitfinity',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Digit Soul Smart Chain 2',
    chain: 'DS2',
    rpc: [ 'https://dgs-rpc.digitsoul.co.th' ],
    faucets: [],
    icon: 'pnet',
    nativeCurrency: { name: 'Digit Coin', symbol: 'DGC', decimals: 18 },
    infoURL: '',
    shortName: 'DS2',
    chainId: 363636,
    networkId: 363636
  },
  {
    name: 'HAPchain Testnet',
    chain: 'HAPchain',
    rpc: [ 'https://jsonrpc-test.hap.land' ],
    faucets: [],
    nativeCurrency: { name: 'HAP', symbol: 'HAP', decimals: 18 },
    infoURL: 'https://hap.land',
    shortName: 'hap-testnet',
    chainId: 373737,
    networkId: 373737,
    slip44: 1,
    icon: 'hap',
    explorers: [
      {
        name: 'HAP EVM Explorer (Blockscout)',
        url: 'https://blockscout-test.hap.land',
        standard: 'none',
        icon: 'hap'
      }
    ]
  },
  {
    name: 'Metal C-Chain',
    chain: 'Metal',
    rpc: [ 'https://api.metalblockchain.org/ext/bc/C/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Metal', symbol: 'METAL', decimals: 18 },
    infoURL: 'https://www.metalblockchain.org/',
    shortName: 'metal',
    chainId: 381931,
    networkId: 381931,
    slip44: 9005,
    explorers: [
      {
        name: 'metalscan',
        url: 'https://metalscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Metal Tahoe C-Chain',
    chain: 'Metal',
    rpc: [ 'https://tahoe.metalblockchain.org/ext/bc/C/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Metal', symbol: 'METAL', decimals: 18 },
    infoURL: 'https://www.metalblockchain.org/',
    shortName: 'Tahoe',
    chainId: 381932,
    networkId: 381932,
    slip44: 9005,
    explorers: [
      {
        name: 'metalscan',
        url: 'https://tahoe.metalscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Tipboxcoin Mainnet',
    chain: 'TPBX',
    icon: 'tipboxcoinIcon',
    rpc: [ 'https://mainnet-rpc.tipboxcoin.net' ],
    faucets: [ 'https://faucet.tipboxcoin.net' ],
    nativeCurrency: { name: 'Tipboxcoin', symbol: 'TPBX', decimals: 18 },
    infoURL: 'https://tipboxcoin.net',
    shortName: 'TPBXm',
    chainId: 404040,
    networkId: 404040,
    explorers: [
      {
        name: 'Tipboxcoin',
        url: 'https://tipboxcoin.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'AIE Testnet',
    chain: 'AIE',
    rpc: [ 'https://rpc1-testnet.aiechain.io' ],
    faucets: [],
    nativeCurrency: { name: 'AIE', symbol: 'tAIE', decimals: 18 },
    infoURL: 'https://testnet.aiescan.io',
    shortName: 'aiet',
    chainId: 413413,
    networkId: 413413,
    icon: 'aie',
    explorers: [
      {
        name: 'aiescan-testnet',
        icon: 'aie',
        url: 'https://testnet.aiescan.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Kekchain',
    chain: 'kek',
    rpc: [ 'https://mainnet.kekchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'KEK', symbol: 'KEK', decimals: 18 },
    infoURL: 'https://kekchain.com',
    shortName: 'KEK',
    chainId: 420420,
    networkId: 103090,
    icon: 'kek',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://mainnet-explorer.kekchain.com',
        icon: 'kek',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Kekchain (kektest)',
    chain: 'kek',
    rpc: [ 'https://testnet.kekchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'tKEK', symbol: 'tKEK', decimals: 18 },
    infoURL: 'https://kekchain.com',
    shortName: 'tKEK',
    chainId: 420666,
    networkId: 1,
    slip44: 1,
    icon: 'kek',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet-explorer.kekchain.com',
        icon: 'kek',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Alterium L2 Testnet',
    chain: 'ALT',
    icon: 'alterium',
    rpc: [ 'https://l2-testnet-rpc.altscan.org' ],
    faucets: [],
    nativeCurrency: { name: 'Alterium ETH', symbol: 'AltETH', decimals: 18 },
    infoURL: 'https://alteriumprotocol.org',
    shortName: 'alterium',
    chainId: 420692,
    networkId: 420692,
    slip44: 1,
    parent: {
      type: 'L2',
      chain: 'eip155-5',
      bridges: [ { url: 'https://testnet-bridge.alteriumprotocol.org' } ]
    },
    explorers: [
      {
        name: 'Alterium L2 Testnet Explorer',
        url: 'https://l2-testnet.altscan.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Arbitrum Rinkeby',
    title: 'Arbitrum Testnet Rinkeby',
    chainId: 421611,
    shortName: 'arb-rinkeby',
    chain: 'ETH',
    networkId: 421611,
    slip44: 1,
    nativeCurrency: { name: 'Arbitrum Rinkeby Ether', symbol: 'ETH', decimals: 18 },
    rpc: [ 'https://rinkeby.arbitrum.io/rpc' ],
    faucets: [ 'http://fauceth.komputing.org?chain=421611&address=${ADDRESS}' ],
    infoURL: 'https://arbitrum.io',
    explorers: [
      {
        name: 'arbiscan-testnet',
        url: 'https://testnet.arbiscan.io',
        standard: 'EIP3091'
      },
      {
        name: 'arbitrum-rinkeby',
        url: 'https://rinkeby-explorer.arbitrum.io',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-4',
      bridges: [ { url: 'https://bridge.arbitrum.io' } ]
    }
  },
  {
    name: 'Arbitrum Goerli',
    title: 'Arbitrum Goerli Rollup Testnet',
    chainId: 421613,
    shortName: 'arb-goerli',
    chain: 'ETH',
    networkId: 421613,
    slip44: 1,
    nativeCurrency: { name: 'Arbitrum Goerli Ether', symbol: 'AGOR', decimals: 18 },
    rpc: [
      'https://goerli-rollup.arbitrum.io/rpc',
      'https://arbitrum-goerli.publicnode.com',
      'wss://arbitrum-goerli.publicnode.com'
    ],
    faucets: [],
    infoURL: 'https://arbitrum.io/',
    explorers: [
      {
        name: 'Arbitrum Goerli Arbiscan',
        url: 'https://goerli.arbiscan.io',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-5',
      bridges: [ { url: 'https://bridge.arbitrum.io/' } ]
    }
  },
  {
    name: 'Arbitrum Sepolia',
    title: 'Arbitrum Sepolia Rollup Testnet',
    chain: 'ETH',
    rpc: [
      'https://sepolia-rollup.arbitrum.io/rpc',
      'https://arbitrum-sepolia.infura.io/v3/${INFURA_API_KEY}'
    ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://arbitrum.io',
    shortName: 'arb-sep',
    chainId: 421614,
    networkId: 421614,
    slip44: 1,
    explorers: [
      {
        name: 'Arbitrum Sepolia Rollup Testnet Explorer',
        url: 'https://sepolia-explorer.arbitrum.io',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [ { url: 'https://bridge.arbitrum.io' } ]
    }
  },
  {
    name: 'Fastex Chain testnet',
    chain: 'FTN',
    title: 'Fastex Chain testnet',
    rpc: [ 'https://rpc.testnet.fastexchain.com' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'FTN', symbol: 'FTN', decimals: 18 },
    infoURL: 'https://fastex.com',
    shortName: 'fastexTestnet',
    chainId: 424242,
    networkId: 424242,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet.ftnscan.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Markr Go',
    chain: 'Unified',
    icon: 'markrgo',
    rpc: [ 'https://rpc.markr.io/ext/' ],
    faucets: [],
    nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
    infoURL: 'https://www.markr.io/',
    shortName: 'markr-go',
    chainId: 431140,
    networkId: 431140,
    explorers: [],
    status: 'incubating'
  },
  {
    name: 'Dexalot Subnet Testnet',
    chain: 'DEXALOT',
    icon: 'dexalot',
    rpc: [ 'https://subnets.avax.network/dexalot/testnet/rpc' ],
    faucets: [ 'https://faucet.avax.network/?subnet=dexalot' ],
    nativeCurrency: { name: 'Dexalot', symbol: 'ALOT', decimals: 18 },
    infoURL: 'https://dexalot.com',
    shortName: 'dexalot-testnet',
    chainId: 432201,
    networkId: 432201,
    slip44: 1,
    explorers: [
      {
        name: 'Avalanche Subnet Testnet Explorer',
        url: 'https://subnets-test.avax.network/dexalot',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Dexalot Subnet',
    chain: 'DEXALOT',
    icon: 'dexalot',
    rpc: [ 'https://subnets.avax.network/dexalot/mainnet/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Dexalot', symbol: 'ALOT', decimals: 18 },
    infoURL: 'https://dexalot.com',
    shortName: 'dexalot',
    chainId: 432204,
    networkId: 432204,
    explorers: [
      {
        name: 'Avalanche Subnet Explorer',
        url: 'https://subnets.avax.network/dexalot',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Syndr L3 Sepolia',
    title: 'Syndr L3 Sepolia Rollup Testnet',
    chain: 'SYNDRSEPOLIA',
    rpc: [ 'https://sepolia.syndr.com/http', 'wss://sepolia.syndr.com/ws' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://syndr.com',
    shortName: 'syndr',
    chainId: 444444,
    networkId: 444444,
    explorers: [
      {
        name: 'Syndr L3 Sepolia Testnet Explorer',
        url: 'https://sepolia-explorer.syndr.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-421614',
      bridges: [ { url: 'https://sepolia-bridge.syndr.com' } ]
    }
  },
  {
    name: 'Weelink Testnet',
    chain: 'WLK',
    rpc: [ 'https://weelinknode1c.gw002.oneitfarm.com' ],
    faucets: [ 'https://faucet.weelink.gw002.oneitfarm.com' ],
    nativeCurrency: { name: 'Weelink Chain Token', symbol: 'tWLK', decimals: 18 },
    infoURL: 'https://weelink.cloud',
    shortName: 'wlkt',
    chainId: 444900,
    networkId: 444900,
    slip44: 1,
    explorers: [
      {
        name: 'weelink-testnet',
        url: 'https://weelink.cloud/#/blockView/overview',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Patex Sepolia Testnet',
    chain: 'ETH',
    rpc: [ 'https://test-rpc.patex.io/' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://patex.io/',
    shortName: 'psep',
    chainId: 471100,
    networkId: 471100,
    slip44: 1
  },
  {
    name: 'Ultra Pro Mainnet',
    chain: 'ultrapro',
    icon: 'ultrapro',
    rpc: [ 'https://mainnet-rpc.ultraproscan.io' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Ultra Pro', symbol: 'UPRO', decimals: 18 },
    infoURL: 'https://ultrapro.info',
    shortName: 'ultrapro',
    chainId: 473861,
    networkId: 473861,
    explorers: [
      {
        name: 'ultraproscan',
        url: 'https://ultraproscan.io',
        icon: 'ultrapro',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'OpenChain Mainnet',
    chain: 'OpenChain',
    rpc: [
      'https://baas-rpc.luniverse.io:18545?lChainId=1641349324562974539'
    ],
    faucets: [],
    nativeCurrency: { name: 'OpenCoin', symbol: 'OPC', decimals: 10 },
    infoURL: 'https://www.openchain.live',
    shortName: 'oc',
    chainId: 474142,
    networkId: 474142,
    explorers: [
      {
        name: 'SIDE SCAN',
        url: 'https://sidescan.luniverse.io/1641349324562974539',
        standard: 'none'
      }
    ]
  },
  {
    name: 'CMP-Testnet',
    chain: 'CMP',
    rpc: [
      'https://galaxy.block.caduceus.foundation',
      'wss://galaxy.block.caduceus.foundation'
    ],
    faucets: [ 'https://dev.caduceus.foundation/testNetwork' ],
    nativeCurrency: { name: 'Caduceus Testnet Token', symbol: 'CMP', decimals: 18 },
    infoURL: 'https://caduceus.foundation/',
    shortName: 'cmp',
    chainId: 512512,
    networkId: 512512,
    slip44: 1,
    explorers: [
      {
        name: 'Galaxy Scan',
        url: 'https://galaxy.scan.caduceus.foundation',
        standard: 'none'
      }
    ]
  },
  {
    name: 'DisChain',
    chainId: 513100,
    networkId: 513100,
    shortName: 'dis',
    chain: 'DIS',
    nativeCurrency: { name: 'DisChain', symbol: 'DIS', decimals: 18 },
    rpc: [ 'https://rpc.dischain.xyz' ],
    faucets: [],
    explorers: [
      {
        name: 'DisChain',
        url: 'https://www.oklink.com/dis',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://dischain.xyz'
  },
  {
    name: 'DoCoin Community Chain',
    title: 'DoCoin Community Chain',
    chain: 'DoCoin',
    rpc: [ 'https://rpc.docoin.shop' ],
    faucets: [],
    nativeCurrency: { name: 'DO', symbol: 'DCT', decimals: 18 },
    infoURL: 'https://docoin.network',
    shortName: 'DoCoin',
    chainId: 526916,
    networkId: 526916,
    explorers: [
      {
        name: 'DoCoin Community Chain Explorer',
        url: 'https://explorer.docoin.shop',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Scroll Sepolia Testnet',
    chain: 'ETH',
    status: 'active',
    rpc: [
      'https://sepolia-rpc.scroll.io',
      'https://rpc.ankr.com/scroll_sepolia_testnet',
      'https://scroll-sepolia.chainstacklabs.com',
      'https://scroll-testnet-public.unifra.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://scroll.io',
    shortName: 'scr-sepolia',
    chainId: 534351,
    networkId: 534351,
    slip44: 1,
    explorers: [
      {
        name: 'Scroll Sepolia Etherscan',
        url: 'https://sepolia.scrollscan.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [ { url: 'https://sepolia.scroll.io/bridge' } ]
    }
  },
  {
    name: 'Scroll',
    chain: 'ETH',
    status: 'active',
    rpc: [
      'https://rpc.scroll.io',
      'https://rpc.ankr.com/scroll',
      'https://scroll-mainnet.chainstacklabs.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://scroll.io',
    shortName: 'scr',
    chainId: 534352,
    networkId: 534352,
    explorers: [
      {
        name: 'Scrollscan',
        url: 'https://scrollscan.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://scroll.io/bridge' } ]
    }
  },
  {
    name: 'Scroll Alpha Testnet',
    chain: 'ETH',
    status: 'deprecated',
    rpc: [ 'https://alpha-rpc.scroll.io/l2' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://scroll.io',
    shortName: 'scr-alpha',
    chainId: 534353,
    networkId: 534353,
    slip44: 1,
    explorers: [
      {
        name: 'Scroll Alpha Testnet Block Explorer',
        url: 'https://alpha-blockscout.scroll.io',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-5', bridges: [] }
  },
  {
    name: 'Scroll Pre-Alpha Testnet',
    chain: 'ETH',
    status: 'deprecated',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'TSETH', decimals: 18 },
    infoURL: 'https://scroll.io',
    shortName: 'scr-prealpha',
    chainId: 534354,
    networkId: 534354,
    slip44: 1,
    explorers: []
  },
  {
    name: 'Shinarium Beta',
    chain: 'Shinarium',
    icon: 'shinarium',
    rpc: [ 'https://rpc.shinarium.org' ],
    faucets: [ 'https://faucet.shinarium.org' ],
    nativeCurrency: { name: 'Shina Inu', symbol: 'SHI', decimals: 18 },
    infoURL: 'https://shinarium.org',
    shortName: 'shi',
    chainId: 534849,
    networkId: 534849,
    explorers: [
      {
        name: 'shinascan',
        url: 'https://shinascan.shinarium.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BeanEco SmartChain',
    title: 'BESC Mainnet',
    chain: 'BESC',
    rpc: [ 'https://mainnet-rpc.bescscan.io' ],
    faucets: [],
    nativeCurrency: { name: 'BeanEco SmartChain', symbol: 'BESC', decimals: 18 },
    infoURL: 'besceco.finance',
    shortName: 'BESC',
    chainId: 535037,
    networkId: 535037,
    explorers: [
      {
        name: 'bescscan',
        url: 'https://Bescscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Eclipse Testnet',
    chain: 'ECLIPSE',
    rpc: [ 'https://subnets.avax.network/eclipsecha/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Eclipse', symbol: 'ECLPS', decimals: 18 },
    infoURL: 'http://eclipsenet.io',
    shortName: 'eclipset',
    chainId: 555666,
    networkId: 555666,
    explorers: [
      {
        name: 'ECLIPSE Explorer',
        url: 'https://subnets-test.avax.network/eclipsecha',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Hypra Mainnet',
    chain: 'HYP',
    rpc: [
      'https://rpc.hypra.network',
      'https://rpc.rethereum.org',
      'https://rethereum.rpc.restratagem.com',
      'https://rpc.rthcentral.org',
      'https://hypra.rpc.thirdweb.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Hypra', symbol: 'HYP', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://www.hypra.network',
    shortName: 'hyp',
    chainId: 622277,
    networkId: 622277,
    icon: 'rethereum',
    explorers: [
      {
        name: 'hypra',
        url: 'https://explorer.hypra.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Bear Network Chain Mainnet',
    chain: 'BRNKC',
    icon: 'brnkc',
    rpc: [
      'https://brnkc-mainnet.bearnetwork.net',
      'https://brnkc-mainnet1.bearnetwork.net'
    ],
    faucets: [],
    nativeCurrency: {
      name: 'Bear Network Chain Native Token',
      symbol: 'BRNKC',
      decimals: 18
    },
    infoURL: 'https://bearnetwork.net',
    shortName: 'BRNKC',
    chainId: 641230,
    networkId: 641230,
    explorers: [
      {
        name: 'brnkscan',
        url: 'https://brnkscan.bearnetwork.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'ALL Mainnet',
    chain: 'ALL',
    icon: 'alltra',
    rpc: [ 'https://mainnet-rpc.alltra.global' ],
    faucets: [],
    nativeCurrency: { name: 'ALL', symbol: 'ALL', decimals: 18 },
    infoURL: 'https://alltra.world',
    shortName: 'ALL',
    chainId: 651940,
    networkId: 651940,
    explorers: [
      {
        name: 'Alltra SmartChain Explorer',
        url: 'https://alltra.global',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Vision - Vpioneer Test Chain',
    chain: 'Vision-Vpioneer',
    rpc: [ 'https://vpioneer.infragrid.v.network/ethereum/compatible' ],
    faucets: [ 'https://vpioneerfaucet.visionscan.org' ],
    nativeCurrency: { name: 'VS', symbol: 'VS', decimals: 18 },
    infoURL: 'https://visionscan.org',
    shortName: 'vpioneer',
    chainId: 666666,
    networkId: 666666,
    slip44: 1
  },
  {
    name: 'Hela Official Runtime Testnet',
    chain: 'Hela',
    icon: 'hela',
    rpc: [ 'https://testnet-rpc.helachain.com' ],
    faucets: [ 'https://testnet-faucet.helachain.com' ],
    nativeCurrency: { name: 'Hela HLUSD', symbol: 'HLUSD', decimals: 18 },
    infoURL: 'https://helalabs.com',
    shortName: 'hela-testnet',
    chainId: 666888,
    networkId: 666888,
    slip44: 1,
    explorers: [
      {
        name: 'Hela Official Runtime Testnet Explorer',
        url: 'https://testnet-blockexplorer.helachain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Won Network',
    chainId: 686868,
    shortName: 'WonChain',
    chain: 'WON',
    icon: 'won',
    networkId: 686868,
    nativeCurrency: { name: 'Won', symbol: 'WON', decimals: 18 },
    rpc: [ 'https://rpc.wonnetwork.org' ],
    faucets: [ 'https://faucet.wondollars.org' ],
    explorers: [
      {
        name: 'Won Explorer',
        url: 'https://scan.wonnetwork.org',
        standard: 'EIP3091'
      }
    ],
    infoURL: 'https://wonnetwork.org'
  },
  {
    name: 'Galadriel Devnet',
    chain: 'Galadriel',
    rpc: [ 'https://devnet.galadriel.com' ],
    faucets: [ 'https://docs.galadriel.com/faucet' ],
    nativeCurrency: { name: 'Galadriel Devnet token', symbol: 'GAL', decimals: 18 },
    infoURL: 'https://galadriel.com',
    shortName: 'galadriel-devnet',
    chainId: 696969,
    networkId: 696969,
    explorers: [
      {
        name: 'Galadriel Explorer',
        url: 'https://explorer.galadriel.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Tiltyard Mainnet Subnet',
    chain: 'TILTYARD',
    rpc: [ 'https://subnets.avax.network/tiltyard/mainnet/rpc' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'TILT', symbol: 'TILT', decimals: 18 },
    infoURL: 'https://play.tiltyard.gg/',
    shortName: 'tiltyardmainnet',
    chainId: 710420,
    networkId: 710420,
    explorers: [
      {
        name: 'TILTYARD Explorer',
        url: 'https://subnets.avax.network/tiltyard',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Sei Devnet',
    chain: 'Sei',
    rpc: [
      'https://evm-rpc-arctic-1.sei-apis.com',
      'https://evm-rpc.arctic-1.seinetwork.io'
    ],
    faucets: [
      'https://sei-faucet.nima.enterprises',
      'https://sei-evm.faucetme.pro'
    ],
    nativeCurrency: { name: 'Sei', symbol: 'SEI', decimals: 18 },
    infoURL: 'https://www.sei.io',
    shortName: 'sei-devnet',
    chainId: 713715,
    networkId: 713715,
    icon: 'sei',
    explorers: [
      {
        name: 'Seistream',
        url: 'https://seistream.app',
        standard: 'none'
      },
      {
        name: 'Seitrace',
        url: 'https://seitrace.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Hemi Sepolia',
    chain: 'ETH',
    rpc: [ 'https://testnet.rpc.hemi.network/rpc' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://hemi.xyz',
    shortName: 'hemi-sep',
    chainId: 743111,
    networkId: 743111,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://testnet.explorer.hemi.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-11155111' },
    status: 'active'
  },
  {
    name: 'Bear Network Chain Testnet',
    chain: 'BRNKCTEST',
    icon: 'brnkc',
    rpc: [ 'https://brnkc-test.bearnetwork.net' ],
    faucets: [ 'https://faucet.bearnetwork.net' ],
    nativeCurrency: {
      name: 'Bear Network Chain Testnet Token',
      symbol: 'tBRNKC',
      decimals: 18
    },
    infoURL: 'https://bearnetwork.net',
    shortName: 'BRNKCTEST',
    chainId: 751230,
    networkId: 751230,
    slip44: 1,
    explorers: [
      {
        name: 'brnktestscan',
        url: 'https://brnktest-scan.bearnetwork.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Miexs Smartchain',
    chain: 'MiexsSmartchain',
    icon: 'miexs',
    rpc: [ 'https://mainnet-rpc.miexs.com' ],
    faucets: [],
    nativeCurrency: { name: 'Miexs Coin', symbol: 'MIX', decimals: 18 },
    infoURL: 'https://miexs.com',
    shortName: 'Miexs',
    chainId: 761412,
    networkId: 761412,
    explorers: [
      {
        name: 'Miexs Smartchain Explorer',
        url: 'https://miexs.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Modularium',
    chain: 'EVMCC',
    rpc: [ 'https://fraa-dancebox-3035-rpc.a.dancebox.tanssi.network' ],
    faucets: [],
    nativeCurrency: { name: 'Modularium', symbol: 'MDM', decimals: 18 },
    infoURL: 'https://www.rmrk.app/',
    shortName: 'mdlrm',
    chainId: 776877,
    networkId: 776877,
    explorers: [
      {
        name: 'Tanssi Explorer',
        url: 'https://tanssi-evmexplorer.netlify.app/?rpcUrl=https://fraa-dancebox-3035-rpc.a.dancebox.tanssi.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'OctaSpace',
    chain: 'OCTA',
    rpc: [ 'https://rpc.octa.space', 'wss://rpc.octa.space' ],
    faucets: [],
    nativeCurrency: { name: 'OctaSpace', symbol: 'OCTA', decimals: 18 },
    infoURL: 'https://octa.space',
    shortName: 'octa',
    chainId: 800001,
    networkId: 800001,
    icon: 'octaspace',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.octa.space',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BIZ Smart Chain Testnet',
    chain: 'BIZT Testnet',
    rpc: [ 'https://rpc-testnet.bizex.io/' ],
    faucets: [],
    nativeCurrency: { name: 'tBIZT', symbol: 'tBIZT', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://www.biztoken.io/',
    shortName: 'bizt-testnet',
    chainId: 808080,
    networkId: 808080,
    slip44: 1,
    icon: 'biz',
    explorers: [
      {
        name: 'BIZ Smart Chain Testnet Explorer',
        url: 'https://testnet.btscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'zkLink Nova Mainnet',
    chain: 'ETH',
    rpc: [ 'https://rpc.zklink.io', 'wss://rpc.zklink.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://zklink.io',
    shortName: 'zklink-nova',
    chainId: 810180,
    networkId: 810180,
    slip44: 1,
    icon: 'zklink-nova',
    explorers: [
      {
        name: 'zkLink Nova Block Explorer',
        url: 'https://explorer.zklink.io',
        icon: 'zklink-nova',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-59144',
      bridges: [ { url: 'https://portal.zklink.io' } ]
    }
  },
  {
    name: 'zkLink Nova Sepolia Testnet',
    chain: 'ETH',
    rpc: [ 'https://sepolia.rpc.zklink.io', 'wss://sepolia.rpc.zklink.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://zklink.io',
    shortName: 'zklink-nova-sepolia',
    chainId: 810181,
    networkId: 810181,
    slip44: 1,
    icon: 'zklink-nova',
    explorers: [
      {
        name: 'zkLink Nova Block Explorer',
        url: 'https://sepolia.explorer.zklink.io',
        icon: 'zklink-nova',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-59141',
      bridges: [ { url: 'https://sepolia.portal.zklink.io' } ]
    }
  },
  {
    name: 'zkLink Nova Goerli Testnet',
    chain: 'ETH',
    rpc: [ 'https://goerli.rpc.zklink.io', 'wss://goerli.rpc.zklink.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://zklink.io',
    shortName: 'zklink-nova-goerli',
    chainId: 810182,
    networkId: 810182,
    slip44: 1,
    icon: 'zklink-nova',
    explorers: [
      {
        name: 'zkLink Nova Block Explorer',
        url: 'https://goerli.explorer.zklink.io',
        icon: 'zklink-nova',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-59140',
      bridges: [ { url: 'https://goerli.portal.zklink.io' } ]
    }
  },
  {
    name: 'CURVE Mainnet',
    chain: 'CURVE',
    icon: 'curveIcon',
    rpc: [ 'https://mainnet-rpc.curvescan.io' ],
    faucets: [],
    nativeCurrency: { name: 'Curve', symbol: 'CURVE', decimals: 18 },
    infoURL: 'https://curvescan.io',
    shortName: 'CURVEm',
    chainId: 827431,
    networkId: 827431,
    explorers: [
      {
        name: 'CURVE Mainnet',
        url: 'https://curvescan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: '4GoodNetwork',
    chain: '4GN',
    rpc: [ 'https://chain.deptofgood.com' ],
    faucets: [],
    nativeCurrency: { name: 'APTA', symbol: 'APTA', decimals: 18 },
    infoURL: 'https://bloqs4good.com',
    shortName: 'bloqs4good',
    chainId: 846000,
    networkId: 846000
  },
  {
    name: 'Dodao',
    chain: 'EVMCC',
    rpc: [
      'https://fraa-dancebox-3041-rpc.a.dancebox.tanssi.network',
      'wss://fraa-dancebox-3041-rpc.a.dancebox.tanssi.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Dodao', symbol: 'DODAO', decimals: 18 },
    infoURL: 'https://dodao.dev/',
    shortName: 'dodao',
    chainId: 855456,
    networkId: 855456,
    icon: 'dodao',
    explorers: [
      {
        name: 'Dodao Explorer',
        url: 'https://tanssi-evmexplorer.netlify.app/?rpcUrl=https://fraa-dancebox-3041-rpc.a.dancebox.tanssi.network',
        icon: 'dodao',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'BlocX Mainnet',
    chain: 'BLX',
    rpc: [ 'https://mainnet-rpc.blxscan.com/' ],
    faucets: [],
    nativeCurrency: { name: 'BlocX', symbol: 'BLX', decimals: 18 },
    infoURL: 'https://www.blocxchain.org/',
    shortName: 'blx',
    chainId: 879151,
    networkId: 879151,
    icon: 'blx',
    explorers: [
      {
        name: 'BlocX Mainnet Explorer',
        url: 'https://explorer.blxscan.com',
        icon: 'blx',
        standard: 'none'
      }
    ]
  },
  {
    name: 'REXX Mainnet',
    title: 'REXX Mainnet',
    chain: 'REXX',
    rpc: [ 'https://rpc.rexxnetwork.com' ],
    faucets: [],
    nativeCurrency: { name: 'REXX', symbol: 'REXX', decimals: 18 },
    infoURL: 'https://rexxnetwork.com',
    shortName: 'REXX',
    chainId: 888882,
    networkId: 888882,
    explorers: [
      {
        name: 'REXX Mainnet Explorer',
        url: 'https://rexxnetwork.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Vision - Mainnet',
    chain: 'Vision',
    rpc: [ 'https://infragrid.v.network/ethereum/compatible' ],
    faucets: [],
    nativeCurrency: { name: 'VS', symbol: 'VS', decimals: 18 },
    infoURL: 'https://www.v.network',
    explorers: [
      {
        name: 'Visionscan',
        url: 'https://www.visionscan.org',
        standard: 'EIP3091'
      }
    ],
    shortName: 'vision',
    chainId: 888888,
    networkId: 888888,
    slip44: 60
  },
  {
    name: 'Posichain Mainnet Shard 0',
    chain: 'PSC',
    rpc: [ 'https://api.posichain.org', 'https://api.s0.posichain.org' ],
    faucets: [],
    nativeCurrency: { name: 'Posichain Native Token', symbol: 'POSI', decimals: 18 },
    infoURL: 'https://posichain.org',
    shortName: 'psc-s0',
    chainId: 900000,
    networkId: 900000,
    explorers: [
      {
        name: 'Posichain Explorer',
        url: 'https://explorer.posichain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Posichain Testnet Shard 0',
    chain: 'PSC',
    rpc: [ 'https://api.s0.t.posichain.org' ],
    faucets: [ 'https://faucet.posichain.org/' ],
    nativeCurrency: { name: 'Posichain Native Token', symbol: 'POSI', decimals: 18 },
    infoURL: 'https://posichain.org',
    shortName: 'psc-t-s0',
    chainId: 910000,
    networkId: 910000,
    explorers: [
      {
        name: 'Posichain Explorer Testnet',
        url: 'https://explorer-testnet.posichain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Astria EVM Dusknet',
    chain: 'RIA',
    icon: 'astria',
    chainId: 912559,
    networkId: 912559,
    infoURL: 'https://docs.astria.org',
    shortName: 'ria-dev',
    nativeCurrency: { name: 'RIA', symbol: 'RIA', decimals: 18 },
    rpc: [ 'https://rpc.evm.dusk-3.devnet.astria.org' ],
    faucets: [ 'https://faucet.evm.dusk-3.devnet.astria.org/' ],
    explorers: [
      {
        name: 'Astria EVM Dusknet Explorer',
        url: 'https://explorer.evm.dusk-3.devnet.astria.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Posichain Devnet Shard 0',
    chain: 'PSC',
    rpc: [ 'https://api.s0.d.posichain.org' ],
    faucets: [ 'https://faucet.posichain.org/' ],
    nativeCurrency: { name: 'Posichain Native Token', symbol: 'POSI', decimals: 18 },
    infoURL: 'https://posichain.org',
    shortName: 'psc-d-s0',
    chainId: 920000,
    networkId: 920000,
    explorers: [
      {
        name: 'Posichain Explorer Devnet',
        url: 'https://explorer-devnet.posichain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Posichain Devnet Shard 1',
    chain: 'PSC',
    rpc: [ 'https://api.s1.d.posichain.org' ],
    faucets: [ 'https://faucet.posichain.org/' ],
    nativeCurrency: { name: 'Posichain Native Token', symbol: 'POSI', decimals: 18 },
    infoURL: 'https://posichain.org',
    shortName: 'psc-d-s1',
    chainId: 920001,
    networkId: 920001,
    explorers: [
      {
        name: 'Posichain Explorer Devnet',
        url: 'https://explorer-devnet.posichain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'FNCY Testnet',
    chain: 'FNCY',
    rpc: [ 'https://fncy-testnet-seed.fncy.world' ],
    faucets: [ 'https://faucet-testnet.fncy.world' ],
    nativeCurrency: { name: 'FNCY', symbol: 'FNCY', decimals: 18 },
    infoURL: 'https://fncyscan-testnet.fncy.world',
    shortName: 'tFNCY',
    chainId: 923018,
    networkId: 923018,
    slip44: 1,
    icon: 'fncy',
    explorers: [
      {
        name: 'fncy scan testnet',
        url: 'https://fncyscan-testnet.fncy.world',
        icon: 'fncy',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Jono12 Subnet',
    chain: 'JONO12',
    icon: 'jono12',
    rpc: [ 'https://subnets.avax.network/jono12/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Jono12 Token', symbol: 'JONO', decimals: 18 },
    infoURL: '',
    shortName: 'jono12',
    chainId: 955081,
    networkId: 955081,
    explorers: [
      {
        name: 'JONO12 Explorer',
        url: 'https://subnets-test.avax.network/jono12',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Eluvio Content Fabric',
    chain: 'Eluvio',
    rpc: [
      'https://host-76-74-28-226.contentfabric.io/eth/',
      'https://host-76-74-28-232.contentfabric.io/eth/',
      'https://host-76-74-29-2.contentfabric.io/eth/',
      'https://host-76-74-29-8.contentfabric.io/eth/',
      'https://host-76-74-29-34.contentfabric.io/eth/',
      'https://host-76-74-29-35.contentfabric.io/eth/',
      'https://host-154-14-211-98.contentfabric.io/eth/',
      'https://host-154-14-192-66.contentfabric.io/eth/',
      'https://host-60-240-133-202.contentfabric.io/eth/',
      'https://host-64-235-250-98.contentfabric.io/eth/'
    ],
    faucets: [],
    nativeCurrency: { name: 'ELV', symbol: 'ELV', decimals: 18 },
    infoURL: 'https://eluv.io',
    shortName: 'elv',
    chainId: 955305,
    networkId: 955305,
    slip44: 1011,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.eluv.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ecrox Chain Mainnet',
    chain: 'Ecrox Chain',
    rpc: [ 'https://mainnet-rpc.ecroxscan.com/' ],
    faucets: [],
    nativeCurrency: { name: 'ECROX COIN', symbol: 'ECROX', decimals: 18 },
    infoURL: 'https://ecroxcoin.io/',
    shortName: 'ecrox',
    icon: 'ecrox',
    chainId: 988207,
    networkId: 988207,
    explorers: [
      {
        name: 'Ecrox Chain Explorer',
        url: 'https://ecroxscan.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Netmind Chain Testnet',
    title: 'NetMind Chain Testnet',
    chain: 'NetMind',
    rpc: [ 'https://testblock.protago-dev.com' ],
    faucets: [],
    nativeCurrency: { name: 'NMT', symbol: 'NMT', decimals: 18 },
    infoURL: 'https://netmind.ai',
    shortName: 'nmtTest',
    chainId: 1100789,
    networkId: 1100789,
    icon: 'netmind',
    explorers: [
      {
        name: 'NetMind Testnet Explorer',
        url: 'https://testbrower.protago-dev.com',
        icon: 'netmind',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Tiltyard Subnet',
    chain: 'TILTYARD',
    rpc: [ 'https://subnets.avax.network/tiltyard/testnet/rpc' ],
    features: [ { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Tiltyard Token', symbol: 'TILTG', decimals: 18 },
    infoURL: '',
    shortName: 'tiltyard',
    chainId: 1127469,
    networkId: 1127469,
    explorers: [
      {
        name: 'TILTYARD Explorer',
        url: 'http://testnet-explorer.tiltyard.gg',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'zKatana',
    shortName: 'azktn',
    title: 'Astar zkEVM Testnet zKatana',
    chain: 'ETH',
    icon: 'astarzk',
    rpc: [
      'https://rpc.zkatana.gelato.digital',
      'https://rpc.startale.com/zkatana',
      'https://astar-zkatana.drpc.org',
      'wss://astar-zkatana.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://astar.network',
    chainId: 1261120,
    networkId: 1261120,
    explorers: [
      {
        name: 'Blockscout zKatana chain explorer',
        url: 'https://zkatana.blockscout.com',
        standard: 'EIP3091'
      },
      {
        name: 'Startale zKatana chain explorer',
        url: 'https://zkatana.explorer.startale.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [
        { url: 'https://portal.astar.network' },
        { url: 'https://bridge.zkatana.gelato.digital' }
      ]
    },
    status: 'active'
  },
  {
    name: 'Etho Protocol',
    chain: 'ETHO',
    rpc: [ 'https://rpc.ethoprotocol.com' ],
    faucets: [],
    nativeCurrency: { name: 'Etho Protocol', symbol: 'ETHO', decimals: 18 },
    infoURL: 'https://ethoprotocol.com',
    shortName: 'etho',
    chainId: 1313114,
    networkId: 1313114,
    slip44: 1313114,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://explorer.ethoprotocol.com',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Xerom',
    chain: 'XERO',
    rpc: [ 'https://rpc.xerom.org' ],
    faucets: [],
    nativeCurrency: { name: 'Xerom Ether', symbol: 'XERO', decimals: 18 },
    infoURL: 'https://xerom.org',
    shortName: 'xero',
    chainId: 1313500,
    networkId: 1313500
  },
  {
    name: 'Kintsugi',
    title: 'Kintsugi merge testnet',
    chain: 'ETH',
    rpc: [ 'https://rpc.kintsugi.themerge.dev' ],
    faucets: [
      'http://fauceth.komputing.org?chain=1337702&address=${ADDRESS}',
      'https://faucet.kintsugi.themerge.dev'
    ],
    nativeCurrency: { name: 'kintsugi Ethere', symbol: 'kiETH', decimals: 18 },
    infoURL: 'https://kintsugi.themerge.dev/',
    shortName: 'kintsugi',
    chainId: 1337702,
    networkId: 1337702,
    explorers: [
      {
        name: 'kintsugi explorer',
        url: 'https://explorer.kintsugi.themerge.dev',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Kiln',
    chain: 'ETH',
    rpc: [ 'https://rpc.kiln.themerge.dev' ],
    faucets: [
      'https://faucet.kiln.themerge.dev',
      'https://kiln-faucet.pk910.de',
      'https://kilnfaucet.com'
    ],
    nativeCurrency: { name: 'Testnet ETH', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://kiln.themerge.dev/',
    shortName: 'kiln',
    chainId: 1337802,
    networkId: 1337802,
    icon: 'ethereum',
    explorers: [
      {
        name: 'Kiln Explorer',
        url: 'https://explorer.kiln.themerge.dev',
        icon: 'ethereum',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Zhejiang',
    chain: 'ETH',
    rpc: [ 'https://rpc.zhejiang.ethpandaops.io' ],
    faucets: [
      'https://faucet.zhejiang.ethpandaops.io',
      'https://zhejiang-faucet.pk910.de'
    ],
    nativeCurrency: { name: 'Testnet ETH', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://zhejiang.ethpandaops.io',
    shortName: 'zhejiang',
    chainId: 1337803,
    networkId: 1337803,
    icon: 'ethereum',
    explorers: [
      {
        name: 'Zhejiang Explorer',
        url: 'https://zhejiang.beaconcha.in',
        icon: 'ethereum',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PlayFi Albireo Testnet',
    chain: 'ETH',
    rpc: [ 'https://albireo-rpc.playfi.ai' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://www.playfi.ai/',
    shortName: 'alberio',
    chainId: 1612127,
    networkId: 1612127,
    slip44: 1,
    explorers: [
      {
        name: 'PlayFi Block Explorer',
        url: 'https://albireo-explorer.playfi.ai',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://portal.playfi.ai/bridge' } ]
    }
  },
  {
    name: 'Turkey Demo Dev',
    chain: 'ETH',
    rpc: [ 'https://devchain-poa.huabeizhenxuan.com' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: '',
    shortName: 'TDD',
    chainId: 1731313,
    networkId: 1731313
  },
  {
    name: 'DeBank Testnet',
    chain: 'DeBank',
    rpc: [ 'http://rpc.testnet.debank.com' ],
    faucets: [],
    icon: 'debank',
    nativeCurrency: { name: 'DeBank USD', symbol: 'USD', decimals: 18 },
    infoURL: 'https://debank.com',
    shortName: 'dbk',
    chainId: 2021398,
    networkId: 2021398,
    slip44: 1,
    explorers: [
      {
        name: 'DeBank Chain Explorer',
        url: 'https://explorer.testnet.debank.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Plian Mainnet Main',
    chain: 'Plian',
    rpc: [ 'https://mainnet.plian.io/pchain' ],
    faucets: [],
    nativeCurrency: { name: 'Plian Token', symbol: 'PI', decimals: 18 },
    infoURL: 'https://plian.org/',
    shortName: 'plian-mainnet',
    chainId: 2099156,
    networkId: 2099156,
    explorers: [
      {
        name: 'piscan',
        url: 'https://piscan.plian.org/pchain',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PlatON Dev Testnet Deprecated',
    chain: 'PlatON',
    rpc: [
      'https://devnetopenapi2.platon.network/rpc',
      'wss://devnetopenapi2.platon.network/ws'
    ],
    faucets: [ 'https://devnet2faucet.platon.network/faucet' ],
    nativeCurrency: { name: 'LAT', symbol: 'lat', decimals: 18 },
    infoURL: 'https://www.platon.network',
    shortName: 'platondev',
    chainId: 2203181,
    networkId: 1,
    slip44: 1,
    icon: 'platon',
    status: 'deprecated',
    explorers: [
      {
        name: 'PlatON explorer',
        url: 'https://devnetscan.platon.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'PlatON Dev Testnet2',
    chain: 'PlatON',
    rpc: [
      'https://devnet2openapi.platon.network/rpc',
      'wss://devnet2openapi.platon.network/ws'
    ],
    faucets: [ 'https://devnet2faucet.platon.network/faucet' ],
    nativeCurrency: { name: 'LAT', symbol: 'lat', decimals: 18 },
    infoURL: 'https://www.platon.network',
    shortName: 'platondev2',
    chainId: 2206132,
    networkId: 1,
    slip44: 1,
    icon: 'platon',
    explorers: [
      {
        name: 'PlatON explorer',
        url: 'https://devnet2scan.platon.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'DPU Chain',
    chain: 'DPU',
    rpc: [ 'https://sc-rpc.dpu.ac.th' ],
    faucets: [],
    nativeCurrency: { name: 'DGC', symbol: 'DGC', decimals: 18 },
    infoURL: '',
    shortName: 'DPU',
    chainId: 2611555,
    networkId: 2611555
  },
  {
    name: 'SaharaAI Network',
    chain: 'Sahara',
    rpc: [ 'https://mainnet.saharalabs.ai' ],
    faucets: [],
    nativeCurrency: { name: 'SAHARA', symbol: 'SAH', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://saharalabs.ai',
    shortName: 'sahara',
    chainId: 3132023,
    networkId: 3132023,
    icon: 'sahara',
    explorers: []
  },
  {
    name: 'Filecoin - Butterfly testnet',
    chain: 'FIL',
    status: 'incubating',
    rpc: [],
    faucets: [ 'https://faucet.butterfly.fildev.network' ],
    nativeCurrency: { name: 'testnet filecoin', symbol: 'tFIL', decimals: 18 },
    infoURL: 'https://filecoin.io',
    shortName: 'filecoin-butterfly',
    icon: 'filecoin',
    chainId: 3141592,
    networkId: 3141592,
    slip44: 1,
    explorers: []
  },
  {
    name: 'Manta Pacific Testnet',
    chain: 'Manta Pacific',
    rpc: [
      'https://manta-testnet.calderachain.xyz/http',
      'https://manta-pacific-testnet.drpc.org',
      'wss://manta-pacific-testnet.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Manta', symbol: 'MANTA', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://manta-testnet.caldera.dev/',
    shortName: 'mantaTestnet',
    chainId: 3441005,
    networkId: 3441005,
    slip44: 1,
    icon: 'manta',
    explorers: [
      {
        name: 'manta-testnet Explorer',
        url: 'https://manta-testnet.calderaexplorer.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Manta Pacific Sepolia Testnet',
    chain: 'Manta Pacific',
    rpc: [ 'https://pacific-rpc.sepolia-testnet.manta.network/http' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://manta-testnet.caldera.dev/',
    shortName: 'mantaSepoliaTestnet',
    chainId: 3441006,
    networkId: 3441006,
    slip44: 1,
    icon: 'manta',
    explorers: [
      {
        name: 'manta-testnet Explorer',
        url: 'https://pacific-explorer.sepolia-testnet.manta.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'AltLayer Zero Gas Network',
    chain: 'ETH',
    rpc: [ 'https://zero.alt.technology' ],
    faucets: [],
    nativeCurrency: { name: 'ZERO', symbol: 'ZERO', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://altlayer.io',
    shortName: 'alt-zerogas',
    chainId: 4000003,
    networkId: 4000003,
    icon: 'altlayer',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://zero-explorer.alt.technology',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Worlds Caldera',
    chain: 'WCal',
    rpc: [ 'https://worlds-test.calderachain.xyz/http' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://caldera.xyz/',
    shortName: 'worldscal',
    chainId: 4281033,
    networkId: 4281033,
    icon: 'ethereum',
    explorers: []
  },
  {
    name: 'MXC Wannsee zkEVM Testnet',
    chain: 'MXC zkEVM',
    icon: 'mxc',
    rpc: [ 'https://wannsee-rpc.mxc.com' ],
    faucets: [],
    nativeCurrency: { name: 'MXC Wannsee zkEVM Testnet', symbol: 'MXC', decimals: 18 },
    infoURL: 'https://wannsee.mxc.com/docs/intro',
    shortName: 'MXCdiscontinued',
    chainId: 5167003,
    networkId: 5167003,
    slip44: 1,
    explorers: [
      {
        name: 'MXC Wannsee zkEVM Testnet',
        url: 'https://wannsee-explorer.mxc.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Moonchain Geneva Testnet',
    chain: 'MXC zkEVM',
    icon: 'mxc',
    rpc: [ 'https://geneva-rpc.moonchain.com' ],
    faucets: [],
    nativeCurrency: { name: 'Moonchain Geneva Testnet', symbol: 'MXC', decimals: 18 },
    infoURL: 'https://doc.mxc.com/docs/intro',
    shortName: 'MXC',
    chainId: 5167004,
    networkId: 5167004,
    slip44: 1,
    explorers: [
      {
        name: 'Moonchain Geneva Testnet',
        url: 'https://geneva-explorer.moonchain.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Electroneum Testnet',
    chain: 'Electroneum',
    rpc: [ 'https://testnet-rpc.electroneum.com' ],
    faucets: [],
    nativeCurrency: { name: 'Electroneum', symbol: 'ETN', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://electroneum.com',
    shortName: 'etn-testnet',
    chainId: 5201420,
    networkId: 5201420,
    slip44: 1,
    icon: 'electroneum',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://blockexplorer.thesecurityteam.rocks',
        icon: 'electroneum',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Imversed Mainnet',
    chain: 'Imversed',
    rpc: [
      'https://jsonrpc.imversed.network',
      'https://ws-jsonrpc.imversed.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Imversed Token', symbol: 'IMV', decimals: 18 },
    infoURL: 'https://imversed.com',
    shortName: 'imversed',
    chainId: 5555555,
    networkId: 5555555,
    icon: 'imversed',
    explorers: [
      {
        name: 'Imversed EVM explorer (Blockscout)',
        url: 'https://txe.imversed.network',
        icon: 'imversed',
        standard: 'EIP3091'
      },
      {
        name: 'Imversed Cosmos Explorer (Big Dipper)',
        url: 'https://tex-c.imversed.com',
        icon: 'imversed',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Imversed Testnet',
    chain: 'Imversed',
    rpc: [
      'https://jsonrpc-test.imversed.network',
      'https://ws-jsonrpc-test.imversed.network'
    ],
    faucets: [],
    nativeCurrency: { name: 'Imversed Token', symbol: 'IMV', decimals: 18 },
    infoURL: 'https://imversed.com',
    shortName: 'imversed-testnet',
    chainId: 5555558,
    networkId: 5555558,
    slip44: 1,
    icon: 'imversed',
    explorers: [
      {
        name: 'Imversed EVM Explorer (Blockscout)',
        url: 'https://txe-test.imversed.network',
        icon: 'imversed',
        standard: 'EIP3091'
      },
      {
        name: 'Imversed Cosmos Explorer (Big Dipper)',
        url: 'https://tex-t.imversed.com',
        icon: 'imversed',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Astar zKyoto',
    shortName: 'azkyt',
    title: 'Astar zkEVM Testnet zKyoto',
    chain: 'ETH',
    icon: 'astarzk',
    rpc: [
      'https://rpc.startale.com/zkyoto',
      'https://rpc.zkyoto.gelato.digital'
    ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://astar.network',
    chainId: 6038361,
    networkId: 6038361,
    explorers: [
      {
        name: 'Blockscout zKyoto explorer',
        url: 'https://astar-zkyoto.blockscout.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [
        { url: 'https://portal.astar.network' },
        { url: 'https://bridge.gelato.network/bridge/astar-zkyoto' }
      ]
    }
  },
  {
    name: 'Safe(AnWang) Mainnet',
    chain: 'Safe(AnWang)',
    icon: 'safe-anwang',
    rpc: [ 'https://rpc.anwang.com' ],
    faucets: [],
    nativeCurrency: { name: 'SAFE(AnWang)', symbol: 'SAFE', decimals: 18 },
    infoURL: 'https://www.anwang.com',
    shortName: 'SafeMainnet',
    chainId: 6666665,
    networkId: 6666665,
    explorers: [
      {
        name: 'Safe(AnWang) Explorer',
        url: 'http://safe4.anwang.com',
        icon: 'safe-anwang',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Safe(AnWang) Testnet',
    chain: 'Safe(AnWang)',
    icon: 'safe-anwang',
    rpc: [ 'https://rpc-testnet.anwang.com' ],
    faucets: [],
    nativeCurrency: { name: 'SAFE(AnWang)', symbol: 'SAFE', decimals: 18 },
    infoURL: 'https://www.anwang.com',
    shortName: 'SafeTestnet',
    chainId: 6666666,
    networkId: 6666666,
    explorers: [
      {
        name: 'Safe(AnWang) Testnet Explorer',
        url: 'http://safe4-testnet.anwang.com',
        icon: 'safe-anwang',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Saakuru Mainnet',
    chain: 'Saakuru',
    icon: 'saakuru',
    rpc: [ 'https://rpc.saakuru.network' ],
    faucets: [],
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    infoURL: 'https://saakuru.network',
    shortName: 'saakuru',
    chainId: 7225878,
    networkId: 7225878,
    explorers: [
      {
        name: 'saakuru-explorer',
        url: 'https://explorer.saakuru.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'OpenVessel',
    chain: 'VSL',
    icon: 'vsl',
    rpc: [ 'https://mainnet-external.openvessel.io' ],
    faucets: [],
    nativeCurrency: { name: 'Vessel ETH', symbol: 'VETH', decimals: 18 },
    infoURL: 'https://www.openvessel.io',
    shortName: 'vsl',
    chainId: 7355310,
    networkId: 7355310,
    explorers: [
      {
        name: 'openvessel-mainnet',
        url: 'https://mainnet-explorer.openvessel.io',
        standard: 'none'
      }
    ]
  },
  {
    name: 'QL1 Testnet',
    chain: 'QOM',
    status: 'incubating',
    rpc: [ 'https://rpc.testnet.qom.one' ],
    faucets: [ 'https://faucet.qom.one' ],
    nativeCurrency: { name: 'Shiba Predator', symbol: 'QOM', decimals: 18 },
    infoURL: 'https://qom.one',
    shortName: 'tqom',
    chainId: 7668378,
    networkId: 7668378,
    slip44: 1,
    icon: 'qom',
    explorers: [
      {
        name: 'QL1 Testnet Explorer',
        url: 'https://testnet.qom.one',
        icon: 'qom',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Musicoin',
    chain: 'MUSIC',
    rpc: [ 'https://mewapi.musicoin.tw' ],
    faucets: [],
    nativeCurrency: { name: 'Musicoin', symbol: 'MUSIC', decimals: 18 },
    infoURL: 'https://musicoin.tw',
    shortName: 'music',
    chainId: 7762959,
    networkId: 7762959,
    slip44: 184
  },
  {
    name: 'Zora',
    chain: 'ETH',
    rpc: [ 'https://rpc.zora.energy/' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    icon: 'zora',
    infoURL: 'https://zora.energy',
    shortName: 'zora',
    chainId: 7777777,
    networkId: 7777777,
    explorers: [
      {
        name: 'Zora Network Explorer',
        url: 'https://explorer.zora.energy',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Plian Mainnet Subchain 1',
    chain: 'Plian',
    rpc: [ 'https://mainnet.plian.io/child_0' ],
    faucets: [],
    nativeCurrency: { name: 'Plian Token', symbol: 'PI', decimals: 18 },
    infoURL: 'https://plian.org',
    shortName: 'plian-mainnet-l2',
    chainId: 8007736,
    networkId: 8007736,
    explorers: [
      {
        name: 'piscan',
        url: 'https://piscan.plian.org/child_0',
        standard: 'EIP3091'
      }
    ],
    parent: { chain: 'eip155-2099156', type: 'L2' }
  },
  {
    name: 'Hokum',
    chain: 'Hokum',
    icon: 'hokum',
    rpc: [ 'https://mainnet.hokum.gg' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://hokum.gg',
    shortName: 'hokum',
    chainId: 8080808,
    networkId: 8080808,
    explorers: [
      {
        name: 'Hokum Explorer',
        url: 'https://explorer.hokum.gg',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'HAPchain',
    chain: 'HAPchain',
    rpc: [ 'https://jsonrpc.hap.land' ],
    faucets: [],
    nativeCurrency: { name: 'HAP', symbol: 'HAP', decimals: 18 },
    infoURL: 'https://hap.land',
    shortName: 'hap',
    chainId: 8794598,
    networkId: 8794598,
    icon: 'hap',
    explorers: [
      {
        name: 'HAP EVM Explorer (Blockscout)',
        url: 'https://blockscout.hap.land',
        standard: 'none',
        icon: 'hap'
      }
    ]
  },
  {
    name: 'Quarix Testnet',
    chain: 'Quarix',
    status: 'incubating',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'QARE', symbol: 'QARE', decimals: 18 },
    infoURL: '',
    shortName: 'quarix-testnet',
    chainId: 8888881,
    networkId: 8888881,
    slip44: 1,
    icon: 'quarix',
    explorers: []
  },
  {
    name: 'Quarix',
    chain: 'Quarix',
    status: 'incubating',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'QARE', symbol: 'QARE', decimals: 18 },
    infoURL: '',
    shortName: 'quarix',
    chainId: 8888888,
    networkId: 8888888,
    icon: 'quarix',
    explorers: []
  },
  {
    name: 'XCAP',
    title: 'XCAP Mainnet',
    chain: 'XCAP',
    rpc: [
      'https://xcap-mainnet.relay.xcap.network/znzvh2ueyvm2yts5fv5gnul395jbkfb2/rpc1'
    ],
    faucets: [],
    nativeCurrency: { name: 'Gas', symbol: 'GAS', decimals: 18 },
    infoURL: 'https://xcap.network/',
    shortName: 'xcap',
    chainId: 9322252,
    networkId: 9322252,
    icon: 'xcap',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://xcap-mainnet.explorer.xcap.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Milvine',
    title: 'XCAP Testnet Milvine',
    chain: 'XCAP',
    rpc: [
      'https://xcap-milvine.relay.xcap.network/zj5l55ftsgi027kz4nf14vs8d89inego/rpc1'
    ],
    faucets: [],
    nativeCurrency: { name: 'Gas', symbol: 'GAS', decimals: 18 },
    infoURL: 'https://xcap.network/',
    shortName: 'milv',
    chainId: 9322253,
    networkId: 9322253,
    icon: 'xcap',
    explorers: [
      {
        name: 'blockscout',
        url: 'https://xcap-milvine.explorer.xcap.network',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Plian Testnet Subchain 1',
    chain: 'Plian',
    rpc: [ 'https://testnet.plian.io/child_test' ],
    faucets: [],
    nativeCurrency: { name: 'Plian Token', symbol: 'TPI', decimals: 18 },
    infoURL: 'https://plian.org/',
    shortName: 'plian-testnet-l2',
    chainId: 10067275,
    networkId: 10067275,
    slip44: 1,
    explorers: [
      {
        name: 'piscan',
        url: 'https://testnet.plian.org/child_test',
        standard: 'EIP3091'
      }
    ],
    parent: { chain: 'eip155-16658437', type: 'L2' }
  },
  {
    name: 'Soverun Mainnet',
    chain: 'SVRN',
    icon: 'soverun',
    rpc: [ 'https://mainnet-rpc.soverun.com' ],
    faucets: [ 'https://faucet.soverun.com' ],
    nativeCurrency: { name: 'Soverun', symbol: 'SVRN', decimals: 18 },
    infoURL: 'https://soverun.com',
    shortName: 'SVRNm',
    chainId: 10101010,
    networkId: 10101010,
    explorers: [
      {
        name: 'Soverun',
        url: 'https://explorer.soverun.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Sepolia',
    title: 'Ethereum Testnet Sepolia',
    chain: 'ETH',
    rpc: [
      'https://rpc.sepolia.org',
      'https://rpc2.sepolia.org',
      'https://rpc-sepolia.rockx.com',
      'https://rpc.sepolia.ethpandaops.io',
      'https://sepolia.infura.io/v3/${INFURA_API_KEY}',
      'wss://sepolia.infura.io/v3/${INFURA_API_KEY}',
      'https://sepolia.gateway.tenderly.co',
      'wss://sepolia.gateway.tenderly.co',
      'https://ethereum-sepolia-rpc.publicnode.com',
      'wss://ethereum-sepolia-rpc.publicnode.com',
      'https://sepolia.drpc.org',
      'wss://sepolia.drpc.org'
    ],
    faucets: [
      'http://fauceth.komputing.org?chain=11155111&address=${ADDRESS}'
    ],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://sepolia.otterscan.io',
    shortName: 'sep',
    chainId: 11155111,
    networkId: 11155111,
    slip44: 1,
    explorers: [
      {
        name: 'etherscan-sepolia',
        url: 'https://sepolia.etherscan.io',
        standard: 'EIP3091'
      },
      {
        name: 'otterscan-sepolia',
        url: 'https://sepolia.otterscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'OP Sepolia Testnet',
    chain: 'ETH',
    rpc: [
      'https://sepolia.optimism.io',
      'https://optimism-sepolia.drpc.org',
      'wss://optimism-sepolia.drpc.org'
    ],
    faucets: [ 'https://app.optimism.io/faucet' ],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://optimism.io',
    shortName: 'opsep',
    chainId: 11155420,
    networkId: 11155420,
    slip44: 1,
    explorers: [
      {
        name: 'opscout',
        url: 'https://optimism-sepolia.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PepChain Churchill',
    chain: 'PEP',
    rpc: [ 'https://churchill-rpc.pepchain.io' ],
    faucets: [],
    nativeCurrency: { name: 'PepChain Churchill Ether', symbol: 'TPEP', decimals: 18 },
    infoURL: 'https://pepchain.io',
    shortName: 'tpep',
    chainId: 13371337,
    networkId: 13371337
  },
  {
    name: 'Anduschain Mainnet',
    chain: 'anduschain',
    rpc: [ 'https://rpc.anduschain.io/rpc', 'wss://rpc.anduschain.io/ws' ],
    faucets: [],
    nativeCurrency: { name: 'DAON', symbol: 'DEB', decimals: 18 },
    infoURL: 'https://anduschain.io/',
    shortName: 'anduschain-mainnet',
    chainId: 14288640,
    networkId: 14288640,
    explorers: [
      {
        name: 'anduschain explorer',
        url: 'https://explorer.anduschain.io',
        icon: 'daon',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Plian Testnet Main',
    chain: 'Plian',
    rpc: [ 'https://testnet.plian.io/testnet' ],
    faucets: [],
    nativeCurrency: { name: 'Plian Testnet Token', symbol: 'TPI', decimals: 18 },
    infoURL: 'https://plian.org',
    shortName: 'plian-testnet',
    chainId: 16658437,
    networkId: 16658437,
    slip44: 1,
    explorers: [
      {
        name: 'piscan',
        url: 'https://testnet.plian.org/testnet',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'IOLite',
    chain: 'ILT',
    rpc: [ 'https://net.iolite.io' ],
    faucets: [],
    nativeCurrency: { name: 'IOLite Ether', symbol: 'ILT', decimals: 18 },
    infoURL: 'https://iolite.io',
    shortName: 'ilt',
    chainId: 18289463,
    networkId: 18289463
  },
  {
    name: 'Stability Testnet',
    chain: 'stabilityTestnet',
    icon: 'stabilitytestnet',
    rpc: [ 'https://free.testnet.stabilityprotocol.com' ],
    faucets: [],
    nativeCurrency: { name: 'FREE', symbol: 'FREE', decimals: 18 },
    infoURL: 'https://stabilityprotocol.com',
    shortName: 'stabilitytestnet',
    chainId: 20180427,
    networkId: 20180427,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://stability-testnet.blockscout.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SmartMesh Mainnet',
    chain: 'Spectrum',
    rpc: [ 'https://jsonapi1.smartmesh.cn' ],
    faucets: [],
    nativeCurrency: { name: 'SmartMesh Native Token', symbol: 'SMT', decimals: 18 },
    infoURL: 'https://smartmesh.io',
    shortName: 'spectrum',
    chainId: 20180430,
    networkId: 1,
    explorers: [
      {
        name: 'spectrum',
        url: 'https://spectrum.pub',
        standard: 'none'
      }
    ]
  },
  {
    name: 'quarkblockchain',
    chain: 'QKI',
    rpc: [
      'https://hz.rpc.qkiscan.cn',
      'https://jp.rpc.qkiscan.io',
      'https://rpc1.qkiscan.io',
      'https://rpc2.qkiscan.io',
      'https://rpc3.qkiscan.io'
    ],
    faucets: [],
    nativeCurrency: {
      name: 'quarkblockchain Native Token',
      symbol: 'QKI',
      decimals: 18
    },
    infoURL: 'https://quarkblockchain.org/',
    shortName: 'qki',
    chainId: 20181205,
    networkId: 20181205,
    explorers: [
      {
        name: 'qkiscan',
        url: 'https://qkiscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Pego Network',
    chain: 'PEGO',
    rpc: [
      'https://pegorpc.com',
      'https://node1.pegorpc.com',
      'https://node2.pegorpc.com',
      'https://node3.pegorpc.com'
    ],
    faucets: [],
    nativeCurrency: { name: 'Pego Native Token', symbol: 'PG', decimals: 18 },
    infoURL: 'https://pego.network',
    shortName: 'pg',
    chainId: 20201022,
    networkId: 20201022,
    icon: 'pego',
    explorers: [
      {
        name: 'Pego Network Explorer',
        url: 'https://scan.pego.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DeBank Sepolia Testnet',
    chain: 'DeBank',
    rpc: [ 'https://sepolia-rpc.testnet.debank.com' ],
    faucets: [],
    icon: 'debank',
    nativeCurrency: { name: 'DeBank USD', symbol: 'USD', decimals: 18 },
    infoURL: 'https://debank.com',
    shortName: 'dbkse',
    chainId: 20240324,
    networkId: 20240324,
    slip44: 1,
    explorers: [
      {
        name: 'DeBank Chain Explorer',
        url: 'https://sepolia-explorer.testnet.debank.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Hokum Testnet',
    chain: 'HokumTestnet',
    icon: 'hokum',
    rpc: [ 'https://testnet.hokum.gg' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://hokum.gg',
    shortName: 'hokum-testnet',
    chainId: 20482050,
    networkId: 20482050,
    explorers: [
      {
        name: 'Hokum Explorer',
        url: 'https://testnet-explorer.hokum.gg',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Excelon Mainnet',
    chain: 'XLON',
    icon: 'xlon',
    rpc: [ 'https://edgewallet1.xlon.org/' ],
    faucets: [],
    nativeCurrency: { name: 'Excelon', symbol: 'xlon', decimals: 18 },
    infoURL: 'https://xlon.org',
    shortName: 'xlon',
    chainId: 22052002,
    networkId: 22052002,
    explorers: [
      {
        name: 'Excelon explorer',
        url: 'https://explorer.excelon.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Excoincial Chain Volta-Testnet',
    chain: 'TEXL',
    icon: 'exl',
    rpc: [ 'https://testnet-rpc.exlscan.com' ],
    faucets: [ 'https://faucet.exlscan.com' ],
    nativeCurrency: { name: 'TExlcoin', symbol: 'TEXL', decimals: 18 },
    infoURL: '',
    shortName: 'exlvolta',
    chainId: 27082017,
    networkId: 27082017,
    slip44: 1,
    explorers: [
      {
        name: 'exlscan',
        url: 'https://testnet-explorer.exlscan.com',
        icon: 'exl',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Excoincial Chain Mainnet',
    chain: 'EXL',
    icon: 'exl',
    rpc: [ 'https://rpc.exlscan.com' ],
    faucets: [],
    nativeCurrency: { name: 'Exlcoin', symbol: 'EXL', decimals: 18 },
    infoURL: '',
    shortName: 'exl',
    chainId: 27082022,
    networkId: 27082022,
    explorers: [
      {
        name: 'exlscan',
        url: 'https://exlscan.com',
        icon: 'exl',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ancient8 Testnet',
    chain: 'Ancient8',
    icon: 'ancient8',
    rpc: [ 'https://rpcv2-testnet.ancient8.gg' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://ancient8.gg/',
    shortName: 'a8',
    chainId: 28122024,
    networkId: 28122024,
    slip44: 1,
    explorers: [
      {
        name: 'scan-testnet',
        url: 'https://scanv2-testnet.ancient8.gg',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Auxilium Network Mainnet',
    chain: 'AUX',
    rpc: [ 'https://rpc.auxilium.global' ],
    faucets: [],
    nativeCurrency: { name: 'Auxilium coin', symbol: 'AUX', decimals: 18 },
    infoURL: 'https://auxilium.global',
    shortName: 'auxi',
    chainId: 28945486,
    networkId: 28945486,
    slip44: 344
  },
  {
    name: 'Flachain Mainnet',
    chain: 'FLX',
    icon: 'flacoin',
    rpc: [ 'https://flachain.flaexchange.top/' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: 'Flacoin', symbol: 'FLA', decimals: 18 },
    infoURL: 'https://www.flaexchange.top',
    shortName: 'fla',
    chainId: 29032022,
    networkId: 29032022,
    explorers: [
      {
        name: 'FLXExplorer',
        url: 'https://explorer.flaexchange.top',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Filecoin - Local testnet',
    chain: 'FIL',
    status: 'incubating',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'testnet filecoin', symbol: 'tFIL', decimals: 18 },
    infoURL: 'https://filecoin.io',
    shortName: 'filecoin-local',
    icon: 'filecoin',
    chainId: 31415926,
    networkId: 31415926,
    slip44: 1,
    explorers: []
  },
  {
    name: 'Joys Digital Mainnet',
    chain: 'JOYS',
    rpc: [ 'https://node.joys.digital' ],
    faucets: [],
    nativeCurrency: { name: 'JOYS', symbol: 'JOYS', decimals: 18 },
    infoURL: 'https://joys.digital',
    shortName: 'JOYS',
    chainId: 35855456,
    networkId: 35855456
  },
  {
    name: 'SKALE Nebula Hub Testnet',
    title: 'SKALE Nebula Hub Testnet',
    chain: 'lanky-ill-funny-testnet',
    icon: 'nebula',
    rpc: [
      'https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet',
      'wss://testnet.skalenodes.com/v1/ws/lanky-ill-funny-testnet'
    ],
    faucets: [ 'https://www.sfuelstation.com/' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: 'https://nebulachain.io/',
    shortName: 'nebula-testnet',
    chainId: 37084624,
    networkId: 37084624,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Kingdom Chain',
    chain: 'KingdomChain',
    rpc: [ 'https://kingdomchain.observer/rpc' ],
    features: [ { name: 'EIP155' } ],
    faucets: [],
    nativeCurrency: { name: 'Kozi', symbol: 'KOZI', decimals: 18 },
    infoURL: 'https://www.beastkingdom.io/',
    shortName: 'kchain',
    chainId: 39916801,
    networkId: 39916801,
    explorers: [
      {
        name: 'TravelSong',
        url: 'https://www.beastkingdom.io/travelsong',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'maistestsubnet',
    chain: 'MAI',
    rpc: [
      'http://174.138.9.169:9650/ext/bc/VUKSzFZKckx4PoZF9gX5QAqLPxbLzvu1vcssPG5QuodaJtdHT/rpc'
    ],
    faucets: [],
    nativeCurrency: { name: 'maistestsubnet', symbol: 'MAI', decimals: 18 },
    infoURL: '',
    shortName: 'mais',
    chainId: 43214913,
    networkId: 43214913,
    slip44: 1,
    explorers: [
      {
        name: 'maistesntet',
        url: 'http://174.138.9.169:3006/?network=maistesntet',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Aquachain',
    chain: 'AQUA',
    rpc: [ 'https://c.onical.org', 'https://tx.aquacha.in/api' ],
    faucets: [ 'https://aquacha.in/faucet' ],
    nativeCurrency: { name: 'Aquachain Ether', symbol: 'AQUA', decimals: 18 },
    infoURL: 'https://aquachain.github.io',
    shortName: 'aqua',
    chainId: 61717561,
    networkId: 61717561,
    slip44: 61717561
  },
  {
    name: 'Autonity Bakerloo (Thames) Testnet',
    status: 'deprecated',
    chain: 'AUT',
    rpc: [],
    faucets: [ 'https://faucet.autonity.org/' ],
    nativeCurrency: { name: 'Bakerloo Auton', symbol: 'ATN', decimals: 18 },
    infoURL: 'https://autonity.org/',
    shortName: 'bakerloo-0',
    chainId: 65010000,
    networkId: 65010000,
    slip44: 1,
    icon: 'autonity',
    explorers: [
      {
        name: 'autonity-blockscout',
        url: 'https://bakerloo.autonity.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Autonity Bakerloo (Barada) Testnet',
    status: 'deprecated',
    chain: 'AUT',
    rpc: [],
    faucets: [ 'https://faucet.autonity.org/' ],
    nativeCurrency: { name: 'Bakerloo Auton', symbol: 'ATN', decimals: 18 },
    infoURL: 'https://autonity.org/',
    shortName: 'bakerloo-01',
    chainId: 65010001,
    networkId: 65010001,
    slip44: 1,
    icon: 'autonity',
    explorers: [
      {
        name: 'autonity-blockscout',
        url: 'https://bakerloo.autonity.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Autonity Bakerloo (Sumida) Testnet',
    chain: 'AUT',
    rpc: [
      'https://rpc1.bakerloo.autonity.org/',
      'wss://rpc1.bakerloo.autonity.org/ws/'
    ],
    faucets: [ 'https://faucet.autonity.org/' ],
    nativeCurrency: { name: 'Bakerloo Auton', symbol: 'ATN', decimals: 18 },
    infoURL: 'https://autonity.org/',
    shortName: 'bakerloo-02',
    chainId: 65010002,
    networkId: 65010002,
    slip44: 1,
    icon: 'autonity',
    explorers: [
      {
        name: 'autonity-blockscout',
        url: 'https://bakerloo.autonity.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Autonity Piccadilly (Thames) Testnet',
    status: 'deprecated',
    chain: 'AUT',
    rpc: [],
    faucets: [ 'https://faucet.autonity.org/' ],
    nativeCurrency: { name: 'Piccadilly Auton', symbol: 'ATN', decimals: 18 },
    infoURL: 'https://autonity.org/',
    shortName: 'piccadilly-0',
    chainId: 65100000,
    networkId: 65100000,
    slip44: 1,
    icon: 'autonity',
    explorers: [
      {
        name: 'autonity-blockscout',
        url: 'https://piccadilly.autonity.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Autonity Piccadilly (Barada) Testnet',
    status: 'deprecated',
    chain: 'AUT',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Piccadilly Auton', symbol: 'ATN', decimals: 18 },
    infoURL: 'https://autonity.org/',
    shortName: 'piccadilly-01',
    chainId: 65100001,
    networkId: 65100001,
    slip44: 1,
    icon: 'autonity',
    explorers: [
      {
        name: 'autonity-blockscout',
        url: 'https://piccadilly.autonity.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Autonity Piccadilly (Sumida) Testnet',
    chain: 'AUT',
    rpc: [
      'https://rpc1.piccadilly.autonity.org/',
      'wss://rpc1.piccadilly.autonity.org/ws/'
    ],
    faucets: [],
    nativeCurrency: { name: 'Piccadilly Auton', symbol: 'ATN', decimals: 18 },
    infoURL: 'https://autonity.org/',
    shortName: 'piccadilly-02',
    chainId: 65100002,
    networkId: 65100002,
    slip44: 1,
    icon: 'autonity',
    explorers: [
      {
        name: 'autonity-blockscout',
        url: 'https://piccadilly.autonity.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Frame Testnet',
    chain: 'ETH',
    rpc: [ 'https://rpc.testnet.frame.xyz/http' ],
    faucets: [ 'https://faucet.triangleplatform.com/frame/testnet' ],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    icon: 'frameTestnet',
    infoURL: 'https://www.frame.xyz/',
    shortName: 'frametest',
    chainId: 68840142,
    networkId: 68840142,
    slip44: 1,
    explorers: [
      {
        name: 'Frame Testnet Explorer',
        url: 'https://explorer.testnet.frame.xyz',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: '0xHash Testnet',
    chain: 'HETH',
    icon: 'ethereum',
    rpc: [ 'https://rpc-test.0xhash.io' ],
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    faucets: [],
    nativeCurrency: { name: '0xHash', symbol: 'HETH', decimals: 18 },
    infoURL: 'https://0xhash.io',
    shortName: 'HETH',
    chainId: 77787778,
    networkId: 77787778,
    slip44: 1,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://test.0xhashscan.io',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://app.optimism.io/bridge/deposit' } ]
    }
  },
  {
    name: 'T.E.A.M Blockchain',
    chain: 'TEAM',
    icon: 'team',
    rpc: [ 'https://rpc.teamblockchain.team' ],
    faucets: [],
    nativeCurrency: { name: 'TEAM', symbol: '$TEAM', decimals: 18 },
    features: [ { name: 'EIP155' }, { name: 'EIP1559' } ],
    infoURL: 'https://teamblockchain.team',
    shortName: 'team',
    chainId: 88888888,
    networkId: 88888888,
    explorers: [
      {
        name: 'teamscan',
        url: 'https://teamblockchain.team',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Polygon Blackberry',
    title: 'Polygon Blackberry Testnet',
    chain: 'ETH',
    rpc: [
      'https://rpc.polygon-blackberry.gelato.digital',
      'wss://ws.polygon-blackberry.gelato.digital'
    ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://raas.gelato.network/rollups/details/public/polygon-blackberry',
    shortName: 'polygon-blackberry',
    chainId: 94204209,
    networkId: 94204209,
    slip44: 60,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://polygon-blackberry.gelatoscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [
        {
          url: 'https://bridge.gelato.network/bridge/polygon-blackberry'
        }
      ]
    },
    status: 'active'
  },
  {
    name: 'Joys Digital TestNet',
    chain: 'TOYS',
    rpc: [ 'https://toys.joys.cash/' ],
    faucets: [ 'https://faucet.joys.digital/' ],
    nativeCurrency: { name: 'TOYS', symbol: 'TOYS', decimals: 18 },
    infoURL: 'https://joys.digital',
    shortName: 'TOYS',
    chainId: 99415706,
    networkId: 99415706,
    slip44: 1
  },
  {
    name: 'Cyber Testnet',
    chain: 'Cyber',
    rpc: [
      'https://cyber-testnet.alt.technology/',
      'wss://cyber-testnet.alt.technology/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    icon: 'cyber',
    infoURL: 'https://cyber.co/',
    shortName: 'cysep',
    chainId: 111557560,
    networkId: 111557560,
    explorers: [
      {
        name: 'Cyber Testnet Explorer',
        url: 'https://testnet.cyberscan.co',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [
        {
          url: 'https://op-bridge.alt.technology/deposit?id=111557560'
        }
      ]
    }
  },
  {
    name: 'OP Celestia Raspberry',
    title: 'OP Celestia Raspberry Testnet',
    chain: 'ETH',
    rpc: [
      'https://rpc.opcelestia-raspberry.gelato.digital',
      'wss://ws.opcelestia-raspberry.gelato.digital'
    ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://raas.gelato.network/rollups/details/public/opcelestia-raspberry',
    shortName: 'opcelestia-raspberry',
    chainId: 123420111,
    networkId: 123420111,
    slip44: 60,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://opcelestia-raspberry.gelatoscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [
        {
          url: 'https://bridge.gelato.network/bridge/opcelestia-raspberry'
        }
      ]
    },
    status: 'active'
  },
  {
    name: 'Plume Testnet',
    title: 'Plume Sepolia Rollup Testnet',
    chain: 'ETH',
    rpc: [
      'https://testnet-rpc.plumenetwork.xyz/http',
      'wss://testnet-rpc.plumenetwork.xyz/ws'
    ],
    faucets: [],
    nativeCurrency: { name: 'Plume Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://www.plumenetwork.xyz/',
    shortName: 'plume-testnet',
    chainId: 161221135,
    networkId: 161221135,
    slip44: 1,
    icon: 'plume',
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://testnet-explorer.plumenetwork.xyz',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [ { url: 'https://testnet-bridge.plumenetwork.xyz' } ]
    }
  },
  {
    name: 'Blast Sepolia Testnet',
    chain: 'ETH',
    rpc: [
      'https://sepolia.blast.io',
      'https://blast-sepolia.drpc.org',
      'wss://blast-sepolia.drpc.org'
    ],
    faucets: [ 'https://faucet.quicknode.com/blast/sepolia' ],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://blast.io/',
    shortName: 'blastsepolia',
    chainId: 168587773,
    networkId: 168587773,
    icon: 'blast',
    explorers: [
      {
        name: 'Blast Sepolia Explorer',
        url: 'https://testnet.blastscan.io',
        icon: 'blast',
        standard: 'EIP3091'
      }
    ],
    parent: { type: 'L2', chain: 'eip155-11155111' }
  },
  {
    name: 'Gather Mainnet Network',
    chain: 'GTH',
    rpc: [ 'https://mainnet.gather.network' ],
    faucets: [],
    nativeCurrency: { name: 'Gather', symbol: 'GTH', decimals: 18 },
    infoURL: 'https://gather.network',
    shortName: 'GTH',
    chainId: 192837465,
    networkId: 192837465,
    icon: 'gather',
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer.gather.network',
        icon: 'gather',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Kanazawa',
    title: 'Meld Testnet Kanazawa',
    chain: 'Kanazawa',
    rpc: [ 'https://testnet-rpc.meld.com' ],
    faucets: [],
    features: [],
    nativeCurrency: { name: 'gMeld', symbol: 'gMELD', decimals: 18 },
    icon: 'meld',
    infoURL: 'https://meld.com',
    shortName: 'kanazawa',
    chainId: 222000222,
    networkId: 222000222,
    slip44: 1,
    explorers: [
      {
        name: 'explorer',
        url: 'https://testnet.meldscan.io',
        icon: 'meld',
        standard: 'EIP3091'
      },
      {
        name: 'explorer',
        url: 'https://subnets-test.avax.network/meld',
        icon: 'meld',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Neon EVM Devnet',
    chain: 'Solana',
    rpc: [
      'https://devnet.neonevm.org',
      'https://neon-evm-devnet.drpc.org',
      'wss://neon-evm-devnet.drpc.org'
    ],
    faucets: [ 'https://neonfaucet.org' ],
    icon: 'neon',
    nativeCurrency: { name: 'Neon', symbol: 'NEON', decimals: 18 },
    infoURL: 'https://neon-labs.org',
    shortName: 'neonevm-devnet',
    chainId: 245022926,
    networkId: 245022926,
    explorers: [
      {
        name: 'neonscan',
        url: 'https://devnet.neonscan.org',
        standard: 'EIP3091'
      },
      {
        name: 'blockscout',
        url: 'https://neon-devnet.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Neon EVM Mainnet',
    chain: 'Solana',
    rpc: [
      'https://neon-proxy-mainnet.solana.p2p.org',
      'https://neon-evm.drpc.org',
      'wss://neon-evm.drpc.org'
    ],
    faucets: [],
    icon: 'neon',
    nativeCurrency: { name: 'Neon', symbol: 'NEON', decimals: 18 },
    infoURL: 'https://neonevm.org',
    shortName: 'neonevm-mainnet',
    chainId: 245022934,
    networkId: 245022934,
    explorers: [
      {
        name: 'neonscan',
        url: 'https://neonscan.org',
        standard: 'EIP3091'
      },
      {
        name: 'native',
        url: 'https://neon.blockscout.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Neon EVM TestNet',
    status: 'deprecated',
    chain: 'Solana',
    rpc: [ 'https://testnet.neonevm.org' ],
    faucets: [],
    icon: 'neon',
    nativeCurrency: { name: 'Neon', symbol: 'NEON', decimals: 18 },
    infoURL: 'https://neon-labs.org',
    shortName: 'neonevm-testnet',
    chainId: 245022940,
    networkId: 245022940,
    slip44: 1,
    explorers: [
      {
        name: 'native',
        url: 'https://testnet.explorer.neon-labs.org',
        standard: 'EIP3091'
      },
      {
        name: 'neonscan',
        url: 'https://testnet.neonscan.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Razor Skale Chain',
    chain: 'Razor Schain',
    icon: 'razornetwork',
    rpc: [ 'https://mainnet.skalenodes.com/v1/turbulent-unique-scheat' ],
    faucets: [ 'https://faucet.razorscan.io/' ],
    nativeCurrency: { name: 'sFuel', symbol: 'SFUEL', decimals: 18 },
    infoURL: 'https://razor.network',
    shortName: 'razor',
    chainId: 278611351,
    networkId: 278611351,
    explorers: [
      {
        name: 'turbulent-unique-scheat',
        url: 'https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'OneLedger Mainnet',
    chain: 'OLT',
    icon: 'oneledger',
    rpc: [ 'https://mainnet-rpc.oneledger.network' ],
    faucets: [],
    nativeCurrency: { name: 'OLT', symbol: 'OLT', decimals: 18 },
    infoURL: 'https://oneledger.io',
    shortName: 'oneledger',
    chainId: 311752642,
    networkId: 311752642,
    explorers: [
      {
        name: 'OneLedger Block Explorer',
        url: 'https://mainnet-explorer.oneledger.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Meld',
    title: 'Meld Mainnet',
    chain: 'MELD',
    rpc: [ 'https://rpc-1.meld.com' ],
    faucets: [],
    features: [],
    nativeCurrency: { name: 'gMeld', symbol: 'gMELD', decimals: 18 },
    icon: 'meld',
    infoURL: 'https://meld.com',
    shortName: 'meld',
    chainId: 333000333,
    networkId: 333000333,
    explorers: [
      {
        name: 'explorer',
        url: 'https://meldscan.io',
        icon: 'meld',
        standard: 'EIP3091'
      },
      {
        name: 'explorer',
        url: 'https://subnets.avax.network/meld',
        icon: 'meld',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Deprecated SKALE Calypso Hub Testnet',
    title: 'Deprecated Calypso NFT Hub Testnet',
    status: 'deprecated',
    chain: 'staging-utter-unripe-menkar',
    icon: 'calypso',
    rpc: [
      'https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar'
    ],
    faucets: [ 'https://sfuel.dirtroad.dev/staging' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: 'https://calypsohub.network/',
    shortName: 'deprected-calypso-testnet',
    chainId: 344106930,
    networkId: 344106930,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Gather Testnet Network',
    chain: 'GTH',
    rpc: [ 'https://testnet.gather.network' ],
    faucets: [],
    nativeCurrency: { name: 'Gather', symbol: 'GTH', decimals: 18 },
    infoURL: 'https://gather.network',
    shortName: 'tGTH',
    chainId: 356256156,
    networkId: 356256156,
    slip44: 1,
    icon: 'gather',
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://testnet-explorer.gather.network',
        icon: 'gather',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Deprecated SKALE Europa Hub Testnet',
    title: 'Deprecated Europa Hub Testnet',
    status: 'deprecated',
    chain: 'staging-legal-crazy-castor',
    icon: 'europa',
    rpc: [
      'https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor'
    ],
    faucets: [ 'https://sfuel.dirtroad.dev/staging' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: 'https://europahub.network/',
    shortName: 'deprecated-europa-testnet',
    chainId: 476158412,
    networkId: 476158412,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Gather Devnet Network',
    chain: 'GTH',
    rpc: [ 'https://devnet.gather.network' ],
    faucets: [],
    nativeCurrency: { name: 'Gather', symbol: 'GTH', decimals: 18 },
    infoURL: 'https://gather.network',
    shortName: 'dGTH',
    chainId: 486217935,
    networkId: 486217935,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://devnet-explorer.gather.network',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Deprecated SKALE Nebula Hub Testnet',
    chain: 'staging-faint-slimy-achird',
    status: 'deprecated',
    icon: 'nebula',
    rpc: [
      'https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird',
      'wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird'
    ],
    faucets: [ 'https://sfuel.dirtroad.dev/staging' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: 'https://nebulachain.io/',
    shortName: 'deprecated-nebula-testnet',
    chainId: 503129905,
    networkId: 503129905,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Degen Chain',
    title: 'Degen Chain',
    chain: 'Degen',
    rpc: [ 'https://rpc.degen.tips' ],
    faucets: [],
    nativeCurrency: { name: 'DEGEN', symbol: 'DEGEN', decimals: 18 },
    infoURL: 'https://degen.tips',
    shortName: 'degen-chain',
    chainId: 666666666,
    networkId: 666666666,
    status: 'incubating',
    icon: 'degen'
  },
  {
    name: 'Ancient8',
    chain: 'Ancient8',
    icon: 'ancient8',
    rpc: [ 'https://rpc.ancient8.gg' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://ancient8.gg/',
    shortName: 'ancient8',
    chainId: 888888888,
    networkId: 888888888,
    explorers: [
      {
        name: 'Ancient8 Explorer',
        url: 'https://scan.ancient8.gg',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PTCESCAN Testnet',
    title: 'PTCESCAN Testnet',
    chain: 'PTCE',
    rpc: [ 'https://rpc-testnet.ptcscan.io' ],
    faucets: [ 'https://faucet.ptcscan.io/' ],
    nativeCurrency: { name: 'PTCE', symbol: 'PTCE', decimals: 18 },
    infoURL: 'https://ptcscan.io',
    shortName: 'PTCE',
    chainId: 889910245,
    networkId: 889910245,
    explorers: [
      {
        name: 'PTCESCAN Testnet Explorer',
        url: 'https://explorer-testnet.ptcscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PTCESCAN Mainnet',
    title: 'PTCESCAN Mainnet',
    chain: 'PTCE',
    rpc: [ 'https://rpc.ptcscan.io' ],
    faucets: [],
    nativeCurrency: { name: 'PTCE', symbol: 'PTCE', decimals: 18 },
    infoURL: 'https://ptcscan.io',
    shortName: 'POLYTECH',
    chainId: 889910246,
    networkId: 889910246,
    explorers: [
      {
        name: 'PTCESCAN Explorer',
        url: 'https://ptcscan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SKALE Calypso Hub Testnet',
    title: 'SKALE Calypso Hub Testnet',
    chain: 'giant-half-dual-testnet',
    icon: 'calypso',
    rpc: [ 'https://testnet.skalenodes.com/v1/giant-half-dual-testnet' ],
    faucets: [ 'https://www.sfuelstation.com/' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: 'https://calypsohub.network/',
    shortName: 'calypso-testnet',
    chainId: 974399131,
    networkId: 974399131,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://giant-half-dual-testnet.explorer.testnet.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Zora Sepolia Testnet',
    chain: 'ETH',
    rpc: [ 'https://sepolia.rpc.zora.energy' ],
    faucets: [],
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    icon: 'zoraSepoliaTestnet',
    infoURL: 'https://zora.energy',
    shortName: 'zsep',
    chainId: 999999999,
    networkId: 999999999,
    slip44: 1,
    explorers: [
      {
        name: 'Zora Sepolia Testnet Network Explorer',
        url: 'https://sepolia.explorer.zora.energy',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SKALE Titan Hub Testnet',
    title: 'SKALE Titan Hub Testnet',
    chain: 'aware-fake-trim-testnet',
    icon: 'titan',
    rpc: [
      'https://testnet.skalenodes.com/v1/aware-fake-trim-testnet',
      'wss://testnet.skalenodes.com/v1/ws/aware-fake-trim-testnet'
    ],
    faucets: [ 'https://www.sfuelstation.com/' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: '',
    shortName: 'titan-testnet',
    chainId: 1020352220,
    networkId: 1020352220,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'IPOS Network',
    chain: 'IPOS',
    rpc: [ 'https://rpc.iposlab.com', 'https://rpc2.iposlab.com' ],
    faucets: [],
    nativeCurrency: { name: 'IPOS Network Ether', symbol: 'IPOS', decimals: 18 },
    infoURL: 'https://iposlab.com',
    shortName: 'ipos',
    chainId: 1122334455,
    networkId: 1122334455
  },
  {
    name: 'CyberdeckNet',
    chain: 'cyberdeck',
    rpc: [ 'http://cybeth1.cyberdeck.eu:8545' ],
    faucets: [],
    nativeCurrency: { name: 'Cyb', symbol: 'CYB', decimals: 18 },
    infoURL: 'https://cyberdeck.eu',
    shortName: 'cyb',
    chainId: 1146703430,
    networkId: 1146703430,
    icon: 'cyberdeck',
    status: 'active',
    explorers: [
      {
        name: 'CybEthExplorer',
        url: 'http://cybeth1.cyberdeck.eu:8000',
        icon: 'cyberdeck',
        standard: 'none'
      }
    ]
  },
  {
    name: 'HUMAN Protocol',
    title: 'HUMAN Protocol',
    chain: 'wan-red-ain',
    rpc: [ 'https://mainnet.skalenodes.com/v1/wan-red-ain' ],
    faucets: [ 'https://dashboard.humanprotocol.org/faucet' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: 'https://www.humanprotocol.org',
    shortName: 'human-mainnet',
    chainId: 1273227453,
    networkId: 1273227453,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://wan-red-ain.explorer.mainnet.skalenodes.com',
        icon: 'human',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Aurora Mainnet',
    chain: 'NEAR',
    rpc: [
      'https://mainnet.aurora.dev',
      'https://aurora.drpc.org',
      'wss://aurora.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://aurora.dev',
    shortName: 'aurora',
    chainId: 1313161554,
    networkId: 1313161554,
    explorers: [
      {
        name: 'aurorascan.dev',
        url: 'https://aurorascan.dev',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Aurora Testnet',
    chain: 'NEAR',
    rpc: [
      'https://testnet.aurora.dev/',
      'https://aurora-testnet.drpc.org',
      'wss://aurora-testnet.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://aurora.dev',
    shortName: 'aurora-testnet',
    chainId: 1313161555,
    networkId: 1313161555,
    slip44: 1,
    explorers: [
      {
        name: 'aurorascan.dev',
        url: 'https://testnet.aurorascan.dev',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Aurora Betanet',
    chain: 'NEAR',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://aurora.dev',
    shortName: 'aurora-betanet',
    chainId: 1313161556,
    networkId: 1313161556
  },
  {
    name: 'PowerGold',
    chain: 'NEAR',
    rpc: [ 'https://powergold.aurora.dev' ],
    icon: 'powergold',
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://www.powergold.tech',
    shortName: 'powergold',
    chainId: 1313161560,
    networkId: 1313161560,
    explorers: [
      {
        name: 'PowerGold explorer',
        url: 'https://explorer.powergold.aurora.dev',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SKALE Titan Hub',
    chain: 'parallel-stormy-spica',
    icon: 'titan',
    rpc: [
      'https://mainnet.skalenodes.com/v1/parallel-stormy-spica',
      'wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica'
    ],
    faucets: [ 'https://sfuel.skale.network/' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: '',
    shortName: 'titan-mainnet',
    chainId: 1350216234,
    networkId: 1350216234,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://parallel-stormy-spica.explorer.mainnet.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Chaos (SKALE Testnet)',
    title: 'Chaos Testnet',
    chain: 'staging-fast-active-bellatrix',
    rpc: [
      'https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix'
    ],
    faucets: [ 'https://sfuel.skale.network/staging/chaos' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: 'https://docs.skale.network/develop/',
    shortName: 'chaos-tenet',
    chainId: 1351057110,
    networkId: 1351057110,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com',
        icon: 'chaos',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'RARI Chain Mainnet',
    chain: 'RARI',
    rpc: [ 'https://rari.calderachain.xyz/http' ],
    faucets: [],
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://rarichain.org/',
    shortName: 'rari-mainnet',
    chainId: 1380012617,
    networkId: 1380012617,
    explorers: [
      {
        name: 'rarichain-explorer',
        url: 'https://mainnet.explorer.rarichain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'RaptorChain',
    chain: 'RPTR',
    rpc: [ 'https://rpc.raptorchain.io/web3' ],
    faucets: [],
    nativeCurrency: { name: 'Raptor', symbol: 'RPTR', decimals: 18 },
    features: [ { name: 'EIP155' } ],
    infoURL: 'https://raptorchain.io',
    shortName: 'rptr',
    chainId: 1380996178,
    networkId: 1380996178,
    icon: 'raptorchain',
    explorers: [
      {
        name: 'RaptorChain Explorer',
        url: 'https://explorer.raptorchain.io',
        icon: 'raptorchain_explorer',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SKALE Europa Hub Testnet',
    title: 'SKALE Europa Hub Testnet',
    chain: 'juicy-low-small-testnet',
    icon: 'europa',
    rpc: [ 'https://testnet.skalenodes.com/v1/juicy-low-small-testnet' ],
    faucets: [ 'https://www.sfuelstation.com/' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: 'https://europahub.network/',
    shortName: 'europa-testnet',
    chainId: 1444673419,
    networkId: 1444673419,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://juicy-low-small-testnet.explorer.testnet.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SKALE Nebula Hub',
    chain: 'green-giddy-denebola',
    icon: 'nebula',
    rpc: [
      'https://mainnet.skalenodes.com/v1/green-giddy-denebola',
      'wss://mainnet-proxy.skalenodes.com/v1/ws/green-giddy-denebola'
    ],
    faucets: [ 'https://sfuel.skale.network/' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: 'https://nebulachain.io/',
    shortName: 'nebula-mainnet',
    chainId: 1482601649,
    networkId: 1482601649,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://green-giddy-denebola.explorer.mainnet.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Deprecated SKALE Titan Hub Testnet',
    chain: 'staging-aware-chief-gianfar',
    status: 'deprecated',
    icon: 'titan',
    rpc: [
      'https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar',
      'wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar'
    ],
    faucets: [ 'https://sfuel.dirtroad.dev/staging' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: '',
    shortName: 'deprecated-titan-testnet',
    chainId: 1517929550,
    networkId: 1517929550,
    slip44: 1,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'SKALE Calypso Hub',
    chain: 'honorable-steel-rasalhague',
    icon: 'calypso',
    rpc: [ 'https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague' ],
    faucets: [ 'https://sfuel.dirtroad.dev' ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: 'https://calypsohub.network/',
    shortName: 'calypso-mainnet',
    chainId: 1564830818,
    networkId: 1564830818,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Harmony Mainnet Shard 0',
    chain: 'Harmony',
    rpc: [
      'https://api.harmony.one',
      'https://a.api.s0.t.hmny.io',
      'https://api.s0.t.hmny.io',
      'https://rpc.ankr.com/harmony',
      'https://harmony.api.onfinality.io/public',
      'https://1rpc.io/one',
      'https://harmony-0.drpc.org',
      'wss://harmony-0.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    infoURL: 'https://www.harmony.one/',
    slip44: 1023,
    ens: { registry: '0x4cd2563118e57b19179d8dc033f2b0c5b5d69ff5' },
    shortName: 'hmy-s0',
    chainId: 1666600000,
    networkId: 1666600000,
    explorers: [
      {
        name: 'Harmony Block Explorer',
        url: 'https://explorer.harmony.one',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Harmony Mainnet Shard 1',
    chain: 'Harmony',
    rpc: [
      'https://api.s1.t.hmny.io',
      'https://harmony-1.drpc.org',
      'wss://harmony-1.drpc.org'
    ],
    faucets: [],
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    infoURL: 'https://www.harmony.one/',
    slip44: 1023,
    shortName: 'hmy-s1',
    chainId: 1666600001,
    networkId: 1666600001,
    explorers: [
      {
        name: 'Harmony Block Explorer',
        url: 'https://explorer.harmony.one/blocks/shard/1',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Harmony Mainnet Shard 2',
    chain: 'Harmony',
    rpc: [ 'https://api.s2.t.hmny.io' ],
    faucets: [],
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    infoURL: 'https://www.harmony.one/',
    slip44: 1023,
    shortName: 'hmy-s2',
    chainId: 1666600002,
    networkId: 1666600002,
    status: 'deprecated',
    explorers: [
      {
        name: 'Harmony Block Explorer',
        url: 'https://explorer.harmony.one/blocks/shard/2',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Harmony Mainnet Shard 3',
    chain: 'Harmony',
    rpc: [ 'https://api.s3.t.hmny.io' ],
    faucets: [],
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    infoURL: 'https://www.harmony.one/',
    slip44: 1023,
    shortName: 'hmy-s3',
    chainId: 1666600003,
    networkId: 1666600003,
    status: 'deprecated',
    explorers: [
      {
        name: 'Harmony Block Explorer',
        url: 'https://explorer.harmony.one/blocks/shard/3',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Harmony Testnet Shard 0',
    chain: 'Harmony',
    rpc: [ 'https://api.s0.b.hmny.io' ],
    faucets: [ 'https://faucet.pops.one' ],
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    infoURL: 'https://www.harmony.one/',
    shortName: 'hmy-b-s0',
    chainId: 1666700000,
    networkId: 1666700000,
    explorers: [
      {
        name: 'Harmony Testnet Block Explorer',
        url: 'https://explorer.testnet.harmony.one',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Harmony Testnet Shard 1',
    chain: 'Harmony',
    rpc: [ 'https://api.s1.b.hmny.io' ],
    faucets: [ 'https://faucet.pops.one' ],
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    infoURL: 'https://www.harmony.one/',
    shortName: 'hmy-b-s1',
    chainId: 1666700001,
    networkId: 1666700001,
    explorers: [
      {
        name: 'Harmony Block Explorer',
        url: 'https://explorer.testnet.harmony.one',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Harmony Devnet Shard 0',
    chain: 'Harmony',
    rpc: [ 'https://api.s0.ps.hmny.io' ],
    faucets: [],
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    infoURL: 'https://www.harmony.one/',
    shortName: 'hmy-ps-s0',
    chainId: 1666900000,
    networkId: 1666900000,
    explorers: []
  },
  {
    name: 'Harmony Devnet Shard 1',
    chain: 'Harmony',
    rpc: [ 'https://api.s1.ps.hmny.io' ],
    faucets: [],
    nativeCurrency: { name: 'ONE', symbol: 'ONE', decimals: 18 },
    infoURL: 'https://www.harmony.one/',
    shortName: 'hmy-ps-s1',
    chainId: 1666900001,
    networkId: 1666900001,
    explorers: []
  },
  {
    name: 'RARI Chain Testnet',
    chain: 'RARI',
    rpc: [ 'https://testnet.rpc.rarichain.org/http' ],
    faucets: [],
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://rarichain.org/',
    shortName: 'rari-testnet',
    chainId: 1918988905,
    networkId: 1918988905,
    explorers: [
      {
        name: 'rarichain-testnet-explorer',
        url: 'https://explorer.rarichain.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'DataHopper',
    chain: 'HOP',
    rpc: [ 'https://23.92.21.121:8545' ],
    faucets: [],
    nativeCurrency: { name: 'DataHoppers', symbol: 'HOP', decimals: 18 },
    infoURL: 'https://www.DataHopper.com',
    shortName: 'hop',
    chainId: 2021121117,
    networkId: 2021121117
  },
  {
    name: 'SKALE Europa Hub',
    chain: 'europa',
    icon: 'europa',
    rpc: [
      'https://mainnet.skalenodes.com/v1/elated-tan-skat',
      'wss://mainnet.skalenodes.com/v1/elated-tan-skat'
    ],
    faucets: [
      'https://ruby.exchange/faucet.html',
      'https://sfuel.mylilius.com/'
    ],
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    infoURL: 'https://europahub.network/',
    shortName: 'europa',
    chainId: 2046399126,
    networkId: 2046399126,
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://elated-tan-skat.explorer.mainnet.skalenodes.com',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-1',
      bridges: [ { url: 'https://ruby.exchange/bridge.html' } ]
    }
  },
  {
    name: 'Ancient8 Testnet (deprecated)',
    status: 'deprecated',
    chain: 'Ancient8',
    icon: 'ancient8',
    rpc: [ 'https://rpc-testnet.ancient8.gg' ],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://ancient8.gg/',
    shortName: 'a8old',
    chainId: 2863311531,
    networkId: 2863311531,
    slip44: 1,
    explorers: [
      {
        name: 'a8scan-testnet',
        url: 'https://testnet.a8scan.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Pirl',
    chain: 'PIRL',
    rpc: [ 'https://wallrpc.pirl.io' ],
    faucets: [],
    nativeCurrency: { name: 'Pirl Ether', symbol: 'PIRL', decimals: 18 },
    infoURL: 'https://pirl.io',
    shortName: 'pirl',
    chainId: 3125659152,
    networkId: 3125659152,
    slip44: 164
  },
  {
    name: 'OneLedger Testnet Frankenstein',
    chain: 'OLT',
    icon: 'oneledger',
    rpc: [ 'https://frankenstein-rpc.oneledger.network' ],
    faucets: [ 'https://frankenstein-faucet.oneledger.network' ],
    nativeCurrency: { name: 'OLT', symbol: 'OLT', decimals: 18 },
    infoURL: 'https://oneledger.io',
    shortName: 'frankenstein',
    chainId: 4216137055,
    networkId: 4216137055,
    slip44: 1,
    explorers: [
      {
        name: 'OneLedger Block Explorer',
        url: 'https://frankenstein-explorer.oneledger.network',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Palm Testnet',
    chain: 'Palm',
    icon: 'palm',
    rpc: [
      'https://palm-testnet.infura.io/v3/${INFURA_API_KEY}',
      'https://palm-testnet.public.blastapi.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'PALM', symbol: 'PALM', decimals: 18 },
    infoURL: 'https://palm.network',
    shortName: 'tpalm',
    chainId: 11297108099,
    networkId: 11297108099,
    slip44: 1,
    explorers: [
      {
        name: 'Chainlens',
        url: 'https://testnet.palm.chainlens.com',
        standard: 'EIP3091'
      },
      {
        name: 'Dora',
        url: 'https://www.ondora.xyz/network/palm-testnet',
        standard: 'none'
      }
    ]
  },
  {
    name: 'Palm',
    chain: 'Palm',
    icon: 'palm',
    rpc: [
      'https://palm-mainnet.infura.io/v3/${INFURA_API_KEY}',
      'https://palm-mainnet.public.blastapi.io'
    ],
    faucets: [],
    nativeCurrency: { name: 'PALM', symbol: 'PALM', decimals: 18 },
    infoURL: 'https://palm.network',
    shortName: 'palm',
    chainId: 11297108109,
    networkId: 11297108109,
    explorers: [
      {
        name: 'Chainlens',
        url: 'https://palm.chainlens.com',
        standard: 'EIP3091'
      },
      {
        name: 'Dora',
        url: 'https://www.ondora.xyz/network/palm',
        standard: 'none'
      }
    ]
  },
  {
    name: 'GitSwarm Test Network',
    title: 'GitSwarm Test Network',
    chain: 'ETH',
    icon: 'gitswarm',
    rpc: [ 'https://gitswarm.com:2096' ],
    faucets: [],
    nativeCurrency: { name: 'GitSwarm Ether', symbol: 'GS-ETH', decimals: 18 },
    infoURL: 'https://gitswarm.com/',
    shortName: 'GS-ETH',
    chainId: 28872323069,
    networkId: 28872323069,
    slip44: 1,
    explorers: [],
    status: 'incubating'
  },
  {
    name: 'Arbitrum Blueberry',
    title: 'Arbitrum Blueberry Testnet',
    chain: 'ETH',
    rpc: [
      'https://rpc.arb-blueberry.gelato.digital',
      'wss://ws.arb-blueberry.gelato.digital'
    ],
    faucets: [],
    nativeCurrency: { name: 'GelatoCGT', symbol: 'CGT', decimals: 18 },
    infoURL: 'https://raas.gelato.network/rollups/details/public/arb-blueberry',
    shortName: 'arb-blueberry',
    chainId: 88153591557,
    networkId: 88153591557,
    slip44: 60,
    explorers: [
      {
        name: 'blockscout',
        url: 'https://arb-blueberry.gelatoscout.com',
        icon: 'blockscout',
        standard: 'EIP3091'
      }
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-421614',
      bridges: [ { url: 'https://bridge.gelato.network/bridge/arb-blueberry' } ]
    },
    status: 'active'
  },
  {
    name: 'Kakarot Sepolia',
    chain: 'ETH',
    icon: 'kakarot',
    rpc: [],
    faucets: [],
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    infoURL: 'https://kakarot.org',
    shortName: 'kkrt-sepolia',
    chainId: 107107114116,
    networkId: 107107114116,
    explorers: [],
    parent: { type: 'L2', chain: 'eip155-11155111', bridges: [] }
  },
  {
    name: 'Alphabet Mainnet',
    chain: 'Alphabet Network',
    icon: 'alphabetnetwork',
    rpc: [
      'https://londonpublic.alphabetnetwork.org',
      'wss://londonpublic.alphabetnetwork.org/ws/',
      'https://main-rpc.com',
      'wss://main-rpc.com/ws/'
    ],
    faucets: [],
    nativeCurrency: { name: 'ALT', symbol: 'ALT', decimals: 18 },
    infoURL: 'https://alphabetnetwork.org',
    shortName: 'alphabet',
    chainId: 111222333444,
    networkId: 111222333444,
    explorers: [
      {
        name: 'Alphabet Explorer',
        url: 'https://scan.alphabetnetwork.org',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Ntity Mainnet',
    chain: 'Ntity',
    rpc: [ 'https://rpc.ntity.io' ],
    faucets: [],
    nativeCurrency: { name: 'Ntity', symbol: 'NTT', decimals: 18 },
    infoURL: 'https://ntity.io',
    shortName: 'ntt',
    chainId: 197710212030,
    networkId: 197710212030,
    icon: 'ntity',
    explorers: [
      {
        name: 'Ntity Blockscout',
        url: 'https://blockscout.ntity.io',
        icon: 'ntity',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Haradev Testnet',
    chain: 'Ntity',
    rpc: [ 'https://blockchain.haradev.com' ],
    faucets: [],
    nativeCurrency: { name: 'Ntity Haradev', symbol: 'NTTH', decimals: 18 },
    infoURL: 'https://ntity.io',
    shortName: 'ntt-haradev',
    chainId: 197710212031,
    networkId: 197710212031,
    slip44: 1,
    icon: 'ntity',
    explorers: [
      {
        name: 'Ntity Haradev Blockscout',
        url: 'https://blockscout.haradev.com',
        icon: 'ntity',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Zeniq',
    chain: 'ZENIQ',
    rpc: [ 'https://smart.zeniq.network:9545' ],
    faucets: [ 'https://faucet.zeniq.net/' ],
    nativeCurrency: { name: 'Zeniq', symbol: 'ZENIQ', decimals: 18 },
    infoURL: 'https://www.zeniq.dev/',
    shortName: 'zeniq',
    chainId: 383414847825,
    networkId: 383414847825,
    explorers: [
      {
        name: 'zeniq-smart-chain-explorer',
        url: 'https://smart.zeniq.net',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'PDC Mainnet',
    chain: 'IPDC',
    rpc: [ 'https://mainnet.ipdc.io/' ],
    faucets: [],
    nativeCurrency: { name: 'PDC', symbol: 'PDC', decimals: 18 },
    infoURL: 'https://ipdc.io',
    shortName: 'ipdc',
    chainId: 666301171999,
    networkId: 666301171999,
    explorers: [
      {
        name: 'ipdcscan',
        url: 'https://scan.ipdc.io',
        standard: 'EIP3091'
      }
    ]
  },
  {
    name: 'Molereum Network',
    chain: 'ETH',
    rpc: [ 'https://molereum.jdubedition.com' ],
    faucets: [],
    nativeCurrency: { name: 'Molereum Ether', symbol: 'MOLE', decimals: 18 },
    infoURL: 'https://github.com/Jdubedition/molereum',
    shortName: 'mole',
    chainId: 6022140761023,
    networkId: 6022140761023
  },
  {
    name: 'Godwoken Testnet (V1)',
    chain: 'GWT',
    rpc: [ 'https://godwoken-testnet-web3-v1-rpc.ckbapp.dev' ],
    faucets: [ 'https://homura.github.io/light-godwoken' ],
    nativeCurrency: { name: 'CKB', symbol: 'CKB', decimals: 8 },
    infoURL: 'https://www.nervos.org',
    shortName: 'gw-testnet-v1-deprecated',
    chainId: 868455272153094,
    networkId: 868455272153094,
    slip44: 1,
    status: 'deprecated',
    explorers: [
      {
        name: 'GWScan Block Explorer',
        url: 'https://v1.aggron.gwscan.com',
        standard: 'none'
      }
    ]
  }
];
module.exports = chainArray;