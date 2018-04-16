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
    { text:"Pindrop", image: 'assets/img/portfolio/ios/Thumbnail_pindrop01_App.jpg', thumb: "assets/img/portfolio/ios/pindrop01_App.jpg"},
    { text:"Klaspad", image: 'assets/img/portfolio/ios/klaspad_Thumb01.png', thumb: " assets/img/portfolio/ios/klaspad_Inner.jpg"},
    { text:"Resis", image: 'assets/img/portfolio/ios/Resis-App_thumb.png', thumb: "assets/img/portfolio/ios/Resis-App.jpg"},
    { text:"Quickpay", image: 'assets/img/portfolio/android/Quickpay_Thumb.jpg', thumb: "assets/img/portfolio/android/Quickpay_Inner.jpg"},
    { text:"Pentfile", image: 'assets/img/portfolio/ios/Thumb_01.jpg', thumb: "assets/img/portfolio/ios/ineer_01.jpg"},
    { text:"Funkida", image: 'assets/img/portfolio/android/Funkida_Thumb.jpg', thumb: "assets/img/portfolio/android/Funkida_Inner.jpg"},
    { text:"Sushibar", image: 'assets/img/portfolio/ios/shusu_Thumb.jpg', thumb: "assets/img/portfolio/ios/ineer_Sushu_01.jpg"},
    { text:"Investment Caddy", image: 'assets/img/portfolio/ios/Investment_Thumb.jpg', thumb: "assets/img/portfolio/ios/Inner_All_IOS_App.jpg"},
    { text:"Century File", image: 'assets/img/portfolio/android/Century_Thumb.jpg', thumb: "assets/img/portfolio/android/Century_Inner.jpg"},
    { text:"TechAlliance", image: 'assets/img/portfolio/android/TechAlliance_thumb.jpg', thumb: "assets/img/portfolio/android/TechAlliance_inner.jpg"},
    { text:"Unknown Facts", image: 'assets/img/portfolio/android/unknownfact_Thumb.jpg', thumb: "assets/img/portfolio/android/unknownfact_Inner.jpg"},
  ];

  android = [
    { text:"Pindrop", image: 'assets/img/portfolio/android/Quickpay_Thumb.jpg', thumb:"assets/img/portfolio/android/Quickpay_Inner.jpg"},
    { text:"Pindrop", image: 'assets/img/portfolio/android/Funkida_Thumb.jpg', thumb: "assets/img/portfolio/android/Funkida_Inner.jpg"},
    { text:"Pindrop", image: 'assets/img/portfolio/android/TechAlliance_thumb.jpg', thumb: "assets/img/portfolio/android/Century_Inner.jpg"},
    { text:"Pindrop", image: 'assets/img/portfolio/android/unknownfact_Thumb.jpg', thumb: "assets/img/portfolio/android/TechAlliance_inner.jpg"},
    { text:"Century File", image: 'assets/img/portfolio/android/Century_Thumb.jpg', thumb: "assets/img/portfolio/android/unknownfact_Inner.jpg"},

  ];

  iphone = [
    { text:"Pindrop", image: 'assets/img/portfolio/ios/Thumbnail_pindrop01_App.jpg'},
    { text:"Pindrop", image: 'assets/img/portfolio/ios/klaspad_Thumb01.png', thumb: "assets/img/portfolio/ios/klaspad_Inner.jpg"},
    { text:"Pindrop", image: 'assets/img/portfolio/ios/Resis-App_thumb.png', thumb: "assets/img/portfolio/ios/Resis-App.jpg"},
    { text:"Pindrop", image: 'assets/img/portfolio/ios/Thumb_01.jpg', thumb: "assets/img/portfolio/ios/ineer_01.jpg"},
    { text:"Pindrop", image: 'assets/img/portfolio/ios/shusu_Thumb.jpg', thumb: "assets/img/portfolio/ios/ineer_Sushu_01.jpg"},
    { text:"Pindrop", image: 'assets/img/portfolio/ios/Investment_Thumb.jpg', thumb: "assets/img/portfolio/ios/Inner_All_IOS_App.jpg"},
  ];

  
  constructor() { }

  ngOnInit() {
  }

}
