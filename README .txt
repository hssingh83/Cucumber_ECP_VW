"# Cucumber_ECP_VW" 

mvn -PRegression test -Dbrowser=chrome -Durl=VoiceWatch-26.2 -Dcucumberoptions="--tags @Hari"

=================================================================================
Test Runner

package cucumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(  
//	    features = "src/test/java/features",
		 features = {"classpath:features"},
//		format = {"json:target/cucumber.json","html:target/cucumber"},
	    glue= {"stepDefinations"},
	   tags = {"@Regression,@Sanity,@10,@Hari"},
	 //   	tags = {"@1" },
	//		tags = {"@Sanity"},
	 //   	tags = {"@Regression"},
	    
	    dryRun = false,
	    strict = true,
        plugin = { "pretty","json:target/cucumber-reports/Cucumber.json","junit:target/cucumber-reports/Cucumber.xml","html:target/cucumber-reports"},
  //      plugin = { "progress" },
//      plugin = { "usage" },
        monochrome = true )
    
/*@CucumberOptions(
		 features = "src/test/java/features",
		 glue= {"stepDefinitions"},
		 plugin = { "pretty" },
		 monochrome = true )*/



public class TestRunner extends AbstractTestNGCucumberTests {
//	public class TestRunner  {
	
}
========================================================================================

