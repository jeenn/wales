import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'https://www.gov.uk/bank-holidays.json'; 
  getWales() {
    return this.http.get(this.url);
  }

}
