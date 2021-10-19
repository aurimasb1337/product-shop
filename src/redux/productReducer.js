const data = require('../data/product_list.json')
const itemsPerPage=15
const initialState = {
    products: data,
    pages: itemsPerPage
}

const productReducer = (state = initialState, action) => {
     switch(action.type){
         case "GET_PRODUCTS": return {
            ...state,
             products: data.slice(action.payload*itemsPerPage, action.payload*itemsPerPage+itemsPerPage) 
         }
         case "GET_PAGES": return {
           ...state,
            pages: data.length/itemsPerPage
        }
         default: return state
     }
}
export default productReducer
