import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Auction.css'


const Auction = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('./auctions.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    },[]);


    const handleAddToCart = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-9 col-md-8">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                        }
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
 
        </div>
    );
};

export default Auction;