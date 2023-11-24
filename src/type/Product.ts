export type Product = {
    id: number
    title: string
    price: number
    image: string
    description: string
    category: string
    rating: {
        rate: number,
        count: number,
    }
}

export type ProductContentType = {
    product: Product
}
export type productCardRalate = {
    product: Product
}
