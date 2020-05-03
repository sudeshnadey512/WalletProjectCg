package com.capgemini.pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Project_Pom {

	
	WebDriver driver;
	public Project_Pom(WebDriver driver) {
		this.driver=driver;
	}
	
	public WebElement getUserIdField() {
		return driver.findElement(By.name("userId"));
	}
	
	public WebElement getPasswordField() {
		return driver.findElement(By.name("passWord"));
	}
	
	public WebElement clickLoginButton() {
		return driver.findElement(By.name("login"));
	}
	
	
	public WebElement clickDeposit()
	{
		return driver.findElement(By.name("deposit"));
	}
	public WebElement getDepositField() {
		return driver.findElement(By.name("amount"));
	}
	public WebElement clickWithdraw()
	{
		return driver.findElement(By.name("withdraw"));
	}
	public WebElement getWithdrawField() {
		return driver.findElement(By.name("amount"));
	}
	
	public WebElement clickTransfer()
	{
		return driver.findElement(By.name("transfer"));
	}
	public WebElement getTransferFielduserId() {
		return driver.findElement(By.name("userId"));
	}
	public WebElement getTransferFieldAmount() {
		return driver.findElement(By.name("amount"));
	}
	
	public WebElement clickShowBalance() {
		return driver.findElement(By.name("show"));
	}
	
	
	public WebElement clickPrint() {
		return driver.findElement(By.name("print"));
	}
	
	
	public void alertBox() {
		driver.switchTo().alert().accept();
	}
	
	public WebElement clickOk() {
		return driver.findElement(By.name("btn"));
	}
	
	public void back() {
		driver.navigate().back();
	}
	
	
	
	
	
	
}
