import { IProductToCar } from "./waiter.interface"

export interface IResponseOrder {
  id: number
  userId: number
  client: string
  products: IProductToCar[]
  status: 'pending' | 'canceled' | 'delivering' | 'delivered'
  dateEntry: Date,
  dateProcessed: Date
}