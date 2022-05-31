import "./main.css";
import {Routes, Route} from "react-router-dom";

// importing components
import Navbar from "../navbar/Navbar";
import Menubar from "../menubar/Menubar";
import Product from "../productPage/Product";
import ProductDetail from "../productDetail/ProductDetail";
import Cart from "../cartPage/Cart";
import AddUserAddress from "../addUserAddress/AddUserAddress";

export default function Main(){
    return (
        <div className="mainContainer">
            <Navbar />
            <Menubar />
            <Routes>
                <Route path="/product" element={< Product />} />
                <Route path="/productDetail" element={< ProductDetail />} />
                <Route path="/cart" element={< Cart />} />
                <Route path="/addUserAddress" element={< AddUserAddress />} />
            </Routes>
        </div>
    );
}