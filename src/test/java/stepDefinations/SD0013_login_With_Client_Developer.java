package stepDefinations;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import resources.basePropertiesCucm;
import resources.dataDriven;

import java.io.IOException;
import java.util.ArrayList;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.testng.Assert;

import PageActions.pom001_VoiceWatch_logIn_Page;
import PageActions.pom002_VoiceWatch_Home_Page;
import PageActions.pom003_VoiceWatch_Dashboard_Tab;
import PageActions.pom004_VoiceWatch_Alerts_Tab;
import PageActions.pom005_VoiceWatch_Tests_Tab;
import PageActions.pom006_VoiceWatch_Tags_Tab;
import PageActions.pom007_VoiceWatch_Script_Tabs;
import PageActions.pom008_VoiceWatch_Variable_Tab;
import VW_TC.TC0001_login_Page_Verification;

@RunWith(Cucumber.class)

public class SD0013_login_With_Client_Developer extends basePropertiesCucm {
	
	private static Logger log =LogManager.getLogger(TC0001_login_Page_Verification.class.getName());

    // Login with Empirix_Business_Analyst Credentials
	
	@Given("^Initialize the Driver of the browser and provide the URL to login with Client_Developer$")
    public void initialize_the_driver_of_the_browser_and_provide_the_url_to_login_with_empirix_business_analyst() throws IOException, InterruptedException  {
		driver=intializeDriver();
    }

    @When("^Login with username and password with Client_Developer$")
    public void login_with_username_and_password() throws Throwable {
         
    	pom001_VoiceWatch_logIn_Page l=new pom001_VoiceWatch_logIn_Page(driver);
    	dataDriven d=new dataDriven();
    	ArrayList<String> data=d.getData("login","Clinet/Developer");
	    l.getUsername().sendKeys(data.get(1));
	    l.getPassword().sendKeys(data.get(2));
	    l.getSignButton().click();
	    Thread.sleep(10);
    	 
    }

    @Then("^Verify that login successfully with Client_Developer$")
    public void verify_that_login_successfully_with_empirix_business_analyst_user() throws Throwable {
    	 log.info("Waiting for launch VoiceWatch application using above creadetails");
 	    Assert.assertTrue(driver.findElement(By.linkText("Back to top")).isDisplayed());
 	    log.info("Verified that VoiceWatch Application login successfully with Client_Developer creadetial");
 	    log.info("Validate the requiment as Aceess Level= Empirix & Role=Business Analyst");   
    }

    @And("^Tab Availability Validation on the home screen while login with Client_Developer$")
    public void tab_availability_validation_on_the_home_screen_while_login_with_empirix_business_analyst() throws Throwable {
    	pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
		 d.home_screen();
    }

    @And("^Verify header elements on the pages while access home page with Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_home_page() throws Throwable {
    	pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	    d.header();
    }

    @And("^Verify footer elements on the pages while access home page with Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_home_page() throws Throwable {
    	pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	    d.footer();
    }
    
 // Access to dashboard tab and validate elemets
    
    @When("^Navigate to dashboard tab with login as Client_Developer$")
    public void navigate_to_dashboard_tab() throws Throwable {
 	   By dashBoardTab=By.linkText("Dashboard");
 	//   Thread.sleep(10000);
 	   driver.findElement(dashBoardTab).click();
       
    }

    @Then("^Validate the elements on the OverallPerfomance_section on the dashboard tab page as Client_Developer$")
    public void validate_the_elements_on_the_overallperfomancesection_on_the_dashboard_tab_page() throws InterruptedException  {
 	   
 	   pom003_VoiceWatch_Dashboard_Tab db=new pom003_VoiceWatch_Dashboard_Tab(driver);
 	   db.OverallPerfomance_section_dashboard();
      
    }

    @And("^Validate the elements on the activetest_section on the dashboard tab page as Client_Developer$")
    public void validate_the_elements_on_the_activetestsection_on_the_dashboard_tab_page() throws Throwable {
       
 	   pom003_VoiceWatch_Dashboard_Tab db=new pom003_VoiceWatch_Dashboard_Tab(driver);
 	   db.OverallPerfomance_section_dashboard();
 	   db.activetest_section_dashboard();
 		   }
    

    @And("^Verify header elements on the pages while access dashboard tab page as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_dashboard_tab_page() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
 	   d.header();
    }

