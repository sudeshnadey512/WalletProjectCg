package com.cg.controller;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.beans.Account;
import com.cg.beans.Balance;
import com.cg.beans.Transaction;
import com.cg.exception.BankingException;
import com.cg.service.IBankService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BankingController {

	@Autowired
	IBankService service;
	
	/**
	 * Author: Capgemini
	 * Date Modified: 27/06/2019
	 * Description: It takes mobile number and password as arguments and 
	 * 				returns an array which contains accountId 
	 * 				and name of that user
	**/
	@RequestMapping(path = "/login/{mobile}/{password}", method = RequestMethod.GET, produces = {
			"application/json" })
	@ResponseBody
	public String[] verifyLogInData(@PathVariable String mobile, @PathVariable String password)
			throws BankingException {
		Integer accountId=0;
		String data[]=new String[2];
		try {
			Account account = service.verifyLogIn(mobile, password);
			accountId = account.getAccountId();
			data[0]=accountId.toString();
			data[1]=account.getName();
		} catch (NullPointerException e) {
			throw new BankingException("Wrong username/password");
		}
		
		return data;
	}


	/**
	 * Author: Capgemini
	 * Date Modified: 28/06/2019
	 * Description: It takes bean object of Account class and creates 
	 * 				account and returns a string array which contains
	 * 				name and auto generated accountId 
	**/
	@RequestMapping(path = "/create", method = RequestMethod.POST, produces = { "application/json" })
	public String[] addAccount(@RequestBody Account account) throws BankingException {

		Integer accountId=0;
		Account addAccount;
		String data[]=new String[2];
		try {

			addAccount = service.addAccount(account);
			accountId = addAccount.getAccountId();
			data[0]=accountId.toString();
			data[1]=addAccount.getName();
			
			Balance balance =new Balance(accountId,"500");
			service.addBalance(balance);
		}

		catch (Exception e) {
			throw new BankingException("Account already exist");
		}

		return data;

	}
	
	
	/**
	 * Author: Capgemini
	 * Date Modified: 27/06/2019
	 * Description: It takes accountId an argument and returns the 
	 * 				account balance of the respective user. 
	**/
	@RequestMapping(path="/show/{accountId}", method = RequestMethod.GET, produces = { "application/json" })
	@ResponseBody
	public String getBalance(@PathVariable String accountId) throws BankingException{
		
		String balance=""; 
		try {
			Balance bal=service.getBalance(Integer.parseInt(accountId));
			balance=bal.getBalance();
		}catch (Exception e) {
			//e.printStackTrace();
			throw new BankingException("Database connection error");
		}
		
		return balance;
	}
	
	/**
	 * Author: Capgemini
	 * Date Modified: 27/06/2019
	 * Description: It takes transaction bean object as argument and return 
	 * 				the updated balance of the user.
	**/
	@RequestMapping(path="/deposit", method = RequestMethod.POST, produces = { "application/json" })
	public String deposit(@RequestBody Transaction transaction) throws BankingException {
		
		Transaction transactionDeposit;
		String updatedBalance="";
		Balance balance;
		
		try {
			transaction.setTransactiondate(Date.valueOf(LocalDate.now()));
			transactionDeposit=service.addTransaction(transaction);
			updatedBalance=transactionDeposit.getUpdatedamount();
			balance=new Balance(transaction.getAccountId(),updatedBalance);
			service.addBalance(balance);
			
		}catch (Exception e) {
			throw new BankingException("Database connection error");
		}
		
		return updatedBalance;
		
	}
	
	/**
	 * Author: Capgemini
	 * Date Modified: 27/06/2019
	 * Description: It takes account id as an argument and returns the 
	 * 				transaction bean object.
	**/
	
	@RequestMapping(path="/transaction/{accountId}", method = RequestMethod.GET, produces = { "application/json" })
	@ResponseBody
	public List<Transaction> getTransactionDetail(@PathVariable String accountId) {
		
		List<Transaction>  transactionDetails=null;
		try {
			transactionDetails=service.getAllTransactionDetail(accountId);
			
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		return transactionDetails;
	}
	
	/**
	 * Author: Capgemini
	 * Date Modified: 27/06/2019
	 * Description: It takes transaction bean object as argument and return 
	 * 				the updated balance of the user.
	**/
	@RequestMapping(path="/withdraw", method = RequestMethod.POST, produces = { "application/json" })
	public String Withdraw(@RequestBody Transaction transaction) throws BankingException {
		
		Transaction transactionDeposit;
		String updatedBalance="";
		Balance balance;
		
		try {
			transaction.setTransactiondate(Date.valueOf(LocalDate.now()));
			transactionDeposit=service.addTransaction(transaction);
			updatedBalance=transactionDeposit.getUpdatedamount();
			balance=new Balance(transaction.getAccountId(),updatedBalance);
			service.addBalance(balance);
			
		}catch (Exception e) {
			throw new BankingException("Database connection error");
		}
		
		return updatedBalance;
		
	}

}
