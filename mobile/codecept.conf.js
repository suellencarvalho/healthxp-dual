const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
const helpOrders = require('./support/screens/help-orders');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './e2e/*_test.js',
  output: './output',
  plugins:{
    'tesults':{
      'require': 'codeceptjs-tesults',
      'enabled': true,
      'target' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjdkYTU5OThjLTRlYTQtNGRiNi1hNWY4LWM1YWFjNzRhOThkZC0xNzIxNjE1ODM1MjI5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZjQwYWIwYTEtNjljNy00ZjZkLTg2YmMtODk2MjM3ZTk5OWFhIiwidHlwZSI6InQifQ.XqkAAU41WrN0suB8Q_0MftmuV1T2WLhvF6sB7x73NwM'
    }
  },
  helpers: {
    Appium: {
      app: 'C:\\QAx\\projects\\healthxp-dual\\mobile\\app\\hxp-beta2.apk',
      platform: 'Android',
      device: 'emulator'
    },

    REST: {
      endpoint: 'http://localhost:5000'
    },

    JSONResponse: {
      requestHelper : 'REST'
    }
  },
  include: {
    I: './support/steps_file.js',

    login: "./support/screens/login.js",
    account: "./support/screens/account.js",
    helpOrder: "./support/screens/help-orders.js"
  },
  name: 'mobile'
}