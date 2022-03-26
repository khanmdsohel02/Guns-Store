import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './Product.css'


const Product = ( {addToCart, product}) => {
const {img, name, price, category}= product
    return (
        <div className='product'>
         <img src={img} alt="" />
        <div className="info">
        <h1>{name}</h1>
         <h3>Price: ${price}</h3>
         <h4>Category: {category}</h4>

        </div>
        <button onClick={()=>addToCart(product)}  className='cart-btn'>
            <p className='btn-text'>ADD TO CART</p>
            <FontAwesomeIcon icon={faShoppingBasket} size="2x"/>
        </button>
        </div>
    );
};

export default Product;