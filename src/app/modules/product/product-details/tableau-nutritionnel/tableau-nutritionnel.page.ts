import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/shared/product.service';

@Component({
  selector: 'app-tableau-nutritionnel',
  templateUrl: './tableau-nutritionnel.page.html',
  styleUrls: ['./tableau-nutritionnel.page.scss'],
})
export class TableauNutritionnelPage implements OnInit {

  constructor(private productservice:ProductService) { }

  nutriments:any;
  existes = true

  ngOnInit() {
    this.nutriments = this.productservice.getNutriments();
    console.log(this.nutriments)
    this.existes = true;
    console.log(this.nutriments)
  }

}
