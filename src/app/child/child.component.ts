
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  select:string="All";

  
  @Input() All:number;
  @Input() Amul:number;

  @Input() Gokul:number;

  @Input() Chitale:number;


  @Output()
  
    childevent:EventEmitter<string>=new EventEmitter();

    onselect()
    {
      this.childevent.emit(this.select);
    }

}
