import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ColorStates } from '../color-states.enum';

@Component({
  selector: 'app-test-animation',
  templateUrl: './test-animation.component.html',
  styleUrls: ['./test-animation.component.css'], 
  animations:[
    trigger('blueBlack', [
      state('Blue', style({
        height: '120px',
        width: '100%',
        opacity: 0.5,
        backgroundColor: 'blue',
        color: 'orange'
      })),
      state('Black', style({
        height: '80px',
        width: '60%',
        opacity: 1.5,
        backgroundColor: 'black',
        color: 'white'
      })),
      transition('Blue => Black',[
        animate('2s')
      ]),
      transition('Black => Blue',[
        animate('0.5s')
    ])
  ])
    ,
    
  trigger('blueGreen', [
    state('Blue', style({
      height: '200px',
      width: '100%',
      opacity: 0.5,
      backgroundColor: 'blue',
      color: 'orange'
    })),
    state('green', style({
      height: '80px',
      width: '40%',
      opacity: 0.7,
      backgroundColor: ColorStates.green,
      color: 'white'
    })),
    transition('Blue => green',[
      animate('1s')
    ]),
    transition('green => Blue',[
      animate('0.5s')
  ])
]),
trigger('blueOrange', [
  state('Blue', style({
    height: '200px',
    width: '100%',
    opacity: 0.5,
    backgroundColor: 'blue',
    color: 'orange'
  })),
  state('orange', style({
    height: '80px',
    width: '20%',
    opacity: 1,
    backgroundColor: ColorStates.orange,
    color: 'blue'
  })),
  transition('Blue => orange',[
    animate('1s')
  ]),
  transition('orange => Blue',[
    animate('1s')
])
]),
trigger('bluePink', [
  state('Blue', style({
    height: '200px',
    width: '100%',
    opacity: 0.5,
    backgroundColor: 'blue',
    color: 'orange'
  })),
  state('pink', style({
    height: '80px',
    width: '20%',
    opacity: 1,
    backgroundColor: ColorStates.pink,
    color: 'blue'
  })),
  transition('Blue => pink',[
    animate('1s')
  ]),
  transition('pink => Blue',[
    animate('1s')
])
]),
trigger('bluePurple', [
  state('Blue', style({
    height: '200px',
    width: '100%',
    opacity: 0.5,
    backgroundColor: 'blue',
    color: 'orange'
  })),
  state('purple', style({
    height: '120px',
    width: '20%',
    opacity: 1,
    backgroundColor: ColorStates.purple,
    color: 'yellow'
  })),
  transition('Blue => purple',[
    animate('1s')
  ]),
  transition('purple => Blue',[
    animate('1s')
])
])

    ]

})

export class TestAnimationComponent implements OnInit {
  isBlue = true;
  
  isNotGreen = true;
  isNotOrange = true;
  isNotPink: boolean = true;
  isNotPurple: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isBlue = !this.isBlue;
  }

  green(){
    this.isNotGreen = !this.isNotGreen;
  }

  orange(){
    this.isNotOrange = !this.isNotOrange;
  }

  pink(){
    this.isNotPink = !this.isNotPink;
  }

  purple(){
    this.isNotPurple = !this.isNotPurple;
  }

}

