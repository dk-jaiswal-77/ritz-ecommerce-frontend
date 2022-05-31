import "./price.css";
import getProductAction from "../../../../redux/getProduct/action";
import { useDispatch } from "react-redux";

export default function Price({prices, property}){

    const dispatch = useDispatch();

    return (
        <div className="sidebar_price_container">
            {prices.map((price, index) => {
                if(index === 0)
                {
                    // first or min price filter
                    return (
                        <span key={index} onClick={() => {
                            const product_query_params = JSON.parse(localStorage.getItem("product_query_params"));

                            if(product_query_params["min_price"] === price[0])
                            {
                                // already present // remove it
                                delete product_query_params["min_price"];
                                delete product_query_params["max_price"];
                            }
                            else
                            {
                                product_query_params["min_price"] = price[0];
                                product_query_params["max_price"] = price[1];
                            }

                            // updating localStorage
                            localStorage.setItem("product_query_params", JSON.stringify(product_query_params));

                            // fetch products and update store
                            dispatch(getProductAction());

                        }}>{`Under `}&#8377;{price[1]}</span>
                    );
                }
                else if(index === (prices.length-1))
                {
                    // last or max price filter
                    return (
                        <span key={index} onClick={() => {
                            const product_query_params = JSON.parse(localStorage.getItem("product_query_params"));

                            if(product_query_params["min_price"] === price[0])
                            {
                                // already present // remove it
                                delete product_query_params["min_price"];
                            }
                            else
                            {
                                product_query_params["min_price"] = price[0];
                                delete product_query_params["max_price"];
                            }

                            // updating localStorage
                            localStorage.setItem("product_query_params", JSON.stringify(product_query_params));

                            // fetch products and update store
                            dispatch(getProductAction());

                        }}>{`Over `}&#8377;{price[0]}</span>
                    );
                }
                else
                {
                    // middle price filter
                    return (
                        < span key={index} onClick={() => {
                            const product_query_params = JSON.parse(localStorage.getItem("product_query_params"));

                            if(product_query_params["min_price"] === price[0])
                            {
                                // already present // remove it
                                delete product_query_params["min_price"];
                                delete product_query_params["max_price"];
                            }
                            else
                            {
                                product_query_params["min_price"] = price[0];
                                product_query_params["max_price"] = price[1];
                            }

                            // updating localStorage
                            localStorage.setItem("product_query_params", JSON.stringify(product_query_params));

                            // fetch products and update store
                            dispatch(getProductAction());

                        }} >&#8377;{`${price[0]}`}{" - "}&#8377;{`${price[1]}`}</span>
                    );
                }
            })}
        </div>
    );
}