import "./navbar.css";
import companyLogo from "../../assets/ritz.png";
import {GoLocation} from "react-icons/go";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {GoTriangleDown} from "react-icons/go";
import {GoSearch} from "react-icons/go";

import NavbarCard from "./card/NavbarCard"; 

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(){

    const cartCount = useSelector(state => state.cart.cart.length);
    // console.log(cartCount);

    return (
        <div className="navbar">
            <Link to="" className="navbarCompanyLogo navbarLink">
                {/* company logo */}
                <img src={companyLogo} alt="navbar_ritz_logo" />
                <span>.in</span>
            </Link>

            <Link to="" className="navbarUserAddress navbarLink">
                {/* user address */}
                < GoLocation className="navbarLocationIcon" />
                <NavbarCard upper={"Deliver to Dhirendra"} lower={"Raxaul 12345"} />
            </Link>

            <form className="navbarSearchForm">
                {/* search bar */}
                <select id="for" className="entry">
                    <option value="all">All</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="baby">Baby</option>
                    <option value="boy">Boy</option>
                    <option value="girl">Girl</option>
                </select>

                <label htmlFor="navbarSearchForm" ><input type="text" id="type" className="entry" /></label>

                <button className="submitSearchBtn entry"><GoSearch className="searchIcon" /></button>
            </form>

            <Link to="" className="navbarUserProfile navbarLink">
                {/* user profile */}
                <NavbarCard upper={"Hello, Dhirendra"} lower={"Account & Lists"} />
                < GoTriangleDown className="navbarTriangleDownIcon" />
            </Link>

            <Link to="" className="navbarReturnsAndOrders navbarLink">
                {/* returns & orders */}
                <NavbarCard upper={"Returns"} lower={"& Orders"} /> 
            </Link>

            <Link to="/main/cart" className="navbarUserCart navbarLink">
                {/* cart */}
                < AiOutlineShoppingCart className="navbarCartIcon" />
                <NavbarCard upper={cartCount} lower={"Cart"} />
            </Link>
        </div>
    );
}

