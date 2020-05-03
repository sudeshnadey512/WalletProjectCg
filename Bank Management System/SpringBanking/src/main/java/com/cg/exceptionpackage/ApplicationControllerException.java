package com.cg.exceptionpackage;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cg.exception.BankingException;

@ControllerAdvice
public class ApplicationControllerException {

	@ExceptionHandler(value=BankingException.class)
	//@ResponseStatus(value=HttpStatus.OK,reason="Invalid Employee ID")
	@ResponseBody
	public String logInExceptionHandler(BankingException e) {
		
		return e.getMessage();
		
	}
}
