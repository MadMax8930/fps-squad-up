import { Component, OnInit } from '@angular/core';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  showDiv = {
    displayAbout : false
  }
  
  faGamepad = faGamepad;

  constructor() { }

  ngOnInit(): void {
  }

}
