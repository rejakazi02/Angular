import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './components/footer/footer.component';
import { NewslatterComponent } from './components/newslatter/newslatter.component';
import { ClientsComponent } from './components/clients/clients.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewslatterComponent,
    ClientsComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
