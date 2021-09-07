import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function SignInScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        
        return () => {
            //
        };
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return <div className="form">
        <form onSubmit={submitHandler} >
            <u1 className="form_countainer">
                <li>
                    <label for="email">
                        Email
                    </label>
                    <input type="email" email="email" id="email" onChnage={(e) => setEmail(e.target.value)} />
                </li>
                <li>
                    <label for="password"> Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        Password
                </li>
                <li>
                    <button type="submit" className="button primary"> SignIn </button>
                </li>
                <li>
                    New to ShopInsta?
                </li>
                <li>
                    <Link to="/register"> Register for an account </Link>
                </li>
            </u1>
        </form>
    </div>
}

export default SignInScreen;