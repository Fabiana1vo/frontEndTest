import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEpsodiosComponent } from './lista-epsodios.component';

describe('ListaEpsodiosComponent', () => {
  let component: ListaEpsodiosComponent;
  let fixture: ComponentFixture<ListaEpsodiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEpsodiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaEpsodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
