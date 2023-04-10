export interface IResponseProduct {
    dateEntry: Date
    id: number
    image: string
    name: string
    price: number
    type: 'Desayuno' | 'Almuerzo'
}

export interface IProductToCar {
    dateEntry: Date
    id: number
    image: string
    name: string
    price: number
    type: 'Desayuno' | 'Almuerzo'
    totalQuantity: number
}