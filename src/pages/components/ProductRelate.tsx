import { Product } from "../../type/Product"


type productCardRalate = {
    product: Product
}

const ProductRelate: React.FC<productCardRalate> = ({ product }) => {
    return (
        <a className="price transition-all w-[160px] transition-all hover:shadow-lg rounded-[8px] border-solid border-2 border-[#eee] py-[10px] px-[15px]" key={product.id} href={`/product/${product.id}`}>
            <div>
                <img className="w-[120px] h-[140px] hover:scale-105 transition-all" src={product?.image} alt="" />
            </div>
            <p className="w-[110%] font-medium text-[14px] whitespace-nowrap text-ellipsis overflow-hidden ">{product?.title}</p>

            <div className="flex justify-center">
                <span className="flex p-[2px] bg-blue-300 wi text-[.8rem] w-[40px] rounded-[5px]"><svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>{product?.rating.rate}</span>
            </div>
            <div className="text-center mt-[10px]">
                <button className="transition-all p-[8px] bg-orange-800 text-[14px] text-white font-medium rounded-[5px]">
                    <span className="hidden text-buy text-[13px] px-[10px]">{product?.price}$</span>
                    <span className="text1">Buy Now</span>
                </button>
            </div>
        </a>
    )

}

export default ProductRelate