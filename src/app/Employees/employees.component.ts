import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/api/products/drivers.service';

@Component({
  selector: 'pm-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  drivers: [] = [];

  constructor(
    private driverApi: DriverService) {

  }

  ngOnInit(): void {
  }

  getDrivers() {
    this.driverApi.getData().subscribe((drivers: any) => {
      console.log('drivers', drivers);
    }, error => {
      console.log('error', error);
    }).add(() => {
      console.log('hi');
    });
  }
}
