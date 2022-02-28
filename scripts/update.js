const https = require('https');
const fs = require('fs');
const util = require('util');
let obj;

const chainJSON = fs.createWriteStream('chain.json');

const request = https.get('https://chainid.network/chains.json', function (response) {
  response.pipe(chainJSON);
  chainJSON.on('finish', function () {
    chainJSON.end();
    fs.readFile('./chain.json', handleFile);
  });
});

function handleFile(err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  fs.writeFileSync(
    'src/data/chain.js',
    `const chainArray = ${util
      .inspect(obj, {
        showHidden: false,
        depth: null,
        maxArrayLength: Infinity,
        maxStringLength: Infinity
      })
      .toString()};\nexport default chainArray;`
  );
}
