import updateCartAction from "../updateCart/action";

export default function saveCartAction(add_to_cart_product){

    return async (dispatch) => {
        try{
            const token = JSON.parse(localStorage.getItem("loginSuccessful")).token;

            const res = await fetch("https://ritz-ecommerce-backend.herokuapp.com/cart", {
                method : "POST", 
                body : JSON.stringify(add_to_cart_product),
                headers : {
                    "Content-Type" : "application/json", 
                    "authorization" : `Bearer ${token}`
                }
            });

            const res_data = await res.json();
            // console.log(res_data);

            if(res_data.status)
            {
                // update store
                dispatch(updateCartAction(res_data.cart));
            }
        }catch(error){
            console.log(error);
        }
    }
}