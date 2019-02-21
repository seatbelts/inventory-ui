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
        'Content-type': 'application/json'
      });
      return authheader;
    } catch (error) {
      return error;
    }
  }

  get(url: string, options?): Observable<any> {
    return !!options ? this.http.get(url, options) : this.http.get(url);
  }

  post(url: string, payload: object, options?): Observable<any> {
    const option = !!options ? { ...options, headers: this.setHeaders() } : { headers: this.setHeaders() };
    return this.http.post(url, payload, option);
  }

  put(url: string, payload: object, options?): Observable<any> {
    const option = !!options ? { ...options, headers: this.setHeaders() } : { headers: this.setHeaders() };
    return this.http.put(url, payload, option);
  }

  delete(url: string, options?): Observable<any> {
    const option = !!options ? { ...options, headers: this.setHeaders() } : { headers: this.setHeaders() };
    return this.http.delete(url, option);
  }
}
