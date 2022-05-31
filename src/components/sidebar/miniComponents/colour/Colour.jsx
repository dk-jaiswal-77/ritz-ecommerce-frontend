import "./colour.css";

import getProductAction from "../../../../redux/getProduct/action";

import { useDispatch } from "react-redux";

export default function Colour({colours, property}){

    const product_query_params = JSON.parse(localStorage.getItem("product_query_params"));
    
    const dispatch = useDispatch();

    return (
        <div className="sidebar_colour_container">
            {colours.map(colour => {
                return (
                    <span key={colour} className={property} style={{backgroundColor : colour}} onClick={()=>{
                        console.log(colour);
                        console.log(property);
                        if(product_query_params[property] === colour)
                        {
                            // already present // remove it
                            delete product_query_params[property];
                        }
                        else
                        {
                            // add or update it
                            product_query_params[property] = colour;
                        }

                        // updating localStorage
                        localStorage.setItem("product_query_params", JSON.stringify(product_query_params));

                        // fetch products // update store
                        dispatch(getProductAction());
                    }}></span>
                );
            })}
        </div>
    );
}