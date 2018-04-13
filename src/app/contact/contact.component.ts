import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
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
  ]
})


export class ContactComponent implements OnInit {
  
  validatingForm: FormGroup;

  showSpinner: boolean = false;
  firstname: string ='';
  lastname: string ='';
  email: string ='';
  phone: number ;
  companyName: string ='';
  moreDetail: string ='';
  detailDisplay: string ='';
 
    
     
  constructor( private fb: FormBuilder ) {
    this.validatingForm = fb.group({
      'email': [null, Validators.email],
      });
   }

  ngOnInit() {
  }

}
