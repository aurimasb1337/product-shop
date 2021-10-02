export const getProductsByPage = (page) => {
    return {
        type: "GET_PRODUCTS",
        payload: page
    }
}

export const getPages = () => {
    return {
        type: "GET_PAGES",
    }
}