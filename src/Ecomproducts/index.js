import React from "react";
import "./index.css"

import { GetProducts } from "./hooks/useGetProducts";
import ProductCard from "../Atoms/ProductCard";

const ItemProduct=()=>{
    const {products,error,loading}=GetProducts();
    console.log({products})

    return(
      
        <div id="products">
          {loading && <h2>loading...</h2>}
          {error.length> 0 && <h2>{error}</h2>}
          {products.length> 0? products.map((item)=>(
            <ProductCard
            key={item.id}
            image={item.image}
            title={`${item.title}`}
            price={item.price}
            />
          )):!loading &&<h2>No products found</h2>}
        </div>
    )
}
export default ItemProduct;