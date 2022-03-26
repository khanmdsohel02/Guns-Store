import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Sideber from '../Sideber/Sideber';
import  './Products.css';

const Products = () => {
const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);
// console.log(cart.img);
useEffect( () =>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))

}, []);

const addToCart = (product) =>{
    const newCart =[...cart, product]
    setCart(newCart)
    // console.log(newcart);

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
<Sideber cart={cart}></Sideber>
 </div>
         
    </div>
    );
};

export default Products;