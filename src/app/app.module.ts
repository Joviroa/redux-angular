import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { AdicionarIngredienteComponent } from './adicionar-ingrediente/adicionar-ingrediente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { listaComprasReducer } from './store/lista-compras.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ListaComprasEffects } from './store/lista-compras.effects';

@NgModule({
  declarations: [
    AppComponent,
    ListaComprasComponent,
    AdicionarIngredienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      listaCompras: listaComprasReducer,
    }, {}),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, // Define o número máximo de estados a serem armazenados no DevTools
      logOnly: !isDevMode() }),
    EffectsModule.forRoot([ListaComprasEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
