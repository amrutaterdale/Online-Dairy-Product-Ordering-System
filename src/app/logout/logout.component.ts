import { Component, OnInit } from '@angular/core';
import {SerService} from '../ser.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private ser:SerService) { }

  response;
  msg;
  ngOnInit() {
    localStorage.removeItem("crtuser");
    localStorage.setItem("islogin","false");
    //this.ser.viewpurchase().subscribe(d=>{this.response=d,
   this.ser.deleteuseractivity().subscribe();
   

  }

}
