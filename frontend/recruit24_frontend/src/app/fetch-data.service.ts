import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getAllJobPost(): Observable<any> {
    const url = 'http://localhost:3000/position/all';
    return this.http.get<any>(url);
  }
}
