import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/shared/product.service';

@Component({
  selector: 'app-ingrediant',
  templateUrl: './ingrediant.page.html',
  styleUrls: ['./ingrediant.page.scss'],
})
export class IngrediantPage implements OnInit {

  ingrediants:string = "";

  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.ingrediants = this.productservice.getIngrediants();
    console.log(this.ingrediants)
  }



}
