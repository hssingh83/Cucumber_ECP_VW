@Regression @Sanity @5
Feature: F0005_Login Voice Watch application with Partner_Developer creadetails and Validate Elements

Scenario: Verify tab elements avaiablity based on User permission
  
Given Initialize the Driver of the browser and provide the URL to login with Partner_Developer
When Login with username and password with Partner_Developer
Then Verify that login successfully with Partner_Developer
And Tab Availability Validation on the home screen while login with Partner_Developer
And Verify header elements on the pages while access home page with Partner_Developer
And Verify footer elements on the pages while access home page with Partner_Developer
####################################################################################
#            Dashboard Tab Validation
####################################################################################
#@Sanity
#Scenario: Verify that dashboard tab pages  
#Given Initialize the Driver of the browser and provide the URL to login with Empirix Admin
When Navigate to dashboard tab with login as Partner_Developer
Then Validate the elements on the OverallPerfomance_section on the dashboard tab page as Partner_Developer
And Validate the elements on the activetest_section on the dashboard tab page as Partner_Developer
And Verify header elements on the pages while access dashboard tab page as Partner_Developer
And Verify footer elements on the pages while access dashboard tab page as Partner_Developer
####################################################################################
#            Dashboard Alert Validation
####################################################################################
When Navigate to Alert tab as Partner_Developer
Then Validate the elements on the Alert tab page as Partner_Developer
And Verify header elements on the pages while access alert tab pages as Partner_Developer
And Verify footer elements on the pages while access alert tab pages as Partner_Developer
####################################################################################
#            Test Tab Validation
####################################################################################
When Navigate to Test tab as Partner_Developer
Then Validate the elements on the Test tab page as Partner_Developer
And Verify footer elements on the pages while access Test tab pages as Partner_Developer
And Verify header elements on the pages while access Test tab pages as Partner_Developer
Then Validate element while Create a Test using Test create button as Partner_Developer
And Verify header elements on the pages while access Test tab while create test using button as Partner_Developer
And Verify footer elements on the pages while access Test tab while create test using button as Partner_Developer
Then Validate element while Create a Test using Test create link as Partner_Developer
And Verify header elements on the pages while access Test tab while create test using link as Partner_Developer
And Verify footer elements on the pages while access Test tab while create test using link as Partner_Developer
####################################################################################
#            Tag Tab Validation
####################################################################################
When Navigate to Tag tab as Partner_Developer
Then Validate the elements on the Tag tab page as Partner_Developer
And Verify footer elements on the pages while access Tag tab pages as Partner_Developer
And Verify header elements on the pages while access Tag tab pagesas Partner_Developer
Then Validate element while Create a Tag using Tag create tag button as Partner_Developer
And Verify header elements on the pages while access Tag tab while create tag using button as Partner_Developer
And Verify footer elements on the pages while access Tag tab while create tag using button as Partner_Developer
Then Validate element while Create a Tag using Tag create link as Partner_Developer as Partner_Developer
And Verify header elements on the pages while access Tag tab while create tag using link as Partner_Developer
And Verify footer elements on the pages while access Tag tab while create tag using link as Partner_Developer
####################################################################################
#            Script Tab Validation
####################################################################################
#When Navigate to Script tab as Partner_Developer
#Then Validate the elements on the GoScriptBuilder tab page as Partner_Developer
#And Verify footer elements on the pages while access Script tab pages as Partner_Developer
#And Verify header elements on the pages while access Script tab pages as Partner_Developer
#When Navigate to GoScriptBuilder using createGSBbybutton as Partner_Developer
#Then Validate the elements on the GoScriptBuilder while click createGSBbybutton as Partner_Developer
#And Verify footer elements on the pages while access Script tab pages as Partner_Developer
#And Verify header elements on the pages while access Script tab pages as Partner_Developer
#When Navigate to GoScriptBuilder using createGSBbyLink as Partner_Developer
#Then Validate the elements on the GoScriptBuilder while click createGSBbyLink as Partner_Developer
#And Verify footer elements on the pages while access createGSBbyLink as Partner_Developer
#And Verify header elements on the pages while access createGSBbyLink as Partner_Developer
#When Navigate to ScriptUpload Tab as Partner_Developer
#Then navigate to scriptUploadTab and validate the elements on that tab as Partner_Developer
#And Verify footer elements on the pages while access scriptUploadTab pages as Partner_Developer
#And Verify header elements on the pages while access scriptUploadTab pages as Partner_Developer
#Then validate the element while clicking createSUbybutton as Partner_Developer
#And Verify footer elements on the pages while access createSUbybutton pages as Partner_Developer
#And Verify header elements on the pages while access createSUbybutton pages as Partner_Developer
#Then validate the element while clicking createSUbyLink as Partner_Developer
#And Verify footer elements on the pages while access createSUbyLink pages as Partner_Developer
#And Verify header elements on the pages while access createSUbyLink pages as Partner_Developer
#When Navigate to CSV Tab as Partner_Developer
#Then validate the element while clicking CSV Tab as Partner_Developer
#And Verify footer elements on the pages while access createSUbyLink pages as Partner_Developer
#And Verify header elements on the pages while access createSUbyLink pages as Partner_Developer
####################################################################################
#            Variable Tab Validation
####################################################################################
When Navigate to Variable tab as Partner_Developer
Then Validate the elements on the Variable tab page as Partner_Developer
And Verify footer elements on the pages while access Variable tab pages as Partner_Developer
And Verify header elements on the pages while access Variable tab pages as Partner_Developer
When Navigate to Variable using createVariableByButton as Partner_Developer
Then Validate the elements on the Variable tab while click createVariableByButton as Partner_Developer
And Verify footer elements on the pages while access createVariableByButton as Partner_Developer
And Verify header elements on the pages while access createVariableByButton as Partner_Developer
When Navigate to Variable using createVariableByLink as Partner_Developer
Then Validate the elements on the Variable tab while click createVariableByLink as Partner_Developer
And Verify footer elements on the pages while access createVariableByLink as Partner_Developer
And Verify header elements on the pages while access createVariableByLink as Partner_Developer
##################################################################################
And Close the browser successfully which was login as Partner_Developer