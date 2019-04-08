import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(
    private http: HttpClient
  ) { }

  setHeaders() {
    try {
      const authheader = new HttpHeaders({
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      return authheader;
    } catch (error) {
      return error;
    }
  }

  get(url: string, options?): Observable<any> {
    const option = !!options ? { ...options, headers: this.setHeaders() } : { headers: this.setHeaders() };
    return !!options ? this.http.get(url, options) : this.http.get(url, option);
  }

  post(url: string, payload: object, options?): Observable<any> {
    const option = !!options ? { ...options, headers: this.setHeaders() } : { headers: this.setHeaders() };
    return this.http.post(url, payload, option);
  }

  put(url: string, payload: object, options?): Observable<any> {
    const option = !!options ? { ...options, headers: this.setHeaders() } : { headers: this.setHeaders() };
    return this.http.patch(url, payload, option);
  }

  delete(url: string, options?): Observable<any> {
    const option = !!options ? { ...options, headers: this.setHeaders() } : { headers: this.setHeaders() };
    return this.http.delete(url, option);
  }
}
