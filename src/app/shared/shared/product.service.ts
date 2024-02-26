import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsubject:Subject<any> = new Subject<any>;
  product!:any;

  constructor() { }

  getProductByCode(code:string){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://world.openfoodfacts.org/api/v2/product/"+code+".json");
    xhr.onreadystatechange = ()=>{
      if (xhr.readyState == 4 && xhr.status == 200) {
        const Product = JSON.parse(xhr.responseText)
        this.productsubject.next(Product.product) ;
        this.product = Product.product;
        console.log(Product.product);
      }
    }
    xhr.send();
  }

  getIngrediants():string{
    console.log(this.product.ingredients_text)
    return this.product.ingredients_text_with_allergens_en;
  }

  getNutriments():string{
    console.log(this.product)
    console.log("test")
    return this.product.nutriments;
  }

}
