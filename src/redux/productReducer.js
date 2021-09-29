const data = require('../data/product_list.json')
const initialState = {
    products: data
}
const itemsPerPage=15
const productReducer = (state = initialState, action) => {
     switch(action.type){
         case "GET_PRODUCTS": return {
           
             products: data.slice(action.payload*itemsPerPage, action.payload*itemsPerPage+itemsPerPage) 
         }
         default: return state
     }
}
export default productReducer