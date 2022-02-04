import { Trator } from './../Modelos/trator';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TratoresService {

  private readonly API = '/assets/tratores.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Trator[]>(this.API).pipe(
      tap(tratores => console.log(tratores))
    );
    }
}
