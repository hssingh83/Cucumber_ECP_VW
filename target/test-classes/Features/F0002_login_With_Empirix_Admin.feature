@2
Feature: F0002_Login Voice Watch application with Empirix Admin credetials and validate

Scenario: Verify that login with Empirix Admin page and Verify the element on the home page  
Given Initialize the Driver of the browser and provide the URL to login with Empirix Admin
When Login with username and password as Empirix Admin
Then Verify that login successfully with Empirix admin user
And Tab Availability Validation on the home screen while login with Empirix Admin page
And Verify header elements on the pages as as Empirix Admin
And Verify footer elements on the pages as Empirix Admin
####################################################################################
#            Dashboard Tab Validation
####################################################################################
#@Sanity
#Scenario: Verify that dashboard tab pages  
#Given Initialize the Driver of the browser and provide the URL to login with Empirix Admin
When Navigate to dashboard tab
Then Validate the elements on the OverallPerfomance_section on the dashboard tab page
And Validate the elements on the activetest_section on the dashboard tab page
And Verify header elements on the pages while access dashboard tab page
And Verify footer elements on the pages while access dashboard tab page
####################################################################################
#            Alert Tab Validation
####################################################################################
When Navigate to Alert tab
Then Validate the elements on the Alert tab page
And Verify header elements on the pages while access alert tab pages
And Verify footer elements on the pages while access alert tab pages
####################################################################################
#            Test Tab Validation
####################################################################################
When Navigate to Test tab
Then Validate the elements on the Test tab page
And Verify footer elements on the pages while access Test tab pages
And Verify header elements on the pages while access Test tab pages
Then Validate element while Create a Test using Test create button
And Verify header elements on the pages while access Test tab while create test using button
And Verify footer elements on the pages while access Test tab while create test using button
Then Validate element while Create a Test using Test create link
And Verify header elements on the pages while access Test tab while create test using link
And Verify footer elements on the pages while access Test tab while create test using link
####################################################################################
#            Tag Tab Validation
####################################################################################
When Navigate to Tag tab
Then Validate the elements on the Tag tab page
And Verify footer elements on the pages while access Tag tab pages
And Verify header elements on the pages while access Tag tab pages
Then Validate element while Create a Tag using Tag create tag button
And Verify header elements on the pages while access Tag tab while create test using button
And Verify footer elements on the pages while access Tag tab while create test using button
Then Validate element while Create a Tag using Tag create link
And Verify header elements on the pages while access Tag tab while create test using link
And Verify footer elements on the pages while access Tag tab while create test using link
####################################################################################
#            Script Tab Validation
####################################################################################
When Navigate to Script tab
Then Validate the elements on the GoScriptBuilder tab page
And Verify footer elements on the pages while access Script tab pages
And Verify header elements on the pages while access Script tab pages
When Navigate to GoScriptBuilder using createGSBbybutton
Then Validate the elements on the GoScriptBuilder while click createGSBbybutton
And Verify footer elements on the pages while access Script tab pages
And Verify header elements on the pages while access Script tab pages
When Navigate to GoScriptBuilder using createGSBbyLink
Then Validate the elements on the GoScriptBuilder while click createGSBbyLink
And Verify footer elements on the pages while access createGSBbyLink
And Verify header elements on the pages while access createGSBbyLink
When Navigate to ScriptUpload Tab
Then navigate to scriptUploadTab and validate the elements on that tab
And Verify footer elements on the pages while access scriptUploadTab pages
And Verify header elements on the pages while access scriptUploadTab pages
Then validate the element while clicking createSUbybutton
And Verify footer elements on the pages while access createSUbybutton pages
And Verify header elements on the pages while access createSUbybutton pages
Then validate the element while clicking createSUbyLink
And Verify footer elements on the pages while access createSUbyLink pages
And Verify header elements on the pages while access createSUbyLink pages
When Navigate to CSV Tab
Then validate the element while clicking CSV Tab
And Verify footer elements on the pages while access createSUbyLink pages
And Verify header elements on the pages while access createSUbyLink pages
####################################################################################
#            Variable Tab Validation
####################################################################################
When Navigate to Variable tab
Then Validate the elements on the Variable tab page
And Verify footer elements on the pages while access Variable tab pages
And Verify header elements on the pages while access Variable tab pages
When Navigate to Variable using createVariableByButton
Then Validate the elements on the Variable tab while click createVariableByButton
And Verify footer elements on the pages while access createVariableByButton
And Verify header elements on the pages while access createVariableByButton
When Navigate to Variable using createVariableByLink
Then Validate the elements on the Variable tab while click createVariableByLink
And Verify footer elements on the pages while access createVariableByLink
And Verify header elements on the pages while access createVariableByLink
####################################################################################
#            Hammer Tab Validation
####################################################################################
When Navigate to Hammer tab
Then Validate the elements on the Hammer tab page
And Verify footer elements on the pages while access Hammer tab pages
And Verify header elements on the pages while access Hammer tab pages
When Navigate to Hammer using createHammerByButton
Then Validate the elements on the Hammer tab while click createHammerByButton
When Navigate to Hammer using createHammerByLink
Then Validate the elements on the Hammer tab while click createHammerByLink
##################################################################################
And Close the browser successfully which was login as Empirix Admin