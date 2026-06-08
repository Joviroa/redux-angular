import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { carregarListaCompras, removerItem } from '../store/lista-compras.action';
import { getListaCompras } from '../store/lista-compras.selectors';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {
  constructor(private store: Store) { }
  
  ingredientes$ = this.store.pipe(
    select(getListaCompras)
  );

  ngOnInit() {
    this.store.dispatch(carregarListaCompras());
  }

  removerIngrediente(id: number) {
    this.store.dispatch(removerItem({ id }));
  }
}

