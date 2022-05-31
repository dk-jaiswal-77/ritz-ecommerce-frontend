export default function updateQueryParamsReducer(queryParams={queryParams:{}}, {type, payload}){
    switch(type){
        case "UPDATE_QUERY_PARAMS":
            return {queryParams : payload};
        default :
        return queryParams;
    }
}