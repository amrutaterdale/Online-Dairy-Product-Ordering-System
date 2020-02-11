import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import{ SerService } from '../ser.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  constructor(private ser:SerService) { }

  userform:FormGroup;

  ngOnInit() {

    this.userform=new FormGroup({
      
      fname:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      // confirm_pass:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      gender:new FormControl()

  });
}
  save()
  {
    alert("hi");
 this.ser.regsave(this.userform.value).subscribe();
  }
 

}
