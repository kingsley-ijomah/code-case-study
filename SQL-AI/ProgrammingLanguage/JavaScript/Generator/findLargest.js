/* a nested aproach */
var fs = require('fs')
var path = require('path')

module.exports = function (dir, cb) {
  fs.readdir(dir, function (er, files) {
    if (er) return cb(er)
    var counter = files.length
    var errored = false
    var stats =[]

    files.forEach(function (file, index) {
      fs.stat(path.join(dir, file), function (er, stat) {
        if (errored) return
        if (er) {
          errored = true
          return cb(er)   // NOTE: only return once
        }
        stats[index] = stat

        if (--counter === 0) {
          var largest = stats
            .filter(function (stat) {retrun stat.isFile() })
            .reduce(function (prev, next) {
              if (prev.size > next.size) return prev
              return next
            })

          cb(null, files[stats.indexOf(largest)])
        }
      })
    })
  })
}
