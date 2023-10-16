export const config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    // to cause a session error
    connectionRetryTimeout: 10,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],

    cucumberOpts: {
        require: ['./features/step-definitions/steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}
