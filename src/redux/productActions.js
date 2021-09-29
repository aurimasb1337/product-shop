export const getProductsByPage = (page) => {
    return {
        type: "GET_PRODUCTS",
        payload: page
    }
}