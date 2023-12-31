import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Product, ProductDetailType } from "../type/Product"
import ProductRelate from "./components/ProductRelate"



const ProductDetail = () => {
    const { productId } = useParams()
    const [ProductDetail, setProducts] = useState<ProductDetailType | null>(null)
    const fetchProduct = async (id: number) => {
        try {
            const { data: product } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            const { data: productListRalated } = await axios.get(`https://fakestoreapi.com/products/category/${product?.category}`)
            setProducts({
                ...product,
                productListRalated: productListRalated.filter(
                    (similarProduct: Product) =>
                        similarProduct.id !== product.id
                )
            })
        } catch (error) {
            console.log('Connect API Failed please check your code!');
        }
    }
    useEffect(() => {
        if (!productId) return
        fetchProduct(Number(productId))
    }, [])
    return (
        <div className="px-[16%] w-[100%vw]">
            <div className="py-[5%] ">
                <div className="flex gap-[50px]">
                    <div className="mt-[10px]">
                        <img src={ProductDetail?.image} alt="" className="w-[360px]" />
                    </div>
                    <div>
                        <div>
                            <h1 className="font-medium text-[28px]">{ProductDetail?.title}</h1>
                            <div className="flex items-center gap-[8px]">
                                <span className="flex items-center gap-[5px] w-[50px] rounded-[10px] bg-blue-300 p-[5px] text-[13px]">
                                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>{ProductDetail?.rating.rate}
                                </span>
                                <span className="text-[12px] text-[#696969]">
                                    {ProductDetail?.rating.count} Rating Count
                                </span>
                            </div>
                            <div className="w-[70%]">
                                <span className="text-[10px] mt-[30px]">{ProductDetail?.description}</span>
                            </div>
                        </div>
                        <div className="mt-[10%]">
                            <div>
                                <div className="flex gap-[15px]">
                                    <div>
                                        <button className="price py-[10px] px-[10px] rounded-[5px] hover:scale-105 hover:shadow-lg  transition-all bg-blue-500">
                                            <span className="text1 text-white font-medium text-[18px]">Buy Now</span>
                                            <span className="px-[17px] text-buy hidden text-[18px] text-white font-medium">  {ProductDetail?.price}$   </span>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="py-[10px] font-medium transition-all hover:scale-105 hover:shadow-lg px-[5px] text-[18px] bg-orange-800 text-white rounded-[5px]">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
                <div className="mb-[30px] mt-[30px]">
                    <h3 className="font-medium">Product Relate</h3>
                </div>
                <div className="flex gap-[30px]">
                    {ProductDetail?.productListRalated.map((product, index) => (
                        <ProductRelate key={index} product={product} />
                    ))}
                </div>

            </div>
        </div>
    )

}
export default ProductDetail