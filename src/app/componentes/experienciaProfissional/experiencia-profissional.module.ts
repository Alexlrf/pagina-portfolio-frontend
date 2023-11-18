import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienciaProfissionalRoutingModule } from './experiencia-profissional-routing.module';
import { CadastrarExperienciaProfissionalComponent } from './cadastrar-experiencia-profissional/cadastrar-experiencia-profissional.component';
import { ListarExperienciaProfissionalComponent } from './listar-experiencia-profissional/listar-experiencia-profissional.component';


@NgModule({
  declarations: [
    CadastrarExperienciaProfissionalComponent,
    ListarExperienciaProfissionalComponent
  ],
  imports: [
    CommonModule,
    ExperienciaProfissionalRoutingModule
  ],
  exports: [
    ListarExperienciaProfissionalComponent
  ]
})
export class ExperienciaProfissionalModule { }
