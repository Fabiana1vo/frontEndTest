import { Component, inject } from '@angular/core';
import { ListarPersonagensService } from '../../../services/listar-personagens.service';
import { CardsComponent } from '../../utils/cards/cards.component';
import { SearchBarComponent } from '../../utils/search-bar/search-bar.component';
@Component({
  selector: 'app-lista-personagem',
  standalone: true,
  imports: [CardsComponent, SearchBarComponent],
  templateUrl: './lista-personagem.component.html',
  styleUrl: './lista-personagem.component.css'
})
export class ListaPersonagemComponent {

  protected contentCard : any = []
  protected listarPersonagensService = inject(ListarPersonagensService);

  ngOnInit(): void {

    this.listar();

  }

  public listar() {
    this.listarPersonagensService.listarPersonagens().subscribe(
        (res) => {
            if (res) {
              console.log("res em lista personagem component", res)
                this.contentCard.push(...res.results);
            }
        },
        (err) => {
            console.error(err, "Mostrando o erro!");
        }
    );
}




}
