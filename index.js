const fs = require('fs')
const path = require('path')

const walk = require('./libs/walk')

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " path/to/directory")
  process.exit(-1)
}

const scanDir = process.argv[2]

walk(scanDir, (err, files) => {
  if (err) {
    console.log('Error:', err)
    process.exit(1)
  }

  console.log('Files', files)
})

// fs.readdir(scanDir, function(err, items) {
//     console.log(items);
//
//     for (var i=0; i<items.length; i++) {
//         console.log(items[i]);
//     }
// });
