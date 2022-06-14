import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductInterface } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  productsUrl:string = "http://localhost:3000/api/products";
  constructor(private http: HttpClient){}

  // getProducts():ProductInterface[]{}

  getProducts():Observable<any>{
    return this.http.get<any>(this.productsUrl);
  }

}
