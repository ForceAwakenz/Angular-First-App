import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserComponent} from './components/user/user.component';
import {TargetComponent} from './components/target/target.component';
import { UsersComponent } from './components/users/users.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TargetComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
