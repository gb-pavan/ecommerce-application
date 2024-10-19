import React from 'react'
import './ProductsContainer.css'
import FilterProducts from '../FilterProducts/FilterProducts'
import ProductGrid from '../ProductGrid/ProductGrid'

const ProductsContainer = () => {
    return (
        <div className='product-container'>
            <FilterProducts />
            <ProductGrid />
        </div>
    )
}

export default ProductsContainer