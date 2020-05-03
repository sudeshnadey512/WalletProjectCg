package com.cg.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cg.beans.Balance;

public interface IBalanceRepository extends JpaRepository<Balance, Integer>{
	
	@Query("from Balance where accountId=?1")
	public Balance getBalance(Integer accountId);

}
