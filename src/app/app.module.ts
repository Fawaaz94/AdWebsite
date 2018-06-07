import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; 
import { SlideMenuComponent } from './components/slide-menu/slide-menu.component';



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,HomeComponent,SlideMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
