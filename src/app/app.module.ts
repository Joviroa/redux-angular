import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { AdicionarIngredienteComponent } from './adicionar-ingrediente/adicionar-ingrediente.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { listaComprasReducer } from './store/lista-compras.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    StoreModule.forRoot({
      listaCompras: listaComprasReducer,
    }, {}),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, // Define o número máximo de estados a serem armazenados no DevTools
      logOnly: !isDevMode() }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
