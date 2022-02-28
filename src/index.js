const chainData = require('./data/chain');

const rawChainData = () => {
  return chainData;
};

const getChainById = chainId => {
  return chainData.filter(chain => chain.chainId === chainId)[0];
};

const getChainByNetworkId = networkId => {
  return chainData.filter(chain => chain.networkId === networkId)[0];
};

const getChainByName = name => {
  return chainData.filter(chain => chain.name === name)[0];
};

const getChainByShortName = shortName => {
  return chainData.filter(chain => chain.shortName === shortName)[0];
};

module.exports = {
  rawChainData,
  getChainById,
  getChainByNetworkId,
  getChainByName,
  getChainByShortName
};
