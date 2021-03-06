import  { ADD_TO_PRODUCTS }  from '../actions/products-actions';

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_PRODUCTS: {
            return [...state, action.payload]
        }

        default:
            return state;
    }
}
