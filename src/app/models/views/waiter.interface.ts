export interface IResponseProduct {
    dateEntry: Date
    id: number
    image: string
    name: string
    price: number
    type: 'Desayuno' | 'Almuerzo'
}

export interface IProductToCar {
    qty: number
    product: {
        id: number
        name: string
        price: number
        image: string
        type: 'Desayuno' | 'Almuerzo'
        dateEntry: Date
    }
}

export interface IDataCheck {
    products: IProductToCar[]
    total: number
}