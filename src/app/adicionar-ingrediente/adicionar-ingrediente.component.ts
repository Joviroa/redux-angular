import { Component, EventEmitter, Output } from '@angular/core';
import { IListaComprasItem } from '../store/lista-compras.state';
import { Store } from '@ngrx/store';
import { adicionarItem } from '../store/lista-compras.action';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-ingrediente',
  templateUrl: './adicionar-ingrediente.component.html',
  styleUrls: ['./adicionar-ingrediente.component.css']
})
export class AdicionarIngredienteComponent {

  constructor(private fb: UntypedFormBuilder, private store: Store) { }

  form: UntypedFormGroup = this.fb.group({
    nome: ['', Validators.required],
    quantidade: [0, [Validators.required, Validators.min(1)]]
  });

  adicionarIngrediente() {
    console.log('Adicionando ingrediente:', this.form.value.nome, this.form.value.quantidade);
    if(this.form.invalid) {
      return;
    }
    this.store.dispatch(adicionarItem({
      item: {
        nome: this.form.value.nome,
        quantidade: this.form.value.quantidade
      }
    }));
    this.form.reset();
  }

}
