import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer(state={cartItems: []}, action){
    switch(action.type){
        case CART_ADD_ITEM:
            const cItem = action.payload;
            const item = state.cartItems.find(x=> x.item === cItem.item);
            if(item){
                return {
                    cartItems: 
                        state.cartItems.map(x=>x.item === item.item? cItem: x)
                }; 
            }           
            return {cartItems: [...state.cartItems, cItem]};
        case CART_REMOVE_ITEM:
            return {cartItems: state.cartItems.filter(x => x.item !== action.payload)}     
        default: 
            return state
    }
}

export {cartReducer}