import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { detailsItem } from '../actions/itemActions';

function ItemScreen(props) {
    const [qty, setQty] = useState(1);
    const itemDetails = useSelector(state => state.itemDetails);
    const {item, loading, error} = itemDetails;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(detailsItem(props.match.params.id));
        return () => {
            //
        };
    }, [])

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
    }
    return <div>
        {loading ? <div>Loading...</div>:
            error ? <div>{error}</div>:
            (<div className="details">
            <div className="imgDetails">
                <img src={item.image} alt="image"></img>
            </div>
            <div className="infoDetails">
                <ul>
                    <li>
                        <h4>{item.name}</h4>
                    </li>
                    <li>
                        {item.rating} Stars ({item.numReviews} Reviews)
                    </li>
                    <li>
                        <b> Price: ${item.price} </b>
                    </li>
                    <li>
                        Description:
                       {item.description} 
                    </li>
                </ul>
            </div>
            <div className="actionDetails">
                <ul>
                    <li>
                        Price: ${item.price}
                    </li>
                    <li>
                        Status: {item.stock > 0? "In Stock": "Not Available."}
                    </li>
                    <li>
                        Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                            {[...Array(item.stock).keys()].map(x=>
                                <option key={x+1} value={x+1}>{x+1}</option>
                                )}
                        </select>
                    </li>
                    <li>
                        {item.stock>0? <button onClick={handleAddToCart}>Add to Cart</button>
                        : 
                        <div>Out of Stock </div>}
                    </li>
                </ul>
            </div>
        </div> 
                
        )}
        </div>
}

export default ItemScreen;