import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/productos.service';
import {Route} from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  ProductList: any[]=[];
  constructor(private ProductSvc:ProductService){
    this.ProductSvc.getAll().subscribe((result:any)=>{
      this.ProductList=result;
      console.log(result)
    })
  }

  ngOnInit(): void {
    
  }
}
  
