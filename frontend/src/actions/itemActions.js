import axios from 'axios';
import { ITEM_DETAILS_FAIL, ITEM_DETAILS_REQUEST, ITEM_DETAILS_SUCCESS, ITEM_LIST_FAIL, ITEM_LIST_REQUEST, ITEM_LIST_SUCCESS } from "../constants/itemConstants";

const listItems = () => async (dispatch) => {
    try{
        dispatch({type: ITEM_LIST_REQUEST});
        const { data } = await axios.get("/api/items");
        dispatch({type: ITEM_LIST_SUCCESS, payload: data});
    } 
    catch(error) {
        dispatch({type: ITEM_LIST_FAIL, payload: error.message});
    }
    
}

const detailsItem = (itemId) => async (dispatch) => {
    try {
        dispatch({type: ITEM_DETAILS_REQUEST, payload: itemId});
        const {data} = await axios.get("/api/items/" + itemId);
        dispatch({type:ITEM_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: ITEM_DETAILS_FAIL, payload: error.message});
    }
}
export { listItems, detailsItem }