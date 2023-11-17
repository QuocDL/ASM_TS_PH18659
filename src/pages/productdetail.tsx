import { useParams } from "react-router-dom"

const ProductDetail = () => {
    const { productId } = useParams()
    return (
        <div>
            <h1 className="color-black">
                product detail {productId}
            </h1>
        </div>
    )
}
export default ProductDetail