export interface IListaComprasItem {
    id: number;
    nome: string;
    quantidade: number;
}

export interface IListaComprasState {
    entidades: IListaComprasItem[];
    isLoading: boolean;
}