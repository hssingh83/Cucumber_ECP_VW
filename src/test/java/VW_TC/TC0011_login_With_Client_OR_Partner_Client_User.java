package VW_TC;

import java.io.IOException;
import java.util.ArrayList;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import PageActions.pom001_VoiceWatch_logIn_Page;
import PageActions.pom002_VoiceWatch_Home_Page;
import PageActions.pom005_VoiceWatch_Tests_Tab;
import PageActions.pom008_VoiceWatch_Variable_Tab;
import resources.basePropertiesCucm;
import resources.dataDriven;

public class TC0011_login_With_Client_OR_Partner_Client_User extends basePropertiesCucm{

	private static Logger log =LogManager.getLogger(TC0011_login_With_Client_OR_Partner_Client_User.class.getName());
	
	@BeforeTest
	
	public void applicationLaunch() throws IOException, InterruptedException {
		
		driver=intializeDriver();
	}

	@Test(priority=1)
	public void logInWithPartnerClient_User () throws IOException, InterruptedException {
		
		pom001_VoiceWatch_logIn_Page l=new pom001_VoiceWatch_logIn_Page(driver);
		
		dataDriven d=new dataDriven();
		  ArrayList<String> data=d.getData("login","Clinet/Partner_user");
			
		l.getUsername().sendKeys(data.get(1));
	    l.getPassword().sendKeys(data.get(2));
	    l.getSignButton().click();
	    log.debug("Waiting for launch VoiceWatch application using above creadetails");
	    Thread.sleep(10);
	    
	    Assert.assertTrue(driver.findElement(By.linkText("Back to top")).isDisplayed());
	    
	    log.info("Verified that VoiceWatch Application login successfully with Client/Partner Clinet_ User creadetial");
	    log.debug("Validate the requiment as Aceess Level= Client/Partner_Client & Role=User");
		
	}	
	

	/*@Test(priority=2)
	public void headerMandatoryDetails () throws IOException, InterruptedException {
		
		pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	    d.header();
	
	}
	
	@Test(priority=3)
	public void footerMandatoryDetails () throws IOException, InterruptedException {
		
		pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	    d.footer();
	
	}
	@Test(priority=4)
	public void TabValidation () throws IOException, InterruptedException {
		
		pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
		 d.home_screen();
	}
	@Test(priority=5)
	public void dashBoardTabValidation () throws IOException, InterruptedException {
		
		pom003_VoiceWatch_Dashboard_Tab db=new pom003_VoiceWatch_Dashboard_Tab(driver);
		pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
				
		db.OverallPerfomance_section_dashboard();
		db.activetest_section_dashboard();
	
		d.header();
		d.footer();
	}
	
	@Test(priority=6)
	public void alertTabValidation () throws Exception {
		
		pom004_VoiceWatch_Alerts_Tab at=new pom004_VoiceWatch_Alerts_Tab (driver);
		pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
		at.alertsValidations();		
		at.hammerColumn();
		d.header();
		d.footer();
		
	}*/
	
	@Test(priority=7)
	public void testTabValidation () throws IOException, InterruptedException {
		
		pom005_VoiceWatch_Tests_Tab ts=new pom005_VoiceWatch_Tests_Tab(driver);
		pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);	
	
		ts.testsValidations();
		d.header();
		d.footer();
	}
	
	@Test(priority=8)
	public void variableTabValidation () throws Exception {
		
		
		pom008_VoiceWatch_Variable_Tab vr=new pom008_VoiceWatch_Variable_Tab(driver);
		pom002_VoiceWatch_Home_Page d=new pom002_VoiceWatch_Home_Page(driver);
		
		vr.variableTabValidation();
		d.header();
		d.footer();
		vr.createVariableByButton();
		d.header();
		d.footer();
		vr.createVariableByLink();
		d.header();
		d.footer();	

	}
	

		
	@AfterTest
	public void applicationClose() {
	
		driver.close();
		log.info("Application closed successfully");
		
	}
	}	