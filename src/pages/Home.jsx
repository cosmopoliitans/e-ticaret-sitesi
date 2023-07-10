import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../redux/actions/products'
import ProductsCard from '../components/ProductsCard'

const Home = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(productsAction())
  }, [dispatch])

  console.log("products", products)
  return (
    <div className='flex flex-wrap justify-center'>
      {
        products && products.map((prd, i) => (
          <ProductsCard key={i} prd={prd}/>
        ))
      }
    </div>
  )
}

export default Home
