const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjdkYTU5OThjLTRlYTQtNGRiNi1hNWY4LWM1YWFjNzRhOThkZC0xNzEwMTA3Mjk0OTc3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiODAyZWM5MWYtYTNhMi00NmIzLWI2YWQtOGQwMjQwMDMyMDg1IiwidHlwZSI6InQifQ.XVX7_4kTlLlxId0_xnHApNt8bc255zgPkL06lj1eqg8'
cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})