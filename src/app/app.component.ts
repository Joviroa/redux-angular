import { Component } from '@angular/core';
import { IListaComprasItem } from './store/lista-compras.state';
import { select, Store } from '@ngrx/store';
import { getListaCompras } from './store/lista-compras.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-angular';

  constructor(private store: Store) { }

  ingredientes$ = this.store.pipe(select(getListaCompras));

  onIngredienteAdicionado(ingrediente: IListaComprasItem) {
    // this.ingredientes.push(ingrediente);
  }

}
