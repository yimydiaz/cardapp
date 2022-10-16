import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private urlEndPoint = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  public getListTarjetas(): Observable<any> {
    console.log('SERV');
    return this.http.get(`${this.urlEndPoint}/tarjetas/tarjeta`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(e => {
        return e;
      })
    );
  }

  public getListTransactions(): Observable<any> {
    console.log('SERV');
    return this.http.get(`${this.urlEndPoint}/transacciones/transacciones`).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(e => {
        return e;
      })
    );
  }
}
