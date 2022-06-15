import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {

  products:ProductInterface[] = [];
  hotSaleProducts:ProductInterface[]=[];

  constructor(private pd: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.setHotSaleProducts();

  }

  getAllProducts():void{
    this.pd.getProducts()
    .subscribe(response => this.products = response.data);
  }

setHotSaleProducts():void{
  this.hotSaleProducts = this.products.filter(eachProduct=>eachProduct.productCategory==="Hot Sale");
}

}
