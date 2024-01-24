export interface ICategoryDto {
    name: string;
    image: string;
    parentId: number;
}

export interface ICategory extends ICategoryDto {
    id: number;
}

export interface ICategoryExtended extends ICategory {
    children: Array<number>;
}

export interface IBrand {
    id: number;
    name: string;
}