import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showbalance',
  templateUrl: './showbalance.component.html',
  styleUrls: ['./showbalance.component.css']
})
export class ShowbalanceComponent implements OnInit {

  balance:string;
  constructor(public dataService:DataService,private router:Router) { }

  ngOnInit() {

    this.balance=this.dataService.balance;
  }

  gotoMenu(){
    this.router.navigate(['/menu']);
  }

}
