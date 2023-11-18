import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCertificadoComponent } from './cadastrar-certificado.component';

describe('CadastrarCertificadoComponent', () => {
  let component: CadastrarCertificadoComponent;
  let fixture: ComponentFixture<CadastrarCertificadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarCertificadoComponent]
    });
    fixture = TestBed.createComponent(CadastrarCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
