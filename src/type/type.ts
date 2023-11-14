export type product = {
    id: number
    title: string
    price: number
    image: string
    description: string
    rating: rate
}
export type rate = {
    rate: number
    count: number
}
export type productContentType = {
    product: product
}