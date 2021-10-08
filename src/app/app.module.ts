import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserComponent} from './components/user/user.component';
import {TargetComponent} from './components/target/target.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TargetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
