import { createAction, props } from "@ngrx/store";
import { IListaComprasItem, IListaComprasItemBase } from "./lista-compras.state";
// Select
export const carregarListaCompras = createAction('[Lista Compras] Carregando lista de compras');
export const carregarListaComprasSucesso = createAction(
    '[Lista Compras] Lista de compras carregada com sucesso', 
    props<{ entidades: IListaComprasItem[] }>()
);
export const carregarListaComprasErro = createAction(
    '[Lista Compras] Erro ao carregar lista de compras', 
);
// Insert
export const adicionarItem = createAction(
    '[Lista Compras] Adicionar item',    
    props<{ item: IListaComprasItemBase }>()
);
export const adicionarItemSucesso = createAction(
    '[Lista Compras] Item adicionado com sucesso', 
    props<{ item: IListaComprasItem }>()
);
export const adicionarItemErro = createAction(
    '[Lista Compras] Erro ao adicionar item'
);
// Delete
export const removerItem = createAction(
    '[Lista Compras] Remover item',    
    props<{ id: number }>()
);
export const removerItemSucesso = createAction(
    '[Lista Compras] Item removido com sucesso', 
    props<{ id: number }>()
);
export const removerItemErro = createAction(
    '[Lista Compras] Erro ao remover item'
);