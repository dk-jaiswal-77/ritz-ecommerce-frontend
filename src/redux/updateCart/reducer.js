export default function updateCartReducer(cart={cart:[]}, {type, payload}){
    switch(type){
        case "UPDATE_CART":
            return {cart : payload};
        default:
            return cart;
    }
}