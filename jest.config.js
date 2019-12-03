module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  testRegex: '/.*(__tests__\\/.*)|(.*(test|spec))\\.jsx?$',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: [
    'node_modules',
    '.cache',
  ],
  coverageDirectory: 'coverage',
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby)/)',
  ],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: [
    'raf/polyfill',
    '<rootDir>/tests/setupTests.js',
    '<rootDir>/loadershim.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
}
