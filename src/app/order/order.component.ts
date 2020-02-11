import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import { Router } from '@angular/router';
import { viewAttached } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private ser:SerService,private rou:Router) { }

  data;
  ngOnInit() {
    this.ser.viewproduct().subscribe(d=>this.data=d);
  }

  selectradio:string="All";

  getAllCount()
  {
    return this.data.length;
  }
  getAmulCount()
  {
    return this.data.filter(obj=>obj.company==="Amul").length;
  }
  getChitaleCount()
  {
    
    return this.data.filter(obj=>obj.company==="Chitale").length;
  }

  getGokulCount()
  {
    
    return this.data.filter(obj=>obj.company==="Gokul").length;
  }

  obj:any={};
  buy(idx)
  {
    if(parseInt(this.data[idx].quantity)>=parseInt(this.data[idx].pur_qty))
    {
    this.obj=this.data[idx];
  this.ser.orderedproduct(this.obj).subscribe();
  alert("added successfully");
  
  this.data[idx].quantity=this.data[idx].quantity-this.data[idx].pur_qty;
  delete this.obj.pur_qty;
  this.ser.updatequantity(this.obj).subscribe();
  }
  else{
    alert("not enough quantity");
    alert("please check available quantity");
  }

 
}

retrieve()
{
  
  this.ser.viewproduct().subscribe(d=>this.data=d);
}

  view()
  {
   this.rou.navigate(['/purchaselist']);
  }
}



