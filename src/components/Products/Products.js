import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import  './Products.css';

const Products = () => {
const [products, setProducts] = useState([])

useEffect( () =>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))

}, [])

    return (
        <div  className="main-container">

<div className="products-container">

{
    products.map (product=><Product
     key={product.id}
     product={product}
     
     ></Product>)
}

</div>

<div className="cart-container">

<h1>helllow cart</h1>

    </div>
            
    </div>
    );
};

export default Products;