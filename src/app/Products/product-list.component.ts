import {Component, OnInit} from '@angular/core';

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Driver Hours';

      ngOnInit(): void{
      }
}
