import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-angular';
  ingredientes = [
    { nome: 'Arroz', quantidade: 1 },
    { nome: 'Feijão', quantidade: 2 },
    { nome: 'Carne', quantidade: 3 }
  ];

  onIngredienteAdicionado(ingrediente: { nome: string; quantidade: number }) {
    this.ingredientes.push(ingrediente);
  }

  onIngredienteRemovido(ingrediente: { nome: string; quantidade: number }) {
    this.ingredientes = this.ingredientes.filter(i => i !== ingrediente);
  }
}
