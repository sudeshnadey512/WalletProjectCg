package com.cg.beans;



import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Transaction {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
	@SequenceGenerator(name = "seq", initialValue = 10002, allocationSize = 100000 , sequenceName="trans_seq")
	private int transactionId;
	
	
	private int transferaccountid;
	private int accountId;
	private Date transactiondate;
	private String type;
	private String amount;
	private String updatedamount;
	public Transaction() {
		// TODO Auto-generated constructor stub
	}
	public Transaction(int transactionId, int transferaccountid, int accountId, Date transactiondate, String type,
			String amount, String updatedamount) {
		super();
		this.transactionId = transactionId;
		this.transferaccountid = transferaccountid;
		this.accountId = accountId;
		this.transactiondate = transactiondate;
		this.type = type;
		this.amount = amount;
		this.updatedamount = updatedamount;
	}
	public int getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}
	public int getTransferaccountid() {
		return transferaccountid;
	}
	public void setTransferaccountid(int transferaccountid) {
		this.transferaccountid = transferaccountid;
	}
	public int getAccountId() {
		return accountId;
	}
	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}
	public Date getTransactiondate() {
		return transactiondate;
	}
	public void setTransactiondate(Date transactiondate) {
		this.transactiondate = transactiondate;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getUpdatedamount() {
		return updatedamount;
	}
	public void setUpdatedamount(String updatedamount) {
		this.updatedamount = updatedamount;
	}
	

	

}
