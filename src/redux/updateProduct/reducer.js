export default function updateProductReducer(products={products : []}, {type, payload}){
    switch(type){
        case "UPDATE_PRODUCTS":
            return {products : payload};
        default:
            return products;
    }
}