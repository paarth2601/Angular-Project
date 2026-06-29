import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl =
      environment.apiUrl + '/contact';
      
  constructor(private http: HttpClient) { }

  sendMessage(data: any) {

    return this.http.post(this.apiUrl,
      data
    );

  }

}
