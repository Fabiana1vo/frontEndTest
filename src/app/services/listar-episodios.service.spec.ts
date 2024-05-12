import { TestBed } from '@angular/core/testing';

import { ListarEpisodiosService } from './listar-episodios.service';

describe('ListarEpisodiosService', () => {
  let service: ListarEpisodiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarEpisodiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
