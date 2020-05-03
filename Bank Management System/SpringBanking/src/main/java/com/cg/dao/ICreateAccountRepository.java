package com.cg.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cg.beans.Account;


public interface ICreateAccountRepository extends JpaRepository<Account, Integer> {


	
	@Query("from Account where mobile=?1 and password=?2 ")
	public Account verifyLogin(String mobile,String password);

}
