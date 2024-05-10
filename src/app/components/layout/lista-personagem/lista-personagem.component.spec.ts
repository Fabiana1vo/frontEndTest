import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonagemComponent } from './lista-personagem.component';

describe('ListaPersonagemComponent', () => {
  let component: ListaPersonagemComponent;
  let fixture: ComponentFixture<ListaPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPersonagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
