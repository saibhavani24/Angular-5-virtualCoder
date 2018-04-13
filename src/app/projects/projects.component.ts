import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../assets/animation/fade.animation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [fadeAnimation]
})
export class ProjectsComponent implements OnInit {

  all = [
    { text:"Pindrop", image: 'assets/img/portfolio/ios/Thumbnail_pindrop01_App.jpg'},
    { text:"Klaspad", image: 'assets/img/portfolio/ios/klaspad_Thumb01.png'},
    { text:"Resis", image: 'assets/img/portfolio/ios/Resis-App_thumb.png'},
    { text:"Quickpay", image: 'assets/img/portfolio/android/Quickpay_Thumb.jpg'},
    { text:"Pentfile", image: 'assets/img/portfolio/ios/Thumb_01.jpg'},
    { text:"Funkida", image: 'assets/img/portfolio/android/Funkida_Thumb.jpg'},
    { text:"Sushibar", image: 'assets/img/portfolio/ios/shusu_Thumb.jpg'},
    { text:"Investment Caddy", image: 'assets/img/portfolio/ios/Investment_Thumb.jpg'},
    { text:"Century File", image: 'assets/img/portfolio/android/Century_Thumb.jpg'},
    { text:"TechAlliance", image: 'assets/img/portfolio/android/TechAlliance_thumb.jpg'},
    { text:"Unknown Facts", image: 'assets/img/portfolio/android/unknownfact_Thumb.jpg'},
  ];

  android = [
    { text:"Pindrop", image: 'assets/img/portfolio/android/Quickpay_Thumb.jpg'},
    { text:"Pindrop", image: 'assets/img/portfolio/android/Funkida_Thumb.jpg'},
    { text:"Pindrop", image: 'assets/img/portfolio/android/TechAlliance_thumb.jpg'},
    { text:"Pindrop", image: 'assets/img/portfolio/android/unknownfact_Thumb.jpg'},
    { text:"Century File", image: 'assets/img/portfolio/android/Century_Thumb.jpg'},

  ];

  iphone = [
    { text:"Pindrop", image: 'assets/img/portfolio/ios/Thumbnail_pindrop01_App.jpg'},
    { text:"Pindrop", image: 'assets/img/portfolio/ios/klaspad_Thumb01.png'},
    { text:"Pindrop", image: 'assets/img/portfolio/ios/Resis-App_thumb.png'},
    { text:"Pindrop", image: 'assets/img/portfolio/ios/Thumb_01.jpg'},
    { text:"Pindrop", image: 'assets/img/portfolio/ios/shusu_Thumb.jpg'},
    { text:"Pindrop", image: 'assets/img/portfolio/ios/Investment_Thumb.jpg'},
  ];

  
  constructor() { }

  ngOnInit() {
  }

}
