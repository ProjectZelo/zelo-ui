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
}
