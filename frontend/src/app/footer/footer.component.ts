import { Component, OnInit } from '@angular/core';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showDiv = {
    displayFooter : false
  }
  
  faGamepad = faGamepad;

  constructor() { }

  ngOnInit(): void {
  }

}
