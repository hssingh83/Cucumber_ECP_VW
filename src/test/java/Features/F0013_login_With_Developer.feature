@Regression @Sanity @13
Feature: F0009_Login Voice Watch application with Client_Developer creadetails and Validate Elements

Scenario: Verify tab elements avaiablity based on User permission
  
Given Initialize the Driver of the browser and provide the URL to login with Client_Developer
When Login with username and password with Client_Developer
Then Verify that login successfully with Client_Developer
And Tab Availability Validation on the home screen while login with Client_Developer
And Verify header elements on the pages while access home page with Client_Developer
And Verify footer elements on the pages while access home page with Client_Developer
####################################################################################
#            Dashboard Tab Validation
####################################################################################
#@Sanity
#Scenario: Verify that dashboard tab pages  
#Given Initialize the Driver of the browser and provide the URL to login with Empirix Admin
When Navigate to dashboard tab with login as Client_Developer
Then Validate the elements on the OverallPerfomance_section on the dashboard tab page as Client_Developer
And Validate the elements on the activetest_section on the dashboard tab page as Client_Developer
And Verify header elements on the pages while access dashboard tab page as Client_Developer
And Verify footer elements on the pages while access dashboard tab page as Client_Developer
####################################################################################
#            Dashboard Alert Validation
####################################################################################
When Navigate to Alert tab as Client_Developer
Then Validate the elements on the Alert tab page as Client_Developer
And Verify header elements on the pages while access alert tab pages as Client_Developer
And Verify footer elements on the pages while access alert tab pages as Client_Developer
####################################################################################
#            Test Tab Validation
####################################################################################
When Navigate to Test tab as Client_Developer
Then Validate the elements on the Test tab page as Client_Developer
And Verify footer elements on the pages while access Test tab pages as Client_Developer
And Verify header elements on the pages while access Test tab pages as Client_Developer
Then Validate element while Create a Test using Test create button as Client_Developer
And Verify header elements on the pages while access Test tab while create test using button as Client_Developer
And Verify footer elements on the pages while access Test tab while create test using button as Client_Developer
Then Validate element while Create a Test using Test create link as Client_Developer
And Verify header elements on the pages while access Test tab while create test using link as Client_Developer
And Verify footer elements on the pages while access Test tab while create test using link as Client_Developer
####################################################################################
#            Tag Tab Validation
####################################################################################
When Navigate to Tag tab as Client_Developer
Then Validate the elements on the Tag tab page as Client_Developer
And Verify footer elements on the pages while access Tag tab pages as Client_Developer
And Verify header elements on the pages while access Tag tab pagesas Client_Developer
Then Validate element while Create a Tag using Tag create tag button as Client_Developer
And Verify header elements on the pages while access Tag tab while create tag using button as Client_Developer
And Verify footer elements on the pages while access Tag tab while create tag using button as Client_Developer
Then Validate element while Create a Tag using Tag create link as Client_Developer as Client_Developer
And Verify header elements on the pages while access Tag tab while create tag using link as Client_Developer
And Verify footer elements on the pages while access Tag tab while create tag using link as Client_Developer
####################################################################################
#            Script Tab Validation
####################################################################################
When Navigate to Script tab as Client_Developer
Then Validate the elements on the GoScriptBuilder tab page as Client_Developer
And Verify footer elements on the pages while access Script tab pages as Client_Developer
And Verify header elements on the pages while access Script tab pages as Client_Developer
When Navigate to GoScriptBuilder using createGSBbybutton as Client_Developer
Then Validate the elements on the GoScriptBuilder while click createGSBbybutton as Client_Developer
And Verify footer elements on the pages while access Script tab pages as Client_Developer
And Verify header elements on the pages while access Script tab pages as Client_Developer
When Navigate to GoScriptBuilder using createGSBbyLink as Client_Developer
Then Validate the elements on the GoScriptBuilder while click createGSBbyLink as Client_Developer
And Verify footer elements on the pages while access createGSBbyLink as Client_Developer
And Verify header elements on the pages while access createGSBbyLink as Client_Developer
#When Navigate to ScriptUpload Tab as Client_Developer
#Then navigate to scriptUploadTab and validate the elements on that tab as Client_Developer
#And Verify footer elements on the pages while access scriptUploadTab pages as Client_Developer
#And Verify header elements on the pages while access scriptUploadTab pages as Client_Developer
#Then validate the element while clicking createSUbybutton as Client_Developer
#And Verify footer elements on the pages while access createSUbybutton pages as Client_Developer
#And Verify header elements on the pages while access createSUbybutton pages as Client_Developer
#Then validate the element while clicking createSUbyLink as Client_Developer
#And Verify footer elements on the pages while access createSUbyLink pages as Client_Developer
#And Verify header elements on the pages while access createSUbyLink pages as Client_Developer
When Navigate to CSV Tab as Client_Developer
Then validate the element while clicking CSV Tab as Client_Developer
And Verify footer elements on the pages while access createSUbyLink pages as Client_Developer
And Verify header elements on the pages while access createSUbyLink pages as Client_Developer
####################################################################################
#            Variable Tab Validation
####################################################################################
When Navigate to Variable tab as Client_Developer
Then Validate the elements on the Variable tab page as Client_Developer
And Verify footer elements on the pages while access Variable tab pages as Client_Developer
And Verify header elements on the pages while access Variable tab pages as Client_Developer
When Navigate to Variable using createVariableByButton as Client_Developer
Then Validate the elements on the Variable tab while click createVariableByButton as Client_Developer
And Verify footer elements on the pages while access createVariableByButton as Client_Developer
And Verify header elements on the pages while access createVariableByButton as Client_Developer
When Navigate to Variable using createVariableByLink as Client_Developer
Then Validate the elements on the Variable tab while click createVariableByLink as Client_Developer
And Verify footer elements on the pages while access createVariableByLink as Client_Developer
And Verify header elements on the pages while access createVariableByLink as Client_Developer
##################################################################################
And Close the browser successfully which was login as Client_Developer