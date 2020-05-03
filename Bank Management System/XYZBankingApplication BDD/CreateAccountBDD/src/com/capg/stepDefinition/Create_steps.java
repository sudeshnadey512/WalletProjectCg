package com.capg.stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.capg.pom.Create_pom;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Create_steps {

	WebDriver driver;
	Create_pom pageObject;

	@Before
	public void setUpStepEnv() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Pronoy\\chromedriver.exe");
	}

	@Given("^Opens the local browser by entering the url$")
	public void opens_the_local_browser_by_entering_the_url() throws Throwable {
		driver = new ChromeDriver();
		pageObject = new Create_pom(driver);
		driver.manage().window().maximize();
		driver.get("http://localhost:4200/login");
	}

	@When("^The user gives proper input to the fields$")
	public void the_user_gives_proper_input_to_the_fields() throws Throwable {
		pageObject.clickCreate().click();
		Thread.sleep(100);
		pageObject.getUserId().sendKeys("9434330230");
		Thread.sleep(100);
		pageObject.getFirstName().sendKeys("Trinanjana");
		Thread.sleep(100);
		pageObject.getLastname().sendKeys("Das");
		Thread.sleep(100);
		pageObject.getDob().sendKeys("1996-DEC-12");
		Thread.sleep(100);
		pageObject.getAddress().sendKeys("Bharampur");
		Thread.sleep(100);
		pageObject.getEmail().sendKeys("jhilik@cg.com");
		Thread.sleep(100);
		pageObject.getPassword().sendKeys("abc");
		Thread.sleep(100);
		pageObject.getPin().sendKeys("1541");
		Thread.sleep(100);
		pageObject.getPan().sendKeys("CVZPZ0005E");
		Thread.sleep(100);
		pageObject.getAccount().sendKeys("25634525166684");
		Thread.sleep(100);
		pageObject.getIfsc().sendKeys("JYGF06544");
		Thread.sleep(100);
		

	}

	@Then("^The user successfully creates the account$")
	public void the_user_successfully_creates_the_account() throws Throwable {
		pageObject.clickSignUp().submit();
		Thread.sleep(2000);
		pageObject.alertBox();
		Thread.sleep(100);
		driver.get("http://localhost:4200/login");

	}

}
