import React from 'react'

function Cart(props) {
    const cart = props.cart
    const total = cart.reduce((total, prd)=> total + prd.price, 0)
    let shiping = 0
    if(total>30){
        shiping = 4.99
    }
    else if(total>0){
        shiping = 9.99
    }

    const vat = total / 10
    const grandTotal = total + shiping + vat

    const formatNumber = (num)=>{
        const precision = num.toFixed(2)
        return Number(precision)
    }


    return (
        <div>
            <p>Order Summary</p>
            <p>Items Ordered: <strong>{cart.length}</strong> </p>
            <p>Total price: <strong>${formatNumber(total)}</strong>  </p>
            <p>Shipping cost: <strong>${formatNumber(shiping)}</strong> </p>
            <p>Tax & Vat: <strong>${formatNumber(vat)}</strong> </p>
            <p>Total cost: <strong>${formatNumber(grandTotal)}</strong> </p>
        </div>
    )
}

export default Cart
