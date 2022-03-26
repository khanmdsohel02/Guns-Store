import React from 'react';
import './Product.css'

const Product = (props) => {
const {img, name, price, category}= props.product
    return (
        <div className='product'>
         <img src={img} alt="" srcset="" />
        <div className="info">
        <h1>{name}</h1>
         <h3>Price: ${price}</h3>
         <h4>Category: {category}</h4>

        </div>
        <button className='cart-btn'>
            <p>ADD TO CART</p>
        </button>
        </div>
    );
};

export default Product;