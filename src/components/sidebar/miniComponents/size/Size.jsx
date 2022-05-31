import "./size.css";
import getProductAction from "../../../../redux/getProduct/action";
import { useDispatch } from "react-redux";

export default function Size({sizes, property}){

    const dispatch = useDispatch();

    return (
        <div id={property} className="sidebar_size_container">
            {sizes.map((size) => {
                return (
                    <span key={size} onClick={(e)=>{
                        console.log(size);
                        console.log(property);
                        const product_query_params = JSON.parse(localStorage.getItem("product_query_params"));
                        if(product_query_params[property] === size)
                        {
                            // remove key value pair 
                            delete product_query_params[property];
                        }
                        else
                        {
                            // add or update key value pair
                            product_query_params[property] = size;
                        }

                        // update localStorage for product_query_params
                        localStorage.setItem("product_query_params", JSON.stringify(product_query_params));

                        // fetch prducts as per new product_query_params
                        dispatch(getProductAction());
                    }}>{size}</span>
                );
            })}
        </div>
    );
} 