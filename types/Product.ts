export interface IProductDto {
  name: string,
  images: Array<string>,
  price: number,
  stock: StockType,
  discount: number,
  description: string,
  characteristics: Array<Array<string>>,
  category: number,
  brand: string
}

export interface IProduct extends IProductDto {
  id: number,
}

export enum StockType {
  OnOrder,
  InStock
}

export const StockTypeDict = {
  [StockType.OnOrder]: "Под заказ",
  [StockType.InStock]: "В наличии"
}