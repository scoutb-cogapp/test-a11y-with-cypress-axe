# Test a11y with Cypress and axe

simple test setup to run on any given url

## How To

1. open cypress/e2e/a11y.cy.js
1. replace the value inside page variable with your URL you want to test
1. run `npx cypress open`
1. choose "end to end testing"
1. you can observe the tests run
1. if anything is found, test results will be written to the directory a11y-reports
