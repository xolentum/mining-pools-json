'use strict'

const assert = require('assert')
const crypto = require('crypto')
const data = require('../xolentum-mining-pools.json')

function sha256 (msg) {
  if (typeof msg !== 'string') msg = JSON.stringify(msg)
  return crypto.createHmac('sha256', msg).digest('hex')
}

const names = []
data.pools.forEach((pool) => {
  names.push(pool.name.toLowerCase())
})

const originalHash = sha256(names)
names.sort()
const sortedHash = sha256(names)

console.log('')
console.log('Alphabetically Sorted Order')
console.log('===========================')
names.forEach(name => console.log(name))

assert(originalHash === sortedHash)
