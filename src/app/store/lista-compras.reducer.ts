import { createReducer, on } from "@ngrx/store";
import { IListaComprasState } from "./lista-compras.state";
import { adicionarItem, adicionarItemErro, adicionarItemSucesso, carregarListaCompras, carregarListaComprasErro, carregarListaComprasSucesso, removerItem, removerItemErro, removerItemSucesso } from "./lista-compras.action";

export const estadoInicial: IListaComprasState = {
    entidades: [],
    isLoading: false,
    isSaving: false,
};

export const listaComprasReducer = createReducer(
    estadoInicial,
    
    // Select
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

    // Insert
    on(adicionarItem, (state) => ({
        ...state,
        isSaving: true,
    })),
    on(adicionarItemSucesso, (state, { item }) => ({
        ...state,
        entidades: [...state.entidades, item], //Cópia das entidades atuais + novo item
        isSaving: false,
    })),
    on(adicionarItemErro, (state) => ({
        ...state,
        isSaving: false,
    })),

    // Delete
    on(removerItem, (state) => ({
        ...state,
        isSaving: true,
    })),
    on(removerItemSucesso, (state, { id }) => ({
        ...state,
        entidades: state.entidades.filter(item => item.id !== id),
        isSaving: false,
    })),
    on(removerItemErro, (state) => ({
        ...state,
        isSaving: false,
    })),
);