const data = require('../data/product_list.json')
const initialState = {
    products: data,
    pages: 15
}
const itemsPerPage=15
const productReducer = (state = initialState, action) => {
     switch(action.type){
         case "GET_PRODUCTS": return {
            ...state,
             products: data.slice(action.payload*itemsPerPage, action.payload*itemsPerPage+itemsPerPage) 
         }
         case "GET_PAGES": return {
           ...state,
            pages: data.length/15
        }
         default: return state
     }
}
export default productReducer