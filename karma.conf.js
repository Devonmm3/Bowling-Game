module.exports = function (config) {

    process.env["FIREFOX_BIN"] = "production";
                process.env["IE_BIN"] = "production";

    config.set({
        
        frameworks: ['mocha', 'chai'],
        //files in this project to load to the browser
        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],

        exclude: [

        ],
        


        reporters: ['progress'],
        port: 9876, // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless', 'Firefox', 'FirefoxDeveloper', 'FirefoxNightly', 'IE'],
        autoWatch: true,
        concurrency: Infinity,
        customLaunchers: {
            FirefoxHeadless: {
                base: 'Firefox',
                flags: ['-headless'],

                
            },
        },
    })
}