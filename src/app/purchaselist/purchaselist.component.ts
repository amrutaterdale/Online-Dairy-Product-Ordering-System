import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchaselist',
  templateUrl: './purchaselist.component.html',
  styleUrls: ['./purchaselist.component.scss']
})
export class PurchaselistComponent implements OnInit {

  constructor(private ser:SerService,private rou:Router) { }

  purchaselist;
  ngOnInit() {
    this.ser.viewpurchase().subscribe(d=>this.purchaselist=d);
  }

  back()
  {
    this.rou.navigate(['/order']);
  }

  total()
  {
    this.rou.navigate(['/bill']);
  }

  obj:any={};
  remobj:any={};
  cancel(i)
  {
 //this.obj.id=this.purchaselist[i].id;
 //this.ser.deletepurchase(this.obj).subscribe((r:any)=>{this.purchaselist=r,this.retrieve()});
 //this.obj=this.purchaselist[i];
 this.remobj=this.purchaselist[i];

 this.purchaselist[i].quantity=parseInt(this.purchaselist[i].quantity);
 this.obj=this.purchaselist[i];
  
  
  delete this.obj.pur_qty;

  this.ser.updatequantity(this.obj).subscribe();

  this.remobj.id=this.purchaselist[i].id;
  this.ser.deletepurchase(this.remobj).subscribe((r:any)=>{this.purchaselist=r,this.retrieve()});
  }

  retrieve()
  {
    this.ser.viewpurchase().subscribe(d=>this.purchaselist=d);
  }

}
