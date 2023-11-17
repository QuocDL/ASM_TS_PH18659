import { productContentType } from "../../type/type"
import { Link } from "react-router-dom"

const ProductContent: React.FC<productContentType> = ({ product }) => {

    return (
        <a key={product.id} href="" className="w-[356px] transition-all hover:shadow-lg h-[296px] border rounded-[5%] p-[10px]">
            <Link to={`/product/${product.id}`}>
                <div className="flex justify-center items-center py-[5%]">

                    <img src={product.image} alt="" className="w-[100px] h-[120px]" />
                </div>
                <div className="text text-center">
                    <h3 title={product.title} className="font-medium overflow-hidden whitespace-nowrap text-ellipsis">{product.title}</h3>
                </div>
                <div className="py-[20px]">
                    <p className="text-[12px] text-[#ccc] w-[95%] overflow-hidden whitespace-nowrap text-ellipsis">{product.description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="rating ransition-all text-[12px] px-[2px] rounded-[5px] flex items-center justify-center gap-2 bg-blue-100">
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className="rating-count hidden">{product.rating.count} Rating</span>
                        <span className="rate">{product.rating.rate}</span>
                    </div>

                    <a href="">
                        <div className="price py-[5px] px-[10px] rounded-[5px] dark:md:hover:scale-105 transition-all bg-blue-500">
                            <span className="text-buy hidden text-white font-medium text-[15px]">Buy Now</span>
                            <span className="text1 text-[15px] text-white font-medium">{product.price}$</span>
                        </div>
                    </a>
                </div>
            </Link>
        </a >
    )
}
export default ProductContent