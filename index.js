const fs = require('fs')
const path = require('path')

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " path/to/directory")
  process.exit(-1)
}

const scanDir = process.argv[2]

const filesToScan = []
const dirToScan = []

dirToScan.push(scanDir)

for (const dir of dirToScan) {
  console.log('Directory to Scan', dir)
}
// fs.readdir(scanDir, function(err, items) {
//     console.log(items);
//
//     for (var i=0; i<items.length; i++) {
//         console.log(items[i]);
//     }
// });
