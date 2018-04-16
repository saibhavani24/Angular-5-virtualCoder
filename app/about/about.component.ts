import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('flyInOut', [
      state('out', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.30s ease-in')
      ]),
      transition('* => void', [
        animate('0.30s 0.30s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ]),
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

export class AboutComponent implements OnInit {
  title ="A Battle-Tested team for Mobile and Web App Development - Virtual Coders"
  content = "The battle-tested team for mobile and Web App Development. We work with cool clients and make apps that excite us"
  content1 = "Do you have an App idea that"
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  firstname: string ='';
  lastname: string ='';
  email: string ='';
  phone: number ;
  companyName: string ='';
  moreDetail: string ='';
  detailDisplay: string ='';
  message = "Thank you!!!!!!";

  state: string = 'inactive';
  toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
}
  showAnswer(){
     this.showSpinner = true;

     setTimeout(() => {
       this.answerDisplay = this.answer;
       this.showSpinner = false;
     }, 2000);
  }

  showDetail(){
    this.showSpinner = true;

    setTimeout(() => {
      this.detailDisplay = this.firstname;
      this.showSpinner = false;
    }, 1000)
  }


  ngOnInit() {
  }

}
