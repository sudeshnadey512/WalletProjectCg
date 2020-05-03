package com.capgemini.stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.capgemini.pom.Project_Pom;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {

	WebDriver driver;
	Project_Pom pageObject;
	
	@Before
	public void setUpStepEnv()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Pronoy\\chromedriver.exe");
	}
	
	@Given("^Opens the local browser by entering the url$")
	public void opens_the_local_browser_by_entering_the_url() throws Throwable {
	    driver=new ChromeDriver();
	    pageObject=new Project_Pom(driver);
	    driver.manage().window().maximize();
	    driver.get("http://localhost:4200/login");
	}

	@When("^The user gives proper username and password$")
	public void the_user_gives_proper_username_and_password() throws Throwable {
	    pageObject.getUserIdField().sendKeys("9903065349");
	    pageObject.getPasswordField().sendKeys("aaa");
	}

	@Then("^The user is successfully logged in$")
	public void the_user_is_successfully_logged_in() throws Throwable {
	    pageObject.clickLoginButton().click();
	    
	    Thread.sleep(2000);
	    pageObject.alertBox();
	    Thread.sleep(2000);
	}
	
	
	@When("^The user clicks deposit$")
	public void the_user_clicks_deposit() throws Throwable {
	    pageObject.clickDeposit().click();
	}

	@Then("^Then the amount is given and deposited successfully$")
	public void then_the_amount_is_given_and_deposited_successfully() throws Throwable {
	    pageObject.getDepositField().sendKeys("500");
	    pageObject.clickOk().click();
	    
	    Thread.sleep(2000);
	    pageObject.alertBox();
	    Thread.sleep(2000);
	    pageObject.back();
	    Thread.sleep(2000);
	}
	
	
	@When("^The user clicks withdraw$")
	public void the_user_clicks_withdraw() throws Throwable {
		pageObject.clickWithdraw().click();
	}

	@Then("^Then the amount is given and withdrawn successfully$")
	public void then_the_amount_is_given_and_withdrawn_successfully() throws Throwable {
		pageObject.getWithdrawField().sendKeys("200");
	    pageObject.clickOk().click();
	    
	    Thread.sleep(2000);
	    pageObject.alertBox();
	    Thread.sleep(2000);
	    pageObject.back();
	    Thread.sleep(2000);
	}
	
	
	@When("^The user clicks fund transfer$")
	public void the_user_clicks_fund_transfer() throws Throwable {
	    pageObject.clickTransfer().click();
	}

	@Then("^Then the amount is sent successfully$")
	public void then_the_amount_is_sent_successfully() throws Throwable {
	    pageObject.getTransferFielduserId().sendKeys("9231637091");
	    pageObject.getTransferFieldAmount().sendKeys("1000");
	    pageObject.clickOk().click();
	    
	    Thread.sleep(2000);
	    pageObject.alertBox();
	    Thread.sleep(2000);
	    pageObject.back();
	    Thread.sleep(2000);
	}
	
	@When("^The user clicks show balance$")
	public void the_user_clicks_show_balance() throws Throwable {
	    pageObject.clickShowBalance().click();
	}

	@Then("^Then the amount is shown successfully$")
	public void then_the_amount_is_shown_successfully() throws Throwable {
	    Thread.sleep(3000);
	    pageObject.back();
	    Thread.sleep(2000);
	    
	}
	
	@When("^The user clicks print transaction$")
	public void the_user_clicks_print_transaction() throws Throwable {
	   pageObject.clickPrint().click();
	}

	@Then("^Then the print sheet is shown successfully$")
	public void then_the_print_sheet_is_shown_successfully() throws Throwable {
	    Thread.sleep(5000);
	    pageObject.back();
	    Thread.sleep(2000);
	    driver.get("http://localhost:4200/login");
	}
}
