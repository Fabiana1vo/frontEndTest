import { TestBed } from '@angular/core/testing';

import { ListarPersonagensService } from './listar-personagens.service';

describe('ListarPersonagensService', () => {
  let service: ListarPersonagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarPersonagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
