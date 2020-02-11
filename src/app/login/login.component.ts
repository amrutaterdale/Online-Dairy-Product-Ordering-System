import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  uname;
  pass;

  constructor(private rou:Router,private ser:SerService) { }

  ngOnInit() {
  }

  regdata:any=[];
  flag=false;

  login()
  {
    if(this.uname=="admin" && this.pass=="1234")
         {
           this.flag=true;
           alert("admin login successfully");
           this.rou.navigate(['/changeprod']);
         }

         if(this.uname==null || this.pass==null)
         {
          this.flag=true;
           alert("please enter valid username and password");
          
         }

        

    
    this.ser.regview().subscribe(
     d=>{this.regdata=d
     
      for(let i=0;i<this.regdata.length;i++)
      {
        if(this.regdata[i].fname==this.uname && this.regdata[i].password==this.pass)
        
        {
          this.flag=true;
          alert("login successfully");
          //this.rou.navigate(['/changeprod']);
          localStorage.setItem("islogin","true");
          localStorage.setItem("crtuser",JSON.stringify(this.regdata[i]));
          this.rou.navigate(['/order']);
          
        }
        // else 
        // {
        // if(this.uname==null ||this.pass==null)
        // {
          
        //   alert("please enter valid username and password");
          
        // }}
      }
        if(this.flag==false)
        {
          alert("please register");
          this.rou.navigate(['/register']);
        }
        
      
    }
    );
     
    
  }

    

  register()
  {
  this.rou.navigate(['/register']);
  }

}
