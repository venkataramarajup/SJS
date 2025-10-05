import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummydataService {

  constructor(private http: HttpClient) { }

  gettheData() {
    return this.http.get('https://api.restful-api.dev/objects')
  }
}
