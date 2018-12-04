const readline = require('readline');
const fs = require('fs');

const scanFile = (file, done) => {
  let importMatch = []

  const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    const importRegex = /import.*['|"](.*?)['|"]/g
    const rGroup = importRegex.exec(line)
    rGroup ? importMatch.push(rGroup[1]) : ''
  });

  rl.on('close', () => {
    done(null, importMatch)
  })
}

module.exports = scanFile
