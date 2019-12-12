exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',
    specs: ['spec.js'],
  
    // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
    capabilities: {
      browserName: '',
    //  chromeOptions:{"args":[""]},
      autoWebview:true,
      platformName: 'Android',
      app:'C:/Users/s.petrovic/Desktop/apk test/vtv-app-4661.apk',
      appPackage: 'tv.talpa.vtv.dev',
      platformVersion: '9',
      deviceName: 'Android Emulator',
      
    },

    baseUrl:'/'
  };
  