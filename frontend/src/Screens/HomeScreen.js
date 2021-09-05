import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { listItems } from '../actions/itemActions';
import ItemScreen from './ItemScreen';

function HomeScreen(props) {
    const itemList = useSelector(state => state.itemList);
    const {items, loading, error } = itemList;
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            dispatch(listItems());
        }
        fetchData();
        return () => {
            //
        };
    }, [])
    return loading ? <div> Loading... </div> :
    error ? <div>{error}</div> :
    <ul className="allItems">
    {
        items.map(item =>
          <li key={item._id}>
        <div className="item">   
                <Link to={"/item/" + item._id}><img className="itemImage" src={item.image} alt="Item"/></Link>

            <div className="itemName">
                <Link to={"/item/" + item._id}>{item.name}</Link>
            </div>
            <div className="itemRating">
                {item.rating} Stars {item.numReviews}
            </div>
            <div className="itemPrice">
                ${item.price}
            </div>
        </div>    
    </li>)       
    }
                            
</ul>  
}

export default HomeScreen;