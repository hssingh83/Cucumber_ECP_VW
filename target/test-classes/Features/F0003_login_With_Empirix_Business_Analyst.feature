@Regression
Feature: F0003_Login Voice Watch application with Empirix Business analyst creadetails and Validate Elements

Scenario: Verify tab elements avaiablity based on User permission
  
Given Initialize the Driver of the browser and provide the URL to login with Empirix Business analyst
When Login with username and password with Empirix Business analyst
Then Verify that login successfully with Empirix Business analyst
And Tab Availability Validation on the home screen while login with Empirix Business analyst
And Verify header elements on the pages while access home page with Empirix Business analyst
And Verify footer elements on the pages while access home page with Empirix Business analyst
####################################################################################
#            Dashboard Tab Validation
####################################################################################
#@Sanity
#Scenario: Verify that dashboard tab pages  
#Given Initialize the Driver of the browser and provide the URL to login with Empirix Admin
When Navigate to dashboard tab with login as Empirix Business analyst
Then Validate the elements on the OverallPerfomance_section on the dashboard tab page as Empirix Business analyst
And Validate the elements on the activetest_section on the dashboard tab page as Empirix Business analyst
And Verify header elements on the pages while access dashboard tab page as Empirix Business analyst
And Verify footer elements on the pages while access dashboard tab page as Empirix Business analyst
####################################################################################
#            Dashboard Alert Validation
####################################################################################
When Navigate to Alert tab as Empirix Business analyst
Then Validate the elements on the Alert tab page as Empirix Business analyst
And Verify header elements on the pages while access alert tab pages as Empirix Business analyst 
And Verify footer elements on the pages while access alert tab pages as Empirix Business analyst
####################################################################################
#            Test Tab Validation
####################################################################################
When Navigate to Test tab as Empirix Business analyst
Then Validate the elements on the Test tab page as Empirix Business analyst
And Verify footer elements on the pages while access Test tab pages as Empirix Business analyst
And Verify header elements on the pages while access Test tab pages as Empirix Business analyst
#Then Validate element while Create a Test using Test create button as Empirix Business analyst
#And Verify header elements on the pages while access Test tab while create test using button as Empirix Business analyst
#And Verify footer elements on the pages while access Test tab while create test using button as Empirix Business analyst
#Then Validate element while Create a Test using Test create link as Empirix Business analyst
#And Verify header elements on the pages while access Test tab while create test using link as Empirix Business analyst
#And Verify footer elements on the pages while access Test tab while create test using link as Empirix Business analyst
####################################################################################
#            Tag Tab Validation
####################################################################################
When Navigate to Tag tab as Empirix Business analyst
Then Validate the elements on the Tag tab page as Empirix Business analyst
And Verify footer elements on the pages while access Tag tab pages as Empirix Business analyst
And Verify header elements on the pages while access Tag tab pagesas Empirix Business analyst
#Then Validate element while Create a Tag using Tag create tag button as Empirix Business analyst
#And Verify header elements on the pages while access Tag tab while create tag using button as Empirix Business analyst
#And Verify footer elements on the pages while access Tag tab while create tag using button as Empirix Business analyst
#Then Validate element while Create a Tag using Tag create link as Empirix Business analyst as Empirix Business analyst
#And Verify header elements on the pages while access Tag tab while create tag using link as Empirix Business analyst
#And Verify footer elements on the pages while access Tag tab while create tag using link as Empirix Business analyst
####################################################################################
#            Script Tab Validation
####################################################################################
When Navigate to Script tab as Empirix Business analyst
Then Validate the elements on the GoScriptBuilder tab page as Empirix Business analyst
And Verify footer elements on the pages while access Script tab pages as Empirix Business analyst
And Verify header elements on the pages while access Script tab pages as Empirix Business analyst
#When Navigate to GoScriptBuilder using createGSBbybutton as Empirix Business analyst
#Then Validate the elements on the GoScriptBuilder while click createGSBbybutton as Empirix Business analyst
#And Verify footer elements on the pages while access Script tab pages as Empirix Business analyst
#And Verify header elements on the pages while access Script tab pages as Empirix Business analyst
#When Navigate to GoScriptBuilder using createGSBbyLink as Empirix Business analyst
#Then Validate the elements on the GoScriptBuilder while click createGSBbyLink as Empirix Business analyst
#And Verify footer elements on the pages while access createGSBbyLink as Empirix Business analyst
#And Verify header elements on the pages while access createGSBbyLink as Empirix Business analyst
When Navigate to ScriptUpload Tab as Empirix Business analyst
Then navigate to scriptUploadTab and validate the elements on that tab as Empirix Business analyst
And Verify footer elements on the pages while access scriptUploadTab pages as Empirix Business analyst
And Verify header elements on the pages while access scriptUploadTab pages as Empirix Business analyst
#Then validate the element while clicking createSUbybutton as Empirix Business analyst
#And Verify footer elements on the pages while access createSUbybutton pages as Empirix Business analyst
#And Verify header elements on the pages while access createSUbybutton pages as Empirix Business analyst
#Then validate the element while clicking createSUbyLink as Empirix Business analyst
#And Verify footer elements on the pages while access createSUbyLink pages as Empirix Business analyst
#And Verify header elements on the pages while access createSUbyLink pages as Empirix Business analyst
When Navigate to CSV Tab as Empirix Business analyst
Then validate the element while clicking CSV Tab as Empirix Business analyst
And Verify footer elements on the pages while access createSUbyLink pages as Empirix Business analyst
And Verify header elements on the pages while access createSUbyLink pages as Empirix Business analyst
####################################################################################
#            Variable Tab Validation
####################################################################################
When Navigate to Variable tab as Empirix Business analyst
Then Validate the elements on the Variable tab page as Empirix Business analyst
And Verify footer elements on the pages while access Variable tab pages as Empirix Business analyst
And Verify header elements on the pages while access Variable tab pages as Empirix Business analyst
#When Navigate to Variable using createVariableByButton as Empirix Business analyst
#Then Validate the elements on the Variable tab while click createVariableByButton as Empirix Business analyst
#And Verify footer elements on the pages while access createVariableByButton as Empirix Business analyst
#And Verify header elements on the pages while access createVariableByButton as Empirix Business analyst
#When Navigate to Variable using createVariableByLink as Empirix Business analyst
#Then Validate the elements on the Variable tab while click createVariableByLink as Empirix Business analyst
#And Verify footer elements on the pages while access createVariableByLink as Empirix Business analyst
#And Verify header elements on the pages while access createVariableByLink as Empirix Business analyst
####################################################################################
#            Hammer Tab Validation
####################################################################################
When Navigate to Hammer tab as Empirix Business analyst
Then Validate the elements on the Hammer tab page as Empirix Business analyst
And Verify footer elements on the pages while access Hammer tab pages as Empirix Business analyst
And Verify header elements on the pages while access Hammer tab pages as Empirix Business analyst
When Navigate to Hammer using createHammerByButton as Empirix Business analyst
Then Validate the elements on the Hammer tab while click createHammerByButton as Empirix Business analyst
When Navigate to Hammer using createHammerByLink as Empirix Business analyst
Then Validate the elements on the Hammer tab while click createHammerByLink as Empirix Business analyst
##################################################################################
And Close the browser successfully which was login as Empirix Business analyst  