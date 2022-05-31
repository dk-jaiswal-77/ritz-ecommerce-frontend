import "./product.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

//importing components
import Sidebar from "../sidebar/Sidebar";
import DisplayProduct from "../displayProduct/DisplayProduct";

export default function Product(){

    const products = useSelector((state) => {
        return state.products.products;
    });

    return (
        <div className="productPage_main_container">
            <Sidebar />
            <DisplayProduct />
        </div>
    );
}