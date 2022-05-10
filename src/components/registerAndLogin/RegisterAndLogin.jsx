import {Routes, Route} from "react-router-dom";

import "./registerAndLogin.css";

// importing images
import ritzLogo from "../../assets/ritz.png";

// importing components
import Register from '../register/Register';
import Login from '../login/Login';

export default function RegisterAndLogin(){
    return (
        <div className="registerAndLogin_container">
            <div className="ritzLogo_container">
                <img src={ritzLogo} alt="ritz logo" className="ritz_logo" />
            </div>
            <Routes>
                <Route path="/" element={< Login />} />
                <Route path="/register" element={< Register />} />
            </Routes>
        </div>
    );
}