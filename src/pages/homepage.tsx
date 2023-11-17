import { useEffect, useState } from 'react'
import { product } from '../type/type'
import axios from 'axios'
import ProductContent from './components/products'


const HomePage = () => {
    const [products, setProducts] = useState<product[]>([])
    const fetchProduct = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products')
            setProducts(data)
        } catch (error) {
            console.log('Connect API Failed!');
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    console.log('result', products);
    return (
        <div className='mt-[30px] text-center'>
            <div className='flex justify-center'>
                <img className='rounded-[10px] px-[2%]' src="https://img.timviecthietke.com/2021/06/kich-thuoc-banner-website-1.png" alt="" />
            </div>
            <div className=''>
                <ul>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
            <div className=" mt-[30px] flex gap-[2%] gap-y-7 w-[100%] flex-wrap justify-center items-center mb-[50px]">
                {products.map((product, index) => (
                    <ProductContent key={index} product={product} />
                ))}
            </div>
        </div>
    )
}
export default HomePage