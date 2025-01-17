module.exports = {
  "rootDir": "./",
  "testMatch": ["<rootDir>/test/*.spec.js"],
  "testPathIgnorePatterns": ["<rootDir>/node_modules/", "<rootDir>/dist/"]
}

module.exports = {
  "rootDir": "./",
  "coverageReporters": [
    "json",
    "lcov",
    "text-summary"
  ],
  "collectCoverageFrom": [
    "src/**/*.js"
  ],
  "globalSetup": "<rootDir>/test/setup-global.js",
  "roots": [
    "src",
    "test"
  ],
  "setupFilesAfterEnv": ["<rootDir>/test/setup-test.js"],
  "testPathIgnorePatterns": ["<rootDir>/node_modules/", "<rootDir>/test/integration/"]
}
