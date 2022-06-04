import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSelectModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
