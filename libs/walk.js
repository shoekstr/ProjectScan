const fs = require('fs')
const path = require('path')

const walk = (dir, done) => {
  let results = []

  fs.readdir(dir, (err, list) => {
    if (err) return done(err)

    let pending = list.length;
    if (!pending) return done(null, results)
    for (const item of list) {
      const file = path.resolve(dir, item)

      fs.stat(file, (err, stat) => {
          if (stat && stat.isDirectory()) {
            walk(file, (err, res) => {
              results = results.concat(res)
              if (!--pending) done(null, results)
            })
          } else {
            results.push(file)
            if (!--pending) done(null, results)
          }
      })
    }
  })
}

module.exports = walk
