module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['features/**/*.ts'],
    publishQuiet: true,
    format: ['progress', 'json:reports/cucumber-report.json'],
    paths: ['features/**/*.feature'],
    requireModule: ['ts-node/register'],
  },
};
