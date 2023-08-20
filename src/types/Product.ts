export interface IProduct {
  name: string,
  image: string,
  price: number,
  stock: StockType,
  discount: number,
  description: string,
  characteristics: []
}

export enum StockType {
  OutOfStock,
  OnOrder,
  InStock
}

export const StockTypeDict = {
  [StockType.OutOfStock]: "Нет в наличии"
}