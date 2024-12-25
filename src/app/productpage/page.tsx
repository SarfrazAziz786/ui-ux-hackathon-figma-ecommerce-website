import React from 'react'
import ProductDetail from '@/app/components/shoppageComponent/ProductPageComp/productDetail'
import ProductTabs from '@/app/components/shoppageComponent/ProductPageComp/productTabs'
import RelatedProduct from '@/app/components/shoppageComponent/ProductPageComp/relatedProduct'
import SelectedProduct from '@/app/components/shoppageComponent/ProductPageComp/SelectedProduct'


const ProductPage = () => {
  return (
    <div >
      <SelectedProduct/>
      <ProductDetail/>
      <ProductTabs/>
      
      <RelatedProduct/>
      
    </div>
  )
}

export default ProductPage
