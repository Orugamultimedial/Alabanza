import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  count:number=0;

  id=this.counter();

  constructor() { }

  ngOnInit(): void {
  }

  counter(){
    this.count = this.count + 1;
    return this.count;
  }

}
