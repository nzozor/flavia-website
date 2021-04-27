import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

/**
 * Helps provide common CRUD based http calls within other services.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  get<T>(apiUrl: string, path: string, options: object = {}): Observable<T> {
    return this.http.get<T>(`${apiUrl}/${path}`, options);
  }

  put<T>(apiUrl: string, path: string, body: object = {}): Observable<T> {
    return this.http.put<T>(`${apiUrl}/${path}`, body, httpOptions);
  }

  post<T>(apiUrl: string, path: string, body: object = {}): Observable<T> {
    return this.http.post<T>(`${apiUrl}/${path}`, body, httpOptions);
  }

  delete<T>(apiUrl: string, path: string): Observable<T> {
    return this.http.delete<T>(`${apiUrl}/${path}`, httpOptions);
  }
}
