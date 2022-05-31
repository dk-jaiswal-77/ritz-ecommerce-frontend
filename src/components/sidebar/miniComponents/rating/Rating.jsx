import "./rating.css";
import {AiOutlineStar} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";

import { useDispatch } from "react-redux";
import getProductAction from "../../../../redux/getProduct/action";

export default function Rating({ratings, property}){

    const dispatch = useDispatch();

    function updateRating(rating){
        const product_query_params = JSON.parse(localStorage.getItem("product_query_params"));

        if(product_query_params["rating"] === rating)
        {
            // already present // remove it
            delete product_query_params["rating"];
        }
        else
        {
            product_query_params["rating"] = rating;
        }

        // update localStorage
        localStorage.setItem("product_query_params", JSON.stringify(product_query_params));

        // fetch products & update store
        dispatch(getProductAction());
    }

    return (
        <div className="sidebar_rating_container">
            <div className="rating_filter" onClick={()=>{
                updateRating(ratings[0]);
            }} >
                < AiFillStar className="star_fill star" />
                < AiFillStar className="star_fill star" />
                < AiFillStar className="star_fill star" />
                < AiFillStar className="star_fill star" />
                < AiOutlineStar className="star_outline star"/>
                <span>{" & Up"}</span>
            </div>

            <div className="rating_filter" onClick={()=>{
                updateRating(ratings[1]);
            }}>
                < AiFillStar className="star_fill star" />
                < AiFillStar className="star_fill star" />
                < AiFillStar className="star_fill star" />
                < AiOutlineStar className="star_outline star"/>
                < AiOutlineStar className="star_outline star"/>
                <span>{" & Up"}</span>
            </div>

            <div className="rating_filter" onClick={()=>{
                updateRating(ratings[2]);
            }}>
                < AiFillStar className="star_fill star" />
                < AiFillStar className="star_fill star" />
                < AiOutlineStar className="star_outline star"/>
                < AiOutlineStar className="star_outline star"/>
                < AiOutlineStar className="star_outline star"/>
                <span>{" & Up"}</span>
            </div>

            <div className="rating_filter" onClick={()=>{
                updateRating(ratings[3]);
            }}>
                < AiFillStar className="star_fill star"/>
                < AiOutlineStar className="star_outline star"/>
                < AiOutlineStar className="star_outline star"/>
                < AiOutlineStar className="star_outline star"/>
                < AiOutlineStar className="star_outline star"/>
                <span>{" & Up"}</span>
            </div>
        </div>
    );
}