export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
)

export const initialState = {
    basket: [],
    user: null
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // add to basket logic goes here
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            // remove from basket logic goes here
            let newBasket = [...state.basket];
            let ind = state.basket.findIndex((item) => item.id === action.id);

            if(ind >= 0){
                newBasket.splice(ind, 1);

            }
            else {
                console.log("item not found");
            }

            return { 
                ...state, 
                basket: newBasket 
            };
        default:
            return { state };
    }
}

export default reducer;
