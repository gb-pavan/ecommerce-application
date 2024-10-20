import React from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import InfoNursery from '../../components/InfoNursery/InfoNursery'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import Footer from '../../components/Footer/Footer'

const ProductListing = () => {
    return (
        <div>
        <Header />
        <SearchBar />
        <InfoNursery />
        <ProductsContainer />
        <Footer />
      </div>
    )
}

export default ProductListing