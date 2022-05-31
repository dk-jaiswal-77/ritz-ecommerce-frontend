import "./menubar.css";
import { forData } from "../../data/data";
import getProductAction from "../../redux/getProduct/action";
import updateQueryParamsAction from "../../redux/updateQueryParams/action";

import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Menubar(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [hoverOn, setHoverOn] = useState(null);
    const mousePosition = useRef(); // {current : undefined}

    return (
        <div className="menubarAndPopup">
            <div className="menubar">
                <span id="all" className="menubar_for">All</span>

                <span id="men" className="menubar_for" onMouseOver={(e) => {
                    // screenX
                    mousePosition.current = e.clientX;
                    setHoverOn(e.target.id);
                }}>Men</span>

                <span id="women" className="menubar_for" onMouseOver={(e) => {
                    // screenX
                    console.log(e);
                    mousePosition.current = e.clientX;
                    setHoverOn(e.target.id);
                }}>Women</span>

                <span id="baby" className="menubar_for">Baby</span>
                <span id="boy" className="menubar_for">Boy</span>
                <span id="girl" className="menubar_for">Girl</span>
            </div>
            {
                (hoverOn == null) ? "" : 
                <div className="menubar_popup_background">

                    <div className="menubar_popup" style={{left : mousePosition.current +"px"}} onMouseLeave={() => {
                        setHoverOn(null);
                    }} >
                        {
                            Object.keys(forData[hoverOn]).map((key)=>{
                                return (
                                    <div key={key} className="popupOuterContainer">
                                        <h4>{key}</h4>
                                        {forData[hoverOn][key].map(type => {
                                            return (
                                                <span key={type} className={type} onClick={(e) => {
                                                    // making popup invisible
                                                    setHoverOn(null);

                                                    const product_query_params = {for : hoverOn, type : e.target.className};

                                                    // saving query params to localStorage
                                                    localStorage.setItem("product_query_params", JSON.stringify(product_query_params));

                                                    // updating query params to store
                                                    dispatch(updateQueryParamsAction(product_query_params));

                                                    // fetch products & update to store
                                                    dispatch(getProductAction());


                                                    // navigate to product page
                                                    navigate("/main/product");
                                                }} >{type}</span>
                                            );
                                        })}
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
            }
        </div>
    );
}

