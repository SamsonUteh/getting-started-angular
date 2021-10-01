import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  nadus: any;

  share(){
    window.alert("The product has been shared");
  }

  onNotify(){
    window.alert("You will be notified when the product goes on sale");
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.nadus = this.http.get('')
  }

}
