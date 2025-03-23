import React, { useState } from 'react'

import FakeData from '../../products.json'
import ProductCard from './ProductCard'
import Chart from './Chart'

function Shop() {
    
    const tenData = FakeData.slice(0,10)
    const [product, setProduct] = useState(tenData)
    return (
       <>
       <div className='flex space-x-4'>
        <div className='w-2/3 ms-4 border-r border-gray-300'>
        {product.map(pro=>{return(<ProductCard product={pro}/>)})}
        </div>
        <Chart/>
       </div>
       </> 
    )
}

export default Shop