    @And("^Verify footer elements on the pages while access dashboard tab page as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_dashboard_tab_page() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
 	   d.footer();
    }
    // Access to Alert tab and validate elements
    
    @When("^Navigate to Alert tab as Client_Developer$")
    public void navigate_to_alert_tab() throws Throwable {
 	   By alertsTab=By.linkText("Alerts");
 	   driver.findElement(alertsTab).click();
    }

    @Then("^Validate the elements on the Alert tab page as Client_Developer$")
    public void validate_the_elements_on_the_alert_tab_page() throws Throwable {
 	   pom004_VoiceWatch_Alerts_Tab at=new pom004_VoiceWatch_Alerts_Tab (driver);
 	   at.alertsValidations();	
    }

    @And("^Verify footer elements on the pages while access alert tab pages as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_alert_tab_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
 	   d.header();
    }

    @And("^Verify header elements on the pages while access alert tab pages as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_alert_tab_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
 	   d.footer();
 	 }
   // Access to Test Tab and validate elements  
    
    @When("^Navigate to Test tab as Client_Developer$")
    public void navigate_to_test_tab() throws Throwable {
 	   By testTab=By.linkText("Tests");
 	   driver.findElement(testTab).click();
    }

    @Then("^Validate the elements on the Test tab page as Client_Developer$")
    public void validate_the_elements_on_the_test_tab_page() throws Throwable {
 	   pom005_VoiceWatch_Tests_Tab ts=new pom005_VoiceWatch_Tests_Tab(driver);
 	   ts.testsValidations();
    }
    
