package com.cg.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cg.beans.Transaction;

public interface ITransactionRepository extends JpaRepository<Transaction, Integer> {

	
	@Query("from Transaction where account_Id=?1")
	public List<Transaction> getTransactionDetail(String account_Id);
}
