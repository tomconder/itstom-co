/* eslint-disable max-len,import/no-dynamic-require,global-require */
module.exports = function (config) {
  config.set({
    mutate: ['src/**/*.js?(x)', '!src/**/*@(.test|.spec|Spec).js?(x)'],
    mutator: 'javascript',
    testRunner: 'jest',
    reporters: ['progress', 'clear-text', 'html'],
    coverageAnalysis: 'off',
    jest: {
      projectType: 'react',
      config: require(`${ __dirname }/jest.config.js`),
    },
  })
}
