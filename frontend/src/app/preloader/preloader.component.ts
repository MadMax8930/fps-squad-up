import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {
  myScriptElement: HTMLScriptElement;

  constructor() {
   }

  ngOnInit(): void {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.type = "text/javascript";
    this.myScriptElement.src = "../assets/js/home.js"
    document.body.appendChild(this.myScriptElement);
 }
}