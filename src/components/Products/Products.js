import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Sideber from '../Sideber/Sideber';
import  './Products.css';

const Products = () => {
const [products, setProducts] = useState([]);
const [gun, setGun] = useState([]);
// console.log(gun);
useEffect( () =>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))

}, []);

const addToCart = (product) =>{
    // console.log(product);
    const newGun =[...gun, product]
    setGun(newGun)
    // console.log(newGun);

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
<Sideber gun={gun}></Sideber>
 </div>
         
    </div>
    );
};

export default Products;