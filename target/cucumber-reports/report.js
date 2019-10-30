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
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@Sanity"
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
  "duration": 15122715032,
  "status": "passed"
});
formatter.match({
  "location": "SD0001_login_Page_Verification.access_to_voicewatch_page()"
});
formatter.result({
  "duration": 961717855,
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
formatter.uri("features/F0002_login_With_Empirix_Admin.feature");
formatter.feature({
  "line": 2,
  "name": "F0002_Login Voice Watch application with Empirix Admin credetials and validate",
  "description": "",
  "id": "f0002-login-voice-watch-application-with-empirix-admin-credetials-and-validate",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Verify that login with Empirix Admin page and Verify the element on the home page",
  "description": "",
  "id": "f0002-login-voice-watch-application-with-empirix-admin-credetials-and-validate;verify-that-login-with-empirix-admin-page-and-verify-the-element-on-the-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Initialize the Driver of the browser and provide the URL to login with Empirix Admin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Login with username and password as Empirix Admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify that login successfully with Empirix admin user",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Tab Availability Validation on the home screen while login with Empirix Admin page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify header elements on the pages as as Empirix Admin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify footer elements on the pages as Empirix Admin",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "####################################################################################"
    },
    {
      "line": 12,
      "value": "#            Dashboard Tab Validation"
    },
    {
      "line": 13,
      "value": "####################################################################################"
    },
    {
      "line": 14,
      "value": "#@Sanity"
    },
    {
      "line": 15,
      "value": "#Scenario: Verify that dashboard tab pages"
    },
    {
      "line": 16,
      "value": "#Given Initialize the Driver of the browser and provide the URL to login with Empirix Admin"
    }
  ],
  "line": 17,
  "name": "Navigate to dashboard tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Validate the elements on the OverallPerfomance_section on the dashboard tab page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Validate the elements on the activetest_section on the dashboard tab page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify header elements on the pages while access dashboard tab page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify footer elements on the pages while access dashboard tab page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "####################################################################################"
    },
    {
      "line": 23,
      "value": "#            Alert Tab Validation"
    },
    {
      "line": 24,
      "value": "####################################################################################"
    }
  ],
  "line": 25,
  "name": "Navigate to Alert tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Validate the elements on the Alert tab page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Verify header elements on the pages while access alert tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify footer elements on the pages while access alert tab pages",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "####################################################################################"
    },
    {
      "line": 30,
      "value": "#            Test Tab Validation"
    },
    {
      "line": 31,
      "value": "####################################################################################"
    }
  ],
  "line": 32,
  "name": "Navigate to Test tab",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Validate the elements on the Test tab page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Verify footer elements on the pages while access Test tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify header elements on the pages while access Test tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Validate element while Create a Test using Test create button",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Verify header elements on the pages while access Test tab while create test using button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify footer elements on the pages while access Test tab while create test using button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Validate element while Create a Test using Test create link",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify header elements on the pages while access Test tab while create test using link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify footer elements on the pages while access Test tab while create test using link",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 42,
      "value": "####################################################################################"
    },
    {
      "line": 43,
      "value": "#            Tag Tab Validation"
    },
    {
      "line": 44,
      "value": "####################################################################################"
    }
  ],
  "line": 45,
  "name": "Navigate to Tag tab",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Validate the elements on the Tag tab page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Verify footer elements on the pages while access Tag tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Verify header elements on the pages while access Tag tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Validate element while Create a Tag using Tag create tag button",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Verify header elements on the pages while access Tag tab while create test using button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Verify footer elements on the pages while access Tag tab while create test using button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Validate element while Create a Tag using Tag create link",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Verify header elements on the pages while access Tag tab while create test using link",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Verify footer elements on the pages while access Tag tab while create test using link",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 55,
      "value": "####################################################################################"
    },
    {
      "line": 56,
      "value": "#            Script Tab Validation"
    },
    {
      "line": 57,
      "value": "####################################################################################"
    }
  ],
  "line": 58,
  "name": "Navigate to Script tab",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "Validate the elements on the GoScriptBuilder tab page",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Verify footer elements on the pages while access Script tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Verify header elements on the pages while access Script tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Navigate to GoScriptBuilder using createGSBbybutton",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Validate the elements on the GoScriptBuilder while click createGSBbybutton",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Verify footer elements on the pages while access Script tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Verify header elements on the pages while access Script tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Navigate to GoScriptBuilder using createGSBbyLink",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "Validate the elements on the GoScriptBuilder while click createGSBbyLink",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Verify footer elements on the pages while access createGSBbyLink",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Verify header elements on the pages while access createGSBbyLink",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Navigate to ScriptUpload Tab",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "navigate to scriptUploadTab and validate the elements on that tab",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Verify footer elements on the pages while access scriptUploadTab pages",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Verify header elements on the pages while access scriptUploadTab pages",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "validate the element while clicking createSUbybutton",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Verify footer elements on the pages while access createSUbybutton pages",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Verify header elements on the pages while access createSUbybutton pages",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "validate the element while clicking createSUbyLink",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Verify footer elements on the pages while access createSUbyLink pages",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Verify header elements on the pages while access createSUbyLink pages",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Navigate to CSV Tab",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "validate the element while clicking CSV Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Verify footer elements on the pages while access createSUbyLink pages",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Verify header elements on the pages while access createSUbyLink pages",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 84,
      "value": "####################################################################################"
    },
    {
      "line": 85,
      "value": "#            Variable Tab Validation"
    },
    {
      "line": 86,
      "value": "####################################################################################"
    }
  ],
  "line": 87,
  "name": "Navigate to Variable tab",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "Validate the elements on the Variable tab page",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "Verify footer elements on the pages while access Variable tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Verify header elements on the pages while access Variable tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Navigate to Variable using createVariableByButton",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "Validate the elements on the Variable tab while click createVariableByButton",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "Verify footer elements on the pages while access createVariableByButton",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Verify header elements on the pages while access createVariableByButton",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Navigate to Variable using createVariableByLink",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "Validate the elements on the Variable tab while click createVariableByLink",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "Verify footer elements on the pages while access createVariableByLink",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Verify header elements on the pages while access createVariableByLink",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 99,
      "value": "####################################################################################"
    },
    {
      "line": 100,
      "value": "#            Hammer Tab Validation"
    },
    {
      "line": 101,
      "value": "####################################################################################"
    }
  ],
  "line": 102,
  "name": "Navigate to Hammer tab",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "Validate the elements on the Hammer tab page",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "Verify footer elements on the pages while access Hammer tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Verify header elements on the pages while access Hammer tab pages",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Navigate to Hammer using createHammerByButton",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "Validate the elements on the Hammer tab while click createHammerByButton",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "Navigate to Hammer using createHammerByLink",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "Validate the elements on the Hammer tab while click createHammerByLink",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 110,
      "value": "##################################################################################"
    }
  ],
  "line": 111,
  "name": "Close the browser successfully which was login as Empirix Admin",
  "keyword": "And "
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.initialize_the_driver_of_the_browser_and_provide_the_url()"
});
formatter.result({
  "duration": 13940819936,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.logInWithExpirixAdmin()"
});
formatter.result({
  "duration": 4322288172,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.login_Page_Verification()"
});
formatter.result({
  "duration": 12861050317,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.home_screen_verification()"
});
formatter.result({
  "duration": 779490638,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.home_screen_footer_Validation()"
});
formatter.result({
  "duration": 522564342,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.home_screen_header_Validation()"
});
formatter.result({
  "duration": 559581518,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.navigate_to_dashboard_tab()"
});
formatter.result({
  "duration": 100164267,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.validate_the_elements_on_the_overallperfomancesection_on_the_dashboard_tab_page()"
});
formatter.result({
  "duration": 3179948917,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.validate_the_elements_on_the_activetestsection_on_the_dashboard_tab_page()"
});
formatter.result({
  "duration": 1276439490,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.verify_header_elements_on_the_pages_while_access_dashboard_tab_page()"
});
formatter.result({
  "duration": 534139119,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.verify_footer_elements_on_the_pages_while_access_dashboard_tab_page()"
});
formatter.result({
  "duration": 425838617,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.navigate_to_alert_tab()"
});
formatter.result({
  "duration": 102952628,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.validate_the_elements_on_the_alert_tab_page()"
});
formatter.result({
  "duration": 2382892234,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.verify_header_elements_on_the_pages_while_access_alert_tab_pages()"
});
formatter.result({
  "duration": 483190804,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.verify_footer_elements_on_the_pages_while_access_alert_tab_pages()"
});
formatter.result({
  "duration": 436883940,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.navigate_to_test_tab()"
});
formatter.result({
  "duration": 103557718,
  "status": "passed"
});
formatter.match({
  "location": "SD0002_login_With_Empirix_Admin.validate_the_elements_on_the_test_tab_page()"
});
