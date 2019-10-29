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
import PageActions.pom009_VoiceWatch_Hammers_Tab;
import VW_TC.TC0001_login_Page_Verification;

@RunWith(Cucumber.class)

public class SD0002_login_With_Empirix_Admin extends basePropertiesCucm {
	
	private static Logger log =LogManager.getLogger(TC0001_login_Page_Verification.class.getName());


    @Given("^Initialize the Driver of the browser and provide the URL to login with Empirix Admin$")
    public void initialize_the_driver_of_the_browser_and_provide_the_url() throws Throwable {
    	driver=intializeDriver();
       }

    @When("^Login with username and password as Empirix Admin$")
    public void logInWithExpirixAdmin() throws InterruptedException, IOException {
    	
    	dataDriven d=new dataDriven();
	    ArrayList<String> data=d.getData("login","Empirix/Admin");
    	
    	pom001_VoiceWatch_logIn_Page l=new pom001_VoiceWatch_logIn_Page(driver);
		
		l.getUsername().sendKeys(data.get(1));
        l.getPassword().sendKeys(data.get(2));
	    l.getSignButton().click();
	    Thread.sleep(10);
	    log.info("Waiting for launch VoiceWatch application using above creadetails");	   
    	
       }
    
    @Then("^Verify that login successfully with Empirix admin user$")
    public void login_Page_Verification() throws Throwable {
    	 Assert.assertTrue(driver.findElement(By.linkText("Back to top")).isDisplayed());
 	    log.info("Verified that VoiceWatch Application login successfully with Empirix Admin creadetial");
 	    log.info("Validate the requiment as Aceess Level= Empirix & Role=Empirix Admin");
      }
    
  
   @And("^Close the browser successfully which was login as Empirix Admin$")
    public void close_the_application() throws Throwable {
    	driver.close();
    	log.info("Application closed successfully");
    }
   
