import updateProductAction from "../updateProduct/action";

export default function getProductAction(){
    return async (dispatch)=>{
        try{
            const res = await fetch(`https://ritz-ecommerce-backend.herokuapp.com/products/getProducts`, {
                method : "POST", 
                body : localStorage.getItem("product_query_params"), 
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            const {status, products} = await res.json();
            if(status)
            {
                // update products to store
                dispatch(updateProductAction(products));
            }
        }catch(error){
            console.log(error);
        }
    }
}