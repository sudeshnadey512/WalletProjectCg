package com.capg.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Create_pom {

	
	WebDriver driver;

	public Create_pom(WebDriver driver) {
		super();
		this.driver = driver;
	}
	
	public WebElement clickCreate() {
		return driver.findElement(By.name("sign-up-btn"));
	}
	public WebElement clickSignUp() {
		return driver.findElement(By.name("register"));
	}
	public WebElement getUserId() {
		return driver.findElement(By.name("userId"));
	}
	
	public WebElement getFirstName() {
		return driver.findElement(By.name("firstname"));
	}
	
	public WebElement getLastname() {
		return driver.findElement(By.name("lastname"));
	}
	public WebElement getAddress() {
		return driver.findElement(By.name("address"));
	}				
	public WebElement getEmail() {
		return driver.findElement(By.name("email"));
	}

	public WebElement getDob() {
		return driver.findElement(By.name("dob"));
	}
	public WebElement getIfsc() {
		return driver.findElement(By.name("ifsc"));
	}
	public WebElement getAccount() {
		return driver.findElement(By.name("account"));
	}
	public WebElement getPassword() {
		return driver.findElement(By.name("password"));
	}
	public WebElement getPin() {
		return driver.findElement(By.name("pin"));
	}
	public WebElement getPan() {
		return driver.findElement(By.name("pan"));
	}
	
	
	public void alertBox() {
		driver.switchTo().alert().accept();
	}
}
