import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  recieveGetCall(cc: number) {
    return this.http.get(`/recieve/${cc}`);
  }

  getEncryptednumber() {
    return this.http.get(`localhost:4200/encryption`);
  }
}
