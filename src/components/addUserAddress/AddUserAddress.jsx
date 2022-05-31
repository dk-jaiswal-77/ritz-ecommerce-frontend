import "./addUserAddress.css";
import { states } from "../../data/data";

export default function AddUserAddress(){
    return (
        <div>
            <form className="addUserAddress_form">

                <h2 className="addUserAddress_form_heading">Add a new address</h2>

                <div className="flex-direction-column">
                    <label htmlFor="country">Country/Region</label>
                    <select id="country" className="entry">
                        <option value={null}>Choose a country</option>
                        <option value="India">India</option>
                        <option value="Nepal">Nepal</option>
                    </select>
                </div>

                <div className="flex-direction-column">
                    <label htmlFor="name">Full name</label>
                    <input type="text" id="name" className="entry" />
                </div>

                <div className="flex-direction-column">
                    <label htmlFor="mobile">Mobile number</label>
                    <input type="text" id="mobile" className="entry" />
                </div>

                <div className="flex-direction-column">
                    <label htmlFor="pincode">Pincode</label>
                    <input type="text" id="pincode" className="entry" placeholder="6 digits [0-9] PIN code" />
                </div>

                <div className="flex-direction-column">
                    <label htmlFor="house">Flat, House no., Building, Company, Apartment</label>
                    <input type="text" id="house" className="entry" />
                </div>

                <div className="flex-direction-column">
                    <label htmlFor="area">Area, Street, Sector, Village</label>
                    <input type="text" id="area" className="entry" />
                </div>

                <div className="flex-direction-column">
                    <label htmlFor="landmark">Landmark</label>
                    <input type="text" id="landmark" className="entry" />
                </div>

                <div className="town_and_state_container">
                    <div className="flex-direction-column">
                        <label htmlFor="city">Town/City</label>
                        <input type="text" id="city" className="entry" />
                    </div>
                    <div className="flex-direction-column">
                        <label htmlFor="state">State</label>
                        <select id="state" className="entry">
                            <option value={null}>Choose a state</option>
                            {
                                states.India.map(state => {
                                    return <option key={state} value={state}>{state}</option>
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className="default_address_check">
                    <input type="checkbox" id="default" />
                    <label htmlFor="default">Make this my default address</label>
                </div>

                <div className="flex-direction-column">
                    <label htmlFor="addressType">Address Type</label>
                    <select id="addressType" className="entry">
                        <option value="home">Home (7 am - 9 pm delivery)</option>
                        <option value="office">Office (10 am - 6 pm delivery)</option>
                    </select>
                </div>

                <div className="submit_btn_container">
                    <input type="submit" value="Add address" className="add_address_btn" />
                </div>

            </form>
        </div>
    );
}