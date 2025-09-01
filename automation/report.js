const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports',
  reportPath: './reports/results',
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest',
    },
    device: 'Local test machine',
    platform: {
      name: 'macOS',
      version: '13',
    },
  },
  customData: {
    title: 'Shopping Electron Test',
    data: [
      { label: 'Project', value: 'Playwright Shopping Automation' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toString() },
    ],
  },
});
