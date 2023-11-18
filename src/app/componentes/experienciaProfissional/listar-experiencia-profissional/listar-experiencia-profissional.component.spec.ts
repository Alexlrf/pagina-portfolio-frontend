import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarExperienciaProfissionalComponent } from './listar-experiencia-profissional.component';

describe('ListarExperienciaProfissionalComponent', () => {
  let component: ListarExperienciaProfissionalComponent;
  let fixture: ComponentFixture<ListarExperienciaProfissionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarExperienciaProfissionalComponent]
    });
    fixture = TestBed.createComponent(ListarExperienciaProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
