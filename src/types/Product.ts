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
  OnOrder,
  InStock
}

export const StockTypeDict = {
  [StockType.OnOrder]: "Под заказ",
  [StockType.InStock]: "В наличии"
}