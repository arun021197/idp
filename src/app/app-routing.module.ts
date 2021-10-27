import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { GokuComponent } from './characters/goku/goku.component';
import { LuffyComponent } from './characters/luffy/luffy.component';
import { Naruto1Component } from './characters/naruto1/naruto1.component';
import { Event1Component } from './events/event1/event1.component';
import { Event2Component } from './events/event2/event2.component';
import { Event3Component } from './events/event3/event3.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { SignupComponent } from './signup/signup.component';
import { DragonballzComponent } from './story/dragonballz/dragonballz.component';
import { NarutoComponent } from './story/naruto/naruto.component';
import { OnepieceComponent } from './story/onepiece/onepiece.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"",
    component:HomeComponent,
  },
  {
    path:"news",
    component:NewsComponent,
  },
  {
    path:"story",
    component:HomeComponent,
  },
  {
    path:"story",
    children:[{
      path:'onepiece',
      component:OnepieceComponent,
    },
    {
      path:'naruto',
      component:NarutoComponent,
    },
    {
      path:'dragonballz',
      component:DragonballzComponent,
    },
  
  
  ]
  },
  {
    path:"characters",
    component:HomeComponent,
  },


  {
    path:"characters",
    children:[{
      path:'luffy',
      component:LuffyComponent,
    },
    {
      path:'naruto1',
      component:Naruto1Component,
    },
    {
      path:'goku',
      component:GokuComponent,
    },

    ]
  },


  {
    path:"events",
    component:HomeComponent,
  },


{
  path:"events",
  children:[{
    path:'event1',
    component:Event1Component,
  },
  {
    path:'event2',
    component:Event2Component,
  },
  {
    path:'event3',
    component:Event3Component,
  },

  ]
},


  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"signup",
    component:SignupComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
