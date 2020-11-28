'use strict'

require('colors')
const assert = require('assert')
const crypto = require('crypto')
const data = require('../xolentum-mining-pools.json')
const describe = require('mocha').describe
const format = require('util').format
const it = require('mocha').it
const request = require('request-promise-native')
var masterBranchData

function sha256 (msg) {
  if (typeof msg !== 'string') msg = JSON.stringify(msg)
  return crypto.createHmac('sha256', msg).digest('hex')
}

function checkTestPool (pool) {
  if (masterBranchData) {
    const check = (masterBranchData.indexOf(sha256(pool)) === -1)

    return Promise.resolve(check)
  }

  return request({ url: 'https://raw.githubusercontent.com/xolentum/mining-pools-json/main/xoletum-mining-pools.json', json: true })
    .then(data => {
      data = data.pools.map(x => sha256(x))

      masterBranchData = data

      return data
    })
    .then(pools => {
      const check = (pools.indexOf(sha256(pool)) === -1)
      return Promise.resolve(check)
    })
}

describe('Basic Pool Check', function () {
  data.pools.forEach(pool => {
    return it(format('%s => %s', pool.name, pool.url), function () {
      this.timeout(5000)
      return checkTestPool(pool)
        .then(check => {
          if (check) {
            return request({ url: (pool.api instanceof Array) ? pool.api[0] : pool.api, json: true, timeout: 4000 })
          } else {
            return this.skip()
          }
        })
        .then(response => {
          assert(response.version)
        })
        .catch(error => {
          if (error.message && error.message === 'sync skip') return Promise.resolve()
          return Promise.reject(new Error('Could not communicate with pool'.red))
        })
    })
  })
})
