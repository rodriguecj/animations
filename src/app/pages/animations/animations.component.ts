import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '202x',
        opacity: 1,
        backgroundColor: 'aqua'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s ease-in')
      ]),
      transition('closed => open', [
        animate('0.5s ease-out')
      ]),
    ])
  ]
})
export class AnimationsComponent implements OnInit {

  public isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen = !this.isOpen;
    console.log('Hay cambios de estado');
    console.log('=====================');
    console.log(this.isOpen);
    console.log('=====================');
  }

}

