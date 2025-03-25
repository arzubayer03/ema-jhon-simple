import React from 'react';
import { Button } from '@headlessui/react';
import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product, handleAddProduct }) {
    const { name, img, seller, price, stock } = product;

    return (
        <div className='flex space-x-6 border-b-2 border-gray-400 p-4'>
            <div>
                <img src={img} alt={`Image of ${name}`} className="max-w-26" />
            </div>
            <div>
                <h4 className='text-blue-600 font-semibold'>{name}</h4>
                <p className='text-gray-700'>By: {seller}</p>
                <p className='text-lg font-bold'>${price}</p>
                <p className='text-red-600'>Only {stock} left in stock. Order soon.</p>
                <Button onClick={()=>handleAddProduct(product)} className="inline-flex items-center gap-2 rounded-md bg-orange-500 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600 focus:ring-2 focus:ring-white cursor-pointer">
                    <FaShoppingCart />
                    <span>Add to cart</span>
                </Button>
            </div>
        </div>
    );
}

export default ProductCard;