    @And("^Verify header elements on the pages while access Test tab pages as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_test_tab_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }
    
    @And("^Verify footer elements on the pages while access Test tab pages as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_test_tab_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    }

    @Then("^Validate element while Create a Test using Test create button as Client_Developer$")
    public void validate_element_while_create_a_test_using_test_create_button() throws Throwable {
 	   pom005_VoiceWatch_Tests_Tab ts=new pom005_VoiceWatch_Tests_Tab(driver);
 	   ts.createTestbybutton();
    }
    
    @And("^Verify header elements on the pages while access Test tab while create test using button as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_test_tab_while_create_test_using_button() throws Throwable {
 	  
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }
    
    @And("^Verify footer elements on the pages while access Test tab while create test using button as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_test_tab_while_create_test_using_button() throws Throwable {
 	  
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
     
    }  

    @Then("^Validate element while Create a Test using Test create link as Client_Developer$")
    public void validate_element_while_create_a_test_using_test_create_link() throws Throwable {
 	   pom005_VoiceWatch_Tests_Tab ts=new pom005_VoiceWatch_Tests_Tab(driver);
 	   ts.createTestbyLink();
    }

    @And("^Verify footer elements on the pages while access Test tab while create test using link as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_test_tab_while_create_test_using_link() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    
    }

    @And("^Verify header elements on the pages while access Test tab while create test using link as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_test_tab_while_create_test_using_link() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }
    // Access to Tag Tab and validate elements
    
    @When("^Navigate to Tag tab as Client_Developer$")
    public void navigate_to_tag_tab() throws Throwable {
 	   By tagTab=By.linkText("Tags");
 	   driver.findElement(tagTab).click();	
    }

    @Then("^Validate the elements on the Tag tab page as Client_Developer$")
    public void validate_the_elements_on_the_tag_tab_page() throws Throwable {
 	   pom006_VoiceWatch_Tags_Tab tg=new pom006_VoiceWatch_Tags_Tab(driver);
 	   tg.tagsValidations();
    }

    @Then("^Validate element while Create a Tag using Tag create tag button as Client_Developer$")
    public void validate_element_while_create_a_test_using_tag_create_button() throws Throwable {
 	   pom006_VoiceWatch_Tags_Tab tg=new pom006_VoiceWatch_Tags_Tab(driver);
 	   tg.createTagbybutton();
    }

    @Then("^Validate element while Create a Tag using Tag create link as Client_Developer as Client_Developer$")
    public void validate_element_while_create_a_test_using_tag_create_link() throws Throwable {
 	   pom006_VoiceWatch_Tags_Tab tg=new pom006_VoiceWatch_Tags_Tab(driver);
 	   tg.createNewTag();
    }

    @And("^Verify footer elements on the pages while access Tag tab pages as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_tag_tab_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    }

    @And("^Verify header elements on the pages while access Tag tab pagesas Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_tag_tab_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }

    @And("^Verify footer elements on the pages while access Tag tab while create tag using button as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_tag_tab_while_create_test_using_button() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    }

    @And("^Verify header elements on the pages while access Tag tab while create tag using button as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_tag_tab_while_create_test_using_button() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }

    @And("^Verify footer elements on the pages while access Tag tab while create tag using link as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_tag_tab_while_create_test_using_link() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    }

    @And("^Verify header elements on the pages while access Tag tab while create tag using link as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_tag_tab_while_create_test_using_link() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }
    
    // Access to Script Tab and validate elements
    
    @When("^Navigate to Script tab as Client_Developer$")
    public void navigate_to_script_tab() throws Throwable {
 	   By scriptsTab=By.linkText("Scripts");
 	   driver.findElement(scriptsTab).click();		
    }

    @Then("^Validate the elements on the GoScriptBuilder tab page as Client_Developer$")
    public void validate_the_elements_on_the_goscriptbuilder_tab_page() throws Throwable {
 	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
 	   sc.goScriptBuilderTabValidation();
    }
    
    @When("^Navigate to GoScriptBuilder using createGSBbybutton as Client_Developer$")
    public void navigate_to_goscriptbuilder_using_creategsbbybutton() throws Throwable {
 	    By tagTab=By.linkText("Tags");
 		By scriptsTab=By.linkText("Scripts");
 	    driver.findElement(tagTab).click();
 		driver.findElement(scriptsTab).click();
    }

    @Then("^Validate the elements on the GoScriptBuilder while click createGSBbybutton as Client_Developer$")
    public void validate_the_elements_on_the_goscriptbuilder_while_click_creategsbbybutton() throws Throwable {
 	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
 	   sc.createGSBbybutton();
    }
    
    @Then("^Validate the elements on the GoScriptBuilder while click createGSBbyLink as Client_Developer$")
    public void validate_the_elements_on_the_goscriptbuilder_while_click_creategsbbylink() throws Throwable {
 	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
 	   sc.createGSBbyLink();
    }
    
    @When("^Navigate to GoScriptBuilder using createGSBbyLink as Client_Developer$")
    public void navigate_to_goscriptbuilder_using_creategsbbylink() throws Throwable {
 	   By tagTab=By.linkText("Tags");
 			By scriptsTab=By.linkText("Scripts");
 		    driver.findElement(tagTab).click();
 			driver.findElement(scriptsTab).click();
    }
    
    @And("^Verify footer elements on the pages while access createGSBbyLink as Client_Developer$")
    public void Verify_footer_elements_on_the_pages_while_access_createGSBbyLink() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();;
    }

    @And("^Verify header elements on the pages while access createGSBbyLink as Client_Developer$")
    public void Verify_header_elements_on_the_pages_while_access_createGSBbyLink() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }
    
    @When("^Navigate to ScriptUpload Tab as Client_Developer$")
    public void navigate_to_scriptupload_tab() throws Throwable {
 	   By scriptUploadTab=By.xpath("//span[contains(text(),'Script Upload')]");
 	   
 	   driver.findElement(scriptUploadTab).click();
    }

    @Then("^navigate to scriptUploadTab and validate the elements on that tab as Client_Developer$")
    public void navigate_to_scriptuploadtab_and_validate_the_elements_on_that_tab() throws Throwable {
 	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
 	   sc.scriptUploadTabValidation();
    }

    @Then("^validate the element while clicking createSUbybutton as Client_Developer$")
    public void validate_the_element_while_clicking_createsubybutton() throws Throwable {
 	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
 	   sc.createSUbybutton();
 		
    }

    @Then("^validate the element while clicking createSUbyLink as Client_Developer$")
    public void validate_the_element_while_clicking_createsubylink() throws Throwable {
 	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
 	   sc.createSUbyLink();
    }

    @When("^Navigate to CSV Tab as Client_Developer$")
    public void navigate_to_csv_tab() throws Throwable {
 	   By csvTranformerTab=By.xpath("//span[contains(text(),'CSV Transformer')]");
 	   driver.findElement(csvTranformerTab).click();
 	   
    }

    @Then("^validate the element while clicking CSV Tab as Client_Developer$")
    public void validate_the_element_while_clicking_csv_tab() throws Throwable {
 	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
 	   sc.csvTabValidation();
    }

    @And("^Verify footer elements on the pages while access Script tab pages as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_script_tab_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    
    }

    @And("^Verify header elements on the pages while access Script tab pages as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_script_tab_pages() throws Throwable {

 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }

    @And("^Verify footer elements on the pages while access scriptUploadTab pages as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_scriptuploadtab_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    
    }

    @And("^Verify header elements on the pages while access scriptUploadTab pages as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_scriptuploadtab_pages() throws Throwable {

 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }

    @And("^Verify footer elements on the pages while access createSUbybutton pages as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_createsubybutton_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    
    }

    @And("^Verify header elements on the pages while access createSUbybutton pages as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_createsubybutton_pages() throws Throwable {

 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }

    @And("^Verify footer elements on the pages while access createSUbyLink pages as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_createsubylink_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    
    }

    @And("^Verify header elements on the pages while access createSUbyLink pages as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_createsubylink_pages() throws Throwable {

 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }
    
    // Access to Variable Tab and validate elements
    
    @When("^Navigate to Variable tab as Client_Developer$")
    public void navigate_to_variable_tab() throws Throwable {
 	   By variablesTab=By.linkText("Variables");
 	   driver.findElement(variablesTab).click();	
    }

    @When("^Navigate to Variable using createVariableByButton as Client_Developer$")
    public void navigate_to_variable_using_createvariablebybutton() throws Throwable {
 	   By tagTab=By.linkText("Tags");
 	   By variablesTab=By.linkText("Variables");
 	   driver.findElement(tagTab).click();
        driver.findElement(variablesTab).click();
 	   
 	   
    }

    @When("^Navigate to Variable using createVariableByLink as Client_Developer$")
    public void navigate_to_variable_using_createvariablebylink() throws Throwable {
 	   By tagTab=By.linkText("Tags");
 	   By variablesTab=By.linkText("Variables");
 	   driver.findElement(tagTab).click();
        driver.findElement(variablesTab).click();
    }

    @Then("^Validate the elements on the Variable tab page as Client_Developer$")
    public void validate_the_elements_on_the_variable_tab_page() throws Throwable {
 	  
 	  	   
 	   pom008_VoiceWatch_Variable_Tab vr=new pom008_VoiceWatch_Variable_Tab(driver);
 	   vr.variableTabValidation();
    }

    @Then("^Validate the elements on the Variable tab while click createVariableByButton as Client_Developer$")
    public void validate_the_elements_on_the_variable_tab_while_click_createvariablebybutton() throws Throwable {
 	   pom008_VoiceWatch_Variable_Tab vr=new pom008_VoiceWatch_Variable_Tab(driver);
 	   vr.createVariableByButton();
    }

    @Then("^Validate the elements on the Variable tab while click createVariableByLink as Client_Developer$")
    public void validate_the_elements_on_the_variable_tab_while_click_createvariablebylink() throws Throwable {
 	   pom008_VoiceWatch_Variable_Tab vr=new pom008_VoiceWatch_Variable_Tab(driver);
 	   vr.createVariableByLink();
    }

    @And("^Verify footer elements on the pages while access Variable tab pages as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_variable_tab_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    }

    @And("^Verify header elements on the pages while access Variable tab pages as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_variable_tab_pages() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }

    @And("^Verify footer elements on the pages while access createVariableByButton as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_creategsbbylink() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    }

    @And("^Verify header elements on the pages while access createVariableByButton as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_createvariablebybutton() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }

    @And("^Verify footer elements on the pages while access createVariableByLink as Client_Developer$")
    public void verify_footer_elements_on_the_pages_while_access_createvariablebylink() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.footer();
    }

    @And("^Verify header elements on the pages while access createVariableByLink as Client_Developer$")
    public void verify_header_elements_on_the_pages_while_access_createvariablebylink() throws Throwable {
 	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
 	   d.header();
    }
    
    @And("^Close the browser successfully which was login as Client_Developer$")
    public void close_the_application() throws Throwable {
    	driver.close();
    	log.info("Application closed successfully");
    }
    
}