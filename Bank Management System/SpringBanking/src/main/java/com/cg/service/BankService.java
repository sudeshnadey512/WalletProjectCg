package com.cg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.beans.Account;
import com.cg.beans.Balance;
import com.cg.beans.Transaction;
import com.cg.dao.IBalanceRepository;
import com.cg.dao.ICreateAccountRepository;
import com.cg.dao.ITransactionRepository;


@Service
public class BankService implements IBankService {

	
	
	@Autowired
	ICreateAccountRepository repositoryCreateAccount;
	
	@Autowired
	IBalanceRepository repositoryBalance;
	
	@Autowired
	ITransactionRepository repositoryTransaction;
	
	@Override
	public Account verifyLogIn(String mobile, String password) {
		return repositoryCreateAccount.verifyLogin(mobile, password);
	}

	@Override
	public Account addAccount(Account account) {
		// TODO Auto-generated method stub
		return repositoryCreateAccount.save(account);
	}

	@Override
	public void addBalance(Balance balance) {
		
		repositoryBalance.save(balance);
	}

	@Override
	public Balance getBalance(Integer accountId) {
		// TODO Auto-generated method stub
		return repositoryBalance.getBalance(accountId);
	}

	@Override
	public Transaction addTransaction(Transaction transaction) {
		return repositoryTransaction.save(transaction);
		
	}

	@Override
	public List<Transaction> getAllTransactionDetail(String accountId) {
	
		return repositoryTransaction.getTransactionDetail(accountId);
	}

}
