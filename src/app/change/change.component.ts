import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';


@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {

  constructor(private ser:SerService) { }

  data:any={};
  data1:any={};

  allprod:any=[];

  ngOnInit() {
    this.ser.viewproduct().subscribe(d=>this.allprod=d);
  }

  save()
  {
    this.ser.addproduct(this.data).subscribe(d=>{this.allprod=d,this.retrieve()});
  }

  retrieve()
  {
     this.ser.viewproduct().subscribe(d=>this.allprod=d);
  }

  tempobj:any={};
  res:any={};
  delete(i)
  {
    this.tempobj.id=this.allprod[i].id;
    this.ser.deleteproduct(this.tempobj).subscribe((r:any)=>{this.allprod=r,this.retrieve()});
   
  }

  
  tvar:number;
  update(j)
  {
    this.tvar=j;
    for(let i=0;i<this.allprod.length;i++)
    {
       if(i==j)
       {
       this.data1=this.allprod[i];
       }
    }

  }

  modify()
  {
    for(let i=0;i<this.allprod.length;i++)
    {
      if(i==this.tvar)
      {
        this.allprod[i]=this.data1;
        this.ser.updateproduct(this.allprod[i]).subscribe(d=>{this.allprod=d,this.retrieve()})
      }
    }
    
  }

}
