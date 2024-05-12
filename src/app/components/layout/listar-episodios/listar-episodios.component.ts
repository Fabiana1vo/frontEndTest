import { Component, inject } from '@angular/core';
import { SearchBarComponent } from '../../utils/search-bar/search-bar.component';
import { CardsComponent } from '../../utils/cards/cards.component';
import { ListarEpisodiosService } from '../../../services/listar-episodios.service';

@Component({
  selector: 'app-listar-episodios',
  standalone: true,
  imports: [SearchBarComponent, CardsComponent],
  templateUrl: './listar-episodios.component.html',
  styleUrl: './listar-episodios.component.css'
})
export class ListarEpisodiosComponent {
  protected contentCard : any = [1,2,3,4];
  protected listarEpisodios = inject(ListarEpisodiosService);


  ngOnInit(): void {

    this.listarEp();

  }

  protected listarEp(){
    this.listarEpisodios.listarEpisodios().subscribe(
      (res) => {
        console.log("Mostrando as respostas", res)
        this.contentCard.push(...res.results);
      },
      (err) => {
        console.error(err, "Mostrando os erros")
      }
    )
  }



}
