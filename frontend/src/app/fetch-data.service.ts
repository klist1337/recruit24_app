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
  getSearchValue(searchValue: string) : Observable<any> {
    const url = `http://localhost:3000/position/${searchValue}`;
    return this.http.get<any>(url);

  }
  
  submitForm(formData: any) {
    const url = 'http://localhost:3000/position/submit';
    return this.http.post<any>(url, formData);
  }
}
