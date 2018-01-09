'use strict';

var path = require('path');

/**
 * Will return the path and default btcnano-node configuration on environment variables
 * or default locations.
 * @param {Object} options
 * @param {String} options.network - "testnet" or "livenet"
 * @param {String} options.datadir - Absolute path to bitcoin database directory
 */
function getDefaultBaseConfig(options) {
  if (!options) {
    options = {};
  }
  return {
    path: process.cwd(),
    config: {
      network: options.network || 'main',
      port: 3000,
      services: ['bitcoind', 'web'],
      servicesConfig: {
        bitcoind: {
          spawn: {
            datadir: options.datadir || path.resolve(process.env.HOME, '.btcnano'),
            exec: path.resolve(__dirname, '../../bin/btcnanod')
          }
        }
      }
    }
  };
}

module.exports = getDefaultBaseConfig;
