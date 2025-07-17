import React from 'react'
import ProductCard from '../../components/ProductCard'
import SaleCard from '../../components/SaleCard'
import { Link } from 'react-router-dom'
import CategoriesSelec from '../../components/CategoriesSelec'
import BestSeller from '../../components/only1produc'
import Fetured from '../../components/Fetured'
import { useProductList } from '../../hooks/useProductList'
const images = [
    '../../../public/images/WD-105_Đàm Văn Hòa_SU25.png'
]

const HomePage = () => {
const { products, loading} = useProductList()

    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <SaleCard />
                <div className='justify-items-center ml-4 mt-8 mb-12 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                     {products.map((product) => (
        <ProductCard
          key={product._id}
          image={product.thumbnail}
          name={product.title}
          price={product.variants[0]?.price || product.priceDefault}
          originalPrice={product.priceDefault}
          discountPercent={Math.round(
            100 -
              ((product.variants[0]?.price || product.priceDefault) /
                product.priceDefault) *
                100
          )}
          rating={product.rating || 4.5} // giả định có rating
          reviewCount={product.soldCountTotal || 12} // giả định số lượt đánh giá
        />
      ))}
                </div>
                <Link className='mb-5 inline-flex justify-center items-center no-underline gap-2.5 rounded bg-red-500 px-10 py-4' to=""><span className='text-Text text-base font-medium leading-6 text-cyan-50'>Xem tất cả sản phẩm</span></Link>
            </div>
            <CategoriesSelec />
            <BestSeller />
            <div>
                <Fetured />
            </div>
        </>
    )
}

export default HomePage
