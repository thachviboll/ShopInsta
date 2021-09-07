import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../actions/cartActions';
import {Link} from 'react-router-dom';

function CartScreen(props) {
    
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const itemId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;

    const removeFromCartHandler = (itemId) => {
        dispatch(removeFromCart(itemId));
    }

    const checkoutHandler = () =>{
        props.history.push("/signin?redirect=shipping");
    }
    const dispatch = useDispatch();
    useEffect(() => {
        if (itemId){
            dispatch(addToCart(itemId, qty));
        }
    }, [])

    return <div className="cart">
        <div className = "cartList">
            <ul className="cartListContainer">
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        Price
                    </div>
                </li>
                {
                    cartItems.length === 0 ?
                    <div>
                        Cart is Empty
                    </div> 
                    : 
                    cartItems.map(cItem =>
                        <li>
                            <div>
                            <img src={cItem.image} alt="item" />
                            <div className="cartName">
                                <Link to={"/item/" + cItem.item}>
                                {cItem.name}
                                </Link>
                            </div>
                            <div>
                                Qty:
                                    <select value={cItem.qty} onChange={(e) => dispatch(addToCart(cItem.item, e.target.value))}>
                                        <option value="1"> 1 </option>
                                        <option value="2"> 2 </option>
                                        <option value="3"> 3 </option>
                                    </select> 
                                    <button type="button" className="button" onClick={() => removeFromCartHandler(cItem.item)}>
                                        Delete
                                    </button>           
                            </div>  
                            </div>
                            <div>
                                ${cItem.price} 
                            </div>    
                        </li>      
                        )
                }
            </ul>
        </div>    
        <div className="cartActions">
            <h3>
            Subtotal ({cartItems.reduce((a,c ) => a + c.qty, 0)} Items)
            :
                $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h3> 
            <button onClick={checkoutHandler} className="button primary" diabled={cartItems.length === 0}>
                Proceed to Checkout
            </button>   
        </div>
    </div>
}

export default CartScreen;