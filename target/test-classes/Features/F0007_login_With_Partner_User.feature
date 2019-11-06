@Regression
Feature: F0007_Login Voice Watch application with Partner_User creadetails and Validate Elements

Scenario: Verify tab elements avaiablity based on User permission
  
Given Initialize the Driver of the browser and provide the URL to login with Partner_User
When Login with username and password with Partner_User
Then Verify that login successfully with Partner_User
And Tab Availability Validation on the home screen while login with Partner_User
And Verify header elements on the pages while access home page with Partner_User
And Verify footer elements on the pages while access home page with Partner_User
####################################################################################
#            Dashboard Tab Validation
####################################################################################
#@Sanity
#Scenario: Verify that dashboard tab pages  
#Given Initialize the Driver of the browser and provide the URL to login with Empirix Admin
When Navigate to dashboard tab with login as Partner_User
Then Validate the elements on the OverallPerfomance_section on the dashboard tab page as Partner_User
And Validate the elements on the activetest_section on the dashboard tab page as Partner_User
And Verify header elements on the pages while access dashboard tab page as Partner_User
And Verify footer elements on the pages while access dashboard tab page as Partner_User
####################################################################################
#            Dashboard Alert Validation
####################################################################################
When Navigate to Alert tab as Partner_User
Then Validate the elements on the Alert tab page as Partner_User
And Verify header elements on the pages while access alert tab pages as Partner_User
And Verify footer elements on the pages while access alert tab pages as Partner_User
####################################################################################
#            Test Tab Validation
####################################################################################
When Navigate to Test tab as Partner_User
Then Validate the elements on the Test tab page as Partner_User
And Verify footer elements on the pages while access Test tab pages as Partner_User
And Verify header elements on the pages while access Test tab pages as Partner_User
#Then Validate element while Create a Test using Test create button as Partner_User
#And Verify header elements on the pages while access Test tab while create test using button as Partner_User
#And Verify footer elements on the pages while access Test tab while create test using button as Partner_User
#Then Validate element while Create a Test using Test create link as Partner_User
#And Verify header elements on the pages while access Test tab while create test using link as Partner_User
#And Verify footer elements on the pages while access Test tab while create test using link as Partner_User
####################################################################################
#            Tag Tab Validation
####################################################################################
#When Navigate to Tag tab as Partner_User
#Then Validate the elements on the Tag tab page as Partner_User
#And Verify footer elements on the pages while access Tag tab pages as Partner_User
#And Verify header elements on the pages while access Tag tab pagesas Partner_User
#Then Validate element while Create a Tag using Tag create tag button as Partner_User
#And Verify header elements on the pages while access Tag tab while create tag using button as Partner_User
#And Verify footer elements on the pages while access Tag tab while create tag using button as Partner_User
#Then Validate element while Create a Tag using Tag create link as Partner_User as Partner_User
#And Verify header elements on the pages while access Tag tab while create tag using link as Partner_User
#And Verify footer elements on the pages while access Tag tab while create tag using link as Partner_User
####################################################################################
#            Script Tab Validation
####################################################################################
#When Navigate to Script tab as Partner_User
#Then Validate the elements on the GoScriptBuilder tab page as Partner_User
#And Verify footer elements on the pages while access Script tab pages as Partner_User
#And Verify header elements on the pages while access Script tab pages as Partner_User
#When Navigate to GoScriptBuilder using createGSBbybutton as Partner_User
#Then Validate the elements on the GoScriptBuilder while click createGSBbybutton as Partner_User
#And Verify footer elements on the pages while access Script tab pages as Partner_User
#And Verify header elements on the pages while access Script tab pages as Partner_User
#When Navigate to GoScriptBuilder using createGSBbyLink as Partner_User
#Then Validate the elements on the GoScriptBuilder while click createGSBbyLink as Partner_User
#And Verify footer elements on the pages while access createGSBbyLink as Partner_User
#And Verify header elements on the pages while access createGSBbyLink as Partner_User
#When Navigate to ScriptUpload Tab as Partner_User
#Then navigate to scriptUploadTab and validate the elements on that tab as Partner_User
#And Verify footer elements on the pages while access scriptUploadTab pages as Partner_User
#And Verify header elements on the pages while access scriptUploadTab pages as Partner_User
#Then validate the element while clicking createSUbybutton as Partner_User
#And Verify footer elements on the pages while access createSUbybutton pages as Partner_User
#And Verify header elements on the pages while access createSUbybutton pages as Partner_User
#Then validate the element while clicking createSUbyLink as Partner_User
#And Verify footer elements on the pages while access createSUbyLink pages as Partner_User
#And Verify header elements on the pages while access createSUbyLink pages as Partner_User
#When Navigate to CSV Tab as Partner_User
#Then validate the element while clicking CSV Tab as Partner_User
#And Verify footer elements on the pages while access createSUbyLink pages as Partner_User
#And Verify header elements on the pages while access createSUbyLink pages as Partner_User
####################################################################################
#            Variable Tab Validation
####################################################################################
When Navigate to Variable tab as Partner_User
Then Validate the elements on the Variable tab page as Partner_User
And Verify footer elements on the pages while access Variable tab pages as Partner_User
And Verify header elements on the pages while access Variable tab pages as Partner_User
When Navigate to Variable using createVariableByButton as Partner_User
Then Validate the elements on the Variable tab while click createVariableByButton as Partner_User
And Verify footer elements on the pages while access createVariableByButton as Partner_User
And Verify header elements on the pages while access createVariableByButton as Partner_User
When Navigate to Variable using createVariableByLink as Partner_User
Then Validate the elements on the Variable tab while click createVariableByLink as Partner_User
And Verify footer elements on the pages while access createVariableByLink as Partner_User
And Verify header elements on the pages while access createVariableByLink as Partner_User
##################################################################################
And Close the browser successfully which was login as Partner_User