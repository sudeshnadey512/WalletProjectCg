package com.cg.service;

import java.util.List;

import com.cg.beans.Account;
import com.cg.beans.Balance;
import com.cg.beans.Transaction;


public interface IBankService {

	

	/**
	 * Author: Capgemini
	 * Date Modified: 27/06/2019
	 * Description: It takes mobile number and password as arguments and 
	 * 				returns an array which contains accountId 
	 * 				and name of that user
	**/
	public Account verifyLogIn(String mobile,String password);


	/**
	 * Author: Capgemini
	 * Date Modified: 28/06/2019
	 * Description: It takes bean object of Account class and creates 
	 * 				account and returns a string array which contains
	 * 				name and auto generated accountId 
	**/
	public Account addAccount(Account account);
	
	
	/**
	 * Author: Capgemini
	 * Date Modified: 27/06/2019
	 * Description: It takes transaction bean object as argument and return 
	 * 				the updated balance of the user.
	**/
	public void addBalance(Balance balance);
	
	
	/**
	 * Author: Capgemini
	 * Date Modified: 27/06/2019
	 * Description: It takes accountId an argument and returns the 
	 * 				account balance of the respective user. 
	**/
	public Balance getBalance(Integer accountId);
	
	/**
	 * Author: Capgemini
	 * Date Modified: 27/06/2019
	 * Description: It takes transaction bean object as argument and return 
	 * 				the transaction object of the user.
	**/
	public Transaction addTransaction(Transaction transaction);
	
	/**
	 * Author: Capgemini
	 * Date Modified: 27/06/2019
	 * Description: It takes account id as an argument and returns the 
	 * 				transaction bean object.
	**/
	public List<Transaction> getAllTransactionDetail(String accountId);
}
