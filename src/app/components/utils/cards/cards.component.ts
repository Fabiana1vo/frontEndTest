import { NgFor, NgIf } from '@angular/common';
import { Component, Input, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() character!: any[];


  initialValue : any = [];


 ngOnInit(): void {


 }

  initialContentLoad(){
  this.initialValue =  this.character.slice(0,4);

  }


  @HostListener('window:load', ['$event'])
  onWindowLoad(event: any) {
    this.initialContentLoad();

  }

  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: any) {
  // Verificar se o usuário chegou ao final da página
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // Verificar se ainda há mais elementos para carregar
    if (this.character.length > this.initialValue.length) {
      const moreCharacters = this.character;
      this.initialValue = [...this.initialValue, ...moreCharacters.slice(this.initialValue.length, this.initialValue.length + 4)];
    } else {
      console.log("Nada mais para carregar");
    }
  }
}



}
