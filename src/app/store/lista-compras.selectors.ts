import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IListaComprasState } from "./lista-compras.state";

export const getListaComprasState = createFeatureSelector<IListaComprasState>('listaCompras');

export const getListaCompras = createSelector(
    getListaComprasState,
    (state: IListaComprasState) => state.entidades
)

export const getListaComprasIsLoading = createSelector(
    getListaComprasState,
    (state: IListaComprasState) => state.isLoading
)