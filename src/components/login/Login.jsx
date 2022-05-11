import {GoTriangleRight} from "react-icons/go";
import {GoTriangleDown} from "react-icons/go";

import "./login.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    
    const backend_uri = "https://ritz-ecommerce-backend.herokuapp.com";
    const navigate = useNavigate();

    const [showOption, setShowOption] = useState(false);
    const [showDetail, setShowDetail] = useState(false);

    const [entry, setEntry] = useState({
        email : "", 
        password : "", 
        keepMeSignedIn : false
    });

    function handleChange(e)
    {
        if(e.target.type === "checkbox")
        {
            setEntry({...entry, [e.target.id] : e.target.checked});
        }
        else
        {
            setEntry({...entry, [e.target.id] : e.target.value});
        }
    }

    async function loginUser(){
        try{
            const res = await fetch(`${backend_uri}/user/login`, {
                method : "POST", 
                body : JSON.stringify(entry), 
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            const res_data = await res.json();
            // console.log(res_data);
            if(res_data.status)
            {
                localStorage.setItem("loginSuccessful", JSON.stringify(res_data));
                navigate("/main");
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <div className="medium_container login_container">
                <h3 className="heading">Sign-In</h3>

                <form className="login_form form" onSubmit={(e)=>{
                    e.preventDefault();
                    loginUser();
                }} >

                    <div className="field">
                        <label htmlFor="email">Email or mobile phone number</label>
                        <input type="text" id="email" className="entry" value={entry.email} onChange={handleChange} />
                    </div>

                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="entry" value={entry.password} onChange={handleChange} />
                    </div>

                    <div className="field">
                        <input type="submit" value="Sign-In" className="entry submit_btn" />
                    </div>  

                    <div className="keepMeSignedIn_title_container medium_size_font">
                        <input type="checkbox" id="keepMeSignedIn" checked={entry.keepMeSignedIn} onChange={handleChange} />
                        <label htmlFor="keepMeSignedIn">Keep me signed in.</label>
                        <span className="detail_word" onClick={() => {setShowDetail(!showDetail)}}>Detail</span>
                        {(showDetail) ? < GoTriangleDown className="detail_icon" /> : < GoTriangleRight className="detail_icon" />}
                    </div>

                    {
                        (!showDetail) ? "" : 
                            <div className="keepMeSignedIn_detail_container medium_size_font">
                                <p>
                                    Choosing "Keep me signed in" reduces the number of times you're asked to Sign-In on this device.
                                </p>
                                <p>
                                    To keep your account secure, use this option only on your personal devices.
                                </p>
                            </div>
                    }

                </form>

                <div className="field agree_statement medium_size_font">
                    By continuing, you agree to Ritz's <Link to={""} className="agree_statement_link">Conditions of Use</Link> and <Link to={""} className="agree_statement_link">Privacy Notice</Link>.
                </div>

                <div className="field help_options_container">
                    <div className="help_option" onClick={() => {
                        setShowOption(!showOption);
                    }}>
                        {(showOption) ? < GoTriangleDown className="help_triangle_icon" /> : <GoTriangleRight className="help_triangle_icon" /> }
                        <Link to={""} className="help_option_link" >Need help?</Link>
                    </div>
                    {
                        (!showOption) ? "" : 
                            <div className="help_options">
                                <div className="help_option">
                                    < GoTriangleRight className="help_triangle_icon help_triangle_icon_hidden" />
                                    <Link to={""} className="help_option_link" >Forgot Password</Link>
                                </div>
                                <div className="help_option">
                                    < GoTriangleRight className="help_triangle_icon help_triangle_icon_hidden" />
                                    <Link to={""} className="help_option_link" >Other issues with Sign-In</Link>
                                </div>
                            </div>
                    }
                    
                </div>

            </div>

            <div className="back_to_register_page_container">
                <div className="new_to_amazon_container">
                    <span className="empty_span"></span>
                    <span className="medium_size_font">New to Amazon?</span>
                    <span className="empty_span"></span>
                </div>

                <button className="back_to_register_page_btn" onClick={() => {
                    navigate("/register");
                }} >
                    Create your Ritz account
                </button>
            </div>

        </div>
    );
}