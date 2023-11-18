import { Component, OnInit } from '@angular/core';
import { ExperienciaProfissional } from '../../../shared/models/experienciaProfissional';
import { ExperienciaProfissionalService } from '../experiencia-profissional.service';

@Component({
  selector: 'app-listar-experiencia-profissional',
  templateUrl: './listar-experiencia-profissional.component.html',
  styleUrls: ['./listar-experiencia-profissional.component.css']
})
export class ListarExperienciaProfissionalComponent implements OnInit {

  constructor(private expProfissionalService: ExperienciaProfissionalService) {}

  experienciasProfissionais: ExperienciaProfissional[] = JSON.parse(localStorage.getItem('expProfissionais') || '[]');

  ngOnInit(): void {
    this.buscarExperienciasProfissionais()
  }

  buscarExperienciasProfissionais() {
    if(this.experienciasProfissionais.length < 1) {
      this.expProfissionalService.buscarExperienciasProfissionais().subscribe({
        next: (exp: ExperienciaProfissional[])=>{
          this.experienciasProfissionais = Array.from(exp)
          this.preencherLocalStorage('expProfissionais', this.experienciasProfissionais)
        },
        error: (erro)=> {
          console.log(`Erro na busca de experiências profissionais [${erro}]`)
        }
      })
    }
  }

  preencherLocalStorage(chaveParametro: string, valor: {}) {
    localStorage.setItem(chaveParametro, JSON.stringify(valor))
  }

}

