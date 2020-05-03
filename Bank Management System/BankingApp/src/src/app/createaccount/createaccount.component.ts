import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateaccountserviceService } from './createaccountservice.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css'],
  providers:[CreateaccountserviceService]
})
export class CreateaccountComponent implements OnInit {

  createAccountForm:FormGroup;
  submitted:boolean=false;
  createAccount:Account=new Account();
  accountId:string;
  constructor(private formBuilder:FormBuilder,private router
    :Router,private service:CreateaccountserviceService,public dataService:DataService) { }



  ngOnInit() {
    this.dataService.flag=false;

    this.createAccountForm=this.formBuilder.group({

      name:["",[Validators.required ,Validators.pattern('[A-Z][a-zA-Z ]{1,}')]],
      password:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]{4,}')]],
      confirmPassword:["",Validators.required],
      mobileNumber:["",[Validators.required ,Validators.pattern('[0-9]{10}')]],
      aadharNumber:["",[Validators.required ,Validators.pattern('[0-9]{14}')]],
      pin:["",[Validators.required ,Validators.pattern('[0-9]{6}')]],
      accountNumber:["",[Validators.required ,Validators.pattern('[0-9]{14}')]],
      dob:["",Validators.required]


      


    });

   // this.addAccount=new Account(this.createAccountForm.get('Name').value,this.createAccountForm.get('password').value);
  }

  
  get state(){
    return this.createAccountForm.controls;
  } 
onSubmit(){
 
  this.submitted=true;
  if(this.createAccountForm.invalid){
    return;
  }else{
    if(this.createAccountForm.get('password').value!==this.createAccountForm.get('confirmPassword').value){
      alert("Password does not match with confirm password");
    }else{
      this.createAccount.account_id=0;
      this.createAccount.name=this.createAccountForm.get('name').value;
      this.createAccount.password=this.createAccountForm.get('password').value;
      this.createAccount.mobile=this.createAccountForm.get('mobileNumber').value;
      this.createAccount.aadhar=this.createAccountForm.get('aadharNumber').value;
      this.createAccount.dob=this.createAccountForm.get('dob').value;
      this.createAccount.pin=this.createAccountForm.get('pin').value;
      this.createAccount.accountnumber=this.createAccountForm.get('accountNumber').value;

      this.service.addAccount(this.createAccount).subscribe(

        data=>{
          this.dataService.accountId=data[0];
          this.dataService.name=data[1];
         // this.accountId=data;
          alert("Profile Created for : "+ data[1] + " and account id: "+data[0]);
          this.dataService.flag=true;
          this.router.navigate(['/menu']);
        }



      );
     
    }
    
    
  }
   
}

}

export class Account{

  name: string;
  account_id: number ;
	mobile:  string ;
	dob:Date;
  aadhar:string;
  accountnumber:string;
  password:string;
  pin: string ;
  
  
}
