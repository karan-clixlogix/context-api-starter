import React from 'react';
import Cars from "../cars";
import Users from "../users";

const ProductList = () => {
    return (
        <div className="product-list">
            <h2>Product list:</h2>
            <Cars/>
            <Users/>
        </div>
    );
};

export default ProductList;