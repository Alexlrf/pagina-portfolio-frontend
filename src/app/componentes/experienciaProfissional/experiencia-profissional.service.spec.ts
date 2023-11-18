import { TestBed } from '@angular/core/testing';

import { ExperienciaProfissionalService } from './experiencia-profissional.service';

describe('ExperienciaProfissionalService', () => {
  let service: ExperienciaProfissionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciaProfissionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
