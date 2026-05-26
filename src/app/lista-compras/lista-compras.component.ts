import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { carregarListaCompras } from '../store/lista-compras.action';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {
  @Input() ingredientes?: any[];
  @Output() ingredienteRemovido = new EventEmitter<any>();

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(carregarListaCompras());
  }

  removerIngrediente(ingrediente: any) {
    this.ingredienteRemovido.emit(ingrediente);
  }
}
