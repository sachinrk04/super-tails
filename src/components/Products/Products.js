import React from "react";
import "./Products.scss";
import Product from "../Product/Product";

const Products = ({ products }) => {
    
    return (
        <div className="products-style">
            { products?.length && products.map((product, index) => {
                return (
                    product?.title?.length > 0 && product?.image?.src.length > 0 ?
                        <div key={index} className="product-style">
                            <Product index={index} product={product} />
                        </div>
                    : null
                )
            })}
        </div>
    )
}

export default Products;
