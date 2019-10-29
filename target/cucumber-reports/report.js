$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/F0001_login_Page_Verification.feature");
formatter.feature({
  "line": 2,
  "name": "Voice Watch Login Empirix Admin",
  "description": "",
  "id": "voice-watch-login-empirix-admin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Hari"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "F001_Verify that login page should accessible and all default element should available on the login page",
  "description": "",
  "id": "voice-watch-login-empirix-admin;f001-verify-that-login-page-should-accessible-and-all-default-element-should-available-on-the-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Initialize the Driver of the browser and provide the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify that Voice Watch login page access successfully",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify that default element should available on the login page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify that \u0027Additional Copy Right\u0027 Link clickable",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Close the browser successfully",
  "keyword": "And "
});
formatter.match({
  "location": "SD0001_login_Page_Verification.initialize_the_driver_of_the_browser_and_provide_the_url()"
});
formatter.result({
  "duration": 26006869812,
  "status": "passed"
});
formatter.match({
  "location": "SD0001_login_Page_Verification.access_to_voicewatch_page()"
});
formatter.result({
  "duration": 4590595306,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinations.SD0001_login_Page_Verification.access_to_voicewatch_page(SD0001_login_Page_Verification.java:34)\r\n\tat ✽.When Verify that Voice Watch login page access successfully(features/F0001_login_Page_Verification.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SD0001_login_Page_Verification.login_Page_Verification()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0001_login_Page_Verification.copyRightLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0001_login_Page_Verification.close_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/F0003_login_With_Empirix_Business_Analyst.feature");
formatter.feature({
  "line": 2,
  "name": "F0003_Login Voice Watch application with Empirix Business analyst creadetails and Validate Elements",
  "description": "",
  "id": "f0003-login-voice-watch-application-with-empirix-business-analyst-creadetails-and-validate-elements",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@Sanity"
    },
    {
      "line": 1,
      "name": "@3"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Verify tab elements avaiablity based on User permission",
  "description": "",
  "id": "f0003-login-voice-watch-application-with-empirix-business-analyst-creadetails-and-validate-elements;verify-tab-elements-avaiablity-based-on-user-permission",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Initialize the Driver of the browser and provide the URL to login with Empirix Business analyst",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Login with username and password with Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that login successfully with Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Tab Availability Validation on the home screen while login with Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify header elements on the pages while access home page with Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify footer elements on the pages while access home page with Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "####################################################################################"
    },
    {
      "line": 13,
      "value": "#            Dashboard Tab Validation"
    },
    {
      "line": 14,
      "value": "####################################################################################"
    },
    {
      "line": 15,
      "value": "#@Sanity"
    },
    {
      "line": 16,
      "value": "#Scenario: Verify that dashboard tab pages"
    },
    {
      "line": 17,
      "value": "#Given Initialize the Driver of the browser and provide the URL to login with Empirix Admin"
    }
  ],
  "line": 18,
  "name": "Navigate to dashboard tab with login as Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Validate the elements on the OverallPerfomance_section on the dashboard tab page as Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Validate the elements on the activetest_section on the dashboard tab page as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify header elements on the pages while access dashboard tab page as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify footer elements on the pages while access dashboard tab page as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "####################################################################################"
    },
    {
      "line": 24,
      "value": "#            Dashboard Alert Validation"
    },
    {
      "line": 25,
      "value": "####################################################################################"
    }
  ],
  "line": 26,
  "name": "Navigate to Alert tab as Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Validate the elements on the Alert tab page as Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verify header elements on the pages while access alert tab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify footer elements on the pages while access alert tab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "####################################################################################"
    },
    {
      "line": 31,
      "value": "#            Test Tab Validation"
    },
    {
      "line": 32,
      "value": "####################################################################################"
    }
  ],
  "line": 33,
  "name": "Navigate to Test tab as Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Validate the elements on the Test tab page as Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Verify footer elements on the pages while access Test tab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify header elements on the pages while access Test tab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 37,
      "value": "#Then Validate element while Create a Test using Test create button as Empirix Business analyst"
    },
    {
      "line": 38,
      "value": "#And Verify header elements on the pages while access Test tab while create test using button as Empirix Business analyst"
    },
    {
      "line": 39,
      "value": "#And Verify footer elements on the pages while access Test tab while create test using button as Empirix Business analyst"
    },
    {
      "line": 40,
      "value": "#Then Validate element while Create a Test using Test create link as Empirix Business analyst"
    },
    {
      "line": 41,
      "value": "#And Verify header elements on the pages while access Test tab while create test using link as Empirix Business analyst"
    },
    {
      "line": 42,
      "value": "#And Verify footer elements on the pages while access Test tab while create test using link as Empirix Business analyst"
    },
    {
      "line": 43,
      "value": "####################################################################################"
    },
    {
      "line": 44,
      "value": "#            Tag Tab Validation"
    },
    {
      "line": 45,
      "value": "####################################################################################"
    }
  ],
  "line": 46,
  "name": "Navigate to Tag tab as Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Validate the elements on the Tag tab page as Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Verify footer elements on the pages while access Tag tab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Verify header elements on the pages while access Tag tab pagesas Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 50,
      "value": "#Then Validate element while Create a Tag using Tag create tag button as Empirix Business analyst"
    },
    {
      "line": 51,
      "value": "#And Verify header elements on the pages while access Tag tab while create tag using button as Empirix Business analyst"
    },
    {
      "line": 52,
      "value": "#And Verify footer elements on the pages while access Tag tab while create tag using button as Empirix Business analyst"
    },
    {
      "line": 53,
      "value": "#Then Validate element while Create a Tag using Tag create link as Empirix Business analyst as Empirix Business analyst"
    },
    {
      "line": 54,
      "value": "#And Verify header elements on the pages while access Tag tab while create tag using link as Empirix Business analyst"
    },
    {
      "line": 55,
      "value": "#And Verify footer elements on the pages while access Tag tab while create tag using link as Empirix Business analyst"
    },
    {
      "line": 56,
      "value": "####################################################################################"
    },
    {
      "line": 57,
      "value": "#            Script Tab Validation"
    },
    {
      "line": 58,
      "value": "####################################################################################"
    }
  ],
  "line": 59,
  "name": "Navigate to Script tab as Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "Validate the elements on the GoScriptBuilder tab page as Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Verify footer elements on the pages while access Script tab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Verify header elements on the pages while access Script tab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 63,
      "value": "#When Navigate to GoScriptBuilder using createGSBbybutton as Empirix Business analyst"
    },
    {
      "line": 64,
      "value": "#Then Validate the elements on the GoScriptBuilder while click createGSBbybutton as Empirix Business analyst"
    },
    {
      "line": 65,
      "value": "#And Verify footer elements on the pages while access Script tab pages as Empirix Business analyst"
    },
    {
      "line": 66,
      "value": "#And Verify header elements on the pages while access Script tab pages as Empirix Business analyst"
    },
    {
      "line": 67,
      "value": "#When Navigate to GoScriptBuilder using createGSBbyLink as Empirix Business analyst"
    },
    {
      "line": 68,
      "value": "#Then Validate the elements on the GoScriptBuilder while click createGSBbyLink as Empirix Business analyst"
    },
    {
      "line": 69,
      "value": "#And Verify footer elements on the pages while access createGSBbyLink as Empirix Business analyst"
    },
    {
      "line": 70,
      "value": "#And Verify header elements on the pages while access createGSBbyLink as Empirix Business analyst"
    }
  ],
  "line": 71,
  "name": "Navigate to ScriptUpload Tab as Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "navigate to scriptUploadTab and validate the elements on that tab as Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Verify footer elements on the pages while access scriptUploadTab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Verify header elements on the pages while access scriptUploadTab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 75,
      "value": "#Then validate the element while clicking createSUbybutton as Empirix Business analyst"
    },
    {
      "line": 76,
      "value": "#And Verify footer elements on the pages while access createSUbybutton pages as Empirix Business analyst"
    },
    {
      "line": 77,
      "value": "#And Verify header elements on the pages while access createSUbybutton pages as Empirix Business analyst"
    },
    {
      "line": 78,
      "value": "#Then validate the element while clicking createSUbyLink as Empirix Business analyst"
    },
    {
      "line": 79,
      "value": "#And Verify footer elements on the pages while access createSUbyLink pages as Empirix Business analyst"
    },
    {
      "line": 80,
      "value": "#And Verify header elements on the pages while access createSUbyLink pages as Empirix Business analyst"
    }
  ],
  "line": 81,
  "name": "Navigate to CSV Tab as Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "validate the element while clicking CSV Tab as Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "Verify footer elements on the pages while access createSUbyLink pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Verify header elements on the pages while access createSUbyLink pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 85,
      "value": "####################################################################################"
    },
    {
      "line": 86,
      "value": "#            Variable Tab Validation"
    },
    {
      "line": 87,
      "value": "####################################################################################"
    }
  ],
  "line": 88,
  "name": "Navigate to Variable tab as Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "Validate the elements on the Variable tab page as Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "Verify footer elements on the pages while access Variable tab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Verify header elements on the pages while access Variable tab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 92,
      "value": "#When Navigate to Variable using createVariableByButton as Empirix Business analyst"
    },
    {
      "line": 93,
      "value": "#Then Validate the elements on the Variable tab while click createVariableByButton as Empirix Business analyst"
    },
    {
      "line": 94,
      "value": "#And Verify footer elements on the pages while access createVariableByButton as Empirix Business analyst"
    },
    {
      "line": 95,
      "value": "#And Verify header elements on the pages while access createVariableByButton as Empirix Business analyst"
    },
    {
      "line": 96,
      "value": "#When Navigate to Variable using createVariableByLink as Empirix Business analyst"
    },
    {
      "line": 97,
      "value": "#Then Validate the elements on the Variable tab while click createVariableByLink as Empirix Business analyst"
    },
    {
      "line": 98,
      "value": "#And Verify footer elements on the pages while access createVariableByLink as Empirix Business analyst"
    },
    {
      "line": 99,
      "value": "#And Verify header elements on the pages while access createVariableByLink as Empirix Business analyst"
    },
    {
      "line": 100,
      "value": "####################################################################################"
    },
    {
      "line": 101,
      "value": "#            Hammer Tab Validation"
    },
    {
      "line": 102,
      "value": "####################################################################################"
    }
  ],
  "line": 103,
  "name": "Navigate to Hammer tab as Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "Validate the elements on the Hammer tab page as Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "Verify footer elements on the pages while access Hammer tab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Verify header elements on the pages while access Hammer tab pages as Empirix Business analyst",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Navigate to Hammer using createHammerByButton as Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "Validate the elements on the Hammer tab while click createHammerByButton as Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Navigate to Hammer using createHammerByLink as Empirix Business analyst",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "Validate the elements on the Hammer tab while click createHammerByLink as Empirix Business analyst",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 111,
      "value": "##################################################################################"
    }
  ],
  "line": 112,
  "name": "Close the browser successfully which was login as Empirix Business analyst",
  "keyword": "And "
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.initialize_the_driver_of_the_browser_and_provide_the_url_to_login_with_empirix_business_analyst()"
});
formatter.result({
  "duration": 5456322952,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d77.0.3865.120)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027REM-L-SINGHH\u0027, ip: \u002710.12.60.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.120, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\hsingh\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53998}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5762324e20b1653dfdffd82029f24ebf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat resources.basePropertiesCucm.intializeDriver(basePropertiesCucm.java:140)\r\n\tat stepDefinations.SD0003_login_With_Empirix_Business_Analyst.initialize_the_driver_of_the_browser_and_provide_the_url_to_login_with_empirix_business_analyst(SD0003_login_With_Empirix_Business_Analyst.java:41)\r\n\tat ✽.Given Initialize the Driver of the browser and provide the URL to login with Empirix Business analyst(features/F0003_login_With_Empirix_Business_Analyst.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.login_with_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_that_login_successfully_with_empirix_business_analyst_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.tab_availability_validation_on_the_home_screen_while_login_with_empirix_business_analyst()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_header_elements_on_the_pages_while_access_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_footer_elements_on_the_pages_while_access_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_dashboard_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.validate_the_elements_on_the_overallperfomancesection_on_the_dashboard_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.validate_the_elements_on_the_activetestsection_on_the_dashboard_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_footer_elements_on_the_pages_while_access_dashboard_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_header_elements_on_the_pages_while_access_dashboard_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_alert_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.validate_the_elements_on_the_alert_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_header_elements_on_the_pages_while_access_alert_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_footer_elements_on_the_pages_while_access_alert_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_test_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.validate_the_elements_on_the_test_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_footer_elements_on_the_pages_while_access_test_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_header_elements_on_the_pages_while_access_test_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_tag_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.validate_the_elements_on_the_tag_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_footer_elements_on_the_pages_while_access_tag_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_header_elements_on_the_pages_while_access_tag_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_script_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.validate_the_elements_on_the_goscriptbuilder_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_footer_elements_on_the_pages_while_access_script_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_header_elements_on_the_pages_while_access_script_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_scriptupload_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_scriptuploadtab_and_validate_the_elements_on_that_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_footer_elements_on_the_pages_while_access_scriptuploadtab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_header_elements_on_the_pages_while_access_scriptuploadtab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_csv_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.validate_the_element_while_clicking_csv_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_footer_elements_on_the_pages_while_access_createsubylink_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_header_elements_on_the_pages_while_access_createsubylink_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_variable_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.validate_the_elements_on_the_variable_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_footer_elements_on_the_pages_while_access_variable_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_header_elements_on_the_pages_while_access_variable_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_hammer_tab_as_empirix_business_analyst()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.validate_the_elements_on_the_hammer_tab_page_as_empirix_business_analyst()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_footer_elements_on_the_pages_while_access_hammer_tab_pages_as_empirix_business_analyst()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.verify_header_elements_on_the_pages_while_access_hammer_tab_pages_as_empirix_business_analyst()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_hammer_using_createhammerbybutton_as_empirix_business_analyst()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.validate_the_elements_on_the_hammer_tab_while_click_createhammerbybutton_as_empirix_business_analyst()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.navigate_to_hammer_using_createhammerbylink_as_empirix_business_analyst()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.validate_the_elements_on_the_hammer_tab_while_click_createhammerbylink_as_empirix_business_analyst()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0003_login_With_Empirix_Business_Analyst.close_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/F0004_login_With_Partner_Customer_Admin.feature");
formatter.feature({
  "line": 2,
  "name": "F0004_Login Voice Watch application with Partner_Customer_Admin creadetails and Validate Elements",
  "description": "",
  "id": "f0004-login-voice-watch-application-with-partner-customer-admin-creadetails-and-validate-elements",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@Sanity"
    },
    {
      "line": 1,
      "name": "@4"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Verify tab elements avaiablity based on User permission",
  "description": "",
  "id": "f0004-login-voice-watch-application-with-partner-customer-admin-creadetails-and-validate-elements;verify-tab-elements-avaiablity-based-on-user-permission",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Initialize the Driver of the browser and provide the URL to login with Partner_Customer_Admin",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Login with username and password with Partner_Customer_Admin",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that login successfully with Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Tab Availability Validation on the home screen while login with Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify header elements on the pages while access home page with Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify footer elements on the pages while access home page with Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "####################################################################################"
    },
    {
      "line": 13,
      "value": "#            Dashboard Tab Validation"
    },
    {
      "line": 14,
      "value": "####################################################################################"
    },
    {
      "line": 15,
      "value": "#@Sanity"
    },
    {
      "line": 16,
      "value": "#Scenario: Verify that dashboard tab pages"
    },
    {
      "line": 17,
      "value": "#Given Initialize the Driver of the browser and provide the URL to login with Empirix Admin"
    }
  ],
  "line": 18,
  "name": "Navigate to dashboard tab with login as Partner_Customer_Admin",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Validate the elements on the OverallPerfomance_section on the dashboard tab page as Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Validate the elements on the activetest_section on the dashboard tab page as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify header elements on the pages while access dashboard tab page as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify footer elements on the pages while access dashboard tab page as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "####################################################################################"
    },
    {
      "line": 24,
      "value": "#            Dashboard Alert Validation"
    },
    {
      "line": 25,
      "value": "####################################################################################"
    }
  ],
  "line": 26,
  "name": "Navigate to Alert tab as Partner_Customer_Admin",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Validate the elements on the Alert tab page as Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verify header elements on the pages while access alert tab pages as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify footer elements on the pages while access alert tab pages as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "####################################################################################"
    },
    {
      "line": 31,
      "value": "#            Test Tab Validation"
    },
    {
      "line": 32,
      "value": "####################################################################################"
    }
  ],
  "line": 33,
  "name": "Navigate to Test tab as Partner_Customer_Admin",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Validate the elements on the Test tab page as Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Verify footer elements on the pages while access Test tab pages as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify header elements on the pages while access Test tab pages as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Validate element while Create a Test using Test create button as Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Verify header elements on the pages while access Test tab while create test using button as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify footer elements on the pages while access Test tab while create test using button as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Validate element while Create a Test using Test create link as Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify header elements on the pages while access Test tab while create test using link as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify footer elements on the pages while access Test tab while create test using link as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "####################################################################################"
    },
    {
      "line": 44,
      "value": "#            Tag Tab Validation"
    },
    {
      "line": 45,
      "value": "####################################################################################"
    }
  ],
  "line": 46,
  "name": "Navigate to Tag tab as Partner_Customer_Admin",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Validate the elements on the Tag tab page as Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Verify footer elements on the pages while access Tag tab pages as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Verify header elements on the pages while access Tag tab pagesas Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Validate element while Create a Tag using Tag create tag button as Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Verify header elements on the pages while access Tag tab while create tag using button as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Verify footer elements on the pages while access Tag tab while create tag using button as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Validate element while Create a Tag using Tag create link as Partner_Customer_Admin as Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Verify header elements on the pages while access Tag tab while create tag using link as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Verify footer elements on the pages while access Tag tab while create tag using link as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 56,
      "value": "####################################################################################"
    },
    {
      "line": 57,
      "value": "#            Script Tab Validation"
    },
    {
      "line": 58,
      "value": "####################################################################################"
    },
    {
      "line": 59,
      "value": "#When Navigate to Script tab as Partner_Customer_Admin"
    },
    {
      "line": 60,
      "value": "#Then Validate the elements on the GoScriptBuilder tab page as Partner_Customer_Admin"
    },
    {
      "line": 61,
      "value": "#And Verify footer elements on the pages while access Script tab pages as Partner_Customer_Admin"
    },
    {
      "line": 62,
      "value": "#And Verify header elements on the pages while access Script tab pages as Partner_Customer_Admin"
    },
    {
      "line": 63,
      "value": "#When Navigate to GoScriptBuilder using createGSBbybutton as Partner_Customer_Admin"
    },
    {
      "line": 64,
      "value": "#Then Validate the elements on the GoScriptBuilder while click createGSBbybutton as Partner_Customer_Admin"
    },
    {
      "line": 65,
      "value": "#And Verify footer elements on the pages while access Script tab pages as Partner_Customer_Admin"
    },
    {
      "line": 66,
      "value": "#And Verify header elements on the pages while access Script tab pages as Partner_Customer_Admin"
    },
    {
      "line": 67,
      "value": "#When Navigate to GoScriptBuilder using createGSBbyLink as Partner_Customer_Admin"
    },
    {
      "line": 68,
      "value": "#Then Validate the elements on the GoScriptBuilder while click createGSBbyLink as Partner_Customer_Admin"
    },
    {
      "line": 69,
      "value": "#And Verify footer elements on the pages while access createGSBbyLink as Partner_Customer_Admin"
    },
    {
      "line": 70,
      "value": "#And Verify header elements on the pages while access createGSBbyLink as Partner_Customer_Admin"
    },
    {
      "line": 71,
      "value": "#When Navigate to ScriptUpload Tab as Partner_Customer_Admin"
    },
    {
      "line": 72,
      "value": "#Then navigate to scriptUploadTab and validate the elements on that tab as Partner_Customer_Admin"
    },
    {
      "line": 73,
      "value": "#And Verify footer elements on the pages while access scriptUploadTab pages as Partner_Customer_Admin"
    },
    {
      "line": 74,
      "value": "#And Verify header elements on the pages while access scriptUploadTab pages as Partner_Customer_Admin"
    },
    {
      "line": 75,
      "value": "#Then validate the element while clicking createSUbybutton as Partner_Customer_Admin"
    },
    {
      "line": 76,
      "value": "#And Verify footer elements on the pages while access createSUbybutton pages as Partner_Customer_Admin"
    },
    {
      "line": 77,
      "value": "#And Verify header elements on the pages while access createSUbybutton pages as Partner_Customer_Admin"
    },
    {
      "line": 78,
      "value": "#Then validate the element while clicking createSUbyLink as Partner_Customer_Admin"
    },
    {
      "line": 79,
      "value": "#And Verify footer elements on the pages while access createSUbyLink pages as Partner_Customer_Admin"
    },
    {
      "line": 80,
      "value": "#And Verify header elements on the pages while access createSUbyLink pages as Partner_Customer_Admin"
    },
    {
      "line": 81,
      "value": "#When Navigate to CSV Tab as Partner_Customer_Admin"
    },
    {
      "line": 82,
      "value": "#Then validate the element while clicking CSV Tab as Partner_Customer_Admin"
    },
    {
      "line": 83,
      "value": "#And Verify footer elements on the pages while access createSUbyLink pages as Partner_Customer_Admin"
    },
    {
      "line": 84,
      "value": "#And Verify header elements on the pages while access createSUbyLink pages as Partner_Customer_Admin"
    },
    {
      "line": 85,
      "value": "####################################################################################"
    },
    {
      "line": 86,
      "value": "#            Variable Tab Validation"
    },
    {
      "line": 87,
      "value": "####################################################################################"
    }
  ],
  "line": 88,
  "name": "Navigate to Variable tab as Partner_Customer_Admin",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "Validate the elements on the Variable tab page as Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "Verify footer elements on the pages while access Variable tab pages as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Verify header elements on the pages while access Variable tab pages as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Navigate to Variable using createVariableByButton as Partner_Customer_Admin",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "Validate the elements on the Variable tab while click createVariableByButton as Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "Verify footer elements on the pages while access createVariableByButton as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Verify header elements on the pages while access createVariableByButton as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Navigate to Variable using createVariableByLink as Partner_Customer_Admin",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "Validate the elements on the Variable tab while click createVariableByLink as Partner_Customer_Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "Verify footer elements on the pages while access createVariableByLink as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Verify header elements on the pages while access createVariableByLink as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 100,
      "value": "##################################################################################"
    }
  ],
  "line": 101,
  "name": "Close the browser successfully which was login as Partner_Customer_Admin",
  "keyword": "And "
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.initialize_the_driver_of_the_browser_and_provide_the_url_to_login_with_empirix_business_analyst()"
});
formatter.result({
  "duration": 3176534132,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d77.0.3865.120)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027REM-L-SINGHH\u0027, ip: \u002710.12.60.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.120, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\hsingh\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54013}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d5018fbde574449fa435a67afc07866a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat resources.basePropertiesCucm.intializeDriver(basePropertiesCucm.java:140)\r\n\tat stepDefinations.SD0004_login_With_Parner_Customer_Admin.initialize_the_driver_of_the_browser_and_provide_the_url_to_login_with_empirix_business_analyst(SD0004_login_With_Parner_Customer_Admin.java:40)\r\n\tat ✽.Given Initialize the Driver of the browser and provide the URL to login with Partner_Customer_Admin(features/F0004_login_With_Partner_Customer_Admin.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.login_with_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_that_login_successfully_with_empirix_business_analyst_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.tab_availability_validation_on_the_home_screen_while_login_with_empirix_business_analyst()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.navigate_to_dashboard_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_the_elements_on_the_overallperfomancesection_on_the_dashboard_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_the_elements_on_the_activetestsection_on_the_dashboard_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_dashboard_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_dashboard_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.navigate_to_alert_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_the_elements_on_the_alert_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_alert_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_alert_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.navigate_to_test_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_the_elements_on_the_test_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_test_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_test_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_element_while_create_a_test_using_test_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_test_tab_while_create_test_using_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_test_tab_while_create_test_using_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_element_while_create_a_test_using_test_create_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_test_tab_while_create_test_using_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_test_tab_while_create_test_using_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.navigate_to_tag_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_the_elements_on_the_tag_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_tag_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_tag_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_element_while_create_a_test_using_tag_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_tag_tab_while_create_test_using_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_tag_tab_while_create_test_using_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_element_while_create_a_test_using_tag_create_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_tag_tab_while_create_test_using_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_tag_tab_while_create_test_using_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.navigate_to_variable_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_the_elements_on_the_variable_tab_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_variable_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_variable_tab_pages()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.navigate_to_variable_using_createvariablebybutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_the_elements_on_the_variable_tab_while_click_createvariablebybutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_creategsbbylink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_createvariablebybutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.navigate_to_variable_using_createvariablebylink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.validate_the_elements_on_the_variable_tab_while_click_createvariablebylink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_footer_elements_on_the_pages_while_access_createvariablebylink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.verify_header_elements_on_the_pages_while_access_createvariablebylink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SD0004_login_With_Parner_Customer_Admin.close_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/F0005_login_With_Partner_Developer.feature");
formatter.feature({
  "line": 2,
  "name": "F0005_Login Voice Watch application with Partner_Developer creadetails and Validate Elements",
  "description": "",
  "id": "f0005-login-voice-watch-application-with-partner-developer-creadetails-and-validate-elements",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@Sanity"
    },
    {
      "line": 1,
      "name": "@5"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Verify tab elements avaiablity based on User permission",
  "description": "",
  "id": "f0005-login-voice-watch-application-with-partner-developer-creadetails-and-validate-elements;verify-tab-elements-avaiablity-based-on-user-permission",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Initialize the Driver of the browser and provide the URL to login with Partner_Developer",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Login with username and password with Partner_Developer",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that login successfully with Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Tab Availability Validation on the home screen while login with Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify header elements on the pages while access home page with Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify footer elements on the pages while access home page with Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "####################################################################################"
    },
    {
      "line": 13,
      "value": "#            Dashboard Tab Validation"
    },
    {
      "line": 14,
      "value": "####################################################################################"
    },
    {
      "line": 15,
      "value": "#@Sanity"
    },
    {
      "line": 16,
      "value": "#Scenario: Verify that dashboard tab pages"
    },
    {
      "line": 17,
      "value": "#Given Initialize the Driver of the browser and provide the URL to login with Empirix Admin"
    }
  ],
  "line": 18,
  "name": "Navigate to dashboard tab with login as Partner_Developer",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Validate the elements on the OverallPerfomance_section on the dashboard tab page as Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Validate the elements on the activetest_section on the dashboard tab page as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify header elements on the pages while access dashboard tab page as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify footer elements on the pages while access dashboard tab page as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "####################################################################################"
    },
    {
      "line": 24,
      "value": "#            Dashboard Alert Validation"
    },
    {
      "line": 25,
      "value": "####################################################################################"
    }
  ],
  "line": 26,
  "name": "Navigate to Alert tab as Partner_Developer",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Validate the elements on the Alert tab page as Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Verify header elements on the pages while access alert tab pages as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify footer elements on the pages while access alert tab pages as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "####################################################################################"
    },
    {
      "line": 31,
      "value": "#            Test Tab Validation"
    },
    {
      "line": 32,
      "value": "####################################################################################"
    }
  ],
  "line": 33,
  "name": "Navigate to Test tab as Partner_Developer",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Validate the elements on the Test tab page as Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Verify footer elements on the pages while access Test tab pages as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify header elements on the pages while access Test tab pages as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Validate element while Create a Test using Test create button as Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Verify header elements on the pages while access Test tab while create test using button as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify footer elements on the pages while access Test tab while create test using button as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Validate element while Create a Test using Test create link as Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify header elements on the pages while access Test tab while create test using link as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify footer elements on the pages while access Test tab while create test using link as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 43,
      "value": "####################################################################################"
    },
    {
      "line": 44,
      "value": "#            Tag Tab Validation"
    },
    {
      "line": 45,
      "value": "####################################################################################"
    }
  ],
  "line": 46,
  "name": "Navigate to Tag tab as Partner_Developer",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Validate the elements on the Tag tab page as Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Verify footer elements on the pages while access Tag tab pages as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Verify header elements on the pages while access Tag tab pagesas Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Validate element while Create a Tag using Tag create tag button as Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Verify header elements on the pages while access Tag tab while create tag using button as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Verify footer elements on the pages while access Tag tab while create tag using button as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Validate element while Create a Tag using Tag create link as Partner_Developer as Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Verify header elements on the pages while access Tag tab while create tag using link as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Verify footer elements on the pages while access Tag tab while create tag using link as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 56,
      "value": "####################################################################################"
    },
    {
      "line": 57,
      "value": "#            Script Tab Validation"
    },
    {
      "line": 58,
      "value": "####################################################################################"
    },
    {
      "line": 59,
      "value": "#When Navigate to Script tab as Partner_Developer"
    },
    {
      "line": 60,
      "value": "#Then Validate the elements on the GoScriptBuilder tab page as Partner_Developer"
    },
    {
      "line": 61,
      "value": "#And Verify footer elements on the pages while access Script tab pages as Partner_Developer"
    },
    {
      "line": 62,
      "value": "#And Verify header elements on the pages while access Script tab pages as Partner_Developer"
    },
    {
      "line": 63,
      "value": "#When Navigate to GoScriptBuilder using createGSBbybutton as Partner_Developer"
    },
    {
      "line": 64,
      "value": "#Then Validate the elements on the GoScriptBuilder while click createGSBbybutton as Partner_Developer"
    },
    {
      "line": 65,
      "value": "#And Verify footer elements on the pages while access Script tab pages as Partner_Developer"
    },
    {
      "line": 66,
      "value": "#And Verify header elements on the pages while access Script tab pages as Partner_Developer"
    },
    {
      "line": 67,
      "value": "#When Navigate to GoScriptBuilder using createGSBbyLink as Partner_Developer"
    },
    {
      "line": 68,
      "value": "#Then Validate the elements on the GoScriptBuilder while click createGSBbyLink as Partner_Developer"
    },
    {
      "line": 69,
      "value": "#And Verify footer elements on the pages while access createGSBbyLink as Partner_Developer"
    },
    {
      "line": 70,
      "value": "#And Verify header elements on the pages while access createGSBbyLink as Partner_Developer"
    },
    {
      "line": 71,
      "value": "#When Navigate to ScriptUpload Tab as Partner_Developer"
    },
    {
      "line": 72,
      "value": "#Then navigate to scriptUploadTab and validate the elements on that tab as Partner_Developer"
    },
    {
      "line": 73,
      "value": "#And Verify footer elements on the pages while access scriptUploadTab pages as Partner_Developer"
    },
    {
      "line": 74,
      "value": "#And Verify header elements on the pages while access scriptUploadTab pages as Partner_Developer"
    },
    {
      "line": 75,
      "value": "#Then validate the element while clicking createSUbybutton as Partner_Developer"
    },
    {
      "line": 76,
      "value": "#And Verify footer elements on the pages while access createSUbybutton pages as Partner_Developer"
    },
    {
      "line": 77,
      "value": "#And Verify header elements on the pages while access createSUbybutton pages as Partner_Developer"
    },
    {
      "line": 78,
      "value": "#Then validate the element while clicking createSUbyLink as Partner_Developer"
    },
    {
      "line": 79,
      "value": "#And Verify footer elements on the pages while access createSUbyLink pages as Partner_Developer"
    },
    {
      "line": 80,
      "value": "#And Verify header elements on the pages while access createSUbyLink pages as Partner_Developer"
    },
    {
      "line": 81,
      "value": "#When Navigate to CSV Tab as Partner_Developer"
    },
    {
      "line": 82,
      "value": "#Then validate the element while clicking CSV Tab as Partner_Developer"
    },
    {
      "line": 83,
      "value": "#And Verify footer elements on the pages while access createSUbyLink pages as Partner_Developer"
    },
    {
      "line": 84,
      "value": "#And Verify header elements on the pages while access createSUbyLink pages as Partner_Developer"
    },
    {
      "line": 85,
      "value": "####################################################################################"
    },
    {
      "line": 86,
      "value": "#            Variable Tab Validation"
    },
    {
      "line": 87,
      "value": "####################################################################################"
    }
  ],
  "line": 88,
  "name": "Navigate to Variable tab as Partner_Developer",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "Validate the elements on the Variable tab page as Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "Verify footer elements on the pages while access Variable tab pages as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Verify header elements on the pages while access Variable tab pages as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Navigate to Variable using createVariableByButton as Partner_Developer",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "Validate the elements on the Variable tab while click createVariableByButton as Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "Verify footer elements on the pages while access createVariableByButton as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Verify header elements on the pages while access createVariableByButton as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Navigate to Variable using createVariableByLink as Partner_Developer",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "Validate the elements on the Variable tab while click createVariableByLink as Partner_Developer",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "Verify footer elements on the pages while access createVariableByLink as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Verify header elements on the pages while access createVariableByLink as Partner_Developer",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 100,
      "value": "##################################################################################"
    }
  ],
  "line": 101,
  "name": "Close the browser successfully which was login as Partner_Developer",
  "keyword": "And "
});
formatter.match({
  "location": "SD0005_login_With_Partner_Developer.initialize_the_driver_of_the_browser_and_provide_the_url_to_login_with_empirix_business_analyst()"
});
formatter.result({
  "duration": 24614652495,
  "status": "passed"
});
formatter.match({
  "location": "SD0005_login_With_Partner_Developer.login_with_username_and_password()"
});
