import "./filter.css";
import getProductAction from "../../../../redux/getProduct/action";
import { useDispatch } from "react-redux";

export default function Filter({filters, property}){ 

    const dispatch = useDispatch();

    return (
        <div className="sidebar_miniComponent_container">
            {filters.map(filter => {
                return (
                    <span key={filter} onClick={()=>{
                        const product_query_params = JSON.parse(localStorage.getItem("product_query_params"));

                        if(product_query_params[property] === filter)
                        {
                            // already present with same filter // remove it
                            delete product_query_params[property];
                        }
                        else
                        {
                            // add or update to localStorage
                            product_query_params[property] = filter;
                        }

                        // update localStorage
                        localStorage.setItem("product_query_params", JSON.stringify(product_query_params));

                        // fetch products & update store
                        dispatch(getProductAction());
                    }}>{filter}</span>
                );
            })}
        </div>
    );
}