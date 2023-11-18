import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCertificadoComponent } from './listar-certificado.component';

describe('ListarCertificadoComponent', () => {
  let component: ListarCertificadoComponent;
  let fixture: ComponentFixture<ListarCertificadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCertificadoComponent]
    });
    fixture = TestBed.createComponent(ListarCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
