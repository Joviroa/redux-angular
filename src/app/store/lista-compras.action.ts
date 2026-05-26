import { createAction, props } from "@ngrx/store";
import { IListaComprasItem } from "./lista-compras.state";

export const carregarListaCompras = createAction('[Lista Compras] Carregar Lista Compras');
export const carregarListaComprasSucesso = createAction(
    '[Lista Compras] Carregar Lista Compras Sucesso', 
    props<{ entidades: IListaComprasItem[] }>()
);
export const carregarListaComprasErro = createAction(
    '[Lista Compras] Carregar Lista Compras Erro', 
);