import { Injectable } from '@angular/core';
import { IListaComprasItem } from '../store/lista-compras.state';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListaComprasService {
  private ingredientesMock: IListaComprasItem[] = [
    { id: 1, nome: 'Tomate', quantidade: 2 },
    { id: 2, nome: 'Cebola', quantidade: 1 },
    { id: 3, nome: 'Alface', quantidade: 1 },
  ];
  
  getIngredientes() {
    return of(this.ingredientesMock);
  }
}
