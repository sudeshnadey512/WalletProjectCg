import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginverificationService } from './loginverification.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css'],
  providers:[LoginverificationService]
})
export class FirstpageComponent implements OnInit {


  myForm:FormGroup;
  submitted:boolean=false;
 // accountId:string ;
  userData=[];
  

  constructor(private formBuilder: FormBuilder,private service: LoginverificationService,private router: Router,public dataService:DataService) { }

  ngOnInit() {

    this.dataService.flag=false;

    this.myForm=this.formBuilder.group({

      mobileNumber:["",[Validators.required ,Validators.pattern('[0-9]{10}')]],
      password:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]{4,}')]],
      

  });
  }

  get state(){
    return this.myForm.controls;
  } 
onSubmit(){
 
  this.submitted=true;
  if(this.myForm.invalid){
    return;
  }else{

    this.service.getAccountId(this.myForm.get('mobileNumber').value,this.myForm.get('password').value).subscribe(

      
      data=> {
        this.dataService.accountId=data[0];
        this.dataService.name=data[1];
        this.userData[0]=data[0];
        this.userData[1]=data[1];
          alert("Login Successfull : "+this.userData[1]);

          this.dataService.flag=true;
          this.router.navigate(['/menu']);
        }
    );
    
  }
   
}
createAccount(){
  this.router.navigate(['/create']);
}


}




