import React from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import InfoNursery from '../../components/InfoNursery/InfoNursery'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'

const ProductListing = () => {
    return (
        <div className="app">
        <Header />
        <SearchBar />
        <InfoNursery />
        <ProductsContainer />
      </div>
    )
}

export default ProductListing