import Breadcrumb from '@/app/components/shoppageComponent/ProductPageComp/breadcrumb'
import React from 'react'
import ProductDetail from '@/app/components/shoppageComponent/ProductPageComp/productDetail'
import ProductTabs from '@/app/components/shoppageComponent/ProductPageComp/productTabs'
import RelatedProduct from '@/app/components/shoppageComponent/ProductPageComp/relatedProduct'


const ProductPage = () => {
  return (
    <div>
      <Breadcrumb/>
      <ProductDetail/>
      <ProductTabs/>
      <RelatedProduct/>
    </div>
  )
}

export default ProductPage
