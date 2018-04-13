import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
items: Array<any> = []
navIsFixed: boolean;

constructor(@Inject(DOCUMENT) private document: Document) { 
    this.items = [
        { image : "assets/img/team/pp.jpg", name: "Pratik Patel", des:"VC Commando" },
        { image: "assets/img/team/hirang.jpg", name: "Hirang Sheth", des:"iOS Veteran"},
        { image: "assets/img/team/jig.jpg", name: "Jigar Patel", des:"iOS Infantry"},
        { image: "assets/img/team/mahesh.jpg", name: "Mahesh Vitthani", des:"MEAN Stack Maverick"},
        { image: "assets/img/team/himanshu.jpg", name: "Himanshu Daudia", des:"Frontend Fighter"},
    ]
}

    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.navIsFixed = true;
        } else if (this.navIsFixed && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) { this.navIsFixed = false; } } scrollToTop() { (function smoothscroll() { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        })();
    }

    ngOnInit(): void {
    }
}

  
