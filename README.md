# Xolentum Mining Pools JSON

## About

JSON list of mining pools for [Xolentum](https://www.xolentum.org).

This list can be consumed in your application so you'll always have an up-to-date list of mining pools. To consume the list, use the following URL: https://raw.githubusercontent.com/xolentum/mining-pools-json/main/xolentum-mining-pools.json

## Adding your pool

If you operate a mining pool for Xolentum, and would like to add it to this list, fork this repository, edit the file `xolentum-mining-pools.json` in the following format and create a pull request.

```json
{
    "name": "Pool Operator Name",
    "url": "pool.url",
    "api": "pool-api.url",
    "type": "cn-js"
}
```

`url` should be the full URL to the pool dashboard, including `http`, `https`. `api` should either be a single URL, or a list of URLs, if pool stats, network stats and config are to be obtained via different endpoints. Refer to the file itself for examples. 

`type` should be one of the following:

- `cn-js` if you use [CryptoNote NodeJS Pool](https://github.com/dvandal/cryptonote-nodejs-pool)
- `other` if you use *ANY* other pool software.

To avoid pool priority conflicts, please insert your pool at the requisite place in *alphabetical order* of `name`.

*NOTE: Any pull requests not adhering to the above guidelines will be rejected.*

## LICENSE

[BSD 3-Clause License](LICENSE)

Copyright © 2020 The Xolentum Project
