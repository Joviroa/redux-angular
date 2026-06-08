import { Injectable, inject } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { ListaComprasService } from "../lista-compras/lista-compras.service";
import { adicionarItem, adicionarItemErro, adicionarItemSucesso, carregarListaCompras, carregarListaComprasErro, carregarListaComprasSucesso, removerItem, removerItemErro, removerItemSucesso } from "./lista-compras.action";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";

@Injectable()
export class ListaComprasEffects {
  carregarListaCompras$ = createEffect(() => {
    const actions = inject(Actions);
    const service = inject(ListaComprasService);

    return actions.pipe(
      ofType(carregarListaCompras),
      switchMap(() => 
          service.getIngredientes().pipe(
              map(entidades => carregarListaComprasSucesso({ entidades })),
              catchError(() => of(carregarListaComprasErro()))
          )
      )
    );
  });

  adicionarItem$ = createEffect(() => {
    const actions = inject(Actions);
    const service = inject(ListaComprasService);

    return actions.pipe(
      ofType(adicionarItem),
      mergeMap(({ item }) => 
          service.adicionarIngrediente(item).pipe(
              map(novoItem => adicionarItemSucesso({ item: novoItem })),
              catchError(() => of(adicionarItemErro()))
          )
      )
    );
  });

  removerItem$ = createEffect(() => {
    const actions = inject(Actions);
    const service = inject(ListaComprasService);

    return actions.pipe(
      ofType(removerItem),
      mergeMap(({ id }) => 
          service.removerIngrediente(id).pipe(
              map(() => removerItemSucesso({ id })),
              catchError(() => of(removerItemErro()))
          )
      )
    );
  });
}

