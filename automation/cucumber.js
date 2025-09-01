module.exports = {
  default: {
    require: ['features/steps/*.ts', 'hooks/*.ts'], // step definitions
    publishQuiet: true,
    format: ['progress', 'json:reports/cucumber-report.json'],
    paths: ['features/**/*.feature'],
    requireModule: ['ts-node/register'],
  },
};
