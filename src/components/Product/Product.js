import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,condition,bids,lowestPrice,HighestPrice} = props.product;
    const scart = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="auction">
            <div className="single-auction">
                <div className="img">
                    <img src={img} alt="" className="card-img-top"/>
                </div>
                <div className="content">

                <div className="price-area">
                    <span className="number left">
                        ${lowestPrice}
                        <small className="label">lowest :</small>
                    </span>
                    <span className="number right">
                        {isNaN(HighestPrice) ? HighestPrice : '$'+ HighestPrice}
                        <small className="label">Highest :</small>
                    </span>
                </div>

                <h5 className="title">{name}</h5>
                <ul className="bids-info">
                    <li>
                        <h6>{bids}</h6>
                        <p>Bids</p>
                    </li>

                    <li>
                        <h6>Used</h6>
                        <p>{condition}</p>
                    </li>                                      
                </ul>
                <button className="auction-btn btn btn-dark" onClick={()=>props.handleAddToCart(props.product)}>{scart} Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;