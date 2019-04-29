import React from "react";
import { Header } from "semantic-ui-react";
import ProductsData from "./ProductsData";

function Product(props) {
    return (
        <>
            <div>
                <h2>{props.product.name}</h2>
                <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
            </div>
            
        </>
    )
}

export default Product;