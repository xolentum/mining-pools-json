'use strict'

const assert = require('assert')
const data = require('../xolentum-mining-pools.json')

var seenPools = []

for (var i = 0; i < data.pools.length; i++) {
  var pool = data.pools[i]
  console.log(pool.name)
  assert(seenPools.indexOf(pool.url) === -1)
  seenPools.push(pool.url)
}
