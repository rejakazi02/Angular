import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {A11yModule} from '@angular/cdk/a11y';
import {MaterialModule} from './shared/material.module';
// import { SideNavComponent } from './invoice-builder/components/side-nav/side-nav.component';
// import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({

  declarations: [
    AppComponent,
    // SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    MaterialModule,
    // MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
