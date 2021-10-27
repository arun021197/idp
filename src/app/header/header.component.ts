import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {

   }
   op(){

    this.router.navigateByUrl('story/onepiece')

   }
   n(){
    this.router.navigateByUrl('story/naruto')
   }
   dbz(){
    this.router.navigateByUrl('story/dragonballz')
   }
   luffy(){
    this.router.navigateByUrl('characters/luffy')
   }
   n1(){
    this.router.navigateByUrl('characters/naruto1')
   }
   goku(){
    this.router.navigateByUrl('characters/goku')
   }
   event1(){
    this.router.navigateByUrl('events/event1')
   }
   event2(){
    this.router.navigateByUrl('events/event2')
   }
   event3(){
    this.router.navigateByUrl('events/event3')
   }
   

  ngOnInit(): void {
    
  }

}
