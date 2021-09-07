import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, } from "../constants/cartConstants";


const addToCart = (itemId, qty) => async (dispatch) => {
    try{
        const {data} = await Axios.get("/api/items/" + itemId);
        dispatch({type: CART_ADD_ITEM, payload:{
            item: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            stock: data.stock,
            qty
        }
    });
    }catch(error) {

    }
}

const removeFromCart = (itemId) => (dispatch) => {
    dispatch({type: CART_REMOVE_ITEM, payload: itemId});
}
export {addToCart, removeFromCart}