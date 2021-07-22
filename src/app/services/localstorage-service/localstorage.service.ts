import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setItem(key: string, value: any, storageType?: boolean) {
    if (storageType) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: string, defaultValue?: any, storageType?: boolean): any {

    const sessionAutoToken = sessionStorage.getItem(key);
    const localAutoToken = localStorage.getItem(key);
    if (storageType) {
      if (localAutoToken) {
      } else {
        return defaultValue;
      }
    } else {
      if (sessionAutoToken) {
        return JSON.parse(sessionAutoToken);
      } else {
        return defaultValue;
      }
    }

  }

  // tslint:disable-next-line: typedef
  removeItem(key: string) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }


}
