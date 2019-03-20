export const ADD_TO_PRODUCTS = 'ADD_TO_PRODUCTS';

export function addToProducts(name) {
    return {
        type: ADD_TO_PRODUCTS,
        payload: { name }
    }
}
