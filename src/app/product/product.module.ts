import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MaterialModule,
  ],
})
export class ProductModule { }
