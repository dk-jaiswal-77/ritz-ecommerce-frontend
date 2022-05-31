import "./productDetail.css";
import {BsStarFill} from "react-icons/bs";
import { useState, useRef } from "react";
import saveCartAction from "../../redux/saveCart/action";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProductDetail(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //---------------------------------------------->
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();

    const [selectedProduct, setSelectedProduct] = useState(JSON.parse(localStorage.getItem("selectedProduct")));

    const [selectedColour, setSelectedColour] = useState(JSON.parse(localStorage.getItem("product_query_params")).colour || selectedProduct.colour[0]);
    
    const selectedImage = useRef(selectedProduct.images[selectedColour][0]);

    const [hoverOnColour, setHoverOnColour] = useState(null);

    const [displayImage, setDisplayImage] = useState(selectedProduct.images[selectedColour][0]);

    // --------------------------->
    const [selectedSize, setSelectedSize] = useState(null);
    const [displaySize, setDisplaySize] = useState("Select Size");

    const selectedQty = useRef(1);

    //--------------------------------------------------------->
    function saveToCart(){
        const cartProduct = {
            productId : selectedProduct._id,
            availability : selectedProduct.availability,
            brand : selectedProduct.brand, 
            colour : selectedColour, 
            description : selectedProduct.description,
            image : selectedProduct.images[selectedColour][0],
            seller : selectedProduct.seller,
            standard_size : selectedSize,
            quantity : selectedQty.current,
            price : selectedProduct.price[selectedProduct.standard_size.indexOf(selectedSize)]
        }

        // save product to db, update store
        dispatch(saveCartAction(cartProduct));

        // navigate to cart page
        // navigate("/main/cart");
    }

    return (
        <div className="productDetail_page_container">
            <div className="productDetail_main_container">
                <div className="first_container">
                    {selectedProduct.images[selectedColour].map((image_src) => {
                        return (
                            <img key={image_src} src={image_src} alt="product image" onMouseOver={() => {
                                selectedImage.current = image_src;
                                setDisplayImage(image_src);
                            }} />
                        );
                    })}
                </div>

                <div className="second_container">
                    <img src={displayImage} alt="" />
                </div>

                <div className="third_container">
                    <div className="brand_description_rating_container">

                        <div className="detailPage_brand_store_container">
                            <a href="#" className="productDetail_page_anchor" >visit the {selectedProduct.brand}</a>
                        </div>

                        <div className="detailPage_brand_description_container">{selectedProduct.description}</div>

                        <div className="detailPage_rating_container">
                            <div>
                                <span>
                                    {selectedProduct.rating} 
                                </span>
                                < BsStarFill className="detailPage_rating_star" />
                            </div>
                            
                            <a href="#" className="productDetail_page_anchor" >{selectedProduct.rating_count} ratings</a>
                        </div>
                    </div>

                    <div className="detailPage_price_container">
                        <span className="price_heading">Price:</span>
                        {(selectedSize === null) ? 
                            <span className="price_amount">&#8377;{selectedProduct.min_price}{" - "}&#8377;{selectedProduct.max_price}</span>
                            : 
                            <span className="price_amount">&#8377;{selectedProduct.price[selectedProduct.standard_size.indexOf(selectedSize)]}</span>
                        }
                        <span className="price_detail">(Inclusive of all taxes)</span>
                    </div>

                    <div className="detailPage_colour_container">
                        <div>
                            <span>Colour:</span>
                            <span>{(hoverOnColour === null) ? selectedColour : hoverOnColour}</span>
                        </div>

                        <div>
                            {selectedProduct.colour.map((colour) => {
                                return (
                                    <img key={Date.now()+"_"+ colour} src={selectedProduct.images[colour][0]} onMouseOver={() => {
                                        setHoverOnColour(colour);
                                        setDisplayImage(selectedProduct.images[colour][0]);
                                    }} 
                                    onMouseLeave={()=> {
                                        setHoverOnColour(null);
                                        setDisplayImage(selectedImage.current);
                                    }} 
                                    onClick={()=>{
                                        setSelectedColour(colour);
                                        setDisplayImage(selectedProduct.images[colour][0]);
                                        selectedImage.current = selectedProduct.images[colour][0];
                                    }}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div className="detailPage_size_container">
                        <div>
                            <span>Size:</span>
                            <span>{(displaySize === null) ? "Select Size" : displaySize}</span>
                        </div>

                        <div>
                            {selectedProduct.standard_size.map((size, index) => {
                                return (
                                    <div 
                                        onClick={()=>{
                                            setSelectedSize(size);
                                        }}
                                        onMouseOver={()=>{
                                            setDisplaySize(size);
                                        }}
                                        onMouseLeave={()=>{
                                            setDisplaySize(selectedSize);
                                        }}
                                    >
                                        <span>{size}</span>
                                        {(selectedSize === null) ? "" : <span>&#8377; {selectedProduct.price[index]}</span>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="fourth_container">
                    {
                        (selectedSize === null) ? 
                            <div className="fourth_container_request_to_select_size">
                                <span>To buy, select </span>
                                <span>Size</span>
                            </div>
                            :
                            <div className="price_delivery_seller_quantity_container">

                                <div className="fourth_container_price">
                                    <span>&#8377;</span>
                                    <span>{selectedProduct.price[selectedProduct.standard_size.indexOf(selectedSize)]}</span>
                                    <span>00</span>
                                </div>

                                <div className="fourth_container_delivery_date">
                                    <a href="#" className="productDetail_page_anchor">FREE delivery: </a>
                                    <span>{days[d.getDay()+2]}, {months[d.getMonth()]} {d.getDate()+2}</span>
                                </div>

                                <div className="fourth_container_delivery_address">
                                    {/* delivery address */}
                                </div>

                                <div className="fourth_container_product_availability">
                                    {
                                        (selectedProduct.availability) ? 
                                            <span className="fourth_container_in_stock">In Stock.</span> 
                                            : 
                                            <span className="fourth_container_out_of_stock">Out of Stock.</span>
                                    }
                                </div>

                                <div className="fourth_container_seller">
                                    Sold by <a href="#" className="productDetail_page_anchor">{selectedProduct.seller}</a> and <a href="#" className="productDetail_page_anchor">Fulfilled by Ritz</a>.
                                </div>

                                <div className="fourth_container_product_quantity">
                                    <label htmlFor="quantity">Quantity: </label>
                                    <select id="quantity" onChange={(e)=>{
                                        selectedQty.current = e.target.value;
                                        // console.log(selectedQty.current);
                                    }}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                        <option value={11}>11</option>
                                        <option value={12}>12</option>
                                        <option value={13}>13</option>
                                        <option value={14}>14</option>
                                        <option value={15}>15</option>
                                        <option value={16}>16</option>
                                        <option value={17}>17</option>
                                        <option value={18}>18</option>
                                        <option value={19}>19</option>
                                        <option value={20}>20</option>
                                    </select>
                                </div>

                            </div>
                    }

                    <button className="fourth_container_add_to_cart_btn cart_and_buy_btn" disabled={(selectedSize === null) ? true : false} onClick={saveToCart}>Add to Cart</button>

                    {
                        (selectedSize === null) ?
                            ""
                        :
                            <button className="cart_and_buy_btn fourth_container_buy_now_btn" >Buy Now</button> 
                    }

                </div>
            </div>
        </div>
    );
}