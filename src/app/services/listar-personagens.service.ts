import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ListarPersonagens } from '../types/listarPersonagem.interface';

@Injectable({
  providedIn: 'root',
})

export class ListarPersonagensService {

  private url = `${environment.url}/character`
  httpClient = inject(HttpClient);

  public listarPersonagens() {
  return this.httpClient.get<ListarPersonagens>(`${this.url}`)
  }
}
