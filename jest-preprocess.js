/* eslint-disable import/no-extraneous-dependencies */

const babelOptions = {
  presets: ['@babel/react', '@babel/env'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
  ],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
