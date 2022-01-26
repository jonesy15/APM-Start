import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.component';


const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'Drivers', component: ProductListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
