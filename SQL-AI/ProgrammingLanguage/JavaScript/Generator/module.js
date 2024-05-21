function getStats (paths, cb) {
  var counter = paths.length
  var errored = false
  var stats = []
  paths.forEach(function (path, index) {
    fs.stat(path, function (er, stat) {
      if (errored) return
      if (er) {
        errored = true
        return cb(er)
      }
      stats[index] = stat
      if (--counter == 0) cb(null, stats)
    })
  })
}

function getLargestFile (files, stats) {
  var largest = stats
    .filter(function (stat) { return stat.isFile() })
    .reduce(function (prev, next) {
      if (prev.size > next.size) return prev
      return next
    })
    return files[stats.indexOf(largest)]
}

var fs = require('fs')
var path = require('path')

module.exports = function (dir, cb) {
  fs.readdir(dir, function (er, files) {
    if (er) return cb(er)
    var paths = files.map(function (file) { // [1]
      return path.join(dir,file)
    })

    getStats(paths, function (er, stats) {
      if (er) return cb(er)
      var largestFile = getLargestFile(files, stats)
      cb(null, largestFile)
    })
  })
}
