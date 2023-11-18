import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import * as mock from '../../../assets/mocks/textosDB.json';
import { Texto } from '../../shared/models/texto';

@Injectable({
  providedIn: 'root'
})
export class TextoService implements OnInit {

  API:string = environment.API

  API_LISTA: string = ''

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  buscarTextos() {
    if(this.API.length == 0) {
      return of(mock);
    }
    return this.listar()
  }

  listar(): Observable<Texto[]> {
    this.API_LISTA = `${this.API}/textos`
    return this.http.get<Texto[]>(this.API_LISTA)
  }

}