   @And("^Tab Availability Validation on the home screen while login with Empirix Admin page$")
   public void home_screen_verification() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	    d.home_screen();
   }

   @And("^Verify header elements on the pages as as Empirix Admin$")
   public void home_screen_footer_Validation() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	    d.footer();	
   }

   @And("^Verify footer elements on the pages as Empirix Admin$")
   public void home_screen_header_Validation() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	    d.header();
   }
   
    
   
   @When("^Navigate to dashboard tab$")
   public void navigate_to_dashboard_tab() throws Throwable {
	   By dashBoardTab=By.linkText("Dashboard");
	//   Thread.sleep(10000);
	   driver.findElement(dashBoardTab).click();
      
   }

   @Then("^Validate the elements on the OverallPerfomance_section on the dashboard tab page$")
   public void validate_the_elements_on_the_overallperfomancesection_on_the_dashboard_tab_page() throws InterruptedException  {
	   
	   pom003_VoiceWatch_Dashboard_Tab db=new pom003_VoiceWatch_Dashboard_Tab(driver);
	   db.OverallPerfomance_section_dashboard();
     
   }

   @And("^Validate the elements on the activetest_section on the dashboard tab page$")
   public void validate_the_elements_on_the_activetestsection_on_the_dashboard_tab_page() throws Throwable {
      
	   pom003_VoiceWatch_Dashboard_Tab db=new pom003_VoiceWatch_Dashboard_Tab(driver);
	   db.OverallPerfomance_section_dashboard();
	   db.activetest_section_dashboard();
		   }
   

   @And("^Verify footer elements on the pages while access dashboard tab page$")
   public void verify_footer_elements_on_the_pages_while_access_dashboard_tab_page() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	   d.header();
   }

   @And("^Verify header elements on the pages while access dashboard tab page$")
   public void verify_header_elements_on_the_pages_while_access_dashboard_tab_page() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	   d.footer();
   }
   
  
   @When("^Navigate to Alert tab$")
   public void navigate_to_alert_tab() throws Throwable {
	   By alertsTab=By.linkText("Alerts");
	   driver.findElement(alertsTab).click();
   }

   @Then("^Validate the elements on the Alert tab page$")
   public void validate_the_elements_on_the_alert_tab_page() throws Throwable {
	   pom004_VoiceWatch_Alerts_Tab at=new pom004_VoiceWatch_Alerts_Tab (driver);
	   at.alertsValidations();	
   }

   @And("^Verify footer elements on the pages while access alert tab pages$")
   public void verify_footer_elements_on_the_pages_while_access_alert_tab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	   d.header();
   }

   @And("^Verify header elements on the pages while access alert tab pages$")
   public void verify_header_elements_on_the_pages_while_access_alert_tab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	   d.footer();
   }
   
   // Navigate to test tab and validate elemts on the pages
   
   @When("^Navigate to Test tab$")
   public void navigate_to_test_tab() throws Throwable {
	   By testTab=By.linkText("Tests");
	   driver.findElement(testTab).click();
   }

   @Then("^Validate the elements on the Test tab page$")
   public void validate_the_elements_on_the_test_tab_page() throws Throwable {
	   pom005_VoiceWatch_Tests_Tab ts=new pom005_VoiceWatch_Tests_Tab(driver);
	   ts.testsValidations();
   }
   
   @And("^Verify header elements on the pages while access Test tab pages$")
   public void verify_header_elements_on_the_pages_while_access_test_tab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }
   
   @And("^Verify footer elements on the pages while access Test tab pages$")
   public void verify_footer_elements_on_the_pages_while_access_test_tab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   }

   @Then("^Validate element while Create a Test using Test create button$")
   public void validate_element_while_create_a_test_using_test_create_button() throws Throwable {
	   pom005_VoiceWatch_Tests_Tab ts=new pom005_VoiceWatch_Tests_Tab(driver);
	   ts.createTestbybutton();
   }
   
   @And("^Verify header elements on the pages while access Test tab while create test using button$")
   public void verify_header_elements_on_the_pages_while_access_test_tab_while_create_test_using_button() throws Throwable {
	  
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }
   
   @And("^Verify footer elements on the pages while access Test tab while create test using button$")
   public void verify_footer_elements_on_the_pages_while_access_test_tab_while_create_test_using_button() throws Throwable {
	  
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   
 
   }  

   @Then("^Validate element while Create a Test using Test create link$")
   public void validate_element_while_create_a_test_using_test_create_link() throws Throwable {
	   pom005_VoiceWatch_Tests_Tab ts=new pom005_VoiceWatch_Tests_Tab(driver);
	   ts.createTestbyLink();
   }

   @And("^Verify footer elements on the pages while access Test tab while create test using link$")
   public void verify_footer_elements_on_the_pages_while_access_test_tab_while_create_test_using_link() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   
   }

   @And("^Verify header elements on the pages while access Test tab while create test using link$")
   public void verify_header_elements_on_the_pages_while_access_test_tab_while_create_test_using_link() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }

   @When("^Navigate to Tag tab$")
   public void navigate_to_tag_tab() throws Throwable {
	   By tagTab=By.linkText("Tags");
	   driver.findElement(tagTab).click();	
   }

   @Then("^Validate the elements on the Tag tab page$")
   public void validate_the_elements_on_the_tag_tab_page() throws Throwable {
	   pom006_VoiceWatch_Tags_Tab tg=new pom006_VoiceWatch_Tags_Tab(driver);
	   tg.tagsValidations();
   }

   @Then("^Validate element while Create a Tag using Tag create tag button$")
   public void validate_element_while_create_a_test_using_tag_create_button() throws Throwable {
	   pom006_VoiceWatch_Tags_Tab tg=new pom006_VoiceWatch_Tags_Tab(driver);
	   tg.createTagbybutton();
   }

   @Then("^Validate element while Create a Tag using Tag create link$")
   public void validate_element_while_create_a_test_using_tag_create_link() throws Throwable {
	   pom006_VoiceWatch_Tags_Tab tg=new pom006_VoiceWatch_Tags_Tab(driver);
	   tg.createNewTag();
   }

   @And("^Verify footer elements on the pages while access Tag tab pages$")
   public void verify_footer_elements_on_the_pages_while_access_tag_tab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   }

   @And("^Verify header elements on the pages while access Tag tab pages$")
   public void verify_header_elements_on_the_pages_while_access_tag_tab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }

   @And("^Verify footer elements on the pages while access Tag tab while create test using button$")
   public void verify_footer_elements_on_the_pages_while_access_tag_tab_while_create_test_using_button() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   }

   @And("^Verify header elements on the pages while access Tag tab while create test using button$")
   public void verify_header_elements_on_the_pages_while_access_tag_tab_while_create_test_using_button() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }

   @And("^Verify footer elements on the pages while access Tag tab while create test using link$")
   public void verify_footer_elements_on_the_pages_while_access_tag_tab_while_create_test_using_link() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   }

   @And("^Verify header elements on the pages while access Tag tab while create test using link$")
   public void verify_header_elements_on_the_pages_while_access_tag_tab_while_create_test_using_link() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }
  
   // Script Tab validation
   
   @When("^Navigate to Script tab$")
   public void navigate_to_script_tab() throws Throwable {
	   By scriptsTab=By.linkText("Scripts");
	   driver.findElement(scriptsTab).click();		
   }

   @Then("^Validate the elements on the GoScriptBuilder tab page$")
   public void validate_the_elements_on_the_goscriptbuilder_tab_page() throws Throwable {
	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
	   sc.goScriptBuilderTabValidation();
   }
   
   @When("^Navigate to GoScriptBuilder using createGSBbybutton$")
   public void navigate_to_goscriptbuilder_using_creategsbbybutton() throws Throwable {
	    By tagTab=By.linkText("Tags");
		By scriptsTab=By.linkText("Scripts");
	    driver.findElement(tagTab).click();
		driver.findElement(scriptsTab).click();
   }

   @Then("^Validate the elements on the GoScriptBuilder while click createGSBbybutton$")
   public void validate_the_elements_on_the_goscriptbuilder_while_click_creategsbbybutton() throws Throwable {
	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
	   sc.createGSBbybutton();
   }
   
   @Then("^Validate the elements on the GoScriptBuilder while click createGSBbyLink$")
   public void validate_the_elements_on_the_goscriptbuilder_while_click_creategsbbylink() throws Throwable {
	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
	   sc.scriptUploadTabValidation();
   }
   
   @When("^Navigate to GoScriptBuilder using createGSBbyLink$")
   public void navigate_to_goscriptbuilder_using_creategsbbylink() throws Throwable {
	   By tagTab=By.linkText("Tags");
			By scriptsTab=By.linkText("Scripts");
		    driver.findElement(tagTab).click();
			driver.findElement(scriptsTab).click();
   }
   
   @And("^Verify footer elements on the pages while access createGSBbyLink$")
   public void Verify_footer_elements_on_the_pages_while_access_createGSBbyLink() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();;
   }

   @And("^Verify header elements on the pages while access createGSBbyLink$")
   public void Verify_header_elements_on_the_pages_while_access_createGSBbyLink() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }
   
   @When("^Navigate to ScriptUpload Tab$")
   public void navigate_to_scriptupload_tab() throws Throwable {
	   By scriptUploadTab=By.xpath("//span[contains(text(),'Script Upload')]");
	   driver.findElement(scriptUploadTab).click();
   }

   @Then("^navigate to scriptUploadTab and validate the elements on that tab$")
   public void navigate_to_scriptuploadtab_and_validate_the_elements_on_that_tab() throws Throwable {
	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
	   sc.scriptUploadTabValidation();
   }

   @Then("^validate the element while clicking createSUbybutton$")
   public void validate_the_element_while_clicking_createsubybutton() throws Throwable {
	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
	   sc.createSUbybutton();
		
   }

   @Then("^validate the element while clicking createSUbyLink$")
   public void validate_the_element_while_clicking_createsubylink() throws Throwable {
	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
	   sc.createSUbyLink();
   }

   @When("^Navigate to CSV Tab$")
   public void navigate_to_csv_tab() throws Throwable {
	   By csvTranformerTab=By.xpath("//span[contains(text(),'CSV Transformer')]");
	   driver.findElement(csvTranformerTab).click();
	   
   }

   @Then("^validate the element while clicking CSV Tab$")
   public void validate_the_element_while_clicking_csv_tab() throws Throwable {
	   pom007_VoiceWatch_Script_Tabs sc=new pom007_VoiceWatch_Script_Tabs(driver);
	   sc.csvTabValidation();
   }

   @And("^Verify footer elements on the pages while access Script tab pages$")
   public void verify_footer_elements_on_the_pages_while_access_script_tab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   
   }

   @And("^Verify header elements on the pages while access Script tab pages$")
   public void verify_header_elements_on_the_pages_while_access_script_tab_pages() throws Throwable {

	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }

   @And("^Verify footer elements on the pages while access scriptUploadTab pages$")
   public void verify_footer_elements_on_the_pages_while_access_scriptuploadtab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   
   }

   @And("^Verify header elements on the pages while access scriptUploadTab pages$")
   public void verify_header_elements_on_the_pages_while_access_scriptuploadtab_pages() throws Throwable {

	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }

   @And("^Verify footer elements on the pages while access createSUbybutton pages$")
   public void verify_footer_elements_on_the_pages_while_access_createsubybutton_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   
   }

   @And("^Verify header elements on the pages while access createSUbybutton pages$")
   public void verify_header_elements_on_the_pages_while_access_createsubybutton_pages() throws Throwable {

	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }

   @And("^Verify footer elements on the pages while access createSUbyLink pages$")
   public void verify_footer_elements_on_the_pages_while_access_createsubylink_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   
   }

   @And("^Verify header elements on the pages while access createSUbyLink pages$")
   public void verify_header_elements_on_the_pages_while_access_createsubylink_pages() throws Throwable {

	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }
   
   // Access to Variable Tab and validate elements
   @When("^Navigate to Variable tab$")
   public void navigate_to_variable_tab() throws Throwable {
	   By variablesTab=By.linkText("Variables");
	   driver.findElement(variablesTab).click();	
   }

   @When("^Navigate to Variable using createVariableByButton$")
   public void navigate_to_variable_using_createvariablebybutton() throws Throwable {
	   By tagTab=By.linkText("Tags");
	   By variablesTab=By.linkText("Variables");
	   driver.findElement(tagTab).click();
       driver.findElement(variablesTab).click();
	   
	   
   }

   @When("^Navigate to Variable using createVariableByLink$")
   public void navigate_to_variable_using_createvariablebylink() throws Throwable {
//	   pom008_VoiceWatch_Variable_Tab vr=new pom008_VoiceWatch_Variable_Tab(driver);
	   By tagTab=By.linkText("Tags");
	   By variablesTab=By.linkText("Variables");
	   driver.findElement(tagTab).click();
       driver.findElement(variablesTab).click();
   }

   @Then("^Validate the elements on the Variable tab page$")
   public void validate_the_elements_on_the_variable_tab_page() throws Throwable {
	  
	  	   
	   pom008_VoiceWatch_Variable_Tab vr=new pom008_VoiceWatch_Variable_Tab(driver);
	   vr.variableTabValidation();
   }

   @Then("^Validate the elements on the Variable tab while click createVariableByButton$")
   public void validate_the_elements_on_the_variable_tab_while_click_createvariablebybutton() throws Throwable {
	   pom008_VoiceWatch_Variable_Tab vr=new pom008_VoiceWatch_Variable_Tab(driver);
	   vr.createVariableByButton();
   }

   @Then("^Validate the elements on the Variable tab while click createVariableByLink$")
   public void validate_the_elements_on_the_variable_tab_while_click_createvariablebylink() throws Throwable {
	   pom008_VoiceWatch_Variable_Tab vr=new pom008_VoiceWatch_Variable_Tab(driver);
	   vr.createVariableByLink();
   }

   @And("^Verify footer elements on the pages while access Variable tab pages$")
   public void verify_footer_elements_on_the_pages_while_access_variable_tab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   }

   @And("^Verify header elements on the pages while access Variable tab pages$")
   public void verify_header_elements_on_the_pages_while_access_variable_tab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }

   @And("^Verify footer elements on the pages while access createVariableByButton$")
   public void verify_footer_elements_on_the_pages_while_access_creategsbbylink() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   }

   @And("^Verify header elements on the pages while access createVariableByButton$")
   public void verify_header_elements_on_the_pages_while_access_createvariablebybutton() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }

   @And("^Verify footer elements on the pages while access createVariableByLink$")
   public void verify_footer_elements_on_the_pages_while_access_createvariablebylink() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   }

   @And("^Verify header elements on the pages while access createVariableByLink$")
   public void verify_header_elements_on_the_pages_while_access_createvariablebylink() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }
   
   @When("^Navigate to Hammer tab$")
   public void navigate_to_hammer_tab() throws Throwable {
	   By hammersTab=By.linkText("Hammers");
	   driver.findElement(hammersTab).click();
   }

   @When("^Navigate to Hammer using createHammerByButton$")
   public void navigate_to_hammer_using_createhammerbybutton() throws Throwable {
	   pom009_VoiceWatch_Hammers_Tab hm=new pom009_VoiceWatch_Hammers_Tab(driver);
	   hm.createHammerByButton();	
	   
   }

   @When("^Navigate to Hammer using createHammerByLink$")
   public void navigate_to_hammer_using_createhammerbylink() throws Throwable {
	   pom009_VoiceWatch_Hammers_Tab hm=new pom009_VoiceWatch_Hammers_Tab(driver);
	   hm.createHammerByLink();
   }

   @Then("^Validate the elements on the Hammer tab page$")
   public void validate_the_elements_on_the_hammer_tab_page() throws Throwable {
	   pom009_VoiceWatch_Hammers_Tab hm=new pom009_VoiceWatch_Hammers_Tab(driver);
	   hm.hammerTabValidation();
   }

   @Then("^Validate the elements on the Hammer tab while click createHammerByButton$")
   public void validate_the_elements_on_the_hammer_tab_while_click_createhammerbybutton() throws Throwable {
	   pom009_VoiceWatch_Hammers_Tab hm=new pom009_VoiceWatch_Hammers_Tab(driver);
	   hm.createHammerByButton();
   }

   @Then("^Validate the elements on the Hammer tab while click createHammerByLink$")
   public void validate_the_elements_on_the_hammer_tab_while_click_createhammerbylink() throws Throwable {
	   pom009_VoiceWatch_Hammers_Tab hm=new pom009_VoiceWatch_Hammers_Tab(driver);
	   hm.createHammerByLink();
   }

   @And("^Verify footer elements on the pages while access Hammer tab pages$")
   public void verify_footer_elements_on_the_pages_while_access_hammer_tab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.footer();
   }

   @And("^Verify header elements on the pages while access Hammer tab pages$")
   public void verify_header_elements_on_the_pages_while_access_hammer_tab_pages() throws Throwable {
	   pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
	   d.header();
   }

   
}