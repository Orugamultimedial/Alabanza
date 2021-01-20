import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tone',
  templateUrl: './tone.component.html',
  styleUrls: ['./tone.component.scss']
})
export class ToneComponent implements OnInit {

  @Input() id;

  constructor() { }

  ngOnInit(): void {
  }

}
