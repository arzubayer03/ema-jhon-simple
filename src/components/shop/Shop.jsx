import React, { useState } from 'react'

import FakeData from '../../products.json'
import ProductCard from './ProductCard'
import Cart from './Cart';

function Shop() {
    const tenData = FakeData.slice(0, 10);
    const [product, setProduct] = useState(tenData);
    const [cart, setCart] = useState([])

    const handleAddProduct = (pd) => {
        console.log("Product added!", pd);
        const newCart = [...cart, pd]
        setCart(newCart)
    };

    return (
        <div className="flex space-x-4">
            <div className="w-2/3 ms-4 border-r border-gray-300">
                {product.map((pro) => (
                    <ProductCard 
                        product={pro}
                        handleAddProduct={handleAddProduct} 
                    />
                ))}
            </div>
            <Cart cart={cart}/>
        </div>
    );
}


export default Shop
