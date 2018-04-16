import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

 
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [
               './main-page.component.css'],
  animations: [
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
export class MainPageComponent implements OnInit {
  title ="The Team for Awesome Mobile and Web Apps."
  content = "We're a battle-tested team of mobile and Web mavericks. We work with cool clients and make apps that excite us"
  content1 = "Do you have an App idea that"

  state: string = 'inactive';
  toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
}
  constructor() { }
 


  ngOnInit() {
  }

}
