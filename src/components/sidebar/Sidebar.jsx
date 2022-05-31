import "./sidebar.css";
import {typeSidebarData} from "../../data/data";

import { useSelector } from "react-redux";

// importing mini components
import Size from "./miniComponents/size/Size";
import Colour from "./miniComponents/colour/Colour";
import Filter from "./miniComponents/filter/Filter";
import Price from "./miniComponents/price/Price";
import Rating from "./miniComponents/rating/Rating";
import Discount from "./miniComponents/discount/Discount";

export default function Sidebar(){

    const queryParams = useSelector((state) => (state.queryParams.queryParams));

    

    return (
        <div className="sidebar_container">
            {
                (queryParams.for === "men" && queryParams.type === "shirt") ? 
                    <div className="sidebar_type_container">    
                        {/*---------------- numeric_size -----------------------*/}
                        <div className="miniComponent_container">
                            <h5 className="miniComponent_heading">Numeric Size</h5>
                            < Size sizes={typeSidebarData.shirt.numeric_sizes} property="numeric_size" />
                        </div>

                        {/* ----------------standard_size-------------------------- */}
                        <div className="miniComponent_container">
                            <h5 className="miniComponent_heading">Standard Size</h5>
                            < Size sizes={typeSidebarData.shirt.standard_sizes} property="standard_size" />
                        </div>

                        {/* ----------------colours_options-------------------------- */}
                        <div className="miniComponent_container">
                            <h5 className="miniComponent_heading">Colours</h5>
                            < Colour colours={typeSidebarData.shirt.colours} property="colour" />
                        </div>

                        {/* ----------------collar types-------------------------- */}
                        <div className="miniComponent_container">
                            <h5 className="miniComponent_heading">Collar Type</h5>
                            <Filter filters={typeSidebarData.shirt.collar_types} property="collar_type" />
                        </div>

                        {/* ----------------materials-------------------------- */}
                        <div className="miniComponent_container">
                            <h5 className="miniComponent_heading">Material</h5>
                            <Filter filters={typeSidebarData.shirt.materials} property="material" />
                        </div>

                        {/* ----------------occasions-------------------------- */}
                        <div className="miniComponent_container">
                            <h5 className="miniComponent_heading">Occasions</h5>
                            <Filter filters={typeSidebarData.shirt.occasions} property="occasion" />
                        </div>

                        {/* ----------------brands-------------------------- */}
                        <div className="miniComponent_container">
                            <h5 className="miniComponent_heading">Brands</h5>
                            <Filter filters={typeSidebarData.shirt.brands} property="brand" />
                        </div>

                        {/* ----------------price filter-------------------------- */}
                        <div className="miniComponent_container">
                            <h5 className="miniComponent_heading">Price</h5>
                            <Price prices={typeSidebarData.shirt.prices} property="price" />
                        </div>

                        {/* ----------------rating filter-------------------------- */}
                        <div className="miniComponent_container">
                            <h5 className="miniComponent_heading">Customer Rating</h5>
                            <Rating ratings={typeSidebarData.shirt.ratings} property="rating" />
                        </div>

                        {/* ----------------discount filter-------------------------- */}
                        <div className="miniComponent_container">
                            <h5 className="miniComponent_heading">Discount</h5>
                            <Discount discounts={typeSidebarData.shirt.discounts} property="discount"/>
                        </div>

                    </div>
                :
                    ""
            }
        </div>
    );
}