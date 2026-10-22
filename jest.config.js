module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|png|svg|jpe?g|gif|webp)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
