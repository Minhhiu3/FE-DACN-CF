import React from 'react'
import TitleComponnent from '../../components/TitleComponnent'
import ProductCard from '../../components/ProductCard'
import FilterComponent from '../../components/FilterComponent'
const Products = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row mt-5'>
                <FilterComponent />
                <div>
                    <TitleComponnent label='' title="Sản phẩm" />
                    <div className='justify-items-center ml-4 mt-8 mb-12 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                        <ProductCard image={'https://i.imgur.com/1z5Z3bH.png'} name={'ao cua nguoi dep trai'} price={0} originalPrice={0} discountPercent={0} rating={0} reviewCount={0} />
                        <ProductCard image={'https://i.imgur.com/1z5Z3bH.png'} name={'ao cua nguoi dep trai'} price={0} originalPrice={0} discountPercent={0} rating={0} reviewCount={0} />
                        <ProductCard image={'https://i.imgur.com/1z5Z3bH.png'} name={'ao cua nguoi dep trai'} price={0} originalPrice={0} discountPercent={0} rating={0} reviewCount={0} />
                        <ProductCard image={'https://i.imgur.com/1z5Z3bH.png'} name={'ao cua nguoi dep trai'} price={0} originalPrice={0} discountPercent={0} rating={0} reviewCount={0} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products