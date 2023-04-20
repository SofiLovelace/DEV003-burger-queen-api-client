import { IProductToCar } from "./waiter.interface"

export interface IResponseOrder {
    id: number
    userId: number
    client: string
    products: IProductToCar[]
    status: 'pending' | 'complete'
    dataEntry: any,
    dataFinish: any
}