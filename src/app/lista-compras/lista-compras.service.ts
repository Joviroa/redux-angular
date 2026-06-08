import { Injectable } from '@angular/core';
import { IListaComprasItem, IListaComprasItemBase } from '../store/lista-compras.state';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListaComprasService {
  private ingredientesMock: IListaComprasItem[] = [
    // { id: 1, nome: 'Tomate', quantidade: 2 },
    // { id: 2, nome: 'Cebola', quantidade: 1 },
    // { id: 3, nome: 'Alface', quantidade: 1 },
  ];
  
  getIngredientes() {
    return of([...this.ingredientesMock]);
  }

  adicionarIngrediente(ingrediente: IListaComprasItemBase) {
    const novoIngrediente = { ...ingrediente, id: this.ingredientesMock.length + 1 };
    this.ingredientesMock.push(novoIngrediente);
    console.log('Ingrediente adicionado:', novoIngrediente);
    return of(novoIngrediente);
  }

  removerIngrediente(id: number) {
    this.ingredientesMock = this.ingredientesMock.filter(item => item.id !== id);
    console.log('Ingrediente removido:', id);
    return of(undefined);
  }
}
