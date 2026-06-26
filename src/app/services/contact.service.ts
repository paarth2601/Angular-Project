import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMessage(data: any) {

    return this.http.post(
      'http://localhost:5000/api/contact',
      data
    );

  }

}
