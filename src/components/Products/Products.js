import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import  './Products.css';

const Products = () => {
const [products, setProducts] = useState([]);
const [gun, setGun] = useState([]);

useEffect( () =>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))

}, []);

const addToCart = (product) =>{
    const newGun =[...gun, product]
    setGun(newGun)
    console.log(product.name);

}

    return (
        <div  className="main-container">

<div className="products-container">

{
    products.map (product=><Product
     key={product.id}
     product={product}
     addToCart={addToCart}
     
     ></Product>)
}

</div>

<div className="cart-container">

<h1>Selected Guns</h1>

   

    </div>
             
    </div>
    );
};

export default Products;