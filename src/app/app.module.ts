import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { NewsComponent } from './news/news.component';
import { CharactersComponent } from './characters/characters.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OnepieceComponent } from './story/onepiece/onepiece.component';
import { NarutoComponent } from './story/naruto/naruto.component';
import { DragonballzComponent } from './story/dragonballz/dragonballz.component';
import { LuffyComponent } from './characters/luffy/luffy.component';

import { GokuComponent } from './characters/goku/goku.component';
import { Event1Component } from './events/event1/event1.component';
import { Event2Component } from './events/event2/event2.component';
import { Event3Component } from './events/event3/event3.component';
import { Naruto1Component } from './characters/naruto1/naruto1.component';
import { CarousalComponent } from './carousal/carousal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StoryComponent,
    NewsComponent,
    CharactersComponent,
    EventsComponent,
    LoginComponent,
    SignupComponent,
    OnepieceComponent,
    NarutoComponent,
    DragonballzComponent,
    LuffyComponent,
  
    GokuComponent,
    Event1Component,
    Event2Component,
    Event3Component,
    Naruto1Component,
    CarousalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
