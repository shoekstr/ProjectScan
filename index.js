const fs = require('fs')
const path = require('path')

const walk = require('./libs/walk')
const scanFile = require('./libs/scanFile')

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " path/to/directory")
  process.exit(-1)
}

const scanDir = process.argv[2]
const results = []

const program = (scanDir, callback) => {
  walk(scanDir, (err, files) => {
    if (err) callback(err)

    let pending = files.length
    if (!pending) callback(null, results)

    for (const file of files) {
      scanFile(file, (err, imports) => {
        if (err) callback(err)

        results.push({
          file: file,
          imports: imports
        })
        if (!--pending) callback(null, results)
      })
    }
  })
}

program (scanDir, (err, object) => {
  if (err) {
    console.log('Error:', err)
    process.exit(-1)
  }

  console.log('Program', object)
})
