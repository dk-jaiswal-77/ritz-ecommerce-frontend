import {BsInfoLg} from "react-icons/bs";
import {GoTriangleRight} from "react-icons/go";

import { Link } from "react-router-dom";

import "./register.css";

export default function Register(){
    return (
        <div className="medium_container register_container">
            <h3 className="heading">Create Account</h3>

            <form className="register_form form">

                <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" className="entry" placeholder="First and last name" />
                </div>

                <div className="field">
                    <label htmlFor="mobile">Mobile number</label>
                    <div className="contact_container">
                        <select id="countryCode" className="entry">
                            <option value="IN +91">India +91</option>
                            <option value="NP +977">Nepal +977</option>   
                        </select>
                        <input type="text" id="mobile" className="entry" placeholder="Mobile number" />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="entry" />
                </div>

                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="entry" placeholder="At least 6 characters" />
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