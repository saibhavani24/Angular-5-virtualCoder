import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-ser',
  templateUrl: './ser.component.html',
  styleUrls: ['./ser.component.css'],
  animations:[
    trigger('movePanel', [
            
      transition('void => *', [
          animate(600, keyframes([
              style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
              style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
              style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
      ])

  ])


]
  
})
export class SerComponent implements OnInit {
  state: string = 'inactive';
    toggleMove() {
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
  constructor() {
      
   }
   
  ngOnInit() {
    
  }
  
}


