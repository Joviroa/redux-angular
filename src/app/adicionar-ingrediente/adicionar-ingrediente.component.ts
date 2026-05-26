import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adicionar-ingrediente',
  templateUrl: './adicionar-ingrediente.component.html',
  styleUrls: ['./adicionar-ingrediente.component.css']
})
export class AdicionarIngredienteComponent {

  @Output() ingredienteAdicionado = new EventEmitter<{ nome: string; quantidade: number }>();

  nomeIngrediente = '';
  quantidadeIngrediente = 0;

  adicionarIngrediente() {
    console.log(this.nomeIngrediente, this.quantidadeIngrediente);
    if (this.nomeIngrediente == '' || this.quantidadeIngrediente <= 0) {
      throw new Error('Ingrediente inválido.');
    }
    this.ingredienteAdicionado.emit({ nome: this.nomeIngrediente, quantidade: this.quantidadeIngrediente });
    this.nomeIngrediente = '';
    this.quantidadeIngrediente = 0;
  }

}
