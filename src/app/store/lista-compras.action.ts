import { createAction, props } from "@ngrx/store";
import { IListaComprasItem } from "./lista-compras.state";

export const carregarListaCompras = createAction('[Lista Compras] Carregando lista de compras');
export const carregarListaComprasSucesso = createAction(
    '[Lista Compras] Lista de compras carregada com sucesso', 
    props<{ entidades: IListaComprasItem[] }>()
);
export const carregarListaComprasErro = createAction(
    '[Lista Compras] Erro ao carregar lista de compras', 
);