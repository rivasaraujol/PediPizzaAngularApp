import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  constructor(protected http: HttpClient) { }

  GetCarta(): Observable<any> {
    return this.http.get('http://localhost:3018/api/carta');
  }
}
