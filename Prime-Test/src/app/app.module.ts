import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';


//Material is so much better



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ButtonModule,
   InputSwitchModule,
   BrowserAnimationsModule,
   SelectButtonModule,
   MenuModule,
   TabMenuModule,
   TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  checked:boolean = true;
}
