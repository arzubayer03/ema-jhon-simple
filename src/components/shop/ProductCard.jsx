import React from 'react';
import MyButton from '../ui/MyButton';
import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product }) {
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
                {/* Pass the icon as a component */}
                <MyButton title="Add to cart" icon={FaShoppingCart} />
            </div>
        </div>
    );
}

export default ProductCard;
