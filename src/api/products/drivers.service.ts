/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DriverService {

  private baseUrl = environment.resources.tmsApi.resourceUri + '/Driver';


  constructor(
    private http: HttpClient) { }

  getDriver() {
    var url = this.baseUrl + '/GetDriver';
    return this.http.get(url, this.globals.httpOptions);
  }

} */
