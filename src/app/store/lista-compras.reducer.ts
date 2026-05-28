import { createReducer, on } from "@ngrx/store";
import { IListaComprasState } from "./lista-compras.state";
import { carregarListaCompras, carregarListaComprasErro, carregarListaComprasSucesso } from "./lista-compras.action";

export const estadoInicial: IListaComprasState = {
    entidades: [],
    isLoading: false,
};

export const listaComprasReducer = createReducer(
    estadoInicial,
    on(carregarListaCompras, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(carregarListaComprasSucesso, (state, { entidades }) => ({
        ...state,
        entidades,
        isLoading: false,
    })),
    on(carregarListaComprasErro, (state) => ({
        ...state,
        isLoading: false,
    })),
);