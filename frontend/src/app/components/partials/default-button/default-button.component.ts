import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent implements OnInit {


  @Input()
  type: 'submit' | 'button' = 'submit';
  @Output()
  onClick = new EventEmitter()

  constructor () {}


  ngOnInit(): void {

  }
}
