import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.component';
import { NavBarComponent } from './Navbar/navbar.component';
import { EmployeesComponent } from './Employees/employees.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavBarComponent,
    EmployeesComponent,
    AboutUsComponent,
    ComingSoonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
