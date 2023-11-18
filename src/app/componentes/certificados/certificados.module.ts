import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadosRoutingModule } from './certificados-routing.module';
import { CadastrarCertificadoComponent } from './cadastrar-certificado/cadastrar-certificado.component';
import { ListarCertificadoComponent } from './listar-certificado/listar-certificado.component';


@NgModule({
  declarations: [
    CadastrarCertificadoComponent,
    ListarCertificadoComponent
  ],
  imports: [
    CommonModule,
    CertificadosRoutingModule
  ]
})
export class CertificadosModule { }
