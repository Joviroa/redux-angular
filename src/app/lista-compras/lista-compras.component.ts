import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { carregarListaCompras } from '../store/lista-compras.action';
import { IListaComprasItem } from '../store/lista-compras.state';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {
  @Input() ingredientes?: IListaComprasItem[];
  @Output() ingredienteRemovido = new EventEmitter<IListaComprasItem>();

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(carregarListaCompras());
  }

  removerIngrediente(ingrediente: IListaComprasItem) {
    this.ingredienteRemovido.emit(ingrediente);
  }
}
