import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DriverService {

  private baseUrl =  'https://httms-hackathonapp.azurewebsites.net/api/Data';

  constructor(
    private http: HttpClient) { }

  addData() {
    var url = this.baseUrl + '/AddData';
    return this.http.post(url, null, null);
  }

}
