package com.cg.beans;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Balance {
	
	@Id
	private int accountId;
	private String balance;
	
	public Balance() {
		// TODO Auto-generated constructor stub
	}

	public Balance(int accountId, String balance) {
		super();
		this.accountId = accountId;
		this.balance = balance;
	}

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}


	public String getBalance() {
		return balance;
	}

	public void setBalance(String balance) {
		this.balance = balance;
	}
	
	
	
}
