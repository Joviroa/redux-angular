import { Injectable, inject } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { ListaComprasService } from "../lista-compras/lista-compras.service";
import { carregarListaCompras, carregarListaComprasErro, carregarListaComprasSucesso } from "./lista-compras.action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ListaComprasEffects {
  carregarListaCompras$ = createEffect(() => {
    const actions$ = inject(Actions);
    const service = inject(ListaComprasService);

    return actions$.pipe(
      ofType(carregarListaCompras),
      switchMap(() => 
          service.getIngredientes().pipe(
              map(entidades => carregarListaComprasSucesso({ entidades })),
              catchError(() => of(carregarListaComprasErro()))
          )
      )
    );
  });
}