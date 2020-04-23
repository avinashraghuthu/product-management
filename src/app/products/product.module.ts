import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReplaceCharacterPipe } from '../shared/custom-pipes/replace-character.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ReplaceCharacterPipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
