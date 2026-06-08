export interface IListaComprasItemBase {
    nome: string;
    quantidade: number;
}

export interface IListaComprasItem extends IListaComprasItemBase {
    id?: number;
}

export interface IListaComprasState {
    entidades: IListaComprasItem[];
    isLoading: boolean;
    isSaving: boolean;
}