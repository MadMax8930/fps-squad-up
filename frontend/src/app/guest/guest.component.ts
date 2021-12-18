import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  showCard: boolean = false;
  myScriptElement: HTMLScriptElement;

  constructor(private postService: PostService, private router: Router) {
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.type = "text/javascript";
     this.myScriptElement.src = "../assets/js/home.js";
     document.body.appendChild(this.myScriptElement);
   }

   post :{
    title : string,
    content : string,
    imageUrl : string,
    gameId: string,
    UserId : number 
  }

  ngOnInit(): void {    
  }

  toggleShow() {
  this.showCard = !this.showCard;
  }

  randomPost(){
    this.showCard = true;
    this.postService.findRandom(this.post)
    .subscribe((post) => {
      console.log(post);
      this.post = post
    });
  };
}
