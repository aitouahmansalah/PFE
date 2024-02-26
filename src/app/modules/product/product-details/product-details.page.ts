import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/shared/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  product:any;
  existes:boolean=false;

  constructor(private productservice:ProductService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.productservice.productsubject.subscribe((pro:any)=>{
      this.product = pro;
      this.existes = true;
      console.log(this.existes);
    });
    this.route.params.subscribe((params)=>{
        this.productservice.getProductByCode(params['code']);
    })

  }

}
