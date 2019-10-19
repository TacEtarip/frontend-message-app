import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  getMessages(): Observable<object[]> {
    return this.http.get<object[]>('http://localhost:1234/messages');
  }

}
