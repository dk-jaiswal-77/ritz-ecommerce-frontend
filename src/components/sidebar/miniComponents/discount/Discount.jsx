import "./discount.css";
import { useDispatch } from "react-redux";
import getProductAction from "../../../../redux/getProduct/action";

export default function Discount({discounts, property}){

    const dispatch = useDispatch();

    return (
        <div className="sidebar_discount_container">
            {discounts.map((discount, index) => {
                return (
                    <span key={Date.now()+"_"+index} className="discount_filter" onClick={()=>{
                        const product_query_params = JSON.parse(localStorage.getItem("product_query_params"));

                        if(product_query_params[property] === discount)
                        {
                            // already exists // remove it
                            delete product_query_params[property];
                        }
                        else
                        {
                            // add or update key
                            product_query_params[property] = discount;
                        }

                        // updating localStorage
                        localStorage.setItem("product_query_params", JSON.stringify(product_query_params));

                        // fetch products & update store
                        dispatch(getProductAction());

                    }} >{discount}% Off or more</span>
                );
            })}
        </div>
    );
}