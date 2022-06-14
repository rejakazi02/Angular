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
import { SlidersComponent } from './components/sliders/sliders.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import {MatTabsModule} from '@angular/material/tabs';
import { OffersectionComponent } from './components/offersection/offersection.component';
import { DeliverySectionComponent } from './components/delivery-section/delivery-section.component';
import { RelaxProductSectionComponent } from './components/relax-product-section/relax-product-section.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { ProductsService } from './services/products.service';
import {HttpClientModule} from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewslatterComponent,
    ClientsComponent,
    MarketplaceComponent,
    SlidersComponent,
    TabMenuComponent,
    ProductsComponent,
    CategoriesComponent,
    RecentlyAddedComponent,
    NewArrivalsComponent,
    OffersectionComponent,
    DeliverySectionComponent,
    RelaxProductSectionComponent,
    SwiperComponent,


  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    SwiperModule,
    HttpClientModule




  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
