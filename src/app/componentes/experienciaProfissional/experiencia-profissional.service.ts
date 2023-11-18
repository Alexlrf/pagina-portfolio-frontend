import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as mockExpProfissional from '../../../assets/mocks/experienciaProfissionalDB.json';
import { ExperienciaProfissional } from '../../shared/models/experienciaProfissional';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaProfissionalService implements OnInit{

  API: string = environment.API
  API_LISTA: string = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  buscarExperienciasProfissionais() {
    if(this.API.length == 0) {
      return of(mockExpProfissional);
    }
    return this.listar()
  }

  listar(): Observable<ExperienciaProfissional[]> {
    this.API_LISTA = `${this.API}/experienciasProfissionais`
    return this.http.get<ExperienciaProfissional[]>(this.API_LISTA)
  }

}
