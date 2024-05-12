import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ListarEpisodios } from '../types/listarEpisodio.interface';

@Injectable({
  providedIn: 'root'
})
export class ListarEpisodiosService {

  private url = `${environment.url}/episode`
  httpClient = inject(HttpClient);

  public listarEpisodios(){
    return this.httpClient.get<ListarEpisodios>(`${this.url}`)
  }

}
