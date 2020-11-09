'use strict'

const assert = require('assert')
const data = require('../xolentum-mining-pools.json')

for (var i = 0; i < data.pools.length; i++) {
  var pool = data.pools[i]
  console.log(pool.name)
  assert(/^.{0}[a-zA-Z0-9]/.test(pool.name))
}
