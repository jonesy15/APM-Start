import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.component';
import { EmployeesComponent } from './Employees/employees.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'Drivers', component: ProductListComponent, pathMatch: 'full' },
  { path: 'Employees', component: EmployeesComponent, pathMatch: 'full' },
  { path: 'ComingSoon', component: ComingSoonComponent, pathMatch: 'full' },
  { path: 'AboutUs', component: AboutUsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
