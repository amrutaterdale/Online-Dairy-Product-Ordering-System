import { Component, OnInit } from '@angular/core';
import {SerService} from '../ser.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  constructor(private ser:SerService) { }

  pur_data;
  total:number=0;
  ngOnInit() {
    this.ser.viewpurchase().subscribe(d=>{this.pur_data=d

    for(let i=0;i<this.pur_data.length;i++)
    {
      
      var j=this.pur_data[i].rate.indexOf('/');
      var rate=parseInt(this.pur_data[i].rate.substring(0,j));
    
      this.total=this.total+(parseInt(this.pur_data[i].pur_qty)*rate);

    }
  });
  }

}
