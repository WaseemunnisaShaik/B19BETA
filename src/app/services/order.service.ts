import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  
  constructor(private _http: HttpClient) {}

  getMyOrders(userId: number): Observable<any> {
    const endPoint = `api/Order/`;

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3YXNzdWN0ckBnbWFpbC5jb20iLCJ1c2VyaWQiOiI2NjAiLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiI5M2ViNDFiNy1lYjU2LTQyYmQtYmE0MC01ZWQ0Nzg1NzBmY2IiLCJleHAiOjE2NTMyOTA0MjUsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.Zml_jSxo5bbomqk4i0ifcFUwiK-DjpAUrnS5_-yt440');
      let url = "https://bookcart.azurewebsites.net/api/Order/660";
      return this._http.get(url, { headers: headers });
  }
}



















/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  data = '../../assets/test-data/order-data.json';
  constructor(private _http: HttpClient) {}

  getMyOrders(userId: number): Observable<any> {
    return this._http.get(this.data);
  }
}*/


