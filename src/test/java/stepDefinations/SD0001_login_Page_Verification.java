package stepDefinations;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import resources.basePropertiesCucm;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.testng.Assert;

import PageActions.pom001_VoiceWatch_logIn_Page;
import VW_TC.TC0001_login_Page_Verification;

@RunWith(Cucumber.class)

public class SD0001_login_Page_Verification extends basePropertiesCucm {
	
	private static Logger log =LogManager.getLogger(TC0001_login_Page_Verification.class.getName());


    @Given("Initialize the Driver of the browser and provide the URL$")
    public void initialize_the_driver_of_the_browser_and_provide_the_url() throws Throwable {
    	driver=intializeDriver();
       }

    @When("^Verify that Voice Watch login page access successfully$")
    public void access_to_voicewatch_page() throws InterruptedException {
    	
    	Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[1]/nav/div[1]/a/img")).isDisplayed());
    	Thread.sleep(1000);
    	log.info(" Verified that VoiceWatch login screen appeared successfully");
    	
       }
    
    @Then("^Verify that default element should available on the login page$")
    public void login_Page_Verification() throws Throwable {
    	pom001_VoiceWatch_logIn_Page l=new pom001_VoiceWatch_logIn_Page(driver);
    	l.logPageLabelVerification();
      }
    
    @And("^Verify that 'Additional Copy Right' Link clickable$")
        public void copyRightLink() throws Throwable {
    	pom001_VoiceWatch_logIn_Page l=new pom001_VoiceWatch_logIn_Page(driver);
    	l.getCopyRightLink().click();
		log.info("Verified that 'Additional Copy Right' Link clickable");
		Assert.assertEquals(driver.findElement(By.id("additional-copyright-info")).getText(),"Copyright © 2010-14 ForgeRock AS, all rights reserved.");
		log.info("Verified that addtional infomation'Copyright © 2010-14 ForgeRock AS, all rights reserved.' appered after click link");   
    	
        }	
   

   @And("^Close the browser successfully$")
    public void close_the_application() throws Throwable {
    	driver.close();
    	log.info("Application closed successfully");
    }

}