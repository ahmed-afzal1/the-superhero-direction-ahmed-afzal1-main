import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let totalQuantity = 0;
    for(const product of cart){
        const {lowestPrice} = product
   
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + lowestPrice * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    return (
        <div className="cart-area">
            <h3>Order Summary</h3>
            <h5>Items orderd : {totalQuantity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <ul>
                {cart.map(product =><li key={Math.random()}>{product.name}</li>)}
            </ul>
        </div>
    );
};

export default Cart;