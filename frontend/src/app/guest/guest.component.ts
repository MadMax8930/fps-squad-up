import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  myScriptElement: HTMLScriptElement;

  constructor() {
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.type = "text/javascript";
     this.myScriptElement.src = "../assets/js/home.js";
     document.body.appendChild(this.myScriptElement);
   }

  ngOnInit(): void {    
  }

}
