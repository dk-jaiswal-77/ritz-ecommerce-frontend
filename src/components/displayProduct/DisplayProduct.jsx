import "./displayProduct.css";
import {BsStarFill} from "react-icons/bs";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DisplayProduct(){

    const products = useSelector(state => (state.products.products));
    const navigate = useNavigate();

    return (
        <div className="displayProduct_main_container">
            <div className="displayProduct_container">
                {
                    products.map(product => {
                        return (
                            <div className="product" onClick={() => {
                                localStorage.setItem("selectedProduct", JSON.stringify(product));
                                navigate("/main/productDetail");
                            }}>

                                <div className="product_image_container">
                                    <img src= {product.images[Object.keys(product.images)[0]][0]} alt="Product" className="product_image" />
                                </div>

                                <div className="colour_options">
                                    {Object.keys(product.images).map((colour) => {
                                        return (
                                            <span key={Date.now() + "_" + colour} className="colour_cover" style={{borderColor : "transparent"}}>
                                                <span className="colour_body" id={colour} style={{backgroundColor : colour}} ></span>    
                                            </span>
                                        );
                                    })}
                                </div>

                                <div className="product_description">{product.description}</div>

                                <div className="rating_container">
                                    <div className="rating">
                                        <span>{product.rating}</span>
                                        < BsStarFill className="rating_star_icon" />
                                    </div>
                                    <div className="rating_count">{product.rating_count}</div>
                                </div>

                                <div className="price_container">
                                    <span className="price_symbol">&#8377;</span>
                                    <span className="price_amount">{product.min_price}</span>
                                    <span className="dash_between_prices">{"-"}</span>
                                    <span className="price_symbol">&#8377;</span>
                                    <span className="price_amount">{product.max_price}</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>  
        </div>
    );
}