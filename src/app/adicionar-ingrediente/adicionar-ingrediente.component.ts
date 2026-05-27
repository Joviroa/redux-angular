import { Component, EventEmitter, Output } from '@angular/core';
import { IListaComprasItem } from '../store/lista-compras.state';

@Component({
  selector: 'app-adicionar-ingrediente',
  templateUrl: './adicionar-ingrediente.component.html',
  styleUrls: ['./adicionar-ingrediente.component.css']
})
export class AdicionarIngredienteComponent {

  @Output() ingredienteAdicionado = new EventEmitter<IListaComprasItem>();

  nomeIngrediente = '';
  quantidadeIngrediente = 0;

  adicionarIngrediente() {
    console.log(this.nomeIngrediente, this.quantidadeIngrediente);
    if (this.nomeIngrediente == '' || this.quantidadeIngrediente <= 0) {
      throw new Error('Ingrediente inválido.');
    }
    this.ingredienteAdicionado.emit({ id: Date.now(), nome: this.nomeIngrediente, quantidade: this.quantidadeIngrediente });
    this.nomeIngrediente = '';
    this.quantidadeIngrediente = 0;
  }

}
