import {BsInfoLg} from "react-icons/bs";
import {GoTriangleRight} from "react-icons/go";

import { Link } from "react-router-dom";

import "./register.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const backend_uri = "https://ritz-ecommerce-backend.herokuapp.com";

export default function Register(){

    const navigate = useNavigate();

    const [entry, setEntry] = useState({
        name : "", 
        countryCode : "+91", 
        mobile : "", 
        email : "", 
        password : "", 
        userType : "consumer"
    });

    function handleChange(e)
    {
        setEntry({...entry, [e.target.id] : e.target.value});
    }

    async function registerUser()
    {
        try{
            const res = await fetch(`${backend_uri}/user/register`, {
                method : "POST", 
                body : JSON.stringify(entry), 
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            const res_data = await res.json();
            if(res_data.status)
            {
                return navigate("/");
            }
            console.log(res_data);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="medium_container register_container">
            <h3 className="heading">Create Account</h3>

            <form className="register_form form" onSubmit={(e) => {
                e.preventDefault();
                registerUser();
            }} >

                <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" className="entry" placeholder="First and last name" value={entry.name} onChange={handleChange} />
                </div>

                <div className="field">
                    <label htmlFor="mobile">Mobile number</label>
                    <div className="contact_container">
                        <select id="countryCode" className="entry" value={entry.countryCode} onChange={handleChange} >
                            <option value="+91">India +91</option>
                            <option value="+977">Nepal +977</option>   
                        </select>
                        <input type="text" id="mobile" className="entry" placeholder="Mobile number" value={entry.mobile} onChange={handleChange} />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="entry" value={entry.email} onChange={handleChange} />
                </div>

                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="entry" placeholder="At least 6 characters" value={entry.password}    onChange={handleChange} />
                    <p className="small_size_font password_note">
                        <BsInfoLg className="noteLogo" />
                        <span>Passwords must be at least 6 characters.</span>
                    </p>
                </div>

                <div className="field medium_size_font phone_verification_message_container">
                    <span>We will send you a text to verify your phone.</span>
                    <span>Message and Data rates may apply.</span>
                </div>

                <div className="field">
                    <input type="submit" value="Continue" className="entry submit_btn" />
                </div>

            </form>

            <div className="extra_options field">
                <div className="option medium_size_font">
                    <span>Already have an account?</span>
                    <Link to="/" className="link">
                        <span>Sign In</span>
                        < GoTriangleRight className="rightTriangle" />
                    </Link>
                </div>
                <div className="option medium_size_font">
                    <span className="medium_size_font">Buying for work?</span>
                    <Link to="" className="link">
                        <span>Create a free business account</span>
                        < GoTriangleRight className="rightTriangle" />
                    </Link>
                </div>
            </div>
        </div>
    );
}