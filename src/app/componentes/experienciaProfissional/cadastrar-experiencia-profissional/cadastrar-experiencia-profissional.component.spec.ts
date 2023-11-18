import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarExperienciaProfissionalComponent } from './cadastrar-experiencia-profissional.component';

describe('CadastrarExperienciaProfissionalComponent', () => {
  let component: CadastrarExperienciaProfissionalComponent;
  let fixture: ComponentFixture<CadastrarExperienciaProfissionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarExperienciaProfissionalComponent]
    });
    fixture = TestBed.createComponent(CadastrarExperienciaProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
