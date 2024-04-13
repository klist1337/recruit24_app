import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  saveData(key:string, value:any) {
    localStorage?.setItem(key, JSON.stringify(value));
  }

  getData(key:string) {
    return JSON.parse(localStorage?.getItem(key) || '{}');
  }
}
